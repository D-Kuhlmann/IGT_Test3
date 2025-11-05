import { useState } from "react";
import { SmartWorkflowBar } from "../../shared/SmartWorkflowBar";
import { SmartWorkflowsOverlay } from "../../shared/SmartWorkflowsOverlay";
import type { WorkflowStep } from "../../../types";
import iconVoice from "../../../assets/icon_automation_voice.svg";
import iconCollimation from "../../../assets/icon_automation_collimation.svg";
import iconSmartMask from "../../../assets/icon_automation_smartmask.svg";
import iconPatientDetection from "../../../assets/icon_automation_patientdetection.svg";
import iconSpray from "../../../assets/dreft.svg";

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
    smartNavigator: "Smart Navigator"
  };

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
              <div className="flex items-center gap-6">
                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={iconVoice} alt="Voice" className="w-full h-full object-contain" />
                </button>
                
                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={iconCollimation} alt="Collimation" className="w-full h-full object-contain" />
                </button>

                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={iconSmartMask} alt="Smart Mask" className="w-full h-full object-contain" />
                </button>

                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity opacity-60">
                  <img src={iconCollimation} alt="Collimation 2" className="w-full h-full object-contain" />
                </button>

                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity opacity-60">
                  <img src={iconCollimation} alt="Collimation 3" className="w-full h-full object-contain" />
                </button>

                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={iconPatientDetection} alt="Patient Detection" className="w-full h-full object-contain" />
                </button>

                <button className="w-16 h-16 flex items-center justify-center hover:opacity-80 transition-opacity">
                  <img src={iconPatientDetection} alt="Patient Detection 2" className="w-full h-full object-contain" />
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
              <img src={iconSpray} alt="Spray" className="w-20 h-30 object-contain" />
            </button>
          </div>

          {/* Active Components Section */}
          <div>
            <div className="grid grid-cols-4 gap-4">
              {activeComponents.map((component) => (
                <div key={component}>
                  <h4 className="text-white text-lg font-['CentraleSans:Book',_sans-serif] mb-2">
                    {componentNames[component]}
                  </h4>
                  <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-500 transition-colors cursor-pointer">
                    <div className="aspect-video bg-black/50 flex items-center justify-center relative">
                      <div className="absolute top-2 left-2 w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">Preview</span>
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
