import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
}

export interface MouseInput {
  type: 'click' | 'wheel' | 'doubleclick';
  button?: 'left' | 'right' | 'middle'; // for click events
  direction?: 'up' | 'down'; // for wheel events
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
}

export type InputShortcut = KeyboardShortcut | MouseInput;

export interface InputSettings {
  // Unified input controls (can be keyboard or mouse)
  smartWorkflows: string | KeyboardShortcut | MouseInput;
  toggleAutomation: string | KeyboardShortcut | MouseInput;
  quickSettings: string | KeyboardShortcut | MouseInput;
  workflowStepLeft: string | KeyboardShortcut | MouseInput;
  workflowStepRight: string | KeyboardShortcut | MouseInput;
  workflowClose: string | KeyboardShortcut | MouseInput;
  workflowStepActivate: string | KeyboardShortcut | MouseInput;
  // Smart Navigator controls
  navigatorPreviousStep: string | KeyboardShortcut | MouseInput;
  navigatorCineButton: string | KeyboardShortcut | MouseInput;
  // Voice input controls
  voiceInputToggle: string | KeyboardShortcut | MouseInput;
  voiceInputEnabled: boolean;
  voiceActivationDelay: number; // Milliseconds to hold before voice activates
  // Focus mode controls
  focusModeEnabled: boolean;
  focusModeToggle: string | KeyboardShortcut | MouseInput;
  focusModeNavigation: string | KeyboardShortcut | MouseInput;
  focusModeNavigationReverse: string | KeyboardShortcut | MouseInput;
  focusModeActivation: string | KeyboardShortcut | MouseInput;
  focusModeExit: string | KeyboardShortcut | MouseInput;
  focusBorderColor1: string;
  focusBorderColor2: string;
  // APC (Automatic Positioning Control) settings
  apcMovementActivate: string | KeyboardShortcut | MouseInput;
  apcMovementCancel: string | KeyboardShortcut | MouseInput;
  apcActivateHoldDuration: number; // Milliseconds to hold for activation
  apcCancelHoldDuration: number; // Milliseconds to hold for cancellation
  apcSafetyEnabled: boolean; // Enable/disable safety button requirement
  apcSafetyButton: string | KeyboardShortcut | MouseInput; // Safety activation button
  // Angle selection controls
  angleMoveUp: string | KeyboardShortcut | MouseInput;
  angleMoveDown: string | KeyboardShortcut | MouseInput;
}

const defaultSettings: InputSettings = {
  smartWorkflows: 'click:middle',
  toggleAutomation: 'wheel:up+ctrl',
  quickSettings: 'click:right+ctrl',
  workflowStepLeft: 'wheel:up',
  workflowStepRight: 'wheel:down',
  workflowClose: 'ArrowUp',
  workflowStepActivate: 'Enter',
  // Smart Navigator defaults
  navigatorPreviousStep: 'q',
  navigatorCineButton: 'u',
  // Voice input defaults
  voiceInputToggle: ' ', // Spacebar
  voiceInputEnabled: true,
  voiceActivationDelay: 1000, // 1 second default
  // Focus mode defaults
  focusModeEnabled: true,
  focusModeToggle: 'Enter',
  focusModeNavigation: 'ArrowRight',
  focusModeNavigationReverse: 'ArrowLeft',
  focusModeActivation: 'Enter',
  focusModeExit: 'Escape',
  focusBorderColor1: '#9ED5FF',
  focusBorderColor2: '#5A75FF',
  // APC defaults
  apcMovementActivate: 's',
  apcMovementCancel: 'w',
  apcActivateHoldDuration: 4000, // 4 seconds
  apcCancelHoldDuration: 2000, // 2 seconds
  apcSafetyEnabled: true, // Safety button enabled by default
  apcSafetyButton: 'f', // F key for safety activation
  // Angle selection defaults
  angleMoveUp: 'w',
  angleMoveDown: 's',
};

interface SettingsContextType {
  inputSettings: InputSettings;
  updateInputShortcut: (action: keyof InputSettings, shortcut: string) => void;
  updateSetting: (key: keyof InputSettings, value: any) => void;
  resetToDefaults: () => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const STORAGE_KEY = 'igt-input-settings';

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [inputSettings, setInputSettings] = useState<InputSettings>(defaultSettings);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    console.log('Loading settings from localStorage:', stored);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log('Parsed settings:', parsed);
        setInputSettings({ ...defaultSettings, ...parsed });
      } catch (error) {
        console.warn('Failed to parse stored input settings:', error);
      }
    } else {
      console.log('No stored settings found, using defaults');
    }
    setIsInitialized(true);
  }, []);

  // Save settings to localStorage whenever they change (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      console.log('Saving settings to localStorage:', inputSettings);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(inputSettings));
    }
  }, [inputSettings, isInitialized]);

  const updateInputShortcut = (action: keyof InputSettings, shortcut: string) => {
    setInputSettings(prev => ({
      ...prev,
      [action]: shortcut
    }));
  };

  const updateSetting = (key: keyof InputSettings, value: any) => {
    setInputSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetToDefaults = () => {
    setInputSettings(defaultSettings);
  };

  return (
    <SettingsContext.Provider value={{
      inputSettings,
      updateInputShortcut,
      updateSetting,
      resetToDefaults,
      isSettingsOpen,
      setIsSettingsOpen
    }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

// Helper function to format keyboard shortcut for display
export function formatShortcut(shortcut: KeyboardShortcut): string {
  const parts: string[] = [];
  
  if (shortcut.ctrlKey) parts.push('Ctrl');
  if (shortcut.altKey) parts.push('Alt');
  if (shortcut.shiftKey) parts.push('Shift');
  if (shortcut.metaKey) parts.push('Cmd');
  
  parts.push(shortcut.key);
  
  return parts.join(' + ');
}

// Helper function to format mouse input for display
export function formatMouseInput(input: MouseInput): string {
  const parts: string[] = [];
  
  if (input.ctrlKey) parts.push('Ctrl');
  if (input.altKey) parts.push('Alt');
  if (input.shiftKey) parts.push('Shift');
  if (input.metaKey) parts.push('Cmd');
  
  if (input.type === 'click') {
    parts.push(`Click ${input.button || 'left'}`);
  } else if (input.type === 'doubleclick') {
    parts.push(`Double-click ${input.button || 'left'}`);
  } else if (input.type === 'wheel') {
    parts.push(`Wheel ${input.direction || 'up'}`);
  }
  
  return parts.join(' + ');
}

// Helper function to format any input shortcut for display
export function formatInputShortcut(input: string | InputShortcut): string {
  try {
    if (typeof input === 'string') {
      // If it's already a string, try to parse and format it properly
      const parsed = parseShortcut(input);
      if ('key' in parsed) {
        return formatShortcut(parsed);
      } else {
        return formatMouseInput(parsed);
      }
    }
    
    if ('key' in input) {
      return formatShortcut(input);
    } else {
      return formatMouseInput(input);
    }
  } catch (error) {
    // Fallback to string representation if formatting fails
    console.warn('Failed to format input shortcut:', error);
    return typeof input === 'string' ? input : JSON.stringify(input);
  }
}

// Helper function to parse shortcut string into KeyboardShortcut or MouseInput object
export function parseShortcut(shortcutString: string | KeyboardShortcut | MouseInput): InputShortcut {
  // If it's already a KeyboardShortcut or MouseInput object, return it
  if (typeof shortcutString === 'object' && shortcutString !== null) {
    if ('key' in shortcutString) {
      return shortcutString as KeyboardShortcut;
    }
    if ('type' in shortcutString) {
      return shortcutString as MouseInput;
    }
  }
  
  // If it's not a string, convert to string or use default
  const str = typeof shortcutString === 'string' ? shortcutString : 'F1';
  
  // Check if it's a mouse input string (contains click, wheel, or doubleclick)
  if (str.includes('click:') || str.includes('wheel:') || str.includes('doubleclick:')) {
    return parseMouseInput(str);
  }
  
  // Parse as keyboard shortcut
  const parts = str.split('+').map(part => part.trim());
  const key = parts[parts.length - 1];
  
  return {
    key,
    ctrlKey: parts.includes('Ctrl'),
    altKey: parts.includes('Alt'),
    shiftKey: parts.includes('Shift'),
    metaKey: parts.includes('Cmd') || parts.includes('Meta')
  };
}

// Helper function to parse mouse input strings
export function parseMouseInput(inputString: string): MouseInput {
  const parts = inputString.split('+').map(part => part.trim());
  const mainPart = parts[0];
  
  let type: 'click' | 'wheel' | 'doubleclick';
  let button: 'left' | 'right' | 'middle' | undefined;
  let direction: 'up' | 'down' | undefined;
  
  if (mainPart.startsWith('click:')) {
    type = 'click';
    button = mainPart.split(':')[1] as 'left' | 'right' | 'middle';
  } else if (mainPart.startsWith('doubleclick:')) {
    type = 'doubleclick';
    button = mainPart.split(':')[1] as 'left' | 'right' | 'middle';
  } else if (mainPart.startsWith('wheel:')) {
    type = 'wheel';
    direction = mainPart.split(':')[1] as 'up' | 'down';
  } else {
    // Default fallback
    type = 'click';
    button = 'left';
  }
  
  return {
    type,
    button,
    direction,
    ctrlKey: parts.includes('ctrl'),
    altKey: parts.includes('alt'),
    shiftKey: parts.includes('shift'),
    metaKey: parts.includes('cmd') || parts.includes('meta')
  };
}

// Helper function to check if a keyboard event matches a shortcut string
export function matchesShortcut(event: KeyboardEvent, shortcutString: string | KeyboardShortcut): boolean {
  const keyboardShortcut = parseShortcut(shortcutString);
  
  // Only match keyboard shortcuts for keyboard events
  if ('type' in keyboardShortcut) {
    return false; // This is a mouse input, not a keyboard shortcut
  }
  
  return (
    event.key === keyboardShortcut.key &&
    !!event.ctrlKey === !!keyboardShortcut.ctrlKey &&
    !!event.altKey === !!keyboardShortcut.altKey &&
    !!event.shiftKey === !!keyboardShortcut.shiftKey &&
    !!event.metaKey === !!keyboardShortcut.metaKey
  );
}

// Helper function to check if an input matches either keyboard or mouse events
export function matchesInput(event: KeyboardEvent | MouseEvent | WheelEvent, inputString: string | KeyboardShortcut | MouseInput): boolean {
  if (event instanceof KeyboardEvent) {
    return matchesShortcut(event, inputString as string | KeyboardShortcut);
  } else {
    return matchesMouseInput(event as MouseEvent | WheelEvent, inputString as string | MouseInput);
  }
}

// Helper function to check if a mouse event matches a mouse input string
export function matchesMouseInput(event: MouseEvent | WheelEvent, inputString: string | MouseInput): boolean {
  const mouseInput = parseShortcut(inputString);
  
  // Only match mouse inputs for mouse events
  if ('key' in mouseInput) {
    return false; // This is a keyboard shortcut, not a mouse input
  }
  
  const input = mouseInput as MouseInput;
  
  // Check modifier keys
  const modifiersMatch = (
    !!event.ctrlKey === !!input.ctrlKey &&
    !!event.altKey === !!input.altKey &&
    !!event.shiftKey === !!input.shiftKey &&
    !!event.metaKey === !!input.metaKey
  );
  
  
  if (!modifiersMatch) return false;
  
  // Check event type and specific properties
  if (input.type === 'wheel' && 'deltaY' in event) {
    const wheelEvent = event as WheelEvent;
    const direction = wheelEvent.deltaY < 0 ? 'up' : 'down';
    return direction === input.direction;
  } else if (input.type === 'click' && 'button' in event) {
    const clickEvent = event as MouseEvent;
    const buttonMap = { 0: 'left', 1: 'middle', 2: 'right' };
    const button = buttonMap[clickEvent.button as keyof typeof buttonMap];
    // Accept both 'click' (left button) and 'auxclick' (middle/right buttons) events
    return button === input.button && (event.type === 'click' || event.type === 'auxclick');
  } else if (input.type === 'doubleclick' && 'button' in event) {
    const clickEvent = event as MouseEvent;
    const buttonMap = { 0: 'left', 1: 'middle', 2: 'right' };
    const button = buttonMap[clickEvent.button as keyof typeof buttonMap];
    return button === input.button && event.type === 'dblclick';
  }
  
  return false;
}
