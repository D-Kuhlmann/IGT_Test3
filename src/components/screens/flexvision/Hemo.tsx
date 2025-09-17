import { useState, useEffect } from "react";
import { ViewportHeader, PatientBar } from "../../shared/ViewportHeaders";
import { AnimatedECG } from "../../shared/AnimatedECG";

interface HemoReading {
  timestamp: number;
  ao: number;
  lv: number;
  pa: number;
  ra: number;
}

export function Hemo() {
  return (
    <div className="flex flex-col h-full">
      <ViewportHeader title="Hemo" />
      <PatientBar />
      
      <div className="flex-1 flex flex-col relative p-4 min-h-0">
        {/* ECG Monitor */}
        <AnimatedECG className="h-full" />
      </div>
    </div>
  );
}