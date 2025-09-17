import { PatientDiagram } from "./PatientDiagram";

function InstructionText() {
  return (
    <div className="absolute font-['CentraleSans:Book',_sans-serif] leading-[0] not-italic text-[#d6d6d6] text-[0px] w-[603px]" style={{ top: "calc(50% - 283px)", left: "calc(50% - 477px)" }}>
      <p className="font-['CentraleSans:Bold',_sans-serif] leading-[70px] mb-0 text-[#42c9ff] text-[30px]">X-ray is in Parked position</p>
      <ul className="css-ed5n1g list-disc mb-0">
        <li className="leading-[50px] mb-0 text-[26px]" style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
          <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">Twist</span>
          <span> the </span>
          <span className="font-['CentraleSans:Bold',_sans-serif] not-italic">SmartControl™</span>
          <span> to select your smart procedure Workflow.</span>
        </li>
        <li className="mb-0" style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
          <span className="font-['CentraleSans:Bold',_sans-serif] leading-[50px] not-italic text-[26px]">After you've gained access, move the C-arm into position.</span>
        </li>
        <li style={{ marginInlineStart: "calc(1.5 * 1 * var(--list-marker-font-size, 0))" }}>
          <span className="font-['CentraleSans:Bold',_sans-serif] leading-[50px] not-italic text-[26px]">Pressing on the Patient graphic will allow you to select the correct EPX.</span>
        </li>
      </ul>
      <p className="leading-[40px] text-[24px]">&nbsp;</p>
    </div>
  );
}

export function MainContent() {
  return (
    <div className="h-[654px] overflow-clip relative shrink-0 w-[1004px]">
      <InstructionText />
      <PatientDiagram />
    </div>
  );
}