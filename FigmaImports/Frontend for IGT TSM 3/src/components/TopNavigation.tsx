import React, { useState } from "react";
import { 
  imgFrame1, 
  imgFrame2, 
  imgIcoRef1, 
  imgVesselIcon, 
  imgPath as imgPathNavigation, 
  imgIconColor as imgIconColorNavigation 
} from "../imports/svg-w95w9";
import { 
  imgPath, 
  imgVector, 
  imgVector1, 
  imgVector2, 
  imgVector3, 
  imgVector4, 
  imgVector5, 
  imgVector6, 
  imgVector7, 
  imgVector8, 
  imgVector9, 
  imgA, 
  imgPath1, 
  imgA1, 
  img1Icons24VesselNavigatorPlanning, 
  imgIconColor 
} from "../imports/svg-x6sku";

function TabItemComponent({ 
  label, 
  isActive, 
  hasIcon, 
  isDisabled, 
  onClick,
  tabId 
}: {
  id: string;
  label: string;
  hasIcon?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  tabId: string;
  onClick: (tabId: string) => void;
}) {
  const handleClick = () => {
    if (!isDisabled) {
      onClick(tabId);
    }
  };

  return (
    <button 
      className={`bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[54px] items-center justify-center px-3 py-0 relative shrink-0 ${isActive ? 'w-[157px]' : 'w-[92px]'} ${isDisabled ? 'opacity-[0.32] cursor-not-allowed' : 'transition-colors hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset'}`}
      onClick={handleClick}
      disabled={isDisabled}
      aria-pressed={isActive}
      aria-label={label || (hasIcon ? "Tab with icon" : "Tab")}
      type="button"
    >
      <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0">
        {hasIcon && (
          <div className="relative shrink-0 size-8">
            <img className="block max-w-none size-full" src={imgIcoRef1} alt="Tab icon" />
          </div>
        )}
        {isActive && (
          <div className={`font-['CentraleSans:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[21px] text-nowrap`}>
            <p className="leading-[22px] whitespace-pre">{label}</p>
          </div>
        )}
        {isDisabled && (
          <div className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#787878] text-[21px] text-nowrap whitespace-pre">
            <p className="mb-0">&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-0.5 left-0 right-0">
        {isActive ? (
          <img className="block max-w-none size-full" src={imgFrame1} alt="Active tab indicator" />
        ) : (
          <img className="block max-w-none size-full" src={imgFrame2} alt="Tab indicator" />
        )}
      </div>
    </button>
  );
}

function ProcedureInfo({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="box-border content-stretch flex gap-5 items-center justify-start pl-0 pr-2.5 py-0 relative shrink-0 transition-colors hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded-md"
      onClick={onClick}
      aria-label="Select procedure type"
      type="button"
    >
      <div className="box-border content-stretch flex gap-2.5 h-12 items-center justify-start px-0 py-5 relative rounded-[10px] shrink-0">
        <div className="relative shrink-0 size-[34px]">
          <img className="block max-w-none size-full" src={imgVesselIcon} alt="Vessel procedure icon" />
        </div>
      </div>
      <div className="font-['CentraleSans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#d7d7d7] text-[20px] text-nowrap">
        <p className="leading-[36px] whitespace-pre">
          <span>PTA </span>
          <span className="font-['CentraleSans:Book',_sans-serif] not-italic">Procedure</span>
        </p>
      </div>
      <div className="h-2.5 relative shrink-0 w-[16.667px]">
        <img className="block max-w-none size-full" src={imgPathNavigation} alt="Dropdown arrow" />
      </div>
    </button>
  );
}

function Group189() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#41c9fe] h-9 ml-0 mt-0 rounded-[2px] w-1" />
    </div>
  );
}

function AutoVoiceOff() {
  return (
    <div className="absolute aspect-[24/24] bottom-[5.56%] left-1/2 overflow-clip top-[5.56%] translate-x-[-50%]" data-name="AutoVoiceOff">
      <div className="absolute inset-[11.85%_4.17%_4.17%_4.17%]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath} />
      </div>
    </div>
  );
}

function IconAutomationVoice({ onClick, isActive }: { onClick: () => void; isActive?: boolean }) {
  return (
    <button 
      className={`h-9 ${isActive ? 'opacity-100' : 'opacity-60'} relative shrink-0 w-10 transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded`} 
      data-name="icon_automation_voice"
      onClick={onClick}
      aria-label="Toggle voice automation"
      aria-pressed={isActive}
      type="button"
    >
      <AutoVoiceOff />
    </button>
  );
}

function SmartMask1() {
  return (
    <div className="absolute aspect-[30.8988/30.8988] left-0 overflow-clip right-1/4 translate-y-[-50%]" data-name="SmartMask 1" style={{ top: "calc(50% + 1px)" }}>
      <div className="absolute inset-[5.26%_1.56%_5.26%_8.96%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute bottom-[3.69%] left-[7.39%] right-0 top-[3.7%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector1} />
      </div>
      <div className="absolute inset-[34.34%_68.13%_34.35%_1.56%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector2} />
      </div>
      <div className="absolute bottom-[32.79%] left-0 right-[29.84%] top-[28.69%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector3} />
      </div>
      <div className="absolute inset-[37.77%_21.88%_34.69%_42.56%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector4} />
      </div>
      <div className="absolute inset-[67.42%_49.59%_28.69%_34.86%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector5} />
      </div>
      <div className="absolute inset-[35.53%_33.73%_50.02%_38.27%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector6} />
      </div>
      <div className="absolute inset-[38.17%_43.24%_52.67%_47.69%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector7} />
      </div>
      <div className="absolute inset-[37.65%_42.63%_52.15%_47.17%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector8} />
      </div>
      <div className="absolute inset-[41.07%_46.05%_55.56%_50.59%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector9} />
      </div>
    </div>
  );
}

function IconAutomationSmartmask({ onClick, isActive }: { onClick: () => void; isActive?: boolean }) {
  return (
    <button 
      className={`h-9 relative shrink-0 w-10 transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded ${isActive ? 'opacity-100' : 'opacity-100'}`} 
      data-name="icon_automation_smartmask"
      onClick={onClick}
      aria-label="Toggle smart mask automation"
      aria-pressed={isActive}
      type="button"
    >
      <div className="absolute inset-[2.78%_4.53%_57.94%_67.07%]" data-name="A">
        <img className="block max-w-none size-full" src={imgA} alt="Automation indicator" />
      </div>
      <SmartMask1 />
    </button>
  );
}

function CropSquare() {
  return (
    <div className="absolute aspect-[30.8988/30.8988] bottom-[5.56%] overflow-clip top-[11.11%] translate-x-[-50%]" data-name="CropSquare" style={{ left: "calc(50% - 5px)" }}>
      <div className="absolute inset-[4.167%]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath1} />
      </div>
    </div>
  );
}

function IconAutomationCollimation({ onClick, isActive }: { onClick: () => void; isActive?: boolean }) {
  return (
    <button 
      className={`h-9 ${isActive ? 'opacity-100' : 'opacity-60'} relative shrink-0 w-10 transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded`} 
      data-name="icon_automation_collimation"
      onClick={onClick}
      aria-label="Toggle collimation automation"
      aria-pressed={isActive}
      type="button"
    >
      <CropSquare />
      <div className="absolute inset-[2.78%_4.1%_57.94%_67.5%]" data-name="A">
        <img className="block max-w-none size-full" src={imgA1} alt="Automation indicator" />
      </div>
    </button>
  );
}

function Component1Icons24VesselNavigatorPlanning() {
  return (
    <div className="absolute inset-[4.17%_0.72%_0.72%_4.17%]" data-name="1.-Icons/24/Vessel-Navigator-Planning">
      <img className="block max-w-none size-full" src={img1Icons24VesselNavigatorPlanning} />
    </div>
  );
}

function DDlsTsmTestFindings() {
  return (
    <div className="absolute contents inset-[4.17%_0.72%_0.72%_4.17%]" data-name="dDLS-TSM-Test-findings">
      <Component1Icons24VesselNavigatorPlanning />
    </div>
  );
}

function VesselNavigatorPlanning1() {
  return (
    <div className="absolute bottom-[7.17%] left-0 overflow-clip right-[21.14%] top-[5.21%]" data-name="Vessel Navigator Planning 1">
      <DDlsTsmTestFindings />
    </div>
  );
}

function IconAutomationPatientdetection() {
  return (
    <div className="[grid-area:1_/_1] h-9 ml-0 mt-0 opacity-60 relative w-10" data-name="icon_automation_patientdetection">
      <VesselNavigatorPlanning1 />
      <div className="absolute inset-[2.78%_10.23%_57.94%_61.37%]" data-name="A">
        <img className="block max-w-none size-full" src={imgA1} />
      </div>
    </div>
  );
}

function Group283({ onClick, isActive }: { onClick: () => void; isActive?: boolean }) {
  return (
    <button 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded"
      onClick={onClick}
      aria-label="Toggle patient detection automation"
      aria-pressed={isActive}
      type="button"
    >
      <div className="[grid-area:1_/_1] flex h-2.5 items-center justify-center ml-[39.547px] mt-[5px] relative w-[2.24px]">
        <div className="flex-none h-[2.24px] rotate-[90deg] scale-y-[-100%] w-2.5">
          <div className="relative size-full" data-name="Icon Color">
            <img className="block max-w-none size-full" src={imgIconColor} alt="Status indicator" />
          </div>
        </div>
      </div>
      <IconAutomationPatientdetection />
    </button>
  );
}

function AutomationPanel() {
  const [automationStates, setAutomationStates] = useState({
    voice: false,
    smartmask: true, // Default active based on design
    collimation: false,
    patientDetection: false
  });

  const toggleAutomation = (type: keyof typeof automationStates) => {
    setAutomationStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="backdrop-blur-sm backdrop-filter relative rounded-bl-[4px] rounded-tl-[4px] size-full" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.85) 50%, rgba(51,65,85,0.75) 100%)' }} data-name="tsm-Slidepanel-Automation-Grouping">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[11px] items-start justify-start overflow-clip px-2 py-[7px] relative size-full">
          <Group189 />
          <IconAutomationVoice 
            onClick={() => toggleAutomation('voice')}
            isActive={automationStates.voice}
          />
          <IconAutomationSmartmask 
            onClick={() => toggleAutomation('smartmask')}
            isActive={automationStates.smartmask}
          />
          <IconAutomationCollimation 
            onClick={() => toggleAutomation('collimation')}
            isActive={automationStates.collimation}
          />
          <Group283 
            onClick={() => toggleAutomation('patientDetection')}
            isActive={automationStates.patientDetection}
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-bl-[5px] rounded-tl-[5px] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

export function TopNavigation() {
  const [activeTabId, setActiveTabId] = useState("live");

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const handleProcedureClick = () => {
    console.log("Procedure selection clicked");
  };

  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <div className="content-stretch flex items-start justify-start relative shrink-0 w-[444px]">
        <div aria-hidden="true" className="absolute border-[#454545] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <TabItemComponent 
          id="live"
          label="Live" 
          isActive={activeTabId === "live"} 
          onClick={handleTabClick}
          tabId="live"
        />
        <TabItemComponent 
          id="tab2"
          label="" 
          hasIcon={true} 
          isActive={activeTabId === "tab2"} 
          onClick={handleTabClick}
          tabId="tab2"
        />
        <TabItemComponent 
          id="tab3"
          label="" 
          hasIcon={true} 
          isDisabled={true} 
          isActive={activeTabId === "tab3"}
          onClick={handleTabClick}
          tabId="tab3"
        />
        <TabItemComponent 
          id="tab4"
          label="" 
          hasIcon={true} 
          isDisabled={true} 
          isActive={activeTabId === "tab4"}
          onClick={handleTabClick}
          tabId="tab4"
        />
      </div>
      <ProcedureInfo onClick={handleProcedureClick} />
      <div className="h-[52px] w-56">
        <AutomationPanel />
      </div>
    </div>
  );
}