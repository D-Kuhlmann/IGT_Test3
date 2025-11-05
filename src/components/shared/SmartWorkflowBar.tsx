import React, { useState, useEffect, useRef } from "react";
import svgPaths from "../../imports/svg-02p7sqlbj5";
import arrowSvgPaths from "../../imports/svg-xo6dcn4zhp";
import type { WorkflowStep } from "../../types";

interface SmartWorkflowBarProps {
  currentStep?: string;
  activePreset?: 1 | 2;
  onStepSelect: (step: WorkflowStep) => void;
}

// Step Component - reusable for workflow steps
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
  const getStepIcon = () => {
    switch (step.label) {
      case 'Start':
      case 'Access':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
            <path d="M13.3333 21.6833C14.0083 23.175 14.8667 24.2167 15.8667 25.15C17.15 24.1583 18.7167 23.1917 20.4917 22.525C20.3917 22.4417 20.2833 22.35 20.1833 22.275C18.5 20.9167 17.1167 19.8 16.7583 13.5583C18.2583 14.35 20.1917 15.0667 22.675 15.7417C22.8917 15.8 23.1 15.825 23.3167 15.825C23.325 15.825 23.325 15.825 23.3333 15.825C23.5083 15.825 23.5917 15.8083 23.625 15.7833C24.4083 15.575 25 14.5583 25 13.325C25 11.95 24.2583 10.8333 23.3417 10.825C18.3417 10.825 16.675 9.15833 16.675 2.49167C16.675 2.31667 16.65 2.16667 16.6083 2.025C16.6083 2.01667 16.6083 2 16.6 1.99167C16.5833 1.925 16.55 1.86667 16.525 1.80833C16.125 0.766667 14.8583 0 13.3333 0C11.9083 0 10.7083 0.675 10.225 1.60833C10.0917 1.825 10.0083 2.09167 10.0083 2.45C10.0083 2.46667 10 2.48333 10 2.5C10 2.5 10 2.5 10 2.50833C10 9.16667 8.33333 10.8333 3.33333 10.8333C2.41667 10.8333 1.66667 11.95 1.66667 13.3333C1.66667 14.6083 2.30833 15.65 3.13333 15.8C3.18333 15.825 3.24167 15.8333 3.33333 15.8333H3.34167C3.55833 15.8333 3.775 15.8083 3.99167 15.7417C6.475 15.0667 8.40833 14.35 9.90833 13.5583C9.55 19.8 8.16667 20.9167 6.48333 22.275C4.36667 23.975 0.833333 27.5 0 35C0 35.9167 1.11667 36.6667 2.5 36.6667C2.65833 36.6667 2.80833 36.6583 2.95833 36.6333C3.05 36.625 3.13333 36.6 3.225 36.5833C3.26667 36.575 3.30833 36.5667 3.35 36.5583C4.30833 36.325 5 35.7167 5 35C6.66667 29.1667 7.875 27.5667 9.61667 26.1667C11.1333 24.95 12.4083 23.7417 13.3333 21.6833Z" fill="white"/>
          </svg>
        );
      case '3D Scan':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 37">
            <path d="M12.5012 18.2667C14.1679 16.5167 16.6679 13.4334 16.6679 10.0167C16.6679 9.10003 15.9179 8.35003 15.0012 8.35003C14.0845 8.35003 13.3345 9.10003 13.3345 10.0167C13.3345 12.1 11.5845 14.4334 10.1679 15.85C6.41787 11.9334 5.41787 9.7667 9.16787 5.5167C10.4179 4.18337 10.2512 2.10003 8.91787 0.850034C7.50121 -0.399966 5.41787 -0.233299 4.16787 1.10003C1.25121 4.35003 0.00120716 7.35003 0.00120716 10.0167C-0.0821262 15.2667 4.16787 19.2667 6.91787 22.1C9.00121 24.1834 11.1679 26.35 11.1679 27.9334C11.1679 29.0167 10.1679 30.1834 9.33454 31.1C8.00121 32.4334 8.00121 34.5167 9.33454 35.85C10.0012 36.35 10.8345 36.6834 11.6679 36.6834C12.5012 36.6834 13.3345 36.35 14.0012 35.6834C16.5012 33.1834 18.3345 30.1834 18.3345 27.5167C18.1679 23.7667 15.1679 20.85 12.5012 18.2667Z" fill="white"/>
          </svg>
        );
      case 'Planning':
      case 'Treatment':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d="M40 1.81818V14.5455H29.0909V8.96364C26.0091 10.0636 23.4273 12.2455 21.8182 15.0455V14.5455C21.8182 13.0545 21.3636 11.6727 20.6 10.5182C22.8091 7.97273 25.7545 6.07273 29.0909 5.15455V1.81818H30.9091V0H38.1818V1.81818H40ZM36.8 29.5818L39.0909 24.5455H30L32.2909 29.5818C30.4 30.4455 29.0909 32.3364 29.0909 34.5455C29.0909 34.5909 29.1 34.6273 29.1 34.6727C24.9364 33.1909 21.7 29.7455 20.5091 25.4545H16.7545C18.2727 32.4909 24.0818 37.9273 31.2909 38.9182C32.2 39.6 33.3273 40 34.5455 40C37.5545 40 40 37.5545 40 34.5455C40 32.3364 38.6909 30.4455 36.8 29.5818ZM10 7.27273C12.0091 7.27273 13.6364 5.64545 13.6364 3.63636C13.6364 1.62727 12.0091 0 10 0C7.99091 0 6.36364 1.62727 6.36364 3.63636C6.36364 5.64545 7.99091 7.27273 10 7.27273ZM20 23.6364V14.5455C20 11.5364 17.5545 9.09091 14.5455 9.09091H5.45455C2.44545 9.09091 0 11.5364 0 14.5455V23.6364H3.63636V14.5455C3.63636 14.0455 4.04545 13.6364 4.54545 13.6364C5.04545 13.6364 5.45455 14.0455 5.45455 14.5455V40H9.09091V24.5455C9.09091 24.0455 9.5 23.6364 10 23.6364C10.5 23.6364 10.9091 24.0455 10.9091 24.5455V40H14.5455V14.5455C14.5455 14.0455 14.9545 13.6364 15.4545 13.6364C15.9545 13.6364 16.3636 14.0455 16.3636 14.5455V23.6364H20Z" fill="#F0F8FA"/>
          </svg>
        );
      default:
        // Fallback to original icons for other steps (Preset 1)
        return stepIcons[stepIndex] || stepIcons[0];
    }
  };
  
  const stepIcons = [
    <svg key="0" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d="M16.1667 26L5.66667 15.5L19.5 1.66667L33.3333 15.5L28.5833 20.25L26.8333 18.5L29.8333 15.5L19.5 5.16667L9.16667 15.5L16.1667 22.5V26ZM35 25C34.0833 25 33.3333 25.75 33.3333 26.6667V28.3333H31.6667V23.3333C31.6667 22.4167 30.9167 21.6667 30 21.6667C29.0833 21.6667 28.3333 22.4167 28.3333 23.3333V26.6667H26.6667V21.6667C26.6667 20.75 25.9167 20 25 20C24.0833 20 23.3333 20.75 23.3333 21.6667V26.6667H21.6667V13.3333C21.6667 12.4167 20.9167 11.6667 20 11.6667C19.0833 11.6667 18.3333 12.4167 18.3333 13.3333V33.3333H16.6667V31.6667C16.6667 30.75 15.9167 30 15 30C14.0833 30 13.3333 30.75 13.3333 31.6667V35.4167L14.8333 38.3333H34.8333L36.6667 31.9167V26.6667C36.6667 25.75 35.9167 25 35 25Z" fill="var(--fill-0, white)" /></svg>,
    <svg key="1" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d="M39.1667 24.24C34.605 29.7517 27.7133 33.2633 20 33.2633C12.2867 33.2633 5.395 29.7517 0.833333 24.24L14.8608 7.185C16.4117 7.95333 18.1525 8.39667 20 8.39667C21.8475 8.39667 23.5883 7.95333 25.1392 7.185L39.1667 24.24Z" fill="var(--fill-0, white)" /></svg>,
    <svg key="2" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d="M20 7.91667C13.3333 7.91667 7.91667 13.3333 7.91667 20C7.91667 22.8583 8.91667 25.4833 10.5833 27.55L15.9167 22.8833C15.3417 22.0667 15 21.075 15 20C15 17.2417 17.2417 15 20 15C22.7583 15 25 17.2417 25 20C25 21.075 24.6583 22.0667 24.0833 22.8833L29.4167 27.55C31.0833 25.4833 32.0833 22.8583 32.0833 20C32.0833 13.3333 26.6667 7.91667 20 7.91667ZM20 25C18.9167 25 17.9167 24.65 17.1 24.0667L11.7167 28.775C13.8833 30.825 16.7917 32.0833 20 32.0833C23.2083 32.0833 26.1167 30.8167 28.2833 28.775L22.9 24.0667C22.0833 24.65 21.0833 25 20 25ZM20 1.66667C9.875 1.66667 1.66667 9.875 1.66667 20C1.66667 24.8667 3.56667 29.2917 6.66667 32.575V38.3333H33.3333V32.575C36.4333 29.2917 38.3333 24.8667 38.3333 20C38.3333 9.875 30.125 1.66667 20 1.66667ZM20 34.5833C11.9583 34.5833 5.41667 28.0417 5.41667 20C5.41667 11.9583 11.9583 5.41667 20 5.41667C28.0417 5.41667 34.5833 11.9583 34.5833 20C34.5833 28.0417 28.0417 34.5833 20 34.5833Z" fill="var(--fill-0, white)" /></svg>,
    <svg key="3" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 10C14.475 10 10 14.475 10 20C10 25.525 14.475 30 20 30C25.525 30 30 25.525 30 20C30 14.475 25.525 10 20 10Z" fill="var(--fill-0, white)" opacity="0.3" /><path d="M20 10C25.525 10 30 14.475 30 20C25.525 30 20 30C14.475 30 10 25.525 10 20C10 14.475 14.475 10 20 10ZM20 5C11.725 5 5 11.725 5 20C5 28.275 11.725 35 20 35C28.275 35 35 28.275 35 20C35 11.725 28.275 5 20 5Z" fill="var(--fill-0, white)" opacity="0.5" /><path d="M20 5C28.275 5 35 11.725 35 20C35 28.275 28.275 35 20 35C11.725 35 5 28.275 5 20C5 11.725 11.725 5 20 5ZM20 1.66667C9.87083 1.66667 1.66667 9.87083 1.66667 20C1.66667 30.1292 9.87083 38.3333 20 38.3333C30.1292 38.3333 38.3333 30.1292 38.3333 20C38.3333 9.87083 30.1292 1.66667 20 1.66667Z" fill="var(--fill-0, white)" /></svg>,
    <svg key="4" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d="M20 7.91667C13.3333 7.91667 7.91667 13.3333 7.91667 20C7.91667 22.8583 8.91667 25.4833 10.5833 27.55L15.9167 22.8833C15.3417 22.0667 15 21.075 15 20C15 17.2417 17.2417 15 20 15C22.7583 15 25 17.2417 25 20C25 21.075 24.6583 22.0667 24.0833 22.8833L29.4167 27.55C31.0833 25.4833 32.0833 22.8583 32.0833 20C32.0833 13.3333 26.6667 7.91667 20 7.91667ZM20 25C18.9167 25 17.9167 24.65 17.1 24.0667L11.7167 28.775C13.8833 30.825 16.7917 32.0833 20 32.0833C23.2083 32.0833 26.1167 30.8167 28.2833 28.775L22.9 24.0667C22.0833 24.65 21.0833 25 20 25ZM20 1.66667C9.875 1.66667 1.66667 9.875 1.66667 20C1.66667 24.8667 3.56667 29.2917 6.66667 32.575V38.3333H33.3333V32.575C36.4333 29.2917 38.3333 24.8667 38.3333 20C38.3333 9.875 30.125 1.66667 20 1.66667ZM20 34.5833C11.9583 34.5833 5.41667 28.0417 5.41667 20C5.41667 11.9583 11.9583 5.41667 20 5.41667C28.0417 5.41667 34.5833 11.9583 34.5833 20C34.5833 28.0417 28.0417 34.5833 20 34.5833Z" fill="var(--fill-0, white)" /></svg>,
    <svg key="5" className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40"><path d="M19.1667 19.1667V37.5H37.5V35.8333H20.8333V20.8333H37.5V19.1667H19.1667ZM37.5 28.3333L28.3333 23.75V26.6667H22.5V30H28.3333V32.9167L37.5 28.3333Z" fill="var(--fill-0, white)" /><path d="M8.33333 10C8.33333 5.33333 12 1.66667 16.6667 1.66667C21.3333 1.66667 25 5.33333 25 10C25 14.6667 21.3333 18.3333 16.6667 18.3333C12 18.3333 8.33333 14.6667 8.33333 10ZM16.6667 19.9167C14.6667 19.9167 12.6667 19.25 11.1667 18.25H11.0833H10C6.33333 18.25 3.33333 21.25 3.33333 24.9167V31.5833H17.5V19.8333C17.25 19.9167 16.9167 19.9167 16.6667 19.9167Z" fill="var(--fill-0, white)" opacity="0.5" /></svg>
  ];

  return (
    <button
      className="content-stretch flex gap-[16px] items-center relative shrink-0 p-2 rounded-lg transition-all duration-300 min-w-[120px] bg-transparent hover:bg-white/5"
      onClick={onClick}
    >
      {/* Icon */}
      <div className={`relative shrink-0 size-[40px] transition-opacity duration-300 ${
        isFocused ? 'opacity-100' : 'opacity-30'
      }`}>
        {getStepIcon()}
      </div>

      {/* Label */}
      <div className={`flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white transition-opacity duration-300 ${
        isFocused ? 'opacity-100' : 'opacity-30'
      }`}>
        <p className="leading-[24px] whitespace-pre">{step.label}</p>
      </div>
    </button>
  );
}

export function SmartWorkflowBar({
  currentStep,
  activePreset = 1,
  onStepSelect,
  scale = 1
}: SmartWorkflowBarProps & { scale?: number }) {
  const [focusedStepIndex, setFocusedStepIndex] = useState(0);
  const [lastNavigationDirection, setLastNavigationDirection] = useState<'left' | 'right' | null>(null);

  // Dynamic workflow steps based on active preset
  const workflowSteps: WorkflowStep[] = activePreset === 1 
    ? [
        { id: "review", label: "Review", category: "Review" },
        { id: "ultrasound", label: "Access", category: "Access" },
        { id: "ccta-planning", label: "Baseline DSA", category: "Planning" },
        { id: "ivus-acquisition", label: "IVUS Acquisition", category: "Treatment" },
        { id: "start", label: "Confirm DSA", category: "Planning" },
        { id: "finalise", label: "Finalise", category: "Treatment" },
      ]
    : [
        { id: "start", label: "Start", category: "Start" },
        { id: "access", label: "Access", category: "Access" },
        { id: "3d-scan", label: "3D Scan", category: "3D Scan" },
        { id: "planning", label: "Planning", category: "Planning" },
        { id: "treatment", label: "Treatment", category: "Treatment" },
      ];

  const totalSteps = workflowSteps.length;

  // Set initial focused step based on current step
  useEffect(() => {
    if (currentStep) {
      const currentStepIndex = workflowSteps.findIndex(
        (step) => step.id === currentStep,
      );
      if (currentStepIndex >= 0) {
        setFocusedStepIndex(currentStepIndex);
      }
    }
  }, [currentStep]);

  const moveLeft = () => {
    setFocusedStepIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    setLastNavigationDirection('left');
    setTimeout(() => setLastNavigationDirection(null), 300);
  };

  const moveRight = () => {
    setFocusedStepIndex((prev) => (prev + 1) % totalSteps);
    setLastNavigationDirection('right');
    setTimeout(() => setLastNavigationDirection(null), 300);
  };

  const handleStepClick = (step: WorkflowStep) => {
    onStepSelect(step);
  };

  const calculateButtonWidth = (step: WorkflowStep) => {
    const baseWidth = 40 + 16 + 8 + 4;
    const avgCharWidth = 18;
    const textWidth = step.label.length * avgCharWidth;
    const minWidth = 120;
    return Math.max(minWidth, baseWidth + textWidth);
  };

  const getButtonContainerWidth = () => {
    const gapWidth = 15;
    const sidePadding = 20;
    const extraBuffer = 50;
    
    const totalButtonWidth = workflowSteps.reduce((total, step) => {
      return total + calculateButtonWidth(step);
    }, 0);
    
    const totalGapWidth = (workflowSteps.length - 1) * gapWidth;
    return totalButtonWidth + totalGapWidth + (sidePadding * 2) + extraBuffer;
  };

  const getTransform = () => {
    const visibleWidth = 900;
    const buttonContainerWidth = getButtonContainerWidth();
    
    if (buttonContainerWidth <= visibleWidth) {
      const centerOffset = (visibleWidth - buttonContainerWidth) / 2;
      return `translateX(${centerOffset}px)`;
    }
    
    const gapWidth = 15;
    const padding = 20;
    
    let focusedStepPosition = padding;
    
    for (let i = 0; i < focusedStepIndex; i++) {
      focusedStepPosition += calculateButtonWidth(workflowSteps[i]) + gapWidth;
    }
    
    focusedStepPosition += calculateButtonWidth(workflowSteps[focusedStepIndex]) / 2;
    
    const desiredTranslateX = (visibleWidth / 2) - focusedStepPosition;
    
    const maxTranslateX = 0;
    const minTranslateX = visibleWidth - buttonContainerWidth;
    
    const translateX = Math.max(minTranslateX, Math.min(maxTranslateX, desiredTranslateX));
    return `translateX(${translateX}px)`;
  };

  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-center px-4 py-3 relative w-full h-fit origin-top-left rounded-lg"
      style={{
        backgroundImage: "linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)",
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${100 / scale}%`,
      }}
    >
      {/* Infinite Dial Container */}
      <div className="relative rounded-bl-[10px] rounded-br-[10px] w-full h-[100px]">
        <div className="flex flex-row items-center justify-center relative w-full h-full">
          <div className="box-border content-stretch flex gap-[25px] items-center justify-center px-[25px] py-0 relative w-full h-full">
            
            {/* Stars Icon */}
            <div className="h-[40px] relative shrink-0 w-[45px]">
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
            <div className="h-[80px] relative shrink-0 w-[950px]">
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

              {/* Carousel background container */}
              <div className="absolute bg-[#060F1F] h-[80px] left-[25px] opacity-90 rounded-[10px] top-0 w-[900px] overflow-hidden">
                <div 
                  className="flex gap-[15px] h-full items-center absolute transition-transform duration-300 ease-out"
                  style={{
                    transform: getTransform(),
                    left: 0,
                    top: 0,
                    width: `${getButtonContainerWidth()}px`,
                    paddingLeft: '20px',
                    paddingRight: '20px'
                  }}
                >
                  {workflowSteps.map((step, stepIndex) => {
                    return (
                      <React.Fragment key={step.id}>
                        {/* Separator line before each step except the first */}
                        {stepIndex > 0 && (
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
                        )}
                        <WorkflowStepButton
                          step={step}
                          stepIndex={stepIndex}
                          isFocused={stepIndex === focusedStepIndex}
                          onClick={() => handleStepClick(step)}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dashed Square */}
            <div className="relative shrink-0 size-[32px] border-2 border-dashed border-white rounded-sm">
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
