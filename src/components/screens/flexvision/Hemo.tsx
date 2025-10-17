import React, { useState, useEffect } from "react";
import { ComponentHeader } from "../../shared/ViewportHeaders";
import { AnimatedECG } from "../../shared/AnimatedECG";

interface HemoReading {
  timestamp: number;
  ao: number;
  lv: number;
  pa: number;
  ra: number;
}
interface HemoProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
}

const HemoComponent = ({ componentSize = 'large' }: HemoProps) => {
  // Simple scaling approach - larger components get more space for content
  const getScaleConfig = () => {
    switch (componentSize) {
      case 'small':
        return {
          scale: 0.25, // Very small for 1x1 grid
          showPatientBar: true // Now showing patient bar for all sizes
        };
      case 'medium':
        return {
          scale: 0.45, // Medium size for 2x1 or 1x2 grid
          showPatientBar: true // Now showing patient bar for all sizes
        };
      case 'large':
        return {
          scale: 0.75, // Larger scale for 2x2 grid - more space available!
          showPatientBar: true
        };
      case 'xlarge':
        return {
          scale: 0.9, // Nearly full scale for 3x2 or 2x3 grid
          showPatientBar: true
        };
      case 'fullscreen':
        return {
          scale: 1.0, // Full scale for 3x3 grid
          showPatientBar: true
        };
      default:
        return {
          scale: 0.75,
          showPatientBar: true
        };
    }
  };

  const { scale, showPatientBar } = getScaleConfig();

  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      <ComponentHeader title="Hemo" showPatientBar={showPatientBar} />
      
      {/* Content area - responsive approach */}
      {/* Content area - ECG only, no headers to save space */}
      <div className="flex-1 p-2 min-h-0 overflow-hidden">
        <div className="flex flex-col w-full h-full min-h-0 bg-black">
          {/* ECG section - uses ALL available space */}
          <div className="flex-1 min-h-0 overflow-hidden">
            <AnimatedECG className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export const Hemo = React.memo(HemoComponent);