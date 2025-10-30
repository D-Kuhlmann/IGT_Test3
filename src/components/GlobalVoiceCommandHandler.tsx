import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { VoiceInput } from './shared/VoiceInput';
import { useVoiceCommands } from '../hooks/useVoiceCommands';
import { useGlobalVoice } from '../contexts/GlobalVoiceContext';
import { useVoiceInputState } from '../contexts/VoiceInputStateContext';
import { useInputBroadcast } from '../contexts/InputBroadcastContext';

export function GlobalVoiceCommandHandler() {
  const location = useLocation();
  const voiceContext = useGlobalVoice();
  const { setFeedback, setTranscript, isKeyPressed, setIsListening } = useVoiceInputState();
  const { resetTranscript } = useSpeechRecognition();
  const inputBroadcast = useInputBroadcast();
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastProcessedTranscriptRef = useRef<string>('');
  const commandActionRef = useRef<(() => void) | null>(null);

  // Determine screen ID based on current route
  const getScreenId = (): 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2' => {
    const path = location.pathname;
    if (path.includes('/tsm')) return 'tsm';
    if (path.includes('/flexvision')) return 'flexvision';
    if (path.includes('/wmu')) return 'wmu';
    if (path.includes('/flexspots1') || path.includes('/flexspot1')) return 'flexspots1';
    if (path.includes('/flexspots2') || path.includes('/flexspot2')) return 'flexspots2';
    return 'flexvision'; // Default to flexvision (has microphone)
  };

  // Wrap processVoiceCommand to prevent duplicate processing
  const handleTranscript = (transcript: string) => {
    // Ignore empty transcripts
    if (!transcript || transcript.trim() === '') {
      return;
    }
    
    // Ignore if we already processed this exact transcript
    if (transcript === lastProcessedTranscriptRef.current) {
      console.log('⏭️ Skipping duplicate transcript:', transcript);
      return;
    }
    
    // Store the transcript we're about to process
    lastProcessedTranscriptRef.current = transcript;
    
    // Process the command (will call handleFeedback if command matches)
    processVoiceCommand(transcript);
  };

  // Feedback handler - stops listening, delays command execution and feedback
  const handleFeedback = (message: string, action: () => void) => {
    // Clear any existing timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    // Stop listening but keep the panel visible with the transcript
    console.log('⏹️ Stopping voice input after command match...');
    SpeechRecognition.stopListening();

    // Broadcast reset event to WMU to restart recognition with clean transcript
    console.log('📡 Broadcasting voice reset to clear transcript on WMU...');
    inputBroadcast.broadcastVoiceEvent('reset', '');

    // Store the action to execute after delay
    commandActionRef.current = action;

    // Wait 800ms to let user see their input, then execute command and show feedback
    feedbackTimeoutRef.current = setTimeout(() => {
      console.log('⚡ Executing command action...');
      // Execute the actual command (e.g., go to next workflow)
      if (commandActionRef.current) {
        commandActionRef.current();
        commandActionRef.current = null;
      }

      console.log('✅ Showing feedback:', message);
      setFeedback(message);
      
      // Clear transcript after showing feedback
      console.log('🔄 Clearing transcript after showing feedback...');
      setTranscript('');
      resetTranscript();
      lastProcessedTranscriptRef.current = ''; // Reset for next command
      
      // After 2 more seconds: clear feedback and check if key is still pressed
      feedbackTimeoutRef.current = setTimeout(() => {
        console.log('🔄 Clearing feedback...');
        setFeedback(null);
        
        // Check if user is still holding the key
        if (isKeyPressed) {
          console.log('🔴 Key still pressed - restarting voice recognition for next command...');
          SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
        } else {
          console.log('⏹️ Key released - closing panel');
          // Panel will close automatically since no listening and no feedback
        }
      }, 2000);
    }, 800); // 800ms delay to show the user's input before executing command and showing feedback
  };

  // Use the global voice handlers from context
  const { processVoiceCommand } = useVoiceCommands({
    onNextWorkflow: voiceContext.onNextWorkflow,
    onPreviousWorkflow: voiceContext.onPreviousWorkflow,
    onRestartWizard: voiceContext.onRestartWizard,
    onShowWorkflows: voiceContext.onShowWorkflows,
    onHideWorkflows: voiceContext.onHideWorkflows,
    onShowPresets: voiceContext.onShowPresets,
    onHidePresets: voiceContext.onHidePresets,
    onToggleFocusMode: voiceContext.onToggleFocusMode,
    onOpenSettings: voiceContext.onOpenSettings,
    onCloseSettings: voiceContext.onCloseSettings,
    onPreset1: voiceContext.onPreset1,
    onPreset2: voiceContext.onPreset2,
    onFeedback: handleFeedback,
  });

  // Listen for broadcasted transcripts from other screens (e.g., screen with microphone)
  useEffect(() => {
    const unsubscribe = inputBroadcast.onTranscript((data) => {
      console.log('📥 [GlobalVoiceCommandHandler] Received broadcasted transcript:', data.transcript);
      
      // Update global transcript state so FlexVision can show it
      console.log('🔄 [GlobalVoiceCommandHandler] Setting transcript in VoiceInputState:', data.transcript);
      setTranscript(data.transcript);
      
      // Process the command
      handleTranscript(data.transcript);
    });

    return unsubscribe;
  }, [inputBroadcast, handleTranscript, setTranscript]);

  // Listen for broadcasted listening state from other screens
  useEffect(() => {
    const unsubscribe = inputBroadcast.onListeningState((data) => {
      console.log('📥 [GlobalVoiceCommandHandler] Received broadcasted listening state:', data.isListening);
      
      // Update global listening state so FlexVision overlay appears
      setIsListening(data.isListening);
    });

    return unsubscribe;
  }, [inputBroadcast, setIsListening]);

  return (
    <VoiceInput 
      onTranscript={handleTranscript}
      continuous={true}
      language="en-US"
      showTranscript={true}
      showButton={false}
      screenId={getScreenId()}
    />
  );
}
