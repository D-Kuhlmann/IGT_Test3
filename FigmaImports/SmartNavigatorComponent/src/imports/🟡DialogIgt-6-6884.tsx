import svgPaths from "./svg-ydksdioxaq";

function Frame364() {
  return <div className="absolute h-[28px] left-[24px] top-0 w-[1424px]" />;
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-[1472px]" data-name="Separator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
        <g id="Separator"></g>
      </svg>
    </div>
  );
}

function LabelIgt() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-start relative shrink-0 w-full" data-name="🟢 Label (IGT)">
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">Type</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[4px] py-0 relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Roll - 8s</p>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="ArrowDown">
        <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="var(--fill-0, #E8E8E8)" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Arrow">
      <ArrowDown />
    </div>
  );
}

function DropdownIgt() {
  return (
    <div className="bg-[rgba(89,89,89,0.55)] h-[40px] relative rounded-[2px] shrink-0 w-full" data-name="🟢 Dropdown (IGT)">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between pl-[12px] pr-[4px] py-[8px] relative w-full">
          <Content />
          <Arrow />
        </div>
      </div>
    </div>
  );
}

function Type() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Type">
      <div aria-hidden="true" className="absolute border-0 border-[rgba(158,213,255,0.8)] border-solid inset-0 pointer-events-none" />
      <LabelIgt />
      <DropdownIgt />
    </div>
  );
}

function Label() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[9px] relative shrink-0" data-name="Label">
      <p className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px]">Injector coupling</p>
    </div>
  );
}

function ToggleSwitchIgt() {
  return (
    <div className="h-[40px] relative shrink-0 w-[48px]" data-name="🟢 Toggle switch (IGT)">
      <div className="absolute bottom-0 left-0 right-[-6.25%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 40">
          <g id="ð¢ Toggle switch (IGT)">
            <rect fill="var(--fill-0, #00BD5E)" height="16" id="track" rx="8" width="40" x="4" y="12" />
            <g filter="url(#filter0_d_6_8006)" id="thumb">
              <path d={svgPaths.p35e30700} fill="var(--fill-0, #C4C4C4)" />
              <path d={svgPaths.p3abe0900} stroke="var(--stroke-0, black)" strokeOpacity="0.08" />
            </g>
            <g id="border"></g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter0_d_6_8006" width="30" x="21" y="5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_8006" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_8006" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ToggleSwitchWithLabelIgt() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full" data-name="🟢 Toggle switch with label (IGT)">
      <Label />
      <ToggleSwitchIgt />
    </div>
  );
}

function LabelIgt1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-start relative shrink-0 w-[85.083px]" data-name="🟢 Label (IGT)">
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">X-ray delay</p>
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-full relative shrink-0 w-px" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(140, 140, 140, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 40">
            <path d="M0.5 40V0" id="Vector 1" stroke="var(--stroke-0, #8C8C8C)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowUp() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="ArrowUp">
        <path clipRule="evenodd" d={svgPaths.p95af300} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <ArrowUp />
    </div>
  );
}

function ArrowContainer() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px pl-[4px] pr-[3px] py-[2px] relative shrink-0" data-name="Arrow Container">
      <Icons />
    </div>
  );
}

function ArrowDown1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="ArrowDown">
        <path clipRule="evenodd" d={svgPaths.p2193d900} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <ArrowDown1 />
    </div>
  );
}

function ArrowContainer1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px pl-[4px] pr-[3px] py-[2px] relative shrink-0" data-name="Arrow Container">
      <Icons1 />
    </div>
  );
}

function Selector() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-px py-px relative shrink-0" data-name="selector">
      <ArrowContainer />
      <ArrowContainer1 />
    </div>
  );
}

function PinnedRight() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center right-0 top-0 w-[25px]" data-name="Pinned Right">
      <Separator1 />
      <Selector />
    </div>
  );
}

function Stepper() {
  return (
    <div className="bg-[#212121] box-border content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[33px] py-[9px] relative rounded-[2px] shrink-0 w-[120px]" data-name="Stepper">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(214,214,214,0.8)] text-nowrap">
        <p className="leading-[22px] overflow-ellipsis overflow-hidden whitespace-pre">0s</p>
      </div>
      <PinnedRight />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <LabelIgt1 />
      <Stepper />
    </div>
  );
}

function LabelIgt2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-start relative shrink-0 w-[80.911px]" data-name="🟢 Label (IGT)">
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">Interval</p>
    </div>
  );
}

function Separator2() {
  return (
    <div className="h-full relative shrink-0 w-px" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(140, 140, 140, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 40">
            <path d="M0.5 40V0" id="Vector 1" stroke="var(--stroke-0, #8C8C8C)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowUp1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="ArrowUp">
        <path clipRule="evenodd" d={svgPaths.p95af300} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <ArrowUp1 />
    </div>
  );
}

function ArrowContainer2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px pl-[4px] pr-[3px] py-[2px] relative shrink-0" data-name="Arrow Container">
      <Icons2 />
    </div>
  );
}

function ArrowDown2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="ArrowDown">
        <path clipRule="evenodd" d={svgPaths.p2193d900} fill="var(--fill-0, #D6D6D6)" fillOpacity="0.8" fillRule="evenodd" id="path" />
      </g>
    </svg>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <ArrowDown2 />
    </div>
  );
}

function ArrowContainer3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px pl-[4px] pr-[3px] py-[2px] relative shrink-0" data-name="Arrow Container">
      <Icons3 />
    </div>
  );
}

function Selector1() {
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-px py-px relative shrink-0" data-name="selector">
      <ArrowContainer2 />
      <ArrowContainer3 />
    </div>
  );
}

function PinnedRight1() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center right-0 top-0 w-[25px]" data-name="Pinned Right">
      <Separator2 />
      <Selector1 />
    </div>
  );
}

function Stepper1() {
  return (
    <div className="bg-[#212121] box-border content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[33px] py-[9px] relative rounded-[2px] shrink-0 w-[120px]" data-name="Stepper">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(214,214,214,0.8)] text-nowrap">
        <p className="leading-[22px] overflow-ellipsis overflow-hidden whitespace-pre">2s</p>
      </div>
      <PinnedRight1 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <LabelIgt2 />
      <Stepper1 />
    </div>
  );
}

function Settings() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[294px] items-start relative shrink-0 w-[300px]" data-name="Settings">
      <div className="flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] w-full">
        <p className="leading-[24px]">Settings</p>
      </div>
      <Type />
      <ToggleSwitchWithLabelIgt />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame367() {
  return (
    <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] w-[200px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
        <p className="leading-[22px]">Catheter tip location</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
        <p className="leading-[22px]">Selective vessel</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
        <p className="leading-[22px]">Aortic arch</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
        <p className="leading-[22px]">Selective vessel</p>
      </div>
    </div>
  );
}

function Frame368() {
  return (
    <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">X-ray delay</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">3 s</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">3 s</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">3 s</p>
      </div>
    </div>
  );
}

function Frame369() {
  return (
    <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">Flow rate</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">3 ml/s</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">6 ml/s</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">3 ml/s</p>
      </div>
    </div>
  );
}

function Frame370() {
  return (
    <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">Volume</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">70 ml</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">120 ml</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">70 ml</p>
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">Contrast</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">32 mgl/ml</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">64 mgl/ml</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
        <p className="leading-[22px]">48 mgl/ml</p>
      </div>
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <Frame367 />
      <Frame368 />
      <Frame369 />
      <Frame370 />
      <Frame371 />
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex flex-col h-[294px] items-start justify-between relative shrink-0">
      <div className="flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Injector Suggestions</p>
      </div>
      <Frame372 />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[22px] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">
        <p className="mb-0">These suggestions apply to normal sized patients.</p>
        <p>For more information, refer to the Instructions for use.</p>
      </div>
    </div>
  );
}

function Frame366() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[120px] py-0 relative w-full">
          <Settings />
          <Frame373 />
        </div>
      </div>
    </div>
  );
}

function Frame365() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[24px] top-[314px] w-[1424px]">
      <Separator />
      <Frame366 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[20px] text-center text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Helical 10s</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#383838] h-[56px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
          <Top />
        </div>
      </div>
    </div>
  );
}

function PictorialIndexIgt() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[64px] items-start left-0 p-[4px] top-0 w-[187px]" data-name="🟢 Pictorial index (IGT)">
      <Footer />
      <div className="absolute inset-0 rounded-[4px]" data-name="Selection border">
        <div aria-hidden="true" className="absolute border-[3px] border-[rgba(158,213,255,0.8)] border-solid inset-[-1.5px] pointer-events-none rounded-[5.5px]" />
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[20px] text-center text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Circular 10s</p>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="bg-[#383838] h-[56px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
          <Top1 />
        </div>
      </div>
    </div>
  );
}

function PictorialIndexIgt1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[64px] items-start left-[197px] p-[4px] top-0 w-[187px]" data-name="🟢 Pictorial index (IGT)">
      <Footer1 />
    </div>
  );
}

function Frame384() {
  return (
    <div className="absolute h-[64px] left-[252px] top-0 w-[409px]">
      <PictorialIndexIgt />
      <PictorialIndexIgt1 />
    </div>
  );
}

function Frame381() {
  return (
    <div className="absolute h-[64px] left-[70px] top-[157px] w-[559px]">
      <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[67.5px] not-italic text-[#d6d6d6] text-[20px] text-nowrap top-[32px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">CBCT Type</p>
      </div>
      <Frame384 />
    </div>
  );
}

function SlotAgaMouse() {
  return (
    <div className="absolute h-[888px] left-0 top-[72px] w-[1472px]" data-name="Slot / AGA (Mouse)">
      <Frame364 />
      <Frame365 />
      <Frame381 />
    </div>
  );
}

function Separator3() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Separator">
      <div className="absolute bottom-1/2 left-0 right-0 top-1/2">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
            <path d="M0 0.5L1472 0.5" id="Vector 1" stroke="var(--stroke-0, #D6D6D6)" strokeOpacity="0.12" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[dimgrey] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative rounded-[2px] shrink-0 w-[184px]" data-name="Button">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-center text-nowrap">Previous</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Button 4">
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[dimgrey] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative rounded-[2px] shrink-0 w-[184px]" data-name="Button">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-center text-nowrap">Button</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative shrink-0" data-name="Button 3">
      <Button1 />
    </div>
  );
}

function Left() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Button4 />
      <Button3 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute inset-[12px]" data-name="Buttons">
      <Left />
    </div>
  );
}

function DialogFooter() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[80px] items-start justify-end left-0 p-[12px] top-[944px] w-[1472px]" data-name="Dialog footer">
      <Separator3 />
      <Buttons />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center left-[1208px] opacity-0 px-[16px] py-[9px] rounded-[2px] top-[964px] w-[240px]" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 240 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.0606e-13 4.4468 -26.681 1.4945e-13 120 -2.1277)\\\'><stop stop-color=\\\'rgba(205,162,220,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(154,157,223,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(103,152,226,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(77,150,228,1)\\\' offset=\\\'0.625\\\'/><stop stop-color=\\\'rgba(51,147,229,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(26,145,231,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(13,143,231,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,142,232,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Continue</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[dimgrey] box-border content-stretch flex gap-[8px] items-center justify-center left-[996px] opacity-0 px-[16px] py-[9px] rounded-[2px] top-[964px] w-[200px]" data-name="Button 2">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-center text-nowrap">Cancel acquisition</p>
    </div>
  );
}

function Apps() {
  return (
    <div className="absolute contents inset-0" data-name="Apps">
      <div className="absolute bg-black inset-0 opacity-0" data-name="Rectangle" />
      <div className="absolute bg-[#346ab1] inset-[14.58%_14.58%_52.08%_52.08%] opacity-50 rounded-[3px]" data-name="Rectangle" />
      <div className="absolute bg-[#2b86b2] inset-[14.58%_52.08%_72.92%_14.58%] opacity-70 rounded-[3px]" data-name="Rectangle" />
      <div className="absolute bg-[#33ba9b] bottom-[14.58%] left-3/4 opacity-60 right-[14.58%] rounded-[3px] top-[52.08%]" data-name="Rectangle" />
      <div className="absolute bg-[#20b1cf] inset-[31.25%_29.17%_14.58%_14.58%] opacity-40 rounded-[3px]" data-name="Rectangle" />
    </div>
  );
}

function Group104() {
  return <div className="absolute bottom-full contents left-0 right-full top-0" />;
}

function SmartButtonSquares() {
  return (
    <div className="h-[43.2px] relative shadow-[0px_0px_10px_0px_rgba(11,206,255,0.5)] shrink-0 w-[47.25px]" data-name="Smart-Button-squares">
      <Apps />
      <Group104 />
      <div className="absolute inset-[18.75%_19.44%_56.25%_58.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p29af4c00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.42%_34.72%_20.14%_20.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <path d={svgPaths.p268eaf00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Cross32() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Cross_32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Cross_32">
          <path d={svgPaths.p13d20c80} fill="var(--fill-0, white)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] h-[72px] items-center pl-[20px] pr-[24px] py-[20px] relative w-full">
          <SmartButtonSquares />
          <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Acquire CBCT</p>
          </div>
          <Cross32 />
        </div>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1472px]" data-name="Dialog header">
      <Title />
    </div>
  );
}

function CheckmarkStandAlone17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="CheckmarkStandAlone_16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CheckmarkStandAlone_16">
          <path d={svgPaths.p6002e00} fill="var(--fill-0, #212121)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div className="bg-[#00bd5e] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <CheckmarkStandAlone17 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Protocol</p>
      </div>
    </div>
  );
}

function ProgressLine() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Progress line">
      <div className="basis-0 bg-[#8c8c8c] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function Step() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[396px] top-[73px]" data-name="Step">
      <Circle />
      <Text />
      <ProgressLine />
    </div>
  );
}

function Circle1() {
  return (
    <div className="bg-[#1474a4] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[0px] text-center text-nowrap">
        <p className="font-['CentraleSans:Bold',_sans-serif] leading-[20px] text-[14px] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function ProgressLine1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Progress line">
      <div className="basis-0 bg-[dimgrey] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function Step1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[533px] top-[73px]" data-name="Step">
      <Circle1 />
      <Text1 />
      <ProgressLine1 />
    </div>
  );
}

function Circle2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(214,214,214,0.5)] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Check Path</p>
      </div>
    </div>
  );
}

function ProgressLine2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Progress line">
      <div className="basis-0 bg-[dimgrey] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function Step3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[810px] top-[73px]" data-name="Step 3">
      <Circle2 />
      <Text2 />
      <ProgressLine2 />
    </div>
  );
}

function Circle3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(214,214,214,0.5)] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Acquisition</p>
      </div>
    </div>
  );
}

function Step4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[964px] top-[73px]" data-name="Step 4">
      <Circle3 />
      <Text3 />
    </div>
  );
}

function Circle4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(214,214,214,0.5)] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Isocenter</p>
      </div>
    </div>
  );
}

function ProgressLine3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Progress line">
      <div className="basis-0 bg-[dimgrey] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function Step5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[668px] top-[72px]" data-name="Step 3">
      <Circle4 />
      <Text4 />
      <ProgressLine3 />
    </div>
  );
}

function PageHeaderStepper() {
  return (
    <div className="absolute contents left-[396px] top-[72px]" data-name="Page-Header-Stepper">
      <Step />
      <Step1 />
      <Step3 />
      <Step4 />
      <Step5 />
    </div>
  );
}

export default function DialogIgt() {
  return (
    <div className="bg-[#212121] relative rounded-[4px] size-full" data-name="🟡 Dialog (IGT)">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)]" />
      <SlotAgaMouse />
      <DialogFooter />
      <Button5 />
      <Button2 />
      <DialogHeader />
      <PageHeaderStepper />
    </div>
  );
}