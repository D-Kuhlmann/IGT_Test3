import React, { useState } from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';
import { getFormattedPatientName, getPatientId, getCurrentDate, getFormattedDOB, getPatientAge, getFormattedTime } from '../../../data/patientData';
import { useSettings } from '../../../contexts/SettingsContext';
import { useAngle } from '../../../contexts/AngleContext';
import svgPaths from "../../../imports/svg-lsvrftrq7x";
import imgImage1 from "figma:asset/82f7f32e258c1f3564c6028958e44e4ec5476529.png";
import imgCoronal from "figma:asset/4c8bbf83fe02a6ff097b8e4c2200db41b8b53782.png";
import imgImage2 from "figma:asset/71dabdc7502548dbc0e7e3fc8521d3ad4a8010af.png";
import imgImage3 from "figma:asset/db228b80ad186ca3d5adc278aa560e86a0eda3b7.png";
import imgAxial from "figma:asset/d7258c707bf99e6cc2fdd9e2b612b0b00247fc8f.png";
import imgImage4 from "figma:asset/7ece7bb00a5e8eaa345a0ea283f6a6bc424b0ef3.png";
import imgSagittal from "figma:asset/c12d087aa3c301b81e74e12cfc43dd149178b7a0.png";
import imgUntitled11 from "figma:asset/0f0384f86d80f261ddeb017dcfe5c3bd1140e4e8.png";
import Angle1 from "../../../assets/ImageAngles/Angle1.png";
import Angle2 from "../../../assets/ImageAngles/Angle2.png";
import Angle3 from "../../../assets/ImageAngles/Angle3.png";
import Angle4 from "../../../assets/ImageAngles/Angle4.png";
import { imgDlsCapture16, imgDlsTabMaximize48, imgImageInformation, imgLeft, imgBottom, imgRight, imgCollapse, imgIconsTaskSeries24, imgIconsTaskPlanning24, imgIconsTaskLive24, imgTitle, imgVector1, imgCheckbox, imgIcon5, imgPath, imgVector2, imgDlsHome24, imgPhilipsWordmark2, imgDlsPatientAcquisition24, imgNavIcon, imgNavIcon1 } from "../../../assets/interventional-workspace-svg-assets";

// Custom PatientBar for InterventionalWorkspace with NavigationBar content
function InterventionalPatientBar() {
  return (
    <div className="bg-neutral-900 h-10 relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-between relative size-full px-2">
        {/* Left side - Philips branding and solution name */}
        <div className="flex gap-2 items-center">
        <div className="relative shrink-0 h-4 w-20">
  <img
    src={imgPhilipsWordmark2}
    alt="Philips wordmark"
    className="block h-full w-full object-contain"
  />
</div>
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap">
            <p className="leading-[14px] whitespace-pre">UniGuide</p>
          </div>
        </div>

        {/* Center - Patient info */}
        <div className="flex gap-6 items-center">
          <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#41c9fe] text-[16px] text-nowrap">
           
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative shrink-0 size-6">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p34f96a00} fill="#41C9FE" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic text-[#41c9fe] text-[14px] text-nowrap">
              <p className="leading-[16px] whitespace-pre">{getFormattedPatientName()}</p>
            </div>
          </div>
          <div className="flex font-['CentraleSans:Book',_sans-serif] gap-1 items-center text-[#d6d6d6] text-[12px] text-nowrap">
            <div className="opacity-[0.65]">
              <p className="leading-[14px] text-nowrap whitespace-pre">Patient ID</p>
            </div>
            <div className="text-[rgba(255,255,255,0.8)]">
              <p className="leading-[14px] text-nowrap whitespace-pre">{getPatientId()}</p>
            </div>
          </div>
          <div className="flex font-['CentraleSans:Book',_sans-serif] gap-1 items-center text-[#d6d6d6] text-[12px]">
            <div className="opacity-[0.65]">
              <p className="leading-[14px]">DOB</p>
            </div>
            <div className="text-[rgba(255,255,255,0.8)]">
              <p className="leading-[14px]">{getFormattedDOB()}</p>
            </div>
          </div>
        </div>

        {/* Right side - Date, time and action buttons */}
        <div className="flex gap-3 items-center">
          <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[14px] text-nowrap">
            <p className="leading-[16px] whitespace-pre">{getCurrentDate()}</p>
          </div>
          <div className="flex gap-1 items-center text-[#d6d6d6] text-[14px]">
            <div className="font-['CentraleSansDS:Book',_sans-serif]">
              <p className="leading-[16px] whitespace-pre">{getFormattedTime()}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="box-border flex items-center justify-center px-2 py-1 rounded-[2px] size-6">
              <div className="relative shrink-0 size-4">
                <img className="block max-w-none size-full" src={imgNavIcon} />
              </div>
            </div>
            <div className="box-border flex items-center justify-center px-2 py-1 rounded-[2px] size-6">
              <div className="relative shrink-0 size-4">
                <img className="block max-w-none size-full" src={imgNavIcon1} />
              </div>
            </div>
            <div className="box-border flex items-center justify-center px-2 py-1 rounded-[2px] size-6">
              <div className="relative shrink-0 size-4">
                <img className="block max-w-none size-full" src={imgDlsHome24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

// NavigationBar components
function Background() {
  return <div className="basis-0 bg-[#383838] grow h-full min-h-px min-w-px shrink-0" data-name="Background" />;
}

function DlsHome24() {
  return (
    <div className="relative shrink-0 size-6" data-name="DLS_Home_24">
      <img className="block max-w-none size-full" src={imgDlsHome24} />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[2px] shrink-0 w-10" data-name="Button">
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
    <div className="box-border content-stretch flex gap-1 items-center justify-start px-1 py-0 relative shrink-0" data-name="solution name">
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="leading-[16px] whitespace-pre">UniGuide</p>
      </div>
    </div>
  );
}

function Left() {
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
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#41c9fe] text-[14px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">{getFormattedPatientName()}</p>
      </div>
    </div>
  );
}

function Patient() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Patient">
      <DlsPatientAcquisition24 />
      <TextContainer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(214,214,214,0.65)]">
        <p className="leading-[14px] text-nowrap whitespace-pre">Patient ID</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[14px] text-nowrap whitespace-pre">234567</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-1 items-start justify-start leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap" data-name="Label">
      <div className="flex flex-col justify-center relative shrink-0 text-[#8c8c8c]">
        <p className="leading-[14px] text-nowrap whitespace-pre">DOB</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[14px] text-nowrap whitespace-pre">01/01/1980</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Info">
      <Label />
      <Label1 />
    </div>
  );
}

function PatientInfo() {
  return (
    <div className="content-stretch flex gap-6 h-6 items-center justify-center relative shrink-0" data-name="Patient info">
      <Patient />
      <Info />
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute box-border content-stretch flex gap-6 h-6 items-center justify-start left-2 pl-2 pr-0 py-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Left />
      <PatientInfo />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[14px]" data-name="Time">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center relative shrink-0 text-nowrap">
        <p className="leading-[16px] whitespace-pre">{getFormattedTime()}</p>
      </div>
    </div>
  );
}

function DateTimeUser() {
  return (
    <div className="content-stretch flex gap-5 items-center justify-end relative shrink-0" data-name="Date + Time + User">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">{getCurrentDate()}</p>
      </div>
      <Time />
    </div>
  );
}

function NavIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <img className="block max-w-none size-full" src={imgNavIcon} />
    </div>
  );
}

function ButtonIgt() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded-[2px] shrink-0 size-6" data-name="🟢 Button (IGT)">
      <NavIcon />
    </div>
  );
}

function NavIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <img className="block max-w-none size-full" src={imgNavIcon1} />
    </div>
  );
}

function ButtonIgt1() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded-[2px] shrink-0 size-6" data-name="🟢 Button (IGT)">
      <NavIcon1 />
    </div>
  );
}

function NavIcon2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <img className="block max-w-none size-full" src={imgDlsHome24} />
    </div>
  );
}

function ButtonIgt2() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded-[2px] shrink-0 size-6" data-name="🟢 Button (IGT)">
      <NavIcon2 />
    </div>
  );
}

function NavIcons() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-end relative shrink-0" data-name="Icons">
      <ButtonIgt />
      <ButtonIgt1 />
      <ButtonIgt2 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-3 h-6 items-center justify-end relative shrink-0" data-name="Right side">
      <DateTimeUser />
      <NavIcons />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute content-stretch flex gap-2 h-6 items-center justify-end right-4 top-1/2 translate-y-[-50%]" data-name="Right">
      <RightSide />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-2.5 h-7 items-center justify-start relative shrink-0 w-full" data-name="Top row">
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

function NavigationBar() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative size-full" data-name="Navigation bar">
      <Template />
    </div>
  );
}

function ViewContainer({ 
  image, 
  orientationImage, 
  orientationText, 
  showRotationButtons = false,
  showReferenceLines = false,
  indicatorColor = "#23cc72"
}: {
  image: string;
  orientationImage: string;
  orientationText: string;
  showRotationButtons?: boolean;
  showReferenceLines?: boolean;
  indicatorColor?: string;
}) {
  return (
    <div className="flex-1 relative w-full" data-name="View container">
      <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
      
      {/* Content */}
      <div className="absolute bg-black inset-0 p-0.5" data-name="Content">
        <div className="w-full h-full bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url('${image}')` }} />
      </div>

      {/* Image Information */}
      <div className="absolute inset-0 overflow-clip" data-name="Image information">
        <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-1 items-end justify-end p-[12px] right-0" data-name="Bottom right">
          <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[4px] relative shrink-0" data-name="Orientation indicator">
            <div className="bg-center bg-cover bg-no-repeat shrink-0 size-20" style={{ backgroundImage: `url('${orientationImage}')` }} />
          </div>
          <div className="content-stretch flex flex-col items-end justify-start relative shrink-0" data-name="Orientation">
            <div className="content-stretch flex gap-1.5 h-[22px] items-center justify-end relative shrink-0" data-name="Label">
              <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
                <p className="leading-[22px] whitespace-pre">{orientationText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotation Buttons */}
      {showRotationButtons && (
        <div className="absolute inset-0" data-name="Rotation buttons">
          <div className="absolute bg-black left-2 size-6 translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)" }}>
            <img className="block max-w-none size-full" src={imgImageInformation} />
          </div>
          <div className="absolute bg-black bottom-2 size-6 translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
            <img className="block max-w-none size-full" src={imgLeft} />
          </div>
          <div className="absolute bg-black right-2 size-6 translate-y-[-50%]" style={{ top: "calc(50% + 0.5px)" }}>
            <img className="block max-w-none size-full" src={imgBottom} />
          </div>
          <div className="absolute bg-black size-6 top-2 translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
            <img className="block max-w-none size-full" src={imgRight} />
          </div>
        </div>
      )}

      {/* Reference Lines */}
      {showReferenceLines && (
        <div className="absolute inset-0" data-name="Reference lines">
          <div className="absolute bottom-1 flex items-center justify-center top-1 translate-x-[-50%] w-4" style={{ left: "calc(50% + 0.5px)" }}>
            <div className="flex-none h-4 rotate-[270deg] w-[292px]">
              <div className="content-stretch flex gap-4 items-center justify-center opacity-70 relative size-full">
                {[...Array(2).keys()].map((_, i) => (
                  <div key={i} className="basis-0 content-stretch flex grow h-4 items-center justify-start min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 bg-[#63a2ff] grow h-px min-h-px min-w-px shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-4 h-4 items-center justify-center left-1 opacity-70 right-1 top-1/2 translate-y-[-50%]">
            {[...Array(2).keys()].map((_, i) => (
              <div key={i} className="basis-0 content-stretch flex grow h-4 items-center justify-start min-h-px min-w-px relative shrink-0">
                <div className="basis-0 bg-[#ff8370] grow h-px min-h-px min-w-px shrink-0" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 h-4 left-3 opacity-70 w-2" style={{ backgroundColor: indicatorColor }} />
        </div>
      )}
    </div>
  );
}

function TaskGuidancePanel({ subFocusMode, selectedAngleIndex, onAngleSelect }: { subFocusMode?: 'none' | 'angles'; selectedAngleIndex?: number; onAngleSelect?: (angleId: string) => void }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isViewingAnglesCollapsed, setIsViewingAnglesCollapsed] = useState(false);
  const { inputSettings } = useSettings();

  return (
    <div className="w-full h-full bg-black border-r border-[#383838]" data-name="Task Guidance">
      {/* Header */}
      <div className="relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-row items-center justify-end overflow-clip relative size-full">
          <div className="box-border content-stretch flex gap-3 items-center justify-end px-4 py-3 relative w-full">
            <div className="basis-0 font-['CentraleSans:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Task Guidance</p>
            </div>
            <div className="content-stretch flex gap-4 items-center justify-end relative shrink-0">
              <div className="relative shrink-0 size-6">
                <img className="block max-w-none size-full" src={imgCollapse} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Overview */}
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-3 pt-0 px-0 relative shrink-0 w-full">
        {/* Series Task */}
        <div className="h-7 relative shrink-0 w-full">
          <div className="flex flex-row items-center relative size-full">
            <div className="flex gap-2 h-7 items-center px-3 w-full">
              <div className="flex gap-2 items-center flex-1">
                <div className="relative shrink-0 size-4">
                  <img className="block max-w-none size-full" src={imgIconsTaskSeries24} />
                </div>
                <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[14px] flex-1 truncate">
                  <p className="leading-[16px]">Series</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Task (Active) */}
        <div className="bg-[rgba(255,255,255,0.1)] h-7 relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="flex gap-2 h-7 items-center px-3 w-full">
              <div className="flex gap-2 items-center flex-1">
                <div className="relative shrink-0 size-4">
                  <img className="block max-w-none size-full" src={imgIconsTaskPlanning24} />
                </div>
                <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[14px] flex-1 truncate">
                  <p className="leading-[16px]">Plan</p>
                </div>
              </div>
              <div className="absolute bg-[#439ac1] bottom-0 left-0 top-0 w-[2px]" />
            </div>
          </div>
        </div>

        {/* Live Task */}
        <div className="h-7 relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="flex gap-2 h-7 items-center px-3 w-full">
              <div className="flex gap-2 items-center flex-1">
                <div className="relative shrink-0 size-4">
                  <img className="block max-w-none size-full" src={imgIconsTaskLive24} />
                </div>
                <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[14px] flex-1 truncate">
                  <p className="leading-[16px]">Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planning Section */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center relative size-full">
            <div 
              className="box-border content-stretch flex gap-2 items-center justify-start px-3 py-2 relative w-full cursor-pointer hover:bg-black/5 transition-colors"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-5 justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
                  <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Planning</p>
                </div>
              </div>
              <div className="relative shrink-0 size-5">
                <img className="block max-w-none size-full" src={imgTitle} />
              </div>
            </div>
          </div>
        </div>
        
        {!isCollapsed && (
          <div className="w-full">
            {/* Planning Content - Placeholder */}
            <div className="px-4 py-2">
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[14px]">
                <p className="leading-[20px]">Planning tools and configuration will be implemented here.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Viewing Angles Section */}
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center relative size-full">
            <div 
              className="box-border content-stretch flex gap-2 items-center justify-start px-3 py-2 relative w-full cursor-pointer hover:bg-black/5 transition-colors"
              onClick={() => setIsViewingAnglesCollapsed(!isViewingAnglesCollapsed)}
            >
              <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-5 justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
                  <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Viewing Angles</p>
                </div>
              </div>
              <div className="relative shrink-0 size-5">
                <img className="block max-w-none size-full" src={imgTitle} />
              </div>
            </div>
          </div>
        </div>
        
        {!isViewingAnglesCollapsed && (
          <div className="w-full">
            {/* C-arm Preview */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col items-center justify-center relative size-full">
                <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center pb-0 pt-1 px-[60px] relative w-full">
                  <div className="h-[100px] relative shrink-0 w-[150px]">
                    <div className="absolute bg-center bg-cover bg-no-repeat inset-0" style={{ backgroundImage: `url('${imgUntitled11}')` }} />
                  </div>
                  <div className="h-8 relative shrink-0 w-[220px]">
                    <div className="absolute flex flex-col font-['CentraleSans:Book',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#d6d6d6] text-[14px] text-center">
                      <p className="leading-[18px]">Rot -180° Ang -180°</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Angle Button */}
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-3 py-0 relative shrink-0">
              <div className="bg-[#1474a4] box-border content-stretch flex gap-2 h-8 items-center justify-center px-3 py-[6px] relative rounded-[2px] shrink-0 w-full">
                <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-center text-nowrap text-white">
                  <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Store angle</p>
                </div>
              </div>
            </div>

            {/* Angle List Items */}
            {[
              { id: "1", name: "Angle 1", rotation: "Rot -180° Ang -180°" },
              { id: "2", name: "Angle 2", rotation: "Rot 90° Ang 0°" },
              { id: "3", name: "Angle 3", rotation: "Rot 0° Ang 45°" },
              { id: "4", name: "Angle 4", rotation: "Rot -90° Ang 30°" }
            ].map((angle, index) => {
              const isSelected = subFocusMode === 'angles' && selectedAngleIndex === index;
              const focusStyles = isSelected ? {
                backgroundColor: '#2b86b2',
                borderColor: '#2b86b2'
              } : {};
              
              return (
                <button 
                  key={index} 
                  className="content-stretch flex h-12 items-start justify-start relative shrink-0 w-full transition-colors hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
                  onClick={() => onAngleSelect?.(angle.id)}
                  type="button"
                >
                  <div className="box-border content-stretch flex gap-2 h-12 items-center justify-start px-3 py-2 relative shrink-0 w-full" style={focusStyles}>
                    <div className="basis-0 content-stretch flex gap-3 grow items-center justify-start min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-6">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <path d={svgPaths.p115e8900} fill="#D6D6D6" />
                        </svg>
                      </div>
                      <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
                        <div className="min-w-full overflow-ellipsis overflow-hidden relative shrink-0" style={{ width: "min-content" }}>
                          <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">{angle.name}</p>
                        </div>
                        <div className="overflow-ellipsis overflow-hidden relative shrink-0">
                          <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-[14px] text-nowrap">{angle.rotation}</p>
                        </div>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex gap-2 items-center justify-start p-1 shrink-0 size-6">
                      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p1340eb80} fill="#D6D6D6" fillOpacity="0.8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

interface InterventionalWorkspaceProps {
  focusMode?: boolean;
  subFocusMode?: 'none' | 'angles';
  selectedAngleIndex?: number;
}

export function InterventionalWorkspace({ 
  focusMode = false, 
  subFocusMode = 'none', 
  selectedAngleIndex = 0 
}: InterventionalWorkspaceProps = {}) {
  const { selectedAngleImage, setSelectedAngle, activateUniGuide } = useAngle();
  
  // Map angle IDs to their corresponding images
  const angleImages = {
    "1": Angle1,
    "2": Angle2,
    "3": Angle3,
    "4": Angle4
  };

  // SmartUI function to activate angles and switch TSM tab
  const handleAngleActivation = (angleId: string) => {
    const angleImage = angleImages[angleId as keyof typeof angleImages];
    if (angleImage) {
      setSelectedAngle(angleId, angleImage);
      activateUniGuide();
    }
  };

  // Use selected angle image or default
  const mainImage = selectedAngleImage || imgImage1;

  return (
    <div className="flex flex-col h-full">
      <ViewportHeader title="Interventional Workspace" />
      <InterventionalPatientBar />
      
      <div className="bg-[#000000] relative flex-1 flex flex-col overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 relative">
        {/* Task Guidance Panel */}
        <div className="absolute left-0 top-0 bottom-0 w-64">
          <TaskGuidancePanel 
            subFocusMode={subFocusMode} 
            selectedAngleIndex={selectedAngleIndex}
            onAngleSelect={handleAngleActivation}
          />
        </div>

        {/* View Area */}
        <div className="absolute bottom-0 left-64 right-0 top-0 flex">
          {/* Left Large View */}
          <div className="flex-[2] flex flex-col min-w-0">
            <ViewContainer 
              image={mainImage}
              orientationImage={imgCoronal}
              orientationText="Rot 0˚ Ang 0˚"
              showRotationButtons={true}
            />
          </div>

          {/* Right Side - Three Stacked Views */}
          <div className="flex-1 flex flex-col min-w-0">
            <ViewContainer 
              image={imgImage2}
              orientationImage={imgCoronal}
              orientationText="Rot 0˚ Ang 0˚"
              showReferenceLines={true}
              indicatorColor="#23cc72"
            />
            <ViewContainer 
              image={imgImage3}
              orientationImage={imgAxial}
              orientationText="Rot 0˚ Ang 90˚"
              showReferenceLines={true}
              indicatorColor="#ff8370"
            />
            <ViewContainer 
              image={imgImage4}
              orientationImage={imgSagittal}
              orientationText="Rot 90˚ Ang 0˚"
              showReferenceLines={true}
              indicatorColor="#ff8370"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}