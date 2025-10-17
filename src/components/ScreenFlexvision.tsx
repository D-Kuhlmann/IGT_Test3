import React, { useState, useEffect, useRef, useMemo } from 'react';
import { XrayLive } from './screens/flexvision/XrayLive';
import { InterventionalWorkspace } from './screens/flexvision/InterventionalWorkspace';
import { Hemo } from './screens/flexvision/Hemo';
import { SmartNavigator } from "./screens/flexvision/SmartNavigator";
import { Placeholder } from "./screens/flexvision/Placeholder";
import { StatusBar } from "./shared/StatusBar";
import { NavigationHeader } from "./screens/flexvision/NavigationHeader";
import { NavigationMenu } from "./shared/NavigationMenu";
import { SmartWorkflowsOverlay } from "./shared/SmartWorkflowsOverlay";
import { SettingsMenu } from "./SettingsMenu";
import { useSettings, matchesInput } from '../contexts/SettingsContext';
import { useUnifiedInput } from '../hooks/useUnifiedInput';
import { useAngle } from '../contexts/AngleContext';
import { useDateTime } from '../hooks/useDateTime';
import { getNextWorkflow, getPreviousWorkflow } from "../config/workflows";
import type { WorkflowStep } from "../types";

export function ScreenFlexvision() {
  const [showWorkflows, setShowWorkflows] = useState(false);
  const [currentWorkflowStep, setCurrentWorkflowStep] = useState<string>("");
  const [focusMode, setFocusMode] = useState(false);
  const [focusedComponent, setFocusedComponent] = useState<'xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder'>('xray');
  const [iwSubFocus, setIwSubFocus] = useState<'none' | 'angles'>('none');
  const [selectedAngleIndex, setSelectedAngleIndex] = useState(0);
  const [activePreset, setActivePreset] = useState<1 | 2>(1);
  const { setSelectedAngle, activateUniGuide } = useAngle();
  const { inputSettings, setIsSettingsOpen } = useSettings();

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
        { component: 'smartNavigator', size: 'large' }  // Bottom right - large
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

  const currentLayout = useMemo(() => getCurrentLayout(), [currentWorkflowStep, activePreset]);


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
    } else if (focusMode && iwSubFocus === 'angles') {
      // Select the currently focused angle
      const angleId = String(selectedAngleIndex + 1); // Convert index to angle ID (1-4)
      console.log(`Selecting angle ${angleId} via Enter key`);
      // Trigger angle selection - this should activate the angle and switch to TSM
      handleAngleSelection(angleId);
    }
  };

  const handleAngleSelection = (angleId: string) => {
    // Map angle images
    const angleImages = {
      "1": "/src/assets/ImageAngles/Angle1.png",
      "2": "/src/assets/ImageAngles/Angle2.png", 
      "4": "/src/assets/ImageAngles/Angle4.png"
    };
    
    const angleImage = angleImages[angleId as keyof typeof angleImages];
    if (angleImage) {
      console.log('✅ FlexVision - Angle selected:', angleId, 'Image:', angleImage);
      setSelectedAngle(angleId as any);
      activateUniGuide();
    } else {
      console.log('❌ FlexVision - No image found for angleId:', angleId);
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
          console.log('Switched to Preset 1: XrayLive + InterventionalWorkspace + Hemo');
          break;
        case '2':
          event.preventDefault();
          setActivePreset(2);
          console.log('Switched to Preset 2: Hemo + Placeholder + SmartNavigator');
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
      <div className="relative w-full z-50 shrink-0">
        <NavigationHeader 
          onShowWorkflows={handleShowWorkflows}
          isWorkflowsVisible={showWorkflows}
          focusMode={focusMode}
        />
      </div>



      {/* Smart Workflows Overlay */}
      <SmartWorkflowsOverlay
        key={`workflow-preset-${activePreset}`}
        isVisible={showWorkflows}
        onClose={handleCloseWorkflows}
        onStepSelect={handleStepSelect}
        currentStep={currentWorkflowStep}
        activePreset={activePreset}
      />

      {/* Settings Menu */}
      <SettingsMenu />

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
              if (currentWorkflowStep === '3d-scan') {
                return [
                  // Placeholder 1 - Top left (1x1)
                  { col: 1, row: 1, colSpan: 1, rowSpan: 1, originalSize: 'small', adjustedSize: 'small' },
                  // Placeholder 2 - Top center (1x1)  
                  { col: 2, row: 1, colSpan: 1, rowSpan: 1, originalSize: 'small', adjustedSize: 'small' },
                  // Hemo - Top right (1x1)
                  { col: 3, row: 1, colSpan: 1, rowSpan: 1, originalSize: 'small', adjustedSize: 'small' },
                  // XrayLive - Left side vertical medium (1x2)
                  { col: 1, row: 2, colSpan: 1, rowSpan: 2, originalSize: 'medium', adjustedSize: 'medium', variant: 'vertical' },
                  // SmartNavigator - Bottom right large (2x2)
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
                const adjustedSize = adjustComponentSize(component.size, index, currentLayout.components.length);
                let sizeDef = getSizeDefinition(adjustedSize);
                
                // Try to place with adjusted size
                let position = findPosition(sizeDef.width, sizeDef.height);
                let finalSize = adjustedSize;
                
                // Fallback strategy if can't fit
                if (!position) {
                  // Try smaller sizes in order
                  const fallbackSizes = ['large', 'medium', 'small'];
                  for (const fallbackSize of fallbackSizes) {
                    if (fallbackSize === adjustedSize) continue; // Skip same size
                    const fallbackDef = sizeDefinitions[fallbackSize];
                    position = findPosition(fallbackDef.width, fallbackDef.height);
                    if (position) {
                      // Update to fallback size
                      sizeDef = fallbackDef;
                      finalSize = fallbackSize;
                      break;
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

            const placements = useMemo(() => get3x3Layout(), [currentLayout.components, currentWorkflowStep]);

            const getSizeClasses = (size: string, index: number, totalComponents: number) => {
              const placement = placements[index];
              if (!placement) {
                return 'col-start-1 row-start-1 col-span-1 row-span-1'; // Emergency fallback
              }
              
              return `col-start-${placement.col} row-start-${placement.row} col-span-${placement.colSpan} row-span-${placement.rowSpan}`;
            };

            // Render components based on configuration
            const totalComponents = currentLayout.components.length;
            
            currentLayout.components.forEach((config, index) => {
              const componentKey = `${config.component}-${index}`;
              const gridClasses = getSizeClasses(config.size, index, totalComponents);
              const placement = placements[index];
              const componentSize = placement?.adjustedSize || config.size;
              
              let ComponentToRender;
              let focusKey: 'xray' | 'iw' | 'hemo' | 'smartnav' | 'placeholder';
              
              switch (config.component) {
                case 'xrayLive':
                  ComponentToRender = () => <XrayLive componentSize={componentSize} />;
                  focusKey = 'xray';
                  break;
                case 'interventionalWorkspace':
                  ComponentToRender = () => (
                    <InterventionalWorkspace 
                      focusMode={focusMode && focusedComponent === 'iw'}
                      subFocusMode={iwSubFocus}
                      selectedAngleIndex={selectedAngleIndex}
                      onAngleSelect={handleAngleSelection}
                      componentSize={componentSize}
                    />
                  );
                  focusKey = 'iw';
                  break;
                case 'hemo':
                  ComponentToRender = () => <Hemo componentSize={componentSize} />;
                  focusKey = 'hemo';
                  break;
                case 'smartNavigator':
                  ComponentToRender = () => <SmartNavigator componentSize={componentSize} />;
                  focusKey = 'smartnav';
                  break;
                case 'placeholder':
                  ComponentToRender = () => <Placeholder componentSize={componentSize} />;
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
                  <ComponentToRender />
                </div>
              );
            });

            return gridComponents;
          })()}
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
