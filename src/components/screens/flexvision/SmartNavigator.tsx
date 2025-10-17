import React from 'react';
import { ViewportHeader } from '../../shared/ViewportHeaders';

interface SmartNavigatorProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
}

export function SmartNavigator({ componentSize = 'large' }: SmartNavigatorProps) {
  // Content scaling based on component size - headers stay normal, only content scales
  const getContentScale = () => {
    switch (componentSize) {
      case 'small':
        return 'scale-[0.4]';
      case 'medium':
        return 'scale-[0.6]';
      case 'large':
        return 'scale-[0.8]';
      case 'xlarge':
        return 'scale-[0.95]';
      case 'fullscreen':
        return 'scale-100';
      default:
        return 'scale-[0.8]';
    }
  };

  const scale = getContentScale();

  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      <ViewportHeader title="Smart Navigator" />
      
      {/* Content area uses full available space, then gets scaled */}
      <div className="flex-1 p-6 min-h-0 overflow-hidden">
        <div className={`transform ${scale} origin-center w-full h-full`}>
          {/* Content Area - Full content, scaled */}
          <div className="flex flex-col items-center justify-center bg-[#000000] relative w-full h-full">
        <div className="text-center">
          {/* Navigation Icon */}
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </div>
          
          <h3 className="text-white text-[20px] font-['CentraleSans:Medium',_sans-serif] mb-2">
            Smart Navigation
          </h3>
          
          <p className="text-[#d6d6d6] text-[14px] font-['CentraleSans:Book',_sans-serif] max-w-md">
            Intelligent navigation system for enhanced workflow guidance and procedure optimization.
          </p>
        </div>
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3b3b3b] hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-blue-500 rounded mb-2 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
            <span className="text-white text-[12px] font-['CentraleSans:Book',_sans-serif]">Safety</span>
          </div>
          
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3b3b3b] hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-green-500 rounded mb-2 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span className="text-white text-[12px] font-['CentraleSans:Book',_sans-serif]">Quality</span>
          </div>
          
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3b3b3b] hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-purple-500 rounded mb-2 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-white text-[12px] font-['CentraleSans:Book',_sans-serif]">Speed</span>
          </div>
          
          <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#3b3b3b] hover:bg-[#2a2a2a] transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded mb-2 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="text-white text-[12px] font-['CentraleSans:Book',_sans-serif]">Precision</span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
