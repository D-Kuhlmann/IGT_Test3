import React, { useState, useEffect, useRef } from 'react';
import { SmartWorkflowsOverlay } from '../../shared/SmartWorkflowsOverlay';

interface WorkflowStep {
  id: string;
  label: string;
  category: string;
  isActive?: boolean;
}

interface SmartWorkflowsIndicatorProps {
  focusMode?: boolean;
  isWorkflowsVisible: boolean;
  currentWorkflowStep?: string;
  isCarmOverlayActive?: boolean;
  onStepSelect: (step: WorkflowStep) => void;
  onClose: () => void;
  activePreset?: 1 | 2;
  isVoiceMode?: boolean;
  voiceTranscript?: string;
  onActivateFocusMode?: (stepId: string) => void;
}

export function SmartWorkflowsIndicator({
  focusMode = false,
  isWorkflowsVisible,
  currentWorkflowStep,
  isCarmOverlayActive = false,
  onStepSelect,
  onClose,
  activePreset = 1,
  isVoiceMode = false,
  voiceTranscript = '',
  onActivateFocusMode
}: SmartWorkflowsIndicatorProps) {
  const [animationKey, setAnimationKey] = useState(0);
  
  // Trigger animation when step changes
  useEffect(() => {
    if (currentWorkflowStep) {
      setAnimationKey(prev => prev + 1);
    }
  }, [currentWorkflowStep]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Morphing container - transforms from indicator to overlay */}
      <div 
        className="relative rounded-lg flex items-center justify-center border-2 border-[#0086BB] overflow-visible transition-all duration-300 ease-out"
        style={{
          height: isWorkflowsVisible ? '120px' : '40px',
          width: isWorkflowsVisible ? '950px' : (currentWorkflowStep || focusMode ? 'auto' : '40px'),
          minWidth: '40px',
          padding: isWorkflowsVisible ? '0' : (currentWorkflowStep || focusMode ? '0 12px' : '0'),
          backgroundImage: focusMode
            ? 'linear-gradient(135deg, #9333EA 0%, #C084FC 25%, #9333EA 50%, #C084FC 75%, #9333EA 100%)'
            : currentWorkflowStep 
              ? 'linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)'
              : 'none',
          backgroundColor: isCarmOverlayActive ? '#6B7280' : (currentWorkflowStep ? 'transparent' : '#6B7280'),
        }}
      >
        {/* Indicator content - visible when NOT expanded */}
        {!isWorkflowsVisible && (
          <div className="flex items-center gap-2 transition-opacity duration-200">
            {/* Stars icon */}
            <div className="relative w-6 h-6 flex-shrink-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
                <path d="M-7.51472e-08 16.5565C-7.51472e-08 16.5565 7.12039 17.3817 8.37942 17.7287C9.20465 17.9466 10.0299 18.5096 10.4193 19.7686C10.7663 21.0276 11.5916 28.148 11.5916 28.148L12.1121 28.148C12.1121 28.148 12.9374 21.0276 13.2844 19.7686C13.5306 18.7618 14.3175 17.9749 15.3243 17.7287C16.5833 17.3817 23.7037 16.5565 23.7037 16.5565L23.7037 16.0359C23.7037 16.0359 16.5833 15.2107 15.3243 14.8636C14.3255 14.6013 13.5467 13.8205 13.2844 12.8238C12.9374 11.5647 12.1121 4.44434 12.1121 4.44434L11.5916 4.44434C11.5916 4.44434 10.7663 11.5647 10.4193 12.8238C10.1731 13.8306 9.38625 14.6175 8.37942 14.8636C7.12039 15.2107 -7.19175e-08 16.0359 -7.19175e-08 16.0359L-7.51472e-08 16.5565Z" fill="white"/>
                <path d="M16.2964 6.81307C16.2964 6.81307 19.8566 7.27727 20.4861 7.47248C20.8987 7.59505 21.3113 7.9117 21.506 8.61991C21.6796 9.32811 22.0922 13.3333 22.0922 13.3333L22.3525 13.3333C22.3525 13.3333 22.7651 9.32811 22.9386 8.61991C23.0617 8.05357 23.4551 7.61094 23.9585 7.47248C24.588 7.27727 28.1482 6.81307 28.1482 6.81307L28.1482 6.52026C28.1482 6.52026 24.588 6.05607 23.9585 5.86086C23.4592 5.71331 23.0697 5.27409 22.9386 4.71343C22.7651 4.00522 22.3525 3.75736e-08 22.3525 3.75736e-08L22.0922 3.59588e-08C22.0922 3.59588e-08 21.6796 4.00522 21.506 4.71343C21.383 5.27976 20.9895 5.72239 20.4861 5.86086C19.8566 6.05607 16.2964 6.52026 16.2964 6.52026L16.2964 6.81307Z" fill="white"/>
              </svg>
            </div>
            
            {/* Step text */}
            {currentWorkflowStep && !focusMode && (
              <span className="whitespace-nowrap font-['CentraleSans:Medium',_sans-serif] text-[18px] text-white leading-none">
                {currentWorkflowStep}
              </span>
            )}
            
            {/* Focus mode text */}
            {focusMode && (
              <span className="whitespace-nowrap font-['CentraleSans:Medium',_sans-serif] text-[18px] text-white leading-none">
                Viewport Selection Mode
              </span>
            )}
          </div>
        )}

        {/* Overlay content - visible when expanded */}
        {isWorkflowsVisible && (
          <div className="absolute inset-0 opacity-0 animate-[fadeIn_0.2s_ease-out_0.15s_forwards]">
            <SmartWorkflowsOverlay
              isVisible={true}
              onClose={onClose}
              onStepSelect={onStepSelect}
              currentStep={currentWorkflowStep}
              activePreset={activePreset}
              isVoiceMode={isVoiceMode}
              voiceTranscript={voiceTranscript}
              onActivateFocusMode={onActivateFocusMode}
            />
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
