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
  
  console.log(`🎤 [VoiceInput] Screen: ${screenId}, hasMicrophone: ${screenHasMicrophone}`);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  // Check browser support and microphone permissions on mount
  useEffect(() => {
    if (screenHasMicrophone && !browserSupportsSpeechRecognition) {
      console.error('❌ [MIC] Browser does not support Speech Recognition API');
    } else if (screenHasMicrophone) {
      console.log('✅ [MIC] Browser supports Speech Recognition API');
      
      // Check microphone permissions
      if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'microphone' as PermissionName }).then((result) => {
          console.log('🎤 [MIC] Microphone permission status:', result.state);
          if (result.state === 'denied') {
            console.error('❌ [MIC] Microphone permission is DENIED. Please allow microphone access.');
          }
        }).catch(err => {
          console.warn('⚠️ [MIC] Could not check microphone permission:', err);
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
      console.log(`📡 [${screenId}] Broadcasting NON-EMPTY transcript: "${transcript}"`);
      inputBroadcast.broadcastTranscript(transcript, true);
    } else if (screenHasMicrophone && !transcript) {
      console.log(`📡 [${screenId}] Transcript is empty, not broadcasting`);
    }
  }, [transcript, inputBroadcast, screenHasMicrophone, screenId]);

  // Call onTranscript callback whenever transcript changes (but only once per unique transcript)
  useEffect(() => {
    if (transcript && onTranscript && transcript !== lastSentTranscriptRef.current) {
      console.log('🎤 Voice Input:', transcript);
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
        console.log(`✅ [${screenId}] Listening state: FALSE → TRUE (Started listening)`);
      } else {
        console.log(`⚠️ [${screenId}] Listening state: TRUE → FALSE (Stopped listening${wasListening ? ' - WHY?' : ''})`);
      }
      
      // Only broadcast if this screen has the microphone
      if (screenHasMicrophone) {
        inputBroadcast.broadcastListeningState(listening);
      }
    }
  }, [listening, voiceState, inputBroadcast, screenId, screenHasMicrophone]);

  useEffect(() => {
    voiceState.setTranscript(transcript);
    if (transcript) {
      console.log(`🎤 [${screenId}] 📝 Transcript changed to: "${transcript}"`);
    } else {
      console.log(`🎤 [${screenId}] 📝 Transcript cleared`);
    }
  }, [transcript, voiceState, screenId]);

  // Track listening state with ref to avoid dependency issues
  const listeningRef = useRef(false);

  // Push-to-talk keyboard control for voice input
  useEffect(() => {
    console.log(`🔄 [${screenId.toUpperCase()}] VoiceInput useEffect running...`);
    console.log(`🔄 [${screenId.toUpperCase()}] voiceInputEnabled: ${inputSettings.voiceInputEnabled}`);
    console.log(`🔄 [${screenId.toUpperCase()}] screenHasMicrophone: ${screenHasMicrophone}`);
    
    if (!inputSettings.voiceInputEnabled) {
      console.log('⚠️ Voice input is DISABLED in settings');
      return;
    }

    if (screenId === 'tsm') {
      // TSM: Broadcast voice events, don't handle locally (no microphone on TSM)
      const handleKeyDown = (e: KeyboardEvent) => {
        if (matchesInput(e, inputSettings.voiceInputToggle)) {
          e.preventDefault();
          console.log('📡 [TSM] Broadcasting voice keydown...');
          inputBroadcast.broadcastVoiceEvent('keydown', e.code);
          voiceState.setIsKeyPressed(true);
        }
      };

      const handleKeyUp = (e: KeyboardEvent) => {
        if (matchesInput(e, inputSettings.voiceInputToggle)) {
          e.preventDefault();
          console.log('📡 [TSM] Broadcasting voice keyup...');
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
      console.log(`🎤 [${screenId.toUpperCase()}] This screen has the microphone - will listen for TSM broadcasts`);
      console.log(`🎤 [${screenId.toUpperCase()}] Subscribing to voice events...`);
      
      const unsubscribe = inputBroadcast.onVoiceEvent((data) => {
        console.log(`📥 [${screenId.toUpperCase()}] Received voice event:`, data);
        if (data.eventType === 'keydown') {
          // Only start if not already listening (prevents repeat keydown events)
          if (!listeningRef.current) {
            console.log('📥 [MIC] Received voice keydown from TSM - starting recognition...');
            voiceState.setIsKeyPressed(true);
            console.log('🔴 [MIC] Starting voice recognition (broadcast from TSM)...');
            
            // Check if window has focus
            if (document.hasFocus()) {
              console.log('✅ [MIC] Window has focus - can use microphone');
            } else {
              console.warn('⚠️ [MIC] Window does NOT have focus - Speech Recognition may not work!');
              console.warn('💡 [MIC] User should click on this window or we need to request focus');
              // Try to focus the window (may not work due to browser restrictions)
              window.focus();
            }
            
            try {
              listeningRef.current = true;
              
              // Reset transcript at the START of a new voice session
              resetTranscript();
              console.log('🔄 [MIC] Transcript reset for new voice session');
              
              // Start listening first, then add debug listeners without overwriting library's handlers
              SpeechRecognition.startListening({ continuous, language });
              console.log('✅ [MIC] SpeechRecognition.startListening() called');
              console.log(`🎤 [MIC] Continuous: ${continuous}, Language: ${language}`);
              console.log('🎤 [MIC] Waiting for speech input...');
              
              // Add debug listeners AFTER starting (don't overwrite existing handlers)
              const recognition = (SpeechRecognition as any).getRecognition?.();
              if (recognition) {
                console.log('🔍 [MIC] Got native recognition instance - adding debug listeners');
                
                // Save existing handlers
                const originalOnStart = recognition.onstart;
                const originalOnEnd = recognition.onend;
                const originalOnError = recognition.onerror;
                const originalOnResult = recognition.onresult;
                
                // Add our debug logging WITHOUT overwriting
                recognition.addEventListener('start', () => {
                  console.log('🎙️ [NATIVE] Speech Recognition STARTED');
                });
                
                recognition.addEventListener('end', () => {
                  console.log('🔴 [NATIVE] Speech Recognition ENDED');
                  listeningRef.current = false;
                });
                
                recognition.addEventListener('error', (event: any) => {
                  console.error('❌ [NATIVE] Speech Recognition ERROR:', event.error, event);
                  if (event.error === 'not-allowed') {
                    console.error('🚫 [MIC] Microphone access denied! Check permissions.');
                  } else if (event.error === 'no-speech') {
                    console.warn('🔇 [MIC] No speech detected');
                  }
                  listeningRef.current = false;
                });
                
                recognition.addEventListener('result', (event: any) => {
                  console.log('✅ [NATIVE] Speech Recognition RESULT:', event);
                  const last = event.results.length - 1;
                  const text = event.results[last][0].transcript;
                  console.log('📝 [NATIVE] Transcript:', text);
                });
              }
              
              onStart?.();
            } catch (error) {
              console.error('❌ [MIC] Error starting SpeechRecognition:', error);
              listeningRef.current = false;
            }
          } else {
            console.log('📥 [MIC] Received voice keydown from TSM - already listening, ignoring');
          }
        } else if (data.eventType === 'reset') {
          // Reset command - stop and restart recognition to clear transcript
          console.log('📥 [MIC] Received RESET from command success - restarting with clean transcript');
          if (listeningRef.current) {
            // Stop current session
            SpeechRecognition.stopListening();
            listeningRef.current = false;
            resetTranscript();
            
            // Restart immediately if key is still pressed
            if (voiceState.isKeyPressed) {
              console.log('🔄 [MIC] Key still pressed - restarting recognition with clean slate...');
              setTimeout(() => {
                listeningRef.current = true;
                resetTranscript();
                SpeechRecognition.startListening({ continuous, language });
                console.log('✅ [MIC] Recognition restarted - ready for next command');
              }, 100); // Small delay to ensure stop completes
            }
          }
        } else if (data.eventType === 'keyup') {
          console.log('📥 [MIC] Received voice keyup from TSM');
          voiceState.setIsKeyPressed(false);
          
          // Check feedback using the global state
          const hasFeedback = voiceState.feedback !== null && voiceState.feedback !== '';
          
          // Only stop on release if no feedback is being shown
          if (listeningRef.current && !hasFeedback) {
            console.log('⏹️ [MIC] Stopping voice recognition (broadcast from TSM)...');
            listeningRef.current = false;
            SpeechRecognition.stopListening();
            onStop?.();
          } else if (hasFeedback) {
            console.log('⏸️ [MIC] Feedback active - waiting for feedback to clear');
          }
        }
      });

      console.log(`✅ [${screenId.toUpperCase()}] Successfully subscribed to voice events`);
      return unsubscribe;
    } else {
      // FlexVision: No microphone - just listen for broadcasts (don't start voice recognition)
      console.log(`📺 [${screenId.toUpperCase()}] This screen has no microphone - will only listen for transcript broadcasts`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenId, screenHasMicrophone, inputSettings.voiceInputToggle, inputSettings.voiceInputEnabled, inputBroadcast]);

  // Toggle voice recognition on/off
  const handleVoiceToggle = () => {
    if (listening) {
      console.log('⏹️ Stopping voice recognition...');
      SpeechRecognition.stopListening();
      onStop?.();
    } else {
      console.log('🔴 Starting voice recognition...');
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
