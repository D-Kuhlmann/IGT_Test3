import React, { useState } from "react";
import imgImage1 from "figma:asset/82f7f32e258c1f3564c6028958e44e4ec5476529.png";
import imgCoronal from "figma:asset/4c8bbf83fe02a6ff097b8e4c2200db41b8b53782.png";
import imgImage2 from "figma:asset/71dabdc7502548dbc0e7e3fc8521d3ad4a8010af.png";
import imgImage3 from "figma:asset/db228b80ad186ca3d5adc278aa560e86a0eda3b7.png";
import imgAxial from "figma:asset/d7258c707bf99e6cc2fdd9e2b612b0b00247fc8f.png";
import imgImage4 from "figma:asset/7ece7bb00a5e8eaa345a0ea283f6a6bc424b0ef3.png";
import imgSagittal from "figma:asset/c12d087aa3c301b81e74e12cfc43dd149178b7a0.png";
import imgUntitled11 from "figma:asset/0f0384f86d80f261ddeb017dcfe5c3bd1140e4e8.png";
import { imgDlsCapture16, imgDlsTabMaximize48, imgImageInformation, imgLeft, imgBottom, imgRight, imgEye, imgContent, imgSeparator, imgIcon, imgIcon1, imgIcon2, imgIcon3, imgIcon4, imgCollapse, imgIconsTaskSeries24, imgIconsTaskPlanning24, imgIconsTaskLive24, imgTitle, imgVector1, imgCheckbox, imgIcon5, imgPath, imgVector2, imgPhilipsWordmark2, imgDlsPatientAcquisition24, imgIcon6, imgIcon7 } from "./svg-f5yzw";

function DlsCapture16() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_Capture_16">
      <img className="block max-w-none size-full" src={imgDlsCapture16} />
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
      <img className="block max-w-none size-full" src={imgDlsTabMaximize48} />
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
    <div className="box-border content-stretch flex gap-4 items-center justify-start p-[10px] relative shrink-0" data-name="Icons">
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
            <p className="leading-[20px] whitespace-pre">Interventional Workspace</p>
          </div>
          <Icons2 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return <div className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" data-name="Image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />;
}

function Content() {
  return (
    <div className="absolute bg-black box-border content-stretch flex flex-col gap-2.5 inset-0 items-start justify-start p-[2px]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <Image1 />
    </div>
  );
}

function OrientationIndicator() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[4px] relative shrink-0" data-name="Orientation indicator">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-20" data-name="Coronal" style={{ backgroundImage: `url('${imgCoronal}')` }} />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-1.5 h-[22px] items-center justify-end relative shrink-0" data-name="Label">
      <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
        <p className="leading-[22px] whitespace-pre">Rot 0˚ Ang 0˚</p>
      </div>
    </div>
  );
}

function Orientation() {
  return (
    <div className="content-stretch flex flex-col items-end justify-start relative shrink-0" data-name="Orientation">
      <Label6 />
    </div>
  );
}

function BottomRight() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-1 items-end justify-end p-[12px] right-0" data-name="Bottom right">
      <OrientationIndicator />
      <Orientation />
    </div>
  );
}

function ImageInformation() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Image information">
      <BottomRight />
    </div>
  );
}

function DlsRotateStepRight48() {
  return <img className="block max-w-none size-full" src={imgImageInformation} />;
}

function Left() {
  return (
    <div className="absolute bg-black left-2 size-6 translate-y-[-50%]" data-name="Left" style={{ top: "calc(50% + 0.5px)" }}>
      <DlsRotateStepRight48 />
    </div>
  );
}

function DlsRotateStepUp48() {
  return <img className="block max-w-none size-full" src={imgLeft} />;
}

function Bottom() {
  return (
    <div className="absolute bg-black bottom-2 size-6 translate-x-[-50%]" data-name="Bottom" style={{ left: "calc(50% + 0.5px)" }}>
      <DlsRotateStepUp48 />
    </div>
  );
}

function DlsRotateStepLeft48() {
  return <img className="block max-w-none size-full" src={imgBottom} />;
}

function Right() {
  return (
    <div className="absolute bg-black right-2 size-6 translate-y-[-50%]" data-name="Right" style={{ top: "calc(50% + 0.5px)" }}>
      <DlsRotateStepLeft48 />
    </div>
  );
}

function DlsRotateStepDown48() {
  return <img className="block max-w-none size-full" src={imgRight} />;
}

function Top() {
  return (
    <div className="absolute bg-black size-6 top-2 translate-x-[-50%]" data-name="Top" style={{ left: "calc(50% + 0.5px)" }}>
      <DlsRotateStepDown48 />
    </div>
  );
}

function RotationButtons() {
  return (
    <div className="absolute inset-0" data-name="Rotation buttons">
      <Left />
      <Bottom />
      <Right />
      <Top />
    </div>
  );
}

function ViewContainer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 1">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <Content />
      <ImageInformation />
      <RotationButtons />
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-start left-0 top-0" data-name="Left" style={{ right: "calc(16.667% + 181.333px)" }}>
      <ViewContainer1 />
    </div>
  );
}

function Image2() {
  return <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" data-name="Image 1" style={{ backgroundImage: `url('${imgImage2}')` }} />;
}

function Content1() {
  return (
    <div className="absolute bg-black bottom-[-0.33px] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 p-[2px] right-0 top-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Image2 />
    </div>
  );
}

function OrientationIndicator1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[4px] relative shrink-0" data-name="Orientation indicator">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-20" data-name="Coronal" style={{ backgroundImage: `url('${imgCoronal}')` }} />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-1.5 h-[22px] items-center justify-end relative shrink-0" data-name="Label">
      <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
        <p className="leading-[22px] whitespace-pre">{`Rot 0˚ Ang 0˚ `}</p>
      </div>
    </div>
  );
}

function Orientation1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-start relative shrink-0" data-name="Orientation">
      <Label13 />
    </div>
  );
}

function BottomRight1() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-1 items-end justify-end p-[12px] right-0" data-name="Bottom right">
      <OrientationIndicator1 />
      <Orientation1 />
    </div>
  );
}

function ImageInformation1() {
  return (
    <div className="absolute bottom-[-0.33px] left-0 overflow-clip right-0 top-0" data-name="Image information">
      <BottomRight1 />
    </div>
  );
}

function Line1() {
  return <div className="basis-0 bg-[#63a2ff] grow h-px min-h-px min-w-px shrink-0" />;
}

function Line3() {
  return (
    <div className="basis-0 content-stretch flex grow h-4 items-center justify-start min-h-px min-w-px relative shrink-0">
      <Line1 />
    </div>
  );
}

function VerticalLine() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-center opacity-70 relative size-full" data-name="Vertical line">
      {[...Array(2).keys()].map((_, i) => (
        <Line3 key={i} />
      ))}
    </div>
  );
}

function Line5() {
  return <div className="basis-0 bg-[#ff8370] grow h-px min-h-px min-w-px shrink-0" />;
}

function Line6() {
  return (
    <div className="basis-0 content-stretch flex grow h-4 items-center justify-start min-h-px min-w-px relative shrink-0">
      <Line5 />
    </div>
  );
}

function HorizontalLine() {
  return (
    <div className="absolute content-stretch flex gap-4 h-4 items-center justify-center left-1 opacity-70 right-1 top-1/2 translate-y-[-50%]" data-name="Horizontal line">
      {[...Array(2).keys()].map((_, i) => (
        <Line6 key={i} />
      ))}
    </div>
  );
}

function Indicator() {
  return <div className="absolute bg-[#23cc72] bottom-3 h-4 left-3 opacity-70 w-2" data-name="Indicator" />;
}

function ReferenceLines() {
  return (
    <div className="absolute bottom-[-0.33px] left-0 right-0 top-0" data-name="Reference lines">
      <div className="absolute bottom-1 flex items-center justify-center top-1 translate-x-[-50%] w-4" style={{ left: "calc(50% + 0.5px)" }}>
        <div className="flex-none h-4 rotate-[270deg] w-[292px]">
          <VerticalLine />
        </div>
      </div>
      <HorizontalLine />
      <Indicator />
    </div>
  );
}

function ViewContainer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 2">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Content1 />
      <ImageInformation1 />
      <ReferenceLines />
    </div>
  );
}

function Image3() {
  return <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" data-name="Image 1" style={{ backgroundImage: `url('${imgImage3}')` }} />;
}

function Content2() {
  return (
    <div className="absolute bg-black bottom-[-0.33px] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 p-[2px] right-0 top-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#383838] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Image3 />
    </div>
  );
}

function OrientationIndicator2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[4px] relative shrink-0" data-name="Orientation indicator">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-20" data-name="Axial" style={{ backgroundImage: `url('${imgAxial}')` }} />
    </div>
  );
}

function Label20() {
  return (
    <div className="content-stretch flex gap-1.5 h-[22px] items-center justify-end relative shrink-0" data-name="Label">
      <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
        <p className="leading-[22px] whitespace-pre">Rot 0˚ Ang 90˚</p>
      </div>
    </div>
  );
}

function Orientation2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-start relative shrink-0" data-name="Orientation">
      <Label20 />
    </div>
  );
}

function BottomRight2() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-1 items-end justify-end p-[12px] right-0" data-name="Bottom right">
      <OrientationIndicator2 />
      <Orientation2 />
    </div>
  );
}

function ImageInformation2() {
  return (
    <div className="absolute bottom-[-0.33px] left-0 overflow-clip right-0 top-0" data-name="Image information">
      <BottomRight2 />
    </div>
  );
}

function Indicator1() {
  return <div className="absolute bg-[#ff8370] bottom-3 h-4 left-3 opacity-70 w-2" data-name="Indicator" />;
}

function ReferenceLines1() {
  return (
    <div className="absolute bottom-[-0.33px] left-0 right-0 top-0" data-name="Reference lines">
      <Indicator1 />
    </div>
  );
}

function ViewContainer3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 3">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Content2 />
      <ImageInformation2 />
      <ReferenceLines1 />
    </div>
  );
}

function Image4() {
  return <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" data-name="Image 1" style={{ backgroundImage: `url('${imgImage4}')` }} />;
}

function Content3() {
  return (
    <div className="absolute bg-black bottom-[-0.33px] box-border content-stretch flex flex-col gap-2.5 items-start justify-start left-0 p-[2px] right-0 top-0" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Image4 />
    </div>
  );
}

function OrientationIndicator3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[4px] relative shrink-0" data-name="Orientation indicator">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-20" data-name="Sagittal" style={{ backgroundImage: `url('${imgSagittal}')` }} />
    </div>
  );
}

function Label27() {
  return (
    <div className="content-stretch flex gap-1.5 h-[22px] items-center justify-end relative shrink-0" data-name="Label">
      <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
        <p className="leading-[22px] whitespace-pre">Rot 90˚ Ang 0˚</p>
      </div>
    </div>
  );
}

function Orientation3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-start relative shrink-0" data-name="Orientation">
      <Label27 />
    </div>
  );
}

function BottomRight3() {
  return (
    <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-1 items-end justify-end p-[12px] right-0" data-name="Bottom right">
      <OrientationIndicator3 />
      <Orientation3 />
    </div>
  );
}

function ImageInformation3() {
  return (
    <div className="absolute bottom-[-0.33px] left-0 overflow-clip right-0 top-0" data-name="Image information">
      <BottomRight3 />
    </div>
  );
}

function Indicator2() {
  return <div className="absolute bg-[#ff8370] bottom-3 h-4 left-3 opacity-70 w-2" data-name="Indicator" />;
}

function ReferenceLines2() {
  return (
    <div className="absolute bottom-[-0.33px] left-0 right-0 top-0" data-name="Reference lines">
      <Indicator2 />
    </div>
  );
}

function ViewContainer4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="View container 4">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      <Content3 />
      <ImageInformation3 />
      <ReferenceLines2 />
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-start right-0 top-0" data-name="Right" style={{ left: "calc(66.667% + 0.333px)" }}>
      <ViewContainer2 />
      <ViewContainer3 />
      <ViewContainer4 />
    </div>
  );
}

function ViewArea() {
  return (
    <div className="absolute bottom-0 left-[324px] right-0 top-[104px]" data-name="View area">
      <Left1 />
      <Right1 />
    </div>
  );
}

function ViewArea1() {
  return (
    <div className="absolute bottom-0 contents left-[324px] right-0 top-[104px]" data-name="View area">
      <ViewArea />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-6" data-name="Eye">
      <img className="block max-w-none size-full" src={imgEye} />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start overflow-clip relative shrink-0" data-name="Content">
      <Eye />
    </div>
  );
}

function DlsArrowDown25() {
  return <img className="block max-w-none size-full" src={imgContent} />;
}

function Arrow1() {
  return (
    <div className="absolute right-1 size-6 top-1/2 translate-y-[-50%]" data-name="Arrow">
      <DlsArrowDown25 />
    </div>
  );
}

function View() {
  return (
    <div className="box-border content-stretch flex gap-3 h-10 items-center justify-start min-w-[68px] pl-3 pr-1 py-2 relative rounded-[2px] shrink-0" data-name="View">
      <Content5 />
      <Arrow1 />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-10 relative shrink-0 w-px" data-name="Separator">
      <img className="block max-w-none size-full" src={imgSeparator} />
    </div>
  );
}

function Separator1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start px-1 py-0 relative shrink-0" data-name="Separator">
      <Separator />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function Zoom() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Zoom" style={{ display: 'none' }}>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon1} />
    </div>
  );
}

function Pan() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Pan" style={{ display: 'none' }}>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function ContrastBrightness() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Contrast Brightness" style={{ display: 'none' }}>
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start overflow-clip relative shrink-0" data-name="Content">
      <Icon3 />
    </div>
  );
}

function DlsArrowDown26() {
  return <img className="block max-w-none size-full" src={imgContent} />;
}

function Arrow2() {
  return (
    <div className="absolute right-1 size-6 top-1/2 translate-y-[-50%]" data-name="Arrow">
      <DlsArrowDown26 />
    </div>
  );
}

function Rotate() {
  return (
    <div className="box-border content-stretch flex gap-3 h-10 items-center justify-start min-w-[68px] pl-3 pr-1 py-2 relative rounded-[2px] shrink-0" data-name="Rotate" style={{ display: 'none' }}>
      <Content6 />
      <Arrow2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon2} />
    </div>
  );
}

function Annotate() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Annotate" style={{ display: 'none' }}>
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon3} />
    </div>
  );
}

function QuickMeasurement() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Quick Measurement" style={{ display: 'none' }}>
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon4} />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start overflow-clip relative shrink-0" data-name="Content">
      <Icon6 />
    </div>
  );
}

function DlsArrowDown27() {
  return <img className="block max-w-none size-full" src={imgContent} />;
}

function Arrow3() {
  return (
    <div className="absolute right-1 size-6 top-1/2 translate-y-[-50%]" data-name="Arrow">
      <DlsArrowDown27 />
    </div>
  );
}

function Presets() {
  return (
    <div className="box-border content-stretch flex gap-3 h-10 items-center justify-start min-w-[68px] pl-3 pr-1 py-2 relative rounded-[2px] shrink-0" data-name="Presets" style={{ display: 'none' }}>
      <Content7 />
      <Arrow3 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="basis-0 bg-neutral-900 grow min-h-px min-w-px relative shrink-0" data-name="Toolbar">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-1 items-center justify-start px-2 py-1 relative w-full">
          <View />
          <Separator1 />
          <Zoom />
          <Pan />
          <ContrastBrightness />
          <Rotate />
          <Separator1 />
          <Annotate />
          <QuickMeasurement />
          <Separator1 />
          <Presets />
          <Separator1 />
        </div>
      </div>
    </div>
  );
}

function Toolbar1() {
  return (
    <div className="absolute content-stretch flex h-12 items-start justify-start left-[324px] right-0 top-14" data-name="Toolbar">
      <Toolbar />
    </div>
  );
}

function Collapse() {
  return (
    <div className="relative shrink-0 size-6" data-name="Collapse">
      <img className="block max-w-none size-full" src={imgCollapse} />
    </div>
  );
}

function ActionIcons() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-end relative shrink-0" data-name="Action Icons">
      <Collapse />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-end px-4 py-3 relative w-full">
          <div className="basis-0 font-['CentraleSans:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Task Guidance</p>
          </div>
          <ActionIcons />
        </div>
      </div>
    </div>
  );
}

function IconsTaskSeries24() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Icons-/-Task_Series_24">
      <img className="block max-w-none size-full" src={imgIconsTaskSeries24} />
    </div>
  );
}

function IconTaskSeries24() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon / TaskSeries_24">
      <IconsTaskSeries24 />
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon Left">
      <IconTaskSeries24 />
    </div>
  );
}

function IconText() {
  return (
    <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Text">
      <IconLeft />
      <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Series</p>
      </div>
    </div>
  );
}

function ListItemIgt() {
  return (
    <div className="h-10 relative shrink-0 w-full" data-name="🟢 List item (IGT)">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-4 h-10 items-center justify-start px-4 py-0 relative w-full">
          <IconText />
        </div>
      </div>
    </div>
  );
}

function IconsTaskPlanning24() {
  return (
    <div className="absolute inset-[4.17%_8.33%_5.21%_8.33%]" data-name="Icons-/-Task_Planning_24">
      <img className="block max-w-none size-full" src={imgIconsTaskPlanning24} />
    </div>
  );
}

function IconTaskPlanning24() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon / TaskPlanning_24">
      <IconsTaskPlanning24 />
    </div>
  );
}

function IconLeft1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon Left">
      <IconTaskPlanning24 />
    </div>
  );
}

function IconText1() {
  return (
    <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Text">
      <IconLeft1 />
      <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Plan</p>
      </div>
    </div>
  );
}

function Task2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-10 relative shrink-0 w-full" data-name="Task 2">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-4 h-10 items-center justify-center px-4 py-0 relative w-full">
          <IconText1 />
          <div className="absolute bg-[#439ac1] bottom-0 left-0 top-0 w-[3px]" data-name="Selection indicator" />
        </div>
      </div>
    </div>
  );
}

function IconsTaskLive24() {
  return (
    <div className="absolute inset-[8.33%_8.33%_2.08%_4.17%]" data-name="Icons-/-Task_Live_24">
      <img className="block max-w-none size-full" src={imgIconsTaskLive24} />
    </div>
  );
}

function IconTaskLive24() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Icon / TaskLive_24">
      <IconsTaskLive24 />
    </div>
  );
}

function IconLeft2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon Left">
      <IconTaskLive24 />
    </div>
  );
}

function IconText2() {
  return (
    <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Text">
      <IconLeft2 />
      <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Live</p>
      </div>
    </div>
  );
}

function Task3() {
  return (
    <div className="h-10 relative shrink-0 w-full" data-name="Task 3">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-4 h-10 items-center justify-center px-4 py-0 relative w-full">
          <IconText2 />
        </div>
      </div>
    </div>
  );
}

function TaskOverview() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-5 pt-0 px-0 relative shrink-0 w-full" data-name="Task overview">
      <ListItemIgt />
      <Task2 />
      <Task3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-6 justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Planning</p>
      </div>
    </div>
  );
}

function DlsNavigationDown24() {
  return <img className="block max-w-none size-full" src={imgTitle} />;
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <DlsNavigationDown24 />
    </div>
  );
}

function Header2({ onToggle }: { onToggle?: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center relative size-full">
        <div 
          className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-3 relative w-full cursor-pointer hover:bg-black/5 transition-colors"
          onClick={onToggle}
        >
          <Frame2 />
          <Icons4 />
        </div>
      </div>
    </div>
  );
}

function Separator8() {
  return (
    <div className="h-[324px] relative w-full" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <img className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    </div>
  );
}

function Expander() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Expander">
      <Header2 onToggle={toggleCollapse} />
      {!isCollapsed && (
        <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "324", "--transform-inner-height": "324", height: "calc(1px * ((var(--transform-inner-width) * 1) + (var(--transform-inner-height) * 0)))" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg] w-full">
            <Separator8 />
          </div>
        </div>
      )}
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Step 1">
      <Expander />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-6 justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Viewing Angles</p>
      </div>
    </div>
  );
}

function DlsNavigationUp24() {
  return <img className="block max-w-none size-full" src={imgTitle} />;
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons">
      <DlsNavigationUp24 />
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-3 relative w-full">
          <Frame3 />
          <Icons5 />
        </div>
      </div>
    </div>
  );
}

function StepsNestedComponentsStandPreviewSmartNav() {
  return (
    <div className="h-[132px] relative shrink-0 w-[200px]" data-name="Steps / Nested components / Stand preview (SmartNav)">
      <div className="absolute bg-center bg-cover bg-no-repeat inset-0" data-name="Untitled-1 1" style={{ backgroundImage: `url('${imgUntitled11}')` }} />
    </div>
  );
}

function StepsNestedComponentsAngleSmartNav() {
  return (
    <div className="h-10 relative shrink-0 w-[292px]" data-name="Steps / Nested components / Angle (SmartNav)">
      <div className="absolute flex flex-col font-['CentraleSans:Book',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#d6d6d6] text-[16px] text-center">
        <p className="leading-[22px]">Rot -180° Ang -180°</p>
      </div>
    </div>
  );
}

function CArmPreview() {
  return (
    <div className="relative shrink-0 w-full" data-name="C-arm preview">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center pb-0 pt-1 px-[100px] relative w-full">
          <StepsNestedComponentsStandPreviewSmartNav />
          <StepsNestedComponentsAngleSmartNav />
        </div>
      </div>
    </div>
  );
}

function ButtonIgt() {
  return (
    <div className="bg-[#1474a4] box-border content-stretch flex gap-2 h-10 items-center justify-center px-4 py-[9px] relative rounded-[2px] shrink-0 w-[292px]" data-name="🟢 Button (IGT)">
      <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Store angle</p>
      </div>
    </div>
  );
}

function StoreAngleButton() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative shrink-0" data-name="Store Angle button">
      <ButtonIgt />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Checkbox">
      <img className="block max-w-none size-full" src={imgCheckbox} />
    </div>
  );
}

function IconText3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap" data-name="Icon + Text">
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Angle 1</p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-[16px] text-nowrap">Rot -180° Ang -180°</p>
      </div>
    </div>
  );
}

function ListItemIgt1() {
  return (
    <div className="box-border content-stretch flex gap-4 h-11 items-center justify-start px-4 py-0 relative shrink-0 w-[324px]" data-name="List item (IGT)">
      <Checkbox3 />
      <IconText3 />
    </div>
  );
}

function StepsNestedComponentsCustomListItemSmartNavMouse() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-start justify-start px-0 py-2 relative shrink-0 w-[324px]" data-name="Steps / Nested components / Custom list item (SmartNav)/Mouse">
      <ListItemIgt1 />
    </div>
  );
}

function StepsNestedComponentsAngleListItemSmartNav() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-[324px]" data-name="Steps / Nested components / Angle list item (SmartNav)">
      <StepsNestedComponentsCustomListItemSmartNavMouse />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Checkbox">
      <img className="block max-w-none size-full" src={imgCheckbox} />
    </div>
  );
}

function IconText4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap" data-name="Icon + Text">
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Angle 2</p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-[16px] text-nowrap">Rot -180° Ang -180°</p>
      </div>
    </div>
  );
}

function ListItemIgt2() {
  return (
    <div className="box-border content-stretch flex gap-4 h-11 items-center justify-start px-4 py-0 relative shrink-0 w-[324px]" data-name="List item (IGT)">
      <Checkbox4 />
      <IconText4 />
    </div>
  );
}

function StepsNestedComponentsCustomListItemSmartNavMouse1() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-start justify-start px-0 py-2 relative shrink-0 w-[324px]" data-name="Steps / Nested components / Custom list item (SmartNav)/Mouse">
      <ListItemIgt2 />
    </div>
  );
}

function StepsNestedComponentsAngleListItemSmartNav1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-[324px]" data-name="Steps / Nested components / Angle list item (SmartNav)">
      <StepsNestedComponentsCustomListItemSmartNavMouse1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon5} />
    </div>
  );
}

function IconText5() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap" data-name="Icon + Text">
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Angle 3</p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-[16px] text-nowrap">Rot -180° Ang -180°</p>
      </div>
    </div>
  );
}

function CloseCrossCircle() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="CloseCrossCircle">
      <div className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath} />
      </div>
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon Right">
      <CloseCrossCircle />
    </div>
  );
}

function ListItemIgt3() {
  return (
    <div className="box-border content-stretch flex gap-4 h-11 items-center justify-start px-4 py-0 relative shrink-0 w-[324px]" data-name="List item (IGT)">
      <Icon7 />
      <IconText5 />
      <IconRight />
    </div>
  );
}

function StepsNestedComponentsCustomListItemSmartNavMouse2() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-start justify-start px-0 py-2 relative shrink-0 w-[324px]" data-name="Steps / Nested components / Custom list item (SmartNav)/Mouse">
      <ListItemIgt3 />
    </div>
  );
}

function StepsNestedComponentsAngleListItemSmartNav2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-[324px]" data-name="Steps / Nested components / Angle list item (SmartNav)">
      <StepsNestedComponentsCustomListItemSmartNavMouse2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon5} />
    </div>
  );
}

function IconText6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap" data-name="Icon + Text">
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Angle 4</p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-[16px] text-nowrap">Rot -180° Ang -180°</p>
      </div>
    </div>
  );
}

function CloseCrossCircle1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="CloseCrossCircle">
      <div className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath} />
      </div>
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon Right">
      <CloseCrossCircle1 />
    </div>
  );
}

function ListItemIgt4() {
  return (
    <div className="box-border content-stretch flex gap-4 h-11 items-center justify-start px-4 py-0 relative shrink-0 w-[324px]" data-name="List item (IGT)">
      <Icon8 />
      <IconText6 />
      <IconRight1 />
    </div>
  );
}

function StepsNestedComponentsCustomListItemSmartNavMouse3() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-start justify-start px-0 py-2 relative shrink-0 w-[324px]" data-name="Steps / Nested components / Custom list item (SmartNav)/Mouse">
      <ListItemIgt4 />
    </div>
  );
}

function StepsNestedComponentsAngleListItemSmartNav3() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-[324px]" data-name="Steps / Nested components / Angle list item (SmartNav)">
      <StepsNestedComponentsCustomListItemSmartNavMouse3 />
    </div>
  );
}

function Angles() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[324px]" data-name="Angles">
      <StepsNestedComponentsAngleListItemSmartNav />
      <StepsNestedComponentsAngleListItemSmartNav1 />
      <StepsNestedComponentsAngleListItemSmartNav2 />
      <StepsNestedComponentsAngleListItemSmartNav3 />
    </div>
  );
}

function StepsAnglesMouseSmartNav() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px pb-5 pt-0 px-0 relative shrink-0" data-name="Steps / Angles - Mouse (SmartNav)">
      <CArmPreview />
      <StoreAngleButton />
      <Angles />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0 w-full" data-name="Content">
      <StepsAnglesMouseSmartNav />
    </div>
  );
}

function Separator9() {
  return (
    <div className="h-[324px] relative w-full" data-name="Separator">
      <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0" style={{ "--stroke-0": "rgba(69, 69, 69, 1)" } as React.CSSProperties}>
          <img className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    </div>
  );
}

function Expander1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Expander">
      <Header3 />
      <Content8 />
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "324", "--transform-inner-height": "324", height: "calc(1px * ((var(--transform-inner-width) * 1) + (var(--transform-inner-height) * 0)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] w-full">
          <Separator9 />
        </div>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Step 2">
      <Expander1 />
    </div>
  );
}

function StepOverview() {
  return (
    <div className="basis-0 bg-[#212121] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Step overview">
      <Step1 />
      <Step2 />
    </div>
  );
}

function TaskGuidance() {
  return (
    <div className="basis-0 bg-neutral-900 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Task Guidance">
      <Header1 />
      <TaskOverview />
      <StepOverview />
    </div>
  );
}

function TaskGuidance1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-start left-0 top-14 w-[324px]" data-name="Task Guidance">
      <TaskGuidance />
    </div>
  );
}

function Background() {
  return <div className="basis-0 bg-[#383838] grow h-full min-h-px min-w-px shrink-0" data-name="Background" />;
}

function DlsHome24() {
  return (
    <div className="relative shrink-0 size-6" data-name="DLS_Home_24">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[2px] shrink-0 w-10" data-name="Button" style={{ display: 'none' }}>
      <DlsHome24 />
    </div>
  );
}

function PhilipsWordmark2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[77px]" data-name="philips-wordmark-2">
      <img className="block max-w-none size-full" src={imgPhilipsWordmark2} />
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
        <p className="leading-[28px] whitespace-pre">UniGuide</p>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Left">
      <Button />
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function DlsPatientAcquisition24() {
  return (
    <div className="relative shrink-0 size-8" data-name="DLS_PatientAcquisition_24">
      <img className="block max-w-none size-full" src={imgDlsPatientAcquisition24} />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Text container">
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">DOE, Jane</p>
      </div>
    </div>
  );
}

function Patient4() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Patient">
      <DlsPatientAcquisition24 />
      <TextContainer />
    </div>
  );
}

function Label28() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(214,214,214,0.65)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">Patient ID</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">234567</p>
      </div>
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-2 items-start justify-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap" data-name="Label">
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
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Info">
      <Label28 />
      <Label29 />
    </div>
  );
}

function PatientInfo() {
  return (
    <div className="content-stretch flex gap-6 h-6 items-center justify-center relative shrink-0" data-name="Patient info">
      <Patient4 />
      <Info />
    </div>
  );
}

function Left3() {
  return (
    <div className="absolute box-border content-stretch flex gap-12 h-12 items-center justify-start left-2 pl-2 pr-0 py-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Left2 />
      <PatientInfo />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px]" data-name="Time">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center relative shrink-0 text-nowrap">
        <p className="leading-[28px] whitespace-pre">09:00</p>
      </div>
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center relative shrink-0 text-center w-10">
        <p className="leading-[28px]">AM</p>
      </div>
    </div>
  );
}

function DateTimeUser() {
  return (
    <div className="content-stretch flex gap-5 items-center justify-end relative shrink-0" data-name="Date + Time + User">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">01-Jul-2024</p>
      </div>
      <Time />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon6} />
    </div>
  );
}

function ButtonIgt1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0 size-10" data-name="🟢 Button (IGT)" style={{ display: 'none' }}>
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon7} />
    </div>
  );
}

function ButtonIgt2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0 size-10" data-name="🟢 Button (IGT)" style={{ display: 'none' }}>
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function ButtonIgt3() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0 size-10" data-name="🟢 Button (IGT)" style={{ display: 'none' }}>
      <Icon11 />
    </div>
  );
}

function Icons6() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-end relative shrink-0" data-name="Icons">
      <ButtonIgt1 />
      <ButtonIgt2 />
      <ButtonIgt3 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-3 h-12 items-center justify-end relative shrink-0" data-name="Right side">
      <DateTimeUser />
      <Icons6 />
    </div>
  );
}

function Right2() {
  return (
    <div className="absolute content-stretch flex gap-2 h-12 items-center justify-end right-4 top-1/2 translate-y-[-50%]" data-name="Right">
      <RightSide />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-2.5 h-14 items-center justify-start relative shrink-0 w-full" data-name="Top row">
      <Background />
      <Left3 />
      <Right2 />
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

function NavigationBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-14 items-start justify-start left-0 right-0 top-0" data-name="Navigation bar">
      <Template />
    </div>
  );
}

function FrameworkMouseSmartNav() {
  return (
    <div className="basis-0 bg-black grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Framework / Mouse (SmartNav)">
      <ViewArea1 />
      <Toolbar1 />
      <TaskGuidance1 />
      <NavigationBar />
    </div>
  );
}

function Viewport() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1043px] items-start justify-start left-0 top-0 w-[1414px]" data-name="Viewport">
      <div aria-hidden="true" className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none" />
      <Header />
      <FrameworkMouseSmartNav />
    </div>
  );
}

export default function ViewportLeftBottom() {
  return (
    <div className="relative size-full" data-name="Viewport_left bottom">
      <Viewport />
    </div>
  );
}