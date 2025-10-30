# Voice Commands Guide

This document lists all available voice commands in the IGT Healthcare Application.

## 📋 Available Commands

### Workflow Navigation

| Command | Alternative Phrases | Description |
|---------|-------------------|-------------|
| **Next Workflow** | "next step", "go to next", "continue workflow" | Navigate to the next workflow step |
| **Previous Workflow** | "previous step", "go back", "back to previous" | Navigate to the previous workflow step |
| **Restart Wizard** | "reset wizard", "restart navigation", "start over" | Restart the Smart Navigator wizard from the beginning |

### UI Controls

| Command | Alternative Phrases | Description |
|---------|-------------------|-------------|
| **Show Workflows** | "open workflows", "display workflows" | Open the workflows overlay menu |
| **Hide Workflows** | "close workflows" | Close the workflows overlay menu |
| **Show Presets** | "open presets", "display presets" | Open the presets overlay menu |
| **Hide Presets** | "close presets" | Close the presets overlay menu |
| **Focus Mode** | "toggle focus", "enable focus", "disable focus" | Toggle focus mode on/off |

### Settings

| Command | Alternative Phrases | Description |
|---------|-------------------|-------------|
| **Open Settings** | "show settings", "settings menu" | Open the settings menu |
| **Close Settings** | "hide settings", "exit settings" | Close the settings menu |

### Presets

| Command | Alternative Phrases | Description |
|---------|-------------------|-------------|
| **Preset 1** | "preset one", "first preset" | Switch to Preset 1 (Cardio) |
| **Preset 2** | "preset two", "second preset" | Switch to Preset 2 (Neuro) |

## 🎤 How to Use

1. **Click the blue microphone button** in the bottom-right corner
2. **Button turns red** - now it's listening
3. **Say your command** clearly (e.g., "next workflow")
4. **Command executes** automatically when recognized
5. **Click again to stop** listening

## 💡 Tips for Best Results

- **Speak clearly** and at a normal pace
- **Use natural language** - the system recognizes variations
- **Watch the transcript** - you'll see what it heard
- **Check the console** - shows which command was executed
- **One command at a time** - wait for execution before the next command

## 🔧 Technical Details

### How Commands Work

1. Voice input is captured via Web Speech API
2. Transcript is sent to `useVoiceCommands` hook
3. Text is matched against command phrases (case-insensitive)
4. First matching command is executed
5. Console logs show which command matched

### Adding New Commands

Edit `/src/hooks/useVoiceCommands.ts`:

```typescript
// 1. Add the prop
interface UseVoiceCommandsProps {
  onMyNewCommand?: () => void;
}

// 2. Add to the hook parameters
export function useVoiceCommands({
  onMyNewCommand,
  // ... other commands
}: UseVoiceCommandsProps) {

// 3. Add the matching logic
if (onMyNewCommand && (
  text.includes('my command') ||
  text.includes('alternative phrase')
)) {
  console.log('✅ Command: My New Command');
  onMyNewCommand();
  return;
}
```

Then in your component:

```typescript
const { processVoiceCommand } = useVoiceCommands({
  onMyNewCommand: () => {
    console.log('Executing my command');
    // Your logic here
  },
});
```

## 🌐 Browser Support

- ✅ **Chrome** - Full support
- ✅ **Edge** - Full support
- ✅ **Safari** - Full support
- ❌ **Firefox** - Not supported (Web Speech API limitation)

## 🐛 Troubleshooting

### Command not recognized
- Check the transcript popup - does it show the correct text?
- Try using alternative phrases
- Check console for "❌ No matching command found"

### Microphone not working
- Grant microphone permissions in browser
- Check system microphone settings
- Only works on HTTPS or localhost

### Commands execute wrong action
- Commands are matched in order (first match wins)
- Check console logs to see which command matched
- Try being more specific with your phrase

## 📝 Example Session

```
You: "show workflows"
→ ✅ Command: Show Workflows
→ Workflows overlay opens

You: "next workflow"
→ ✅ Command: Next Workflow
→ App navigates to next step

You: "preset 1"
→ ✅ Command: Preset 1
→ Switches to Cardio preset

You: "restart wizard"
→ ✅ Command: Restart Wizard
→ Smart Navigator resets
```

## 🎯 Future Enhancements

Potential commands to add:
- "Take snapshot" - Capture current screen
- "Export data" - Export current data
- "Zoom in/out" - Control zoom levels
- "Select angle [name]" - Select specific angle
- "Show help" - Display command list
- "Repeat last command" - Redo previous action
