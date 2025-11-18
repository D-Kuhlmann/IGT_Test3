import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { VoiceInput } from './shared/VoiceInput';
import { useVoiceCommands } from '../hooks/useVoiceCommands';
import { useGlobalVoice } from '../contexts/GlobalVoiceContext';
import { useVoiceInputState } from '../contexts/VoiceInputStateContext';
import { useInputBroadcast } from '../contexts/InputBroadcastContext';
import { useSettings } from '../contexts/SettingsContext';
import { useAutomation } from '../contexts/AutomationContext';

export function GlobalVoiceCommandHandler() {
  const location = useLocation();
  const voiceContext = useGlobalVoice();
  const { setFeedback, setTranscript, isKeyPressed, setIsListening, setIsKeyPressed } = useVoiceInputState();
  const { resetTranscript } = useSpeechRecognition();
  const inputBroadcast = useInputBroadcast();
  const { inputSettings } = useSettings();
  const { automationState } = useAutomation();
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastProcessedTranscriptRef = useRef<string>('');
  const commandActionRef = useRef<(() => void) | null>(null);
  const commandSuccessfulRef = useRef<boolean>(false);
  const lastTranscriptRef = useRef<string>('');

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
    
    // Check if voice automation is enabled
    if (!automationState.voice) {
      return;
    }
    
    // Ignore if we already processed this exact transcript
    if (transcript === lastProcessedTranscriptRef.current) {
      return;
    }
    
    // Store the transcript we're about to process
    lastProcessedTranscriptRef.current = transcript;
    lastTranscriptRef.current = transcript;
    
    // Process the command (will call handleFeedback if command matches)
    const wasSuccessful = processVoiceCommand(transcript);
    commandSuccessfulRef.current = wasSuccessful;
    
    if (!wasSuccessful) {
    }
  };

  // Feedback handler - stops listening, delays command execution and feedback
  const handleFeedback = (message: string, action: () => void) => {
    // Clear any existing timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }

    // Stop listening but keep the panel visible with the transcript
    SpeechRecognition.stopListening();

    // Broadcast reset event to WMU to restart recognition with clean transcript
    inputBroadcast.broadcastVoiceEvent('reset', '');

    // Store the action to execute after delay
    commandActionRef.current = action;

    // Wait 800ms to let user see their input, then execute command and show feedback
    feedbackTimeoutRef.current = setTimeout(() => {
      // Execute the actual command (e.g., go to next workflow)
      if (commandActionRef.current) {
        commandActionRef.current();
        commandActionRef.current = null;
      }

      setFeedback(message);
      
      // Clear transcript after showing feedback
      setTranscript('');
      resetTranscript();
      lastProcessedTranscriptRef.current = ''; // Reset for next command
      
      // After 3 more seconds: clear feedback and check if key is still pressed
      feedbackTimeoutRef.current = setTimeout(() => {
        setFeedback(null);
        
        // Close all menus after feedback is complete
        const closeAllMenusEvent = new CustomEvent('closeAllMenus');
        window.dispatchEvent(closeAllMenusEvent);
        
        // Check if user is still holding the key
        if (isKeyPressed) {
          // Clear transcript before restarting to hide the overlay
          setTranscript('');
          resetTranscript();
          lastTranscriptRef.current = '';
          
          // Manually set listening state to keep panel visible during restart
          setIsListening(true);
          
          // Broadcast keydown to trigger proper voice activation through VoiceInput component
          // Use a generic key code since we're just triggering the restart
          inputBroadcast.broadcastVoiceEvent('keydown', 'VoiceRestart');
        } else {
          // Panel will close automatically since no listening and no feedback
        }
      }, 3000);
    }, 800); // 800ms delay to show the user's input before executing command and showing feedback
  };

  // Use the global voice handlers from context
  const { processVoiceCommand } = useVoiceCommands({
    onNextWorkflow: voiceContext.onNextWorkflow,
    onPreviousWorkflow: voiceContext.onPreviousWorkflow,
    onRestartWizard: voiceContext.onRestartWizard,
    onGoToStep: voiceContext.onGoToStep,
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
      
      // Update global transcript state so FlexVision can show it
      setTranscript(data.transcript);
      
      // Process the command
      handleTranscript(data.transcript);
    });

    return unsubscribe;
  }, [inputBroadcast, handleTranscript, setTranscript]);

  // Listen for broadcasted listening state from other screens
  useEffect(() => {
    const unsubscribe = inputBroadcast.onListeningState((data) => {
      console.log('🎤 Listening state changed:', data.isListening, 'Last transcript:', lastTranscriptRef.current, 'Command successful:', commandSuccessfulRef.current);
      
      // Update global listening state so FlexVision overlay appears
      setIsListening(data.isListening);
      
      // If listening stopped and we have a transcript but no successful command, show failure feedback
      if (!data.isListening) {
        // Capture the command success state RIGHT NOW before any delays
        const wasSuccessfulNow = commandSuccessfulRef.current;
        const currentTranscript = lastTranscriptRef.current;
        
        // Wait a moment for any final transcripts to arrive (Windows can be slow)
        setTimeout(() => {
          const hasTranscript = lastTranscriptRef.current && lastTranscriptRef.current.trim() !== '';
          // Use the captured success state, not the current one (which might have changed)
          const wasSuccessful = wasSuccessfulNow;
          
          console.log('🎤 Checking for error feedback - Has transcript:', hasTranscript, 'Was successful (captured):', wasSuccessful, 'Current transcript:', lastTranscriptRef.current);
          
          if (hasTranscript && !wasSuccessful) {
            console.log('🎤 Showing transcript for 2 seconds before error message');
            
            // First show just the transcript for 2 seconds so user can read their input
            // (feedback is null, so only transcript shows)
            
            // After 2 seconds, check again if command is still not successful
            setTimeout(() => {
              // Double-check that command is still not successful before showing error
              if (!commandSuccessfulRef.current) {
                console.log('🎤 Now showing "Command not recognized" feedback');
                setFeedback('Command not recognized');
                
                // Wait 2 more seconds, then clear everything
                setTimeout(() => {
                  console.log('🎤 Clearing error feedback and transcript');
                  setFeedback(null);
                  setTranscript('');
                  resetTranscript();
                  lastTranscriptRef.current = '';
                  lastProcessedTranscriptRef.current = '';
                  commandSuccessfulRef.current = false;
                  // Ensure isKeyPressed is also cleared to close the overlay
                  setIsKeyPressed(false);
                }, 2000); // Show error for 2 seconds then clear
              } else {
                // Command was recognized during the delay, clear everything properly
                console.log('🎤 Command was recognized during delay, clearing all state');
                setFeedback(null);
                setTranscript('');
                resetTranscript();
                lastTranscriptRef.current = '';
                lastProcessedTranscriptRef.current = '';
                commandSuccessfulRef.current = false;
                setIsKeyPressed(false);
              }
            }, 2000); // Show transcript alone for 2 seconds before error
          } else if (!hasTranscript) {
            // No transcript - just clear everything immediately
            console.log('🎤 No transcript received, clearing state');
            setFeedback(null);
            setTranscript('');
            resetTranscript();
            lastTranscriptRef.current = '';
            lastProcessedTranscriptRef.current = '';
            commandSuccessfulRef.current = false;
            // Ensure isKeyPressed is also cleared
            setIsKeyPressed(false);
          } else if (wasSuccessful) {
            // Command was successful - refs are already cleared by handleFeedback
            // Just ensure everything is cleaned up
            console.log('🎤 Command was successful, ensuring cleanup');
            lastTranscriptRef.current = '';
            lastProcessedTranscriptRef.current = '';
          }
        }, 500); // Wait 500ms for any final transcripts on Windows
      }
      
      // Reset tracking when listening starts
      if (data.isListening) {
        commandSuccessfulRef.current = false;
        lastTranscriptRef.current = '';
      }
    });

    return unsubscribe;
  }, [inputBroadcast, setIsListening, setFeedback, setTranscript, resetTranscript, setIsKeyPressed]);

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
