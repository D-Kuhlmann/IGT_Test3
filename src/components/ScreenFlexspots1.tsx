import { LogoutButton } from "./LogoutButton";

export function ScreenFlexspots1() {
  return (
    <div className="w-full h-full bg-black flex flex-col border-2 border-[#3b3b3b] relative">
      <LogoutButton className="absolute top-4 right-4 z-10" />
      <div className="flex-none p-4 border-b border-[#3b3b3b]">
        <h1 className="text-white text-2xl font-bold">Flexspots 1</h1>
        <p className="text-gray-400">Flexible Positioning System - Primary</p>
      </div>
      
      <div className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Spot tracking grid */}
          <div className="bg-gray-900 rounded p-4 flex flex-col">
            <h3 className="text-white text-lg mb-4">Active Spots</h3>
            <div className="space-y-2 flex-1">
              {[1, 2, 3, 4, 5].map(spot => (
                <div key={spot} className="bg-gray-800 p-3 rounded flex justify-between items-center">
                  <span className="text-white">Spot {spot}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Position coordinates */}
          <div className="bg-gray-900 rounded p-4 flex flex-col">
            <h3 className="text-white text-lg mb-4">Coordinates</h3>
            <div className="space-y-3 flex-1">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">X Position</div>
                <div className="text-white text-xl font-mono">142.5 mm</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">Y Position</div>
                <div className="text-white text-xl font-mono">87.3 mm</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">Z Position</div>
                <div className="text-white text-xl font-mono">23.1 mm</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">Angle</div>
                <div className="text-white text-xl font-mono">15.7°</div>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="bg-gray-900 rounded p-4 flex flex-col">
            <h3 className="text-white text-lg mb-4">Position Map</h3>
            <div className="flex-1 bg-black rounded border border-gray-600 relative">
              <div className="absolute inset-4 border border-gray-500 rounded">
                {/* Simulated positioning dots */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-1/3 left-3/4 w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
