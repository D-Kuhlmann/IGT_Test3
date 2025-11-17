import { useState } from "react";
import { ComponentHeader } from "../../shared/ViewportHeaders";
import { imgVesselIcon, imgPath, imgIconLargeBrain, imgIconLargeHeart, imgWrist1, imgGroup192, imgSupine, imgVector, imgVector1, imgPath1, imgPath2, imgVector90, imgVector88, imgVector89, imgVector91, imgVector106, imgVector107, imgVector92, imgVector93, imgVector109, imgVector111, imgVector112, imgVector110, imgVector117, imgVector118, imgVector94, imgVector95, imgVector105 } from "../../../imports/svg-qdmr4";

function VesselIcon() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="VesselIcon">
      <img className="block max-w-none size-full" src={imgVesselIcon} />
    </div>
  );
}

function Frame102() {
  return (
    <div className="box-border content-stretch flex gap-[12.5px] h-[60px] items-center justify-start px-0 py-[25px] relative rounded-[12.5px] shrink-0">
      <VesselIcon />
    </div>
  );
}

function Frame321() {
  return (
    <div className="box-border content-stretch flex gap-[25px] items-center justify-start pl-0 pr-[12.5px] py-0 relative shrink-0">
      <Frame102 />
      <div className="font-['CentraleSans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#d7d7d7] text-[25px] text-nowrap">
        <p className="leading-[45px] whitespace-pre">
          <span>{`PTA `}</span>
          <span className="font-['CentraleSans:Book',_sans-serif] not-italic">Procedure</span>
        </p>
      </div>
      <div className="h-[12.5px] relative shrink-0 w-[20.833px]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath} />
      </div>
    </div>
  );
}

function PatientMattrass() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Patient-Mattrass">
      <div className="absolute bg-[#d9d9d9] h-[960.8px] left-0 opacity-[0.15] rounded-[32px] top-0 w-[305.016px]" />
      <div className="absolute bg-[#d9d9d9] h-[890.646px] left-[16.77px] opacity-[0.15] rounded-[32px] top-[9.15px] w-[271.464px]" />
    </div>
  );
}

function IconLargeBrain() {
  return (
    <div className="absolute inset-[1.22%_39.22%_90.44%_39.23%]" data-name="icon-large-brain">
      <img className="block max-w-none size-full" src={imgIconLargeBrain} />
    </div>
  );
}

function IconLargeHeart() {
  return (
    <div className="absolute inset-[19.23%_32.55%_73.69%_50.28%]" data-name="icon-large-heart">
      <img className="block max-w-none size-full" src={imgIconLargeHeart} />
    </div>
  );
}

function Wrist1() {
  return (
    <div className="absolute left-2 size-[19px] top-[270px]" data-name="Wrist 1">
      <img className="block max-w-none size-full" src={imgWrist1} />
    </div>
  );
}

function Groin() {
  return (
    <div className="absolute left-[65px] size-[19px] top-[301px]" data-name="Groin">
      <img className="block max-w-none size-full" src={imgWrist1} />
    </div>
  );
}

function Wrist2() {
  return (
    <div className="absolute left-[154px] size-[19px] top-[270px]" data-name="Wrist 2">
      <img className="block max-w-none size-full" src={imgWrist1} />
    </div>
  );
}

function Group192() {
  return (
    <div className="absolute inset-[35.1%_23.05%_3.75%_23.01%]">
      <img className="block max-w-none size-full" src={imgGroup192} />
    </div>
  );
}

function HumanSupine() {
  return (
    <div className="h-[872px] relative shrink-0 w-[275px]" data-name="human-supine">
      <div className="absolute inset-0" data-name="Supine">
        <img className="block max-w-none size-full" src={imgSupine} />
      </div>
      <div className="absolute inset-[17.42%_27.99%_70.72%_53.16%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute inset-[17.53%_52.13%_70.61%_29.02%]" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector1} />
      </div>
      <IconLargeBrain />
      <IconLargeHeart />
      <div className="absolute inset-[30.78%_43.24%_63.59%_28.16%]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath1} />
      </div>
      <div className="absolute inset-[38.69%_33.28%_54.78%_34.22%]" data-name="path">
        <img className="block max-w-none size-full" src={imgPath2} />
      </div>
      <div className="absolute font-['CentraleSans:Light',_sans-serif] inset-[86.19%_41.91%_11.63%_41.73%] leading-[0] not-italic text-[#9d9c9c] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">supine</p>
      </div>
      <div className="absolute flex inset-[43.18%_53.66%_54.47%_41.96%] items-center justify-center">
        <div className="flex-none h-[20.501px] rotate-[180deg] scale-y-[-100%] w-[12.032px]">
          <div className="bg-gradient-to-b from-[#66656500] size-full to-[#666565] to-[48.68%]" />
        </div>
      </div>
      <div className="absolute flex inset-[43.18%_40.97%_54.47%_54.66%] items-center justify-center">
        <div className="flex-none h-[20.501px] rotate-[180deg] scale-y-[-100%] w-[12.032px]">
          <div className="bg-gradient-to-b from-[#66656500] size-full to-[#666565] to-[48.68%]" />
        </div>
      </div>
      <div className="absolute flex inset-[7.52%_47.59%_90.13%_48.03%] items-center justify-center">
        <div className="flex-none h-[20.501px] rotate-[180deg] scale-y-[-100%] w-[12.032px]">
          <div className="bg-gradient-to-b from-[#66656500] size-full to-[#666565] to-[48.68%]" />
        </div>
      </div>
      <div className="absolute inset-[42.95%_22.66%_55.41%_22.34%]">
        <div className="absolute inset-[-3.25%_-0.14%_-3.49%_-0.12%]">
          <img className="block max-w-none size-full" src={imgVector90} />
        </div>
      </div>
      <div className="absolute inset-[14.58%_69.06%_69.78%_25.58%]">
        <div className="absolute inset-[-0.01%_-3.39%_-0.08%_-3.31%]">
          <img className="block max-w-none size-full" src={imgVector88} />
        </div>
      </div>
      <div className="absolute inset-[28.85%_25.46%_69.89%_25.58%]">
        <div className="absolute inset-[-4.52%_-0.16%_-4.31%_-0.11%]">
          <img className="block max-w-none size-full" src={imgVector89} />
        </div>
      </div>
      <div className="absolute inset-[60.66%_56.94%_37.94%_19.88%]">
        <div className="absolute inset-[-3.47%_-0.22%_-4.1%_-0.42%]">
          <img className="block max-w-none size-full" src={imgVector91} />
        </div>
      </div>
      <div className="absolute flex inset-[48.25%_48.36%_46.04%_37.54%] items-center justify-center">
        <div className="flex-none h-[9.104px] rotate-[51.4deg] skew-x-[16.945deg] w-[54.053px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.8%_-0.23%_-5.49%_-0.45%]">
              <img className="block max-w-none size-full" src={imgVector106} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[48.25%_37.49%_46.04%_48.41%] items-center justify-center">
        <div className="flex-none h-[9.104px] rotate-[128.6deg] scale-y-[-100%] skew-x-[16.945deg] w-[54.053px]">
          <div className="relative size-full">
            <div className="absolute inset-[-4.8%_-0.23%_-5.49%_-0.45%]">
              <img className="block max-w-none size-full" src={imgVector107} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[14.58%_24.79%_69.78%_69.84%] items-center justify-center">
        <div className="flex-none h-[136.401px] rotate-[180deg] scale-y-[-100%] w-[14.756px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.01%_-3.39%_-0.08%_-3.31%]">
              <img className="block max-w-none size-full" src={imgVector92} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[60.66%_19.94%_37.94%_56.87%] items-center justify-center">
        <div className="flex-none h-[12.196px] rotate-[180deg] scale-y-[-100%] w-[63.77px]">
          <div className="relative size-full">
            <div className="absolute inset-[-3.47%_-0.22%_-4.1%_-0.42%]">
              <img className="block max-w-none size-full" src={imgVector93} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[72.55%_20.5%_26.05%_71.22%] items-center justify-center">
        <div className="flex-none h-[12.196px] rotate-[180deg] scale-y-[-100%] w-[22.775px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.02%_-1.37%_-4.1%_-1.91%]">
              <img className="block max-w-none size-full" src={imgVector109} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[50.52%_4.13%_47.3%_88.89%] items-center justify-center">
        <div className="flex-none h-[9.386px] rotate-[316.546deg] scale-y-[-100%] skew-x-[0.231deg] w-[17.594px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.63%_-1.77%_-5.33%_-2.47%]">
              <img className="block max-w-none size-full" src={imgVector111} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[50.52%_88.6%_47.3%_4.42%] items-center justify-center">
        <div className="flex-none h-[9.386px] rotate-[223.454deg] skew-x-[0.231deg] w-[17.594px]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.63%_-1.77%_-5.33%_-2.47%]">
              <img className="block max-w-none size-full" src={imgVector112} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[72.55%_71.29%_26.05%_20.43%]">
        <div className="absolute inset-[-2.02%_-1.37%_-4.1%_-1.91%]">
          <img className="block max-w-none size-full" src={imgVector110} />
        </div>
      </div>
      <div className="absolute inset-[91.43%_65.77%_7.17%_30.92%]">
        <div className="absolute inset-[-0.9%_-4.91%_-4.1%_-5.35%]">
          <img className="block max-w-none size-full" src={imgVector117} />
        </div>
      </div>
      <div className="absolute flex inset-[91.43%_29.88%_7.17%_66.81%] items-center justify-center">
        <div className="flex-none h-[12.196px] rotate-[180deg] scale-y-[-100%] w-[9.11px]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.9%_-4.91%_-4.1%_-5.35%]">
              <img className="block max-w-none size-full" src={imgVector118} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[14.58%_49.27%_81.48%_30.94%]">
        <div className="absolute bottom-[-1.46%] left-[-0.87%] right-0 top-[-0.48%]">
          <img className="block max-w-none size-full" src={imgVector94} />
        </div>
      </div>
      <div className="absolute flex inset-[14.58%_30.16%_81.48%_50.06%] items-center justify-center">
        <div className="flex-none h-[34.332px] rotate-[180deg] scale-y-[-100%] w-[54.411px]">
          <div className="relative size-full">
            <div className="absolute bottom-[-1.46%] left-[-0.87%] right-0 top-[-0.48%]">
              <img className="block max-w-none size-full" src={imgVector95} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[10.23%_39.27%_87.45%_40.03%]">
        <div className="absolute inset-[-1.27%_-0.75%_-2.47%_-0.74%]">
          <img className="block max-w-none size-full" src={imgVector105} />
        </div>
      </div>
      <Wrist1 />
      <Groin />
      <Wrist2 />
      <Group192 />
    </div>
  );
}

function Visual() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-[960.8px] items-center justify-start px-3.5 py-11 relative shrink-0 w-[305.016px]" data-name="Visual">
      <PatientMattrass />
      <HumanSupine />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-[305px]" data-name="Right">
      <Frame321 />
      <Visual />
    </div>
  );
}

function XrayLiveContent() {
  return (
    <div className="flex flex-wrap gap-[12px] items-center justify-center relative w-fit h-fit" data-name="XrayLiveContent">
      {/* Main content container for instructions and PTA procedure */}
      <div className="flex gap-[12px] items-start justify-center w-fit h-fit">
        {/* Instructions text (paragraphs on the left) */}
        <div className="font-['CentraleSans:Book',_sans-serif] not-italic relative text-[#d6d6d6]">
          <p className="font-['CentraleSans:Bold',_sans-serif] leading-[35px] mb-0 text-[#42c9ff] text-[17px]">X-ray is in Parked position</p>
          <ul className="css-ed5n1g list-disc mb-0">
            <li className="leading-[30px] mb-0 text-[15px]" style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
              <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">Twist</span>
              <span>{` the `}</span>
              <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">SmartControl™</span>
              <span>{` to select your smart procedure Workflow.`}</span>
            </li>
            <li className="mb-0" style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
              <span className="font-['CentraleSans:Bold',_sans-serif] leading-[30px] not-italic text-[15px]">After you've gained access, move the C-arm into position.</span>
            </li>
            <li style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
              <span className="font-['CentraleSans:Bold',_sans-serif] leading-[35px] not-italic text-[15px]">Pressing on the Patient graphic will allow you to select the correct EPX.</span>
            </li>
          </ul>
        </div>
        
        {/* PTA Procedure section (Right component) */}
        <div className="w-[150px] h-[550px] overflow-hidden">
          <div className="scale-[0.5] origin-top-left">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
}

interface XrayLiveProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  hideHeader?: boolean;
  hideContent?: boolean;
  contentImage?: string; // Path to image to display instead of default content
}

export function XrayLive({ componentSize = 'large', hideHeader = false, hideContent = false, contentImage }: XrayLiveProps) {
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
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      {!hideHeader && <ComponentHeader title="Xray Live" showPatientBar={showPatientBar} />}
      
      {/* Content area uses full available space, then gets scaled */}
      <div className="flex-1 p-4 min-h-0 w-full overflow-hidden bg-[#000000]">
        {contentImage ? (
          /* Display custom image */
          <div className="w-full h-full flex items-center justify-center bg-white">
            <img src={contentImage} alt="Aligned Skull" className="max-w-full max-h-full object-contain" />
          </div>
        ) : !hideContent ? (
          <div className={`transform ${scale} origin-center w-full h-full flex items-center justify-center`}>
            <XrayLiveContent />
          </div>
        ) : (
          /* Black content area when hideContent is true */
          <div className="w-full h-full bg-[#000000]" />
        )}
      </div>
    </div>
  );
}