import React, { useState, useEffect } from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';
import svgPaths from './svg-paths';
import CBCT1 from '../../../assets/CBCT1.png';
import CBCT2 from '../../../assets/CBCT2.png';
import CArmLeft from '../../../assets/carm-left.png';
import CArmRight from '../../../assets/carm-right.png';
import SmartKnobImg from '../../../assets/smart-knob.png';
import PedalImg from '../../../assets/pedal.png';
import SmartButtonIcon from '../../../assets/Smart-Button-squares.svg';
import SmartUIIcon from '../../../assets/SmartUIIconSquare.svg';
import { useSettings, matchesInput } from '../../../contexts/SettingsContext';

interface SmartNavigatorProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  isActive?: boolean; // Whether this component should handle navigation
}

interface SmartKnobIllustrationProps {
  small?: boolean;
}

function SmartKnobIllustration({ small = false }: SmartKnobIllustrationProps) {
  const containerClass = small ? "relative h-[40px] w-[28px]" : "relative h-[110px] w-[78px]";
  
  return (
    <div className={containerClass}>
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

interface SettingsStepProps {
  onPrevious: () => void;
  onContinue?: () => void;
  selectedType?: string;
  focusedElement?: 'helical' | 'circular' | 'previous';
}

function SettingsStep({ onPrevious, onContinue, selectedType: propSelectedType, focusedElement }: SettingsStepProps) {
  const [selectedType, setSelectedType] = useState(propSelectedType || 'helical');
  const [injectorCoupling, setInjectorCoupling] = useState(true);
  const [xrayDelay, setXrayDelay] = useState(0);
  const [interval, setInterval] = useState(2);

  return (
    <div className="flex-1 flex flex-col">
      {/* CBCT Type Selection */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-4 mb-4">
          <p className="font-['CentraleSans:Bold',_sans-serif] text-sm text-[#d6d6d6]">CBCT Type</p>
          
          <div className="flex gap-3">
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
              className={`relative px-4 py-2 rounded border-2 transition-all ${
                focusedElement === 'helical'
                  ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#383838]'
                  : 'border-[#3b3b3b] bg-[#383838] hover:border-[#41c9fe]'
              }`}
            >
              <span className="font-['CentraleSans:Bold',_sans-serif] text-sm text-[#d6d6d6]">
                Helical 10s
              </span>
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
              className={`relative px-4 py-2 rounded border-2 transition-all ${
                focusedElement === 'circular'
                  ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#383838]'
                  : 'border-[#3b3b3b] bg-[#383838] hover:border-[#41c9fe]'
              }`}
            >
              <span className="font-['CentraleSans:Bold',_sans-serif] text-sm text-[#d6d6d6]">
                Circular 10s
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-[#d6d6d6] opacity-12 mx-4 mb-4" />

      {/* Main Content */}
      <div className="flex-1 px-4 pb-4">
        <div className="flex justify-between gap-8">
          {/* Settings Section */}
          <div className="flex-1 max-w-sm">
            <h3 className="font-['CentraleSans:Bold',_sans-serif] text-sm text-[#d6d6d6] mb-4">
              Settings
            </h3>

            <div className="space-y-4">
              {/* Type Dropdown */}
              <div>
                <label className="block font-['CentraleSans:Book',_sans-serif] text-sm text-[#d6d6d6] mb-2">
                  Type
                </label>
                <div className="bg-[rgba(89,89,89,0.55)] rounded px-3 py-2 flex items-center justify-between">
                  <span className="font-['CentraleSans:Book',_sans-serif] text-sm text-[#e8e8e8]">
                    Roll - 8s
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="#E8E8E8" fillRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Injector coupling toggle */}
              <div className="flex items-center justify-between">
                <span className="font-['CentraleSans:Book',_sans-serif] text-sm text-[#d6d6d6]">
                  Injector coupling
                </span>
                <button
                  onClick={() => setInjectorCoupling(!injectorCoupling)}
                  className="relative w-12 h-6"
                >
                  <div className={`w-10 h-4 rounded-full transition-colors ${
                    injectorCoupling ? 'bg-[#00BD5E]' : 'bg-[#8C8C8C]'
                  }`} />
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                    injectorCoupling ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* X-ray delay */}
              <div className="flex items-center justify-between">
                <span className="font-['CentraleSans:Book',_sans-serif] text-sm text-[#d6d6d6]">
                  X-ray delay
                </span>
                <StepperControl value={xrayDelay} onChange={setXrayDelay} unit="s" />
              </div>

              {/* Interval */}
              <div className="flex items-center justify-between">
                <span className="font-['CentraleSans:Book',_sans-serif] text-sm text-[#d6d6d6]">
                  Interval
                </span>
                <StepperControl value={interval} onChange={setInterval} unit="s" />
              </div>
            </div>
          </div>

          {/* Injector Suggestions Section */}
          <div className="flex-1">
            <h3 className="font-['CentraleSans:Bold',_sans-serif] text-lg text-[#d6d6d6] mb-6">
              Injector Suggestions
            </h3>

            {/* Table */}
            <div className="grid grid-cols-5 gap-4 text-sm">
              {/* Headers */}
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6]">Catheter tip location</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">X-ray delay</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">Flow rate</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">Volume</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">Contrast</div>

              {/* Row 1 */}
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6]">Selective vessel</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">3 s</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">3 ml/s</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">70 ml</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">32 mgl/ml</div>

              {/* Row 2 */}
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6]">Aortic arch</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">3 s</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">6 ml/s</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">120 ml</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">64 mgl/ml</div>

              {/* Row 3 */}
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6]">Selective vessel</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">3 s</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">3 ml/s</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">70 ml</div>
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-right">48 mgl/ml</div>
            </div>

            <div className="mt-6">
              <p className="font-['CentraleSans:Book',_sans-serif] text-sm text-[#d6d6d6]">
                These suggestions apply to normal sized patients.
              </p>
              <p className="font-['CentraleSans:Book',_sans-serif] text-sm text-[#d6d6d6]">
                For more information, refer to the Instructions for use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Previous button */}
      <div className="border-t border-[#d6d6d6] border-opacity-12 p-3">
        <button
          onClick={onPrevious}
          className={`px-4 py-2 rounded text-[#e8e8e8] text-sm transition-all ${
            focusedElement === 'previous'
              ? 'bg-[#41c9fe] text-black shadow-lg shadow-[#41c9fe]/30'
              : 'bg-[dimgrey] hover:opacity-90'
          }`}
        >
          Previous
        </button>
      </div>
    </div>
  );
}

interface IsocenterStepProps {
  onPrevious: () => void;
  onContinue?: () => void;
}

function IsocenterStep({ onPrevious, onContinue }: IsocenterStepProps) {
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !isEnterPressed) {
        setIsEnterPressed(true);
        if (onContinue) {
          setTimeout(() => {
            onContinue();
          }, 1000);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isEnterPressed, onContinue]);

  return (
    <div className="flex-1 relative">
      {/* View Containers - 2 viewport layout */}
      <div className="absolute left-6 top-16 right-6 bottom-48 flex gap-0">
        {/* Left View Container - Selected with white border */}
        <div className="relative flex-1 border-2 border-white">
          <div className="absolute bg-neutral-900 h-10 left-0 right-0 top-0 flex items-center justify-end px-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d="M2 2V22H22V2H2ZM20 20H4V6H20V20Z" fill="#D6D6D6" />
            </svg>
          </div>
          <div className="absolute bg-black left-0 right-0 top-10 bottom-0 flex items-center justify-center p-4">
            <img 
              src={CArmLeft} 
              alt="C-arm Left View" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right View Container - Dimmed */}
        <div className="relative flex-1 border border-[#383838] opacity-50">
          <div className="absolute bg-neutral-900 h-10 left-0 right-0 top-0 flex items-center justify-end px-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              <path d="M2 2V22H22V2H2ZM20 20H4V6H20V20Z" fill="#D6D6D6" />
            </svg>
          </div>
          <div className="absolute bg-black left-0 right-0 top-10 bottom-0 flex items-center justify-center p-4">
            <img 
              src={CArmRight} 
              alt="C-arm Right View" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* AI C-arm Confirm Banner */}
      <div className="absolute left-7 bottom-20 w-[708px] backdrop-blur-sm backdrop-filter">
        <div className="relative border-2 border-[rgba(158,213,255,0.8)] rounded p-6 shadow-[0px_4px_20px_10px_rgba(0,0,0,0.2)] overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)" }} />
          {!isEnterPressed ? (
            <div className="relative flex items-start gap-6">
              {/* Smart UI Icon */}
              <div className="flex-shrink-0">
                <img src={SmartUIIcon} alt="Smart UI" className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="font-['CentraleSans:Bold',_sans-serif] text-[#41c9fe] text-lg mb-3">
                  <ol className="list-decimal ml-7">
                    <li>Automatically move C-arm into AP Position</li>
                  </ol>
                </div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[rgba(255,255,255,0.8)] text-base">
                  <span className="font-['CentraleSans:Bold',_sans-serif]">Press and hold</span>
                  <span> one of the </span>
                  <span className="font-['CentraleSans:Bold',_sans-serif]">Smart controls™</span>
                  <span> to move the C-arm to the AP position</span>
                </p>
              </div>

              {/* Smart Knob Illustration */}
              <div className="flex-shrink-0">
                <SmartKnobIllustration small />
              </div>

              {/* Pedal Press Illustration */}
              <div className="flex-shrink-0 w-24 h-16">
                <img src={PedalImg} alt="Pedal" className="w-full h-full object-contain" />
              </div>
            </div>
          ) : (
            <div className="relative flex items-start gap-6">
              {/* Smart UI Icon */}
              <div className="flex-shrink-0">
                <img src={SmartUIIcon} alt="Smart UI" className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="font-['CentraleSans:Bold',_sans-serif] text-[#41c9fe] text-lg mb-3">
                  <ol className="list-decimal ml-7" start={2}>
                    <li>Ready for acquisition</li>
                  </ol>
                </div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[rgba(255,255,255,0.8)] text-base">
                  <span>Step on the </span>
                  <span className="font-['CentraleSans:Bold',_sans-serif]">CINE pedal</span>
                  <span> to acquire expose</span>
                </p>
              </div>

              {/* Cine Pedal Illustration */}
              <div className="flex-shrink-0 w-32 h-20">
                <img src={PedalImg} alt="CINE Pedal" className="w-full h-full object-contain" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with Previous button */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#d6d6d6] border-opacity-12 p-3">
        <button
          onClick={onPrevious}
          className="px-4 py-2 rounded text-[#e8e8e8] text-sm transition-all bg-[dimgrey] hover:opacity-90"
        >
          Previous
        </button>
      </div>
    </div>
  );
}

function SmartKnobSmall() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 57 80">
      <path d={svgPaths.pb44c500} fill="#E4E4E4" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.pb44c500} fill="white" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.pb44c500} fill="#19C2FF" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.pb44c500} fill="#1E1E1E" />
      <path d={svgPaths.pb44c500} fill="#1E1E1E" />
    </svg>
  );
}

interface StepperControlProps {
  value: number;
  onChange: (value: number) => void;
  unit: string;
}

function StepperControl({ value, onChange, unit }: StepperControlProps) {
  return (
    <div className="bg-[#212121] border border-[#8c8c8c] rounded px-3 py-1 flex items-center gap-2 w-24">
      <span className="font-['CentraleSans:Book',_sans-serif] text-sm text-[rgba(214,214,214,0.8)] flex-1">
        {value}{unit}
      </span>
      
      <div className="flex flex-col">
        <button
          onClick={() => onChange(value + 1)}
          className="w-4 h-3 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-sm"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path clipRule="evenodd" d="M4.66667 9.33333L8 6L11.3333 9.33333V10H4.66667V9.33333Z" fill="rgba(214,214,214,0.8)" fillRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-4 h-3 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-sm"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path clipRule="evenodd" d="M11.3333 6.66667L8 10L4.66667 6.66667V6H11.3333V6.66667Z" fill="rgba(214,214,214,0.8)" fillRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function SmartNavigator({ componentSize = 'large', isActive = false }: SmartNavigatorProps) {
  // Content scaling based on component size - headers stay normal, only content scales
  const getContentScale = () => {
    switch (componentSize) {
      case 'small':
        return 'scale-[0.4]';
      case 'medium':
        return 'scale-[0.6]';
      case 'large':
        return 'scale-[0.8]'; // Scaled down to 80% for better fit
      case 'xlarge':
        return 'scale-[0.9]'; // Slightly scaled down for xlarge
      case 'fullscreen':
        return 'scale-100';
      default:
        return 'scale-[0.8]';
    }
  };

  const scale = getContentScale();

  // Wizard state
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProtocol, setSelectedProtocol] = useState(1);
  const [showSmartBanner, setShowSmartBanner] = useState(true);
  const [focusedProtocol, setFocusedProtocol] = useState(1); // For navigation
  const [selectedCBCTType, setSelectedCBCTType] = useState('helical'); // For step 2 navigation
  const [focusedElement, setFocusedElement] = useState<'helical' | 'circular' | 'previous'>('helical'); // For step 2 navigation
  
  // Get input settings for navigation
  const { inputSettings } = useSettings();

  const STEPS = [
    { id: 1, label: 'Protocol', name: 'Protocol' },
    { id: 2, label: 'Settings', name: 'Settings' },
    { id: 3, label: 'Isocenter', name: 'Isocenter' },
    { id: 4, label: 'Check Path', name: 'Check Path' },
    { id: 5, label: 'Acquisition', name: 'Acquisition' },
  ];

  const PROTOCOLS = [
    { id: 1, name: 'CBCT', selected: true, image: CBCT1 },
    { id: 2, name: 'CBCT Open', selected: false, image: CBCT2 },
    { id: 3, name: 'CBCT Dual', selected: false, image: CBCT2 },
    { id: 4, name: 'CBCT Open Dual', selected: false, image: CBCT1 },
  ];

  const handleProtocolSelect = (protocolId: number) => {
    setSelectedProtocol(protocolId);
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

  // Navigation controls when SmartNavigator is active
  useEffect(() => {
    if (!isActive) return; // Only handle navigation when active

    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentStep === 1) {
        // Protocol selection navigation
        if (matchesInput(event, inputSettings.workflowStepLeft)) {
          event.preventDefault();
          event.stopPropagation();
          setFocusedProtocol(prev => prev > 1 ? prev - 1 : PROTOCOLS.length);
        } else if (matchesInput(event, inputSettings.workflowStepRight)) {
          event.preventDefault();
          event.stopPropagation();
          setFocusedProtocol(prev => prev < PROTOCOLS.length ? prev + 1 : 1);
        } else if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          handleProtocolSelect(focusedProtocol);
        }
      } else if (currentStep === 2) {
        // Settings step navigation (CBCT types + Previous button)
        if (matchesInput(event, inputSettings.workflowStepLeft)) {
          event.preventDefault();
          event.stopPropagation();
          if (focusedElement === 'helical') {
            setFocusedElement('previous');
          } else if (focusedElement === 'circular') {
            setFocusedElement('helical');
          } else if (focusedElement === 'previous') {
            setFocusedElement('circular');
          }
        } else if (matchesInput(event, inputSettings.workflowStepRight)) {
          event.preventDefault();
          event.stopPropagation();
          if (focusedElement === 'helical') {
            setFocusedElement('circular');
          } else if (focusedElement === 'circular') {
            setFocusedElement('previous');
          } else if (focusedElement === 'previous') {
            setFocusedElement('helical');
          }
        } else if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          if (focusedElement === 'helical' || focusedElement === 'circular') {
            setSelectedCBCTType(focusedElement);
            handleContinue();
          } else if (focusedElement === 'previous') {
            handlePrevious();
          }
        }
      }
      // No navigation for other steps - wizard steps are not scrollable
    };

    const handleWheel = (event: WheelEvent) => {
      if (currentStep === 1) {
        // Protocol selection navigation
        if (matchesInput(event, inputSettings.workflowStepLeft)) {
          event.preventDefault();
          event.stopPropagation();
          setFocusedProtocol(prev => prev > 1 ? prev - 1 : PROTOCOLS.length);
        } else if (matchesInput(event, inputSettings.workflowStepRight)) {
          event.preventDefault();
          event.stopPropagation();
          setFocusedProtocol(prev => prev < PROTOCOLS.length ? prev + 1 : 1);
        }
      } else if (currentStep === 2) {
        // Settings step navigation (CBCT types + Previous button)
        if (matchesInput(event, inputSettings.workflowStepLeft)) {
          event.preventDefault();
          event.stopPropagation();
          if (focusedElement === 'helical') {
            setFocusedElement('previous');
          } else if (focusedElement === 'circular') {
            setFocusedElement('helical');
          } else if (focusedElement === 'previous') {
            setFocusedElement('circular');
          }
        } else if (matchesInput(event, inputSettings.workflowStepRight)) {
          event.preventDefault();
          event.stopPropagation();
          if (focusedElement === 'helical') {
            setFocusedElement('circular');
          } else if (focusedElement === 'circular') {
            setFocusedElement('previous');
          } else if (focusedElement === 'previous') {
            setFocusedElement('helical');
          }
        }
      }
      // No wheel navigation for other steps - wizard steps are not scrollable
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
    };
  }, [currentStep, focusedProtocol, focusedElement, isActive, inputSettings, PROTOCOLS.length]);

  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      <ViewportHeader title="Smart Navigator" />
      
      {/* Content area uses full available space, then gets scaled */}
      <div className="flex-1 p-6 min-h-0 overflow-hidden">
        <div className={`transform ${scale} origin-center w-full h-full`}>
          {/* Figma Wizard Content */}
          <div className="bg-[#212121] relative rounded-[4px] w-full h-full flex flex-col">
            <div aria-hidden="true" className="absolute border border-[#595959] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.2)]" />
            
            {/* Wizard Header */}
            <div className="flex items-center justify-between p-8 pb-4">
              <div className="flex items-center gap-4">
                <img src={SmartButtonIcon} alt="Smart Button" className="w-10 h-10" />
                <div>
                  <h1 className="text-white text-2xl font-['CentraleSans:Bold',_sans-serif] leading-tight">
                    Acquire CBCT
                  </h1>
                  {currentStep === 3 && (
                    <p className="text-[#d6d6d6] text-base font-['CentraleSans:Book',_sans-serif] mt-2">
                      <span className="font-['CentraleSans:Bold',_sans-serif]">Isocenter first in AP</span> and afterwards in lateral orientation.
                    </p>
                  )}
                </div>
              </div>
              <button 
                onClick={() => console.log('Close wizard')}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d={svgPaths.p13d20c80} fill="currentColor" />
                </svg>
              </button>
            </div>

            {/* Wizard Steps - Centered */}
            <div className="px-8 pb-8">
              <div className="flex items-center justify-center gap-2">
                {STEPS.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        currentStep > step.id 
                          ? 'bg-[#00bd5e] border-[#00bd5e]' 
                          : currentStep === step.id
                            ? 'bg-[#41c9fe] border-[#41c9fe]'
                            : 'bg-transparent border-[#3b3b3b]'
                      }`}>
                        {currentStep > step.id ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 15 15">
                            <path d="M15 4L13 2L7 9L3 5L1 7L7 13L15 4Z" fill="white" />
                          </svg>
                        ) : (
                          <span className={`text-sm font-['CentraleSans:Bold',_sans-serif] ${
                            currentStep === step.id ? 'text-black' : 'text-[#d6d6d6]'
                          }`}>
                            {step.id}
                          </span>
                        )}
                      </div>
                      <span className={`text-sm font-['CentraleSans:Book',_sans-serif] ${
                        currentStep === step.id ? 'text-white' : 'text-[#d6d6d6]'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                    {index < STEPS.length - 1 && (
                      <div className="w-12 h-px bg-[#3b3b3b]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 flex flex-col px-8">
              {currentStep === 1 && (
                <>
                  {/* Section Title */}
                  <div className="mb-8">
                    <h2 className="text-white text-xl font-['CentraleSans:Bold',_sans-serif] text-center">
                      Acquisition Protocols
                    </h2>
                  </div>

                  {/* Protocol Selection */}
                  <div className="flex-1 mb-8">
                    <div className="grid grid-cols-4 gap-8 justify-center max-w-4xl mx-auto">
                      {PROTOCOLS.map((protocol) => (
                        <div
                          key={protocol.id}
                          onClick={() => handleProtocolSelect(protocol.id)}
                          className={`relative bg-[#1a1a1a] rounded-lg border-2 cursor-pointer transition-all hover:border-[#41c9fe] ${
                            isActive && focusedProtocol === protocol.id
                              ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30'
                              : 'border-[#3b3b3b]'
                          }`}
                        >
                          <div className="flex flex-col">
                            {/* Image area - natural size */}
                            <div className="w-full bg-[#000000] rounded-t-lg flex items-center justify-center overflow-hidden">
                              <img 
                                src={protocol.image} 
                                alt={protocol.name}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                            {/* Text area - separate from image */}
                            <div className="bg-black bg-opacity-60 px-4 py-3 rounded-b-lg">
                              <h3 className="text-white text-base font-['CentraleSans:Medium',_sans-serif] text-left">
                                {protocol.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="border-t border-[#d6d6d6] border-opacity-12 pt-8 pb-8 px-4">
                    <div className="flex items-center justify-between">
                      {/* Smart UI Banner */}
                      {showSmartBanner && (
                        <div className="relative backdrop-blur-sm backdrop-filter rounded-lg border border-white shadow-lg p-6 max-w-2xl overflow-hidden">
                          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)" }} />
                          <div className="relative flex items-center gap-4">
                            {/* Smart UI Icon */}
                            <div className="flex-shrink-0">
                              <img src={SmartUIIcon} alt="Smart UI" className="w-12 h-12" />
                            </div>

                            <div className="flex-1">
                              {/* Title */}
                              <p className="font-['CentraleSans:Bold',_sans-serif] text-[#41c9fe] text-lg leading-tight mb-3">
                                This workflow is 'Smart UI' Enabled
                              </p>

                              {/* Description */}
                              <p className="font-['CentraleSans:Book',_sans-serif] text-base text-[rgba(255,255,255,0.8)] leading-relaxed">
                                <span>You can now use the </span>
                                <span className="font-['CentraleSans:Bold',_sans-serif]">Smart Knob™ </span>
                                <span>on your TSO to continue the Acquisition of the CBCT. When the knob lights up, it is ready to go. For confirmations you can also use your</span>
                                <span className="font-['CentraleSans:Bold',_sans-serif]"> Smart Foot pedal™</span>
                              </p>
                            </div>

                            {/* Smart Knob illustration */}
                            <div className="flex-shrink-0">
                              <SmartKnobIllustration />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Instruction text */}
                      <div className="flex items-center gap-3 mr-4">
                        <p className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-lg">
                          <span>Select </span>
                          <span className="font-['CentraleSans:Bold',_sans-serif]">acquisition protocol</span>
                          <span> then press a </span>
                        </p>
                        
                        <div className="inline-block">
                          <SmartKnobIllustration />
                        </div>
                        
                        <p className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-lg">
                          <span> to continue</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Settings */}
              {currentStep === 2 && (
                <SettingsStep 
                  onPrevious={handlePrevious}
                  onContinue={handleContinue}
                  selectedType={selectedCBCTType}
                  focusedElement={isActive ? focusedElement : undefined}
                />
              )}

              {/* Step 3: Isocenter */}
              {currentStep === 3 && (
                <IsocenterStep 
                  onPrevious={handlePrevious}
                  onContinue={handleContinue}
                />
              )}

              {/* Other steps placeholder */}
              {currentStep > 3 && (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-white text-xl font-['CentraleSans:Bold',_sans-serif] mb-4">
                      {STEPS[currentStep - 1].name} Step
                    </h2>
                    <p className="text-[#d6d6d6] text-sm">
                      Step {currentStep} content coming soon...
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={handlePrevious}
                        className="px-6 py-2 bg-[#3b3b3b] text-white rounded hover:bg-[#4b4b4b] transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleContinue}
                        className="px-6 py-2 bg-[#41c9fe] text-black rounded hover:bg-[#31b9ee] transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
