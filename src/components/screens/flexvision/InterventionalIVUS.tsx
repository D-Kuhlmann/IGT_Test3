import React from 'react';
import { ComponentHeader, ViewportHeader } from '../../shared/ViewportHeaders';

// SVG paths from Uniguide
const svgPaths = {
  philipsWordmark: "M25.913 0.287144H21.8089V5.63082H17.5368V0.287144H13.4327V13.7339H17.5368V8.44622H21.8089V13.7339H25.913V0.287144ZM40.1931 11.0305V0.287144H36.089V13.7339H43.5058L44.1221 11.0305H40.1861H40.1931ZM33.0495 0.287144H28.9455V13.7339H33.0495V0.287144ZM49.6898 0.287144H45.5858V13.7339H49.6898V0.287144ZM69.923 3.71886C69.923 2.9905 70.6513 2.64732 71.8349 2.64732C73.1306 2.64732 74.5313 2.92746 75.4907 3.31966L75.1546 0.392196C74.083 0.168084 73.1306 0 71.3867 0C68.067 0 65.8189 1.30965 65.8189 4.04802C65.8189 8.77539 72.2271 7.81591 72.2271 10.008C72.2271 10.8484 71.6108 11.3037 70.091 11.3037C68.7394 11.3037 66.6593 10.8554 65.4267 10.2321L65.8749 13.3277C67.1146 13.7759 68.7954 14 70.1471 14C73.5788 14 76.3872 12.8724 76.3872 9.49675C76.3872 4.9935 69.923 5.84092 69.923 3.70485V3.71886ZM58.3462 10.5263C62.1701 10.5263 64.5863 8.55828 64.5863 5.12656C64.5863 1.35868 62.002 0.0070035 57.7859 0.0070035C56.1541 0.0070035 54.1861 0.11906 52.7854 0.287144V13.7339H56.8894V10.5263H58.3532H58.3462ZM60.5383 5.18259C60.5383 6.92646 59.6978 8.11005 57.5618 8.11005H56.8894V2.54927C57.1276 2.53527 57.3517 2.53527 57.5618 2.53527C59.5858 2.53527 60.5383 3.49475 60.5383 5.17559V5.18259ZM5.56778 10.5263C9.3917 10.5263 11.8079 8.55828 11.8079 5.12656C11.8009 1.35868 9.21661 0.0070035 5.0005 0.0070035C3.37569 0.0070035 1.4077 0.11906 0 0.287144V13.7339H4.10405V10.5263H5.56778ZM7.75988 5.18259C7.75988 6.92646 6.91946 8.11005 4.78339 8.11005H4.11106V2.54927C4.34917 2.53527 4.57329 2.53527 4.78339 2.53527C6.8074 2.53527 7.75988 3.49475 7.75988 5.17559V5.18259Z",
  patientIcon: "M30.6667 12L29.3333 14.6667H25.3333V25.3333H6.66667V14.6667H2.66667L1.33333 12H30.6667ZM4 5.33333C5.46667 5.33333 6.66667 6.53333 6.66667 8C6.66667 9.46667 5.46667 10.6667 4 10.6667C2.53333 10.6667 1.33333 9.46667 1.33333 8C1.33333 6.53333 2.53333 5.33333 4 5.33333ZM28.4 6.66667H29.3333V10.6667H8V6.66667H17.3333V8H28V6.66667H28.4Z",
  icon1: "M18 5L16 3H8L6 5H1V21H23V5H18ZM12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8Z",
  icon2: "M23 5L17 11.001V5H1V19.003H17V13.002L23 19.003V5Z",
  icon3: "M14.5 1C9.8 1 6 4.8 6 9.5C6 11.3 6.6 13 7.6 14.4L1 21L3 23L9.6 16.4C11 17.4 12.7 18 14.5 18C19.2 18 23 14.2 23 9.5C23 4.8 19.2 1 14.5 1ZM14.5 15C13.4 15 12.3 14.6 11.3 14L10.5 13.5L10 12.7C9.3 11.8 9 10.7 9 9.5C9 6.5 11.5 4 14.5 4C17.5 4 20 6.5 20 9.5C20 12.5 17.5 15 14.5 15Z"
};

function PhilipsWordmark2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[77px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 15">
        <path d={svgPaths.philipsWordmark} fill="white" />
      </svg>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="box-border content-stretch flex flex-col h-[15px] items-center px-[8px] py-0 relative shrink-0">
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-0 relative shrink-0">
      <p className="font-['CentraleSans:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">IVUS</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function DlsPatientAcquisition24() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.patientIcon} fill="#41C9FE" />
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['CentraleSans:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap whitespace-pre">DOE, Jane</p>
    </div>
  );
}

function Patient() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DlsPatientAcquisition24 />
      <TextContainer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap">
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
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap">
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
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Label />
      <Label1 />
    </div>
  );
}

function PatientInfo() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-center justify-center relative shrink-0">
      <Patient />
      <Info />
    </div>
  );
}

function Left2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[48px] items-center left-[8px] pl-[8px] pr-0 py-0 top-[110%] translate-y-[-50%]">
      <Left1 />
      <PatientInfo />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px]">
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
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">01-Jul-2024</p>
      </div>
      <Time />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.icon1} fill="#D6D6D6" />
      </svg>
    </div>
  );
}

function ButtonIgt5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.icon2} fill="#D6D6D6" />
      </svg>
    </div>
  );
}

function ButtonIgt6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.icon3} fill="#D6D6D6" />
      </svg>
    </div>
  );
}

function ButtonIgt7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]">
      <Icon3 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <ButtonIgt5 />
      <ButtonIgt6 />
      <ButtonIgt7 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-end relative shrink-0">
      <DateTimeUser />
      <Icons3 />
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-end right-[16px] top-[110%] translate-y-[-50%]">
      <RightSide />
    </div>
  );
}

function Background() {
  return <div className="basis-0 bg-[#383838] grow h-full min-h-px min-w-px shrink-0" />;
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full">
      <Background />
      <Left2 />
      <Right1 />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 right-0 top-0 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)]">
      <TopRow />
    </div>
  );
}

function InterventionalIVUSContent() {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* Main Content Area - Two Panels Side by Side */}
      <div className="flex-1 flex gap-0 overflow-hidden">
        {/* Left Panel - Controller Information */}
        <div className="w-[400px] bg-black flex flex-col p-6">
          {/* Warning Message */}
          <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 mb-6">
            <div className="flex gap-3">
              <div className="text-yellow-500 text-xl">⚠</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[13px] leading-[18px]">
                <p>Avoid changing the zoom, moving the table or C-arm position. Make sure the guide and IVUS Catheter are visible during the pullback.</p>
              </div>
            </div>
          </div>

          {/* Tutorial Section */}
          <div className="bg-[#2a2a2a] rounded p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#41c9fe] rounded flex items-center justify-center text-[10px] text-black font-bold">i</div>
                <p className="font-['CentraleSans:Medium',_sans-serif] text-white text-[14px]">IVUS Co-registration Tutorial</p>
              </div>
              <button className="text-[#d6d6d6] hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>

            {/* Catheter Illustration */}
            <div className="bg-[#1a1a1a] rounded p-4 mb-4">
              <div className="flex items-center justify-center h-[120px]">
                <div className="font-['CentraleSans:Book',_sans-serif] text-[#666] text-[12px]">
                  [Catheter Illustration]
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#666] mt-0.5"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#999] text-[13px]">Position the catheter</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#666] mt-0.5"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#999] text-[13px]">Press 'Record'</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#23cc72] border-2 border-[#23cc72] mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-white text-[13px]">Start continuous fluoroscopy (optimal 15 fps) and then pull back proximally at 1 mm/sec</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#666] mt-0.5"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#999] text-[13px]">Press 'Stop' or end fluoroscopy to stop recording</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - IVUS Image */}
        <div className="flex-1 bg-black relative">
          {/* CO-REG LIVE Label */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-black/50 px-3 py-1 rounded">
              <p className="font-['CentraleSans:Medium',_sans-serif] text-[#23cc72] text-[14px]">CO-REG LIVE</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-[#23cc72]"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">Eagle Eye Platinum</p>
              </div>
            </div>
          </div>

          {/* IVUS Circular Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[600px]">
              {/* IVUS Video */}
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                autoPlay 
                loop 
                muted
                playsInline
              >
                <source src="/src/assets/Assets_Prototype-vids/IVUSTomoLive-repeats.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right Side Tools */}
          <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-4">
            {/* Top 4 Buttons */}
            <div className="flex flex-col gap-2">
              {/* Brightness Control */}
              <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] relative group">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666]">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="font-['CentraleSans:Book',_sans-serif] text-[11px]">50</span>
              </button>

              {/* Contrast Control */}
              <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] relative group">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666]">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2 A10 10 0 0 1 12 22 Z" fill="currentColor"/>
                </svg>
                <span className="font-['CentraleSans:Book',_sans-serif] text-[11px]">10</span>
              </button>

              {/* Adaptive */}
              <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] relative group">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666]">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="8" r="2" fill="currentColor"/>
                  <circle cx="8" cy="16" r="2" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                </svg>
                <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Adaptive</span>
              </button>

              {/* Revolve */}
              <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Revolve</span>
              </button>
            </div>

            {/* ChromaFlo Button at Bottom */}
            <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] mb-[70px]">
              <div className="relative w-16 h-16 mb-1">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="1.5" fill="#41c9fe"/>
                  <circle cx="17" cy="12" r="1.5" fill="#41c9fe"/>
                  <circle cx="12" cy="17" r="1.5" fill="#41c9fe"/>
                  <circle cx="7" cy="12" r="1.5" fill="#41c9fe"/>
                </svg>
              </div>
              <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">ChromaFlo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="h-[60px] bg-black flex items-center justify-between px-6">
        {/* Left - Save Frame Button */}
        <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a] px-6 py-2 rounded flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-colors min-w-[150px] justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          Save Frame
        </button>

        {/* Right - Control Buttons and Toggle */}
        <div className="flex items-center gap-3">
          <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a] px-6 py-2 rounded flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-colors min-w-[150px] justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Freeze
          </button>
          <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a] px-6 py-2 rounded flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-colors min-w-[150px] justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Ringdown
          </button>
          <button className="bg-[#1474a4] hover:bg-[#1a8cc8] px-6 py-2 rounded flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-colors min-w-[150px] justify-center">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            Record
          </button>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#3a3a3a] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#23cc72]"></div>
            </div>
            <span className="font-['CentraleSans:Book',_sans-serif] text-white text-[13px]">Co-registration</span>
          </label>
        </div>
      </div>
    </div>
  );
}

interface InterventionalIVUSProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  hideHeader?: boolean;
}

export function InterventionalIVUS({ 
  componentSize = 'large', 
  hideHeader = false 
}: InterventionalIVUSProps) {
  // Content scaling based on component size - headers stay normal, only content scales
  const getContentScale = () => {
    switch (componentSize) {
      case 'small':
        return {
          scale: 'scale-[0.3]',
          showPatientBar: false
        };
      case 'medium':
        return {
          scale: 'scale-[0.5]',
          showPatientBar: false
        };
      case 'large':
        return {
          scale: 'scale-[0.7]',
          showPatientBar: true
        };
      case 'xlarge':
        return {
          scale: 'scale-[0.9]',
          showPatientBar: true
        };
      case 'fullscreen':
        return {
          scale: 'scale-100',
          showPatientBar: true
        };
      default:
        return {
          scale: 'scale-[0.7]',
          showPatientBar: true
        };
    }
  };

  const { scale, showPatientBar } = getContentScale();

  return (
    <div className="flex flex-col h-full bg-black">
      {/* ViewportHeader - standard header for all FlexVision components */}
      {!hideHeader && <ViewportHeader title="Interventional Workspace" />}
      
      {/* Content wrapper with NavigationBar */}
      <div className="flex-1 relative overflow-hidden">
        {/* Navigation bar with Philips wordmark */}
        {!hideHeader && <NavigationBar />}
        
        {/* Content area uses full available space, then gets scaled */}
        <div className="absolute inset-0" style={{ top: hideHeader ? 0 : '40px' }}>
          <div className={`transform ${scale} origin-center w-full h-full flex items-center justify-center`}>
            <InterventionalIVUSContent />
          </div>
        </div>
      </div>
    </div>
  );
}
