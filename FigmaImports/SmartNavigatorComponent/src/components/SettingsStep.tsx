import { useState } from 'react';
import svgPaths from "../imports/svg-ydksdioxaq";

interface SettingsStepProps {
  onPrevious: () => void;
  onContinue?: () => void;
}

export function SettingsStep({ onPrevious, onContinue }: SettingsStepProps) {
  const [selectedType, setSelectedType] = useState('helical');
  const [injectorCoupling, setInjectorCoupling] = useState(true);
  const [xrayDelay, setXrayDelay] = useState(0);
  const [interval, setInterval] = useState(2);

  return (
    <div className="absolute left-0 top-[72px] right-0 bottom-0">
      {/* CBCT Type Selection */}
      <div className="absolute left-[24px] top-[85px] w-[1424px]">
        <div className="absolute flex flex-col justify-center leading-[0] left-[67.5px] not-italic text-[#d6d6d6] top-0 translate-y-[-50%]">
          <p className="font-['CentraleSans:Bold',_sans-serif] leading-[24px] text-[20px] whitespace-pre">CBCT Type</p>
        </div>
        
        <div className="absolute h-[64px] left-[252px] top-0 w-[409px]">
          {/* Helical 10s */}
          <button
            onClick={() => {
              setSelectedType('helical');
              if (onContinue) {
                setTimeout(() => {
                  onContinue();
                }, 300);
              }
            }}
            className="absolute box-border content-stretch flex flex-col h-[64px] items-start left-0 p-[4px] top-0 w-[187px]"
          >
            <div className="bg-[#383838] h-[56px] relative shrink-0 w-full">
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[20px] text-center text-nowrap">
                      <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Helical 10s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {selectedType === 'helical' && (
              <div className="absolute inset-0 rounded-[4px]">
                <div aria-hidden="true" className="absolute border-[3px] border-[rgba(158,213,255,0.8)] border-solid inset-[-1.5px] pointer-events-none rounded-[5.5px]" />
              </div>
            )}
          </button>

          {/* Circular 10s */}
          <button
            onClick={() => {
              setSelectedType('circular');
              if (onContinue) {
                setTimeout(() => {
                  onContinue();
                }, 300);
              }
            }}
            className="absolute box-border content-stretch flex flex-col h-[64px] items-start left-[197px] p-[4px] top-0 w-[187px]"
          >
            <div className="bg-[#383838] h-[56px] relative shrink-0 w-full">
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[20px] text-center text-nowrap">
                      <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">Circular 10s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {selectedType === 'circular' && (
              <div className="absolute inset-0 rounded-[4px]">
                <div aria-hidden="true" className="absolute border-[3px] border-[rgba(158,213,255,0.8)] border-solid inset-[-1.5px] pointer-events-none rounded-[5.5px]" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="absolute h-px left-0 right-0 top-[242px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
          <path d="M0 0.5L1472 0.5" stroke="#D6D6D6" strokeOpacity="0.12" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="absolute left-[24px] top-[282px] w-[1424px]">
        <div className="box-border content-stretch flex items-start justify-between px-[120px] py-0 relative w-full">
          {/* Settings Section */}
          <div className="content-stretch flex flex-col gap-[20px] h-[294px] items-start relative shrink-0 w-[300px]">
            <div className="flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] w-full">
              <p className="leading-[24px]">Settings</p>
            </div>

            {/* Type Dropdown */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] h-[22px] items-start relative shrink-0 w-full">
                <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">Type</p>
              </div>
              <div className="bg-[rgba(89,89,89,0.55)] h-[40px] relative rounded-[2px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex h-[40px] items-center justify-between pl-[12px] pr-[4px] py-[8px] relative w-full">
                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[4px] py-0 relative w-full">
                          <p className="[white-space-collapse:collapse] basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[16px] text-nowrap">Roll - 8s</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="#E8E8E8" fillRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Injector coupling toggle */}
            <button
              onClick={() => setInjectorCoupling(!injectorCoupling)}
              className="content-stretch flex gap-[12px] h-[40px] items-start relative shrink-0 w-full"
            >
              <div className="basis-0 box-border content-stretch flex grow items-start min-h-px min-w-px px-0 py-[9px] relative shrink-0">
                <p className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px]">Injector coupling</p>
              </div>
              <div className="h-[40px] relative shrink-0 w-[48px]">
                <div className="absolute bottom-0 left-0 right-[-6.25%] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 40">
                    <rect fill={injectorCoupling ? "#00BD5E" : "#8C8C8C"} height="16" rx="8" width="40" x="4" y="12" />
                    <g filter="url(#filter0_d_6_8006)">
                      <path d={svgPaths.p35e30700} fill="#C4C4C4" transform={injectorCoupling ? "" : "translate(-12, 0)"} />
                      <path d={svgPaths.p3abe0900} stroke="black" strokeOpacity="0.08" transform={injectorCoupling ? "" : "translate(-12, 0)"} />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter0_d_6_8006" width="30" x="21" y="5">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_8006" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_8006" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </button>

            {/* X-ray delay */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] h-[22px] items-start relative shrink-0 w-[85.083px]">
                <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">X-ray delay</p>
              </div>
              <StepperControl value={xrayDelay} onChange={setXrayDelay} unit="s" />
            </div>

            {/* Interval */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] h-[22px] items-start relative shrink-0 w-[80.911px]">
                <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">Interval</p>
              </div>
              <StepperControl value={interval} onChange={setInterval} unit="s" />
            </div>
          </div>

          {/* Injector Suggestions Section */}
          <div className="content-stretch flex flex-col h-[294px] items-start justify-between relative shrink-0">
            <div className="flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
              <p className="leading-[24px] whitespace-pre">Injector Suggestions</p>
            </div>

            {/* Table */}
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] w-[200px]">
                <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
                  <p className="leading-[22px]">Catheter tip location</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
                  <p className="leading-[22px]">Selective vessel</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
                  <p className="leading-[22px]">Aortic arch</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[200px]">
                  <p className="leading-[22px]">Selective vessel</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">X-ray delay</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">3 s</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">3 s</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">3 s</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">Flow rate</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">3 ml/s</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">6 ml/s</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">3 ml/s</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">Volume</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">70 ml</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">120 ml</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">70 ml</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] gap-[20px] h-[148px] items-start leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-right w-[140px]">
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">Contrast</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">32 mgl/ml</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">64 mgl/ml</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-[140px]">
                  <p className="leading-[22px]">48 mgl/ml</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[22px] not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap whitespace-pre">
              <p className="mb-0">These suggestions apply to normal sized patients.</p>
              <p>For more information, refer to the Instructions for use.</p>
            </div>
          </div>
        </div>
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

interface StepperControlProps {
  value: number;
  onChange: (value: number) => void;
  unit: string;
}

function StepperControl({ value, onChange, unit }: StepperControlProps) {
  return (
    <div className="bg-[#212121] box-border content-stretch flex gap-[8px] h-[40px] items-center pl-[12px] pr-[33px] py-[9px] relative rounded-[2px] shrink-0 w-[120px]">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-[rgba(214,214,214,0.8)] text-nowrap">
        <p className="leading-[22px] overflow-ellipsis overflow-hidden whitespace-pre">{value}{unit}</p>
      </div>
      
      <div className="absolute bottom-0 content-stretch flex items-center right-0 top-0 w-[25px]">
        {/* Separator */}
        <div className="h-full relative shrink-0 w-px">
          <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
            <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 40">
                <path d="M0.5 40V0" stroke="#8C8C8C" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Arrows */}
        <div className="box-border content-stretch flex flex-col h-full items-start pl-0 pr-px py-px relative shrink-0">
          <button
            onClick={() => onChange(value + 1)}
            className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px pl-[4px] pr-[3px] py-[2px] relative shrink-0 hover:bg-[rgba(255,255,255,0.1)]"
          >
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d="M4.66667 9.33333L8 6L11.3333 9.33333V10H4.66667V9.33333Z" fill="rgba(214,214,214,0.8)" fillRule="evenodd" />
              </svg>
            </div>
          </button>
          <button
            onClick={() => onChange(Math.max(0, value - 1))}
            className="basis-0 bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px pl-[4px] pr-[3px] py-[2px] relative shrink-0 hover:bg-[rgba(255,255,255,0.1)]"
          >
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d="M11.3333 6.66667L8 10L4.66667 6.66667V6H11.3333V6.66667Z" fill="rgba(214,214,214,0.8)" fillRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
