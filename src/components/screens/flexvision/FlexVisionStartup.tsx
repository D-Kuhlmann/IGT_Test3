import { XrayLive } from "./XrayLive";
import { InterventionalWorkspace } from "./InterventionalWorkspace";
import { Hemo } from "./Hemo";
import { StatusBar } from "./StatusBar";

// Main FlexVision component
interface FlexVisionStartupProps {
  showLiveWorkspaces?: boolean;
}

export function FlexVisionStartup({ showLiveWorkspaces = false }: FlexVisionStartupProps) {
  return (
    <div className="bg-black w-full h-screen flex min-w-0 overflow-hidden">
      {/* Left Sidebar - Medical Status Panel */}
      <div className="shrink-0 w-fit">
        <StatusBar />
      </div>

      {/* Main central viewport */}
      <div className="flex-1 bg-black flex flex-col relative min-w-0">
        <div className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none z-10" />
        <XrayLive />
      </div>

      {/* Right side with two stacked viewports */}
      <div className="w-[700px] flex flex-col h-full shrink-0">
        <div className="flex-1 relative flex flex-col min-h-0">
          <div className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none z-10" />
          <div className="flex-1 min-h-0 h-full">
            <InterventionalWorkspace />
          </div>
        </div>
        <div className="flex-1 relative flex flex-col min-h-0">
          <div className="absolute border-2 border-[#3b3b3b] border-solid inset-[-2px] pointer-events-none z-10" />
          <div className="flex-1 min-h-0 h-full">
            <Hemo />
          </div>
        </div>
      </div>
    </div>
  );
}