import React from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';

interface PlaceholderProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
}

export function Placeholder({ componentSize = 'large' }: PlaceholderProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      <ViewportHeader title="Placeholder" />
      
      {/* Content Area - Blank (no scaling needed for blank content) */}
      <div className="flex-1 bg-[#000000]">
        {/* Intentionally blank content area */}
      </div>
    </div>
  );
}
