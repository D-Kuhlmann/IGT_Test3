import React from 'react';
import svgPaths from "../../imports/svg-lsvrftrq7x";
import { imgDlsCapture16, imgDlsTabMaximize48, imgImageInformation } from "../../assets/interventional-workspace-svg-assets";
import { getFormattedPatientName, getPatientId, getCurrentDate, getFormattedDOB, getPatientAge } from '../../data/patientData';

export function ViewportHeader({ title, showPatientBar = false }: { title: string; showPatientBar?: boolean }) {
  return (
    <div className="bg-black h-10 relative shrink-0 w-full overflow-hidden">
      <div className="absolute border-2 border-neutral-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="flex h-10 items-center justify-between pl-3 pr-0.5 py-0 relative w-full min-w-0">
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic text-[16px] text-[rgba(214,214,214,0.8)] text-left truncate min-w-0 flex-1">
            <p className="leading-[16px] truncate">{title}</p>
          </div>
          <div className="flex gap-4 items-center justify-start p-[10px] shrink-0">
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
    <div className="bg-neutral-900 h-8 relative shrink-0 w-full overflow-hidden">
      <div className="flex flex-row items-center relative size-full">
        <div className="flex gap-[30px] h-8 items-center justify-start px-4 py-0.5 relative w-full min-w-0 overflow-hidden">
          <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#41c9fe] text-[14px] shrink-0">
            <p className="leading-[14px] whitespace-pre">LIVE</p>
          </div>
          <div className="flex gap-2 items-start justify-start overflow-hidden min-w-0 flex-1">
            <div className="relative shrink-0 size-6">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p34f96a00} fill="#41C9FE" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <div className="font-['CentraleSans:Book',_sans-serif] leading-[0] not-italic text-[#41c9fe] text-[14px] min-w-0 flex-1">
              <p className="leading-[20px] truncate">{getFormattedPatientName()}</p>
            </div>
          </div>
          <div className="flex font-['CentraleSans:Book',_sans-serif] gap-1 items-center justify-start leading-[0] not-italic overflow-hidden text-[#d6d6d6] text-[14px] min-w-0 flex-1">
            <div className="flex flex-col justify-center opacity-[0.497] shrink-0">
              <p className="leading-[16px] text-nowrap whitespace-pre">Patient ID</p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="leading-[16px] truncate">{getPatientId()}</p>
            </div>
          </div>
          <div className="flex font-['CentraleSans:Book',_sans-serif] gap-1 items-center justify-start leading-[0] not-italic overflow-hidden text-[#d6d6d6] text-[14px] min-w-0 flex-1">
            <div className="flex flex-col h-6 justify-center opacity-[0.497] shrink-0">
              <p className="leading-[16px]">DOB</p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="leading-[16px] truncate">{getFormattedDOB()} ({getPatientAge()}y)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComponentHeader({ title, showPatientBar = false }: { title: string; showPatientBar?: boolean }) {
  return (
    <>
      <ViewportHeader title={title} />
      {showPatientBar && <PatientBar />}
    </>
  );
}