# TSM (Therapy Support Module)

A modern React-based medical interface application built with TypeScript and Tailwind CSS. This application provides a comprehensive user interface for medical procedure support with interactive controls, real-time monitoring, and patient management features.

## Features

- **Interactive Medical Interface**: Professional medical procedure interface with live controls
- **Component-Based Architecture**: Modular, reusable components for maintainability
- **Responsive Design**: Optimized for 1500x800 pixel medical displays
- **Real-Time Controls**: Interactive buttons, tabs, and automation panels
- **Patient Visualization**: Human body diagram with anatomical markers and access points
- **Settings Management**: Configurable automation and system settings
- **Accessibility**: Full keyboard navigation and screen reader support

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Figma Integration** for design fidelity
- **Custom Hooks** for state management
- **Modular Architecture** for scalability

## Project Structure

```
├── components/           # React components
│   ├── ui/              # Shadcn/ui components
│   └── figma/           # Figma-specific components
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── constants/           # Application constants
├── utils/               # Utility functions
├── imports/             # Figma imports and SVG assets
└── styles/              # Global CSS and Tailwind config
```

## Key Components

### Main Interface Components
- `TSMInterface`: Main application container
- `TopNavigation`: Tab navigation and automation controls
- `TaskMenu`: Left sidebar with procedure tasks
- `MainContent`: Central content area with X-ray status
- `PatientDiagram`: Human body visualization with settings
- `InAppSettingsPanel`: Interactive settings controls

### Interactive Features
- **Tab Navigation**: Switch between Live, Planning, and other modes
- **Automation Controls**: Voice, Smart Mask, Collimation, and Patient Detection
- **Settings Panel**: Frame rate and lock controls with blue activation states
- **Task Management**: Step-by-step procedure guidance
- **Patient Positioning**: Visual body diagram with access points

## State Management

The application uses custom hooks for clean state management:

- `useAutomationStates`: Manages automation feature toggles
- `useSettingsStates`: Handles settings panel states
- `useTabNavigation`: Controls tab switching
- `useKeyboardShortcuts`: Keyboard accessibility
- `useLocalStorage`: Persistent settings storage

## Styling

- **Tailwind CSS v4**: Utility-first CSS framework
- **Custom Design System**: Medical-specific color palette and typography
- **Figma Fidelity**: Pixel-perfect implementation of design specifications
- **Interactive States**: Hover, focus, and active state styling
- **Accessibility**: Focus rings and proper contrast ratios

## Development

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Type Checking
```bash
npm run type-check
```

## Design Guidelines

- Maintains exact Figma design specifications
- Uses component-based architecture for reusability
- Implements proper accessibility standards
- Follows medical UI/UX best practices
- Ensures responsive behavior within fixed dimensions

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Optimized for medical workstation displays
- Full keyboard navigation support

## License

Proprietary - Medical Device Interface

---

For technical support or feature requests, please contact the development team.