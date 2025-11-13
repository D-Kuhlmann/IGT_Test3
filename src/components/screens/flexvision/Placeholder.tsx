import React from 'react';
import { ComponentHeader } from '../../shared/ViewportHeaders';

interface PlaceholderProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  title?: string;
  hideHeader?: boolean;
  contentImage?: string;
  whiteBg?: boolean;
  showPatientBar?: boolean;
}

export function Placeholder({ componentSize = 'large', title = 'Placeholder', hideHeader = false, contentImage, whiteBg = false, showPatientBar = false }: PlaceholderProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      {!hideHeader && <ComponentHeader title={title} showPatientBar={showPatientBar} />}
      
      {/* Content Area - Blank or with image, black or white background */}
      <div className={`flex-1 relative overflow-hidden ${whiteBg ? 'bg-[#ffffff]' : 'bg-[#000000]'}`}>
        {contentImage ? (
          <img 
            src={contentImage} 
            alt={title} 
            className="w-full h-full object-contain"
          />
        ) : (
          /* Intentionally blank content area */
          null
        )}
      </div>
    </div>
  );
}
