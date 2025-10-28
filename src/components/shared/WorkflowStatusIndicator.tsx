import { useWorkflowSync } from '../../contexts/WorkflowSyncContext';

export function WorkflowStatusIndicator() {
  const { currentStep, currentSubStep, workflowId } = useWorkflowSync();

  // Don't show if no workflow is active
  if (!workflowId || currentStep === 1) {
    return null;
  }

  const STEP_NAMES: Record<number, string> = {
    1: 'Protocol',
    2: 'Settings',
    3: 'Isocenter',
    4: 'Check Path',
    5: 'Acquisition',
  };

  const stepName = STEP_NAMES[currentStep] || `Step ${currentStep}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[#2a2a2a] border-2 border-[#41c9fe] rounded-lg shadow-2xl p-4 min-w-[200px]">
      <div className="flex items-center gap-3">
        {/* Animated pulse indicator */}
        <div className="relative">
          <div className="w-3 h-3 bg-[#41c9fe] rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-[#41c9fe] rounded-full animate-ping opacity-75"></div>
        </div>

        {/* Workflow info */}
        <div>
          <div className="text-xs font-['CentraleSans:Book',_sans-serif] text-[#8c8c8c] uppercase tracking-wide">
            Smart Navigator
          </div>
          <div className="text-base font-['CentraleSans:Bold',_sans-serif] text-white">
            Step {currentStep}: {stepName}
          </div>
          {currentSubStep && (
            <div className="text-sm font-['CentraleSans:Book',_sans-serif] text-[#41c9fe]">
              {currentSubStep}
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1 bg-[#3b3b3b] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#41c9fe] to-[#2E9BC8] transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}
