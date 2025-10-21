import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-1p77spo76t";
import svgPathsConfirm from "../imports/svg-viqekrnizb";
import imgImage1 from "figma:asset/f1cb5f1f7c081414f7a7249b7a2f09599ed282d8.png";
import imgImage2 from "figma:asset/514f931605ef94c0506a7e75381aa1f39cabc66e.png";

interface IsocenterStepProps {
  onPrevious: () => void;
}

export function IsocenterStep({ onPrevious }: IsocenterStepProps) {
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !isEnterPressed) {
        setIsEnterPressed(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEnterPressed]);
  return (
    <div className="absolute left-0 top-[72px] right-0 bottom-0">
      {/* View Containers */}
      <div className="absolute h-[480px] left-[24px] top-[64px] w-[1424px]">
        {/* Left View Container */}
        <div className="absolute h-[480px] left-0 top-0 w-[712px]">
          <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
          
          {/* Content */}
          <div className="absolute bg-black bottom-0 box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[2px] right-0 top-[40px]">
            <div aria-hidden="true" className="absolute border-[#383838] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
          </div>
          
          {/* Header */}
          <div className="absolute bg-neutral-900 h-[39px] left-px right-px top-px">
            <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] right-[11px] rounded-[2px] size-[24px] top-[calc(50%+0.5px)] translate-y-[-50%]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2c0b8400} fill="#D6D6D6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right View Container (dimmed) */}
        <div className="absolute h-[480px] left-[712px] top-0 w-[712px]">
          {/* Content with opacity */}
          <div className="absolute bg-black bottom-0 box-border content-stretch flex flex-col gap-[10px] items-start left-0 opacity-50 p-[2px] right-0 top-[40px]">
            <div aria-hidden="true" className="absolute border-[#383838] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
          </div>
          
          {/* Header */}
          <div className="absolute bg-neutral-900 h-[39px] left-px right-px top-px">
            <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] right-[11px] rounded-[2px] size-[24px] top-[calc(50%+0.5px)] translate-y-[-50%]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2c0b8400} fill="#D6D6D6" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0" />
        </div>

        {/* Bottom Left View Container (selected) */}
        <div className="absolute h-[480px] left-[2px] top-0 w-[712px]">
          <div aria-hidden="true" className="absolute border border-[#383838] border-solid inset-0 pointer-events-none" />
          
          {/* Content */}
          <div className="absolute bg-black bottom-0 box-border content-stretch flex flex-col gap-[10px] items-start left-0 p-[2px] right-0 top-[40px]">
            <div aria-hidden="true" className="absolute border-[#383838] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
            </div>
          </div>
          
          {/* Header */}
          <div className="absolute bg-neutral-900 h-[39px] left-px right-px top-px">
            <div className="absolute box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] right-[11px] rounded-[2px] size-[24px] top-[calc(50%+0.5px)] translate-y-[-50%]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2c0b8400} fill="#D6D6D6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Selected Border */}
          <div className="absolute inset-0">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none ${isEnterPressed ? 'border-[#00bd5e]' : 'border-[#d6d6d6]'}`} />
          </div>
        </div>
      </div>

      {/* AI C-arm Confirm Banner - positioned above footer */}
      <div className="absolute backdrop-blur-sm backdrop-filter h-[142px] left-[28px] bottom-[107px] w-[708px]">
        <div className="h-[142px] overflow-clip relative rounded-[inherit] w-[708px]">
          {!isEnterPressed ? (
            <>
              {/* AI Ring Icon */}
              <div className="absolute contents left-[19px] top-[12px]">
                <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[19px] top-[12px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "33.9375", "--transform-inner-height": "33.9375" } as React.CSSProperties}>
                  <div className="flex-none rotate-[45deg]">
                    <div className="relative rounded-[8px] size-[33.941px]">
                      <div aria-hidden="true" className="absolute border border-[#c7efff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_5px_3px_rgba(255,255,255,0.25)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[17.61%_92.37%_66.9%_4.52%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPaths.p3030ad00} fill="white" />
                    <path d={svgPaths.p25913f00} fill="white" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[85px] not-italic text-[#41c9fe] text-[18px] text-nowrap top-[32px] translate-y-[-50%]">
                <ol className="list-decimal" start={1}>
                  <li className="ms-[27px]">
                    <span className="leading-[22px]">Automatically move C-arm into AP Position</span>
                  </li>
                </ol>
              </div>

              {/* Instructions */}
              <p className="absolute font-['CentraleSans:Book',_sans-serif] leading-[normal] left-[85px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[56px] w-[369px]">
                <span className="font-['CentraleSans:Bold',_sans-serif]">Press and hold</span>
                <span> one of the </span>
                <span className="font-['CentraleSans:Bold',_sans-serif]">Smart controls™</span>
                <span> to move the C-arm to the AP position</span>
              </p>

              {/* Smart Knob Illustration */}
              <div className="absolute h-[80px] left-[498px] overflow-clip top-[49px] w-[57px]">
                <SmartKnob />
              </div>

              {/* Pedal Press Illustration */}
              <div className="absolute h-[64px] left-[584px] top-[54px] w-[105px]">
                <PedalPress />
              </div>
            </>
          ) : (
            <>
              {/* AI Ring Icon */}
              <div className="absolute contents left-[19px] top-[12px]">
                <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[19px] top-[12px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "33.9375", "--transform-inner-height": "33.9375" } as React.CSSProperties}>
                  <div className="flex-none rotate-[45deg]">
                    <div className="relative rounded-[8px] size-[33.941px]">
                      <div aria-hidden="true" className="absolute border border-[#c7efff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_5px_3px_rgba(255,255,255,0.25)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[17.61%_92.37%_66.9%_4.52%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPathsConfirm.p3030ad00} fill="white" />
                    <path d={svgPathsConfirm.p25913f00} fill="white" />
                  </svg>
                </div>
              </div>

              {/* Title - Step 2 */}
              <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[85px] not-italic text-[#41c9fe] text-[18px] text-nowrap top-[32px] translate-y-[-50%]">
                <ol className="list-decimal" start={2}>
                  <li className="ms-[27px]">
                    <span className="leading-[22px]">Ready for acquisition</span>
                  </li>
                </ol>
              </div>

              {/* Instructions - Cine Pedal */}
              <p className="absolute font-['CentraleSans:Book',_sans-serif] leading-[normal] left-[85px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[56px] w-[369px]">
                <span>Step on the </span>
                <span className="font-['CentraleSans:Bold',_sans-serif]">CINE pedal</span>
                <span> to acquire expose</span>
              </p>

              {/* Cine Pedal Illustration */}
              <CinePedal />
            </>
          )}
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[rgba(158,213,255,0.8)] border-solid inset-[-2px] pointer-events-none shadow-[0px_4px_20px_10px_rgba(0,0,0,0.2)]" />
      </div>

      {/* Footer with Previous button */}
      <div className="absolute box-border content-stretch flex flex-col h-[80px] items-start justify-end left-0 p-[12px] bottom-0 w-full">
        <div className="absolute h-px left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
            <path d="M0 0.5L1472 0.5" stroke="#D6D6D6" strokeOpacity="0.12" />
          </svg>
        </div>
        <div className="absolute inset-[12px]">
          <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-1/2 translate-y-[-50%]">
            <button
              onClick={onPrevious}
              className="bg-[dimgrey] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative rounded-[2px] shrink-0 w-[184px] hover:opacity-90 transition-opacity"
            >
              <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-center text-nowrap">Previous</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartKnob() {
  return (
    <>
      {/* Make2D Visible Curves */}
      <div className="absolute inset-[19.94%_2.84%_2.84%_0.85%]">
        <div className="absolute inset-[-0.81%_-0.91%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 63">
            <path d={svgPaths.pf3d8b80} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3b0fd580} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <g>
              <path d={svgPaths.p1e533200} fill="#E4E4E4" />
              <path d={svgPaths.p1e533200} fill="url(#paint0_linear_knob)" fillOpacity="0.2" />
              <path d={svgPaths.p1e533200} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_knob" x1="24.6654" x2="5.43462" y1="39.9317" y2="59.1885">
                <stop stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Make2D Visible Tangents */}
      <div className="absolute inset-[3.43%_15.16%_20.88%_12.38%]">
        <div className="absolute inset-[-0.83%_-1.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 62">
            <g>
              <path d={svgPaths.p7a7b100} fill="white" />
              <path d={svgPaths.p7a7b100} fill="url(#paint0_linear_tangent)" fillOpacity="0.2" />
              <path d={svgPaths.p7a7b100} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d={svgPaths.p5a846c0} fill="#C3BFBF" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_tangent" x1="41.8007" x2="11.9306" y1="30.7854" y2="30.7854">
                <stop offset="0.475962" stopOpacity="0" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Knob Top */}
      <div className="absolute inset-[6.76%_21.09%_61.65%_16.22%]">
        <div className="absolute inset-[-1.98%_-1.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 27">
            <path d={svgPaths.p36e09300} fill="#19C2FF" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Knob Stars */}
      <div className="absolute inset-[13.46%_35.13%_69.23%_27.03%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 14">
          <path d={svgPaths.p31024a00} fill="#1E1E1E" />
          <path d={svgPaths.p2f337c00} fill="#1E1E1E" />
        </svg>
      </div>
    </>
  );
}

function PedalPress() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105 64">
      <g>
        <mask fill="black" height="7.05106" id="path-1-outside-1_pedal" maskUnits="userSpaceOnUse" width="35.2123" x="47.8926" y="39.4926">
          <rect fill="white" height="7.05106" width="35.2123" x="47.8926" y="39.4926" />
          <path clipRule="evenodd" d={svgPaths.p13645204} fillRule="evenodd" />
        </mask>
        <path clipRule="evenodd" d={svgPaths.p13645204} fill="#23B6F5" fillRule="evenodd" />
        <path d={svgPaths.p212e4180} fill="black" mask="url(#path-1-outside-1_pedal)" />
      </g>
      <g>
        <mask height="42" id="mask0_pedal" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="74" x="0" y="11">
          <path clipRule="evenodd" d={svgPaths.p16a6df00} fill="white" fillRule="evenodd" />
        </mask>
        <g mask="url(#mask0_pedal)">
          <path clipRule="evenodd" d={svgPaths.p25f1dee4} fill="url(#paint0_linear_pedal)" fillRule="evenodd" />
          <path d={svgPaths.p25f1dee4} stroke="black" />
        </g>
      </g>
      <g>
        <mask height="17" id="mask1_pedal" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="56" x="49" y="35">
          <path clipRule="evenodd" d={svgPaths.p37c2ed00} fill="white" fillRule="evenodd" />
        </mask>
        <g mask="url(#mask1_pedal)">
          <path clipRule="evenodd" d={svgPaths.p301223c0} fill="#E4E4E4" fillRule="evenodd" />
          <path d={svgPaths.p301223c0} stroke="black" />
        </g>
      </g>
      <path d={svgPaths.pdfd0380} fill="white" />
      <path d={svgPaths.pb55f00} fill="white" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_pedal" x1="18.1294" x2="12.3746" y1="26.3144" y2="52.5489">
          <stop stopColor="#DADADA" />
          <stop offset="1" stopColor="#858181" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CinePedal() {
  return (
    <div className="absolute h-[90px] left-[516px] top-[21px] w-[130px]">
      {/* Group 11 and 12 */}
      <div className="absolute bottom-0 left-0 right-0 top-[27.27%]">
        <div className="absolute bottom-[-12.22%] left-[-2.7%] right-[-2.7%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 74">
            <g>
              <g filter="url(#filter0_d_7_80_cine)">
                <path clipRule="evenodd" d={svgPathsConfirm.p8b20700} fill="#D3D3D3" fillRule="evenodd" />
              </g>
              <path clipRule="evenodd" d={svgPathsConfirm.p55b6a00} fill="#646464" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPathsConfirm.p4e4b480} fill="#646464" fillRule="evenodd" />
              <path d={svgPathsConfirm.p4821300} fill="#439AC1" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="73.4545" id="filter0_d_7_80_cine" width="137.016" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_80" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_80" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Path 2 - Arrow */}
      <div className="absolute bottom-[50.3%] left-[40.83%] right-[40.83%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 45">
          <path clipRule="evenodd" d={svgPathsConfirm.p1c5c7800} fill="url(#paint0_linear_7_86_cine)" fillRule="evenodd" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_86_cine" x1="1.18555" x2="1.18555" y1="0" y2="40.2775">
              <stop stopColor="#FBFBFB" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
