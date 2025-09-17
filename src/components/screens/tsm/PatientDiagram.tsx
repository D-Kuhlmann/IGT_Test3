import { 
  imgSupine, 
  imgVector10, 
  imgVector11, 
  imgIconLargeBrain, 
  imgIconLargeHeart, 
  imgPath3, 
  imgPath4, 
  imgWrist1, 
  imgGroup192 
} from "../../../imports/svg-w95w9";
import { InAppSettingsPanel } from "../../InAppSettingsPanel";

function PatientMattrass() {
  return (
    <div className="absolute content-stretch flex gap-2.5 items-center justify-start left-[665px] opacity-50 top-[15px]">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[630px] ml-0 mt-0 opacity-30 rounded-[32px] w-[200px]" />
        <div className="[grid-area:1_/_1] bg-[#d9d9d9] h-[584px] ml-[11px] mt-1.5 opacity-30 rounded-[32px] w-[178px]" />
      </div>
    </div>
  );
}

function AccessPoints() {
  return (
    <>
      <div className="absolute left-2 size-[19px] top-[270px]">
        <img className="block max-w-none size-full" src={imgWrist1} />
      </div>
      <div className="absolute left-[65px] size-[19px] top-[301px]">
        <img className="block max-w-none size-full" src={imgWrist1} />
      </div>
      <div className="absolute left-[154px] size-[19px] top-[270px]">
        <img className="block max-w-none size-full" src={imgWrist1} />
      </div>
    </>
  );
}

function HumanSupine() {
  return (
    <div className="absolute h-[572px] left-[674px] top-[30px] w-[181px]">
      <div className="absolute inset-0">
        <img className="block max-w-none size-full" src={imgSupine} />
      </div>
      <div className="absolute inset-[17.42%_27.99%_70.72%_53.16%]">
        <img className="block max-w-none size-full" src={imgVector10} />
      </div>
      <div className="absolute inset-[17.53%_52.13%_70.61%_29.02%]">
        <img className="block max-w-none size-full" src={imgVector11} />
      </div>
      <div className="absolute inset-[1.22%_39.22%_90.44%_39.23%]">
        <img className="block max-w-none size-full" src={imgIconLargeBrain} />
      </div>
      <div className="absolute inset-[19.23%_32.55%_73.69%_50.28%]">
        <img className="block max-w-none size-full" src={imgIconLargeHeart} />
      </div>
      <div className="absolute inset-[30.78%_43.24%_63.59%_28.16%]">
        <img className="block max-w-none size-full" src={imgPath3} />
      </div>
      <div className="absolute inset-[38.69%_33.28%_54.78%_34.22%]">
        <img className="block max-w-none size-full" src={imgPath4} />
      </div>
      <div className="absolute font-['CentraleSans:Light',_sans-serif] inset-[86.19%_37.57%_10.49%_37.57%] leading-[0] not-italic text-[#9d9c9c] text-[14px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">supine</p>
      </div>
      <div className="absolute inset-[35.1%_23.05%_3.75%_23.01%]">
        <img className="block max-w-none size-full" src={imgGroup192} />
      </div>
      <AccessPoints />
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="absolute h-[148px] left-[907px] top-[474px] w-[82px]">
      <InAppSettingsPanel />
    </div>
  );
}

export function PatientDiagram() {
  return (
    <div className="relative w-full h-full">
      <PatientMattrass />
      <HumanSupine />
      <SettingsPanel />
    </div>
  );
}