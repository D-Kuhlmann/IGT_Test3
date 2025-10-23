import logging, sys, struct
import threading
from typing import Tuple, Dict, Optional
from dataclasses import dataclass
import time
import can
from can.interfaces.ixxat import get_ixxat_hwids
from tauri_app.Models.data import TSOState
from ..CArm import c_arm
import signal
import anyio
import asyncio

logger = logging.getLogger("TSOListener")

# Global variable to store the last state
lastState = ("None", None)


@dataclass
class AxisRange:
    """Defines the input range for an analog control axis"""
    min_val: int
    max_val: int
    
    def normalize(self, value: int) -> float:
        """Convert raw value to normalized -1.0 to 1.0 range"""
        if value == 0:
            return 0.0
        range_size = self.max_val - self.min_val
        return 2.0 * (value - self.min_val) / range_size - 1.0


# Range definitions 
symmetric_100 = AxisRange(-100, 100)
symmetric_128 = AxisRange(-128, 127)
signed_byte = AxisRange(-128, 127)

# Analog control definitions - controls not listed here default to binary behavior
ANALOG_CONTROLS: Dict[str, AxisRange] = {
    "Carm": symmetric_100,
    # Add more analog controls as needed
}

# Controls that need to have their values flipped
# Format: Control name: [flip_x, flip_y, flip_rot]
FLIPPED_CONTROLS = {
    "DetectorRotate": [True, False, False],  # Flip x-axis only
    "LarmRotatePlusMinus": [True, False, False],  # Flip x-axis only
    "LarmMovePlusMinus": [True, False, False]  # Flip x-axis only
}


class TSOListener(can.Listener):
    """
    A CAN listener that decodes messages coming from an Azurion TSO control panel. This basic listener just prints the controls state whenever it changes.
    Usage: Subclass this class and extend the on_message_received function, possibly making use of the 'states' property.
    """
    class State():
        """
        Represents the state of a single TSO control (button/joystick). 
        Values are normalized floats:
        - Analog controls: -1.0 to 1.0 range
        - Binary controls: 0.0, 1.0, or -1.0
        """
        def __init__(self, x: float = 0.0, y: float = 0.0, rot: float = 0.0, press: bool = False):
            self.x      : float = x
            self.y      : float = y
            self.press  : bool = press
            self.rot    : float = rot
        def __repr__(self) -> str:
            return f"({self.x:.3f} {self.y:.3f} {self.rot:.3f} {self.press})"

    def turn_on_standard_leds(self):
        # turn on standard all leds in  _ledMap, but filter out all with LED as part of the name
        for name, idx in self._ledMap.items():
            if "LED" not in name:
                self.setLED(can.interface.Bus(), idx, True)
                print(f"Turning on LED: {name} (Index: {idx})")
                time.sleep(2)


    def __init__(self, geometry_simulator=None):
        super().__init__()
        
        # Store reference to c_arm_control for routing TSO commands
        self.c_arm_control = c_arm
        
        # Keep geometry_simulator for backward compatibility (but not used directly)
        self.geometry_simulator = geometry_simulator
        
        # WebSocket server integration - will be set when websocket server is available
        self.websocket_server = None
        
        # Event loop for async operations
        self.loop = None

        # FlexArm control mapping
        self._flexArmNameMap = {
            b'\x00\x0c\x4c': "TableHeight",
            b'\x00\x07\x4a': "TableRotate",
            b'\x00\x0c\x92': "DetectorHeight",
            b'\x00\x07\x93': "DetectorRotate",
            b'\x00\x02\x82': "Carm",
            b'\x00\x13\x82': "Larm??",
            b'\x00\x08\x50': "Shutters",
            b'\x00\x0a\x6e': "WedgeLeft",  # up / left
            b'\x00\x0a\x78': "WedgeRight",  # up / right
            b'\x00\x04\x4b': "Table", # Press
            b'\x00\x0e\x4e': "Table",  # Release
            b'\x00\x05\x84': "TableCradle",
            b'\x00\x05\x4d': "TableTilt",
            b'\x00\x05\x64': "FluoroPlusMinus",
            b'\x00\x04\x03': "FluoroStore",
            b'\x00\x04\x09': "FluoroAlarm",
            b'\x00\x04\x1b': "APCZero",
            b'\x00\x04\x24': "APCAccept",
            b'\x00\x05\x5a': "ZoomPlusMinus",
            b'\x00\x04\x05': "FluoroStore",
            b'\x00\x04\x0b': "FluoroSubtract",
            b'\x00\x05\x96': "ArcMovePlusMinus???",
            b'\x00\x05\x98': "ArcRotPlusMinus???",
            b'\x00\x04\x2c': "STOP"
        }

        self._nameMap = {
            b'\x00\x0c\x4c': "TableHeight",
            b'\x00\x07\x4a': "TableRotate",
            b'\x00\x0c\x92': "DetectorHeight",
            b'\x00\x07\x93': "DetectorRotate",
            b'\x00\x02\x82': "Joy1",
            b'\x00\x13\x82': "Carm",
            b'\x00\x08\x50': "Shutters",
            b'\x00\x0a\x6e': "WedgeLeft",  # up / left
            b'\x00\x0a\x78': "WedgeRight",  # up / right
            b'\x00\x04\x4b': "Table", # Press
            b'\x00\x0e\x4e': "Table",  # Release
            b'\x00\x05\x84': "TableCradle",
            b'\x00\x05\x4d': "TableTilt",
            b'\x00\x05\x64': "FluoroPlusMinus",
            b'\x00\x04\x03': "FluoroStore",
            b'\x00\x04\x09': "FluoroAlarm",
            b'\x00\x04\x1b': "APCZero",
            b'\x00\x04\x24': "APCAccept",
            b'\x00\x05\x5a': "ZoomPlusMinus",
            b'\x00\x04\x05': "FluoroStore",
            b'\x00\x04\x0b': "FluoroSubtract",
            b'\x00\x05\x96': "LarmMovePlusMinus",
            b'\x00\x05\x98': "LarmRotatePlusMinus",
            b'\x00\x04\x2c': "STOP"
        }

        self._ledMap = dict(
            ImageGrabLED          = 3,
            ImageGrab             = 4,
            SmartMask             = 5,
            ResetBuzzerLED        = 9,
            ResetBuzzer           = 10,
            FluoroSubtractLED     = 11,
            FluoroSubtract        = 12,
            ResetStand            = 27,
            TabletopBrakes        = 29,
            FlexArmPositioning    = 30,
            AcceptLED             = 36,
            Accept                = 37,
            Stop                  = 44,
            TableLockBlue         = 74,
            TableHeight           = 76,
            TableTilt             = 77,   # up / down
            TableLockWhite        = 79,
            Shutters              = 81,
            DetectorSize          = 90,   # - battery +
            FluoroFlavor          = 100,  # - eye +
            FluoroFlavor1LED      = 101,
            FluoroFlavor2LED      = 102,
            FluoroFlavor3LED      = 103,
            LeftWedge             = 110,  # up / left
            RightWedge            = 120,  # up / right
            BeamRotate            = 130,  # roll / prop
            Cradle                = 132,  # left / right
            DetectorPortrait      = 144,
            DetectorPortraitBlue  = 145,
            Sid                   = 146, 
            DetectorRotate        = 147,  
            DetectorLandscape     = 148,
            DetectorLandscapeBlue = 149,
            LongitudinalPark      = 150,  # left / right
            RotatePark            = 152,  # left / right
        )

        self._valueMap = {
             '0x0':  0,
            '0x64':  1,
            '0x9c': -1
        }
        # The last received state for each control
        self.states = dict.fromkeys([self._nameMap[k] for k in self._nameMap],TSOListener.State())
        
        # to fix: 
        # self.turn_on_standard_leds()
    
    async def broadcast_state_change(self, control_name: str, state: 'State'):
        """Broadcast TSO state changes via WebSocket if server is available"""
        if self.websocket_server:
            state_dict = {
                "x": state.x,
                "y": state.y,
                "rot": state.rot,
                "press": state.press
            }
            try:
                await self.websocket_server.broadcast_tso_state(control_name, state_dict)
            except Exception as e:
                logger.error(f"Error broadcasting WebSocket state: {e}")
    
    def set_websocket_server(self, websocket_server):
        """Set the WebSocket server for broadcasting state changes"""
        self.websocket_server = websocket_server
        logger.info("WebSocket server integration enabled for TSO listener")

    def getControlState(self, msg: can.Message) -> Tuple[str,State]:
        """
        Decodes a CAN message into a dictionary of States per named control.
        For example: ['APCAccept',{'pressed':True}]
        """
        return self._getControlName(msg.data),self._getControlValue(msg.data), self._getControlCode(msg.data)

    def _getControlName(self, data: bytearray) -> str:
        """Internal method that decodes the control (button) name."""
        b = bytes(data[:3])
        if b in self._nameMap: return self._nameMap[b]
        return ""


    def _getControlCode(self, data: bytearray) -> str:
        """Internal method that decodes the control code."""
        #b = bytes(data[:3])
        b = bytes(data[:])
        return b

    def _getControlValue(self, data: bytearray) -> State:
        """
        Internal method that decodes the control (button) value(s).
        Handles both analog and binary controls:
        - Analog controls: Direct scaling to -1.0 to 1.0 range
        - Binary controls: Use _valueMap for discrete values (0.0, 1.0, -1.0)
        """
        control_name = self._getControlName(data)
        
        # Check if this is an analog control
        if control_name in ANALOG_CONTROLS:
            return self._getAnalogControlValue(data, control_name)
        else:
            return self._getBinaryControlValue(data)
    
    def _getAnalogControlValue(self, data: bytearray, control_name: str) -> State:
        """Process analog control values with normalization"""
        axis_range = ANALOG_CONTROLS[control_name]
        
        # Extract raw values
        raw_x = int.from_bytes(data[3:4], 'little', signed=True)
        raw_y = int.from_bytes(data[4:5], 'little', signed=True)
        raw_rot = int.from_bytes(data[6:7], 'little', signed=True)
        
        # Normalize using the defined range
        x = axis_range.normalize(raw_x)
        y = axis_range.normalize(raw_y)
        rot = axis_range.normalize(raw_rot)
        
        # Press detection
        press = hex(data[5]) != '0x0'
        
        return TSOListener.State(x, y, rot, press)
    
    def _getBinaryControlValue(self, data: bytearray) -> State:
        """Process binary control values using the original _valueMap logic"""
        v = hex(data[3])
        v1 = self._valueMap[v] if v in self._valueMap else int.from_bytes(data[3:4],'little',signed=True)
        v = hex(data[4])
        v2 = self._valueMap[v] if v in self._valueMap else int.from_bytes(data[4:5],'little',signed=True)
        v = hex(data[6])
        rot = self._valueMap[v] if v in self._valueMap else 0
        v = hex(data[5])
        press = v!='0x0'
        
        # Convert to float for consistency
        return TSOListener.State(float(v1), float(v2), float(rot), press)

    def setLED(self, bus: can.interface.Bus, ledIdx: int, on: bool):
        bus.send(can.Message(arbitration_id=0x9d,data=[2,ledIdx,1 if on else 0,0 if on else 1,0,0,0,0],is_rx=False,is_extended_id=False))

    def on_message_received(self, msg: can.Message) -> None:
        """@Override. CANListener callback."""
        if not msg: return
        if len(msg.data)>=8:
            controlName, controlState, controlCode  = self.getControlState(msg)
            
            # Apply flipping for specific controls
            if controlName in FLIPPED_CONTROLS:
                flip_x, flip_y, flip_rot = FLIPPED_CONTROLS[controlName]
                if flip_x: controlState.x = -controlState.x
                if flip_y: controlState.y = -controlState.y
                if flip_rot: controlState.rot = -controlState.rot
            
            self.states[controlName] = controlState
            
            # Print TSO state for debugging
            print(f"TSO: {controlName} = ({controlState.x:.3f}, {controlState.y:.3f}, {controlState.rot:.3f}, {controlState.press})")
            
            # Broadcast state change via WebSocket (non-blocking)
            if controlName and self.websocket_server:
                try:
                    # Schedule the coroutine to run in the event loop
                    if self.loop and self.loop.is_running():
                        asyncio.run_coroutine_threadsafe(
                            self.broadcast_state_change(controlName, controlState),
                            self.loop
                        )
                except Exception as e:
                    logger.error(f"Error scheduling WebSocket broadcast: {e}")
            
            # Route control through c_arm_control
            if controlName and self.c_arm_control:
                # Convert state to dict format
                control_state_dict = {
                    "x": controlState.x,
                    "y": controlState.y,
                    "rot": controlState.rot,
                    "press": controlState.press
                }
                
                # Route to c_arm_control based on control type
                if controlState.press:
                    # Handle button press
                    self.c_arm_control.process_tso_button(controlName, True)
                else:
                    # Handle analog control (joystick movement)
                    self.c_arm_control.process_tso_control(controlName, control_state_dict)

            # Update global state for debugging
            newState = (controlCode, controlName, controlState)
            global lastState
            lastState = newState
            
        else:
            logger.info(f"Unrecognized message: {msg}")
            
    async def update_app_state(self):
        """Update the app_instance with the current TSO state"""
        tso_state = {}
        for control_name, state in self.states.items():
            if control_name:  # Skip empty control names
                tso_state[control_name] = {
                    "x": state.x,
                    "y": state.y,
                    "rot": state.rot,
                    "press": state.press
                }
        
        # Create a TSOState object
        tso_state_obj = TSOState(**tso_state)
        
        # Update app_instance with the current state
        await app_instance.set("tsostate", tso_state_obj)
        
        # Note: Geometry controls are now processed through c_arm_control in on_message_received
    
    async def run(self):
        """Run the TSO listener in a loop using a non-blocking Notifier."""
        try:
            can_channel = 0
            
            hwids = get_ixxat_hwids()
            if len(hwids) == 0:
                print("Could not find any IXXAT CAN devices.")
                return
                
            with can.interface.Bus(channel=can_channel, interface='ixxat', bitrate=250000) as bus:
                print(f"CAN bus state: {bus.state}")
                
                # The Notifier runs in a background thread, calling self.on_message_received for each message
                notifier = can.Notifier(bus, [self])
                
                print("TSO Notifier started. Listening for CAN messages...")
                
                # Keep the async task alive to allow the background thread to run
                while True:
                    if bus.state != can.BusState.ACTIVE:
                        print(f"CAN bus is no longer active. State: {bus.state}")
                        break
                    await anyio.sleep(1)  # Check bus state every second
                    
                print("TSO listener task finished.")
                notifier.stop()

        except Exception as e:
            print(f"Error in TSO listener: {e}")
            # In case of an exception, ensure the notifier is stopped if it exists
            if 'notifier' in locals() and notifier:
                notifier.stop()


# Create a global instance of the TSOListener
tso_listener = TSOListener()
