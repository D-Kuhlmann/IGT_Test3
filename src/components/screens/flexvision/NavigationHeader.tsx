import { useState, useEffect } from "react";
import svgPaths from "../../../imports/svg-lswmsw7mth";
import { useSettings } from "../../../contexts/SettingsContext";

interface NavigationHeaderProps {
  date: string;
  time: string;
  isWorkflowsVisible?: boolean;
  onShowWorkflows?: () => void;
  currentWorkflowStep?: string;
  focusMode?: boolean;
}

/* ──────────────────────────── Branding ──────────────────────────── */

function PhilipsWordmark2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[77px]" data-name="philips-wordmark-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 15">
        <g id="philips-wordmark-2">
          <path d="M77 0H0V15H77V0Z" fill="var(--fill-0, #E8E8E8)" id="pixelrounder" opacity="0" />
          <path d={svgPaths.p25010500} fill="var(--fill-0, white)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="box-border content-stretch flex flex-col h-[15px] items-center justify-start px-2 py-0 relative shrink-0" data-name="wordmark">
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-2 py-0 relative shrink-0" data-name="solution name">
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-none not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)]">
        <p className="block leading-[28px] whitespace-pre">NextGen</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0" data-name="Left">
      <Wordmark />
      <SolutionName />
    </div>
  );
}

/* ──────────────────────────── Icons ──────────────────────────── */

function AppsIcon() {
  return (
    <svg className="block w-6 h-6" fill="none" viewBox="0 0 48 48" preserveAspectRatio="none">
      <g>
        <path d="M48 0H0V48H48V0Z" fill="var(--fill-0, black)" opacity="0" />
        <path d={svgPaths.pa955b00} fill="var(--fill-0, white)" opacity="0.5" />
        <path d={svgPaths.p30fe3700} fill="var(--fill-0, white)" opacity="0.7" />
        <path d={svgPaths.p3d5f6d80} fill="var(--fill-0, white)" opacity="0.6" />
        <path d={svgPaths.p14c8a700} fill="var(--fill-0, white)" opacity="0.4" />
      </g>
    </svg>
  );
}

function PresetsIcon() {
  return (
    <svg className="block w-6 h-6" fill="none" viewBox="0 0 32 30" preserveAspectRatio="none">
      <g>
        <path d={svgPaths.p3d3a7100} fill="var(--fill-0, white)" fillOpacity="0.15" />
        <path d={svgPaths.p12686900} fill="var(--fill-0, white)" />
        <path d={svgPaths.p14580380} fill="var(--fill-0, white)" opacity="0.5" />
        <path d={svgPaths.pe1d4700} fill="var(--fill-0, white)" opacity="0.6" />
        <path d={svgPaths.p1340eb80} fill="var(--fill-0, white)" opacity="0.7" />
        <path d={svgPaths.p323e7400} fill="var(--fill-0, white)" opacity="0.4" />
        <path d={svgPaths.p3fed3700} stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
        <path d={svgPaths.p3afb6800} fill="var(--fill-0, white)" stroke="var(--stroke-0, black)" />
        <path d="M10 1H9V19H10V1Z" fill="var(--fill-0, white)" fillOpacity="0.2" />
        <path d="M9 9H1V10H9V9Z" fill="var(--fill-0, white)" fillOpacity="0.2" />
      </g>
    </svg>
  );
}

/* ──────────────────────────── Reusable Nav Item (Horizontal) ──────────────────────────── */

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex h-12 items-center gap-2 px-1 leading-none">
      <div className="w-6 h-6 shrink-0 flex items-center justify-center">{icon}</div>
      <span className="text-[16px] leading-none text-[#d6d6d6] whitespace-nowrap">{label}</span>
    </div>
  );
}

/* ──────────────────────────── SmartUI Indicator ──────────────────────────── */

function SmartUIIndicator({ isActive = true, focusMode = false }: { isActive?: boolean; focusMode?: boolean }) {
  const { inputSettings } = useSettings();
  
  // Hide indicator when focus mode is active
  if (focusMode) {
    return null;
  }
  
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      {/* Square background container - approximately 1/4 of available header space */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-12 rounded opacity-30"
        style={{
          background: `linear-gradient(125deg, ${inputSettings.focusBorderColor1} 0%, ${inputSettings.focusBorderColor2} 75%, ${inputSettings.focusBorderColor2} 100%)`
        }}
      />
      
      {/* Main circular indicator with gradient background - positioned above background */}
      <div 
        className="relative w-8 h-8 rounded-full flex items-center justify-center animate-pulse z-10"
        style={{
          background: 'linear-gradient(135deg, #4A90E2 0%, #7B68EE 50%, #00CED1 100%)',
          boxShadow: '0 2px 8px rgba(74, 144, 226, 0.3)',
          animationDuration: '3s'
        }}
      >
        {/* Cross/Plus icon using CSS */}
        <div className="relative w-4 h-4">
          {/* Vertical line */}
          <div 
            className="absolute left-1/2 top-0 w-0.5 h-full bg-white rounded-full transform -translate-x-1/2"
          />
          {/* Horizontal line */}
          <div 
            className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full transform -translate-y-1/2"
          />
        </div>
        
        {/* Subtle glow effect when active */}
        {isActive && (
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'linear-gradient(135deg, #4A90E2 0%, #7B68EE 50%, #00CED1 100%)',
              opacity: 0.4,
              filter: 'blur(2px)'
            }}
          />
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────── Workflows Nav (placeholder) ──────────────────────────── */

function ArrowButton({
  direction,
  onClick,
  isActive = false,
}: {
  direction: "left" | "right" | "down";
  onClick: () => void;
  isActive?: boolean;
}) {
  const getArrowPath = () => {
    switch (direction) {
      case "left":
        return "M15 18L9 12L15 6";
      case "right":
        return "M9 6L15 12L9 18";
      case "down":
        return "M6 9L12 15L18 9";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 flex items-center justify-center rounded transition-colors ${
        isActive ? "bg-cyan-400/20 text-cyan-400" : "text-[#d6d6d6] hover:text-white hover:bg-white/10"
      }`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={getArrowPath()} />
      </svg>
    </button>
  );
}

function SmartWorkflowsNavigation({
  isWorkflowsVisible,
  onShowWorkflows,
  focusMode,
}: {
  isWorkflowsVisible?: boolean;
  onShowWorkflows?: () => void;
  focusMode?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <SmartUIIndicator isActive={true} focusMode={focusMode} />
    </div>
  );
}

/* ──────────────────────────── Right side (Date/Time) ──────────────────────────── */

function Time({ time }: { time: string }) {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0" data-name="Time">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center leading-none not-italic relative shrink-0 text-[#d6d6d6] text-[20px]">
        <p className="block leading-[28px] whitespace-pre">{time}</p>
      </div>
    </div>
  );
}

function RightSide({ date, time }: { date: string; time: string }) {
  return (
    <div className="box-border content-stretch flex gap-5 h-12 items-center justify-end p-0 relative shrink-0" data-name="Right side">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-none not-italic relative shrink-0 text-[#d6d6d6] text-[20px]">
        <p className="block leading-[28px] whitespace-pre">{date}</p>
      </div>
      <Time time={time} />
    </div>
  );
}

/* ──────────────────────────── Header ──────────────────────────── */

export function NavigationHeader({
  date,
  time,
  isWorkflowsVisible,
  onShowWorkflows,
  currentWorkflowStep,
  focusMode,
}: NavigationHeaderProps) {
  return (
    <div
      className="box-border content-stretch flex items-start justify-center p-0 relative shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="Template"
    >
      <div
        className="basis-0 box-border content-stretch flex gap-2.5 grow h-14 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
        data-name="Top row"
      >
        {/* Background */}
        <div className="bg-[#383838] h-full shrink-0 w-full absolute inset-0" data-name="Background" />

        {/* Content */}
        <div className="flex items-center justify-between w-full h-full px-6 relative">
          {/* Left: brand + primary nav */}
          <div className="flex items-center gap-12">
            <Left />
            <NavItem icon={<AppsIcon />} label="Applications" />
            <NavItem icon={<PresetsIcon />} label="Presets" />
          </div>

          {/* Center: workflows - empty space for floating indicator */}
          <div className="flex-1 flex justify-center relative">
            <SmartWorkflowsNavigation isWorkflowsVisible={isWorkflowsVisible} onShowWorkflows={onShowWorkflows} focusMode={focusMode} />
          </div>

          {/* Right: date/time */}
          <div className="flex items-center">
            <RightSide date={date} time={time} />
          </div>
        </div>
      </div>
    </div>
  );
}
