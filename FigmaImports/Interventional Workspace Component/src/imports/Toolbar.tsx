import { imgEye, imgContent, imgSeparator, imgIcon, imgIcon1, imgIcon2, imgIcon3, imgIcon4 } from "./svg-bzuti";

function Eye() {
  return (
    <div className="relative shrink-0 size-6" data-name="Eye">
      <img className="block max-w-none size-full" src={imgEye} />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start overflow-clip relative shrink-0" data-name="Content">
      <Eye />
    </div>
  );
}

function DlsArrowDown24() {
  return <img className="block max-w-none size-full" src={imgContent} />;
}

function Arrow() {
  return (
    <div className="absolute right-1 size-6 top-1/2 translate-y-[-50%]" data-name="Arrow">
      <DlsArrowDown24 />
    </div>
  );
}

function View() {
  return (
    <div className="box-border content-stretch flex gap-3 h-10 items-center justify-start min-w-[68px] pl-3 pr-1 py-2 relative rounded-[2px] shrink-0" data-name="View">
      <Content />
      <Arrow />
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
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Zoom">
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
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Pan">
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
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Contrast Brightness">
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

function Content1() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start overflow-clip relative shrink-0" data-name="Content">
      <Icon3 />
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

function Rotate() {
  return (
    <div className="box-border content-stretch flex gap-3 h-10 items-center justify-start min-w-[68px] pl-3 pr-1 py-2 relative rounded-[2px] shrink-0" data-name="Rotate">
      <Content1 />
      <Arrow1 />
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
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Annotate">
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
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[2px] shrink-0" data-name="Quick Measurement">
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

function Content2() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start overflow-clip relative shrink-0" data-name="Content">
      <Icon6 />
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

function Presets() {
  return (
    <div className="box-border content-stretch flex gap-3 h-10 items-center justify-start min-w-[68px] pl-3 pr-1 py-2 relative rounded-[2px] shrink-0" data-name="Presets">
      <Content2 />
      <Arrow2 />
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

export default function Toolbar1() {
  return (
    <div className="content-stretch flex items-start justify-start relative size-full" data-name="Toolbar">
      <Toolbar />
    </div>
  );
}