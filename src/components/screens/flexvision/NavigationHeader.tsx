import { useState, useEffect } from "react";
import svgPaths from "../../../imports/svg-lswmsw7mth";
import { useSettings } from "../../../contexts/SettingsContext";
import { useDateTime } from "../../../hooks/useDateTime";

interface NavigationHeaderProps {
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

function SmartUIIndicator({ isActive = true, focusMode = false, isWorkflowsVisible = false }: { isActive?: boolean; focusMode?: boolean; isWorkflowsVisible?: boolean }) {
  const { inputSettings } = useSettings();
  
  // Hide indicator when focus mode is active
  if (focusMode) {
    return null;
  }
  
  return (
    <div className="relative z-20">
      {/* Main circular indicator with conditional background */}
      <div 
        className={`relative w-10 h-10 rounded-full flex items-center justify-center z-10 border border-white ${
          isWorkflowsVisible ? 'animate-pulse' : ''
        }`}
        style={{
          background: isWorkflowsVisible 
            ? 'linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)' 
            : '#6B7280',
          boxShadow: isWorkflowsVisible 
            ? '0 2px 8px rgba(39, 49, 111, 0.3)' 
            : '0 2px 8px rgba(107, 114, 128, 0.3)',
          animationDuration: '3s'
        }}
      >
        {/* Stars icon */}
        <div className="relative w-8 h-8">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <path d="M-7.51472e-08 16.5565C-7.51472e-08 16.5565 7.12039 17.3817 8.37942 17.7287C9.20465 17.9466 10.0299 18.5096 10.4193 19.7686C10.7663 21.0276 11.5916 28.148 11.5916 28.148L12.1121 28.148C12.1121 28.148 12.9374 21.0276 13.2844 19.7686C13.5306 18.7618 14.3175 17.9749 15.3243 17.7287C16.5833 17.3817 23.7037 16.5565 23.7037 16.5565L23.7037 16.0359C23.7037 16.0359 16.5833 15.2107 15.3243 14.8636C14.3255 14.6013 13.5467 13.8205 13.2844 12.8238C12.9374 11.5647 12.1121 4.44434 12.1121 4.44434L11.5916 4.44434C11.5916 4.44434 10.7663 11.5647 10.4193 12.8238C10.1731 13.8306 9.38625 14.6175 8.37942 14.8636C7.12039 15.2107 -7.19175e-08 16.0359 -7.19175e-08 16.0359L-7.51472e-08 16.5565Z" fill="white"/>
            <path d="M16.2964 6.81307C16.2964 6.81307 19.8566 7.27727 20.4861 7.47248C20.8987 7.59505 21.3113 7.9117 21.506 8.61991C21.6796 9.32811 22.0922 13.3333 22.0922 13.3333L22.3525 13.3333C22.3525 13.3333 22.7651 9.32811 22.9386 8.61991C23.0617 8.05357 23.4551 7.61094 23.9585 7.47248C24.588 7.27727 28.1482 6.81307 28.1482 6.81307L28.1482 6.52026C28.1482 6.52026 24.588 6.05607 23.9585 5.86086C23.4592 5.71331 23.0697 5.27409 22.9386 4.71343C22.7651 4.00522 22.3525 3.75736e-08 22.3525 3.75736e-08L22.0922 3.59588e-08C22.0922 3.59588e-08 21.6796 4.00522 21.506 4.71343C21.383 5.27976 20.9895 5.72239 20.4861 5.86086C19.8566 6.05607 16.2964 6.52026 16.2964 6.52026L16.2964 6.81307Z" fill="white"/>
          </svg>
        </div>
        
        {/* Subtle glow effect when active and workflows visible */}
        {isActive && isWorkflowsVisible && (
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)',
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
      <SmartUIIndicator isActive={true} focusMode={focusMode} isWorkflowsVisible={isWorkflowsVisible} />
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
  isWorkflowsVisible,
  onShowWorkflows,
  currentWorkflowStep,
  focusMode,
}: NavigationHeaderProps) {
  const { currentDate, currentTime } = useDateTime();
  return (
    <div
      className="box-border content-stretch flex items-start justify-center p-0 relative shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-full z-50"
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

          {/* Center: workflows - positioned absolutely to ensure perfect centering */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <SmartWorkflowsNavigation isWorkflowsVisible={isWorkflowsVisible} onShowWorkflows={onShowWorkflows} focusMode={focusMode} />
          </div>

          {/* Right: date/time */}
          <div className="flex items-center">
            <RightSide date={currentDate} time={currentTime} />
          </div>
        </div>
      </div>
    </div>
  );
}
