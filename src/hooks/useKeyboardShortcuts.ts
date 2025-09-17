import { useEffect } from 'react';
import { useSettings, matchesShortcut } from '../contexts/SettingsContext';

interface KeyboardActions {
  smartWorkflows?: () => void;
  toggleAutomation?: () => void;
  quickSettings?: () => void;
}

export function useKeyboardShortcuts(actions: KeyboardActions) {
  const { inputSettings } = useSettings();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for SmartWorkflows shortcut
      if (actions.smartWorkflows && matchesShortcut(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation shortcut
      if (actions.toggleAutomation && matchesShortcut(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings shortcut
      if (actions.quickSettings && matchesShortcut(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [actions, inputSettings]);
}
