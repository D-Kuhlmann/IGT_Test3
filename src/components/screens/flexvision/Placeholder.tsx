import React from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';

interface PlaceholderProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  title?: string;
  hideHeader?: boolean;
  contentImage?: string;
  whiteBg?: boolean;
}

export function Placeholder({ componentSize = 'large', title = 'Placeholder', hideHeader = false, contentImage, whiteBg = false }: PlaceholderProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      {!hideHeader && <ViewportHeader title={title} />}
      
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
