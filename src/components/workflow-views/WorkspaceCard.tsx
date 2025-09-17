interface WorkspaceCardProps {
  id: string;
  title: string;
  description: string;
  icon: 'lightning' | 'heart' | 'chart';
  color: string;
  onClick: () => void;
}

const IconComponent = ({ icon }: { icon: WorkspaceCardProps['icon'] }) => {
  const iconPaths = {
    lightning: "M13 10V3L4 14h7v7l9-11h-7z",
    heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    chart: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  };

  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[icon]} />
    </svg>
  );
};

export function WorkspaceCard({ title, description, icon, color, onClick }: WorkspaceCardProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-white/5 hover:bg-white/10 rounded-lg p-6 text-left transition-colors"
    >
      <div className={`w-12 h-12 mb-4 ${color} rounded-lg flex items-center justify-center`}>
        <IconComponent icon={icon} />
      </div>
      <h3 className="text-white mb-2">{title}</h3>
      <p className="text-[#d6d6d6]">{description}</p>
    </button>
  );
}