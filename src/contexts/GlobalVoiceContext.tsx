import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

interface GlobalVoiceContextType {
  // Workflow controls
  onNextWorkflow?: () => void;
  onPreviousWorkflow?: () => void;
  onRestartWizard?: () => void;
  
  // UI controls
  onShowWorkflows?: () => void;
  onHideWorkflows?: () => void;
  onShowPresets?: () => void;
  onHidePresets?: () => void;
  onToggleFocusMode?: () => void;
  
  // Settings controls
  onOpenSettings?: () => void;
  onCloseSettings?: () => void;
  
  // Preset controls
  onPreset1?: () => void;
  onPreset2?: () => void;
  
  // Register handlers
  registerHandlers: (handlers: Partial<Omit<GlobalVoiceContextType, 'registerHandlers'>>) => void;
  unregisterHandlers: () => void;
}

const GlobalVoiceContext = createContext<GlobalVoiceContextType | undefined>(undefined);

export function GlobalVoiceProvider({ children }: { children: ReactNode }) {
  const [handlers, setHandlers] = useState<Partial<GlobalVoiceContextType>>({});

  const registerHandlers = useCallback((newHandlers: Partial<Omit<GlobalVoiceContextType, 'registerHandlers' | 'unregisterHandlers'>>) => {
    setHandlers(prev => ({ ...prev, ...newHandlers }));
  }, []);

  const unregisterHandlers = useCallback(() => {
    setHandlers({});
  }, []);

  const value = useMemo(() => ({
    ...handlers,
    registerHandlers,
    unregisterHandlers 
  }), [handlers, registerHandlers, unregisterHandlers]);

  return (
    <GlobalVoiceContext.Provider value={value}>
      {children}
    </GlobalVoiceContext.Provider>
  );
}

export function useGlobalVoice() {
  const context = useContext(GlobalVoiceContext);
  if (!context) {
    throw new Error('useGlobalVoice must be used within GlobalVoiceProvider');
  }
  return context;
}
