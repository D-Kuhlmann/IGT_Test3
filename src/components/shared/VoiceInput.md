# VoiceInput Component

A reusable voice input component that can be easily added to any screen in the application.

## Usage

### Basic Example

```tsx
import { VoiceInput } from './shared/VoiceInput';

function MyComponent() {
  const handleVoiceInput = (text: string) => {
    console.log('Voice input received:', text);
    // Process the voice command here
  };

  return (
    <div className="relative">
      {/* Your content */}
      
      {/* Add voice input button */}
      <VoiceInput onTranscript={handleVoiceInput} />
    </div>
  );
}
```

### Advanced Example with All Options

```tsx
import { VoiceInput } from './shared/VoiceInput';

function MyComponent() {
  const handleVoiceInput = (text: string) => {
    console.log('📝 Voice:', text);
    
    // Example: Process commands
    if (text.toLowerCase().includes('show menu')) {
      setShowMenu(true);
    }
  };

  const handleStart = () => {
    console.log('Started listening');
  };

  const handleStop = () => {
    console.log('Stopped listening');
  };

  return (
    <div className="relative">
      <VoiceInput 
        onTranscript={handleVoiceInput}
        onStart={handleStart}
        onStop={handleStop}
        continuous={true}           // Keep listening (default: true)
        language="en-US"            // Language code (default: 'en-US')
        showTranscript={true}       // Show transcript popup (default: true)
        position="bottom-right"     // Button position (default: 'bottom-right')
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onTranscript` | `(text: string) => void` | `undefined` | Callback when voice input is recognized |
| `onStart` | `() => void` | `undefined` | Callback when listening starts |
| `onStop` | `() => void` | `undefined` | Callback when listening stops |
| `continuous` | `boolean` | `true` | Whether to keep listening continuously |
| `language` | `string` | `'en-US'` | Language code (e.g., 'nl-NL', 'de-DE') |
| `showTranscript` | `boolean` | `true` | Whether to show the transcript popup |
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | Button position on screen |
| `className` | `string` | `''` | Additional CSS classes for the container |

## Position Options

- `bottom-right` - Bottom right corner (default)
- `bottom-left` - Bottom left corner
- `top-right` - Top right corner
- `top-left` - Top left corner

## Examples for Different Screens

### In XrayLive component
```tsx
<VoiceInput 
  onTranscript={(text) => console.log('XRay voice:', text)}
  position="top-right"
/>
```

### In Hemo component
```tsx
<VoiceInput 
  onTranscript={(text) => console.log('Hemo voice:', text)}
  position="bottom-left"
  language="nl-NL"  // Dutch
/>
```

### In Settings Menu
```tsx
<VoiceInput 
  onTranscript={(text) => {
    // Process settings commands
    if (text.toLowerCase().includes('save')) {
      saveSettings();
    }
  }}
  continuous={false}  // Stop after each command
  showTranscript={false}  // Don't show popup
/>
```

## Browser Support

- ✅ Chrome/Edge
- ✅ Safari
- ❌ Firefox (not supported)

The component automatically hides itself if the browser doesn't support speech recognition.

## Features

- 🎤 Toggle button (click to start/stop)
- 🔴 Red pulsing animation when listening
- 💬 Optional transcript display
- 📍 Flexible positioning
- 🌐 Multi-language support
- ♿ Accessible (includes tooltips)
- 🎨 Customizable via props
