import React, { useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSettings, matchesInput } from '../../contexts/SettingsContext';
import { useVoiceInputState } from '../../contexts/VoiceInputStateContext';
import { useInputBroadcast } from '../../contexts/InputBroadcastContext';

interface VoiceInputProps {
  onTranscript?: (text: string) => void; // Callback when new text is recognized
  onStart?: () => void; // Callback when listening starts
  onStop?: () => void; // Callback when listening stops
  continuous?: boolean; // Whether to keep listening continuously
  language?: string; // Language code (e.g., 'en-US', 'nl-NL')
  showTranscript?: boolean; // Whether to show the transcript popup
  showButton?: boolean; // Whether to show the microphone button (default: false, keyboard only)
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'; // Button position
  className?: string; // Custom className for the container
  screenId?: 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2'; // Which screen this is on
  hasMicrophone?: boolean; // Whether this screen has the physical microphone (default: auto-detect)
}

export function VoiceInput({
  onTranscript,
  onStart,
  onStop,
  continuous = true,
  language = 'en-US',
  showTranscript = true,
  showButton = false,
  position = 'bottom-right',
  className = '',
  screenId = 'flexvision', // Default to flexvision
  hasMicrophone // Auto-detect: WMU and FlexSpots have microphone, TSM and FlexVision don't
}: VoiceInputProps) {
  const { inputSettings } = useSettings();
  const voiceState = useVoiceInputState();
  const inputBroadcast = useInputBroadcast();
  
  // Auto-detect if this screen has microphone based on screenId
  const screenHasMicrophone = hasMicrophone ?? (screenId === 'wmu' || screenId === 'flexspots1' || screenId === 'flexspots2');
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  // Check browser support and microphone permissions on mount
  useEffect(() => {
    if (screenHasMicrophone && !browserSupportsSpeechRecognition) {
      // Browser does not support Speech Recognition API
    } else if (screenHasMicrophone) {
      // Browser supports Speech Recognition API
      
      // Check microphone permissions
      if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'microphone' as PermissionName }).then((result) => {
          if (result.state === 'denied') {
            // Microphone permission is DENIED
          }
        }).catch(err => {
          // Could not check microphone permission
        });
      }
    }
  }, [screenHasMicrophone, browserSupportsSpeechRecognition]);
  
  // Track the last transcript we sent to prevent duplicate callbacks
  const lastSentTranscriptRef = useRef<string>('');

  // Broadcast transcripts to other screens (including empty ones)
  // Only broadcast if this screen has the microphone
  useEffect(() => {
    if (screenHasMicrophone && transcript) {
      inputBroadcast.broadcastTranscript(transcript, true);
    } else if (screenHasMicrophone && !transcript) {
    }
  }, [transcript, inputBroadcast, screenHasMicrophone, screenId]);

  // Call onTranscript callback whenever transcript changes (but only once per unique transcript)
  useEffect(() => {
    if (transcript && onTranscript && transcript !== lastSentTranscriptRef.current) {
      lastSentTranscriptRef.current = transcript;
      onTranscript(transcript);
    }
  }, [transcript, onTranscript]);
  
  // Reset the tracking when transcript is cleared
  useEffect(() => {
    if (!transcript) {
      lastSentTranscriptRef.current = '';
    }
  }, [transcript]);

  // Update global voice state and broadcast to other screens
  const prevListeningRef = useRef(listening);
  useEffect(() => {
    // Only update if listening state actually changed
    if (prevListeningRef.current !== listening) {
      const wasListening = prevListeningRef.current;
      prevListeningRef.current = listening;
      voiceState.setIsListening(listening);
      
      if (listening) {
      } else {
      }
      
      // Only broadcast if this screen has the microphone
      if (screenHasMicrophone) {
        inputBroadcast.broadcastListeningState(listening);
      }
    }
  }, [listening, voiceState, inputBroadcast, screenId, screenHasMicrophone]);

  // Only update the global transcript state if this screen has the microphone
  // Otherwise, screens without microphone will overwrite broadcasted transcripts with empty strings
  useEffect(() => {
    if (screenHasMicrophone) {
      voiceState.setTranscript(transcript);
      if (transcript) {
      } else {
      }
    }
  }, [transcript, voiceState, screenId, screenHasMicrophone]);

  // Track listening state with ref to avoid dependency issues
  const listeningRef = useRef(false);
  
  // Timer ref for delayed voice activation (1 second hold required)
  const voiceActivationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Push-to-talk keyboard control for voice input
  useEffect(() => {
    
    if (!inputSettings.voiceInputEnabled) {
      return;
    }

    if (screenId === 'tsm') {
      // TSM: Broadcast voice events, don't handle locally (no microphone on TSM)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (matchesInput(e, inputSettings.voiceInputToggle)) {
          e.preventDefault();
          inputBroadcast.broadcastVoiceEvent('keydown', e.code);
          voiceState.setIsKeyPressed(true);
        }
      };

      const handleKeyUp = (e: KeyboardEvent) => {
        if (matchesInput(e, inputSettings.voiceInputToggle)) {
          e.preventDefault();
          inputBroadcast.broadcastVoiceEvent('keyup', e.code);
          voiceState.setIsKeyPressed(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    } else if (screenHasMicrophone) {
      // WMU/FlexSpots: Has microphone - listen for TSM broadcasts and start voice recognition
      
      const unsubscribe = inputBroadcast.onVoiceEvent((data) => {
        if (data.eventType === 'keydown') {
          // Only start if not already listening (prevents repeat keydown events)
          if (!listeningRef.current && !voiceActivationTimerRef.current) {
            voiceState.setIsKeyPressed(true);
            
            console.log('Voice activation timer starting with delay:', inputSettings.voiceActivationDelay, 'ms');
            
            // Start timer - voice will activate after configured delay
            voiceActivationTimerRef.current = setTimeout(() => {
              console.log('Voice activation timer completed - starting voice input');
              // Check if window has focus
              if (document.hasFocus()) {
              } else {
                // Try to focus the window (may not work due to browser restrictions)
                window.focus();
              }
              
              try {
                listeningRef.current = true;
                
                // Reset transcript at the START of a new voice session
                resetTranscript();
                
                // Start listening first, then add debug listeners without overwriting library's handlers
                SpeechRecognition.startListening({ continuous, language });
                
                // Add debug listeners AFTER starting (don't overwrite existing handlers)
                const recognition = (SpeechRecognition as any).getRecognition?.();
                if (recognition) {
                  
                  // Save existing handlers
                  const originalOnStart = recognition.onstart;
                  const originalOnEnd = recognition.onend;
                  const originalOnError = recognition.onerror;
                  const originalOnResult = recognition.onresult;
                  
                  // Add our debug logging WITHOUT overwriting
                  recognition.addEventListener('start', () => {
                  });
                  
                  recognition.addEventListener('end', () => {
                    listeningRef.current = false;
                  });
                  
                  recognition.addEventListener('error', (event: any) => {
                    if (event.error === 'not-allowed') {
                    } else if (event.error === 'no-speech') {
                    }
                    listeningRef.current = false;
                  });
                  
                  recognition.addEventListener('result', (event: any) => {
                    const last = event.results.length - 1;
                    const text = event.results[last][0].transcript;
                  });
                }
                
                onStart?.();
              } catch (error) {
                listeningRef.current = false;
              }
            }, inputSettings.voiceActivationDelay); // Use configurable delay
          } else {
          }
        } else if (data.eventType === 'reset') {
          // Reset command - stop and restart recognition to clear transcript
          if (listeningRef.current) {
            // Stop current session
            SpeechRecognition.stopListening();
            listeningRef.current = false;
            resetTranscript();
            
            // Restart immediately if key is still pressed
            if (voiceState.isKeyPressed) {
              setTimeout(() => {
                listeningRef.current = true;
                resetTranscript();
                SpeechRecognition.startListening({ continuous, language });
              }, 100); // Small delay to ensure stop completes
            }
          }
        } else if (data.eventType === 'keyup') {
          // Clear the activation timer if button released before 1 second
          if (voiceActivationTimerRef.current) {
            clearTimeout(voiceActivationTimerRef.current);
            voiceActivationTimerRef.current = null;
          }
          
          voiceState.setIsKeyPressed(false);
          
          // Close all menus when voice button is released
          const closeAllMenusEvent = new CustomEvent('closeAllMenus');
          window.dispatchEvent(closeAllMenusEvent);
          
          // Check feedback using the global state
          const hasFeedback = voiceState.feedback !== null && voiceState.feedback !== '';
          
          // Only stop on release if no feedback is being shown
          if (listeningRef.current && !hasFeedback) {
            listeningRef.current = false;
            SpeechRecognition.stopListening();
            onStop?.();
          } else if (hasFeedback) {
          }
        }
      });

      return () => {
        // Clean up timer on unmount
        if (voiceActivationTimerRef.current) {
          clearTimeout(voiceActivationTimerRef.current);
          voiceActivationTimerRef.current = null;
        }
        unsubscribe();
      };
    } else {
      // FlexVision: No microphone - just listen for broadcasts (don't start voice recognition)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenId, screenHasMicrophone, inputSettings.voiceInputToggle, inputSettings.voiceInputEnabled, inputSettings.voiceActivationDelay, inputBroadcast]);

  // Toggle voice recognition on/off
  const handleVoiceToggle = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      onStop?.();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous, language });
      onStart?.();
    }
  };

  // Don't render if browser doesn't support speech recognition or if disabled
  if (!browserSupportsSpeechRecognition || !inputSettings.voiceInputEnabled) {
    return null;
  }

  // Position classes mapping
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  // Transcript position classes
  const transcriptPositionClasses = {
    'bottom-right': 'bottom-20 right-0',
    'bottom-left': 'bottom-20 left-0',
    'top-right': 'top-20 right-0',
    'top-left': 'top-20 left-0'
  };

  return (
    <div className={`${showButton ? `absolute ${positionClasses[position]} z-20` : ''} ${className}`}>
      {/* Optional visual button */}
      {showButton && (
        <button
          onClick={handleVoiceToggle}
          className={`
            relative w-16 h-16 rounded-full transition-all duration-200
            ${listening 
              ? 'bg-red-500 shadow-lg shadow-red-500/50 scale-110' 
              : 'bg-blue-500 hover:bg-blue-600 shadow-lg'
            }
          `}
          title={listening ? 'Click to stop listening' : 'Click to start voice input'}
        >
          {/* Microphone Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
              />
            </svg>
          </div>
          
          {/* Pulsing ring when listening */}
          {listening && (
            <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></div>
          )}
        </button>
      )}

      {/* Transcript Display */}
      {showTranscript && transcript && (
        <div className={`${showButton ? `absolute ${transcriptPositionClasses[position]}` : 'fixed top-4 right-4'} bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[200px] max-w-[400px] z-50`}>
          <div className="text-cyan-400 text-xs mb-1">Voice Input:</div>
          <div className="text-white text-sm">{transcript}</div>
        </div>
      )}
    </div>
  );
}
