import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ComponentType = 'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator';

interface ActiveComponentsContextType {
  activeComponents: ComponentType[];
  setActiveComponents: (components: ComponentType[]) => void;
  focusedComponent: ComponentType | null;
  setFocusedComponent: (component: ComponentType | null) => void;
}

const ActiveComponentsContext = createContext<ActiveComponentsContextType | undefined>(undefined);

const STORAGE_KEY = 'activeComponents';
const FOCUSED_STORAGE_KEY = 'focusedComponent';

export function ActiveComponentsProvider({ children }: { children: ReactNode }) {
  // Initialize from localStorage if available
  const [activeComponents, setActiveComponentsState] = useState<ComponentType[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return ['xrayLive', 'interventionalWorkspace', 'hemo'];
      }
    }
    return ['xrayLive', 'interventionalWorkspace', 'hemo'];
  });

  // Initialize focused component from localStorage
  const [focusedComponent, setFocusedComponentState] = useState<ComponentType | null>(() => {
    const stored = localStorage.getItem(FOCUSED_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

  // Wrapper to also update localStorage
  const setActiveComponents = (components: ComponentType[]) => {
    setActiveComponentsState(components);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(components));
  };

  // Wrapper to update focused component
  const setFocusedComponent = (component: ComponentType | null) => {
    setFocusedComponentState(component);
    localStorage.setItem(FOCUSED_STORAGE_KEY, JSON.stringify(component));
  };

  return (
    <ActiveComponentsContext.Provider value={{ 
      activeComponents, 
      setActiveComponents,
      focusedComponent,
      setFocusedComponent
    }}>
      {children}
    </ActiveComponentsContext.Provider>
  );
}

export function useActiveComponents() {
  const context = useContext(ActiveComponentsContext);
  if (context === undefined) {
    throw new Error('useActiveComponents must be used within an ActiveComponentsProvider');
  }
  return context;
}
