import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { XrayLive } from './screens/flexvision/XrayLive';
import { InterventionalWorkspace } from './screens/flexvision/InterventionalWorkspace';
import { Hemo } from './screens/flexvision/Hemo';
import { SmartNavigator } from "./screens/flexvision/SmartNavigator";
import { Placeholder } from "./screens/flexvision/Placeholder";
import { StatusBar } from "./shared/StatusBar";
import { NavigationHeader } from "./screens/flexvision/NavigationHeader";
import { NavigationMenu } from "./shared/NavigationMenu";
import { SmartWorkflowsOverlay } from "./shared/SmartWorkflowsOverlay";
import { PresetsOverlay } from "./shared/PresetsOverlay";
import { WorkflowStatusIndicator } from "./shared/WorkflowStatusIndicator";
import { SettingsMenu } from "./SettingsMenu";
import { useGlobalVoice } from '../contexts/GlobalVoiceContext';
import { useVoiceInputState } from '../contexts/VoiceInputStateContext';
import { useSettings, matchesInput } from '../contexts/SettingsContext';
import { InputBroadcastProvider, useInputBroadcast } from '../contexts/InputBroadcastContext';
import { WorkflowSyncProvider, useWorkflowSync } from '../contexts/WorkflowSyncContext';
import { useUnifiedInput } from '../hooks/useUnifiedInput';
import { useAngle } from '../contexts/AngleContext';
import { useDateTime } from '../hooks/useDateTime';
import { useActiveComponents } from '../contexts/ActiveComponentsContext';
import { getNextWorkflow, getPreviousWorkflow } from "../config/workflows";
import type { WorkflowStep } from "../types";

function ScreenFlexvisionInner() {
  const [showWorkflows, setShowWorkflows] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const inputBroadcast = useInputBroadcast();
  const workflowSync = useWorkflowSync();
  const { registerHandlers, unregisterHandlers } = useGlobalVoice();
  const { isListening, transcript, feedback } = useVoiceInputState();
  const [focusMode, setFocusMode] = useState(false);
  const [focusedComponent, setFocusedComponent] = useState<'xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder'>('xray');
  const [selectedComponent, setSelectedComponent] = useState<'xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder' | null>(null);
  const [iwSubFocus, setIwSubFocus] = useState<'none' | 'angles'>('none');
  const [selectedAngleIndex, setSelectedAngleIndex] = useState(0);
  const [activePreset, setActivePreset] = useState<1 | 2>(1);
  const [smartNavResetKey, setSmartNavResetKey] = useState(0);
  const { setSelectedAngle, activateUniGuide } = useAngle();
  const { inputSettings, setIsSettingsOpen } = useSettings();
  const { setActiveComponents, setFocusedComponent: setContextFocusedComponent } = useActiveComponents();

  // Workflow steps mapping for header display
  const workflowStepsPreset1: WorkflowStep[] = [
    { id: "review", label: "Review", category: "Review" },
    { id: "ultrasound", label: "Access", category: "Access" },
    { id: "ccta-planning", label: "Baseline DSA", category: "Planning" },
    { id: "ivus-acquisition", label: "IVUS Acquisition", category: "Treatment" },
    { id: "start", label: "Confirm DSA", category: "Planning" },
    { id: "finalise", label: "Finalise", category: "Treatment" },
  ];

  const workflowStepsPreset2: WorkflowStep[] = [
    { id: "start", label: "Start", category: "Start" },
    { id: "access", label: "Access", category: "Access" },
    { id: "3d-scan", label: "3D Scan", category: "3D Scan" },
    { id: "planning", label: "Planning", category: "Planning" },
    { id: "treatment", label: "Treatment", category: "Treatment" },
  ];

  // Get current workflow step label for header
  const getCurrentWorkflowStepLabel = (): string | undefined => {
    const stepId = workflowSync.workflowStepId;
    if (!stepId) return undefined;
    
    const steps = activePreset === 1 ? workflowStepsPreset1 : workflowStepsPreset2;
    const step = steps.find(s => s.id === stepId);
    return step?.label;
  };

  const currentWorkflowStepLabel = getCurrentWorkflowStepLabel();

  // Debug: Log transcript updates on FlexVision
  useEffect(() => {
  }, [transcript]);

  // Keep overlay open when listening, showing feedback, or when there's a transcript to display
  const shouldShowVoiceOverlay = isListening || !!feedback || !!transcript;

  // Refs to track latest values for voice handlers
  const workflowSyncRef = useRef(workflowSync);
  const activePresetRef = useRef(activePreset);
  
  // Keep refs updated
  useEffect(() => {
    workflowSyncRef.current = workflowSync;
  }, [workflowSync]);
  
  useEffect(() => {
    activePresetRef.current = activePreset;
  }, [activePreset]);

  // Component layout configurations for each workflow step
  interface ComponentConfig {
    component: 'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator' | 'placeholder';
    size: 'small' | 'medium' | 'large' | 'xlarge'; // Size determines grid span
    position?: number; // Optional explicit position (0-based)
  }

  interface StepLayout {
    components: ComponentConfig[];
    gridLayout: 'standard' | 'compact' | 'extended'; // Different grid configurations
  }

  // Define layouts for each step in each preset
  const stepLayouts: Record<string, StepLayout> = {
    // Preset 1 layouts - Standard medical workflow
    "startup": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'large' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'medium' }
      ]
    },
    "review": {
  gridLayout: 'standard',
  components: [
    { component: 'xrayLive', size: 'small' },        // stays small (1 cell)
    { component: 'interventionalWorkspace', size: 'small' }, // stays small (1 cell)  
    { component: 'hemo', size: 'large' }            // gets xlarge (6 cells)
  ]
  // Total: 1 + 1 + 6 = 8 cells ✅ (fits in 9)
},
    "ultrasound": {
      gridLayout: 'standard', 
      components: [
        { component: 'xrayLive', size: 'medium' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'large' }
      ]
    },
    "ccta-planning": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'large' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'medium' }
      ]
    },
    "ivus-acquisition": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'large' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'medium' }
      ]
    },
    "xray": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'xlarge' },
        { component: 'hemo', size: 'medium' }
      ]
    },
    "hemo": {
      gridLayout: 'standard',
      components: [
        { component: 'hemo', size: 'xlarge' },
        { component: 'xrayLive', size: 'medium' }
      ]
    },
    "confirm-dsa": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'large' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'medium' }
      ]
    },
    "finalise": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'large' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'medium' }
      ]
    },
    
    // Preset 2 layouts - Navigator workflow with different sizes
    "start": {
      gridLayout: 'compact',
      components: [
        { component: 'interventionalWorkspace', size: 'large' },
        { component: 'hemo', size: 'medium' },
        { component: 'placeholder', size: 'small' },
        { component: 'placeholder', size: 'small' }
      ]
    },
    "access": {
      gridLayout: 'compact',
      components: [
        { component: 'interventionalWorkspace', size: 'large' },
        { component: 'hemo', size: 'medium' },
        { component: 'placeholder', size: 'small' },
        { component: 'placeholder', size: 'small' }
      ]
    },
    "3d-scan": {
      gridLayout: 'extended',
      components: [
        { component: 'placeholder', size: 'small' },    // Top row - first small
        { component: 'placeholder', size: 'small' },    // Top row - second small  
        { component: 'hemo', size: 'small' },           // Top row - small hemo
        { component: 'xrayLive', size: 'medium' },      // Left side - vertical medium
        { component: 'smartNavigator', size: 'large' }  // Bottom right - large (2x2)
      ]
    },
    "planning": {
      gridLayout: 'extended',
      components: [
        { component: 'smartNavigator', size: 'xlarge' },
        { component: 'xrayLive', size: 'large' },
        { component: 'hemo', size: 'medium' },
        { component: 'placeholder', size: 'small' }
      ]
    },
    "treatment": {
      gridLayout: 'standard',
      components: [
        { component: 'xrayLive', size: 'large' },
        { component: 'interventionalWorkspace', size: 'medium' },
        { component: 'hemo', size: 'medium' }
      ]
    },
  };

  // Get current step layout or default to preset-based layout
  const getCurrentLayout = (): StepLayout => {
    const currentWorkflowStep = workflowSync.workflowStepId;
    
    if (currentWorkflowStep && stepLayouts[currentWorkflowStep]) {
      return stepLayouts[currentWorkflowStep];
    }
    
    // Default layouts when no workflow step is active
    return activePreset === 1 
      ? {
          gridLayout: 'standard',
          components: [
            { component: 'xrayLive', size: 'large' },
            { component: 'interventionalWorkspace', size: 'medium' },
            { component: 'hemo', size: 'medium' }
          ]
        }
      : {
          gridLayout: 'compact',
          components: [
            { component: 'hemo', size: 'medium' },
            { component: 'smartNavigator', size: 'large' },
            { component: 'placeholder', size: 'small' },
            { component: 'placeholder', size: 'small' }
          ]
        };
  };

  const currentLayout = useMemo(() => getCurrentLayout(), [workflowSync.workflowStepId, activePreset]);

  // Update active components context when layout changes
  useEffect(() => {
    const activeComps = currentLayout.components
      .map(config => config.component)
      .filter((comp): comp is 'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator' => 
        comp !== 'placeholder'
      );
    
    // Only update if components actually changed
    const stored = localStorage.getItem('activeComponents');
    const storedStr = stored || '[]';
    const newStr = JSON.stringify(activeComps);
    
    if (storedStr !== newStr) {
      setActiveComponents(activeComps);
    }
  }, [currentLayout, setActiveComponents, workflowSync.workflowStepId]);

  // Sync focused component with context
  useEffect(() => {
    // Map local component names to context component names
    const componentMap: Record<string, 'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator' | null> = {
      'xray': 'xrayLive',
      'iw': 'interventionalWorkspace',
      'hemo': 'hemo',
      'smartnav': 'smartNavigator',
      'placeholder': null
    };
    
    const mappedComponent = componentMap[focusedComponent];
    setContextFocusedComponent(mappedComponent);
  }, [focusedComponent, setContextFocusedComponent]);

  // Sync activePreset with WorkflowSync context
  useEffect(() => {
    if (workflowSync.activePreset && workflowSync.activePreset !== activePreset) {
      setActivePreset(workflowSync.activePreset);
    }
  }, [workflowSync.activePreset]);

  // Increment reset key when workflow step or preset changes to force SmartNavigator remount
  const prevWorkflowStepRef = useRef<string | undefined>(undefined);
  const prevPresetRef = useRef<1 | 2>(activePreset);
  const isInitialMountRef = useRef(true);
  
  useEffect(() => {
    const currentStep = workflowSync.workflowStepId;
    const currentPreset = activePreset;
    
    
    // Skip initial mount
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      prevWorkflowStepRef.current = currentStep;
      prevPresetRef.current = currentPreset;
      return;
    }
    
    const stepChanged = prevWorkflowStepRef.current !== currentStep;
    const presetChanged = prevPresetRef.current !== currentPreset;
    
    if (stepChanged || presetChanged) {
      
      // Reset SmartNavigator step in WorkflowSync to 1
      workflowSync.setWorkflowStep(1, undefined, 'smart-navigator', true, false);
      
      setSmartNavResetKey(prev => {
        const newKey = prev + 1;
        return newKey;
      });
    }
    
    prevWorkflowStepRef.current = currentStep;
    prevPresetRef.current = currentPreset;
  }, [workflowSync.workflowStepId, activePreset]);

  // Auto-select component based on workflow step
  useEffect(() => {
    const currentStep = workflowSync.workflowStepId;
    
    // Map workflow steps to default selected components
    const stepComponentMap: Record<string, 'xray' | 'iw' | 'hemo' | 'smartnav' | null> = {
      '3d-scan': 'smartnav', // In 3D scan, select SmartNavigator
      // Add more mappings as needed
    };
    
    const defaultComponent = stepComponentMap[currentStep || ''];
    if (defaultComponent) {
      console.log(`Auto-selecting component ${defaultComponent} for step ${currentStep}`);
      setSelectedComponent(defaultComponent);
    }
  }, [workflowSync.workflowStepId]);


  const handleShowWorkflows = () => {
    setShowWorkflows(true);
  };

  const handleCloseWorkflows = () => {
    setShowWorkflows(false);
  };

  const handleShowPresets = () => {
    setShowPresets(true);
  };

  const handleClosePresets = () => {
    setShowPresets(false);
  };

  const handlePresetSelect = (preset: 1 | 2) => {
    setActivePreset(preset);
    setShowPresets(false);
    // Broadcast preset change to all screens
    workflowSync.setWorkflowStepId(workflowSync.workflowStepId || '', preset);
  };

  const handleStepSelect = (step: WorkflowStep) => {
    // Use workflow sync to broadcast to all screens
    workflowSync.setWorkflowStepId(step.id, activePreset);
    setShowWorkflows(false);
  };

  // Handle focus mode activation from workflow overlay
  const handleActivateFocusMode = (stepId: string) => {
    // First, select the workflow step
    workflowSync.setWorkflowStepId(stepId, activePreset);
    
    // Then activate focus mode
    setFocusMode(true);
    setFocusedComponent(components[0] as any);
    setIwSubFocus('none');
    setShowWorkflows(false);
  };

  // Voice command handlers
  const handleNextWorkflowVoice = useCallback(() => {
    const currentWorkflowSync = workflowSyncRef.current;
    const currentPreset = activePresetRef.current;
    
    if (!currentWorkflowSync.workflowStepId) {
      return;
    }
    const nextStep = getNextWorkflow(currentWorkflowSync.workflowStepId);
    if (nextStep) {
      currentWorkflowSync.setWorkflowStepId(nextStep.id, currentPreset);
    } else {
    }
  }, []); // Empty deps - will always use current values via refs

  const handlePreviousWorkflowVoice = useCallback(() => {
    const currentWorkflowSync = workflowSyncRef.current;
    const currentPreset = activePresetRef.current;
    
    if (!currentWorkflowSync.workflowStepId) {
      return;
    }
    const previousStep = getPreviousWorkflow(currentWorkflowSync.workflowStepId);
    if (previousStep) {
      currentWorkflowSync.setWorkflowStepId(previousStep.id, currentPreset);
    } else {
    }
  }, []); // Empty deps - will always use current values via refs

  const handleRestartWizardVoice = useCallback(() => {
    setSmartNavResetKey(prev => prev + 1);
  }, []);

  const handleToggleFocusModeVoice = useCallback(() => {
    setFocusMode(prev => !prev);
  }, []);

  const handlePreset1Voice = useCallback(() => {
    handlePresetSelect(1);
  }, []); // Empty deps - will always use current values via closure

  const handlePreset2Voice = useCallback(() => {
    handlePresetSelect(2);
  }, []); // Empty deps - will always use current values via closure

  // Register global voice command handlers (only once on mount)
  useEffect(() => {
    const handlers = {
      onNextWorkflow: handleNextWorkflowVoice,
      onPreviousWorkflow: handlePreviousWorkflowVoice,
      onRestartWizard: handleRestartWizardVoice,
      onShowWorkflows: handleShowWorkflows,
      onHideWorkflows: handleCloseWorkflows,
      onShowPresets: handleShowPresets,
      onHidePresets: handleClosePresets,
      onToggleFocusMode: handleToggleFocusModeVoice,
      onOpenSettings: () => setIsSettingsOpen(true),
      onCloseSettings: () => setIsSettingsOpen(false),
      onPreset1: handlePreset1Voice,
      onPreset2: handlePreset2Voice,
    };
    
    registerHandlers(handlers);

    // Cleanup on unmount
    return () => {
      unregisterHandlers();
    };
    // Only register once on mount, handlers will use latest values via closure
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleWorkflowStepChange = (step: WorkflowStep) => {
    workflowSync.setWorkflowStepId(step.id, activePreset);
  };

  // Focus mode navigation - components available based on current layout (excluding statusbar)
  const getAvailableComponents = () => {
    const components: ('xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder')[] = [];
    
    currentLayout.components.forEach(config => {
      switch (config.component) {
        case 'xrayLive':
          if (!components.includes('xray')) components.push('xray');
          break;
        case 'interventionalWorkspace':
          if (!components.includes('iw')) components.push('iw');
          break;
        case 'hemo':
          if (!components.includes('hemo')) components.push('hemo');
          break;
        case 'smartNavigator':
          if (!components.includes('smartnav')) components.push('smartnav');
          break;
        case 'placeholder':
          if (!components.includes('placeholder')) components.push('placeholder');
          break;
      }
    });
    
    return components;
  };
  
  const components = getAvailableComponents();
  
  const navigateComponents = (direction: 'next' | 'prev') => {
    if (!focusMode || iwSubFocus === 'angles') return; // Block component navigation when in angle selection mode
    
    const currentIndex = components.indexOf(focusedComponent as any);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % components.length;
    } else {
      newIndex = (currentIndex - 1 + components.length) % components.length;
    }
    
    setFocusedComponent(components[newIndex] as any);
  };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    if (!focusMode) {
      setFocusedComponent(components[0] as any); // Reset to first component when entering focus mode
      setIwSubFocus('none'); // Ensure sub-focus is reset
    } else {
      // Exiting focus mode - reset all states
      setIwSubFocus('none');
      setSelectedAngleIndex(0);
    }
  };

  const activateComponent = () => {
    console.log('activateComponent called', { focusMode, iwSubFocus, focusedComponent, selectedAngleIndex });
    if (focusMode && iwSubFocus === 'none') {
      // Select the currently focused component and exit focus mode
      console.log('Selecting component and exiting focus mode:', focusedComponent);
      setSelectedComponent(focusedComponent);
      setFocusMode(false);
    } else if (focusMode && iwSubFocus === 'angles') {
      // This should not happen anymore, but keep for safety
      const angleId = String(selectedAngleIndex + 1);
      console.log('Selecting angle:', angleId);
      handleAngleSelection(angleId);
    }
  };

  const handleAngleSelection = (angleId: string) => {
    console.log('handleAngleSelection called with angleId:', angleId);
    // Map angle images
    const angleImages = {
      "1": "/src/assets/ImageAngles/Angle1.png",
      "2": "/src/assets/ImageAngles/Angle2.png", 
      "4": "/src/assets/ImageAngles/Angle4.png"
    };
    
    const angleImage = angleImages[angleId as keyof typeof angleImages];
    if (angleImage) {
      console.log('Setting angle and activating UniGuide');
      setSelectedAngle(angleId as any);
      activateUniGuide();
      
      // Exit focus mode and angle selection
      setFocusMode(false);
      setIwSubFocus('none');
      console.log('Exited focus mode and angle selection');
    } else {
      console.log('No angle image found for angleId:', angleId);
    }
  };

  const navigateAngles = (direction: 'next' | 'prev') => {
    if (iwSubFocus !== 'angles') return;
    
    const totalAngles = 4; // Based on the angles in the component
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (selectedAngleIndex + 1) % totalAngles;
    } else if (direction === 'prev') {
      newIndex = (selectedAngleIndex - 1 + totalAngles) % totalAngles;
    }
    
    setSelectedAngleIndex(newIndex);
  };

  // Listen for broadcasted input events from TSM
  useEffect(() => {
    const unsubscribeKeyboard = inputBroadcast.onKeyboardEvent((data) => {
      
      // Create a synthetic KeyboardEvent to pass to existing handlers
      const syntheticEvent = new KeyboardEvent('keydown', {
        key: data.key,
        code: data.code,
        ctrlKey: data.ctrlKey,
        altKey: data.altKey,
        shiftKey: data.shiftKey,
        metaKey: data.metaKey,
        bubbles: true,
        cancelable: true,
      });
      
      // Dispatch the synthetic event globally so all components can receive it
      // This allows SmartWorkflowsOverlay and other components to handle the event
      // Dispatch to both document and window to ensure all listeners receive it
      document.dispatchEvent(syntheticEvent);
      window.dispatchEvent(syntheticEvent);
      
      // Also check for specific actions at the screen level
      if (matchesInput(syntheticEvent, inputSettings.smartWorkflows)) {
        handleShowWorkflows();
      }
      
      if (matchesInput(syntheticEvent, inputSettings.quickSettings)) {
        setIsSettingsOpen(true);
      }
    });

    const unsubscribeWheel = inputBroadcast.onWheelEvent((data) => {
      
      // Create a synthetic WheelEvent
      const syntheticEvent = new WheelEvent('wheel', {
        deltaX: data.deltaX,
        deltaY: data.deltaY,
        deltaZ: data.deltaZ,
        deltaMode: data.deltaMode,
        ctrlKey: data.ctrlKey,
        altKey: data.altKey,
        shiftKey: data.shiftKey,
        metaKey: data.metaKey,
        bubbles: true,
        cancelable: true,
      });
      
      // Dispatch the synthetic event globally
      document.dispatchEvent(syntheticEvent);
      window.dispatchEvent(syntheticEvent);
      
      // Also check for specific actions at the screen level
      if (matchesInput(syntheticEvent, inputSettings.workflowStepLeft)) {
      } else if (matchesInput(syntheticEvent, inputSettings.workflowStepRight)) {
      }
    });

    const unsubscribeMouse = inputBroadcast.onMouseEvent((data) => {
      
      // Create a synthetic MouseEvent
      const syntheticEvent = new MouseEvent(data.eventType, {
        button: data.button,
        buttons: data.buttons,
        clientX: data.clientX,
        clientY: data.clientY,
        ctrlKey: data.ctrlKey,
        altKey: data.altKey,
        shiftKey: data.shiftKey,
        metaKey: data.metaKey,
        bubbles: true,
        cancelable: true,
      });
      
      // Dispatch the synthetic event globally
      document.dispatchEvent(syntheticEvent);
      window.dispatchEvent(syntheticEvent);
    });

    return () => {
      unsubscribeKeyboard();
      unsubscribeWheel();
      unsubscribeMouse();
    };
  }, [inputBroadcast, inputSettings, handleShowWorkflows, setIsSettingsOpen]);

  // Handle keyboard, mouse wheel, and mouse click events
  useEffect(() => {
    if (!inputSettings.focusModeEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't handle key events if SmartNavigator is active
      const hasSmartNavigator = currentLayout.components.some(c => c.component === 'smartNavigator');
      if (hasSmartNavigator) {
        return; // Let SmartNavigator handle the events
      }
      
      // Component activation in focus mode (Enter key / workflowStepActivate)
      if (focusMode && matchesInput(event, inputSettings.workflowStepActivate)) {
        console.log('workflowStepActivate key pressed in focus mode', { key: event.key, iwSubFocus });
        event.preventDefault();
        event.stopPropagation();
        activateComponent();
      } else if (matchesInput(event, inputSettings.focusModeExit) && focusMode) {
        // Exit focus mode entirely
        setFocusMode(false);
        setIwSubFocus('none');
      } else if (focusMode && matchesInput(event, inputSettings.focusModeNavigation)) {
        // Navigate forward (right arrow) - only for component navigation
        event.preventDefault();
        event.stopPropagation();
        navigateComponents('prev');
      } else if (focusMode && matchesInput(event, inputSettings.focusModeNavigationReverse)) {
        // Navigate backward (left arrow) - only for component navigation
        event.preventDefault();
        event.stopPropagation();
        navigateComponents('next');
      }
    };

    const handleWheel = (event: WheelEvent) => {
      // Don't handle wheel events if SmartNavigator is active
      const hasSmartNavigator = currentLayout.components.some(c => c.component === 'smartNavigator');
      if (hasSmartNavigator) {
        return; // Let SmartNavigator handle the events
      }
      
      let navigationTriggered = false;
      
      // Check for forward navigation
      if (focusMode && matchesInput(event, inputSettings.focusModeNavigation)) {
        event.preventDefault();
        event.stopPropagation();
        navigateComponents('next');
        navigationTriggered = true;
      }
      
      // Check for reverse navigation
      if (focusMode && matchesInput(event, inputSettings.focusModeNavigationReverse)) {
        event.preventDefault();
        event.stopPropagation();
        navigateComponents('prev');
        navigationTriggered = true;
      }
      
      // Navigation triggered
    };

    const handleMouseClick = (event: MouseEvent) => {
      if (focusMode && matchesInput(event, inputSettings.focusModeActivation)) {
        event.preventDefault();
        event.stopPropagation();
        activateComponent();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('click', handleMouseClick);
    };
  }, [focusMode, focusedComponent, iwSubFocus, selectedAngleIndex, inputSettings]);

  // Handle preset switching with number keys
  useEffect(() => {
    const handlePresetKeyDown = (event: KeyboardEvent) => {
      // Only handle preset switching when not in focus mode and no modifiers are pressed
      if (focusMode || event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
        return;
      }

      switch (event.key) {
        case '1':
          event.preventDefault();
          setActivePreset(1);
          break;
        case '2':
          event.preventDefault();
          setActivePreset(2);
          break;
      }
    };

    document.addEventListener('keydown', handlePresetKeyDown);

    return () => {
      document.removeEventListener('keydown', handlePresetKeyDown);
    };
  }, [focusMode]);

  // Get focus styles for components
  const getFocusStyles = (componentType: 'xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder') => {
    // Check if this component is selected (blue border)
    const isSelected = selectedComponent === componentType;
    
    // Check if in focus mode and this component is focused (animated gradient border)
    const isFocused = inputSettings.focusModeEnabled && focusMode && 
                      focusedComponent === componentType && 
                      iwSubFocus === 'none'; // Hide component focus when in angle selection
    
    if (isFocused) {
      // Focus mode: animated gradient border
      return {
        className: "border-2 border-solid",
        style: {
          borderColor: 'transparent',
          borderImage: `linear-gradient(125deg, ${inputSettings.focusBorderColor1} 0%, ${inputSettings.focusBorderColor2} 75%, ${inputSettings.focusBorderColor2} 100%) 1`,
          boxShadow: `
            -4px 0 8px ${inputSettings.focusBorderColor1}60,
            4px 0 8px ${inputSettings.focusBorderColor2}60,
            0 -4px 8px ${inputSettings.focusBorderColor2}60,
            0 4px 8px ${inputSettings.focusBorderColor2}60
          `
        }
      };
    } else if (isSelected) {
      // Selected component: solid cyan border (same as SmartNavigator wizard steps)
      return {
        className: "border-2 border-solid border-[#41c9fe] border-opacity-70",
        style: {
          boxShadow: '0 0 12px rgba(65, 201, 254, 0.3)'
        }
      };
    } else {
      // Default: dark gray border
      return {
        className: "border-2 border-[#3b3b3b] border-solid",
        style: {}
      };
    }
  };
  useUnifiedInput({
    smartWorkflows: () => {
      handleShowWorkflows();
    },
    toggleAutomation: () => {
    },
    quickSettings: () => {
      setIsSettingsOpen(true);
    }
  });

  return (
    <div className="bg-[#000000] relative size-full flex flex-col overflow-hidden h-screen" data-name="IGT-Layout">
      {/* Navigation Header */}
      <div className="relative w-full z-50 shrink-0">
        <NavigationHeader 
          onShowWorkflows={handleShowWorkflows}
          onShowPresets={handleShowPresets}
          isWorkflowsVisible={showWorkflows}
          focusMode={focusMode}
          currentWorkflowStep={currentWorkflowStepLabel}
        />
      </div>



      {/* Smart Workflows Overlay - Shows when workflows open OR voice is listening OR showing feedback */}
      <SmartWorkflowsOverlay
        key={`workflow-preset-${activePreset}`}
        isVisible={showWorkflows || shouldShowVoiceOverlay}
        onClose={handleCloseWorkflows}
        onStepSelect={handleStepSelect}
        currentStep={workflowSync.workflowStepId}
        activePreset={activePreset}
        isVoiceMode={shouldShowVoiceOverlay}
        voiceTranscript={transcript}
        onActivateFocusMode={handleActivateFocusMode}
      />

      {/* Presets Overlay */}
      <PresetsOverlay
        isVisible={showPresets}
        onClose={handleClosePresets}
        onPresetSelect={handlePresetSelect}
        activePreset={activePreset}
      />

      {/* Settings Menu */}
      <SettingsMenu />
      
      {/* Workflow Status Indicator */}
      <WorkflowStatusIndicator />

      <div className="flex-1 overflow-hidden flex">
        {/* StatusBar - Independent left sidebar */}
        <div className="shrink-0 border-2 border-[#3b3b3b] border-solid">
          <StatusBar />
        </div>

        {/* Main content area - Navigation + Grid */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navigation Menu */}
          <div className="relative w-full z-10 shrink-0">
            <NavigationMenu />
          </div>

          {/* Component Grid - 3x3 flexible grid system */}
          <div className="bg-black flex-1 grid overflow-hidden grid-cols-3 grid-rows-3 gap-0">

          {/* Dynamic Grid Layout based on Component Configuration */}
          {(() => {
            const gridComponents = [];
            
            // Clear 3x3 Grid System with Explicit Rules
            const get3x3Layout = () => {
              // Special layout override for 3D scan step
              if (workflowSync.workflowStepId === '3d-scan') {
                return [
                  // Placeholder 1 - Top left (1x1)
                  { col: 1, row: 1, colSpan: 1, rowSpan: 1, originalSize: 'small', adjustedSize: 'small' },
                  // Placeholder 2 - Top center (1x1)  
                  { col: 2, row: 1, colSpan: 1, rowSpan: 1, originalSize: 'small', adjustedSize: 'small' },
                  // Hemo - Top right (1x1)
                  { col: 3, row: 1, colSpan: 1, rowSpan: 1, originalSize: 'small', adjustedSize: 'small' },
                  // XrayLive - Left side vertical medium (1x2)
                  { col: 1, row: 2, colSpan: 1, rowSpan: 2, originalSize: 'medium', adjustedSize: 'medium', variant: 'vertical' },
                  // SmartNavigator - Bottom right large (2x2) - FORCE 2x2
                  { col: 2, row: 2, colSpan: 2, rowSpan: 2, originalSize: 'large', adjustedSize: 'large' }
                ];
              }
              // Define clear component size mappings for 3x3 grid
              const sizeDefinitions = {
                'fullscreen': { 
                  width: 3, height: 3,  // Takes entire grid (3 cols, 3 rows) = 9 cells
                  description: 'Full screen coverage'
                },
                'xlarge': { 
                  variants: [
                    { width: 3, height: 2, description: 'Horizontal XLarge (3x2)' }, // 6 cells - wide
                    { width: 2, height: 3, description: 'Vertical XLarge (2x3)' }     // 6 cells - tall
                  ]
                },
                'large': { 
                  width: 2, height: 2,  // Takes square area (2 cols, 2 rows) = 4 cells
                  description: 'Square large'
                },
                'medium': { 
                  variants: [
                    { width: 2, height: 1, description: 'Horizontal Medium (2x1)' }, // 2 cells - wide
                    { width: 1, height: 2, description: 'Vertical Medium (1x2)' }     // 2 cells - tall
                  ]
                },
                'small': { 
                  width: 1, height: 1,  // Takes single cell (1 col, 1 row) = 1 cell
                  description: 'Single cell'
                }
              };

              // Create 3x3 grid tracker (true = occupied, false = free)
              const grid = Array(3).fill(null).map(() => Array(3).fill(false));
              const placements = [];

              // Helper: Check if area is available
              const isAreaFree = (startCol, startRow, width, height) => {
                if (startCol + width > 3 || startRow + height > 3) return false;
                for (let r = startRow; r < startRow + height; r++) {
                  for (let c = startCol; c < startCol + width; c++) {
                    if (grid[r][c]) return false;
                  }
                }
                return true;
              };

              // Helper: Mark area as occupied
              const occupyArea = (startCol, startRow, width, height) => {
                for (let r = startRow; r < startRow + height; r++) {
                  for (let c = startCol; c < startCol + width; c++) {
                    grid[r][c] = true;
                  }
                }
              };

              // Helper: Find best position for a component size
              const findPosition = (width, height) => {
                // Try positions in reading order (left-to-right, top-to-bottom)
                for (let row = 0; row <= 3 - height; row++) {
                  for (let col = 0; col <= 3 - width; col++) {
                    if (isAreaFree(col, row, width, height)) {
                      return { col, row };
                    }
                  }
                }
                return null;
              };

              // Smart size adjustment based on component count and available space
              const adjustComponentSize = (originalSize, componentIndex, totalComponents) => {
                // Rule 1: Single component gets fullscreen
                if (totalComponents === 1) {
                  return 'fullscreen';
                }

                // Rule 2: Two components - upgrade smaller ones
                if (totalComponents === 2) {
                  if (originalSize === 'small') return 'large';
                  if (originalSize === 'medium') return 'large';
                  return originalSize;
                }

                // Rule 3: Three components - moderate upgrades
                if (totalComponents === 3) {
                  // Check if we have a large or xlarge component
                  const hasLargeComponent = currentLayout.components.some(c => c.size === 'large' || c.size === 'xlarge');
                  
                  // If we have a large/xlarge component, keep small components small to avoid placement conflicts
                  if (hasLargeComponent && originalSize === 'small') {
                    return 'small';
                  }
                  
                  if (originalSize === 'small') return 'medium';
                  return originalSize;
                }

                // Rule 4: Four or more components - conservative sizing
                if (totalComponents >= 4) {
                  // Check if we have space conflicts
                  const xlargCount = currentLayout.components.filter(c => c.size === 'xlarge').length;
                  const largeCount = currentLayout.components.filter(c => c.size === 'large').length;
                  
                  // If we have both xlarge and large, they can coexist now (xlarge=6, large=4)
                  // But if we have multiple xlarge, downsize extras
                  if (xlargCount > 1 && originalSize === 'xlarge' && componentIndex > 0) {
                    return 'large'; // Only first xlarge stays xlarge
                  }
                  
                  // Always upgrade small to medium when we have space
                  if (originalSize === 'small') return 'medium';
                  return originalSize;
                }

                return originalSize;
              };

              // Helper: Get best size definition for a component
              const getSizeDefinition = (adjustedSize) => {
                if (adjustedSize === 'fullscreen') {
                  return sizeDefinitions.fullscreen;
                }
                
                if (adjustedSize === 'xlarge') {
                  // Choose best XLarge variant based on available space
                  const horizontalVariant = sizeDefinitions.xlarge.variants[0]; // 3x2
                  const verticalVariant = sizeDefinitions.xlarge.variants[1];   // 2x3
                  
                  // Try horizontal first (3x2), then vertical (2x3)
                  if (findPosition(horizontalVariant.width, horizontalVariant.height)) {
                    return horizontalVariant;
                  } else if (findPosition(verticalVariant.width, verticalVariant.height)) {
                    return verticalVariant;
                  }
                  // If neither fits, will fallback below
                  return horizontalVariant; // Default to horizontal for fallback logic
                }
                
                if (adjustedSize === 'medium') {
                  // Choose best Medium variant based on available space
                  const horizontalVariant = sizeDefinitions.medium.variants[0]; // 2x1
                  const verticalVariant = sizeDefinitions.medium.variants[1];   // 1x2
                  
                  // Try horizontal first (2x1), then vertical (1x2)
                  if (findPosition(horizontalVariant.width, horizontalVariant.height)) {
                    return horizontalVariant;
                  } else if (findPosition(verticalVariant.width, verticalVariant.height)) {
                    return verticalVariant;
                  }
                  // If neither fits, will fallback below
                  return horizontalVariant; // Default to horizontal for fallback logic
                }
                
                return sizeDefinitions[adjustedSize];
              };

              // Process each component in order
              currentLayout.components.forEach((component, index) => {
                let adjustedSize = adjustComponentSize(component.size, index, currentLayout.components.length);
                
                // Special handling for SmartNavigator - always make it large (2x2) when possible
                if (component.component === 'smartNavigator' && (adjustedSize === 'large' || adjustedSize === 'xlarge')) {
                  adjustedSize = 'large'; // Force to large (2x2)
                }
                
                let sizeDef = getSizeDefinition(adjustedSize);
                
                // Try to place with adjusted size
                let position = findPosition(sizeDef.width, sizeDef.height);
                let finalSize = adjustedSize;
                
                // Fallback strategy if can't fit
                if (!position) {
                  // Special handling for SmartNavigator - try to keep it large if possible
                  if (component.component === 'smartNavigator') {
                    // Try large first, then medium, then small
                    const fallbackSizes = ['large', 'medium', 'small'];
                    for (const fallbackSize of fallbackSizes) {
                      if (fallbackSize === adjustedSize) continue; // Skip same size
                      const fallbackDef = sizeDefinitions[fallbackSize];
                      position = findPosition(fallbackDef.width, fallbackDef.height);
                      if (position) {
                        sizeDef = fallbackDef;
                        finalSize = fallbackSize;
                        break;
                      }
                    }
                  } else {
                    // Regular fallback for other components
                    const fallbackSizes = ['large', 'medium', 'small'];
                    for (const fallbackSize of fallbackSizes) {
                      if (fallbackSize === adjustedSize) continue; // Skip same size
                      const fallbackDef = sizeDefinitions[fallbackSize];
                      position = findPosition(fallbackDef.width, fallbackDef.height);
                      if (position) {
                        sizeDef = fallbackDef;
                        finalSize = fallbackSize;
                        break;
                      }
                    }
                  }
                }

                // Place the component
                if (position) {
                  occupyArea(position.col, position.row, sizeDef.width, sizeDef.height);
                  placements[index] = {
                    col: position.col + 1, // CSS grid is 1-indexed
                    row: position.row + 1,
                    colSpan: sizeDef.width,
                    rowSpan: sizeDef.height,
                    originalSize: component.size,
                    adjustedSize: finalSize,
                    variant: (adjustedSize === 'xlarge' || adjustedSize === 'medium') ? 
                      (sizeDef.width > sizeDef.height ? 'horizontal' : 'vertical') : null
                  };
                } else {
                  // Emergency fallback - place in first available cell
                  placements[index] = {
                    col: 1, row: 1, colSpan: 1, rowSpan: 1,
                    originalSize: component.size,
                    adjustedSize: 'small'
                  };
                }
              });

              return placements;
            };

            const placements = useMemo(() => get3x3Layout(), [currentLayout.components, workflowSync.workflowStepId]);

            const getSizeClasses = (size: string, index: number, totalComponents: number) => {
              const placement = placements[index];
              if (!placement) {
                return 'col-start-1 row-start-1 col-span-1 row-span-1'; // Emergency fallback
              }
              
              // Use explicit Tailwind classes to ensure they're included in the build
              const colStartClasses = {
                1: 'col-start-1',
                2: 'col-start-2', 
                3: 'col-start-3'
              };
              
              const rowStartClasses = {
                1: 'row-start-1',
                2: 'row-start-2',
                3: 'row-start-3'
              };
              
              const colSpanClasses = {
                1: 'col-span-1',
                2: 'col-span-2',
                3: 'col-span-3'
              };
              
              const rowSpanClasses = {
                1: 'row-span-1',
                2: 'row-span-2', 
                3: 'row-span-3'
              };
              
              const colStart = colStartClasses[placement.col as keyof typeof colStartClasses] || 'col-start-1';
              const rowStart = rowStartClasses[placement.row as keyof typeof rowStartClasses] || 'row-start-1';
              const colSpan = colSpanClasses[placement.colSpan as keyof typeof colSpanClasses] || 'col-span-1';
              const rowSpan = rowSpanClasses[placement.rowSpan as keyof typeof rowSpanClasses] || 'row-span-1';
              
              return `${colStart} ${rowStart} ${colSpan} ${rowSpan}`;
            };

            // Render components based on configuration
            const totalComponents = currentLayout.components.length;
            
            currentLayout.components.forEach((config, index) => {
              // Use only component type and index as key to maintain state across workflow bar open/close
              const componentKey = `${config.component}-${index}`;
              const gridClasses = getSizeClasses(config.size, index, totalComponents);
              const placement = placements[index];
              const componentSize = placement?.adjustedSize || config.size;
              
              let renderedComponent;
              let focusKey: 'xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder';
              
              switch (config.component) {
                case 'xrayLive':
                  renderedComponent = <XrayLive componentSize={componentSize} />;
                  focusKey = 'xray';
                  break;
                case 'interventionalWorkspace':
                  renderedComponent = (
                    <InterventionalWorkspace 
                      focusMode={selectedComponent === 'iw'}
                      subFocusMode={'none'}
                      selectedAngleIndex={selectedAngleIndex}
                      onAngleSelect={handleAngleSelection}
                      componentSize={componentSize}
                    />
                  );
                  focusKey = 'iw';
                  break;
                case 'hemo':
                  renderedComponent = <Hemo componentSize={componentSize} />;
                  focusKey = 'hemo';
                  break;
                case 'smartNavigator':
                  // SmartNavigator is always active when rendered
                  // Use key to force remount when workflow step changes, resetting state
                  renderedComponent = <SmartNavigator 
                    key={`smartnav-reset-${smartNavResetKey}`}
                    componentSize={componentSize} 
                    isActive={true} 
                  />;
                  focusKey = 'smartnav';
                  break;
                case 'placeholder':
                  renderedComponent = <Placeholder componentSize={componentSize} />;
                  focusKey = 'placeholder';
                  break;
                default:
                  return;
              }
              
              gridComponents.push(
                <div 
                  key={componentKey}
                  className={`h-full ${gridClasses} ${getFocusStyles(focusKey).className}`}
                  style={getFocusStyles(focusKey).style}
                >
                  {renderedComponent}
                </div>
              );
            });

            return gridComponents;
          })()}
          </div>
        </div>
      </div>

      {/* Workflow step indicator */}
      {workflowSync.workflowStepId && (
        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-white text-[14px] font-['CentraleSans:Book',_sans-serif]">
              Current: {workflowSync.workflowStepId.charAt(0).toUpperCase() + workflowSync.workflowStepId.slice(1).replace('-', ' ')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrapper component with InputBroadcastProvider and WorkflowSyncProvider
export function ScreenFlexvision() {
  return (
    <InputBroadcastProvider screenId="flexvision" isMaster={false}>
      <WorkflowSyncProvider screenId="flexvision">
        <ScreenFlexvisionInner />
      </WorkflowSyncProvider>
    </InputBroadcastProvider>
  );
}
