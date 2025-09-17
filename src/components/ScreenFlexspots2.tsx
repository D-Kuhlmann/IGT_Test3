import { LogoutButton } from "./LogoutButton";

export function ScreenFlexspots2() {
  return (
    <div className="w-full h-full bg-black flex flex-col border-2 border-[#3b3b3b] relative">
      <LogoutButton className="absolute top-4 right-4 z-10" />
      <div className="flex-none p-4 border-b border-[#3b3b3b]">
        <h1 className="text-white text-2xl font-bold">Flexspots 2</h1>
        <p className="text-gray-400">Flexible Positioning System - Secondary</p>
      </div>
      
      <div className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-4 h-full">
          {/* Spot tracking grid */}
          <div className="bg-gray-900 rounded p-4 flex flex-col">
            <h3 className="text-white text-lg mb-4">Backup Spots</h3>
            <div className="space-y-2 flex-1">
              {[6, 7, 8, 9, 10].map(spot => (
                <div key={spot} className="bg-gray-800 p-3 rounded flex justify-between items-center">
                  <span className="text-white">Spot {spot}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-400 text-sm">STANDBY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary coordinates */}
          <div className="bg-gray-900 rounded p-4 flex flex-col">
            <h3 className="text-white text-lg mb-4">Secondary Coords</h3>
            <div className="space-y-3 flex-1">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">X Offset</div>
                <div className="text-white text-xl font-mono">-12.8 mm</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">Y Offset</div>
                <div className="text-white text-xl font-mono">34.2 mm</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">Z Offset</div>
                <div className="text-white text-xl font-mono">-5.7 mm</div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-gray-400 text-sm">Rotation</div>
                <div className="text-white text-xl font-mono">-8.3°</div>
              </div>
            </div>
          </div>

          {/* Secondary visual representation */}
          <div className="bg-gray-900 rounded p-4 flex flex-col">
            <h3 className="text-white text-lg mb-4">Backup Map</h3>
            <div className="flex-1 bg-black rounded border border-gray-600 relative">
              <div className="absolute inset-4 border border-gray-500 rounded">
                {/* Simulated backup positioning dots */}
                <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute top-2/5 left-3/5 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-4/5 left-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="absolute top-1/2 left-4/5 w-2 h-2 bg-lime-400 rounded-full"></div>
                <div className="absolute top-3/5 left-1/6 w-2 h-2 bg-indigo-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
