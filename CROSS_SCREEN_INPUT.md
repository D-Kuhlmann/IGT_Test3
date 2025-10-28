# Cross-Screen Input Broadcasting System

## Overview
This system enables centralized input capture from the TSM screen and broadcasts those inputs to all other screens (FlexVision, WMU, FlexSpots) in the multi-screen setup.

## Architecture

### Master-Slave Pattern
- **TSM Screen** = Master (captures all input)
- **FlexVision, WMU, FlexSpots** = Slaves (receive broadcasted input)

### Technology
Uses the **BroadcastChannel API** for cross-tab/window communication. This allows different browser tabs/windows to communicate in real-time.

## Implementation

### 1. InputBroadcastContext (`src/contexts/InputBroadcastContext.tsx`)
Central context that manages:
- **Broadcasting** input events (keyboard, mouse, wheel)
- **Receiving** broadcasted events from other screens
- **Event handlers** registration system

#### Key Features:f
- Captures events at document level when `isMaster={true}`
- Serializes events and broadcasts via BroadcastChannel
- Provides hooks for subscribing to specific event types
- Prevents echo (screens don't process their own broadcasts)

### 2. TSM Screen Integration (`src/components/ScreenTSM.tsx`)
```tsx
<InputBroadcastProvider screenId="tsm" isMaster={true}>
  <TSMInterface />
</InputBroadcastProvider>
```
- Captures ALL keyboard, mouse, and wheel events
- Broadcasts them to other screens automatically
- No code changes needed in TSMInterface

### 3. FlexVision Screen Integration (`src/components/ScreenFlexvision.tsx`)
```tsx
<InputBroadcastProvider screenId="flexvision" isMaster={false}>
  <ScreenFlexvisionInner />
</InputBroadcastProvider>
```
- Listens for broadcasted events
- Creates synthetic events to trigger existing handlers
- Handles smart workflows, settings, and other actions

## How It Works

### Example Flow:
1. User presses **middle mouse button** on TSM screen
2. TSM's InputBroadcastProvider captures the event
3. Event is serialized and broadcast via BroadcastChannel
4. FlexVision's InputBroadcastProvider receives the broadcast
5. FlexVision creates a synthetic event
6. **Synthetic event is dispatched globally via `document.dispatchEvent()`**
7. All components listening to document events receive it (SmartWorkflowsOverlay, PresetsOverlay, etc.)
8. FlexVision also checks against `inputSettings.smartWorkflows`
9. If match, `handleShowWorkflows()` is called
10. Smart Workflows overlay appears on FlexVision! ✅
11. User can now navigate the overlay using TSM keyboard (arrows, enter, etc.) ✅

## Global Event Dispatching

When FlexVision receives a broadcasted event from TSM, it does two things:

1. **Dispatches the event globally** via `document.dispatchEvent(syntheticEvent)`
   - This allows ALL components to receive the event
   - Components like SmartWorkflowsOverlay, PresetsOverlay, SmartNavigator, etc. can handle it
   - Events bubble through the DOM as if they were real user input

2. **Checks for screen-level actions** (workflows, settings, etc.)
   - These are handled at the screen level for immediate response
   - Prevents duplicate handling

### Why This Works:
Most React components listen to events on `document` or `window`:
```tsx
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    // Handle event
  };
  
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);
```

When we dispatch synthetic events to `document`, these listeners receive them naturally! 🎉

## Supported Events

### Keyboard Events
- All keys (including modifiers: Ctrl, Alt, Shift, Meta)
- Key codes and key names
- Repeat detection

### Mouse Events
- Click (left, middle, right)
- Double-click
- Auxiliary click
- Button states

### Wheel Events
- Scroll direction (deltaX, deltaY, deltaZ)
- Scroll mode
- Modifier keys

## Usage in Other Screens

To add input broadcasting to WMU or FlexSpots:

```tsx
// In ScreenWMU.tsx or ScreenFlexSpots.tsx
import { InputBroadcastProvider, useInputBroadcast } from '../contexts/InputBroadcastContext';

function ScreenWMUInner() {
  const inputBroadcast = useInputBroadcast();
  
  useEffect(() => {
    const unsubscribe = inputBroadcast.onKeyboardEvent((data) => {
      // Handle keyboard events from TSM
      console.log('Received key:', data.key);
    });
    
    return unsubscribe;
  }, [inputBroadcast]);
  
  // ... rest of component
}

export function ScreenWMU() {
  return (
    <InputBroadcastProvider screenId="wmu" isMaster={false}>
      <ScreenWMUInner />
    </InputBroadcastProvider>
  );
}
```

## Benefits

✅ **Centralized Control**: All input comes from TSM
✅ **No Duplication**: Single source of truth for input
✅ **Consistent UX**: Same shortcuts work across all screens
✅ **Easy to Extend**: Add new screens easily
✅ **Real-time**: Near-instant propagation via BroadcastChannel
✅ **Type-safe**: Full TypeScript support

## Debugging

Enable console logs to see broadcast activity:
- `[InputBroadcast]` - Context initialization and events
- `[FlexVision] Received broadcasted...` - FlexVision receiving events
- `[InputBroadcast] Broadcasted...` - TSM broadcasting events

## Browser Compatibility

BroadcastChannel API is supported in:
- Chrome 54+
- Firefox 38+
- Safari 15.4+
- Edge 79+

Falls back gracefully if not supported (logs warning).

## Future Enhancements

- [ ] Add event filtering (only broadcast specific events)
- [ ] Add priority system for event handling
- [ ] Add event replay for late-joining screens
- [ ] Add bi-directional communication (slaves can send back)
- [ ] Add event analytics/monitoring
