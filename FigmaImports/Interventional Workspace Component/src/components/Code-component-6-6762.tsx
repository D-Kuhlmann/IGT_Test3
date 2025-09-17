import React from "react";
import { imgDlsCapture16, imgDlsTabMaximize48 } from "../imports/svg-f5yzw";

function DlsCapture16() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_Capture_16">
      <img className="block max-w-none size-full" src={imgDlsCapture16} />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsCapture16 />
    </div>
  );
}

function DlsTabMaximize48() {
  return (
    <div className="relative shrink-0 size-4" data-name="DLS_TabMaximize_48">
      <img className="block max-w-none size-full" src={imgDlsTabMaximize48} />
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name="Icons">
      <DlsTabMaximize48 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="box-border content-stretch flex gap-4 items-center justify-start p-[10px] relative shrink-0" data-name="Icons">
      <Icons />
      <div className="flex flex-col font-['CentraleSans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-4 text-[#d6d6d6] text-[15px] text-center">
        <p className="leading-[20px]">1:1</p>
      </div>
      <Icons1 />
    </div>
  );
}

export default function InterventionalHeader() {
  return (
    <div className="bg-black h-10 relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-2 border-neutral-900 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-10 items-center justify-between pl-3 pr-0.5 py-0 relative w-full">
          <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(214,214,214,0.8)] text-center text-nowrap">
            <p className="leading-[20px] whitespace-pre">Interventional Workspace</p>
          </div>
          <Icons2 />
        </div>
      </div>
    </div>
  );
}