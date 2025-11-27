import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

interface WorkflowState {
  currentStep: number;
  currentSubStep?: string;
  workflowId?: string;
  workflowStepId?: string; // For SmartWorkflows overlay step IDs (e.g., 'review', 'planning')
  activePreset?: 1 | 2;
  wizardVisible?: boolean; // For SmartNavigator wizard visibility
  wizardCompleted?: boolean; // For SmartNavigator wizard completion
  alignedSkullAP?: string; // Path to aligned AP skull image
  alignedSkullLAT?: string; // Path to aligned LAT skull image
  currentAngleIndex?: number; // Currently highlighted angle during navigation (0-3)
  ivusRecordingStopped?: boolean; // IVUS in review mode (recording stopped)
  ivusSetupStep?: number; // IVUS setup step (1, 2, 3, or 0 for complete)
  ivusIsRecording?: boolean; // IVUS recording is active
  ivusVideoTime?: number; // Current time of IVUS pullback video for sync
  ivusMode?: 'LIVE' | 'RECORDING' | 'REVIEW'; // Simple mode indicator for IVUS
  ivusCinePressed?: boolean; // CINE button is pressed during IVUS recording
  ivusIsPlaying?: boolean; // Video playback state in review mode
  timestamp: number;
}

interface WorkflowSyncContextType {
  currentStep: number;
  currentSubStep?: string;
  workflowId?: string;
  workflowStepId?: string;
  activePreset: 1 | 2;
  wizardVisible?: boolean;
  wizardCompleted?: boolean;
  alignedSkullAP?: string;
  alignedSkullLAT?: string;
  currentAngleIndex?: number;
  ivusRecordingStopped?: boolean;
  ivusSetupStep?: number;
  ivusIsRecording?: boolean;
  ivusVideoTime?: number;
  ivusMode?: 'LIVE' | 'RECORDING' | 'REVIEW';
  ivusCinePressed?: boolean;
  ivusIsPlaying?: boolean;
  setWorkflowStep: (step: number, subStep?: string, workflowId?: string, wizardVisible?: boolean, wizardCompleted?: boolean) => void;
  setWorkflowStepId: (stepId: string, preset?: 1 | 2) => void;
  setWizardState: (visible: boolean, completed: boolean) => void;
  setAlignedImages: (apImage?: string, latImage?: string) => void;
  setCurrentAngleIndex: (index: number) => void;
  setIvusRecordingStopped: (stopped: boolean) => void;
  setIvusSetupStep: (step: number) => void;
  setIvusRecordingState: (isRecording: boolean, videoTime?: number) => void;
  setIvusStopRecording: (videoTime?: number) => void;
  setIvusMode: (mode: 'LIVE' | 'RECORDING' | 'REVIEW') => void;
  setIvusCinePressed: (pressed: boolean) => void;
  setIvusPlaybackState: (isPlaying: boolean) => void;
  syncWorkflowState: (state: WorkflowState) => void;
  resetAllStates: (preset?: 1 | 2) => void;
}

const WorkflowSyncContext = createContext<WorkflowSyncContextType | undefined>(undefined);

const BROADCAST_CHANNEL_NAME = 'igt-workflow-sync';
const STORAGE_KEY = 'igt-workflow-state';

interface WorkflowSyncProviderProps {
  children: ReactNode;
  screenId: 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2';
}

export function WorkflowSyncProvider({ children, screenId }: WorkflowSyncProviderProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [currentSubStep, setCurrentSubStep] = useState<string | undefined>(undefined);
  const [workflowId, setWorkflowId] = useState<string | undefined>(undefined);
  const [workflowStepId, setWorkflowStepId_] = useState<string | undefined>(undefined);
  const [activePreset, setActivePreset] = useState<1 | 2>(1); // Default to Cardio
  const [wizardVisible, setWizardVisible] = useState<boolean | undefined>(undefined);
  const [wizardCompleted, setWizardCompleted] = useState<boolean | undefined>(undefined);
  const [alignedSkullAP, setAlignedSkullAP] = useState<string | undefined>(undefined);
  const [alignedSkullLAT, setAlignedSkullLAT] = useState<string | undefined>(undefined);
  const [currentAngleIndex, setCurrentAngleIndex_] = useState<number | undefined>(undefined);
  const [ivusRecordingStopped, setIvusRecordingStopped_] = useState<boolean | undefined>(undefined);
  const [ivusSetupStep, setIvusSetupStep_] = useState<number | undefined>(undefined);
  const [ivusIsRecording, setIvusIsRecording_] = useState<boolean | undefined>(undefined);
  const [ivusVideoTime, setIvusVideoTime_] = useState<number | undefined>(undefined);
  const [ivusMode, setIvusMode_] = useState<'LIVE' | 'RECORDING' | 'REVIEW' | undefined>('LIVE');
  const [ivusCinePressed, setIvusCinePressed_] = useState<boolean | undefined>(undefined);
  const [ivusIsPlaying, setIvusIsPlaying_] = useState<boolean | undefined>(undefined);
  const channelRef = React.useRef<BroadcastChannel | null>(null);

  // Initialize BroadcastChannel and load initial state
  useEffect(() => {
    // Load initial state from localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const state: WorkflowState = JSON.parse(stored);
        setCurrentStep(state.currentStep);
        setCurrentSubStep(state.currentSubStep);
        setWorkflowId(state.workflowId);
        setWorkflowStepId_(state.workflowStepId);
        if (state.activePreset) {
          setActivePreset(state.activePreset);
        }
        setWizardVisible(state.wizardVisible);
        setWizardCompleted(state.wizardCompleted);
        setAlignedSkullAP(state.alignedSkullAP);
        setAlignedSkullLAT(state.alignedSkullLAT);
        setCurrentAngleIndex_(state.currentAngleIndex);
        setIvusRecordingStopped_(state.ivusRecordingStopped);
        setIvusSetupStep_(state.ivusSetupStep);
        setIvusIsRecording_(state.ivusIsRecording);
        setIvusVideoTime_(state.ivusVideoTime);
        setIvusCinePressed_(state.ivusCinePressed);
        setIvusIsPlaying_(state.ivusIsPlaying);
      } catch (error) {
      }
    }

    // Initialize BroadcastChannel
    if (typeof BroadcastChannel !== 'undefined') {
      channelRef.current = new BroadcastChannel(BROADCAST_CHANNEL_NAME);

      channelRef.current.onmessage = (event: MessageEvent<WorkflowState>) => {
        const state = event.data;
        console.log('📥 WorkflowSync - Received broadcast:', state);
        
        // Update local state
        setCurrentStep(state.currentStep);
        setCurrentSubStep(state.currentSubStep);
        setWorkflowId(state.workflowId);
        setWorkflowStepId_(state.workflowStepId);
        if (state.activePreset) {
          setActivePreset(state.activePreset);
        }
        setWizardVisible(state.wizardVisible);
        setWizardCompleted(state.wizardCompleted);
        setAlignedSkullAP(state.alignedSkullAP);
        setAlignedSkullLAT(state.alignedSkullLAT);
        setCurrentAngleIndex_(state.currentAngleIndex);
        setIvusRecordingStopped_(state.ivusRecordingStopped);
        setIvusSetupStep_(state.ivusSetupStep);
        setIvusIsRecording_(state.ivusIsRecording);
        setIvusVideoTime_(state.ivusVideoTime);
        setIvusMode_(state.ivusMode);
        setIvusCinePressed_(state.ivusCinePressed);
        setIvusIsPlaying_(state.ivusIsPlaying);
        
        // Also update localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      };

    }

    return () => {
      if (channelRef.current) {
        channelRef.current.close();
      }
    };
  }, [screenId]);

  // Set workflow step and broadcast to other screens
  const setWorkflowStep = useCallback((step: number, subStep?: string, wfId?: string, wizVis?: boolean, wizComp?: boolean) => {
    const state: WorkflowState = {
      currentStep: step,
      currentSubStep: subStep,
      workflowId: wfId,
      workflowStepId,
      activePreset,
      wizardVisible: wizVis !== undefined ? wizVis : wizardVisible,
      wizardCompleted: wizComp !== undefined ? wizComp : wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      timestamp: Date.now(),
    };

    // Update local state
    setCurrentStep(step);
    setCurrentSubStep(subStep);
    setWorkflowId(wfId);
    if (wizVis !== undefined) setWizardVisible(wizVis);
    if (wizComp !== undefined) setWizardCompleted(wizComp);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep]);

  // Set workflow step ID (for SmartWorkflows overlay) and broadcast
  const setWorkflowStepId = useCallback((stepId: string, preset?: 1 | 2) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId: stepId,
      activePreset: preset || activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      timestamp: Date.now(),
    };

    // Update local state
    setWorkflowStepId_(stepId);
    if (preset) {
      setActivePreset(preset);
    }

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep]);

  // Set wizard state (visibility and completion) and broadcast
  const setWizardState = useCallback((visible: boolean, completed: boolean) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible: visible,
      wizardCompleted: completed,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      timestamp: Date.now(),
    };

    // Update local state
    setWizardVisible(visible);
    setWizardCompleted(completed);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep]);

  // Set aligned skull images and broadcast
  const setAlignedImages = useCallback((apImage?: string, latImage?: string) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP: apImage !== undefined ? apImage : alignedSkullAP,
      alignedSkullLAT: latImage !== undefined ? latImage : alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      timestamp: Date.now(),
    };

    // Update local state
    if (apImage !== undefined) setAlignedSkullAP(apImage);
    if (latImage !== undefined) setAlignedSkullLAT(latImage);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep]);

  // Set current angle index (for angle cycling navigation) and broadcast
  const setCurrentAngleIndex = useCallback((index: number) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex: index,
      ivusRecordingStopped,
      ivusSetupStep,
      timestamp: Date.now(),
    };

    // Update local state
    setCurrentAngleIndex_(index);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log('💾 WorkflowSync - Saved to localStorage:', state);

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
      console.log('📡 WorkflowSync - Broadcasted state via BroadcastChannel');
    } else {
      console.warn('⚠️ WorkflowSync - No BroadcastChannel available');
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, ivusRecordingStopped, ivusSetupStep]);

  // Set IVUS recording stopped state and broadcast
  const setIvusRecordingStopped = useCallback((stopped: boolean) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped: stopped,
      ivusSetupStep,
      timestamp: Date.now(),
    };

    // Update local state
    setIvusRecordingStopped_(stopped);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusSetupStep]);

  // Set IVUS setup step and broadcast
  const setIvusSetupStep = useCallback((step: number) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep: step,
      timestamp: Date.now(),
    };

    // Update local state
    setIvusSetupStep_(step);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped]);

  // Set IVUS recording state and video time for sync
  const setIvusRecordingState = useCallback((isRecording: boolean, videoTime?: number) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      ivusIsRecording: isRecording,
      ivusVideoTime: videoTime,
      timestamp: Date.now(),
    };

    // Update local state
    setIvusIsRecording_(isRecording);
    if (videoTime !== undefined) {
      setIvusVideoTime_(videoTime);
    }

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep]);

  // Stop IVUS recording and enter review mode (atomically sets both states)
  const setIvusStopRecording = useCallback((videoTime: number = 32) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped: true,  // Enter review mode
      ivusSetupStep,
      ivusIsRecording: false,       // Stop recording
      ivusVideoTime: videoTime,
      ivusMode: 'REVIEW',           // Set mode to REVIEW
      timestamp: Date.now(),
    };

    // Update local state
    setIvusRecordingStopped_(true);
    setIvusIsRecording_(false);
    setIvusVideoTime_(videoTime);
    setIvusMode_('REVIEW');

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusSetupStep]);

  // Set IVUS mode directly (LIVE, RECORDING, or REVIEW)
  const setIvusMode = useCallback((mode: 'LIVE' | 'RECORDING' | 'REVIEW') => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped: mode === 'REVIEW',
      ivusSetupStep,
      ivusIsRecording: mode === 'RECORDING',
      ivusVideoTime,
      ivusMode: mode,
      timestamp: Date.now(),
    };

    // Update local state
    setIvusMode_(mode);
    setIvusRecordingStopped_(mode === 'REVIEW');
    setIvusIsRecording_(mode === 'RECORDING');

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusSetupStep, ivusVideoTime]);

  // Set IVUS CINE button pressed state
  const setIvusCinePressed = useCallback((pressed: boolean) => {
    const state: WorkflowState = {
      screenId,
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      ivusIsRecording,
      ivusVideoTime,
      ivusMode,
      ivusCinePressed: pressed,
      timestamp: Date.now(),
    };

    // Update local state
    setIvusCinePressed_(pressed);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep, ivusIsRecording, ivusVideoTime, ivusMode]);

  // Set IVUS playback state (play/pause in review mode)
  const setIvusPlaybackState = useCallback((isPlaying: boolean) => {
    const state: WorkflowState = {
      screenId,
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId,
      activePreset,
      wizardVisible,
      wizardCompleted,
      alignedSkullAP,
      alignedSkullLAT,
      currentAngleIndex,
      ivusRecordingStopped,
      ivusSetupStep,
      ivusIsRecording,
      ivusVideoTime,
      ivusMode,
      ivusCinePressed,
      ivusIsPlaying: isPlaying,
      timestamp: Date.now(),
    };

    // Update local state
    setIvusIsPlaying_(isPlaying);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT, currentAngleIndex, ivusRecordingStopped, ivusSetupStep, ivusIsRecording, ivusVideoTime, ivusMode, ivusCinePressed]);

  // Sync workflow state (for external updates)
  const syncWorkflowState = useCallback((state: WorkflowState) => {
    setCurrentStep(state.currentStep);
    setCurrentSubStep(state.currentSubStep);
    setWorkflowId(state.workflowId);
    setWorkflowStepId_(state.workflowStepId);
    if (state.activePreset) {
      setActivePreset(state.activePreset);
    }
    setWizardVisible(state.wizardVisible);
    setWizardCompleted(state.wizardCompleted);
    setAlignedSkullAP(state.alignedSkullAP);
    setAlignedSkullLAT(state.alignedSkullLAT);
    setCurrentAngleIndex_(state.currentAngleIndex);
    setIvusRecordingStopped_(state.ivusRecordingStopped);
    setIvusSetupStep_(state.ivusSetupStep);
    setIvusIsRecording_(state.ivusIsRecording);
    setIvusVideoTime_(state.ivusVideoTime);
    setIvusMode_(state.ivusMode);
    setIvusCinePressed_(state.ivusCinePressed);
    setIvusIsPlaying_(state.ivusIsPlaying);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, []);

  // Reset all states to initial values (for preset changes)
  const resetAllStates = useCallback((preset?: 1 | 2) => {
    const resetState: WorkflowState = {
      currentStep: 1,
      currentSubStep: undefined,
      workflowId: undefined,
      workflowStepId: '',
      activePreset: preset || activePreset,
      wizardVisible: undefined,
      wizardCompleted: undefined,
      alignedSkullAP: undefined,
      alignedSkullLAT: undefined,
      currentAngleIndex: undefined,
      ivusRecordingStopped: undefined,
      ivusSetupStep: undefined,
      ivusIsRecording: undefined,
      ivusVideoTime: undefined,
      ivusMode: 'LIVE',
      timestamp: Date.now(),
    };

    // Update all local states
    setCurrentStep(1);
    setCurrentSubStep(undefined);
    setWorkflowId(undefined);
    setWorkflowStepId_('');
    if (preset) {
      setActivePreset(preset);
    }
    setWizardVisible(undefined);
    setWizardCompleted(undefined);
    setAlignedSkullAP(undefined);
    setAlignedSkullLAT(undefined);
    setCurrentAngleIndex_(undefined);
    setIvusRecordingStopped_(undefined);
    setIvusSetupStep_(undefined);
    setIvusIsRecording_(undefined);
    setIvusVideoTime_(undefined);
    setIvusMode_('LIVE');

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resetState));

    // Broadcast to other screens
    if (channelRef.current) {
      channelRef.current.postMessage(resetState);
    }
  }, [activePreset]);

  const value: WorkflowSyncContextType = {
    currentStep,
    currentSubStep,
    workflowId,
    workflowStepId,
    activePreset,
    wizardVisible,
    wizardCompleted,
    alignedSkullAP,
    alignedSkullLAT,
    currentAngleIndex,
    ivusRecordingStopped,
    ivusSetupStep,
    ivusIsRecording,
    ivusVideoTime,
    ivusMode,
    ivusCinePressed,
    ivusIsPlaying,
    setWorkflowStep,
    setWorkflowStepId,
    setWizardState,
    setAlignedImages,
    setCurrentAngleIndex,
    setIvusRecordingStopped,
    setIvusSetupStep,
    setIvusRecordingState,
    setIvusStopRecording,
    setIvusMode,
    setIvusCinePressed,
    setIvusPlaybackState,
    syncWorkflowState,
    resetAllStates,
  };

  return (
    <WorkflowSyncContext.Provider value={value}>
      {children}
    </WorkflowSyncContext.Provider>
  );
}

export function useWorkflowSync() {
  const context = useContext(WorkflowSyncContext);
  if (context === undefined) {
    throw new Error('useWorkflowSync must be used within a WorkflowSyncProvider');
  }
  return context;
}
