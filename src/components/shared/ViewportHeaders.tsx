import React from 'react';
import svgPaths from "../../imports/svg-lsvrftrq7x";
import { imgDlsCapture16, imgDlsTabMaximize48, imgImageInformation } from "../../assets/interventional-workspace-svg-assets";
import { getFormattedPatientName, getPatientId, getCurrentDate, getFormattedDOB, getPatientAge } from '../../data/patientData';

export function ViewportHeader({ title }: { title: string }) {
  return (
    <div className="bg-black h-10 relative shrink-0 w-full">
      <div className="absolute border-2 border-neutral-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="flex h-10 items-center justify-between pl-3 pr-0.5 py-0 relative w-full">
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic text-[16px] text-[rgba(214,214,214,0.8)] text-center text-nowrap">
            <p className="leading-[16px] whitespace-pre">{title}</p>
          </div>
          <div className="flex gap-4 items-center justify-start p-[10px]">
            <div className="relative shrink-0 size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.p115e8900} fill="#D6D6D6" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#d6d6d6] text-[15px] text-center">
              <p className="leading-[20px]">1:1</p>
            </div>
            <div className="relative shrink-0 size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <path d={svgPaths.pae9fa80} fill="#D6D6D6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PatientBar() {
  return (
    <div className="bg-neutral-900 h-10 relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="flex gap-[50px] h-10 items-center justify-start px-6 py-0.5 relative w-full">
          <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#41c9fe] text-[16px] text-nowrap">
            <p className="leading-[16px] whitespace-pre">LIVE</p>
          </div>
          <div className="flex gap-3 items-start justify-start overflow-clip">
            <div className="relative shrink-0 size-8">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p34f96a00} fill="#41C9FE" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <div className="font-['CentraleSans:Book',_sans-serif] leading-[0] not-italic text-[#41c9fe] text-[16px] text-nowrap">
              <p className="leading-[28px] whitespace-pre">{getFormattedPatientName()}</p>
            </div>
          </div>
          <div className="flex font-['CentraleSans:Book',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic overflow-clip text-[#d6d6d6] text-[16px] text-nowrap w-[209px]">
            <div className="flex flex-col justify-center opacity-[0.497]">
              <p className="leading-[20px] text-nowrap whitespace-pre">Patient ID</p>
            </div>
            <div>
              <p className="leading-[20px] text-nowrap whitespace-pre">{getPatientId()}</p>
            </div>
          </div>
          <div className="flex font-['CentraleSans:Book',_sans-serif] gap-2 items-center justify-start leading-[0] not-italic overflow-clip text-[#d6d6d6] text-[16px]">
            <div className="flex flex-col h-8 justify-center opacity-[0.497] w-12">
              <p className="leading-[20px]">DOB</p>
            </div>
            <div className="w-[181px]">
              <p className="leading-[20px]">{getFormattedDOB()} ({getPatientAge()}y)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}