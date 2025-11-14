import React, { useState } from "react";
import {
  imgFrame1,
  imgFrame2,
  imgIcoRef1,
  imgVesselIcon,
  imgPath as imgPathNavigation,
} from "../../../imports/svg-w95w9";

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
  imgIconColor,
} from "../../../imports/svg-x6sku";

/* ----------------------------- Tabs ----------------------------- */

function TabItemComponent({
  label,
  isActive,
  hasIcon,
  isDisabled,
  onClick,
  tabId,
}: {
  label: string;
  hasIcon?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  tabId: string;
  onClick: (tabId: string) => void;
}) {
  const handleClick = () => {
    if (!isDisabled) onClick(tabId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      aria-pressed={isActive}
      aria-label={label || (hasIcon ? "Tab with icon" : "Tab")}
      className={[
        "bg-transparent box-border content-stretch flex flex-col h-[54px] items-center justify-center px-3 py-0 relative shrink-0",
        isActive ? "w-[157px]" : "w-[92px]",
        isDisabled
          ? "opacity-40 cursor-not-allowed"
          : "transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset",
      ].join(" ")}
    >
      <div className="content-stretch flex gap-2 items-center justify-center relative shrink-0">
        {hasIcon && (
          <div className="relative shrink-0 size-8">
            <img className="block max-w-none size-full" src={imgIcoRef1} alt="Tab icon" />
          </div>
        )}
        {isActive && (
          <div className="font-['CentraleSans:Book',_sans-serif] leading-none not-italic relative shrink-0 text-[#d6d6d6] text-[21px] text-nowrap">
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
      <div className="absolute bottom-0 left-0 right-0 h-0.5">
        {isActive ? (
          <img className="block max-w-none size-full" src={imgFrame1} alt="Active tab indicator" />
        ) : (
          <img className="block max-w-none size-full" src={imgFrame2} alt="Tab indicator" />
        )}
      </div>
    </button>
  );
}

/* ------------------------ Procedure Picker ---------------------- */

function ProcedureInfo({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Select procedure type"
      className="box-border content-stretch flex gap-5 items-center justify-start pl-0 pr-2.5 py-0 relative shrink-0 transition-colors hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded-md"
    >
      <div className="box-border content-stretch flex gap-2.5 h-12 items-center justify-start px-0 py-5 relative rounded-[10px] shrink-0">
        <div className="relative shrink-0 size-[34px]">
          <img className="block max-w-none size-full" src={imgVesselIcon} alt="Vessel procedure icon" />
        </div>
      </div>
      <div className="font-['CentraleSans:Bold',_sans-serif] leading-none not-italic relative shrink-0 text-[#d7d7d7] text-[20px] text-nowrap">
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

/* -------------------- Uniform Automation Menu ------------------- */

function AutomationMenu() {
  const [state, setState] = useState({
    voice: false,
    smartmask: true,
    collimation: false,
    patientDetection: false,
  });

  const toggle = (k: keyof typeof state) => {
    console.log('Toggling automation:', k);
    setState((s) => {
      const newState = { ...s, [k]: !s[k] };
      console.log('New state:', newState);
      return newState;
    });
  };

  // Uniform button footprint so everything aligns perfectly
  const IconButton = ({
    active,
    onClick,
    children,
    ariaLabel,
  }: {
    active?: boolean;
    onClick: () => void;
    children: React.ReactNode;
    ariaLabel: string;
  }) => (
    <button
      type="button"
      aria-pressed={!!active}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        "h-9 w-10 flex items-center justify-center shrink-0 rounded transition-all relative z-10",
        "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2b86b2]",
        active ? "opacity-100" : "opacity-60 hover:opacity-80",
      ].join(" ")}
      style={active ? {
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)"
      } : undefined}
    >
      {/* 24px stage for absolute icon layers */}
      <div className="relative h-6 w-6">{children}</div>
    </button>
  );

  return (
    <div
      className="relative h-full w-full rounded-tl-[4px] rounded-bl-[4px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.85) 50%, rgba(51,65,85,0.75) 100%)",
      }}
    >
      {/* Row centers items so icons line up */}
      <div className="flex h-full w-full items-center gap-[11px] px-2 py-[7px]">
        {/* Cyan left stripe */}
        <div className="h-9 w-1 bg-[#41c9fe] rounded-[2px]" />

        {/* Voice */}
        <IconButton active={state.voice} onClick={() => toggle("voice")} ariaLabel="Toggle voice automation">
          {/* AutoVoiceOff path */}
          <div className="absolute inset-[12%_4%_4%_4%]">
            <img className="block size-full max-w-none" src={imgPath} alt="" />
          </div>
        </IconButton>

        {/* SmartMask */}
        <IconButton
          active={state.smartmask}
          onClick={() => toggle("smartmask")}
          ariaLabel="Toggle smart mask automation"
        >
          {/* 'A' badge */}
          <div className="absolute inset-[3%_5%_58%_67%]">
            <img className="block size-full max-w-none" src={imgA} alt="" />
          </div>
          {/* SmartMask layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-[5.26%_1.56%_5.26%_8.96%]">
              <img className="block size-full max-w-none" src={imgVector} alt="" />
            </div>
            <div className="absolute bottom-[3.69%] left-[7.39%] right-0 top-[3.7%]">
              <img className="block size-full max-w-none" src={imgVector1} alt="" />
            </div>
            <div className="absolute inset-[34.34%_68.13%_34.35%_1.56%]">
              <img className="block size-full max-w-none" src={imgVector2} alt="" />
            </div>
            <div className="absolute bottom-[32.79%] left-0 right-[29.84%] top-[28.69%]">
              <img className="block size-full max-w-none" src={imgVector3} alt="" />
            </div>
            <div className="absolute inset-[37.77%_21.88%_34.69%_42.56%]">
              <img className="block size-full max-w-none" src={imgVector4} alt="" />
            </div>
            <div className="absolute inset-[67.42%_49.59%_28.69%_34.86%]">
              <img className="block size-full max-w-none" src={imgVector5} alt="" />
            </div>
            <div className="absolute inset-[35.53%_33.73%_50.02%_38.27%]">
              <img className="block size-full max-w-none" src={imgVector6} alt="" />
            </div>
            <div className="absolute inset-[38.17%_43.24%_52.67%_47.69%]">
              <img className="block size-full max-w-none" src={imgVector7} alt="" />
            </div>
            <div className="absolute inset-[37.65%_42.63%_52.15%_47.17%]">
              <img className="block size-full max-w-none" src={imgVector8} alt="" />
            </div>
            <div className="absolute inset-[41.07%_46.05%_55.56%_50.59%]">
              <img className="block size-full max-w-none" src={imgVector9} alt="" />
            </div>
          </div>
        </IconButton>

        {/* Collimation */}
        <IconButton
          active={state.collimation}
          onClick={() => toggle("collimation")}
          ariaLabel="Toggle collimation automation"
        >
          {/* Square */}
          <div className="absolute inset-[6%]">
            <img className="block size-full max-w-none" src={imgPath1} alt="" />
          </div>
          {/* 'A' badge */}
          <div className="absolute inset-[3%_4%_58%_68%]">
            <img className="block size-full max-w-none" src={imgA1} alt="" />
          </div>
        </IconButton>

        {/* Patient detection */}
        <IconButton
          active={state.patientDetection}
          onClick={() => toggle("patientDetection")}
          ariaLabel="Toggle patient detection automation"
        >
          {/* main vessel icon */}
          <div className="absolute inset-[4%_1%_1%_4%]">
            <img
              className="block size-full max-w-none"
              src={img1Icons24VesselNavigatorPlanning}
              alt=""
            />
          </div>
          {/* 'A' badge */}
          <div className="absolute inset-[3%_10%_58%_61%]">
            <img className="block size-full max-w-none" src={imgA1} alt="" />
          </div>
          {/* small status tick, pinned so it doesn't shift layout */}
          <div className="absolute right-[2px] top-[5px] h-2.5 w-2.5 rotate-90">
            <img className="block size-full max-w-none" src={imgIconColor} alt="" />
          </div>
        </IconButton>
      </div>

      {/* subtle border/glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-1px] rounded-tl-[5px] rounded-bl-[5px] border border-solid border-white shadow-[0_0_10px_5px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
}

/* ------------------------- Top Navigation ----------------------- */

export function TopNavigation() {
  const [activeTabId, setActiveTabId] = useState("live");

  const handleTabClick = (tabId: string) => setActiveTabId(tabId);
  const handleProcedureClick = () => console.log("Procedure selection clicked");

  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      {/* Tabs area */}
      <div className="content-stretch flex items-start justify-start relative shrink-0 w-[444px]">
        <div
          aria-hidden="true"
          className="absolute border-[#454545] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
        />
        <TabItemComponent
          label="Live"
          isActive={activeTabId === "live"}
          onClick={handleTabClick}
          tabId="live"
        />
        <TabItemComponent
          label=""
          hasIcon
          isActive={activeTabId === "tab2"}
          onClick={handleTabClick}
          tabId="tab2"
        />
        <TabItemComponent
          label=""
          hasIcon
          isDisabled
          isActive={activeTabId === "tab3"}
          onClick={handleTabClick}
          tabId="tab3"
        />
        <TabItemComponent
          label=""
          hasIcon
          isDisabled
          isActive={activeTabId === "tab4"}
          onClick={handleTabClick}
          tabId="tab4"
        />
      </div>

      {/* Procedure picker */}
      <ProcedureInfo onClick={handleProcedureClick} />

      {/* Automation menu with perfectly aligned buttons/icons */}
      <div className="h-[52px] w-56">
        <AutomationMenu />
      </div>
    </div>
  );
}
