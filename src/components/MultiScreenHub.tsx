import React from 'react';

interface ScreenInfo {
  id: string;
  name: string;
  description: string;
  path: string;
  thumbnail: string;
  color: string;
}

const screens: ScreenInfo[] = [
  {
    id: 'flexvision',
    name: 'FlexVision Screen',
    description: 'Advanced imaging and visualization interface for medical procedures',
    path: '/flexvision',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 'tsm',
    name: 'TSM Screen',
    description: 'Table Side Monitor - Procedure monitoring and control interface',
    path: '/tsm',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'wmu',
    name: 'WMU Screen',
    description: 'Workflow Management Unit - Main control interface with system settings and patient management',
    path: '/wmu',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'flexspots1',
    name: 'FlexSpots 1',
    description: 'First FlexSpots monitoring station for multi-room procedures',
    path: '/flexspots1',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    id: 'flexspots2',
    name: 'FlexSpots 2',
    description: 'Second FlexSpots monitoring station for extended workflow coverage',
    path: '/flexspots2',
    thumbnail: '/api/placeholder/300/200',
    color: 'from-teal-600 to-teal-800'
  },
];

export function MultiScreenHub() {
  const openScreenInNewTab = (screen: ScreenInfo) => {
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}${screen.path}`;
    window.open(fullUrl, `_blank_${screen.id}`, 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-4">
            <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">IGT Multi-Screen Hub</h1>
            <p className="text-xl text-blue-200">Launch all application screens from here</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-4">
            Welcome to the IGT Healthcare Application Hub. Click on any screen below to open it in a new browser tab.
          </p>
          <p className="text-sm text-gray-400">
            Each screen will open independently, allowing you to run multiple interfaces simultaneously.
          </p>
        </div>
      </div>

      {/* Screen Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen) => (
            <div
              key={screen.id}
              onClick={() => openScreenInNewTab(screen)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500">
                {/* Live Thumbnail */}
                <div className="h-48 relative overflow-hidden bg-gray-900">
                  <iframe
                    src={`${window.location.origin}${screen.path}`}
                    className="w-full h-full transform scale-[0.3] origin-top-left"
                    style={{
                      width: '333%',
                      height: '333%',
                      pointerEvents: 'none',
                      border: 'none'
                    }}
                    title={`${screen.name} Preview`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div>
                  <div className="absolute top-2 left-2">
                    <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {screen.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {screen.description}
                  </p>
                  
                  {/* Launch Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">
                      {screen.path}
                    </span>
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300">
                      <span className="mr-1">Launch</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Start Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <div className="text-blue-400 font-semibold mb-2">1. Click to Launch</div>
              <div>Click any screen card to open it in a new browser tab</div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <div className="text-purple-400 font-semibold mb-2">2. Multiple Screens</div>
              <div>Run multiple screens simultaneously for complete workflow</div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
              <div className="text-green-400 font-semibold mb-2">3. No Login Required</div>
              <div>Hub access is unrestricted - individual screens may require authentication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
