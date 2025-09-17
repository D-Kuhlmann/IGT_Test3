import { WorkspaceCard } from "./WorkspaceCard";

export function StartView() {
  const workspaces = [
    {
      id: 'xray-live',
      title: 'X-ray Live',
      description: 'Live fluoroscopy and angiography imaging',
      icon: 'lightning',
      color: 'bg-red-600'
    },
    {
      id: 'interventional-workspace',
      title: 'Interventional',
      description: 'PCI, stenting, and device guidance',
      icon: 'heart',
      color: 'bg-blue-600'
    },
    {
      id: 'hemo',
      title: 'Hemodynamics',
      description: 'Pressure monitoring and measurements',
      icon: 'chart',
      color: 'bg-green-600'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="max-w-4xl mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-white mb-4">Select Workspace</h2>
        <p className="text-[#d6d6d6] mb-8">
          Choose your imaging workspace to begin the procedure.
        </p>
        
        {/* Workspace Selection Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              {...workspace}
              onClick={() => window.location.hash = `#workspace=${workspace.id}`}
            />
          ))}

          <button 
            onClick={() => window.location.hash = '#live-workspaces=true'}
            className="bg-white/5 hover:bg-white/10 rounded-lg p-6 text-left transition-colors col-span-3"
          >
            <div className="w-12 h-12 mb-4 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white mb-2">Activate All Live Workspaces</h3>
            <p className="text-[#d6d6d6]">Switch all three panels to their live operational modes</p>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white mb-2">System Check</h3>
            <p className="text-[#d6d6d6]">Verify all imaging equipment is operational</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-white mb-2">Patient Preparation</h3>
            <p className="text-[#d6d6d6]">Confirm patient positioning and consent</p>
          </div>
        </div>
      </div>
    </div>
  );
}