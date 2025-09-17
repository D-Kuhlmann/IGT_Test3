import svgPaths from "./svg-lsvrftrq7x";
import imgImage2 from "figma:asset/2a97af415690c33899ec327cbd66050b75adba61.png";
import imgRectangle10 from "figma:asset/c9086bd51fc782e98eaacdee902113f255daaed2.png";
import imgRectangle11 from "figma:asset/0aa26374bbdf16857809de604ec48e1e0389d7d8.png";
import imgRectangle12 from "figma:asset/6db7f8b1b112d0b9a9945d819dc6319570b02c6d.png";
import imgRectangle13 from "figma:asset/fe558658e6b0596a10cdf774759a838bea1b9470.png";
import imgRectangle14 from "figma:asset/0af03daee20e24daa5d9333f76cda7130f909051.png";
import imgRectangle15 from "figma:asset/f335dd870d73d3a3a42625b146863522001a070f.png";
import imgRectangle16 from "figma:asset/a05764f1b689ed6937d133abf58e8584fe89dd5d.png";
import imgImage11 from "figma:asset/9658092021be4f26ecf8b1d1daa7d9530ccdde74.png";
import imgViewportContent from "figma:asset/0d5d4619f202084ba6d2f7695959af569d5814e2.png";
import imgViewportContent1 from "figma:asset/4789ee9d7b665d2d789800bc9f73934cd7b8a848.png";

function Background() {
  return <div className="basis-0 bg-[#383838] grow h-full min-h-px min-w-px shrink-0" data-name="Background" />;
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
    <div className="box-border content-stretch flex flex-col h-[15px] items-center justify-start px-2 py-0 relative shrink-0" data-name="wordmark">
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-2 py-0 relative shrink-0" data-name="solution name">
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="leading-[28px] whitespace-pre">NextGen</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Left">
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute box-border content-stretch flex gap-12 h-12 items-center justify-start left-2 pl-2 pr-0 py-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Left />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Time">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre"> </p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-5 h-12 items-center justify-end relative shrink-0" data-name="Right side">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">31-Jan-2024</p>
      </div>
      <Time />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute content-stretch flex gap-2 h-12 items-center justify-end right-6 top-1/2 translate-y-[-50%]" data-name="Right">
      <RightSide />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-2.5 h-14 items-center justify-start relative shrink-0 w-full" data-name="Top row">
      <Background />
      <Left1 />
      <Right />
    </div>
  );
}

function Template() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start relative shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="Template">
      <TopRow />
    </div>
  );
}

function NavigationBarIgt() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-0 relative w-[3840px]" data-name="Navigation bar (IGT)">
      <Template />
    </div>
  );
}

function Igt32PxFvApps() {
  return (
    <div className="[grid-area:1_/_1] h-[29.5px] ml-0 mt-0 relative w-[30.066px]" data-name="IGT-/-32px-/-FVApps">
      <div className="absolute bottom-[-1.69%] left-0 right-[-3.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 30">
          <g id="IGT-/-32px-/-FVApps">
            <path clipRule="evenodd" d={svgPaths.p3d3a7100} fill="var(--fill-0, white)" fillOpacity="0.15" fillRule="evenodd" id="Path-3" />
            <path clipRule="evenodd" d={svgPaths.p12686900} fill="var(--fill-0, white)" fillRule="evenodd" id="Path-2" />
            <path d={svgPaths.p14580380} fill="var(--fill-0, white)" id="Rectangle" opacity="0.5" />
            <path d={svgPaths.pe1d4700} fill="var(--fill-0, white)" id="Rectangle_2" opacity="0.6" />
            <path d={svgPaths.p1340eb80} fill="var(--fill-0, white)" id="Rectangle_3" opacity="0.7" />
            <path d={svgPaths.p323e7400} fill="var(--fill-0, white)" id="Rectangle_4" opacity="0.4" />
            <path d={svgPaths.p3fed3700} id="Rectangle_5" stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
            <path clipRule="evenodd" d={svgPaths.p3afb6800} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" stroke="var(--stroke-0, black)" />
            <path d="M10 1H9V19H10V1Z" fill="var(--fill-0, white)" fillOpacity="0.2" id="Rectangle_6" />
            <path d="M9 9H1V10H9V9Z" fill="var(--fill-0, white)" fillOpacity="0.2" id="Rectangle_7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DDlsFv() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.828%] mt-[23.214%] place-items-start relative" data-name="dDLS-FV">
      <Igt32PxFvApps />
    </div>
  );
}

function DDlsTsmTestFindings() {
  return (
    <div className="absolute contents inset-0" data-name="dDLS-TSM-Test-findings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Apps">
          <path d="M48 0H0V48H48V0Z" fill="var(--fill-0, black)" id="Rectangle" opacity="0" />
          <path d={svgPaths.pa955b00} fill="var(--fill-0, white)" id="Rectangle_2" opacity="0.5" />
          <path d={svgPaths.p30fe3700} fill="var(--fill-0, white)" id="Rectangle_3" opacity="0.7" />
          <path d={svgPaths.p3d5f6d80} fill="var(--fill-0, white)" id="Rectangle_4" opacity="0.6" />
          <path d={svgPaths.p14c8a700} fill="var(--fill-0, white)" id="Rectangle_5" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function Apps1() {
  return (
    <div className="[grid-area:1_/_1] ml-[308px] mt-1 overflow-clip relative size-12" data-name="Apps 1">
      <DDlsTsmTestFindings />
    </div>
  );
}

function Group64() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-153px] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#383838] h-14 ml-[3517px] mt-0 w-[323px]" />
      <NavigationBarIgt />
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] ml-[428.5px] mt-[18px] not-italic relative text-[#d6d6d6] text-[20px] text-center text-nowrap translate-x-[-50%]">
        <p className="leading-[20px] whitespace-pre">Applications</p>
      </div>
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] ml-[609.5px] mt-[18px] not-italic relative text-[#d6d6d6] text-[20px] text-center text-nowrap translate-x-[-50%]">
        <p className="leading-[20px] whitespace-pre">Presets</p>
      </div>
      <DDlsFv />
      <Apps1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pl-4 pr-0 py-0 relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat h-[34px] shrink-0 w-9" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
    </div>
  );
}

function SystemState() {
  return (
    <div className="content-stretch flex flex-col gap-10 items-start justify-start relative shrink-0" data-name="System state">
      <Frame4 />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
    </div>
  );
}

function ExposureLabel() {
  return (
    <div className="relative shrink-0 size-12" data-name="ExposureLabel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ExposureLabel">
          <path d={svgPaths.p33af9900} fill="var(--fill-0, #B0B0B0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">44</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">KV</p>
      </div>
    </div>
  );
}

function ValueAndUnit() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">59</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">mA</p>
      </div>
    </div>
  );
}

function ValueAndUnit1() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">3</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">ms</p>
      </div>
    </div>
  );
}

function ValueAndUnit2() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame17 />
    </div>
  );
}

function KvMAMs() {
  return (
    <div className="content-stretch flex gap-[42px] items-start justify-start relative shrink-0" data-name="KV mA ms">
      <ValueAndUnit />
      <ValueAndUnit1 />
      <ValueAndUnit2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[42px] items-start justify-start ml-0 mt-0 relative">
      <ExposureLabel />
      <KvMAMs />
    </div>
  );
}

function ExposureParameters() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Exposure parameters">
      <Frame3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0" data-name="Section 2">
      <ExposureParameters />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
    </div>
  );
}

function Positions() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 text-nowrap w-72" data-name="Positions">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[30px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">LAO</p>
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Medium',_sans-serif] relative shrink-0 text-[#b0b0b0] text-[34px] text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[34px] text-nowrap whitespace-pre">0ᵒ</p>
      </div>
    </div>
  );
}

function Positions1() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 text-nowrap w-72" data-name="Positions">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[30px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">CRAN</p>
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Medium',_sans-serif] relative shrink-0 text-[#b0b0b0] text-[34px] text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[34px] text-nowrap whitespace-pre">0ᵒ</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">117</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">cm</p>
      </div>
    </div>
  );
}

function ValueAndUnit3() {
  return (
    <div className="absolute h-[59px] right-0 top-0 w-[38px]" data-name="Value and Unit">
      <Frame23 />
    </div>
  );
}

function Positions2() {
  return (
    <div className="h-[59px] relative shrink-0 w-[283px]" data-name="Positions">
      <div className="absolute font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] left-0 not-italic text-[30px] text-[dimgrey] text-nowrap top-0">
        <p className="leading-[34px] whitespace-pre">SID</p>
      </div>
      <ValueAndUnit3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">11.6</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">inch</p>
      </div>
    </div>
  );
}

function ValueAndUnit4() {
  return (
    <div className="absolute h-[59px] right-0 top-0 w-[38px]" data-name="Value and Unit">
      <Frame24 />
    </div>
  );
}

function Positions3() {
  return (
    <div className="h-[59px] relative shrink-0 w-[283px]" data-name="Positions">
      <div className="absolute font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] left-0 not-italic text-[30px] text-[dimgrey] text-nowrap top-0">
        <p className="leading-[34px] whitespace-pre">FD</p>
      </div>
      <ValueAndUnit4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0">
      <Positions2 />
      <Positions3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-7 items-start justify-start left-1 top-0">
      <Positions />
      <Positions1 />
      <Frame5 />
    </div>
  );
}

function Section3() {
  return (
    <div className="h-[259px] relative shrink-0 w-[296px]" data-name="Section 3">
      <Frame6 />
      <div className="absolute bg-[#4d4d4d] h-px left-0 top-[258px] w-[296px]" />
    </div>
  );
}

function DlsTiltAngle48() {
  return (
    <div className="relative shrink-0 size-10" data-name="DLS_TiltAngle_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="DLS_TiltAngle_48">
          <path d={svgPaths.pd1c78f2} fill="var(--fill-0, #8C8C8C)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0">
      <DlsTiltAngle48 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-5 pr-2.5 py-2.5 relative shrink-0">
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Medium',_sans-serif] leading-[0] relative shrink-0 text-[#b0b0b0] text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[34px] whitespace-pre">
          <span className="text-[34px]">0</span>
          <span className="text-[35px]">ᵒ</span>
        </p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame9 />
      <Frame7 />
    </div>
  );
}

function AngleValues() {
  return (
    <div className="h-[94px] relative shrink-0 w-20" data-name="Angle values">
      <Frame8 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0">
      <div className="bg-center bg-contain bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle10}')` }} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-5 pr-2.5 py-2.5 relative shrink-0">
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Medium',_sans-serif] leading-[0] relative shrink-0 text-[#b0b0b0] text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[34px] whitespace-pre">
          <span className="text-[34px]">0</span>
          <span className="text-[35px]">ᵒ</span>
        </p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function AngleValues1() {
  return (
    <div className="h-[94px] relative shrink-0 w-20" data-name="Angle values">
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0">
      <div className="bg-center bg-contain bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle11}')` }} />
    </div>
  );
}

function Frame29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-5 pr-2.5 py-2.5 relative shrink-0">
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Medium',_sans-serif] leading-[0] relative shrink-0 text-[#b0b0b0] text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[34px] whitespace-pre">
          <span className="text-[34px]">0</span>
          <span className="text-[35px]">ᵒ</span>
        </p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function AngleValues2() {
  return (
    <div className="h-[94px] relative shrink-0 w-20" data-name="Angle values">
      <Frame30 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-start justify-start pl-4 pr-0 py-0 relative shrink-0">
      <AngleValues />
      <AngleValues1 />
      <AngleValues2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-center justify-start relative shrink-0" data-name="Section 4">
      <Frame10 />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle12}')` }} />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">-9</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">cm</p>
      </div>
    </div>
  );
}

function ValueAndUnit5() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-5 pr-2.5 py-2.5 relative shrink-0">
      <ValueAndUnit5 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame31 />
      <Frame33 />
    </div>
  );
}

function TablePositions() {
  return (
    <div className="h-[120px] relative shrink-0 w-20" data-name="Table positions">
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0">
      <div className="bg-center bg-contain bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle13}')` }} />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">-53</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">cm</p>
      </div>
    </div>
  );
}

function ValueAndUnit6() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-5 pr-2.5 py-2.5 relative shrink-0">
      <ValueAndUnit6 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame35 />
      <Frame37 />
    </div>
  );
}

function TablePositions1() {
  return (
    <div className="h-[120px] relative shrink-0 w-20" data-name="Table positions">
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0">
      <div className="bg-center bg-contain bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">13</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">cm</p>
      </div>
    </div>
  );
}

function ValueAndUnit7() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-5 pr-2.5 py-2.5 relative shrink-0">
      <ValueAndUnit7 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame39 />
      <Frame41 />
    </div>
  );
}

function TablePositions2() {
  return (
    <div className="h-[120px] relative shrink-0 w-20" data-name="Table positions">
      <Frame42 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-start justify-start pl-4 pr-0 py-0 relative shrink-0">
      <TablePositions />
      <TablePositions1 />
      <TablePositions2 />
    </div>
  );
}

function Section5() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-center justify-start relative shrink-0" data-name="Section 5">
      <Frame11 />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
    </div>
  );
}

function LeftCoronary() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-[5px] pr-0 py-0 relative shrink-0" data-name="Left Coronary">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[30px] text-nowrap">
        <p className="leading-[34px] whitespace-pre">Left Coronary</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">15</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">fps</p>
      </div>
    </div>
  );
}

function ValueAndUnit8() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame43 />
    </div>
  );
}

function Positions4() {
  return (
    <div className="content-stretch flex gap-[205px] items-center justify-start relative shrink-0" data-name="Positions">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
      <ValueAndUnit8 />
    </div>
  );
}

function Positions5() {
  return (
    <div className="content-stretch flex gap-[190px] items-center justify-start relative shrink-0" data-name="Positions">
      <div className="bg-center bg-contain bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle16}')` }} />
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[34px] text-nowrap text-right">
        <p className="leading-[34px] whitespace-pre">Low</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
      <Positions4 />
      <Positions5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0">
      <LeftCoronary />
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <Frame13 />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
    </div>
  );
}

function LeftCoronary1() {
  return (
    <div className="bg-[#191919] box-border content-stretch flex gap-2.5 items-center justify-start pl-[5px] pr-0 py-0 relative shrink-0 w-72" data-name="Left Coronary">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[30px] text-nowrap">
        <p className="leading-[34px] whitespace-pre">Left Coronary</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">119</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">min</p>
      </div>
    </div>
  );
}

function ValueAndUnit9() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame44 />
    </div>
  );
}

function Positions6() {
  return (
    <div className="content-stretch flex gap-[205px] items-center justify-start relative shrink-0" data-name="Positions">
      <div className="bg-center bg-cover bg-no-repeat opacity-0 shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
      <ValueAndUnit9 />
    </div>
  );
}

function Group29() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] font-['CentraleSansCnd:Medium',_sans-serif] ml-[18px] mt-0 not-italic relative text-[#b0b0b0] text-[30px] text-nowrap text-right translate-x-[-100%]">
        <p className="leading-[34px] whitespace-pre">K</p>
      </div>
    </div>
  );
}

function Group41() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[42px] ml-[25px] mt-[5px] w-24" data-name="image 11" style={{ backgroundImage: `url('${imgImage11}')` }} />
      <Group29 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">00</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">mm</p>
      </div>
    </div>
  );
}

function ValueAndUnit10() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame45 />
    </div>
  );
}

function Positions7() {
  return (
    <div className="content-stretch flex gap-[117px] items-center justify-start relative shrink-0" data-name="Positions">
      <Group41 />
      <ValueAndUnit10 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
      <Positions6 />
      <Positions7 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0">
      <LeftCoronary1 />
      <Frame46 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <Frame47 />
    </div>
  );
}

function LeftCoronary2() {
  return (
    <div className="bg-[#191919] box-border content-stretch flex gap-2.5 items-center justify-start pl-[5px] pr-0 py-0 relative shrink-0 w-72" data-name="Left Coronary">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[30px] text-nowrap">
        <p className="leading-[34px] whitespace-pre">K Rate</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">119</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">min</p>
      </div>
    </div>
  );
}

function ValueAndUnit11() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame48 />
    </div>
  );
}

function Positions8() {
  return (
    <div className="content-stretch flex gap-[205px] items-center justify-start relative shrink-0" data-name="Positions">
      <div className="bg-center bg-cover bg-no-repeat opacity-0 shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
      <ValueAndUnit11 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
      <Positions8 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-center justify-start relative shrink-0">
      <LeftCoronary2 />
      <Frame49 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <Frame50 />
    </div>
  );
}

function LeftCoronary3() {
  return (
    <div className="bg-[#191919] box-border content-stretch flex gap-2.5 items-center justify-start pl-[5px] pr-0 py-0 relative shrink-0 w-72" data-name="Left Coronary">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[30px] text-nowrap">
        <p className="leading-[34px] whitespace-pre">Fluoroscopy Time</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">0.0</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">min</p>
      </div>
    </div>
  );
}

function ValueAndUnit12() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame51 />
    </div>
  );
}

function Positions9() {
  return (
    <div className="content-stretch flex gap-[205px] items-center justify-start relative shrink-0" data-name="Positions">
      <div className="bg-center bg-cover bg-no-repeat opacity-0 shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
      <ValueAndUnit12 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
      <Positions9 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0">
      <LeftCoronary3 />
      <Frame52 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
      <Frame53 />
    </div>
  );
}

function LeftCoronary4() {
  return (
    <div className="bg-[#191919] box-border content-stretch flex gap-2.5 items-center justify-start pl-[5px] pr-0 py-0 relative shrink-0 w-72" data-name="Left Coronary">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[30px] text-nowrap">
        <p className="leading-[34px] whitespace-pre">Total K</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">2.80</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">min</p>
      </div>
    </div>
  );
}

function ValueAndUnit13() {
  return (
    <div className="h-[59px] relative shrink-0 w-[38px]" data-name="Value and Unit">
      <Frame54 />
    </div>
  );
}

function Positions10() {
  return (
    <div className="content-stretch flex gap-[205px] items-center justify-start relative shrink-0" data-name="Positions">
      <div className="bg-center bg-cover bg-no-repeat opacity-0 shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
      <ValueAndUnit13 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-end justify-start leading-[0] pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] mb-[-9px] not-italic relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">0.591</p>
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Medium',_sans-serif] mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[34px] text-nowrap whitespace-pre">Gy-cm²</p>
      </div>
    </div>
  );
}

function ValueAndUnit14() {
  return (
    <div className="absolute h-[59px] right-0 top-0 w-[38px]" data-name="Value and Unit">
      <Frame55 />
    </div>
  );
}

function Positions11() {
  return (
    <div className="h-[59px] relative shrink-0 w-[283px]" data-name="Positions">
      <div className="absolute font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] left-0 not-italic text-[30px] text-[dimgrey] text-nowrap top-0">
        <p className="leading-[34px] whitespace-pre">DAP</p>
      </div>
      <ValueAndUnit14 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['CentraleSansCnd:Medium',_sans-serif] items-end justify-start leading-[0] not-italic pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="mb-[-9px] relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">0.0</p>
      </div>
      <div className="mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">mm</p>
      </div>
    </div>
  );
}

function ValueAndUnit15() {
  return (
    <div className="absolute h-[59px] right-0 top-0 w-[38px]" data-name="Value and Unit">
      <Frame56 />
    </div>
  );
}

function Positions12() {
  return (
    <div className="h-[59px] relative shrink-0 w-[283px]" data-name="Positions">
      <div className="absolute font-['CentraleSansCnd:Medium',_sans-serif] leading-[0] left-0 not-italic text-[30px] text-[dimgrey] text-nowrap top-0">
        <p className="leading-[34px] whitespace-pre">Total Fluoro</p>
      </div>
      <ValueAndUnit15 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-center justify-start relative shrink-0">
      <Positions10 />
      <Positions11 />
      <Positions12 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-center justify-start relative shrink-0">
      <LeftCoronary4 />
      <Frame21 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0">
      <Frame57 />
    </div>
  );
}

function DlsStopwatch481() {
  return <div className="h-[41px] shrink-0 w-10" data-name="DLS_Stopwatch_48 1" />;
}

function DlsStopwatch48() {
  return (
    <div className="[grid-area:1_/_1] h-[33.525px] ml-0 mt-0 relative w-[30px]" data-name="DLS_Stopwatch_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 34">
        <g id="DLS_Stopwatch_48">
          <path d={svgPaths.p3dd79800} fill="var(--fill-0, #B0B0B0)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function StatusAreaFlexVisionVerticalBiplane() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Status-area/FlexVision/vertical/biplane">
      <DlsStopwatch48 />
    </div>
  );
}

function CorFvViewingOverview() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Cor_FV_Viewing_overview">
      <StatusAreaFlexVisionVerticalBiplane />
    </div>
  );
}

function ForPpt() {
  return (
    <div className="box-border content-stretch flex gap-20 items-end justify-start leading-[0] pl-[60px] pr-0 py-0 relative shrink-0" data-name="for-ppt">
      <CorFvViewingOverview />
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[#b0b0b0] text-[34px] text-nowrap text-right">
        <p className="leading-[34px] whitespace-pre">11:14 AM</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center justify-start relative shrink-0">
      <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
      <ForPpt />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="[grid-area:1_/_1] bg-[#050505] h-[2104px] ml-0 mt-0 relative w-[308px]" data-name="Status bar">
      <div className="box-border content-stretch flex flex-col gap-10 h-[2104px] items-center justify-start overflow-clip px-1.5 py-[22px] relative w-[308px]">
        <SystemState />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <div className="bg-[#4d4d4d] h-px shrink-0 w-[296px]" />
        <Frame15 />
        <Frame16 />
        <Frame18 />
        <Frame19 />
        <Frame20 />
        <DlsStopwatch481 />
        <Frame22 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
    </div>
  );
}

function SmartMask1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[18px] relative size-12" data-name="SmartMask 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_86_4571)" id="SmartMask 1">
          <g id="Vector"></g>
          <path d={svgPaths.p11e89c80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p37a6e800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p25fc2200} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1d392b00} fill="var(--fill-0, white)" id="Vector_5" opacity="0.5" />
          <path d={svgPaths.p3173ad00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2a8dfc00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1975040} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p26721e00} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p3150200} fill="var(--fill-0, black)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_86_4571">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group87() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['CentraleSansCnd:Medium',_sans-serif] ml-[50.5px] mt-0 not-italic relative text-[20px] text-center text-nowrap text-white translate-x-[-50%]">
        <p className="leading-[34px] whitespace-pre">A</p>
      </div>
      <SmartMask1 />
    </div>
  );
}

function CropSquare() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[21px] relative size-12" data-name="CropSquare">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="CropSquare">
          <path d={svgPaths.p34281300} fill="url(#paint0_linear_86_4499)" id="path" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_86_4499" x1="23.0582" x2="46.0063" y1="46" y2="31.0389">
            <stop stopColor="#41C9FE" />
            <stop offset="1" stopColor="#2B87AA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group88() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-clip-text font-['CentraleSansCnd:Medium',_sans-serif] ml-[47.5px] mt-0 not-italic relative text-[20px] text-center text-nowrap translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[34px] whitespace-pre">A</p>
      </div>
      <CropSquare />
    </div>
  );
}

function Component1Icons24VesselNavigatorPlanning() {
  return (
    <div className="absolute inset-[4.167%]" data-name="1.-Icons/24/Vessel-Navigator-Planning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="1.-Icons/24/Vessel-Navigator-Planning">
          <path clipRule="evenodd" d={svgPaths.p2b00fa00} fill="url(#paint0_linear_86_4502)" fillRule="evenodd" id="Combined-Shape" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_86_4502" x1="21.4969" x2="44.9231" y1="44.9167" y2="29.6439">
            <stop stopColor="#41C9FE" />
            <stop offset="1" stopColor="#2B87AA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DDlsTsmTestFindings1() {
  return (
    <div className="absolute contents inset-[4.167%]" data-name="dDLS-TSM-Test-findings">
      <Component1Icons24VesselNavigatorPlanning />
    </div>
  );
}

function VesselNavigatorPlanning1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-5 overflow-clip relative size-[49px]" data-name="Vessel Navigator Planning 1">
      <DDlsTsmTestFindings1 />
    </div>
  );
}

function Group89() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-clip-text font-['CentraleSansCnd:Medium',_sans-serif] ml-[49.5px] mt-0 not-italic relative text-[20px] text-center text-nowrap translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[34px] whitespace-pre">A</p>
      </div>
      <VesselNavigatorPlanning1 />
    </div>
  );
}

function Frame302() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-10 items-start justify-start ml-[31px] mt-[1906px] relative">
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
      <Group87 />
      <Group88 />
      <Group89 />
    </div>
  );
}

function Group160() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] mr-[-153px] place-items-start relative shrink-0">
      <StatusBar />
      <Frame302 />
    </div>
  );
}

function DlsCapture16() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_Capture_16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_Capture_16">
          <path d={svgPaths.p115e8900} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsCapture16 />
    </div>
  );
}

function DlsTabMaximize48() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_TabMaximize_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_TabMaximize_48">
          <path d={svgPaths.pae9fa80} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsTabMaximize48 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="box-border content-stretch flex gap-4 items-start justify-end p-[10px] relative shrink-0" data-name="Icons">
      <Icons />
      <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-4 text-[#d6d6d6] text-[15px] text-center">
        <p className="leading-[20px]">1:1</p>
      </div>
      <Icons1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-black h-10 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-2 border-neutral-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-10 items-center justify-between pl-3 pr-0.5 py-0 relative w-full">
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(214,214,214,0.8)] text-center text-nowrap">
            <p className="leading-[20px] whitespace-pre">Xray Live</p>
          </div>
          <Icons2 />
        </div>
      </div>
    </div>
  );
}

function StudyStateIcon() {
  return (
    <div className="relative shrink-0 size-8" data-name="Study state icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Study state icon">
          <path clipRule="evenodd" d={svgPaths.p34f96a00} fill="var(--fill-0, #41C9FE)" fillRule="evenodd" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function PatientName() {
  return (
    <div className="content-stretch flex gap-3 items-start justify-start overflow-clip relative shrink-0" data-name="Patient Name">
      <StudyStateIcon />
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap">
        <p className="leading-[36px] whitespace-pre">DOE, Jane</p>
      </div>
    </div>
  );
}

function PatientId() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic overflow-clip relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap w-[209px]" data-name="Patient ID">
      <div className="flex flex-col justify-center opacity-[0.497] relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Patient ID</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">2345412</p>
      </div>
    </div>
  );
}

function Dob() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic overflow-clip relative shrink-0 text-[#d6d6d6] text-[20px]" data-name="DOB">
      <div className="flex flex-col h-8 justify-center opacity-[0.497] relative shrink-0 w-12">
        <p className="leading-[24px]">DOB</p>
      </div>
      <div className="relative shrink-0 w-[181px]">
        <p className="leading-[24px]">12-Apr-1949 (74y)</p>
      </div>
    </div>
  );
}

function LiveXrayPatientBar() {
  return (
    <div className="bg-neutral-900 h-10 relative shrink-0 w-full" data-name="LiveXrayPatientBar">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[50px] h-10 items-center justify-start px-6 py-0.5 relative w-full">
          <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">LIVE</p>
          </div>
          <PatientName />
          <PatientId />
          <Dob />
        </div>
      </div>
    </div>
  );
}

function PatientMattrass() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 opacity-50 place-items-start relative" data-name="Patient-Mattrass">
      <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[960.8px] ml-0 mt-0 opacity-30 rounded-[32px] w-[305.016px]" />
      <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[890.646px] ml-[16.775px] mt-[9.148px] opacity-30 rounded-[32px] w-[271.464px]" />
    </div>
  );
}

function IconLargeBrain() {
  return (
    <div className="absolute inset-[1.22%_39.22%_90.44%_39.23%]" data-name="icon-large-brain">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 73">
        <g id="icon-large-brain" opacity="0.6">
          <path d={svgPaths.p148b5d80} fill="var(--fill-0, #D9D9D9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconLargeHeart() {
  return (
    <div className="absolute inset-[19.23%_32.55%_73.69%_50.28%]" data-name="icon-large-heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 62">
        <g id="icon-large-heart">
          <path d={svgPaths.p2af99e00} fill="var(--fill-0, #D0CECE)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Wrist1() {
  return (
    <div className="absolute left-2 size-[19px] top-[270px]" data-name="Wrist 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Wrist 1" opacity="0">
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D0CECE)" id="Ellipse 1" opacity="0.78" r="9.5" />
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D0CECE)" id="Ellipse 2" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function Groin() {
  return (
    <div className="absolute left-[65px] size-[19px] top-[301px]" data-name="Groin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Wrist 1" opacity="0">
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D0CECE)" id="Ellipse 1" opacity="0.78" r="9.5" />
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D0CECE)" id="Ellipse 2" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function Wrist2() {
  return (
    <div className="absolute left-[154px] size-[19px] top-[270px]" data-name="Wrist 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Wrist 1" opacity="0">
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D0CECE)" id="Ellipse 1" opacity="0.78" r="9.5" />
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #D0CECE)" id="Ellipse 2" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function Group192() {
  return (
    <div className="absolute inset-[35.1%_23.05%_3.75%_23.01%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 534">
        <g id="Group 192">
          <path d={svgPaths.p2ed63300} fill="var(--fill-0, #7C7B7B)" id="Vector 819" />
          <path d={svgPaths.p240b9680} fill="var(--fill-0, #7C7B7B)" id="Vector 820" />
        </g>
      </svg>
    </div>
  );
}

function HumanSupine() {
  return (
    <div className="[grid-area:1_/_1] h-[872px] ml-3.5 mt-[23px] relative w-[275px]" data-name="human-supine">
      <div className="absolute inset-0" data-name="Supine">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275 872">
          <g id="Supine">
            <mask fill="white" id="path-1-inside-1_86_4495">
              <path d={svgPaths.p19945d80} />
            </mask>
            <path d={svgPaths.p19945d80} fill="var(--fill-0, #666565)" mask="url(#path-1-inside-1_86_4495)" stroke="var(--stroke-0, #252B31)" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[17.42%_27.99%_70.72%_53.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 104">
          <path d={svgPaths.p1a79000} fill="var(--fill-0, #9D9C9C)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.53%_52.13%_70.61%_29.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 104">
          <path d={svgPaths.p29350900} fill="var(--fill-0, #9D9C9C)" id="Vector" />
        </svg>
      </div>
      <IconLargeBrain />
      <IconLargeHeart />
      <div className="absolute inset-[30.78%_43.24%_63.59%_28.16%]" data-name="path">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 50">
          <path d={svgPaths.p27b73c00} fill="var(--fill-0, #9D9C9C)" id="path" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute inset-[38.69%_33.28%_54.78%_34.22%]" data-name="path">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 57">
          <path d={svgPaths.p3dab5c00} fill="var(--fill-0, #9D9C9C)" id="path" />
        </svg>
      </div>
      <div className="absolute font-['CentraleSans:Light',_sans-serif] inset-[86.19%_41.91%_11.63%_41.73%] leading-[0] not-italic text-[#9d9c9c] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">supine</p>
      </div>
      <div className="absolute flex inset-[43.18%_53.66%_54.47%_41.96%] items-center justify-center">
        <div className="flex-none h-[20.501px] rotate-[180deg] scale-y-[-100%] w-[12.032px]">
          <div className="bg-gradient-to-b from-[#66656500] size-full to-[#666565] to-[48.68%]" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_40.97%_54.47%_54.66%] items-center justify-center">
        <div className="flex-none h-[20.501px] rotate-[180deg] scale-y-[-100%] w-[12.032px]">
          <div className="bg-gradient-to-b from-[#66656500] size-full to-[#666565] to-[48.68%]" />
        </div>
      </div>
      <div className="absolute flex inset-[7.52%_47.59%_90.13%_48.03%] items-center justify-center">
        <div className="flex-none h-[20.501px] rotate-[180deg] scale-y-[-100%] w-[12.032px]">
          <div className="bg-gradient-to-b from-[#66656500] size-full to-[#666565] to-[48.68%]" />
        </div>
      </div>
      <div className="absolute inset-[42.95%_22.66%_55.41%_22.34%]">
        <div className="absolute inset-[-3.25%_-0.14%_-3.49%_-0.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 16">
            <path d={svgPaths.p3cc59bc0} id="Vector 90" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[14.58%_69.06%_69.78%_25.58%]">
        <div className="absolute inset-[-0.01%_-3.39%_-0.08%_-3.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 138">
            <path d={svgPaths.p1fbca680} id="Vector 88" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.85%_25.46%_69.89%_25.58%]">
        <div className="absolute inset-[-4.52%_-0.16%_-4.31%_-0.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 13">
            <path d={svgPaths.pe633e00} id="Vector 89" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[60.66%_56.94%_37.94%_19.88%]">
        <div className="absolute inset-[-3.47%_-0.22%_-4.1%_-0.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 14">
            <path d={svgPaths.p42a4000} id="Vector 91" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[48.25%_48.36%_46.04%_37.54%] items-center justify-center">
        <div className="flex-none h-[9.104px] rotate-[51.4deg] skew-x-[16.945deg] w-[54.053px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.8%_-0.23%_-5.49%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 11">
                <path d={svgPaths.pdcb5080} id="Vector 106" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.25%_37.49%_46.04%_48.41%] items-center justify-center">
        <div className="flex-none h-[9.104px] rotate-[128.6deg] scale-y-[-100%] skew-x-[16.945deg] w-[54.053px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.8%_-0.23%_-5.49%_-0.45%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 11">
                <path d={svgPaths.pdcb5080} id="Vector 107" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[14.58%_24.79%_69.78%_69.84%] items-center justify-center">
        <div className="flex-none h-[136.401px] rotate-[180deg] scale-y-[-100%] w-[14.756px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.01%_-3.39%_-0.08%_-3.31%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 138">
                <path d={svgPaths.p1fbca680} id="Vector 92" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[60.66%_19.94%_37.94%_56.87%] items-center justify-center">
        <div className="flex-none h-[12.196px] rotate-[180deg] scale-y-[-100%] w-[63.77px]">
          <div className="relative size-full">
            <div className="absolute inset-[-3.47%_-0.22%_-4.1%_-0.42%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 14">
                <path d={svgPaths.p42a4000} id="Vector 93" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[72.55%_20.5%_26.05%_71.22%] items-center justify-center">
        <div className="flex-none h-[12.196px] rotate-[180deg] scale-y-[-100%] w-[22.775px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.02%_-1.37%_-4.1%_-1.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 14">
                <path d={svgPaths.pbb11160} id="Vector 109" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[50.52%_4.13%_47.3%_88.89%] items-center justify-center">
        <div className="flex-none h-[9.386px] rotate-[316.546deg] scale-y-[-100%] skew-x-[0.231deg] w-[17.594px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.63%_-1.77%_-5.33%_-2.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
                <path d={svgPaths.p39694640} id="Vector 111" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[50.52%_88.6%_47.3%_4.42%] items-center justify-center">
        <div className="flex-none h-[9.386px] rotate-[223.454deg] skew-x-[0.231deg] w-[17.594px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.63%_-1.77%_-5.33%_-2.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
                <path d={svgPaths.p11db67c0} id="Vector 112" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[72.55%_71.29%_26.05%_20.43%]">
        <div className="absolute inset-[-2.02%_-1.37%_-4.1%_-1.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 14">
            <path d={svgPaths.pbb11160} id="Vector 110" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[91.43%_65.77%_7.17%_30.92%]">
        <div className="absolute inset-[-0.9%_-4.91%_-4.1%_-5.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d={svgPaths.p2b164000} id="Vector 117" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[91.43%_29.88%_7.17%_66.81%] items-center justify-center">
        <div className="flex-none h-[12.196px] rotate-[180deg] scale-y-[-100%] w-[9.11px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.9%_-4.91%_-4.1%_-5.35%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
                <path d={svgPaths.p2b164000} id="Vector 118" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[14.58%_49.27%_81.48%_30.94%]">
        <div className="absolute bottom-[-1.46%] left-[-0.87%] right-0 top-[-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 36">
            <path d={svgPaths.p1daa6480} id="Vector 94" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[14.58%_30.16%_81.48%_50.06%] items-center justify-center">
        <div className="flex-none h-[34.332px] rotate-[180deg] scale-y-[-100%] w-[54.411px]">
          <div className="relative size-full">
            <div className="absolute bottom-[-1.46%] left-[-0.87%] right-0 top-[-0.48%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 36">
                <path d={svgPaths.p1daa6480} id="Vector 95" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[10.23%_39.27%_87.45%_40.03%]">
        <div className="absolute inset-[-1.27%_-0.75%_-2.47%_-0.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 22">
            <path d={svgPaths.p6e1f680} id="Vector 105" opacity="0.6" stroke="var(--stroke-0, #343A40)" />
          </svg>
        </div>
      </div>
      <Wrist1 />
      <Groin />
      <Wrist2 />
      <Group192 />
    </div>
  );
}

function Group243() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[803px] mt-[116px] place-items-start relative">
      <PatientMattrass />
      <HumanSupine />
    </div>
  );
}

function VesselIcon() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="VesselIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="VesselIcon">
          <path d={svgPaths.p14e17492} fill="var(--fill-0, white)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="box-border content-stretch flex gap-[12.5px] h-[60px] items-center justify-start px-0 py-[25px] relative rounded-[12.5px] shrink-0">
      <VesselIcon />
    </div>
  );
}

function Frame321() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[25px] items-center justify-start ml-[813px] mt-0 pl-0 pr-[12.5px] py-0 relative">
      <Frame102 />
      <div className="font-['CentraleSans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#d7d7d7] text-[25px] text-nowrap">
        <p className="leading-[45px] whitespace-pre">
          <span>{`PTA `}</span>
          <span className="font-['CentraleSans:Book',_sans-serif] not-italic">Procedure</span>
        </p>
      </div>
      <div className="h-[12.5px] relative shrink-0 w-[20.833px]" data-name="path">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 13">
          <path clipRule="evenodd" d={svgPaths.pbe1e480} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
        </svg>
      </div>
    </div>
  );
}

function Group247() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['CentraleSans:Book',_sans-serif] ml-0 mt-[116px] not-italic relative text-[#d6d6d6] text-[0px] w-[761px]">
        <p className="font-['CentraleSans:Bold',_sans-serif] leading-[70px] mb-0 text-[#42c9ff] text-[34px]">X-ray is in Parked position</p>
        <ul className="css-ed5n1g list-disc mb-0">
          <li className="leading-[59px] mb-0 text-[30px]" style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
            <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">Twist</span>
            <span>{` the `}</span>
            <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">SmartControl™</span>
            <span>{` to select your smart procedure Workflow.`}</span>
          </li>
          <li className="mb-0" style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
            <span className="font-['CentraleSans:Bold',_sans-serif] leading-[59px] not-italic text-[30px]">After you’ve gained access, move the C-arm into position.</span>
          </li>
          <li style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
            <span className="font-['CentraleSans:Bold',_sans-serif] leading-[70px] not-italic text-[30px]">Pressing on the Patient graphic will allow you to select the correct EPX.</span>
          </li>
        </ul>
        <p className="leading-[70px] text-[34px]">&nbsp;</p>
      </div>
      <Group243 />
      <Frame321 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Group247 />
    </div>
  );
}

function ViewportIr() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col items-start justify-start mr-[-153px] relative shrink-0 size-[2103px]" data-name="Viewport-IR">
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
      <Header />
      <LiveXrayPatientBar />
      <Content />
    </div>
  );
}

function DlsCapture17() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_Capture_16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_Capture_16">
          <path d={svgPaths.p115e8900} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsCapture17 />
    </div>
  );
}

function DlsTabMaximize49() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_TabMaximize_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_TabMaximize_48">
          <path d={svgPaths.pae9fa80} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsTabMaximize49 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-start p-[10px] relative shrink-0" data-name="Icons">
      <Icons3 />
      <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-4 text-[#d6d6d6] text-[15px] text-center">
        <p className="leading-[20px]">1:1</p>
      </div>
      <Icons4 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-black h-10 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-2 border-neutral-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-10 items-center justify-between pl-3 pr-0.5 py-0 relative w-full">
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(214,214,214,0.8)] text-center text-nowrap">
            <p className="leading-[20px] whitespace-pre">Interventional Workspace</p>
          </div>
          <Icons5 />
        </div>
      </div>
    </div>
  );
}

function Viewport() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1043px] items-start justify-start left-0.5 top-0.5 w-[1414px]" data-name="Viewport">
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
      <Header1 />
      <div className="bg-center bg-contain bg-no-repeat h-[1003px] shrink-0 w-full" data-name="Viewport content" style={{ backgroundImage: `url('${imgViewportContent}')` }} />
    </div>
  );
}

function ViewportLeftBottom() {
  return (
    <div className="h-[1047px] relative shrink-0 w-[1418px]" data-name="Viewport_left bottom">
      <Viewport />
    </div>
  );
}

function DlsCapture18() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_Capture_16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_Capture_16">
          <path d={svgPaths.p115e8900} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons6() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsCapture18 />
    </div>
  );
}

function DlsTabMaximize50() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_TabMaximize_48">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="DLS_TabMaximize_48">
          <path d={svgPaths.pae9fa80} fill="var(--fill-0, #D6D6D6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icons7() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsTabMaximize50 />
    </div>
  );
}

function Icons8() {
  return (
    <div className="box-border content-stretch flex gap-4 items-start justify-end p-[10px] relative shrink-0" data-name="Icons">
      <Icons6 />
      <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-4 text-[#d6d6d6] text-[15px] text-center">
        <p className="leading-[20px]">1:1</p>
      </div>
      <Icons7 />
    </div>
  );
}

function Header2() {
  return (
    <div className="bg-black h-10 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-2 border-neutral-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-10 items-center justify-between pl-3 pr-0.5 py-0 relative w-full">
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(214,214,214,0.8)] text-center text-nowrap">
            <p className="leading-[20px] whitespace-pre">Hemo</p>
          </div>
          <Icons8 />
        </div>
      </div>
    </div>
  );
}

function StudyStateIcon1() {
  return (
    <div className="relative shrink-0 size-8" data-name="Study state icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Study state icon">
          <path clipRule="evenodd" d={svgPaths.p34f96a00} fill="var(--fill-0, #41C9FE)" fillRule="evenodd" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function PatientName1() {
  return (
    <div className="content-stretch flex gap-3 items-start justify-start overflow-clip relative shrink-0" data-name="Patient Name">
      <StudyStateIcon1 />
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap">
        <p className="leading-[36px] whitespace-pre">DOE, Jane</p>
      </div>
    </div>
  );
}

function PatientId1() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic overflow-clip relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap w-[209px]" data-name="Patient ID">
      <div className="flex flex-col justify-center opacity-[0.497] relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">Patient ID</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[24px] text-nowrap whitespace-pre">2345412</p>
      </div>
    </div>
  );
}

function Dob1() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic overflow-clip relative shrink-0 text-[#d6d6d6] text-[20px]" data-name="DOB">
      <div className="flex flex-col h-8 justify-center opacity-[0.497] relative shrink-0 w-12">
        <p className="leading-[24px]">DOB</p>
      </div>
      <div className="relative shrink-0 w-[181px]">
        <p className="leading-[24px]">12-Apr-1949 (74y)</p>
      </div>
    </div>
  );
}

function LiveXrayPatientBar1() {
  return (
    <div className="bg-neutral-900 h-10 relative shrink-0 w-full" data-name="LiveXrayPatientBar">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[50px] h-10 items-center justify-center px-6 py-0.5 relative w-full">
          <PatientName1 />
          <PatientId1 />
          <Dob1 />
        </div>
      </div>
    </div>
  );
}

function ViewportHemo() {
  return (
    <div className="content-stretch flex flex-col h-[1058px] items-start justify-start relative shrink-0 w-[1413px]" data-name="Viewport-HEMO">
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
      <Header2 />
      <LiveXrayPatientBar1 />
      <div className="basis-0 bg-[0%_125.56%] bg-no-repeat bg-size-[100%_102.3%] grow min-h-px min-w-px relative shrink-0 w-full" data-name="Viewport content" style={{ backgroundImage: `url('${imgViewportContent1}')` }}>
        <div aria-hidden="true" className="absolute border border-[#3b3b3b] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function RightSide1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[2105px] items-start justify-between mr-[-153px] relative shrink-0" data-name="Right side">
      <ViewportLeftBottom />
      <ViewportHemo />
    </div>
  );
}

function FlexVisionIr() {
  return (
    <div className="bg-black box-border content-start flex flex-wrap items-start justify-between overflow-clip pl-0 pr-[153px] py-0 relative shrink-0 w-full" data-name="FlexVision-IR">
      <Group64 />
      <Group160 />
      <ViewportIr />
      <RightSide1 />
    </div>
  );
}

export default function Component055FlexvisionStartProcedure() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-2.5 items-start justify-start relative size-full" data-name="055. Flexvision-StartProcedure">
      <FlexVisionIr />
      <div className="absolute font-['CentraleSans:Bold',_sans-serif] h-[87px] leading-[0] left-[2882.5px] not-italic text-[64px] text-white top-[556.5px] w-[84px]">
        <p className="leading-[normal]">CT</p>
      </div>
    </div>
  );
}