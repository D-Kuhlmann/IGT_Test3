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
  setWorkflowStep: (step: number, subStep?: string, workflowId?: string, wizardVisible?: boolean, wizardCompleted?: boolean) => void;
  setWorkflowStepId: (stepId: string, preset?: 1 | 2) => void;
  setWizardState: (visible: boolean, completed: boolean) => void;
  setAlignedImages: (apImage?: string, latImage?: string) => void;
  setCurrentAngleIndex: (index: number) => void;
  syncWorkflowState: (state: WorkflowState) => void;
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
  }, [screenId, workflowStepId, activePreset, wizardVisible, wizardCompleted]);

  // Set workflow step ID (for SmartWorkflows overlay) and broadcast
  const setWorkflowStepId = useCallback((stepId: string, preset?: 1 | 2) => {
    const state: WorkflowState = {
      currentStep,
      currentSubStep,
      workflowId,
      workflowStepId: stepId,
      activePreset: preset || activePreset,
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
  }, [screenId, currentStep, currentSubStep, workflowId, activePreset]);

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
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, alignedSkullAP, alignedSkullLAT]);

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
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT]);

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
  }, [screenId, currentStep, currentSubStep, workflowId, workflowStepId, activePreset, wizardVisible, wizardCompleted, alignedSkullAP, alignedSkullLAT]);

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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    
    if (channelRef.current) {
      channelRef.current.postMessage(state);
    }
  }, []);

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
    setWorkflowStep,
    setWorkflowStepId,
    setWizardState,
    setAlignedImages,
    setCurrentAngleIndex,
    syncWorkflowState,
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
