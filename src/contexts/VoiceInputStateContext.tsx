import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VoiceInputState {
  isListening: boolean;
  transcript: string;
  feedback: string | null; // Feedback message to display
  isKeyPressed: boolean; // Track if push-to-talk key is currently pressed
  setIsListening: (listening: boolean) => void;
  setTranscript: (transcript: string) => void;
  setFeedback: (feedback: string | null) => void;
  setIsKeyPressed: (pressed: boolean) => void;
}

const VoiceInputStateContext = createContext<VoiceInputState | undefined>(undefined);

export function VoiceInputStateProvider({ children }: { children: ReactNode }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  return (
    <VoiceInputStateContext.Provider 
      value={{ 
        isListening, 
        transcript,
        feedback,
        isKeyPressed,
        setIsListening, 
        setTranscript,
        setFeedback,
        setIsKeyPressed
      }}
    >
      {children}
    </VoiceInputStateContext.Provider>
  );
}

export function useVoiceInputState() {
  const context = useContext(VoiceInputStateContext);
  if (!context) {
    throw new Error('useVoiceInputState must be used within VoiceInputStateProvider');
  }
  return context;
}
