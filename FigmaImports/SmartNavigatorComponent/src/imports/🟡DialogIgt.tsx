import svgPaths from "./svg-g0qhlgbodb";
import imgImage from "figma:asset/abb26c302f8a54c42ccf3c60a6af057fc98a5651.png";
import imgImage1 from "figma:asset/f108ada266be743090357393717838324b82c818.png";

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
          <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Acquire CBCT</p>
          </div>
          <div className="flex flex-col font-['CentraleSans:Light',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[18px] text-nowrap text-right w-[173px]">
            <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Smart UI enabled</p>
          </div>
          <SmartButtonSquares />
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

function Circle() {
  return (
    <div className="bg-[#1474a4] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[18px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[0px] text-center text-nowrap">
        <p className="font-['CentraleSans:Bold',_sans-serif] leading-[20px] text-[14px] whitespace-pre">Protocol</p>
      </div>
    </div>
  );
}

function ProgressLine() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Progress line">
      <div className="basis-0 bg-[dimgrey] grow h-px min-h-px min-w-px shrink-0" />
    </div>
  );
}

function Step() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[374px] top-px" data-name="Step">
      <Circle />
      <Text />
      <ProgressLine />
    </div>
  );
}

function Circle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[12px] text-center text-nowrap">
        <p className="leading-[18px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(214,214,214,0.5)] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Settings</p>
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
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[511px] top-px" data-name="Step">
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
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[788px] top-px" data-name="Step 3">
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
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[942px] top-px" data-name="Step 4">
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
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[646px] top-0" data-name="Step 3">
      <Circle4 />
      <Text4 />
      <ProgressLine3 />
    </div>
  );
}

function Group211() {
  return (
    <div className="absolute contents left-[374px] top-0">
      <Step />
      <Step1 />
      <Step3 />
      <Step4 />
      <Step5 />
    </div>
  );
}

function Frame364() {
  return (
    <div className="absolute h-[72px] left-[24px] top-0 w-[1424px]">
      <Group211 />
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image1() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image />
    </div>
  );
}

function Image2() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image1 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">CBCT</p>
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
    <div className="box-border content-stretch flex flex-col h-[232px] items-start p-[4px] relative shrink-0 w-[176px]" data-name="🟢 Pictorial index (IGT)">
      <Image2 />
      <Footer />
      <div className="absolute inset-0" data-name="Selection border">
        <div aria-hidden="true" className="absolute border-4 border-[rgba(158,213,255,0.8)] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image3 />
    </div>
  );
}

function Image5() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image4 />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">CBCT Open</p>
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
    <div className="box-border content-stretch flex flex-col h-[232px] items-start p-[4px] relative shrink-0 w-[176px]" data-name="🟢 Pictorial index (IGT)">
      <Image5 />
      <Footer1 />
    </div>
  );
}

function Image6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Image7() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image6 />
    </div>
  );
}

function Image8() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image7 />
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">CBCT Dual</p>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="bg-[#383838] h-[56px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
          <Top2 />
        </div>
      </div>
    </div>
  );
}

function PictorialIndexIgt2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[232px] items-start p-[4px] relative shrink-0 w-[176px]" data-name="🟢 Pictorial index (IGT)">
      <Image8 />
      <Footer2 />
    </div>
  );
}

function Image9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image10() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image9 />
    </div>
  );
}

function Image11() {
  return (
    <div className="basis-0 bg-black content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full" data-name="Image">
      <Image10 />
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">CBCT Open Dual</p>
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="bg-[#383838] h-[56px] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
          <Top3 />
        </div>
      </div>
    </div>
  );
}

function PictorialIndexIgt3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[232px] items-start p-[4px] relative shrink-0 w-[176px]" data-name="🟢 Pictorial index (IGT)">
      <Image11 />
      <Footer3 />
    </div>
  );
}

function Frame381() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[372px] top-[32px]">
      <PictorialIndexIgt />
      <PictorialIndexIgt1 />
      <PictorialIndexIgt2 />
      <PictorialIndexIgt3 />
    </div>
  );
}

function Protocols() {
  return (
    <div className="absolute h-[264px] left-0 top-[136px] w-[1472px]" data-name="Protocols">
      <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[372px] not-italic text-[#d6d6d6] text-[20px] top-[-4px] translate-y-[-50%] w-[300px]">
        <p className="leading-[24px]">Acquisition Protocols</p>
      </div>
      <Frame381 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center left-[1208px] opacity-0 px-[16px] py-[9px] rounded-[2px] top-[892px] w-[240px]" data-name="Button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 240 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.0606e-13 4.4468 -26.681 1.4945e-13 120 -2.1277)\\\'><stop stop-color=\\\'rgba(205,162,220,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(154,157,223,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(103,152,226,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(77,150,228,1)\\\' offset=\\\'0.625\\\'/><stop stop-color=\\\'rgba(51,147,229,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(26,145,231,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(13,143,231,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,142,232,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <p className="font-['CentraleSans:Book',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Continue</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[dimgrey] box-border content-stretch flex gap-[8px] items-center justify-center left-[996px] opacity-0 px-[16px] py-[9px] rounded-[2px] top-[892px] w-[200px]" data-name="Button 2">
      <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-center text-nowrap">Cancel acquisition</p>
    </div>
  );
}

function Group235() {
  return (
    <div className="absolute contents left-[783px] top-[829px]">
      <div className="absolute flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] left-[783px] not-italic text-[#d6d6d6] text-[0px] text-nowrap top-[843px] translate-y-[-50%]">
        <p className="leading-[28px] text-[20px] whitespace-pre">
          <span>{`Select `}</span>
          <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">acquisition protocol</span>
          <span>{` then press a `}</span>
          <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">Smart Control</span>
          <span>{` to continue`}</span>
        </p>
      </div>
    </div>
  );
}

function SlotAgaMouse() {
  return (
    <div className="absolute h-[952px] left-0 top-[72px] w-[1472px]" data-name="Slot / AGA (Mouse)">
      <Frame364 />
      <Protocols />
      <Button />
      <Button2 />
      <div className="absolute bottom-[23.53%] left-0 right-0 top-[76.47%]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
            <path d="M0 0.5L1472 0.5" id="Vector 1" stroke="var(--stroke-0, #D6D6D6)" strokeOpacity="0.12" />
          </svg>
        </div>
      </div>
      <Group235 />
    </div>
  );
}

function Group233() {
  return (
    <div className="absolute inset-[14.69%_93.26%_72.51%_3.6%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group 233">
          <path d={svgPaths.p1ccf4280} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p272b7d80} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group234() {
  return (
    <div className="absolute contents left-[11.72px] top-[11.72px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[11.72px] top-[11.72px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "33.9375", "--transform-inner-height": "33.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="relative rounded-[8px] size-[33.941px]">
            <div aria-hidden="true" className="absolute border border-[#c7efff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_5px_3px_rgba(255,255,255,0.25)]" />
          </div>
        </div>
      </div>
      <Group233 />
    </div>
  );
}

function Backgroud() {
  return <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start" data-name="Backgroud" />;
}

function SmartIcon32() {
  return (
    <div className="[grid-area:1_/_1] ml-[4px] mt-[4px] relative size-[32px]" data-name="Smart Icon 32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Smart Icon 32"></g>
      </svg>
    </div>
  );
}

function AiRing() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="AI ring">
      <Backgroud />
      <SmartIcon32 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[20px] top-[76px]">
      <AiRing />
    </div>
  );
}

function Frame324() {
  return <div className="h-[60px] shrink-0 w-[213px]" />;
}

function Frame325() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-center left-[20px] top-[128px] w-[537px]">
      <Frame324 />
    </div>
  );
}

function Make2DVisibleCurves() {
  return (
    <div className="absolute inset-[19.94%_2.84%_2.84%_0.85%]" data-name="Make2D::Visible::Curves">
      <div className="absolute inset-[-0.59%_-0.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 86">
          <g id="Make2D::Visible::Curves">
            <path d={svgPaths.p3bf4f200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3f2afa80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <g id="Vector_3">
              <path d={svgPaths.p402a60} fill="var(--fill-0, #E4E4E4)" />
              <path d={svgPaths.p402a60} fill="url(#paint0_linear_1_5678)" fillOpacity="0.2" />
              <path d={svgPaths.p402a60} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5678" x1="33.5684" x2="7.1263" y1="54.7186" y2="81.0698">
              <stop stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Make2DVisibleTangents() {
  return (
    <div className="absolute inset-[3.43%_15.16%_20.88%_12.38%]" data-name="Make2D::Visible::Tangents">
      <div className="absolute inset-[-0.6%_-0.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 85">
          <g id="Make2D::Visible::Tangents">
            <g id="Vector">
              <path d={svgPaths.p15469c40} fill="var(--fill-0, white)" />
              <path d={svgPaths.p15469c40} fill="url(#paint0_linear_1_5668)" fillOpacity="0.2" />
              <path d={svgPaths.p15469c40} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d={svgPaths.p24b1fd00} fill="var(--fill-0, #C3BFBF)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5668" x1="57.0167" x2="16.1418" y1="42.1424" y2="42.1424">
              <stop offset="0.475962" stopOpacity="0" />
              <stop offset="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function KnobTop() {
  return (
    <div className="absolute inset-[6.76%_21.09%_61.65%_16.22%]" data-name="Knob Top">
      <div className="absolute inset-[-1.44%_-1.02%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 36">
          <g id="Knob Top">
            <path d={svgPaths.p2309de00} fill="var(--fill-0, #19C2FF)" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function KnobStars() {
  return (
    <div className="absolute inset-[13.46%_35.13%_69.23%_27.03%]" data-name="Knob-Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 20">
        <g id="Knob-Stars">
          <path d={svgPaths.p322cf100} fill="var(--fill-0, #1E1E1E)" id="Vector" />
          <path d={svgPaths.pb44c500} fill="var(--fill-0, #1E1E1E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function SmartKnob() {
  return (
    <div className="absolute h-[110px] left-[562px] overflow-clip top-[27px] w-[78px]" data-name="SmartKnob">
      <Make2DVisibleCurves />
      <Make2DVisibleTangents />
      <KnobTop />
      <KnobStars />
    </div>
  );
}

function AiCArmConfirm() {
  return (
    <div className="absolute backdrop-blur-sm backdrop-filter h-[168px] left-[35px] rounded-[10px] top-[827px] w-[685px]" data-name="AI C-arm confirm">
      <div className="h-[168px] overflow-clip relative rounded-[inherit] w-[685px]">
        <Group234 />
        <Frame326 />
        <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[78px] not-italic text-[#41c9fe] text-[20px] text-nowrap top-[35px] translate-y-[-50%]">
          <p className="leading-[22px] whitespace-pre">This workflow is ‘Smart UI’ Enabled</p>
        </div>
        <Frame325 />
        <p className="absolute font-['CentraleSans:Book',_sans-serif] leading-[24px] left-[76px] not-italic text-[0px] text-[18px] text-[rgba(255,255,255,0.8)] top-[51px] w-[443px] whitespace-pre-wrap">
          <span>{`You can now use the `}</span>
          <span className="font-['CentraleSans:Bold',_sans-serif]">{`Smart Knob™ `}</span>
          <span>{`on your TSO to continue the Acquisition of the CBCT. When the knob lights up, it is ready to go.  For confirmations you can also use your`}</span>
          <span className="font-['CentraleSans:Bold',_sans-serif]">{` Smart Foot pedal™`}</span>
        </p>
        <SmartKnob />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_4px_20px_10px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

export default function DialogIgt() {
  return (
    <div className="bg-[#212121] relative rounded-[4px] size-full" data-name="🟡 Dialog (IGT)">
      <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)]" />
      <DialogHeader />
      <SlotAgaMouse />
      <AiCArmConfirm />
    </div>
  );
}