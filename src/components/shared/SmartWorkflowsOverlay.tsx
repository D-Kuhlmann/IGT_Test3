import { useState, useEffect, useRef } from "react";
import { useSettings, matchesShortcut, matchesMouseInput } from '../../contexts/SettingsContext';
import svgPaths from "../../imports/svg-02p7sqlbj5";

interface WorkflowStep {
  id: string;
  label: string;
  category: string;
  isActive?: boolean;
}

interface SmartWorkflowsOverlayProps {
  isVisible: boolean;
  onClose: () => void;
  onStepSelect: (step: WorkflowStep) => void;
  currentStep?: string;
}

// Radial gradient background style from Figma design - matches Frame302-8-4019.tsx
const radialGradientStyle =
  "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.8685e-14 8.8936 -8.8936 2.989e-13 40 -4.2553)\\'><stop stop-color=\\'rgba(205,162,220,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(154,157,223,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(103,152,226,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(77,150,228,1)\\' offset=\\'0.625\\'/><stop stop-color=\\'rgba(51,147,229,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(26,145,231,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(13,143,231,1)\\' offset=\\'0.9375\\'/><stop stop-color=\\'rgba(0,142,232,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')";

// Radial gradient with 50% transparency for active/focused state
const radialGradientActiveStyle =
  "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.5\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(6.8685e-14 8.8936 -8.8936 2.989e-13 40 -4.2553)\\'><stop stop-color=\\'rgba(205,162,220,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(154,157,223,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(103,152,226,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(77,150,228,1)\\' offset=\\'0.625\\'/><stop stop-color=\\'rgba(51,147,229,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(26,145,231,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(13,143,231,1)\\' offset=\\'0.9375\\'/><stop stop-color=\\'rgba(0,142,232,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')";

// Components from new Figma import - scaled down
function KnobStars() {
  return (
    <div
      className="absolute bottom-0 left-0 right-[84.47%] top-0"
      data-name="Knob-Stars"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 54 50"
      >
        <g id="Knob-Stars">
          <path
            d={svgPaths.p15506500}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p26bc6200}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group278() {
  return (
    <div className="absolute contents inset-0">
      <div className="absolute bottom-[14%] font-['CentraleSans:Bold',_sans-serif] leading-[0] left-[22.98%] not-italic right-0 text-[#ffffff] text-[19px] top-[14%]">
        <p className="block leading-[29px]">
          Smart Workflows™
        </p>
      </div>
      <KnobStars />
    </div>
  );
}

function Frame350() {
  return (
    <div className="h-[40px] relative shrink-0 w-[274px]">
      <Group278 />
    </div>
  );
}

function VesselIcon() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-1 relative size-9"
      data-name="VesselIcon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="VesselIcon">
          <path
            d={svgPaths.p1dc44680}
            fill="var(--fill-0, white)"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function Group246() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['CentraleSans:Bold',_sans-serif] ml-[60px] mt-[27px] not-italic relative text-[18px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          PTA Procedure
        </p>
      </div>
      <VesselIcon />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] ml-[58px] mt-0 not-italic relative text-[14px] text-[rgba(214,214,214,0.8)] text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Peripheral Vascular
        </p>
      </div>
    </div>
  );
}

// Icon components - scaled down
function StartManual() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="StartManual"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="StartManual">
          <path
            d={svgPaths.p39a3ee00}
            fill="var(--fill-0, white)"
            id="path"
          />
        </g>
      </svg>
    </div>
  );
}

function UltraSound() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="UltraSound"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="UltraSound">
          <path
            d={svgPaths.p1e6b17f0}
            fill="var(--fill-0, white)"
            id="path"
          />
        </g>
      </svg>
    </div>
  );
}

function CtScanner() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="CTScanner"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="CTScanner">
          <path
            d={svgPaths.p34c29800}
            fill="var(--fill-0, white)"
            id="path"
          />
        </g>
      </svg>
    </div>
  );
}

function IvUs() {
  return (
    <div className="relative shrink-0 size-8" data-name="IvUs">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="IvUs">
          <path
            d={svgPaths.p1cc70240}
            fill="var(--fill-0, white)"
            id="path"
            opacity="0.3"
          />
          <path
            d={svgPaths.p1a1e2600}
            fill="var(--fill-0, white)"
            id="path_2"
            opacity="0.5"
          />
          <path
            d={svgPaths.p27def580}
            fill="var(--fill-0, white)"
            id="path_3"
          />
        </g>
      </svg>
    </div>
  );
}

function DlsCheckmarkStandAlone48() {
  return (
    <div
      className="[grid-area:1_/_1] ml-[18px] mt-0 relative size-6"
      data-name="DLS_CheckmarkStandAlone_48"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g
          clipPath="url(#clip0_6_646)"
          id="DLS_CheckmarkStandAlone_48"
        >
          <path
            d={svgPaths.p1ac92d00}
            fill="var(--fill-0, white)"
            id="path"
            stroke="var(--stroke-0, #515151)"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_6_646">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DlsEndMonitoring48() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="DLS_EndMonitoring_48"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="DLS_EndMonitoring_48">
          <path
            d={svgPaths.p1323f780}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p947e100}
            fill="var(--fill-0, white)"
            id="Vector_2"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}

function CtScanner1() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-3 relative size-8"
      data-name="CTScanner"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="CTScanner">
          <path
            d={svgPaths.p34c29800}
            fill="var(--fill-0, white)"
            id="path"
          />
        </g>
      </svg>
    </div>
  );
}

function Group279() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <CtScanner1 />
      <DlsCheckmarkStandAlone48 />
    </div>
  );
}

function VesselLiveViewing() {
  return (
    <div
      className="absolute left-4 size-8 top-4"
      data-name="VesselLiveViewing"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="VesselLiveViewing"></g>
      </svg>
    </div>
  );
}

// Interactive workflow button components - radial gradient for active/focused, gray for inactive
function InteractiveFrame302({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-start ml-0 mt-0 p-4 relative rounded-lg transition-all duration-200"
      style={{
        backgroundImage: isFocused 
          ? radialGradientStyle 
          : isActive 
          ? radialGradientActiveStyle 
          : "none",
        backgroundColor:
          isActive || isFocused ? "transparent" : "#515151",
      }}
      onClick={onClick}
      tabIndex={-1}
    >
      <StartManual />
      {isFocused && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      )}
    </button>
  );
}

function InteractiveFrame303({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-start ml-0 mt-0 p-4 relative rounded-lg transition-all duration-200"
      style={{
        backgroundImage: isFocused 
          ? radialGradientStyle 
          : isActive 
          ? radialGradientActiveStyle 
          : "none",
        backgroundColor:
          isActive || isFocused ? "transparent" : "#515151",
      }}
      onClick={onClick}
      tabIndex={-1}
    >
      <UltraSound />
      {isFocused && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      )}
    </button>
  );
}

function InteractiveFrame304({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-start ml-[0.002px] mt-0 p-4 relative rounded-lg transition-all duration-200"
      style={{
        backgroundImage: isFocused 
          ? radialGradientStyle 
          : isActive 
          ? radialGradientActiveStyle 
          : "none",
        backgroundColor:
          isActive || isFocused ? "transparent" : "#515151",
      }}
      onClick={onClick}
      tabIndex={-1}
    >
      <CtScanner />
      {isFocused && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      )}
    </button>
  );
}

function InteractiveFrame305({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-start ml-[0.002px] mt-0 p-4 relative rounded-lg transition-all duration-200"
      style={{
        backgroundImage: isFocused 
          ? radialGradientStyle 
          : isActive 
          ? radialGradientActiveStyle 
          : "none",
        backgroundColor:
          isActive || isFocused ? "transparent" : "#515151",
      }}
      onClick={onClick}
      tabIndex={-1}
    >
      <IvUs />
      {isFocused && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      )}
    </button>
  );
}

function InteractiveFrame306({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-[0.002px] mt-0 px-3 py-2.5 relative rounded-lg transition-all duration-200"
      style={{
        backgroundImage: isFocused 
          ? radialGradientStyle 
          : isActive 
          ? radialGradientActiveStyle 
          : "none",
        backgroundColor:
          isActive || isFocused ? "transparent" : "#515151",
      }}
      onClick={onClick}
      tabIndex={-1}
    >
      <Group279 />
      <VesselLiveViewing />
      {isFocused && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      )}
    </button>
  );
}

function InteractiveFrame307({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-0 p-4 relative rounded-lg w-16 transition-all duration-200"
      style={{
        backgroundImage: isFocused 
          ? radialGradientStyle 
          : isActive 
          ? radialGradientActiveStyle 
          : "none",
        backgroundColor:
          isActive || isFocused ? "transparent" : "#515151",
      }}
      onClick={onClick}
      tabIndex={-1}
    >
      <DlsEndMonitoring48 />
      {isFocused && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
      )}
    </button>
  );
}

// Interactive Group components - scaled down
function InteractiveGroup216({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InteractiveFrame302
        isFocused={isFocused}
        isActive={isActive}
        onClick={onClick}
      />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Bold',_sans-serif] leading-[0] ml-20 mt-6 not-italic relative text-[#ffffff] text-[26px] w-auto">
        <p className="block leading-[19px] text-[20px]">
          Review
        </p>
      </div>
    </div>
  );
}

function InteractiveGroup213({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InteractiveFrame303
        isFocused={isFocused}
        isActive={isActive}
        onClick={onClick}
      />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] leading-[0] ml-20 mt-6 not-italic relative text-[#ffffff] text-[26px] w-auto">
        <p className="block leading-[19px] text-[20px]">
          Access
        </p>
      </div>
    </div>
  );
}

function InteractiveGroup242({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InteractiveFrame304
        isFocused={isFocused}
        isActive={isActive}
        onClick={onClick}
      />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] leading-[0] ml-20 mt-6 not-italic relative text-[#ffffff] text-[26px] w-auto">
        <p className="block leading-[19px] text-[20px]">
          Baseline DSA
        </p>
      </div>
    </div>
  );
}

function InteractiveGroup243({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InteractiveFrame305
        isFocused={isFocused}
        isActive={isActive}
        onClick={onClick}
      />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] leading-[0] ml-20 mt-6 not-italic relative text-[#ffffff] text-[26px] w-auto">
        <p className="block leading-[19px] text-[20px]">
          IVUS Acquisition
        </p>
      </div>
    </div>
  );
}

function InteractiveGroup247({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InteractiveFrame306
        isFocused={isFocused}
        isActive={isActive}
        onClick={onClick}
      />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] leading-[0] ml-20 mt-6 not-italic relative text-[#ffffff] text-[26px] w-auto">
        <p className="block leading-[19px] text-[20px]">
          Confirm DSA
        </p>
      </div>
    </div>
  );
}

function InteractiveGroup244({
  isFocused,
  isActive,
  onClick,
}: {
  isFocused: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <InteractiveFrame307
        isFocused={isFocused}
        isActive={isActive}
        onClick={onClick}
      />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] leading-[0] ml-20 mt-6 not-italic relative text-[#ffffff] text-[26px] text-nowrap w-auto">
        <p className="block leading-[19px] whitespace-pre text-[20px]">
          Finalise
        </p>
      </div>
    </div>
  );
}

function InteractiveFrame352({
  focusedStepIndex,
  currentStep,
  onStepClick,
  workflowSteps,
}: {
  focusedStepIndex: number;
  currentStep?: string;
  onStepClick: (step: WorkflowStep) => void;
  workflowSteps: WorkflowStep[];
}) {
  return (
    <div className="box-border content-stretch flex gap-[43px] items-center justify-start leading-[0] p-0 relative shrink-0">
      <InteractiveGroup216
        isFocused={focusedStepIndex === 0}
        isActive={currentStep === "review"}
        onClick={() => onStepClick(workflowSteps[0])}
      />
      <InteractiveGroup213
        isFocused={focusedStepIndex === 1}
        isActive={currentStep === "ultrasound"}
        onClick={() => onStepClick(workflowSteps[1])}
      />
      <InteractiveGroup242
        isFocused={focusedStepIndex === 2}
        isActive={currentStep === "ccta-planning"}
        onClick={() => onStepClick(workflowSteps[2])}
      />
      <InteractiveGroup243
        isFocused={focusedStepIndex === 3}
        isActive={currentStep === "ivus-acquisition"}
        onClick={() => onStepClick(workflowSteps[3])}
      />
      <InteractiveGroup247
        isFocused={focusedStepIndex === 4}
        isActive={currentStep === "start"}
        onClick={() => onStepClick(workflowSteps[4])}
      />
      <InteractiveGroup244
        isFocused={focusedStepIndex === 5}
        isActive={currentStep === "finalise"}
        onClick={() => onStepClick(workflowSteps[5])}
      />
    </div>
  );
}

function InteractiveFrame351({
  focusedStepIndex,
  currentStep,
  onStepClick,
  workflowSteps,
}: {
  focusedStepIndex: number;
  currentStep?: string;
  onStepClick: (step: WorkflowStep) => void;
  workflowSteps: WorkflowStep[];
}) {
  return (
    <div className="box-border content-stretch flex gap-12 items-center justify-start p-0 relative shrink-0">
      <Group246 />
      <InteractiveFrame352
        focusedStepIndex={focusedStepIndex}
        currentStep={currentStep}
        onStepClick={onStepClick}
        workflowSteps={workflowSteps}
      />
    </div>
  );
}

export function SmartWorkflowsOverlay({
  isVisible,
  onClose,
  onStepSelect,
  currentStep,
}: SmartWorkflowsOverlayProps) {
  const [focusedStepIndex, setFocusedStepIndex] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { inputSettings } = useSettings();

  const workflowSteps: WorkflowStep[] = [
    { id: "review", label: "Review", category: "Review" },
    { id: "ultrasound", label: "Access", category: "Access" },
    {
      id: "ccta-planning",
      label: "Baseline DSA",
      category: "Planning",
    },
    {
      id: "ivus-acquisition",
      label: "IVUS Acquisition",
      category: "Treatment",
    },
    { id: "start", label: "Confirm DSA", category: "Planning" },
    {
      id: "finalise",
      label: "Finalise",
      category: "Treatment",
    },
  ];

  const handleStepClick = (step: WorkflowStep) => {
    onStepSelect(step);
    onClose();
  };

  const moveLeft = () => {
    setFocusedStepIndex((prev) => {
      const newIndex =
        prev > 0 ? prev - 1 : workflowSteps.length - 1;
      return newIndex;
    });
  };

  const moveRight = () => {
    setFocusedStepIndex((prev) => {
      const newIndex =
        prev < workflowSteps.length - 1 ? prev + 1 : 0;
      return newIndex;
    });
  };

  // Keyboard and mouse navigation using customizable shortcuts
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for workflow step left shortcut
      if (matchesShortcut(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        moveLeft();
        return;
      }

      // Check for workflow step right shortcut
      if (matchesShortcut(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        moveRight();
        return;
      }

      // Check for workflow close shortcut
      if (matchesShortcut(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        return;
      }

      // Keep some hardcoded shortcuts for essential functionality
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          event.stopPropagation();
          handleStepClick(workflowSteps[focusedStepIndex]);
          break;
        case "Escape":
          event.preventDefault();
          event.stopPropagation();
          onClose();
          break;
        case "Home":
          event.preventDefault();
          event.stopPropagation();
          setFocusedStepIndex(0);
          break;
        case "End":
          event.preventDefault();
          event.stopPropagation();
          setFocusedStepIndex(workflowSteps.length - 1);
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
          event.preventDefault();
          event.stopPropagation();
          const index = parseInt(event.key) - 1;
          if (index >= 0 && index < workflowSteps.length) {
            setFocusedStepIndex(index);
            handleStepClick(workflowSteps[index]);
          }
          break;
      }
    };

    const overlayElement = overlayRef.current;

    const handleWheelEvent = (event: WheelEvent) => {
      // Scroll up = move left (previous item)
      // Scroll down = move right (next item)
      if (event.deltaY < 0) {
        event.preventDefault();
        event.stopPropagation();
        moveLeft();
      } else if (event.deltaY > 0) {
        event.preventDefault();
        event.stopPropagation();
        moveRight();
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("wheel", handleWheelEvent, { passive: false });

    if (overlayElement) {
      overlayElement.addEventListener("keydown", handleKeyDown);
      overlayElement.addEventListener("wheel", handleWheelEvent, { passive: false });
      overlayElement.focus();
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
        true,
      );
      document.removeEventListener("wheel", handleWheelEvent);
      if (overlayElement) {
        overlayElement.removeEventListener(
          "keydown",
          handleKeyDown,
        );
        overlayElement.removeEventListener("wheel", handleWheelEvent);
      }
    };
  }, [isVisible, focusedStepIndex, onClose, onStepSelect, inputSettings]);

  // Reset focus when overlay opens
  useEffect(() => {
    if (isVisible) {
      const currentStepIndex = workflowSteps.findIndex(
        (step) => step.id === currentStep,
      );
      const initialIndex =
        currentStepIndex >= 0 ? currentStepIndex : 0;
      setFocusedStepIndex(initialIndex);

      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.focus();
        }
      }, 100);
    }
  }, [isVisible, currentStep]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Overlay Container */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center outline-none p-4"
        tabIndex={0}
        role="dialog"
        aria-label="Smart Workflows Navigation Menu"
      >
        <div
          className="bg-[rgba(5,5,5,0.8)] relative rounded-2xl w-fit h-fit max-w-full max-h-full overflow-hidden"
          data-name="_SmartWorkflows"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(179.6deg, rgba(42, 218, 234, 0.8) 0.99874%, rgba(89, 80, 255, 0.6) 100%)",
          }}
        >
          <div className="relative w-full h-full">
            {/* SmartWorkflowContainer - Responsive with CSS scaling */}
            <div
              className="SmartWorkflowContainer box-border content-stretch flex flex-col gap-8 items-start justify-center px-6 py-5 relative w-fit h-fit transition-transform duration-200
                scale-60 sm:scale-65 md:scale-75 lg:scale-85 xl:scale-95 2xl:scale-100
                origin-center"
              data-name="SmartWorkflowContainer"
              style={{
                transformOrigin: "center center",
              }}
            >
              <Frame350 />
              <InteractiveFrame351
                focusedStepIndex={focusedStepIndex}
                currentStep={currentStep}
                onStepClick={handleStepClick}
                workflowSteps={workflowSteps}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}