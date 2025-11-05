import React from 'react';
import { ComponentHeader } from '../../shared/ViewportHeaders';

function InterventionalIVUSContent() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-full p-8">
      {/* Main IVUS Display Area */}
      <div className="flex gap-6 items-start justify-center w-full max-w-6xl">
        {/* Left Panel - IVUS Image */}
        <div className="flex-1 bg-black border border-[#383838] rounded-lg overflow-hidden">
          <div className="aspect-square relative">
            {/* IVUS Circular Display */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-radial from-[#1a1a1a] to-black">
              {/* Placeholder for IVUS circular image */}
              <div className="relative w-[80%] h-[80%]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#41c9fe] opacity-30"></div>
                {/* Middle ring */}
                <div className="absolute inset-[15%] rounded-full border border-[#41c9fe] opacity-20"></div>
                {/* Inner ring */}
                <div className="absolute inset-[30%] rounded-full border border-[#41c9fe] opacity-10"></div>
                
                {/* Center crosshair */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-[#41c9fe] opacity-30"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#41c9fe] opacity-30"></div>
                
                {/* IVUS Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="font-['CentraleSans:Book',_sans-serif] text-[#41c9fe] text-[14px] opacity-50">
                    <p className="leading-[20px]">IVUS View</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Information Overlay */}
            <div className="absolute top-4 left-4">
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
                <p className="leading-[16px] mb-1">Depth: 40mm</p>
                <p className="leading-[16px] mb-1">Frequency: 40MHz</p>
                <p className="leading-[16px]">Frame Rate: 30fps</p>
              </div>
            </div>
            
            {/* Scale indicator */}
            <div className="absolute bottom-4 right-4">
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
                <p className="leading-[16px]">Scale: 1:1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Longitudinal View */}
        <div className="flex-1 bg-black border border-[#383838] rounded-lg overflow-hidden">
          <div className="aspect-square relative">
            {/* Longitudinal IVUS Display */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-black">
              {/* Placeholder for longitudinal view */}
              <div className="relative w-[90%] h-[90%]">
                {/* Horizontal reference lines */}
                <div className="absolute top-[25%] left-0 right-0 h-px bg-[#41c9fe] opacity-20"></div>
                <div className="absolute top-[50%] left-0 right-0 h-px bg-[#41c9fe] opacity-30"></div>
                <div className="absolute top-[75%] left-0 right-0 h-px bg-[#41c9fe] opacity-20"></div>
                
                {/* Vertical reference line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#41c9fe] opacity-30"></div>
                
                {/* Longitudinal Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="font-['CentraleSans:Book',_sans-serif] text-[#41c9fe] text-[14px] opacity-50">
                    <p className="leading-[20px]">Longitudinal View</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pullback Information */}
            <div className="absolute top-4 left-4">
              <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
                <p className="leading-[16px] mb-1">Pullback: 0.5mm/s</p>
                <p className="leading-[16px] mb-1">Length: 100mm</p>
                <p className="leading-[16px]">Position: 50mm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Panel */}
      <div className="w-full max-w-6xl bg-[#1a1a1a] border border-[#383838] rounded-lg p-4">
        <div className="flex gap-6 items-center justify-between">
          {/* Left Controls */}
          <div className="flex gap-4 items-center">
            <button className="bg-[#1474a4] hover:bg-[#1a8cc8] px-4 py-2 rounded text-white font-['CentraleSans:Book',_sans-serif] text-[14px] transition-colors">
              Start Pullback
            </button>
            <button className="bg-[#383838] hover:bg-[#4a4a4a] px-4 py-2 rounded text-white font-['CentraleSans:Book',_sans-serif] text-[14px] transition-colors">
              Capture
            </button>
            <button className="bg-[#383838] hover:bg-[#4a4a4a] px-4 py-2 rounded text-white font-['CentraleSans:Book',_sans-serif] text-[14px] transition-colors">
              Measure
            </button>
          </div>

          {/* Center Status */}
          <div className="flex gap-4 items-center">
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[14px]">
              <p className="leading-[20px]">Status: <span className="text-[#23cc72]">Ready</span></p>
            </div>
          </div>

          {/* Right Settings */}
          <div className="flex gap-4 items-center">
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
              <p className="leading-[16px]">Gain: 50%</p>
            </div>
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
              <p className="leading-[16px]">TGC: Auto</p>
            </div>
            <button className="bg-[#383838] hover:bg-[#4a4a4a] px-3 py-1 rounded text-white font-['CentraleSans:Book',_sans-serif] text-[12px] transition-colors">
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Measurements Panel */}
      <div className="w-full max-w-6xl bg-[#1a1a1a] border border-[#383838] rounded-lg p-4">
        <div className="flex flex-col gap-3">
          <div className="font-['CentraleSans:Medium',_sans-serif] text-[#41c9fe] text-[14px]">
            <p className="leading-[20px]">Vessel Measurements</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
              <p className="leading-[16px] opacity-60">Lumen Area</p>
              <p className="leading-[20px] text-[14px] text-white">12.5 mm²</p>
            </div>
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
              <p className="leading-[16px] opacity-60">Vessel Area</p>
              <p className="leading-[20px] text-[14px] text-white">18.2 mm²</p>
            </div>
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
              <p className="leading-[16px] opacity-60">Plaque Burden</p>
              <p className="leading-[20px] text-[14px] text-white">31.3%</p>
            </div>
            <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">
              <p className="leading-[16px] opacity-60">Min Lumen Diameter</p>
              <p className="leading-[20px] text-[14px] text-white">3.2 mm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InterventionalIVUSProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  hideHeader?: boolean;
}

export function InterventionalIVUS({ 
  componentSize = 'large', 
  hideHeader = false 
}: InterventionalIVUSProps) {
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
    <div className="flex flex-col h-full bg-black">
      {/* Headers stay normal size */}
      {!hideHeader && <ComponentHeader title="Interventional IVUS" showPatientBar={showPatientBar} />}
      
      {/* Content area uses full available space, then gets scaled */}
      <div className="flex-1 min-h-0 w-full overflow-hidden">
        <div className={`transform ${scale} origin-center w-full h-full flex items-center justify-center`}>
          <InterventionalIVUSContent />
        </div>
      </div>
    </div>
  );
}
