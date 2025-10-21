import svgPaths from "../imports/svg-g0qhlgbodb";

interface WizardHeaderProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
}

export function WizardHeader({ title, subtitle, onClose }: WizardHeaderProps) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full">
      <div className="h-[72px] relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[20px] h-[72px] items-center pl-[20px] pr-[24px] py-[20px] relative w-full">
            {/* Title and Subtitle */}
            <div className="basis-0 flex flex-col justify-center min-h-px min-w-px relative shrink-0 grow">
              <div className="flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden text-[#d6d6d6] text-[20px] text-nowrap">
                <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">
                  {title}
                </p>
              </div>
              {subtitle && (
                <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic text-[#d6d6d6] text-[22px] text-center mt-1">
                  <p className="leading-[28px]" dangerouslySetInnerHTML={{ __html: subtitle }} />
                </div>
              )}
            </div>

            {/* Smart UI enabled text */}
            <div className="flex flex-col font-['CentraleSans:Light',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[18px] text-nowrap text-right w-[173px]">
              <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">
                Smart UI enabled
              </p>
            </div>

            {/* Smart Button Icon */}
            <div className="h-[43.2px] relative shadow-[0px_0px_10px_0px_rgba(11,206,255,0.5)] shrink-0 w-[47.25px]">
              <SmartButtonIcon />
            </div>

            {/* Close button */}
            <button 
              onClick={onClose}
              className="relative shrink-0 size-[32px] hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Close"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <path d={svgPaths.p13d20c80} fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartButtonIcon() {
  return (
    <div className="size-full relative">
      {/* Background overlay */}
      <div className="absolute bg-black inset-0 opacity-0" />
      
      {/* Colored squares */}
      <div className="absolute bg-[#346ab1] inset-[14.58%_14.58%_52.08%_52.08%] opacity-50 rounded-[3px]" />
      <div className="absolute bg-[#2b86b2] inset-[14.58%_52.08%_72.92%_14.58%] opacity-70 rounded-[3px]" />
      <div className="absolute bg-[#33ba9b] bottom-[14.58%] left-3/4 opacity-60 right-[14.58%] rounded-[3px] top-[52.08%]" />
      <div className="absolute bg-[#20b1cf] inset-[31.25%_29.17%_14.58%_14.58%] opacity-40 rounded-[3px]" />
      
      {/* Icons */}
      <div className="absolute inset-[18.75%_19.44%_56.25%_58.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p29af4c00} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[35.42%_34.72%_20.14%_20.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
          <path d={svgPaths.p268eaf00} fill="white" />
        </svg>
      </div>
    </div>
  );
}
