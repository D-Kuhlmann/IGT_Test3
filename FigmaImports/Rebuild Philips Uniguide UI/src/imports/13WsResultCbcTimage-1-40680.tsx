import svgPaths from "./svg-9lric70uzt";
import imgImage1 from "figma:asset/8956948b936f5dbefce578d2e6f1848a3bf1dab1.png";
import imgImage2 from "figma:asset/b60aa4a747f3edd4a4dae88b07780114541e5021.png";
import imgImage3 from "figma:asset/101a37e5142b3f03e5e2e504c9c6e0d0b3231d9e.png";
import imgFv01 from "figma:asset/b0de333f77eff381764f44d26b3ba15ce1c2f2c4.png";

function Collapse() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Collapse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Collapse">
          <path d={svgPaths.p833cb00} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ActionIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Action Icons">
      <Collapse />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center justify-end px-[16px] py-[12px] relative w-full">
          <ActionIcons />
        </div>
      </div>
    </div>
  );
}

function IconTaskSeries24() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon / TaskSeries_24">
        <path d={svgPaths.p1d1fd600} fill="var(--fill-0, #439AC1)" id="path" />
      </g>
    </svg>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Left">
      <IconTaskSeries24 />
    </div>
  );
}

function IconText() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Text">
      <IconLeft />
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">Series</p>
    </div>
  );
}

function Task1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[40px] relative shrink-0 w-full" data-name="Task 1">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <IconText />
          <div className="absolute bg-[#439ac1] bottom-0 left-0 top-0 w-[3px]" data-name="Selection indicator" />
        </div>
      </div>
    </div>
  );
}

function IconTaskPlanning24() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon / TaskPlanning_24">
        <path d={svgPaths.p31398880} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" id="path" />
      </g>
    </svg>
  );
}

function IconLeft1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Left">
      <IconTaskPlanning24 />
    </div>
  );
}

function IconText1() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Text">
      <IconLeft1 />
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">Plan</p>
    </div>
  );
}

function Task2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Task 2">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <IconText1 />
        </div>
      </div>
    </div>
  );
}

function IconTaskLive24() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon / TaskLive_24">
        <path d={svgPaths.p263be600} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" id="path" />
      </g>
    </svg>
  );
}

function IconLeft2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Left">
      <IconTaskLive24 />
    </div>
  );
}

function IconText2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Text">
      <IconLeft2 />
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">Live</p>
    </div>
  );
}

function Task3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Task 3">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-0 relative w-full">
          <IconText2 />
        </div>
      </div>
    </div>
  );
}

function TaskOverview() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Task overview">
      <Task1 />
      <Task2 />
      <Task3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Select series</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Icons16Carm() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / 16 / Carm">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons / 16 / Carm">
          <path d={svgPaths.p1c9c7c80} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIgt() {
  return (
    <div className="bg-[#1474a4] relative rounded-[2px] shrink-0 w-full" data-name="🟢 Button (IGT)">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <Icons16Carm />
          <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Acquire CBCT...</p>
        </div>
      </div>
    </div>
  );
}

function DlsCtScanner48() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DLS_CTScanner_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DLS_CTScanner_48">
          <path d={svgPaths.p2fbafa00} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIgt1() {
  return (
    <div className="bg-[#1474a4] relative rounded-[2px] shrink-0 w-full" data-name="🟢 Button (IGT)">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <DlsCtScanner48 />
          <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Acquire CT...</p>
        </div>
      </div>
    </div>
  );
}

function FolderOpen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="FolderOpen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="FolderOpen">
          <path d={svgPaths.p1dfbc040} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIgt2() {
  return (
    <div className="bg-[rgba(89,89,89,0.55)] relative rounded-[2px] shrink-0 w-full" data-name="🟢 Button (IGT)">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <FolderOpen />
          <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap whitespace-pre">Open series</p>
        </div>
      </div>
    </div>
  );
}

function StepsNestedComponentsSeriesMouseSmartNav() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[292px]" data-name="Steps / Nested components / Series - Mouse (SmartNav)">
      <ButtonIgt />
      <ButtonIgt1 />
      <ButtonIgt2 />
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#454545] ml-0 mt-0 rounded-[2px] size-[16px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['CentraleSans:Bold',_sans-serif] h-[15px] justify-center ml-[8px] mt-[8.5px] not-italic relative text-[14px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[6px]">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function Dls3DCubeOutline24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="DLS_3DCubeOutline_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_3DCubeOutline_24">
          <path d={svgPaths.p1fba5900} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Top">
      <Group18 />
      <Dls3DCubeOutline24 />
      <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">5001</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Top />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#d6d6d6] text-[12px] w-[125px]">
        <p className="leading-[18px] whitespace-pre-wrap">{`1 Jan 2026   10:12:34`}</p>
      </div>
    </div>
  );
}

function Clear() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31630)" id="Clear" opacity="0.8">
          <path d={svgPaths.p8b07780} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
        <defs>
          <clipPath id="clip0_1_31630">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StepsNestedComponentsSeriesIndicatorMouse() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[292px]" data-name="Steps / Nested components / Series indicator - Mouse">
      <Content />
      <Clear />
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#454545] ml-0 mt-0 rounded-[2px] size-[16px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['CentraleSans:Bold',_sans-serif] h-[15px] justify-center ml-[8px] mt-[8.5px] not-italic relative text-[14px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[6px]">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function Dls3DCubeOutline25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="DLS_3DCubeOutline_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_3DCubeOutline_24">
          <path d={svgPaths.p1fba5900} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Top">
      <Group19 />
      <Dls3DCubeOutline25 />
      <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="leading-[22px]">5002</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Top1 />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic opacity-80 relative shrink-0 text-[#d6d6d6] text-[12px] w-[125px]">
        <p className="leading-[18px] whitespace-pre-wrap">{`1 Jan 2026   10:15:12`}</p>
      </div>
    </div>
  );
}

function Clear1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_31630)" id="Clear" opacity="0.8">
          <path d={svgPaths.p8b07780} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
        <defs>
          <clipPath id="clip0_1_31630">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function StepsNestedComponentsSeriesIndicatorMouse1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[292px]" data-name="Steps / Nested components / Series indicator - Mouse">
      <Content1 />
      <Clear1 />
    </div>
  );
}

function StepsNestedComponentsSeriesIndicatorMouse2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Steps / Nested components / Series indicator - Mouse">
      <StepsNestedComponentsSeriesIndicatorMouse />
      <StepsNestedComponentsSeriesIndicatorMouse1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(89,89,89,0.55)] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[2px] shrink-0 w-[292px]" data-name="Button">
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap whitespace-pre">Combine into new Series</p>
    </div>
  );
}

function StepsNestedComponentsSeriesButtonsMouse() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="Steps / Nested components / Series buttons - Mouse">
      <Button />
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#d6d6d6] text-[16px] w-[min-content]">Combine the 2 opened series into a single new series so that a 3rd series can be added.</p>
    </div>
  );
}

function IconsPanVolumeAlt48() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
      <g id="Icons-/-PanVolumeAlt_48">
        <path d={svgPaths.p1a66f700} fill="var(--fill-0, #D6D6D6)" id="DLS_PanVolume_48" />
        <path d={svgPaths.p1c36bf0} fill="var(--fill-0, #D6D6D6)" id="Shape" opacity="0.75" />
      </g>
    </svg>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-0" data-name="Symbols">
      <IconsPanVolumeAlt48 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[4.167%] overflow-clip" data-name="Frame">
      <Symbols />
    </div>
  );
}

function IconVolumePan() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / VolumePan">
      <Frame />
    </div>
  );
}

function ButtonIgt3() {
  return (
    <div className="bg-[rgba(89,89,89,0.55)] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="🟢 Button (IGT)">
      <IconVolumePan />
    </div>
  );
}

function IconsRotateVolume48() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
      <g id="Icons-/-RotateVolume_48">
        <path d={svgPaths.p1ee1d6c0} fill="var(--fill-0, #D6D6D6)" id="Combined-Shape" opacity="0.75" />
        <path d={svgPaths.p134e5280} fill="var(--fill-0, #D6D6D6)" id="DLS_RotateContinuous_48" />
      </g>
    </svg>
  );
}

function Symbols1() {
  return (
    <div className="absolute contents inset-0" data-name="Symbols">
      <IconsRotateVolume48 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[4.167%] overflow-clip" data-name="Frame">
      <Symbols1 />
    </div>
  );
}

function IconVolumeRotate() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / VolumeRotate">
      <Frame1 />
    </div>
  );
}

function ButtonIgt4() {
  return (
    <div className="bg-[rgba(89,89,89,0.55)] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="🟢 Button (IGT)">
      <IconVolumeRotate />
    </div>
  );
}

function Frame306() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ButtonIgt3 />
      <ButtonIgt4 />
    </div>
  );
}

function Frame307() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">Adjust alignment</p>
      <Frame306 />
    </div>
  );
}

function Slot() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Slot">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-0 px-[16px] relative w-full">
          <StepsNestedComponentsSeriesMouseSmartNav />
          <StepsNestedComponentsSeriesIndicatorMouse2 />
          <StepsNestedComponentsSeriesButtonsMouse />
          <Frame307 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Content">
      <Slot />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[324px] relative w-full" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(69, 69, 69, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 324">
            <path d="M0.5 324V0" id="Vector 1" stroke="var(--stroke-0, #454545)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Expander() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Expander">
      <Header1 />
      <Content2 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "324", "--transform-inner-height": "324" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Separator />
        </div>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step 1">
      <Expander />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Registration</p>
      </div>
    </div>
  );
}

function NavigationDown() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="NavigationDown">
        <path d={svgPaths.p95bb900} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" id="path" />
      </g>
    </svg>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <NavigationDown />
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Frame3 />
          <Icons1 />
        </div>
      </div>
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-[324px] relative w-full" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 324">
            <path d="M0.5 324V0" id="Vector 1" stroke="var(--stroke-0, #D6D6D6)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Expander1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Expander">
      <Header2 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "324", "--transform-inner-height": "324" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Separator1 />
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step 2">
      <Expander1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">New Reconstruction</p>
      </div>
    </div>
  );
}

function NavigationDown1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="NavigationDown">
        <path d={svgPaths.p95bb900} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" id="path" />
      </g>
    </svg>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <NavigationDown1 />
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Frame4 />
          <Icons2 />
        </div>
      </div>
    </div>
  );
}

function Separator2() {
  return (
    <div className="h-[324px] relative w-full" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 324">
            <path d="M0.5 324V0" id="Vector 1" stroke="var(--stroke-0, #D6D6D6)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Expander2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Expander">
      <Header3 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "324", "--transform-inner-height": "324" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Separator2 />
        </div>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Step 3">
      <Expander2 />
    </div>
  );
}

function StepOverview() {
  return (
    <div className="basis-0 bg-[#212121] content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Step overview">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

function TaskGuidance() {
  return (
    <div className="basis-0 bg-neutral-900 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-[324px]" data-name="Task Guidance">
      <Header />
      <TaskOverview />
      <StepOverview />
    </div>
  );
}

function TaskGuidance1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[324px]" data-name="Task Guidance">
      <TaskGuidance />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Eye">
          <path d={svgPaths.p1df617c0} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Content">
      <Eye />
    </div>
  );
}

function ArrowDown() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="ArrowDown">
        <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Arrow() {
  return (
    <div className="absolute right-[4px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Arrow">
      <ArrowDown />
    </div>
  );
}

function View() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[40px] items-center min-w-[68px] pl-[12px] pr-[4px] py-[8px] relative rounded-[2px] shrink-0" data-name="View">
      <Content3 />
      <Arrow />
    </div>
  );
}

function Separator3() {
  return (
    <div className="h-[40px] relative shrink-0 w-px" data-name="Separator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 40">
        <g id="Separator">
          <path d="M0.5 40V0" id="Vector 1" stroke="var(--stroke-0, #454545)" />
        </g>
      </svg>
    </div>
  );
}

function Separator4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[4px] py-0 relative shrink-0" data-name="Separator">
      <Separator3 />
    </div>
  );
}

function Zoom() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Zoom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zoom">
          <path d={svgPaths.p329bbbc0} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Zoom1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Zoom">
      <Zoom />
    </div>
  );
}

function Hand16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Hand_16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Hand_16">
          <path d={svgPaths.p966ca00} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Pan() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Pan">
      <Hand16 />
    </div>
  );
}

function ContrastBrightness() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ContrastBrightness">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zoom">
          <path d={svgPaths.p329bbbc0} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ContrastBrightness1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Contrast Brightness">
      <ContrastBrightness />
    </div>
  );
}

function DlsRollRotate48() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DLS_RollRotate_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zoom">
          <path d={svgPaths.p329bbbc0} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Content">
      <DlsRollRotate48 />
    </div>
  );
}

function ArrowDown1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="ArrowDown">
        <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Arrow1() {
  return (
    <div className="absolute right-[4px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Arrow">
      <ArrowDown1 />
    </div>
  );
}

function Rotate() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[40px] items-center min-w-[68px] pl-[12px] pr-[4px] py-[8px] relative rounded-[2px] shrink-0" data-name="Rotate">
      <Content4 />
      <Arrow1 />
    </div>
  );
}

function DlsViewCoronalFront48() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DLS_ViewCoronalFront_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DLS_ViewCoronalFront_48">
          <path d={svgPaths.p39e6bc80} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Content">
      <DlsViewCoronalFront48 />
    </div>
  );
}

function ArrowDown2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="ArrowDown">
        <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="var(--fill-0, #D6D6D6)" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Arrow2() {
  return (
    <div className="absolute right-[4px] size-[24px] top-1/2 translate-y-[-50%]" data-name="Arrow">
      <ArrowDown2 />
    </div>
  );
}

function Orientation() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[40px] items-center min-w-[68px] pl-[12px] pr-[4px] py-[8px] relative rounded-[2px] shrink-0" data-name="Orientation">
      <Content5 />
      <Arrow2 />
    </div>
  );
}

function SlabPosition() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SlabPosition">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SlabPosition">
          <path d={svgPaths.p389cc500} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Scroll() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Scroll">
      <SlabPosition />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2d255980} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function SlabThickness() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Slab Thickness">
      <Icon />
    </div>
  );
}

function Opacity() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Opacity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Opacity">
          <path d="M17 7H7V17H17V7Z" fill="var(--fill-0, #D6D6D6)" id="path" opacity="0.5" />
          <path d={svgPaths.pc748c80} fill="var(--fill-0, #D6D6D6)" id="path_2" />
        </g>
      </svg>
    </div>
  );
}

function Opacity1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0" data-name="Opacity">
      <Opacity />
    </div>
  );
}

function ToolbarNestedComponentsTemplateHorizontalSmartNav() {
  return (
    <div className="basis-0 bg-neutral-900 grow min-h-px min-w-px relative shrink-0" data-name="Toolbar / Nested components / Template horizontal (SmartNav)">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <View />
          <Separator4 />
          <Zoom1 />
          <Pan />
          <ContrastBrightness1 />
          <Rotate />
          <Orientation />
          <Scroll />
          <SlabThickness />
          <Separator4 />
          <Opacity1 />
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="Toolbar">
      <ToolbarNestedComponentsTemplateHorizontalSmartNav />
    </div>
  );
}

function Image2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.08%] left-[19.51%] max-w-none top-[-0.04%] w-[60.98%]" src={imgImage1} />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="absolute bg-black bottom-[0.33px] box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[2px] right-0 top-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Image2 />
    </div>
  );
}

function ViewContainer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 3">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Image3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image 1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.93%] left-[19.57%] max-w-none top-[-0.62%] w-[61.04%]" src={imgImage2} />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="absolute bg-black bottom-[0.33px] box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[2px] right-0 top-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Image3 />
    </div>
  );
}

function ViewContainer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 2">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Content8 />
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image 1">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Content9() {
  return (
    <div className="absolute bg-black bottom-[0.33px] box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[2px] right-0 top-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Image4 />
    </div>
  );
}

function ViewContainer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 4">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Content9 />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-3/4 right-0 top-0" data-name="Right">
      <ViewContainer3 />
      <ViewContainer2 />
      <ViewContainer4 />
    </div>
  );
}

function ViewAreaIgt() {
  return (
    <div className="absolute inset-0" data-name="🟢 View area (IGT)">
      <Right />
    </div>
  );
}

function Frame427() {
  return (
    <div className="[grid-area:1_/_1] h-[976px] ml-0 mt-0 relative w-[1596px]">
      <ViewAreaIgt />
    </div>
  );
}

function ViewArea() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full" data-name="View area">
      <Frame427 />
    </div>
  );
}

function ViewAreaToolbar() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="View area + Toolbar">
      <Toolbar />
      <ViewArea />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 right-0 top-[56px]" data-name="Content area">
      <TaskGuidance1 />
      <ViewAreaToolbar />
    </div>
  );
}

function Background() {
  return <div className="basis-0 bg-[#383838] grow h-full min-h-px min-w-px shrink-0" data-name="Background" />;
}

function DlsHome24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DLS_Home_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zoom">
          <path d={svgPaths.p329bbbc0} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[2px] shrink-0 w-[40px]" data-name="Button">
      <DlsHome24 />
    </div>
  );
}

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
    <div className="box-border content-stretch flex flex-col h-[15px] items-center px-[8px] py-0 relative shrink-0" data-name="wordmark">
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-0 relative shrink-0" data-name="solution name">
      <p className="font-['CentraleSans:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">SmartNavigator</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function DlsPatientAcquisition24() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="DLS_PatientAcquisition_24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="DLS_PatientAcquisition_24">
          <path d={svgPaths.p4381100} fill="var(--fill-0, #41C9FE)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text container">
      <p className="font-['CentraleSans:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap whitespace-pre">DOE, Jane</p>
    </div>
  );
}

function Patient() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Patient">
      <DlsPatientAcquisition24 />
      <TextContainer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(214,214,214,0.65)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">Patient ID</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">234567</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0 text-[#8c8c8c]">
        <p className="leading-[28px] text-nowrap whitespace-pre">DOB</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">15-Jan-1991 (33 y)</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Label />
      <Label1 />
    </div>
  );
}

function PatientInfo() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-center justify-center relative shrink-0" data-name="Patient info">
      <Patient />
      <Info />
    </div>
  );
}

function Left2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[48px] items-center left-[8px] pl-[8px] pr-0 py-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Left1 />
      <PatientInfo />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px]" data-name="Time">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center relative shrink-0 text-nowrap">
        <p className="leading-[28px] whitespace-pre">09:00</p>
      </div>
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center relative shrink-0 text-center w-[40px]">
        <p className="leading-[28px]">AM</p>
      </div>
    </div>
  );
}

function DateTimeUser() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0" data-name="Date + Time + User">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">01-Jul-2024</p>
      </div>
      <Time />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p32cbff80} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIgt5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]" data-name="🟢 Button (IGT)">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p264ecd40} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIgt6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]" data-name="🟢 Button (IGT)">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Zoom">
          <path d={svgPaths.p329bbbc0} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIgt7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]" data-name="🟢 Button (IGT)">
      <Icon3 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Icons">
      <ButtonIgt5 />
      <ButtonIgt6 />
      <ButtonIgt7 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-end relative shrink-0" data-name="Right side">
      <DateTimeUser />
      <Icons3 />
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-end right-[16px] top-1/2 translate-y-[-50%]" data-name="Right">
      <RightSide />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[10px] h-[56px] items-center relative shrink-0 w-full" data-name="Top row">
      <Background />
      <Left2 />
      <Right1 />
    </div>
  );
}

function Template() {
  return (
    <div className="box-border content-stretch flex flex-col items-center relative shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="Template">
      <TopRow />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 right-0 top-0" data-name="Navigation bar">
      <Template />
    </div>
  );
}

function FrameworkMouseSmartNav() {
  return (
    <div className="absolute bg-black h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-name="Framework / Mouse (SmartNav)">
      <ContentArea />
      <NavigationBar />
    </div>
  );
}

export default function Component13WsResultCbcTimage() {
  return (
    <div className="relative size-full" data-name="13.WS-ResultCBCTimage">
      <FrameworkMouseSmartNav />
      <div className="absolute inset-[10.28%_29.11%_0.28%_21.7%]" data-name="FV 01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.93%] left-[-22.02%] max-w-none top-[-14.56%] w-[205.62%]" src={imgFv01} />
        </div>
      </div>
      <div className="absolute inset-[10.28%_0.69%_0.28%_79.22%]" data-name="Right Images">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 relative border border-[#383838]">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[100.08%] left-[19.51%] max-w-none top-[-0.04%] w-[60.98%]" src={imgImage1} />
            </div>
          </div>
          <div className="flex-1 relative border border-[#383838]">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[100.93%] left-[19.57%] max-w-none top-[-0.62%] w-[61.04%]" src={imgImage2} />
            </div>
          </div>
          <div className="flex-1 relative border border-[#383838]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage3} />
          </div>
        </div>
      </div>
    </div>
  );
}