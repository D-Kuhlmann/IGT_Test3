import React, { createContext, useContext, useEffect, useCallback, ReactNode } from 'react';

interface InputEvent {
  type: 'keyboard' | 'mouse' | 'wheel' | 'voice' | 'transcript' | 'listening';
  timestamp: number;
  source: 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2';
  data: KeyboardEventData | MouseEventData | WheelEventData | VoiceEventData | TranscriptEventData | ListeningStateData;
}

interface KeyboardEventData {
  key: string;
  code: string;
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
  repeat: boolean;
}

interface MouseEventData {
  button: number;
  buttons: number;
  clientX: number;
  clientY: number;
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
  eventType: 'click' | 'auxclick' | 'dblclick';
}

interface WheelEventData {
  deltaX: number;
  deltaY: number;
  deltaZ: number;
  deltaMode: number;
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}

interface VoiceEventData {
  eventType: 'keydown' | 'keyup' | 'reset'; // Voice input key press/release or reset after command
  key: string; // The key code for voice input
}

interface TranscriptEventData {
  transcript: string; // The recognized speech text
  isFinal: boolean; // Whether this is the final transcript
}

interface ListeningStateData {
  isListening: boolean; // Whether voice recognition is active
}

interface InputBroadcastContextType {
  broadcastKeyboardEvent: (event: KeyboardEvent) => void;
  broadcastMouseEvent: (event: MouseEvent) => void;
  broadcastWheelEvent: (event: WheelEvent) => void;
  broadcastVoiceEvent: (eventType: 'keydown' | 'keyup' | 'reset', key: string) => void;
  broadcastTranscript: (transcript: string, isFinal: boolean) => void;
  broadcastListeningState: (isListening: boolean) => void;
  onKeyboardEvent: (handler: (data: KeyboardEventData) => void) => () => void;
  onMouseEvent: (handler: (data: MouseEventData) => void) => () => void;
  onWheelEvent: (handler: (data: WheelEventData) => void) => () => void;
  onVoiceEvent: (handler: (data: VoiceEventData) => void) => () => void;
  onTranscript: (handler: (data: TranscriptEventData) => void) => () => void;
  onListeningState: (handler: (data: ListeningStateData) => void) => () => void;
}

const InputBroadcastContext = createContext<InputBroadcastContextType | undefined>(undefined);

const BROADCAST_CHANNEL_NAME = 'igt-input-broadcast';

interface InputBroadcastProviderProps {
  children: ReactNode;
  screenId: 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2';
  isMaster?: boolean; // Only TSM should be master
}

export function InputBroadcastProvider({ children, screenId, isMaster = false }: InputBroadcastProviderProps) {
  const channelRef = React.useRef<BroadcastChannel | null>(null);
  const keyboardHandlersRef = React.useRef<Set<(data: KeyboardEventData) => void>>(new Set());
  const mouseHandlersRef = React.useRef<Set<(data: MouseEventData) => void>>(new Set());
  const wheelHandlersRef = React.useRef<Set<(data: WheelEventData) => void>>(new Set());
  const voiceHandlersRef = React.useRef<Set<(data: VoiceEventData) => void>>(new Set());
  const transcriptHandlersRef = React.useRef<Set<(data: TranscriptEventData) => void>>(new Set());
  const listeningHandlersRef = React.useRef<Set<(data: ListeningStateData) => void>>(new Set());

  // Initialize BroadcastChannel
  useEffect(() => {
    if (typeof BroadcastChannel !== 'undefined') {
      channelRef.current = new BroadcastChannel(BROADCAST_CHANNEL_NAME);

      // Listen for messages from other tabs/windows
      channelRef.current.onmessage = (event: MessageEvent<InputEvent>) => {
        const inputEvent = event.data;
        
        // Don't process events from ourselves
        if (inputEvent.source === screenId) {
          return;
        }

        // Dispatch to appropriate handlers
        switch (inputEvent.type) {
          case 'keyboard':
            keyboardHandlersRef.current.forEach(handler => {
              handler(inputEvent.data as KeyboardEventData);
            });
            break;
          case 'mouse':
            mouseHandlersRef.current.forEach(handler => {
              handler(inputEvent.data as MouseEventData);
            });
            break;
          case 'wheel':
            wheelHandlersRef.current.forEach(handler => {
              handler(inputEvent.data as WheelEventData);
            });
            break;
          case 'voice':
            voiceHandlersRef.current.forEach(handler => {
              handler(inputEvent.data as VoiceEventData);
            });
            break;
          case 'transcript':
            transcriptHandlersRef.current.forEach(handler => {
              handler(inputEvent.data as TranscriptEventData);
            });
            break;
          case 'listening':
            listeningHandlersRef.current.forEach(handler => {
              handler(inputEvent.data as ListeningStateData);
            });
            break;
        }
      };

      console.log(`[InputBroadcast] ${screenId} initialized ${isMaster ? '(MASTER)' : '(SLAVE)'}`);
    } else {
      console.warn('[InputBroadcast] BroadcastChannel API not supported');
    }

    return () => {
      if (channelRef.current) {
        channelRef.current.close();
      }
    };
  }, [screenId, isMaster]);

  // Broadcast keyboard event
  const broadcastKeyboardEvent = useCallback((event: KeyboardEvent) => {
    if (!channelRef.current || !isMaster) return;

    const data: KeyboardEventData = {
      key: event.key,
      code: event.code,
      ctrlKey: event.ctrlKey,
      altKey: event.altKey,
      shiftKey: event.shiftKey,
      metaKey: event.metaKey,
      repeat: event.repeat,
    };

    const inputEvent: InputEvent = {
      type: 'keyboard',
      timestamp: Date.now(),
      source: screenId,
      data,
    };

    channelRef.current.postMessage(inputEvent);
    console.log('[InputBroadcast] Broadcasted keyboard event:', data.key);
  }, [screenId, isMaster]);

  // Broadcast mouse event
  const broadcastMouseEvent = useCallback((event: MouseEvent) => {
    if (!channelRef.current || !isMaster) return;

    const data: MouseEventData = {
      button: event.button,
      buttons: event.buttons,
      clientX: event.clientX,
      clientY: event.clientY,
      ctrlKey: event.ctrlKey,
      altKey: event.altKey,
      shiftKey: event.shiftKey,
      metaKey: event.metaKey,
      eventType: event.type as 'click' | 'auxclick' | 'dblclick',
    };

    const inputEvent: InputEvent = {
      type: 'mouse',
      timestamp: Date.now(),
      source: screenId,
      data,
    };

    channelRef.current.postMessage(inputEvent);
    console.log('[InputBroadcast] Broadcasted mouse event:', data.eventType);
  }, [screenId, isMaster]);

  // Broadcast wheel event
  const broadcastWheelEvent = useCallback((event: WheelEvent) => {
    if (!channelRef.current || !isMaster) return;

    const data: WheelEventData = {
      deltaX: event.deltaX,
      deltaY: event.deltaY,
      deltaZ: event.deltaZ,
      deltaMode: event.deltaMode,
      ctrlKey: event.ctrlKey,
      altKey: event.altKey,
      shiftKey: event.shiftKey,
      metaKey: event.metaKey,
    };

    const inputEvent: InputEvent = {
      type: 'wheel',
      timestamp: Date.now(),
      source: screenId,
      data,
    };

    channelRef.current.postMessage(inputEvent);
    console.log('[InputBroadcast] Broadcasted wheel event:', data.deltaY);
  }, [screenId, isMaster]);

  // Register keyboard event handler
  const onKeyboardEvent = useCallback((handler: (data: KeyboardEventData) => void) => {
    keyboardHandlersRef.current.add(handler);
    return () => {
      keyboardHandlersRef.current.delete(handler);
    };
  }, []);

  // Register mouse event handler
  const onMouseEvent = useCallback((handler: (data: MouseEventData) => void) => {
    mouseHandlersRef.current.add(handler);
    return () => {
      mouseHandlersRef.current.delete(handler);
    };
  }, []);

  // Register wheel event handler
  const onWheelEvent = useCallback((handler: (data: WheelEventData) => void) => {
    wheelHandlersRef.current.add(handler);
    return () => {
      wheelHandlersRef.current.delete(handler);
    };
  }, []);

  // Broadcast voice event (from TSM)
  const broadcastVoiceEvent = useCallback((eventType: 'keydown' | 'keyup', key: string) => {
    if (!channelRef.current) return;

    const data: VoiceEventData = {
      eventType,
      key,
    };

    const inputEvent: InputEvent = {
      type: 'voice',
      timestamp: Date.now(),
      source: screenId,
      data,
    };

    channelRef.current.postMessage(inputEvent);
    console.log(`[InputBroadcast] Broadcasted voice event: ${eventType} ${key}`);
  }, [screenId]);

  // Register voice event handler
  const onVoiceEvent = useCallback((handler: (data: VoiceEventData) => void) => {
    voiceHandlersRef.current.add(handler);
    return () => {
      voiceHandlersRef.current.delete(handler);
    };
  }, []);

  // Broadcast transcript (from screen with microphone)
  const broadcastTranscript = useCallback((transcript: string, isFinal: boolean) => {
    if (!channelRef.current) return;

    const data: TranscriptEventData = {
      transcript,
      isFinal,
    };

    const inputEvent: InputEvent = {
      type: 'transcript',
      timestamp: Date.now(),
      source: screenId,
      data,
    };

    channelRef.current.postMessage(inputEvent);
    console.log(`[InputBroadcast] Broadcasted transcript (${isFinal ? 'FINAL' : 'interim'}): "${transcript}"`);
  }, [screenId]);

  // Register transcript handler
  const onTranscript = useCallback((handler: (data: TranscriptEventData) => void) => {
    transcriptHandlersRef.current.add(handler);
    return () => {
      transcriptHandlersRef.current.delete(handler);
    };
  }, []);

  // Broadcast listening state (from screen with microphone)
  const broadcastListeningState = useCallback((isListening: boolean) => {
    if (!channelRef.current) return;

    const data: ListeningStateData = {
      isListening,
    };

    const inputEvent: InputEvent = {
      type: 'listening',
      timestamp: Date.now(),
      source: screenId,
      data,
    };

    channelRef.current.postMessage(inputEvent);
    console.log(`[InputBroadcast] Broadcasted listening state: ${isListening}`);
  }, [screenId]);

  // Register listening state handler
  const onListeningState = useCallback((handler: (data: ListeningStateData) => void) => {
    listeningHandlersRef.current.add(handler);
    return () => {
      listeningHandlersRef.current.delete(handler);
    };
  }, []);

  // If this is the master (TSM), capture all input events
  useEffect(() => {
    if (!isMaster) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      broadcastKeyboardEvent(event);
    };

    const handleClick = (event: MouseEvent) => {
      broadcastMouseEvent(event);
    };

    const handleAuxClick = (event: MouseEvent) => {
      broadcastMouseEvent(event);
    };

    const handleDblClick = (event: MouseEvent) => {
      broadcastMouseEvent(event);
    };

    const handleWheel = (event: WheelEvent) => {
      broadcastWheelEvent(event);
    };

    // Capture events at the document level
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('click', handleClick, true);
    document.addEventListener('auxclick', handleAuxClick, true);
    document.addEventListener('dblclick', handleDblClick, true);
    document.addEventListener('wheel', handleWheel, { passive: true, capture: true });

    console.log('[InputBroadcast] Master event listeners attached');

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('auxclick', handleAuxClick, true);
      document.removeEventListener('dblclick', handleDblClick, true);
      document.removeEventListener('wheel', handleWheel, true);
    };
  }, [isMaster, broadcastKeyboardEvent, broadcastMouseEvent, broadcastWheelEvent]);

  const value: InputBroadcastContextType = {
    broadcastKeyboardEvent,
    broadcastMouseEvent,
    broadcastWheelEvent,
    broadcastVoiceEvent,
    broadcastTranscript,
    broadcastListeningState,
    onKeyboardEvent,
    onMouseEvent,
    onWheelEvent,
    onVoiceEvent,
    onTranscript,
    onListeningState,
  };

  return (
    <InputBroadcastContext.Provider value={value}>
      {children}
    </InputBroadcastContext.Provider>
  );
}

export function useInputBroadcast() {
  const context = useContext(InputBroadcastContext);
  if (context === undefined) {
    throw new Error('useInputBroadcast must be used within an InputBroadcastProvider');
  }
  return context;
}
