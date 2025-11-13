import React from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';
import LumifyImage from '../../../assets/ScreenImages/Lumify.png';

interface LumifyProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
}

export function Lumify({ componentSize = 'large' }: LumifyProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      <ViewportHeader title="Lumify" />
      
      {/* Content Area - Display Lumify ultrasound image */}
      <div className="flex-1 bg-[#000000] relative overflow-hidden">
        <img 
          src={LumifyImage} 
          alt="Lumify Ultrasound" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
