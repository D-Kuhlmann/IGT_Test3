import svgPaths from "./svg-x7s27r4u3e";

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
    <div
      className="box-border content-stretch flex flex-col h-[15px] items-center justify-start px-2 py-0 relative shrink-0"
      data-name="wordmark"
    >
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-center justify-start px-2 py-0 relative shrink-0"
      data-name="solution name"
    >
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="block leading-[28px] whitespace-pre">NextGen</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Left"
    >
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function Left1() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-12 h-12 items-center justify-start left-2 pl-2 pr-0 py-0 top-1/2 translate-y-[-50%]"
      data-name="Left"
    >
      <Left />
    </div>
  );
}

function Time() {
  return (
    <div
      className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Time"
    >
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="block leading-[28px] whitespace-pre"> </p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div
      className="box-border content-stretch flex gap-5 h-12 items-center justify-end p-0 relative shrink-0"
      data-name="Right side"
    >
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="block leading-[28px] whitespace-pre">31-Jan-2024</p>
      </div>
      <Time />
    </div>
  );
}

function Right() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-2 h-12 items-center justify-end p-0 right-6 top-1/2 translate-y-[-50%]"
      data-name="Right"
    >
      <RightSide />
    </div>
  );
}

function TopRow() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-14 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top row"
    >
      <Background />
      <Left1 />
      <Right />
    </div>
  );
}

function Template() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-full"
      data-name="Template"
    >
      <TopRow />
    </div>
  );
}

function NavigationBarIgt() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 top-0 w-[3840px]"
      data-name="Navigation bar (IGT)"
    >
      <Template />
    </div>
  );
}

function Igt32PxFvApps() {
  return (
    <div className="absolute inset-[0.6%_85.39%_98.03%_13.83%]" data-name="IGT-/-32px-/-FVApps">
      <div className="absolute bottom-[-1.69%] left-0 right-[-3.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 30">
          <g id="IGT-/-32px-/-FVApps">
            <path
              clipRule="evenodd"
              d={svgPaths.p3d3a7100}
              fill="var(--fill-0, white)"
              fillOpacity="0.15"
              fillRule="evenodd"
              id="Path-3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p12686900}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Path-2"
            />
            <path d={svgPaths.p14580380} fill="var(--fill-0, white)" id="Rectangle" opacity="0.5" />
            <path d={svgPaths.pe1d4700} fill="var(--fill-0, white)" id="Rectangle_2" opacity="0.6" />
            <path d={svgPaths.p1340eb80} fill="var(--fill-0, white)" id="Rectangle_3" opacity="0.7" />
            <path d={svgPaths.p323e7400} fill="var(--fill-0, white)" id="Rectangle_4" opacity="0.4" />
            <path d={svgPaths.p3fed3700} id="Rectangle_5" stroke="var(--stroke-0, white)" strokeOpacity="0.3" />
            <path
              clipRule="evenodd"
              d={svgPaths.p3afb6800}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Path"
              stroke="var(--stroke-0, black)"
            />
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
    <div className="absolute contents inset-[0.6%_85.39%_98.03%_13.83%]" data-name="dDLS-FV">
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
    <div className="absolute left-[308px] overflow-clip size-12 top-1" data-name="Apps 1">
      <DDlsTsmTestFindings />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#383838] h-14 left-[3517px] top-0 w-[323px]" />
      <NavigationBarIgt />
      <div className="absolute font-['CentraleSans:Book',_sans-serif] leading-[0] left-[428.5px] not-italic text-[#d6d6d6] text-[20px] text-center text-nowrap top-[18px] translate-x-[-50%]">
        <p className="block leading-[20px] whitespace-pre">Applications</p>
      </div>
      <div className="absolute font-['CentraleSans:Book',_sans-serif] leading-[0] left-[609.5px] not-italic text-[#d6d6d6] text-[20px] text-center text-nowrap top-[18px] translate-x-[-50%]">
        <p className="block leading-[20px] whitespace-pre">Presets</p>
      </div>
      <DDlsFv />
      <Apps1 />
    </div>
  );
}

function FlexVision() {
  return (
    <div className="absolute bg-[#000000] h-[2160px] left-0 overflow-clip top-0 w-[3840px]" data-name="FlexVision">
      <Group64 />
    </div>
  );
}

export default function Component07FlexVisionSelectingWrist() {
  return (
    <div className="bg-[#000000] relative size-full" data-name="07. FlexVision - SelectingWrist">
      <FlexVision />
      <div className="absolute font-['CentraleSans:Bold',_sans-serif] h-[152px] leading-[0] left-[2936px] not-italic opacity-20 text-[#ffffff] text-[24px] text-center top-[1518px] translate-x-[-50%] w-[824px]">
        <p className="block leading-[24px]">{`<Play VascularAccess.mp4 after click>`}</p>
      </div>
    </div>
  );
}