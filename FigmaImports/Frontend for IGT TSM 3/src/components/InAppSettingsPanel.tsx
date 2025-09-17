import React, { useState } from "react";
import { imgArrow, imgMovieFrameRate, imgDlsLock32 } from "../imports/svg-p2eu4";

function Arrow() {
  return (
    <div className="relative size-6" data-name="Arrow">
      <img className="block max-w-none size-full" src={imgArrow} alt="Arrow icon" />
    </div>
  );
}

function MovieFrameRate() {
  return (
    <div className="relative shrink-0 size-6" data-name="MovieFrameRate">
      <img className="block max-w-none size-full" src={imgMovieFrameRate} alt="Frame rate icon" />
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0 size-6">
      <MovieFrameRate />
    </div>
  );
}

function Lock({ 
  isActive, 
  onClick,
  buttonId 
}: { 
  isActive?: boolean; 
  onClick: (id: string) => void;
  buttonId: string;
}) {
  const handleClick = () => {
    onClick(buttonId);
  };

  return (
    <button 
      className={`h-16 relative rounded-[4px] shrink-0 w-[66px] transition-all hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset ${isActive ? 'bg-[rgba(255,255,255,0.1)]' : ''}`} 
      data-name="lock"
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label="Frame rate settings"
      type="button"
    >
      <div className="box-border content-stretch flex gap-2 h-16 items-center justify-center overflow-clip pl-[11px] pr-[23px] py-[19px] relative w-[66px]">
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
          <div className="flex-none rotate-[90deg]">
            <Arrow />
          </div>
        </div>
        <Frame187 />
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px] ${isActive ? 'border-[#2b86b2]' : 'border-[#666565]'}`} />
    </button>
  );
}

function Arrow1() {
  return (
    <div className="relative size-6" data-name="Arrow">
      <img className="block max-w-none size-full" src={imgArrow} alt="Arrow icon" />
    </div>
  );
}

function DlsLock32() {
  return (
    <div className="h-6 relative shrink-0 w-[17px]" data-name="DLS_Lock_32">
      <img className="block max-w-none size-full" src={imgDlsLock32} alt="Lock icon" />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex gap-1 h-6 items-center justify-center relative shrink-0 w-[18px]">
      <DlsLock32 />
    </div>
  );
}

function Lock1({ 
  isActive, 
  onClick,
  buttonId 
}: { 
  isActive?: boolean; 
  onClick: (id: string) => void;
  buttonId: string;
}) {
  const handleClick = () => {
    onClick(buttonId);
  };

  return (
    <button 
      className={`h-16 relative rounded-[4px] shrink-0 w-[66px] transition-all hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset ${isActive ? 'bg-[rgba(255,255,255,0.1)]' : ''}`} 
      data-name="lock"
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label="Lock settings"
      type="button"
    >
      <div className="box-border content-stretch flex gap-2 h-16 items-center justify-center overflow-clip pl-[11px] pr-[23px] py-[19px] relative w-[66px]">
        <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[24px]">
          <div className="flex-none rotate-[90deg]">
            <Arrow1 />
          </div>
        </div>
        <Frame188 />
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px] ${isActive ? 'border-[#2b86b2]' : 'border-[#666565]'}`} />
    </button>
  );
}

export function InAppSettingsPanel() {
  const [settingsStates, setSettingsStates] = useState({
    frameRate: false,
    lock: false
  });

  const handleButtonClick = (buttonId: string) => {
    if (buttonId === "frameRate") {
      setSettingsStates(prev => ({
        ...prev,
        frameRate: !prev.frameRate
      }));
    } else if (buttonId === "lock") {
      setSettingsStates(prev => ({
        ...prev,
        lock: !prev.lock
      }));
    }
  };

  return (
    <div className="bg-neutral-900 relative rounded-[8px] size-full" data-name="inApp-SettingsPanel">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start px-2 py-3 relative size-full">
          <Lock 
            isActive={settingsStates.frameRate}
            onClick={handleButtonClick}
            buttonId="frameRate"
          />
          <Lock1 
            isActive={settingsStates.lock}
            onClick={handleButtonClick}
            buttonId="lock"
          />
        </div>
      </div>
    </div>
  );
}