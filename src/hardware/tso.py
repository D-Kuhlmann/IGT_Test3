"""
PyGT SDK
@Author: Sjors van Riel - IGT-S Innovation
"""
import logging, sys, struct
import threading
from typing import Tuple
import time
import can
from can.interfaces.ixxat import get_ixxat_hwids
import signal

logger = logging.getLogger("TSOListener")

class TSOListener(can.Listener):
    """
    A CAN listener that decodes messages coming from an Azurion TSO control panel. This basic listener just prints the controls state whenever it changes.
    Usage: Subclass this class and extend the on_message_received function, possibly making use of the 'states' property.
    """
    class State():
        """
        Represents the state of a single TSO control (button/joystick). Not all values are supported by each control (buttons can only be pressed but not moved).
        """
        def __init__(self, x: int = 0, y: int = 0, rot: int = 0, press: bool = False):
            self.x      : int = x
            self.y      : int = y
            self.press  : bool = press
            self.rot    : int = rot
        def __repr__(self) -> str:
            return f"({self.x} {self.y} {self.rot} {self.press})"

    def __init__(self):
        super().__init__()

        self._nameMap = {
            b'\x00\x0c\x4c': "Joy1",
            b'\x00\x0c\x92': "Joy2",
            b'\x00\x13\x82': "Joy3",
            b'\x00\x08\x50': "Joy4",
            b'\x00\x0a\x6e': "Joy5",
            b'\x00\x0a\x78': "Joy6",
            b'\x00\x04\x4b': "Table", # Press
            b'\x00\x0e\x4e': "Table",  # Release
            b'\x00\x05\x84': "TableCradle??",
            b'\x00\x05\x4d': "TableTilt??",
            b'\x00\x05\x64': "FluoroPlusMinus",
            b'\x00\x04\x03': "FluoroStore",
            b'\x00\x04\x09': "FluoroAlarm",
            b'\x00\x04\x1b': "APCZero",
            b'\x00\x04\x24': "APCAccept",
            b'\x00\x05\x5a': "ZoomPlusMinus",
            b'\x00\x04\x05': "SmartMask",
            b'\x00\x04\x0b': "Roadmap",
            b'\x00\x05\x96': "ArcMovePlusMinus???",
            b'\x00\x05\x98': "ArcRotPlusMinus???",
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
            '0x0': 0,
            '0x64': 1,
            '0x9c': -1
        }
        # The last received state for each control
        self.states = dict.fromkeys([self._nameMap[k] for k in self._nameMap],TSOListener.State())

    def getControlState(self, msg: can.Message) -> Tuple[str,State]:
        """
        Decodes a CAN message into a dictionary of States per named control.
        For example: ['APCAccept',{'pressed':True}]
        """
        return self._getControlName(msg.data),self._getControlValue(msg.data)

    def _getControlName(self, data: bytearray) -> str:
        """Internal method that decodes the control (button) name."""
        b = bytes(data[:3])
        if b in self._nameMap: return self._nameMap[b]
        return ""

    def _getControlValue(self, data: bytearray) -> State:
        """
        Internal method that decodes the control (button) value(s).
        Note: on joysticks that only have one direction, the value will always be decoded in the first ('x') axis. 
        This may not actually correspond to the horizontal direction on the joystick.
        """
        v = hex(data[3])
        v1 = self._valueMap[v] if v in self._valueMap else int.from_bytes(data[3:4],'little',signed=True)
        v = hex(data[4])
        v2 = self._valueMap[v] if v in self._valueMap else int.from_bytes(data[4:5],'little',signed=True)
        v = hex(data[6])
        rot = self._valueMap[v] if v in self._valueMap else 0
        v = hex(data[5])
        press = v!='0x0'
        return TSOListener.State(v1,v2,rot,press)

    def setLED(self, bus: can.interface.Bus, ledIdx: int, on: bool):
        bus.send(can.Message(arbitration_id=5,data=[2,ledIdx,1 if on else 0,0 if on else 1,0,0,0,0],is_rx=False,is_extended_id=False,dlc=4))

    def on_message_received(self, msg: can.Message) -> bool:
        """@Override. CANListener callback."""
        if not msg: return False
        if len(msg.data)>=8:
            controlName, controlState = self.getControlState(msg)
            self.states[controlName] = controlState
            logger.info(f"{msg} | {controlName} = ({controlState.x},{controlState.y},{controlState.rot},{controlState.press})")
            global lastState
            lastState = (controlName,controlState)
        else:
            logger.info(f"Unrecognized message: {msg}")
        return True

class TSOKeyboard(TSOListener):
    """
    An example of how to use the TSO listener to generate keyboard inputs.
    """
    def __init__(self) -> None:
        super().__init__()
        import pynput
        self.keyboard = pynput.keyboard.Controller()

    def on_message_received(self, msg: can.Message) -> None:
        """@Override"""
        # First set the state
        ok = super().on_message_received(msg)
        #if not ok: return # NOTE: you will get a message for EVERY CAN message, even if it doesn't change state
        for name in self.states:
            value = self.states[name]
            if name=="Joy4" or name=="Joy5": 
                if value.x<0: self.keyboard.press('a')
                elif value.x>0: self.keyboard.press('d')

                if value.y<0: self.keyboard.press('s')
                elif value.y>0: self.keyboard.press('w')

                if value.rot<0: self.keyboard.press('q')
                elif value.rot>0: self.keyboard.press('e')

                if value.press: self.keyboard.press('f')

lastState = ("None",TSOListener.State())

running = True
def interrupt_handler(signal, frame):
    global running
    running = False

def sendLastState():
    """Threaded function that continuously sends the last button state."""
    global lastState
    while True:
        #print(f"LastState: {lastState}")
        time.sleep(0.1)

def main():
    global running
    global lastState

    thread = threading.Thread(target=sendLastState)
    thread.start()

    # Parse arguments
    can_channel = sys.argv[1] if len(sys.argv)>1 else 0

    hwids = get_ixxat_hwids()
    for hwid in hwids:
        logger.info(f"Found IXXAT with hardware id '{hwid}'.")
    if len(hwids)==0: 
        logger.error("Could not find any IXXAT CAN devices.")
        return False

    with can.interface.Bus(channel=can_channel,interface='ixxat',bitrate=250000) as bus:
        logger.info(f"CAN bus state{bus.state}")
        #listener = TSOListener()
        listener = TSOKeyboard()
        
        for name in listener._ledMap:
            listener.setLED(bus, listener._ledMap[name], False)
            time.sleep(0.01)
        print("LED reset complete.")

        time.sleep(0.01)
        listener.setLED(bus, listener._ledMap["LeftWedge"], True)
        listener.setLED(bus, listener._ledMap["Shutters"], True)
        listener.setLED(bus, listener._ledMap["AcceptLED"], True)
        listener.setLED(bus, listener._ledMap["Accept"], True)

        signal.signal(signal.SIGINT, interrupt_handler)
        while bus.state == can.BusState.ACTIVE:
            msg = bus.recv(0.1)
            listener(msg)
            if not running: break
            time.sleep(0.2) # Throttle loop to get a realistic key repeat rate
        
        logger.info("CAN bus disconnected.")
        return True

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO,format='%(asctime)s\t%(funcName)s\t%(levelname)s\t%(message)s')
    main()