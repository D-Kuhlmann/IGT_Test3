import React, { createContext, useContext, useEffect, useCallback, ReactNode } from 'react';

interface InputEvent {
  type: 'keyboard' | 'mouse' | 'wheel';
  timestamp: number;
  source: 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2';
  data: KeyboardEventData | MouseEventData | WheelEventData;
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

interface InputBroadcastContextType {
  broadcastKeyboardEvent: (event: KeyboardEvent) => void;
  broadcastMouseEvent: (event: MouseEvent) => void;
  broadcastWheelEvent: (event: WheelEvent) => void;
  onKeyboardEvent: (handler: (data: KeyboardEventData) => void) => () => void;
  onMouseEvent: (handler: (data: MouseEventData) => void) => () => void;
  onWheelEvent: (handler: (data: WheelEventData) => void) => () => void;
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
    onKeyboardEvent,
    onMouseEvent,
    onWheelEvent,
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
