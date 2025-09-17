import { imgDlsHome24, imgPhilipsWordmark2, imgDlsPatientAcquisition24, imgIcon, imgIcon1 } from "./svg-qn584";

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
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-2 py-0 relative shrink-0" data-name="solution name">
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="leading-[28px] whitespace-pre">UniGuide</p>
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
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">DOE, Jane</p>
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

function Label1() {
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
    <div className="absolute box-border content-stretch flex gap-12 h-12 items-center justify-start left-2 pl-2 pr-0 py-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Left />
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

function Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function ButtonIgt() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0 size-10" data-name="🟢 Button (IGT)">
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

function ButtonIgt1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0 size-10" data-name="🟢 Button (IGT)">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgDlsHome24} />
    </div>
  );
}

function ButtonIgt2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0 size-10" data-name="🟢 Button (IGT)">
      <Icon2 />
    </div>
  );
}

function Icons() {
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
    <div className="content-stretch flex gap-3 h-12 items-center justify-end relative shrink-0" data-name="Right side">
      <DateTimeUser />
      <Icons />
    </div>
  );
}

function Right() {
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

export default function NavigationBar() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative size-full" data-name="Navigation bar">
      <Template />
    </div>
  );
}