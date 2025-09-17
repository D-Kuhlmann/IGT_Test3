import React from "react";
import imgCoronal from "figma:asset/4c8bbf83fe02a6ff097b8e4c2200db41b8b53782.png";
import imgAxial from "figma:asset/d7258c707bf99e6cc2fdd9e2b612b0b00247fc8f.png";
import imgSagittal from "figma:asset/c12d087aa3c301b81e74e12cfc43dd149178b7a0.png";
import { imgImageInformation, imgLeft, imgBottom, imgRight } from "../imports/svg-f5yzw";

interface MedicalImageViewerProps {
  imageUrl: string;
  viewType: "coronal" | "axial" | "sagittal";
  rotationAngle: string;
  hasRotationButtons?: boolean;
  hasReferenceLines?: boolean;
  className?: string;
}

function OrientationIndicator({ viewType }: { viewType: "coronal" | "axial" | "sagittal" }) {
  const getOrientationImage = () => {
    switch (viewType) {
      case "coronal":
        return imgCoronal;
      case "axial":
        return imgAxial;
      case "sagittal":
        return imgSagittal;
      default:
        return imgCoronal;
    }
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[4px] relative shrink-0" data-name="Orientation indicator">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-20" data-name={viewType} style={{ backgroundImage: `url('${getOrientationImage()}')` }} />
    </div>
  );
}

function RotationButtons() {
  return (
    <div className="absolute inset-0" data-name="Rotation buttons">
      <div className="absolute bg-black left-2 size-6 translate-y-[-50%]" data-name="Left" style={{ top: "calc(50% + 0.5px)" }}>
        <img className="block max-w-none size-full" src={imgImageInformation} />
      </div>
      <div className="absolute bg-black bottom-2 size-6 translate-x-[-50%]" data-name="Bottom" style={{ left: "calc(50% + 0.5px)" }}>
        <img className="block max-w-none size-full" src={imgLeft} />
      </div>
      <div className="absolute bg-black right-2 size-6 translate-y-[-50%]" data-name="Right" style={{ top: "calc(50% + 0.5px)" }}>
        <img className="block max-w-none size-full" src={imgBottom} />
      </div>
      <div className="absolute bg-black size-6 top-2 translate-x-[-50%]" data-name="Top" style={{ left: "calc(50% + 0.5px)" }}>
        <img className="block max-w-none size-full" src={imgRight} />
      </div>
    </div>
  );
}

function ReferenceLines({ type }: { type: "horizontal" | "both" }) {
  const Line1 = () => <div className="basis-0 bg-[#63a2ff] grow h-px min-h-px min-w-px shrink-0" />;
  const Line3 = () => (
    <div className="basis-0 content-stretch flex grow h-4 items-center justify-start min-h-px min-w-px relative shrink-0">
      <Line1 />
    </div>
  );

  const VerticalLine = () => (
    <div className="content-stretch flex gap-4 items-center justify-center opacity-70 relative size-full" data-name="Vertical line">
      {[...Array(2).keys()].map((_, i) => (
        <Line3 key={i} />
      ))}
    </div>
  );

  const Line5 = () => <div className="basis-0 bg-[#ff8370] grow h-px min-h-px min-w-px shrink-0" />;
  const Line6 = () => (
    <div className="basis-0 content-stretch flex grow h-4 items-center justify-start min-h-px min-w-px relative shrink-0">
      <Line5 />
    </div>
  );

  const HorizontalLine = () => (
    <div className="absolute content-stretch flex gap-4 h-4 items-center justify-center left-1 opacity-70 right-1 top-1/2 translate-y-[-50%]" data-name="Horizontal line">
      {[...Array(2).keys()].map((_, i) => (
        <Line6 key={i} />
      ))}
    </div>
  );

  const Indicator = ({ color = "#23cc72" }: { color?: string }) => (
    <div className={`absolute bottom-3 h-4 left-3 opacity-70 w-2`} style={{ backgroundColor: color }} data-name="Indicator" />
  );

  if (type === "both") {
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

  return (
    <div className="absolute bottom-[-0.33px] left-0 right-0 top-0" data-name="Reference lines">
      <Indicator color="#ff8370" />
    </div>
  );
}

export default function MedicalImageViewer({ 
  imageUrl, 
  viewType, 
  rotationAngle, 
  hasRotationButtons = false, 
  hasReferenceLines = false,
  className = "" 
}: MedicalImageViewerProps) {
  const borderClass = hasRotationButtons 
    ? "border-[#383838] border-[1px_0px_1px_1px] border-solid" 
    : "border border-[#383838] border-solid";

  return (
    <div className={`basis-0 grow min-h-px min-w-px relative shrink-0 w-full ${className}`} data-name="View container">
      <div aria-hidden="true" className={`absolute ${borderClass} inset-0 pointer-events-none`} />
      
      {/* Content */}
      <div className="absolute bg-black box-border content-stretch flex flex-col gap-2.5 inset-0 items-start justify-start p-[2px]" data-name="Content">
        <div aria-hidden="true" className={`absolute ${borderClass} inset-0 pointer-events-none`} />
        <div className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('${imageUrl}')` }} />
      </div>

      {/* Image Information Overlay */}
      <div className="absolute inset-0 overflow-clip" data-name="Image information">
        <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-1 items-end justify-end p-[12px] right-0" data-name="Bottom right">
          <OrientationIndicator viewType={viewType} />
          <div className="content-stretch flex flex-col items-end justify-start relative shrink-0" data-name="Orientation">
            <div className="content-stretch flex gap-1.5 h-[22px] items-center justify-end relative shrink-0" data-name="Label">
              <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
                <p className="leading-[22px] whitespace-pre">{rotationAngle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotation Buttons */}
      {hasRotationButtons && <RotationButtons />}

      {/* Reference Lines */}
      {hasReferenceLines && <ReferenceLines type={hasRotationButtons ? "both" : "horizontal"} />}
    </div>
  );
}