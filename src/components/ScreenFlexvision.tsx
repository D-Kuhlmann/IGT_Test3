import { useState, useEffect } from "react";
import { XrayLive } from "./screens/flexvision/XrayLive";
import { InterventionalWorkspace } from "./screens/flexvision/InterventionalWorkspace";
import { Hemo } from "./screens/flexvision/Hemo";
import { StatusBar } from "./shared/StatusBar";
import { NavigationHeader } from "./screens/flexvision/NavigationHeader";
import { NavigationMenu } from "./shared/NavigationMenu";
import { SmartWorkflowsOverlay } from "./shared/SmartWorkflowsOverlay";
import { SettingsMenu } from "./SettingsMenu";
import { useSettings } from "../contexts/SettingsContext";
import { useUnifiedInput } from '../hooks/useUnifiedInput';
import { useDateTime } from '../hooks/useDateTime';
import { matchesInput } from '../contexts/SettingsContext';
import { getNextWorkflow, getPreviousWorkflow } from "../config/workflows";
import type { WorkflowStep } from "../types";

export function ScreenFlexvision() {
  const [showWorkflows, setShowWorkflows] = useState(false);
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState<string>("");
  const [focusMode, setFocusMode] = useState(false);
  const [focusedComponent, setFocusedComponent] = useState<'xray' | 'iw' | 'hemo'>('xray');
  const [iwSubFocus, setIwSubFocus] = useState<'none' | 'angles'>('none');
  const [selectedAngleIndex, setSelectedAngleIndex] = useState(0);
  const { currentDate, currentTime } = useDateTime();
  const { inputSettings, setIsSettingsOpen } = useSettings();

  const handleShowWorkflows = () => {
    setShowWorkflows(true);
  };

  const handleCloseWorkflows = () => {
    setShowWorkflows(false);
  };

  const handleStepSelect = (step: WorkflowStep) => {
    setCurrentWorkflowStep(step.id);
    setShowWorkflows(false);
  };

  const handleWorkflowStepChange = (step: WorkflowStep) => {
    setCurrentWorkflowStep(step.id);
  };

  // Focus mode navigation
  const components = ['xray', 'iw', 'hemo'] as const;
  
  const navigateComponents = (direction: 'next' | 'prev') => {
    if (!focusMode || iwSubFocus === 'angles') return; // Block component navigation when in angle selection mode
    
    const currentIndex = components.indexOf(focusedComponent);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % components.length;
    } else {
      newIndex = (currentIndex - 1 + components.length) % components.length;
    }
    
    setFocusedComponent(components[newIndex]);
  };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
    if (!focusMode) {
      setFocusedComponent('xray'); // Reset to first component when entering focus mode
      setIwSubFocus('none'); // Ensure sub-focus is reset
    } else {
      // Exiting focus mode - reset all states
      setIwSubFocus('none');
      setSelectedAngleIndex(0);
    }
  };

  const activateComponent = () => {
    if (focusMode && iwSubFocus === 'none') {
      if (focusedComponent === 'iw') {
        // Enter IW sub-focus mode for saved angles
        setIwSubFocus('angles');
        setSelectedAngleIndex(0);
        console.log('Entering IW angles focus mode');
      } else {
        console.log(`Activating ${focusedComponent} component`);
        // TODO: Add specific activation logic for other components
      }
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
    
    console.log(`Navigating angles: ${direction}, from ${selectedAngleIndex} to ${newIndex}`);
    setSelectedAngleIndex(newIndex);
  };

  // Handle keyboard, mouse wheel, and mouse click events
  useEffect(() => {
    if (!inputSettings.focusModeEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (matchesInput(event, inputSettings.focusModeToggle)) {
        if (focusMode) {
          // Activate the currently focused component
          activateComponent();
        } else {
          // Enter focus mode
          setFocusMode(true);
        }
      } else if (matchesInput(event, inputSettings.focusModeExit) && focusMode) {
        if (iwSubFocus === 'angles') {
          // Exit angle focus mode, return to component focus
          setIwSubFocus('none');
        } else {
          // Exit focus mode entirely
          setFocusMode(false);
          setIwSubFocus('none');
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      let navigationTriggered = false;
      
      // Check for forward navigation
      if (focusMode && matchesInput(event, inputSettings.focusModeNavigation)) {
        event.preventDefault();
        event.stopPropagation();
        
        if (iwSubFocus === 'angles') {
          navigateAngles('next');
        } else {
          navigateComponents('next');
        }
        navigationTriggered = true;
      }
      
      // Check for reverse navigation
      if (focusMode && matchesInput(event, inputSettings.focusModeNavigationReverse)) {
        event.preventDefault();
        event.stopPropagation();
        
        if (iwSubFocus === 'angles') {
          navigateAngles('prev');
        } else {
          navigateComponents('prev');
        }
        navigationTriggered = true;
      }
      
      if (navigationTriggered) {
        console.log(`Navigation triggered: iwSubFocus=${iwSubFocus}, deltaY=${event.deltaY}`);
      }
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

  // Get focus styles for components
  const getFocusStyles = (componentType: 'xray' | 'iw' | 'hemo') => {
    if (!inputSettings.focusModeEnabled || !focusMode) {
      return {
        className: "border-2 border-[#3b3b3b] border-solid",
        style: {}
      };
    }
    
    // When in angle selection mode, hide all component borders (internal focus takes priority)
    if (iwSubFocus === 'angles') {
      return {
        className: "border-2 border-[#3b3b3b] border-solid",
        style: {}
      };
    }
    
    // Show focus border only on the currently focused component
    if (focusedComponent !== componentType) {
      return {
        className: "border-2 border-[#3b3b3b] border-solid",
        style: {}
      };
    }
    
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
  };
  useUnifiedInput({
    smartWorkflows: () => {
      setShowWorkflows(true);
    },
    toggleAutomation: () => {
      console.log('Toggle automation triggered');
    },
    quickSettings: () => {
      setIsSettingsOpen(true);
    }
  });

  return (
    <div className="bg-[#000000] relative size-full flex flex-col overflow-hidden h-screen" data-name="IGT-Layout">
      {/* Navigation Header */}
      <div className="relative w-full z-10 shrink-0">
        <NavigationHeader 
          date={currentDate} 
          time={currentTime}
          onShowWorkflows={handleShowWorkflows}
          isWorkflowsVisible={showWorkflows}
          focusMode={focusMode}
        />
      </div>



      {/* Smart Workflows Overlay */}
      <SmartWorkflowsOverlay
        isVisible={showWorkflows}
        onClose={handleCloseWorkflows}
        onStepSelect={handleStepSelect}
        currentStep={currentWorkflowStep}
      />

      {/* Settings Menu */}
      <SettingsMenu />

      <div className="flex-1 overflow-hidden">
              {/* Navigation Menu */}
      <div className="relative w-full z-10 shrink-0">
        <NavigationMenu />
      </div>
        <div className="bg-black w-full h-full flex overflow-hidden">
          {/* Left Sidebar - Medical Status Panel */}
          <div className="shrink-0 w-fit">
            <StatusBar />
          </div>

          {/* Main central viewport */}
          <div 
            className={`flex-[3] bg-black flex flex-col relative min-w-0 ${getFocusStyles('xray').className}`}
            style={getFocusStyles('xray').style}
          >
            <XrayLive />
          </div>

          {/* Right side with two stacked viewports */}
          <div className="flex-[2] flex flex-col h-full min-w-0">
            <div 
              className={`flex-1 relative flex flex-col ${getFocusStyles('iw').className}`}
              style={getFocusStyles('iw').style}
            >
              <InterventionalWorkspace 
                focusMode={focusMode && focusedComponent === 'iw'}
                subFocusMode={iwSubFocus}
                selectedAngleIndex={selectedAngleIndex}
              />
            </div>
            <div 
              className={`flex-1 relative flex flex-col min-h-0 ${getFocusStyles('hemo').className}`}
              style={getFocusStyles('hemo').style}
            >
              <div className="flex-1 min-h-0 h-full">
                <Hemo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow step indicator */}
      {currentWorkflowStep && (
        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-white text-[14px] font-['CentraleSans:Book',_sans-serif]">
              Current: {currentWorkflowStep.charAt(0).toUpperCase() + currentWorkflowStep.slice(1).replace('-', ' ')}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
