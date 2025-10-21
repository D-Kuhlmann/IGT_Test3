import svgPaths from "./svg-viqekrnizb";

function Group233() {
  return (
    <div className="absolute inset-[17.61%_92.37%_66.9%_4.52%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group 233">
          <path d={svgPaths.p3030ad00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p25913f00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group234() {
  return (
    <div className="absolute contents left-[19px] top-[12px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[19px] top-[12px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "33.9375", "--transform-inner-height": "33.9375" } as React.CSSProperties}>
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

function Group11() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[27.27%]">
      <div className="absolute bottom-[-12.22%] left-[-2.7%] right-[-2.7%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 74">
          <g id="Group 11">
            <g filter="url(#filter0_d_7_80)" id="Rectangle">
              <path clipRule="evenodd" d={svgPaths.p8b20700} fill="var(--fill-0, #D3D3D3)" fillRule="evenodd" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p55b6a00} fill="var(--fill-0, #646464)" fillRule="evenodd" id="Rectangle_2" />
            <path clipRule="evenodd" d={svgPaths.p4e4b480} fill="var(--fill-0, #646464)" fillRule="evenodd" id="Rectangle_3" />
            <path d={svgPaths.p4821300} fill="var(--fill-0, #439AC1)" id="Rectangle_4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="73.4545" id="filter0_d_7_80" width="137.016" x="0" y="0">
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
  );
}

function Group12() {
  return (
    <div className="absolute bottom-0 contents left-0 right-0 top-[27.27%]">
      <Group11 />
    </div>
  );
}

function CinePedal() {
  return (
    <div className="absolute h-[90px] left-[516px] top-[21px] w-[130px]" data-name="CinePedal">
      <Group12 />
      <div className="absolute bottom-[50.3%] left-[40.83%] right-[40.83%] top-0" data-name="Path 2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 45">
          <path clipRule="evenodd" d={svgPaths.p1c5c7800} fill="url(#paint0_linear_7_86)" fillRule="evenodd" id="Path 2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_86" x1="1.18555" x2="1.18555" y1="0" y2="40.2775">
              <stop stopColor="#FBFBFB" stopOpacity="0.01" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function AiCArmConfirm() {
  return (
    <div className="backdrop-blur-sm backdrop-filter relative size-full" data-name="AI C-arm confirm">
      <div className="relative size-full">
        <Group234 />
        <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[85px] not-italic text-[#41c9fe] text-[18px] text-nowrap top-[32px] translate-y-[-50%]">
          <ol className="list-decimal" start="2">
            <li className="ms-[27px]">
              <span className="leading-[22px]">Ready for acquisition</span>
            </li>
          </ol>
        </div>
        <p className="absolute font-['CentraleSans:Book',_sans-serif] leading-[normal] left-[85px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] top-[56px] w-[369px]">
          <span>{`Step on the `}</span>
          <span className="font-['CentraleSans:Bold',_sans-serif]">CINE pedal</span>
          <span>{` to acquire expose`}</span>
        </p>
        <CinePedal />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(158,213,255,0.8)] border-solid inset-[-2px] pointer-events-none shadow-[0px_4px_20px_10px_rgba(0,0,0,0.2)]" />
    </div>
  );
}