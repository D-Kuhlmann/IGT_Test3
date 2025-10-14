import { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-02p7sqlbj5";
import arrowSvgPaths from "../../imports/svg-xo6dcn4zhp";

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

// Step Component - reusable for infinite scroll
function WorkflowStepButton({
  step,
  stepIndex,
  isFocused,
  onClick,
}: {
  step: WorkflowStep;
  stepIndex: number;
  isFocused: boolean;
  onClick: () => void;
}) {
  const stepIcons = [
    // Review - StartManual icon
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
      <path d="M16.1667 26L5.66667 15.5L19.5 1.66667L33.3333 15.5L28.5833 20.25L26.8333 18.5L29.8333 15.5L19.5 5.16667L9.16667 15.5L16.1667 22.5V26ZM35 25C34.0833 25 33.3333 25.75 33.3333 26.6667V28.3333H31.6667V23.3333C31.6667 22.4167 30.9167 21.6667 30 21.6667C29.0833 21.6667 28.3333 22.4167 28.3333 23.3333V26.6667H26.6667V21.6667C26.6667 20.75 25.9167 20 25 20C24.0833 20 23.3333 20.75 23.3333 21.6667V26.6667H21.6667V13.3333C21.6667 12.4167 20.9167 11.6667 20 11.6667C19.0833 11.6667 18.3333 12.4167 18.3333 13.3333V33.3333H16.6667V31.6667C16.6667 30.75 15.9167 30 15 30C14.0833 30 13.3333 30.75 13.3333 31.6667V35.4167L14.8333 38.3333H34.8333L36.6667 31.9167V26.6667C36.6667 25.75 35.9167 25 35 25Z" fill="var(--fill-0, white)" />
    </svg>,
    // Access - UltraSound icon
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
      <path d="M39.1667 24.24C34.605 29.7517 27.7133 33.2633 20 33.2633C12.2867 33.2633 5.395 29.7517 0.833333 24.24L14.8608 7.185C16.4117 7.95333 18.1525 8.39667 20 8.39667C21.8475 8.39667 23.5883 7.95333 25.1392 7.185L39.1667 24.24Z" fill="var(--fill-0, white)" />
    </svg>,
    // DSA - CTScanner icon
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
      <path d="M20 7.91667C13.3333 7.91667 7.91667 13.3333 7.91667 20C7.91667 22.8583 8.91667 25.4833 10.5833 27.55L15.9167 22.8833C15.3417 22.0667 15 21.075 15 20C15 17.2417 17.2417 15 20 15C22.7583 15 25 17.2417 25 20C25 21.075 24.6583 22.0667 24.0833 22.8833L29.4167 27.55C31.0833 25.4833 32.0833 22.8583 32.0833 20C32.0833 13.3333 26.6667 7.91667 20 7.91667ZM20 25C18.9167 25 17.9167 24.65 17.1 24.0667L11.7167 28.775C13.8833 30.825 16.7917 32.0833 20 32.0833C23.2083 32.0833 26.1167 30.8167 28.2833 28.775L22.9 24.0667C22.0833 24.65 21.0833 25 20 25ZM20 1.66667C9.875 1.66667 1.66667 9.875 1.66667 20C1.66667 24.8667 3.56667 29.2917 6.66667 32.575V38.3333H33.3333V32.575C36.4333 29.2917 38.3333 24.8667 38.3333 20C38.3333 9.875 30.125 1.66667 20 1.66667ZM20 34.5833C11.9583 34.5833 5.41667 28.0417 5.41667 20C5.41667 11.9583 11.9583 5.41667 20 5.41667C28.0417 5.41667 34.5833 11.9583 34.5833 20C34.5833 28.0417 28.0417 34.5833 20 34.5833Z" fill="var(--fill-0, white)" />
    </svg>,
    // IVUS - IvUs icon
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
      <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 10C14.475 10 10 14.475 10 20C10 25.525 14.475 30 20 30C25.525 30 30 25.525 30 20C30 14.475 25.525 10 20 10Z" fill="var(--fill-0, white)" opacity="0.3" />
      <path d="M20 10C25.525 10 30 14.475 30 20C25.525 30 20 30C14.475 30 10 25.525 10 20C10 14.475 14.475 10 20 10ZM20 5C11.725 5 5 11.725 5 20C5 28.275 11.725 35 20 35C28.275 35 35 28.275 35 20C35 11.725 28.275 5 20 5Z" fill="var(--fill-0, white)" opacity="0.5" />
      <path d="M20 5C28.275 5 35 11.725 35 20C35 28.275 28.275 35 20 35C11.725 35 5 28.275 5 20C5 11.725 11.725 5 20 5ZM20 1.66667C9.87083 1.66667 1.66667 9.87083 1.66667 20C1.66667 30.1292 9.87083 38.3333 20 38.3333C30.1292 38.3333 38.3333 30.1292 38.3333 20C38.3333 9.87083 30.1292 1.66667 20 1.66667Z" fill="var(--fill-0, white)" />
    </svg>,
    // Confirm - Checkmark + CTScanner icon
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-[10.904px] relative size-[29.096px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d="M14.5478 5.75849C9.69851 5.75849 5.75849 9.69851 5.75849 14.5478C5.75849 16.6269 6.48588 18.5363 7.69819 20.0395L11.5776 16.6451C11.1593 16.051 10.9108 15.3297 10.9108 14.5478C10.9108 12.5414 12.5414 10.9108 14.5478 10.9108C16.5541 10.9108 18.1847 12.5414 18.1847 14.5478C18.1847 15.3297 17.9362 16.051 17.5179 16.6451L21.3973 20.0395C22.6096 18.5363 23.337 16.6269 23.337 14.5478C23.337 9.69851 19.397 5.75849 14.5478 5.75849ZM14.5478 18.1847C13.7598 18.1847 13.0324 17.9301 12.4383 17.5058L8.52257 20.9306C10.0986 22.4217 12.2141 23.337 14.5478 23.337C16.8815 23.337 18.997 22.4157 20.573 20.9306L16.6572 17.5058C16.0632 17.9301 15.3358 18.1847 14.5478 18.1847ZM14.5478 1.21231C7.18296 1.21231 1.21231 7.18296 1.21231 14.5478C1.21231 18.0877 2.59435 21.3064 4.84925 23.6947V27.8832H24.2463V23.6947C26.5012 21.3064 27.8832 18.0877 27.8832 14.5478C27.8832 7.18296 21.9126 1.21231 14.5478 1.21231ZM14.5478 25.1555C8.69835 25.1555 3.94002 20.3972 3.94002 14.5478C3.94002 8.69835 8.69835 3.94002 14.5478 3.94002C20.3972 3.94002 25.1555 8.69835 25.1555 14.5478C25.1555 20.3972 20.3972 25.1555 14.5478 25.1555Z" fill="var(--fill-0, white)" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[16.722px] mt-0 relative size-[23.276px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_158_157)">
            <path d="M20.1036 2.20252L23.0138 5.1117L23.6837 5.78162L23.0509 6.4867L10.4435 20.5492L9.71887 21.3578L8.97278 20.5697L0.244265 11.3558L-0.425657 10.6498L3.90833 6.3158L4.61438 7.08045L9.67591 12.5629L18.6427 2.2533L19.3458 1.44471L20.1036 2.20252Z" fill="var(--fill-0, white)" stroke="var(--stroke-0, #515151)" strokeWidth="2" />
          </g>
          <defs>
            <clipPath id="clip0_158_157">
              <rect fill="white" height="23.2764" width="23.2764" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>,
    // Finalize - EndMonitoring icon
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
      <path d="M19.1667 19.1667V37.5H37.5V35.8333H20.8333V20.8333H37.5V19.1667H19.1667ZM37.5 28.3333L28.3333 23.75V26.6667H22.5V30H28.3333V32.9167L37.5 28.3333Z" fill="var(--fill-0, white)" />
      <path d="M8.33333 10C8.33333 5.33333 12 1.66667 16.6667 1.66667C21.3333 1.66667 25 5.33333 25 10C25 14.6667 21.3333 18.3333 16.6667 18.3333C12 18.3333 8.33333 14.6667 8.33333 10ZM16.6667 19.9167C14.6667 19.9167 12.6667 19.25 11.1667 18.25H11.0833H10C6.33333 18.25 3.33333 21.25 3.33333 24.9167V31.5833H17.5V19.8333C17.25 19.9167 16.9167 19.9167 16.6667 19.9167Z" fill="var(--fill-0, white)" opacity="0.5" />
    </svg>
  ];

  const stepLabels = ["Review", "Access", "DSA", "IVUS", "Confirm", "Finalize"];

  return (
    <button
      className={`content-stretch flex gap-[8px] items-center relative shrink-0 p-2 rounded-lg transition-all duration-300 w-[200px] ${
        isFocused ? 'bg-blue-500/30 scale-110' : 'bg-transparent hover:bg-white/10 scale-100'
      }`}
      onClick={onClick}
    >
      {/* Connecting Line */}
      <div className="flex h-[58px] items-center justify-center relative shrink-0 w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <div className="h-[15px] relative w-[58px]">
            <div className="absolute inset-[46.67%_-0.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
                <path d="M59 0.500001H1" stroke="var(--stroke-0, #BEBEBE)" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Icon */}
      <div className="relative shrink-0 size-[40px]">
        {stepIcons[stepIndex]}
      </div>

      {/* Label */}
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white">
        <p className="leading-[24px] whitespace-pre">{stepLabels[stepIndex]}</p>
      </div>
    </button>
  );
}

export function SmartWorkflowsOverlay({
  isVisible,
  onClose,
  onStepSelect,
  currentStep,
}: SmartWorkflowsOverlayProps) {
  // Add CSS animations for slide effect
  const slideAnimationStyles = `
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    
    @keyframes slideUp {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `;
  const [focusedStepIndex, setFocusedStepIndex] = useState(0);
  const [lastNavigationDirection, setLastNavigationDirection] = useState<'left' | 'right' | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const workflowSteps: WorkflowStep[] = [
    { id: "review", label: "Review", category: "Review" },
    { id: "ultrasound", label: "Access", category: "Access" },
    { id: "ccta-planning", label: "Baseline DSA", category: "Planning" },
    { id: "ivus-acquisition", label: "IVUS Acquisition", category: "Treatment" },
    { id: "start", label: "Confirm DSA", category: "Planning" },
    { id: "finalise", label: "Finalise", category: "Treatment" },
  ];

  const totalSteps = workflowSteps.length;

  const handleStepClick = (step: WorkflowStep) => {
    onStepSelect(step);
    onClose();
  };

  const moveLeft = () => {
    setFocusedStepIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    setLastNavigationDirection('left');
    // Reset direction after a short delay
    setTimeout(() => setLastNavigationDirection(null), 300);
  };

  const moveRight = () => {
    setFocusedStepIndex((prev) => (prev + 1) % totalSteps);
    setLastNavigationDirection('right');
    // Reset direction after a short delay
    setTimeout(() => setLastNavigationDirection(null), 300);
  };

  // Calculate the transform to center the focused step in the blue container
  const getTransform = () => {
    const containerWidth = 350; // Width of blue container
    const containerCenter = containerWidth / 2; // 175px - center of blue container
    
    // Each button is now 200px wide + 7px gap = 207px total spacing
    const buttonSpacing = 207;
    const buttonWidth = 200; // Fixed button width
    const leftPadding = 75; // Padding: (350px / 2) - (200px / 2) = 175px - 100px = 75px
    
    // Calculate where the focused button's center would be with padding
    const focusedButtonLeft = leftPadding + (focusedStepIndex * buttonSpacing);
    const focusedButtonCenter = focusedButtonLeft + (buttonWidth / 2);
    
    // Calculate translation needed to center the focused button in the container
    const translateX = containerCenter - focusedButtonCenter;
    
    return `translateX(${translateX}px)`;
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          event.stopPropagation();
          moveLeft();
          break;
        case "ArrowRight":
          event.preventDefault();
          event.stopPropagation();
          moveRight();
          break;
        case "ArrowUp":
          event.preventDefault();
          event.stopPropagation();
          onClose();
          break;
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
          setFocusedStepIndex(totalSteps - 1);
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
    document.addEventListener("keydown", handleKeyDown, true);

    if (overlayElement) {
      overlayElement.addEventListener("keydown", handleKeyDown);
      overlayElement.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      if (overlayElement) {
        overlayElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isVisible, focusedStepIndex, onClose, onStepSelect]);

  // Reset focus when overlay opens
  useEffect(() => {
    if (isVisible) {
      const currentStepIndex = workflowSteps.findIndex(
        (step) => step.id === currentStep,
      );
      const initialIndex = currentStepIndex >= 0 ? currentStepIndex : 0;
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
      {/* Inject CSS animations */}
      <style>{slideAnimationStyles}</style>
      
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/10 z-30"
        onClick={onClose}
      />

      {/* Overlay Container */}
      <div
        ref={overlayRef}
        className="fixed top-14 left-0 right-0 z-40 flex justify-center outline-none p-2"
        tabIndex={0}
        role="dialog"
        aria-label="Smart Workflows Navigation Menu"
        style={{
          animation: 'slideDown 0.3s ease-out'
        }}
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
            {/* SmartWorkflowsBar - Infinite Dial Layout */}
            <div
              className="SmartWorkflowContainer box-border content-stretch flex flex-col gap-4 items-start justify-center px-4 py-3 relative w-fit h-fit transition-transform duration-200
                origin-center"
              data-name="SmartWorkflowContainer"
              style={{
                transformOrigin: "center center",
              }}
            >

              {/* Infinite Dial Container */}
              <div className="relative rounded-bl-[10px] rounded-br-[10px] w-full h-[100px]">
                <div className="flex flex-row items-center justify-center relative w-full h-full">
                  <div className="box-border content-stretch flex gap-[50px] items-center justify-center px-[34px] py-0 relative w-full h-full">
                    
                    {/* Stars Icon */}
                    <div className="h-[50px] relative shrink-0 w-[56.571px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 50">
                        <g id="Knob-Stars">
                          <path d="M36.6045 11.1777C36.6045 11.1777 42.6021 11.9393 43.6626 12.2595C44.3577 12.4606 45.0528 12.9801 45.3809 14.142C45.6732 15.3039 46.3683 21.875 46.3683 21.875L46.8068 21.875C46.8068 21.875 47.5019 15.3039 47.7942 14.142C48.0015 13.2129 48.6643 12.4867 49.5124 12.2595C50.5729 11.9393 56.5706 11.1777 56.5706 11.1777L56.5706 10.6973C56.5706 10.6973 50.5729 9.93573 49.5124 9.61547C48.6711 9.3734 48.0151 8.6528 47.7942 7.73296C47.5019 6.57107 46.8068 7.67259e-08 46.8068 7.67259e-08L46.3683 7.34284e-08C46.3683 7.34284e-08 45.6732 6.57107 45.3809 7.73296C45.1735 8.66211 44.5107 9.3883 43.6626 9.61547C42.6021 9.93573 36.6045 10.6973 36.6045 10.6973L36.6045 11.1777Z" fill="var(--fill-0, white)" />
                          <path d="M-1.38464e-07 31.6627C-1.38464e-07 31.6627 12.9949 32.9682 15.2927 33.5172C16.7987 33.862 18.3048 34.7526 19.0155 36.7444C19.6488 38.7362 21.1549 50.0009 21.1549 50.0009L22.1049 50.0009C22.1049 50.0009 23.611 38.7362 24.2444 36.7444C24.6936 35.1516 26.1297 33.9067 27.9672 33.5172C30.265 32.9682 43.2598 31.6627 43.2598 31.6627L43.2598 30.8391C43.2598 30.8391 30.265 29.5336 27.9672 28.9845C26.1444 28.5696 24.7231 27.3343 24.2444 25.7574C23.611 23.7656 22.1049 12.5009 22.1049 12.5009L21.1549 12.5009C21.1549 12.5009 19.6488 23.7656 19.0155 25.7574C18.5662 27.3502 17.1301 28.5951 15.2927 28.9845C12.9949 29.5336 -1.32513e-07 30.8391 -1.32513e-07 30.8391L-1.38464e-07 31.6627Z" fill="var(--fill-0, white)" />
                        </g>
                      </svg>
                    </div>

                    {/* Procedure Info */}
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div className="[grid-area:1_/_1] font-['CentraleSans:Bold',_sans-serif] ml-[79.488px] mt-[34px] not-italic relative text-[23px] text-[rgba(255,255,255,0.8)] w-[174.88px]">
                        <p className="leading-[22px]">PTA Procedure</p>
                      </div>
                      <div className="[grid-area:1_/_1] h-[48px] ml-0 mt-[4px] relative w-[50.874px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 48">
                          <path d={svgPaths.p1dc44680} fill="var(--fill-0, white)" />
                        </svg>
                      </div>
                      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] ml-[77.332px] mt-0 not-italic relative text-[18px] text-[rgba(214,214,214,0.8)] w-[178.06px]">
                        <p className="leading-[22px]">Peripheral Vascular</p>
                      </div>
                    </div>

                    {/* Carousel Container */}
                    <div className="h-[80px] relative shrink-0 w-[400px]">
                      {/* Left Arrow Button */}
                      <div className="absolute bottom-[41.94%] flex items-center justify-center left-0 right-[98.64%] top-[36.56%] z-10">
                        <button 
                          className={`flex-none h-[12.719px] transform rotate-90 w-[20px] transition-opacity duration-300 cursor-pointer ${
                            lastNavigationDirection === 'left' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                          }`}
                          onClick={moveLeft}
                          aria-label="Previous workflow step"
                        >
                          <div className="relative size-full">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                              <path 
                                clipRule="evenodd" 
                                d={arrowSvgPaths.p35974100} 
                                fill="var(--fill-0, #E9E3DA)" 
                                fillRule="evenodd" 
                              />
                            </svg>
                          </div>
                        </button>
                      </div>

                      {/* Right Arrow Button */}
                      <div className="absolute bottom-[41.94%] flex items-center justify-center left-[98.64%] right-0 top-[36.56%] z-10">
                        <button 
                          className={`flex-none h-[12.719px] transform rotate-90 scale-y-[-100%] w-[20px] transition-opacity duration-300 cursor-pointer ${
                            lastNavigationDirection === 'right' ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                          }`}
                          onClick={moveRight}
                          aria-label="Next workflow step"
                        >
                          <div className="relative size-full">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                              <path 
                                clipRule="evenodd" 
                                d={arrowSvgPaths.p35974100} 
                                fill="var(--fill-0, #E9E3DA)" 
                                fillRule="evenodd" 
                              />
                            </svg>
                          </div>
                        </button>
                      </div>

                      {/* Blue background container with buttons as direct children */}
                      <div className="absolute bg-[#14213b] h-[80px] left-[25px] opacity-90 rounded-[10px] top-0 w-[350px] overflow-hidden">
                        {/* Workflow Steps - positioned relative to the blue container */}
                        <div 
                          className="flex gap-[7px] h-full items-center absolute transition-transform duration-300 ease-out"
                          style={{
                            transform: getTransform(),
                            left: 0,
                            top: 0,
                            paddingLeft: '75px', // Half container width minus half button width (175px - 100px)
                            paddingRight: '75px' // Same padding on both sides for equal centering
                          }}
                        >
                          {/* Single set of workflow steps */}
                          {workflowSteps.map((step, stepIndex) => (
                            <WorkflowStepButton
                              key={step.id}
                              step={step}
                              stepIndex={stepIndex}
                              isFocused={stepIndex === focusedStepIndex}
                              onClick={() => handleStepClick(step)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Settings Icon */}
                    <div className="relative shrink-0 size-[32px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                        <path d="M30 19V13H25.5C25.3 12.4 25.1 11.9 24.8 11.4L28 8.2L23.8 4L20.6 7.2C20.1 6.9 19.5 6.7 19 6.5V2H13V6.5C12.4 6.7 11.9 6.9 11.4 7.2L8.2 4L4 8.2L7.2 11.4C6.9 11.9 6.7 12.5 6.5 13H2V19H6.5C6.7 19.6 6.9 20.1 7.2 20.6L4 23.8L8.2 28L11.4 24.8C11.9 25.1 12.5 25.3 13 25.5V30H19V25.5C19.6 25.3 20.1 25.1 20.6 24.8L23.8 28L28 23.8L24.8 20.6C25.1 20.1 25.3 19.5 25.5 19H30ZM16 20.5C13.5 20.5 11.5 18.5 11.5 16C11.5 13.5 13.5 11.5 16 11.5C18.5 11.5 20.5 13.5 20.5 16C20.5 18.5 18.5 20.5 16 20.5Z" fill="var(--fill-0, white)" />
                      </svg>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}