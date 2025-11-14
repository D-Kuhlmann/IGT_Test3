import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AutomationState {
  voice: boolean;
  collimation: boolean;
  smartMask: boolean;
  autoZoom: boolean;
  detectorMove: boolean;
  smartCentering: boolean;
  puffFreeze: boolean;
}

interface AutomationContextType {
  automationState: AutomationState;
  toggleAutomation: (key: keyof AutomationState) => void;
}

const AutomationContext = createContext<AutomationContextType | undefined>(undefined);

const STORAGE_KEY = 'automation_state';

const defaultState: AutomationState = {
  voice: false,
  collimation: false,
  smartMask: true,
  autoZoom: false,
  detectorMove: false,
  smartCentering: true,
  puffFreeze: false
};

export function AutomationProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage
  const [automationState, setAutomationState] = useState<AutomationState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load automation state from localStorage:', error);
    }
    return defaultState;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(automationState));
      console.log('Automation state saved to localStorage:', automationState);
    } catch (error) {
      console.error('Failed to save automation state to localStorage:', error);
    }
  }, [automationState]);

  // Listen for storage events from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const newState = JSON.parse(e.newValue);
          console.log('Automation state updated from another window:', newState);
          setAutomationState(newState);
        } catch (error) {
          console.error('Failed to parse automation state from storage event:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleAutomation = (key: keyof AutomationState) => {
    setAutomationState(prev => {
      const newState = { ...prev, [key]: !prev[key] };
      console.log('Toggling automation:', key, 'New state:', newState);
      return newState;
    });
  };

  return (
    <AutomationContext.Provider value={{ automationState, toggleAutomation }}>
      {children}
    </AutomationContext.Provider>
  );
}

export function useAutomation() {
  const context = useContext(AutomationContext);
  if (context === undefined) {
    console.error('useAutomation must be used within an AutomationProvider');
    // Return default values instead of throwing
    return {
      automationState: {
        voice: false,
        collimation: false,
        smartMask: true,
        autoZoom: false,
        detectorMove: false,
        smartCentering: true,
        puffFreeze: false
      },
      toggleAutomation: () => {}
    };
  }
  return context;
}
