import { useState } from "react";
import { SmartWorkflowBar } from "../../shared/SmartWorkflowBar";
import { SmartWorkflowsOverlay } from "../../shared/SmartWorkflowsOverlay";
import type { WorkflowStep } from "../../../types";
import { useAutomation } from "../../../contexts/AutomationContext";
import iconVoiceActivated from "../../../assets/AutomationIcons/AuVoiceEnable.svg";
import iconVoiceDeactivated from "../../../assets/AutomationIcons/AuVoiceDisabled.svg";
import iconCollimationActivated from "../../../assets/AutomationIcons/AUAutoCollimationActivated.svg";
import iconCollimationDeactivated from "../../../assets/AutomationIcons/AUAutoCollimationDeactivated.svg";
import iconSmartMaskActivated from "../../../assets/AutomationIcons/AuSmartMaskActivated.svg";
import iconSmartMaskDeactivated from "../../../assets/AutomationIcons/AuSmartMaskDeactivated.svg";
import iconAutoZoomActivated from "../../../assets/AutomationIcons/AuAutoZoomActivated.svg";
import iconAutoZoomDeactivated from "../../../assets/AutomationIcons/AuAutoZoomDeactivated.svg";
import iconDetectorMoveActivated from "../../../assets/AutomationIcons/AuDetectormoveActivated.svg";
import iconDetectorMoveDeactivated from "../../../assets/AutomationIcons/AuDetectormoveDeactivated.svg";
import iconSmartCenteringActivated from "../../../assets/AutomationIcons/AuSmartCenteringActivated.svg";
import iconSmartCenteringDeactivated from "../../../assets/AutomationIcons/AuSmartCenteringDeactivated.svg";
import iconPuffFreezeActivated from "../../../assets/AutomationIcons/AuPuffFreezeActivated.svg";
import iconPuffFreezeDeactivated from "../../../assets/AutomationIcons/AUPuffFreezeDeactivated.svg";
import iconSpray from "../../../assets/dreft.svg";
import { imgIcoCollablive } from "../../../imports/svg-w95w9";

// Screen preview images
import imgInterventionalWorkspace from "../../../assets/ScreenImages/IWImageList.png";
import imgHemo from "../../../assets/ScreenImages/Hemo.png";
import imgSmartNavigator from "../../../assets/ScreenImages/UniguideDone.png";
import imgLumify from "../../../assets/ScreenImages/Lumify.png";
import imgIvus from "../../../assets/ScreenImages/Ivus.png";
import imgCollaborationLive from "../../../assets/ScreenImages/CollabarationLivePlaceholder.png";

interface SmartOrchestratorMenuProps {
  activeComponents: Array<'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator'>;
  currentWorkflowStep?: string;
  activePreset?: 1 | 2;
  onStepSelect: (step: WorkflowStep) => void;
}

export function SmartOrchestratorMenu({
  activeComponents,
  currentWorkflowStep,
  activePreset = 1,
  onStepSelect
}: SmartOrchestratorMenuProps) {
  const [showWorkflows, setShowWorkflows] = useState(false);
  const { automationState, toggleAutomation } = useAutomation();
  
  console.log('SmartOrchestratorMenu - Automation State:', automationState);

  const handleWorkflowsClick = () => {
    setShowWorkflows(true);
  };

  const handleWorkflowsClose = () => {
    setShowWorkflows(false);
  };

  const handleWorkflowStepSelect = (step: WorkflowStep) => {
    onStepSelect(step);
    setShowWorkflows(false);
  };

  // Map component names to display names
  const componentNames = {
    xrayLive: "X-ray Live",
    interventionalWorkspace: "Interventional Workspace",
    hemo: "Hemo",
    smartNavigator: "Smart Navigator",
    lumify: "Lumify",
    ivus: "IVUS",
    collaborationLive: "Collaboration Live"
  };

  // Map components to their preview images (xrayLive will use black background instead)
  const componentImages: Record<string, string | null> = {
    xrayLive: null, // Black background, no image
    interventionalWorkspace: imgInterventionalWorkspace,
    hemo: imgHemo,
    smartNavigator: imgSmartNavigator,
    lumify: imgLumify,
    ivus: imgIvus,
    collaborationLive: imgCollaborationLive
  };

  // Get all unique components used in the entire workflow/preset based on active preset
  const getComponentsForPreset = (preset: 1 | 2): Array<'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator' | 'lumify' | 'ivus' | 'collaborationLive'> => {
    if (preset === 1) {
      // Preset 1 - Cardio: includes IVUS
      return [
        'xrayLive',
        'interventionalWorkspace', 
        'hemo',
        'smartNavigator',
        'lumify',
        'ivus',
        'collaborationLive'
      ];
    } else {
      // Preset 2 - Neuro: no IVUS
      return [
        'xrayLive',
        'interventionalWorkspace', 
        'hemo',
        'smartNavigator',
        'lumify',
        'collaborationLive'
      ];
    }
  };

  const allComponents = getComponentsForPreset(activePreset);

  return (
    <>
      <div className="flex flex-col h-full w-full bg-black">
        {/* Smart Workflows Bar at the top - scaled to fit TSM */}
        <div className="relative w-full shrink-0 px-6 pt-6">
          <SmartWorkflowBar
            currentStep={currentWorkflowStep}
            activePreset={activePreset}
            onStepSelect={handleWorkflowStepSelect}
            scale={0.75}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Automations Section */}
          <div className="mb-8 mt-6 flex gap-4">
            <div className="flex-1">
              <h3 className="text-white text-2xl font-['CentraleSans:Book',_sans-serif] mb-4">
                Automations
              </h3>
              <div className="flex items-end gap-4">
            <div 
              className="flex items-center justify-between px-6 py-5 rounded-lg flex-1"
              style={{
                background: "linear-gradient(90deg, #2C3E50 0%, #34495E 50%, #2C5364 100%)"
              }}
            >
              {/* Left side - automation icons */}
              <div className="flex items-center gap-20">
                <button 
                  onClick={() => toggleAutomation('voice')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.voice ? iconVoiceActivated : iconVoiceDeactivated} 
                    alt="Voice" 
                    className="w-full h-full object-contain" 
                  />
                </button>
                
                <button 
                  onClick={() => toggleAutomation('collimation')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.collimation ? iconCollimationActivated : iconCollimationDeactivated} 
                    alt="Collimation" 
                    className="w-full h-full object-contain" 
                  />
                </button>

                <button 
                  onClick={() => toggleAutomation('smartMask')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.smartMask ? iconSmartMaskActivated : iconSmartMaskDeactivated} 
                    alt="Smart Mask" 
                    className="w-full h-full object-contain" 
                  />
                </button>

                <button 
                  onClick={() => toggleAutomation('autoZoom')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.autoZoom ? iconAutoZoomActivated : iconAutoZoomDeactivated} 
                    alt="Auto Zoom" 
                    className="w-full h-full object-contain" 
                  />
                </button>

                <button 
                  onClick={() => toggleAutomation('detectorMove')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.detectorMove ? iconDetectorMoveActivated : iconDetectorMoveDeactivated} 
                    alt="Detector Move" 
                    className="w-full h-full object-contain" 
                  />
                </button>

                <button 
                  onClick={() => toggleAutomation('smartCentering')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.smartCentering ? iconSmartCenteringActivated : iconSmartCenteringDeactivated} 
                    alt="Smart Centering" 
                    className="w-full h-full object-contain" 
                  />
                </button>

                <button 
                  onClick={() => toggleAutomation('puffFreeze')}
                  className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <img 
                    src={automationState.puffFreeze ? iconPuffFreezeActivated : iconPuffFreezeDeactivated} 
                    alt="Puff Freeze" 
                    className="w-full h-full object-contain" 
                  />
                </button>
              </div>

              {/* Right side - Configure button */}
              <button className="bg-[#2C3E50] hover:bg-[#34495E] text-white px-8 py-3 rounded-lg font-['CentraleSans:Book',_sans-serif] text-lg transition-colors">
                Configure
              </button>
            </div>
              </div>
            </div>
            
            {/* Spray bottle button - height matches title + space + bar */}
            <button className="w-40 self-stretch flex items-center justify-center bg-neutral-900 hover:bg-[#3a3a3a] rounded-lg transition-colors flex-shrink-0">
              <img src={iconSpray} alt="Spray" className="h-3/4 w-auto object-contain" />
            </button>
          </div>

          {/* All Components Section - Shows all components from entire workflow */}
          <div>
            <div className="grid grid-cols-5 gap-4">
              {allComponents.map((component) => (
                <div key={component}>
                  <h4 className="text-white text-lg font-['CentraleSans:Book',_sans-serif] mb-2">
                    {componentNames[component]}
                  </h4>
                  <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-colors cursor-pointer">
                    <div className="aspect-video bg-black flex items-center justify-center relative">
                      {/* Preview Image - show image if available, otherwise keep black background */}
                      {componentImages[component] && (
                        <img 
                          src={componentImages[component]!} 
                          alt={componentNames[component]}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smart Workflows Overlay - Rendered outside main container to prevent clipping */}
      <SmartWorkflowsOverlay
        isVisible={showWorkflows}
        onClose={handleWorkflowsClose}
        onStepSelect={handleWorkflowStepSelect}
        currentStep={currentWorkflowStep}
        activePreset={activePreset}
      />
    </>
  );
}
