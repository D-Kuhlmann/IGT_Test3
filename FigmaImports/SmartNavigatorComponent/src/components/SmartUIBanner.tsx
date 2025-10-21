import svgPaths from "../imports/svg-g0qhlgbodb";

interface SmartUIBannerProps {
  onDismiss?: () => void;
}

export function SmartUIBanner({ onDismiss }: SmartUIBannerProps) {
  return (
    <div className="absolute backdrop-blur-sm backdrop-filter h-[168px] left-[35px] rounded-[10px] top-[827px] w-[685px]">
      <div className="h-[168px] overflow-clip relative rounded-[inherit] w-[685px]">
        {/* AI Ring icon */}
        <div className="absolute left-[20px] top-[76px]">
          <AIRingIcon />
        </div>

        {/* Title */}
        <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[78px] not-italic text-[#41c9fe] text-[20px] text-nowrap top-[35px] translate-y-[-50%]">
          <p className="leading-[22px] whitespace-pre">This workflow is 'Smart UI' Enabled</p>
        </div>

        {/* Description */}
        <p className="absolute font-['CentraleSans:Book',_sans-serif] leading-[24px] left-[76px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[51px] w-[443px] whitespace-pre-wrap">
          <span>You can now use the </span>
          <span className="font-['CentraleSans:Bold',_sans-serif]">Smart Knob™ </span>
          <span>on your TSO to continue the Acquisition of the CBCT. When the knob lights up, it is ready to go.  For confirmations you can also use your</span>
          <span className="font-['CentraleSans:Bold',_sans-serif]"> Smart Foot pedal™</span>
        </p>

        {/* Smart Knob illustration */}
        <SmartKnobIllustration />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_4px_20px_10px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function AIRingIcon() {
  return (
    <div className="relative size-[40px]">
      {/* Rotating ring */}
      <div className="absolute left-[11.72px] top-[11.72px]">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "33.9375", "--transform-inner-height": "33.9375" } as React.CSSProperties}>
          <div className="flex-none rotate-[45deg]">
            <div className="relative rounded-[8px] size-[33.941px]">
              <div aria-hidden="true" className="absolute border border-[#c7efff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_5px_3px_rgba(255,255,255,0.25)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Icon content */}
      <div className="absolute inset-[14.69%_93.26%_72.51%_3.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.p1ccf4280} fill="white" />
          <path d={svgPaths.p272b7d80} fill="white" />
        </svg>
      </div>
    </div>
  );
}

function SmartKnobIllustration() {
  return (
    <div className="absolute h-[110px] left-[562px] overflow-clip top-[27px] w-[78px]">
      {/* Base curves */}
      <div className="absolute inset-[19.94%_2.84%_2.84%_0.85%]">
        <div className="absolute inset-[-0.59%_-0.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 86">
            <path d={svgPaths.p3bf4f200} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3f2afa80} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p402a60} fill="#E4E4E4" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Tangents */}
      <div className="absolute inset-[3.43%_15.16%_20.88%_12.38%]">
        <div className="absolute inset-[-0.6%_-0.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 85">
            <path d={svgPaths.p15469c40} fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p24b1fd00} fill="#C3BFBF" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Knob top */}
      <div className="absolute inset-[6.76%_21.09%_61.65%_16.22%]">
        <div className="absolute inset-[-1.44%_-1.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 36">
            <path d={svgPaths.p2309de00} fill="#19C2FF" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Knob stars */}
      <div className="absolute inset-[13.46%_35.13%_69.23%_27.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 20">
          <path d={svgPaths.p322cf100} fill="#1E1E1E" />
          <path d={svgPaths.pb44c500} fill="#1E1E1E" />
        </svg>
      </div>
    </div>
  );
}
