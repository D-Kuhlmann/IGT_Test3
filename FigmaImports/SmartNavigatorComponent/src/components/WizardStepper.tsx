interface Step {
  id: number;
  label: string;
  name: string;
}

interface WizardStepperProps {
  steps: Step[];
  currentStep: number;
}

export function WizardStepper({ steps, currentStep }: WizardStepperProps) {
  return (
    <div className="absolute h-[72px] left-[24px] top-0 w-[1424px]">
      <div className="absolute left-[374px] top-0 flex gap-0">
        {steps.map((step, index) => (
          <StepItem
            key={step.id}
            step={step}
            isActive={currentStep === step.id}
            isCompleted={currentStep > step.id}
            showLine={index < steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

interface StepItemProps {
  step: Step;
  isActive: boolean;
  isCompleted: boolean;
  showLine: boolean;
}

function StepItem({ step, isActive, isCompleted, showLine }: StepItemProps) {
  return (
    <div className="flex gap-[8px] items-center justify-center">
      {/* Circle */}
      <div className={`content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px] ${
        isActive ? 'bg-[#1474a4]' : isCompleted ? 'bg-[#00bd5e]' : ''
      }`}>
        {!isActive && !isCompleted && (
          <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
        )}
        {isCompleted ? (
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M2.66667 8L6.66667 12L13.3333 4" stroke="#E8E8E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        ) : (
          <div className={`flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap ${
            isActive ? 'text-white' : 'text-[#d6d6d6]'
          }`}>
            <p className="leading-[18px] whitespace-pre">{step.id}</p>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className={`flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap ${
          isActive ? "text-[#d6d6d6] font-['CentraleSans:Bold',_sans-serif]" : 'text-[rgba(214,214,214,0.5)]'
        }`}>
          <p className="leading-[20px] whitespace-pre">{step.label}</p>
        </div>
      </div>

      {/* Progress line */}
      {showLine && (
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
          <div className="basis-0 bg-[dimgrey] grow h-px min-h-px min-w-px shrink-0" />
        </div>
      )}
    </div>
  );
}
