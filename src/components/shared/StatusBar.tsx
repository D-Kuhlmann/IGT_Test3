import imgImage2 from "figma:asset/2a97af415690c33899ec327cbd66050b75adba61.png";
import imgRectangle10 from "figma:asset/c9086bd51fc782e98eaacdee902113f255daaed2.png";
import imgRectangle11 from "figma:asset/0aa26374bbdf16857809de604ec48e1e0389d7d8.png";
import imgRectangle12 from "figma:asset/6db7f8b1b112d0b9a9945d819dc6319570b02c6d.png";
import imgRectangle13 from "figma:asset/fe558658e6b0596a10cdf774759a838bea1b9470.png";
import imgRectangle14 from "figma:asset/0af03daee20e24daa5d9333f76cda7130f909051.png";
import imgRectangle15 from "figma:asset/f335dd870d73d3a3a42625b146863522001a070f.png";
import imgRectangle16 from "figma:asset/a05764f1b689ed6937d133abf58e8584fe89dd5d.png";
import imgImage11 from "figma:asset/9658092021be4f26ecf8b1d1daa7d9530ccdde74.png";
import { imgExposureLabel, imgDlsTiltAngle48, imgSmartMask1, imgCropSquare, img1Icons24VesselNavigatorPlanning, imgDlsStopwatch48 } from "../../imports/svg-6n20x";
import { useDateTime } from "../../hooks/useDateTime";
import { formatTimeWithAMPM } from "../../utils/helpers";
import { useAutomation } from "../../contexts/AutomationContext";
import iconVoiceActivated from "../../assets/AutomationIcons/AuVoiceEnable.svg";
import iconCollimationActivated from "../../assets/AutomationIcons/AUAutoCollimationActivated.svg";
import iconSmartMaskActivated from "../../assets/AutomationIcons/AuSmartMaskActivated.svg";
import iconAutoZoomActivated from "../../assets/AutomationIcons/AuAutoZoomActivated.svg";
import iconDetectorMoveActivated from "../../assets/AutomationIcons/AuDetectormoveActivated.svg";
import iconSmartCenteringActivated from "../../assets/AutomationIcons/AuSmartCenteringActivated.svg";
import iconPuffFreezeActivated from "../../assets/AutomationIcons/AuPuffFreezeActivated.svg";

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pl-4 pr-8 py-3 relative shrink-0 w-full">
      <div className="bg-center bg-contain bg-no-repeat h-[40px] shrink-0 w-[44px]" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
    </div>
  );
}

function SystemState() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full py-4" data-name="System state">
      <Frame4 />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-full" />
    </div>
  );
}

function ExposureLabel() {
  return (
    <div className="relative shrink-0 size-12" data-name="ExposureLabel">
      <img className="block max-w-none size-full" src={imgExposureLabel} />
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
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full py-4" data-name="Section 2">
      <ExposureParameters />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-full mt-4" />
    </div>
  );
}

function Positions() {
  return (
    <div className="flex items-baseline justify-between leading-[0] relative shrink-0 text-nowrap w-full" data-name="Positions">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[30px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">LAO</p>
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] relative shrink-0 text-[#b0b0b0] text-[34px] text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[34px] text-nowrap whitespace-pre">0ᵒ</p>
      </div>
    </div>
  );
}

function Positions1() {
  return (
    <div className="flex items-baseline justify-between leading-[0] relative shrink-0 text-nowrap w-full" data-name="Positions">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[30px] text-[dimgrey]">
        <p className="leading-[34px] text-nowrap whitespace-pre">CRAN</p>
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] relative shrink-0 text-[#b0b0b0] text-[34px] text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[34px] text-nowrap whitespace-pre">0ᵒ</p>
      </div>
    </div>
  );
}

function ValueAndUnit3() {
  return (
    <div className="flex flex-col items-end">
      <span className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>117</span>
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">cm</span>
    </div>
  );
}

function Positions2() {
  return (
    <div className="flex items-baseline justify-between leading-[0] relative shrink-0 text-nowrap w-full" data-name="Positions">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[30px] text-[dimgrey]">
        <p className="leading-[34px] whitespace-pre">SID</p>
      </div>
      <ValueAndUnit3 />
    </div>
  );
}

function ValueAndUnit4() {
  return (
    <div className="flex flex-col items-end">
      <span className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>11.6</span>
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">inch</span>
    </div>
  );
}

function Positions3() {
  return (
    <div className="flex items-baseline justify-between leading-[0] relative shrink-0 text-nowrap w-full" data-name="Positions">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[30px] text-[dimgrey]">
        <p className="leading-[34px] whitespace-pre">FD</p>
      </div>
      <ValueAndUnit4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start w-full">
      <Positions />
      <Positions1 />
      <Positions2 />
      <Positions3 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full py-4" data-name="Section 3">
      <Frame6 />
      <div className="bg-[#4d4d4d] h-px w-full mt-4" />
    </div>
  );
}

function DlsTiltAngle48() {
  return (
    <div className="relative shrink-0 size-10" data-name="DLS_TiltAngle_48">
      <img className="block max-w-none size-full" src={imgDlsTiltAngle48} />
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
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] leading-[0] relative shrink-0 text-[#b0b0b0] text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
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
    <div className="flex flex-col items-center justify-center gap-2 shrink-0" data-name="Angle values">
      <div className="w-10 h-10">
        <img className="block size-full object-contain" src={imgDlsTiltAngle48} />
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        0°
      </div>
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
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] leading-[0] relative shrink-0 text-[#b0b0b0] text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
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
    <div className="flex flex-col items-center justify-center gap-2 shrink-0" data-name="Angle values">
      <div className="w-10 h-10 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${imgRectangle10}')` }} />
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        0°
      </div>
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
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] leading-[0] relative shrink-0 text-[#b0b0b0] text-[0px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
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
    <div className="flex flex-col items-center justify-center gap-2 shrink-0" data-name="Angle values">
      <div className="w-10 h-10 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${imgRectangle11}')` }} />
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        0°
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex gap-8 items-center justify-center w-full py-1">
      <AngleValues />
      <AngleValues1 />
      <AngleValues2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="flex flex-col items-center justify-center w-full" data-name="Section 4">
      <div className="py-4">
        <Frame10 />
      </div>
      <div className="bg-[#4d4d4d] h-px shrink-0 w-full" />
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
    <div className="flex flex-col items-center justify-center gap-2 shrink-0" data-name="Table positions">
      <div className="w-10 h-10 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${imgRectangle12}')` }} />
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">-9</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">cm</span>
      </div>
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
    <div className="flex flex-col items-center justify-center gap-2 shrink-0" data-name="Table positions">
      <div className="w-10 h-10 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${imgRectangle13}')` }} />
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">-53</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">cm</span>
      </div>
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
    <div className="flex flex-col items-center justify-center gap-2 shrink-0" data-name="Table positions">
      <div className="w-10 h-10 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">13</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">cm</span>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex gap-8 items-center justify-center w-full py-1">
      <TablePositions />
      <TablePositions1 />
      <TablePositions2 />
    </div>
  );
}

function Section5() {
  return (
    <div className="flex flex-col items-center justify-center w-full" data-name="Section 5">
      <div className="py-4">
        <Frame11 />
      </div>
      <div className="bg-[#4d4d4d] h-px shrink-0 w-full" />
    </div>
  );
}

function LeftCoronary() {
  return (
    <div className="flex items-center justify-start w-full" data-name="Left Coronary">
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[24px] leading-[28px]">Left Coronary</span>
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
    <div className="flex items-center justify-between w-full" data-name="Positions">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">15</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">fps</span>
      </div>
    </div>
  );
}

function Positions5() {
  return (
    <div className="flex items-center justify-between w-full" data-name="Positions">
      <div className="bg-center bg-contain bg-no-repeat shrink-0 size-10" style={{ backgroundImage: `url('${imgRectangle16}')` }} />
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">Low</span>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Positions4 />
      <Positions5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LeftCoronary />
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex flex-col items-center w-full py-4">
      <Frame13 />
      <div className="bg-[#4d4d4d] h-px shrink-0 w-full mt-4" />
    </div>
  );
}

function LeftCoronary1() {
  return (
    <div className="bg-[#191919] flex items-center px-2 py-1 w-full" data-name="Left Coronary">
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[24px] leading-[28px]">Left Coronary</span>
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
    <div className="flex items-center justify-end w-full" data-name="Positions">
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">119</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">min</span>
      </div>
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
    <div className="flex items-center justify-between w-full" data-name="Positions">
      <div className="flex items-center gap-2">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[24px] leading-[28px]">K</span>
        <div className="w-8 h-8 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${imgImage11}')` }} />
      </div>
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">00</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">mm</span>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Positions6 />
      <Positions7 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LeftCoronary1 />
      <Frame46 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex flex-col items-center w-full py-4">
      <Frame47 />
    </div>
  );
}

function LeftCoronary2() {
  return (
    <div className="bg-[#191919] flex items-center px-2 py-1 w-full" data-name="Left Coronary">
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[24px] leading-[28px]">K Rate</span>
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
    <div className="flex items-center justify-end w-full" data-name="Positions">
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">119</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">min</span>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="flex flex-col w-full">
      <Positions8 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LeftCoronary2 />
      <Frame49 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="flex flex-col items-center w-full py-4">
      <Frame50 />
    </div>
  );
}

function LeftCoronary3() {
  return (
    <div className="bg-[#191919] flex items-center px-2 py-1 w-full" data-name="Left Coronary">
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[24px] leading-[28px]">Fluoroscopy Time</span>
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
    <div className="flex items-center justify-end w-full" data-name="Positions">
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">0.0</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">min</span>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="flex flex-col w-full">
      <Positions9 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LeftCoronary3 />
      <Frame52 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex flex-col items-center w-full py-4">
      <Frame53 />
    </div>
  );
}

function LeftCoronary4() {
  return (
    <div className="bg-[#191919] flex items-center px-2 py-1 w-full" data-name="Left Coronary">
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[24px] leading-[28px]">Total K</span>
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
    <div className="flex items-center justify-end w-full" data-name="Positions">
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">2.80</span>
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1">min</span>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-end justify-start leading-[0] pb-[9px] pt-0 px-0 right-[-2px] text-nowrap text-right top-0">
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] mb-[-9px] not-italic relative shrink-0 text-[#b0b0b0] text-[34px]">
        <p className="leading-[34px] text-nowrap whitespace-pre">0.591</p>
      </div>
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] mb-[-9px] relative shrink-0 text-[20px] text-[dimgrey]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
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
    <div className="flex items-baseline justify-between w-full" data-name="Positions">
      <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[24px] text-[dimgrey] leading-[28px]">DAP</span>
      <div className="flex flex-col items-end">
        <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[34px] leading-[34px]">0.591</span>
        <span className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] text-[dimgrey] text-[14px] leading-[14px] mt-1" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>Gy-cm²</span>
      </div>
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

function SmartMask1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[18px] relative size-12" data-name="SmartMask 1">
      <img className="block max-w-none size-full" src={imgSmartMask1} />
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
      <img className="block max-w-none size-full" src={imgCropSquare} />
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
      <img className="block max-w-none size-full" src={img1Icons24VesselNavigatorPlanning} />
    </div>
  );
}

function DDlsTsmTestFindings() {
  return (
    <div className="absolute contents inset-[4.167%]" data-name="dDLS-TSM-Test-findings">
      <Component1Icons24VesselNavigatorPlanning />
    </div>
  );
}

function VesselNavigatorPlanning1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-5 overflow-clip relative size-[49px]" data-name="Vessel Navigator Planning 1">
      <DDlsTsmTestFindings />
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
    <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0">
      <Group87 />
      <Group88 />
      <Group89 />
    </div>
  );
}

function DlsStopwatch48() {
  return (
    <div className="[grid-area:1_/_1] h-[33.525px] ml-0 mt-0 relative w-[30px]" data-name="DLS_Stopwatch_48">
      <img className="block max-w-none size-full" src={imgDlsStopwatch48} />
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
  const { currentTime } = useDateTime();
  const currentTimeFormatted = formatTimeWithAMPM(new Date());

  return (
    <div className="box-border content-stretch flex gap-20 items-end justify-start leading-[0] pl-[60px] pr-0 py-0 relative shrink-0" data-name="for-ppt">
      <CorFvViewingOverview />
      <div className="font-['CentraleSansCnd:Medium',_sans-serif] not-italic relative shrink-0 text-[#b0b0b0] text-[34px] text-nowrap text-right">
        <p className="leading-[34px] whitespace-pre">{currentTimeFormatted}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center justify-start relative shrink-0">
      <div className="bg-[#4d4d4d] h-px shrink-0 w-full" />
      <ForPpt />
    </div>
  );
}

function ActiveAutomationIcons() {
  const { automationState } = useAutomation();
  
  const automationIcons = {
    voice: iconVoiceActivated,
    collimation: iconCollimationActivated,
    smartMask: iconSmartMaskActivated,
    autoZoom: iconAutoZoomActivated,
    detectorMove: iconDetectorMoveActivated,
    smartCentering: iconSmartCenteringActivated,
    puffFreeze: iconPuffFreezeActivated
  };
  
  const activeIcons = Object.entries(automationState)
    .filter(([_, isActive]) => isActive)
    .map(([key]) => automationIcons[key as keyof typeof automationIcons]);
  
  if (activeIcons.length === 0) return null;
  
  // Split into rows of 3
  const rows: string[][] = [];
  for (let i = 0; i < activeIcons.length; i += 3) {
    rows.push(activeIcons.slice(i, i + 3));
  }
  
  return (
    <div className="flex flex-col gap-3 w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-8 items-center justify-center w-full">
          {row.map((icon, iconIndex) => (
            <div key={iconIndex} className="w-16 h-16">
              <img src={icon} alt="Automation" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function StatusBar() {
  const { currentTime } = useDateTime();
  
  return (
    <div className="bg-[#050505] relative h-full overflow-hidden" data-name="Status bar" style={{width: '160px'}}>
      <div className="origin-top-left h-[200%]" style={{width: '300px', transform: 'scale(0.5)'}}>
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-between px-4 py-[22px] relative size-full">
            {/* Top aligned group */}
            <div className="flex flex-col items-center w-full">
              <SystemState />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
            </div>
            
            {/* Bottom aligned group */}
            <div className="flex flex-col items-center w-full">
              <div className="bg-[#4d4d4d] h-px shrink-0 w-full" />
              <div className="py-4 w-full">
                <ActiveAutomationIcons />
              </div>
              <div className="bg-[#4d4d4d] h-px shrink-0 w-full" />
              <Frame15 />
              <Frame16 />
              <Frame18 />
              <Frame19 />
              <Frame20 />
              <div className="flex items-center gap-2 w-full justify-center py-4">
                <svg className="w-6 h-6" fill="#b0b0b0" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span className="font-['CentraleSansCnd:Medium',_sans-serif] text-[#b0b0b0] text-[28px] leading-[28px]">{currentTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}