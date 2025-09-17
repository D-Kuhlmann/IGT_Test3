// Custom hooks for the IGT TSM application

import React, { useState, useEffect, useCallback } from 'react';
import type { AutomationStates, SettingsStates } from '../types';

/**
 * Hook for managing automation states
 */
export function useAutomationStates() {
  const [automationStates, setAutomationStates] = useState<AutomationStates>({
    voice: false,
    smartmask: true, // Default active based on design
    collimation: false,
    patientDetection: false
  });

  const toggleAutomation = useCallback((type: keyof AutomationStates) => {
    setAutomationStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  }, []);

  const setAutomation = useCallback((type: keyof AutomationStates, value: boolean) => {
    setAutomationStates(prev => ({
      ...prev,
      [type]: value
    }));
  }, []);

  return { automationStates, toggleAutomation, setAutomation };
}

/**
 * Hook for managing settings panel states
 */
export function useSettingsStates() {
  const [settingsStates, setSettingsStates] = useState<SettingsStates>({
    frameRate: false,
    lock: false
  });

  const toggleSetting = useCallback((type: keyof SettingsStates) => {
    setSettingsStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  }, []);

  return { settingsStates, toggleSetting };
}

/**
 * Hook for managing tab navigation
 */
export function useTabNavigation(defaultTab: string) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  return { activeTab, setActiveTab: handleTabChange };
}

/**
 * Hook for managing keyboard shortcuts
 */
export function useKeyboardShortcuts(shortcuts: Record<string, () => void>) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.ctrlKey || event.metaKey ? 
        `ctrl+${event.key.toLowerCase()}` : 
        event.key.toLowerCase();
      
      if (shortcuts[key]) {
        event.preventDefault();
        shortcuts[key]();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [shortcuts]);
}

/**
 * Hook for managing local storage
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}