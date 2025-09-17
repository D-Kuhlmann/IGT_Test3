import imgImage2 from "figma:asset/2a97af415690c33899ec327cbd66050b75adba61.png";
import imgRectangle10 from "figma:asset/c9086bd51fc782e98eaacdee902113f255daaed2.png";
import imgRectangle11 from "figma:asset/0aa26374bbdf16857809de604ec48e1e0389d7d8.png";
import imgRectangle12 from "figma:asset/6db7f8b1b112d0b9a9945d819dc6319570b02c6d.png";
import imgRectangle13 from "figma:asset/fe558658e6b0596a10cdf774759a838bea1b9470.png";
import imgRectangle14 from "figma:asset/0af03daee20e24daa5d9333f76cda7130f909051.png";
import imgRectangle15 from "figma:asset/f335dd870d73d3a3a42625b146863522001a070f.png";
import imgRectangle16 from "figma:asset/a05764f1b689ed6937d133abf58e8584fe89dd5d.png";
import imgImage11 from "figma:asset/9658092021be4f26ecf8b1d1daa7d9530ccdde74.png";
import { imgExposureLabel, imgDlsTiltAngle48, imgDlsStopwatch48, imgSmartMask1, imgCropSquare, img1Icons24VesselNavigatorPlanning } from "./svg-ce07v";

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
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] relative shrink-0 text-[#b0b0b0] text-[34px] text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
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
      <div className="font-['CentraleSansCnd:Medium',_'Noto_Sans:Regular',_sans-serif] relative shrink-0 text-[#b0b0b0] text-[34px] text-right" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
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
    <div className="absolute bg-[#050505] h-[2104px] left-0 top-0 w-[308px]" data-name="Status bar">
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
    <div className="absolute content-stretch flex gap-10 items-start justify-start left-[31px] top-[1906px]">
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
      <Group87 />
      <Group88 />
      <Group89 />
    </div>
  );
}

export default function Group160() {
  return (
    <div className="relative size-full">
      <StatusBar />
      <Frame302 />
    </div>
  );
}