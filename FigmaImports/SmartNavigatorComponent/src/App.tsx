import { useState } from 'react';
import svgPaths from "./imports/svg-g0qhlgbodb";
import imgImage from "figma:asset/abb26c302f8a54c42ccf3c60a6af057fc98a5651.png";
import imgImage1 from "figma:asset/f108ada266be743090357393717838324b82c818.png";
import { WizardHeader } from './components/WizardHeader';
import { WizardStepper } from './components/WizardStepper';
import { ProtocolSelection } from './components/ProtocolSelection';
import { SettingsStep } from './components/SettingsStep';
import { IsocenterStep } from './components/IsocenterStep';

const STEPS = [
  { id: 1, label: 'Protocol', name: 'Protocol' },
  { id: 2, label: 'Settings', name: 'Settings' },
  { id: 3, label: 'Isocenter', name: 'Isocenter' },
  { id: 4, label: 'Check Path', name: 'Check Path' },
  { id: 5, label: 'Acquisition', name: 'Acquisition' },
];

const PROTOCOLS = [
  { id: 1, name: 'CBCT', image: imgImage, selected: true },
  { id: 2, name: 'CBCT Open', image: imgImage1, selected: false },
  { id: 3, name: 'CBCT Dual', image: imgImage1, selected: false },
  { id: 4, name: 'CBCT Open Dual', image: imgImage, selected: false },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProtocol, setSelectedProtocol] = useState(1);
  const [showSmartBanner, setShowSmartBanner] = useState(true);

  const handleClose = () => {
    console.log('Wizard closed');
  };

  const handleProtocolSelect = (protocolId: number) => {
    setSelectedProtocol(protocolId);
    // Advance to next step when protocol is selected
    if (currentStep === 1) {
      setTimeout(() => {
        setCurrentStep(2);
      }, 300);
    }
  };

  const handleContinue = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCancel = () => {
    console.log('Acquisition cancelled');
  };

  return (
    <div className="bg-black flex items-center justify-center min-h-screen px-8 py-6">
      <div className="bg-[#212121] relative rounded-[4px] max-h-[calc(100vh-48px)] w-full max-w-[1472px]" data-name="IGT FlexVision Wizard" style={{ aspectRatio: '1472/1024' }}>
        <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)]" />
      
      <WizardHeader 
        title="Acquire CBCT"
        subtitle={currentStep === 3 ? '<span class="font-[\'CentraleSans:Bold\',_sans-serif]">Isocenter first in AP</span> and afterwards in lateral orientation.' : undefined}
        onClose={handleClose}
      />
      
      {/* Wizard Stepper - Always in same position */}
      <div className="absolute h-[72px] left-[24px] top-[72px] w-[1424px]">
        <WizardStepper 
          steps={STEPS}
          currentStep={currentStep}
        />
      </div>

      {/* Step Content */}
      {currentStep === 1 && (
        <ProtocolSelection 
          protocols={PROTOCOLS}
          selectedProtocol={selectedProtocol}
          onSelect={handleProtocolSelect}
        />
      )}

      {currentStep === 2 && (
        <SettingsStep 
          onPrevious={handlePrevious}
          onContinue={handleContinue}
        />
      )}

      {currentStep === 3 && (
        <IsocenterStep onPrevious={handlePrevious} />
      )}

      {/* Bottom Section - Only show on step 1 */}
      {currentStep === 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-[224px]">
        {/* Divider line */}
        <div className="absolute left-0 right-0 top-0 h-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1472 1">
            <path d="M0 0.5L1472 0.5" stroke="#D6D6D6" strokeOpacity="0.12" />
          </svg>
        </div>

        {/* Smart UI Banner - Inlined */}
        {showSmartBanner && (
          <div className="absolute backdrop-blur-sm backdrop-filter h-[168px] left-[35px] rounded-[10px] top-[28px] w-[685px]">
            <div className="h-[168px] overflow-clip relative rounded-[inherit] w-[685px]">
              {/* AI Ring icon */}
              <div className="absolute left-[20px] top-[76px]">
                <div className="relative size-[40px]">
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
            </div>
            <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_4px_20px_10px_rgba(0,0,0,0.2)]" />
          </div>
        )}

        {/* Instruction text */}
        <div className="absolute left-[740px] top-[115px]">
          <div className="flex items-center gap-[8px]">
            <p className="font-['CentraleSans:Book',_sans-serif] leading-[28px] not-italic text-[#d6d6d6] text-[20px] text-nowrap">
              <span>Select </span>
              <span className="font-['CentraleSans:Bold',_sans-serif]">acquisition protocol</span>
              <span> then press a </span>
            </p>
            
            {/* Smart Knob illustration */}
            <div className="relative h-[40px] w-[28px] inline-block" style={{ transform: 'translateY(2px)' }}>
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
            
            <p className="font-['CentraleSans:Book',_sans-serif] leading-[28px] not-italic text-[#d6d6d6] text-[20px] text-nowrap">
              <span> to continue</span>
            </p>
          </div>
        </div>

        {/* Action buttons (hidden by default) */}
        <button
          onClick={handleContinue}
          className="absolute box-border flex gap-[8px] h-[40px] items-center justify-center left-[1208px] opacity-0 hover:opacity-100 transition-opacity px-[16px] py-[9px] rounded-[2px] top-[164px] w-[240px]"
          style={{ 
            backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 240 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.0606e-13 4.4468 -26.681 1.4945e-13 120 -2.1277)\\\'><stop stop-color=\\\'rgba(205,162,220,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(154,157,223,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(103,152,226,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(77,150,228,1)\\\' offset=\\\'0.625\\\'/><stop stop-color=\\\'rgba(51,147,229,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(26,145,231,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(13,143,231,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,142,232,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" 
          }}
        >
          <p className="font-['CentraleSans:Book',_sans-serif] leading-[28px] not-italic text-[20px] text-nowrap text-white whitespace-pre">
            Continue
          </p>
        </button>

        <button
          onClick={handleCancel}
          className="absolute bg-[dimgrey] box-border flex gap-[8px] items-center justify-center left-[996px] opacity-0 hover:opacity-100 transition-opacity px-[16px] py-[9px] rounded-[2px] top-[164px] w-[200px]"
        >
          <p className="font-['CentraleSans:Book',_sans-serif] leading-[22px] not-italic text-[#e8e8e8] text-[16px] text-center text-nowrap">
            Cancel acquisition
          </p>
        </button>
      </div>
      )}
      </div>
    </div>
  );
}
