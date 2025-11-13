import React from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';
import SimSizeImage from '../../../assets/ScreenImages/SimSize.png';

interface SimSizeProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
}

export function SimSize({ componentSize = 'large' }: SimSizeProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      <ViewportHeader title="3rd Party - Sim & Size" />
      
      {/* Content Area - Display Sim & Size application image */}
      <div className="flex-1 bg-[#000000] relative overflow-hidden">
        <img 
          src={SimSizeImage} 
          alt="Sim & Size Application" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
