import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TaskMenu } from "./TaskMenu";
import { TopNavigation } from "./TopNavigation";
import { MainContent } from "./MainContent";
import { UniGuideInterface } from "./UniGuideInterface";
import { useAngle } from "../../../contexts/AngleContext";
import { useActiveComponents } from "../../../contexts/ActiveComponentsContext";
import { XrayLive } from "../flexvision/XrayLive";
import { InterventionalWorkspace } from "../flexvision/InterventionalWorkspace";
import { Hemo } from "../flexvision/Hemo";
import { SmartNavigator } from "../flexvision/SmartNavigator";
import { 
  imgFluoroscopyImageStore,
  imgIcon32DlsHome,
  imgIcoCardio,
  imgIcoIw,
  imgIcoCollablive
} from "../../../imports/svg-w95w9";
import DLSHome from "../../../assets/DLS_Home.png";

function BottomNavButton({ 
  icon, 
  label, 
  isActive, 
  onClick 
}: { 
  icon: string; 
  label: string; 
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      className={`${isActive ? 'bg-[#2b2b2b]' : 'bg-neutral-900'} box-border content-stretch flex gap-5 h-[72px] items-center justify-start pl-5 pr-0 py-0 relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-[298px] transition-colors hover:bg-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset`}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={label}
      type="button"
    >
      <div aria-hidden="true" className={`absolute ${isActive ? 'border-[#2b86b2]' : 'border-[#414445]'} border-[0px_0px_4px] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]`} />
      <div className="h-[33px] relative shrink-0 w-[30px]">
        <img className="block max-w-none size-full" src={icon} alt={`${label} icon`} />
      </div>
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e8e8] text-[21px] text-nowrap">
        <p className="leading-[22px] whitespace-pre">{label}</p>
      </div>
    </button>
  );
}

function SmallNavButton({ 
  icon, 
  onClick,
  ariaLabel
}: { 
  icon: string; 
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button 
      className="h-[71.111px] relative shrink-0 w-16 transition-colors hover:bg-[#3a3a3a] rounded focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset flex items-center justify-center"
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <div className="size-8">
        <img className="block size-full object-contain" src={icon} alt={ariaLabel} />
      </div>
    </button>
  );
}

function AppsButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="h-20 relative shrink-0 w-32 transition-colors hover:bg-[#3a3a3a] rounded focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
      onClick={onClick}
      aria-label="Open apps menu"
      type="button"
    >
      <div className="absolute inset-0 overflow-clip">
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="flex-none h-20 scale-y-[-100%] w-32">
            <div className="bg-neutral-900 rounded-tl-[2px] rounded-tr-[2px] size-full" />
          </div>
        </div>
        <div className="absolute left-1/2 size-12 top-3 translate-x-[-50%]">
          <div className="absolute contents inset-0">
            <div className="absolute bg-black inset-0 opacity-0" />
            <div className="absolute bg-white inset-[14.58%_14.58%_52.08%_52.08%] opacity-50 rounded-[3px]" />
            <div className="absolute bg-white inset-[14.58%_52.08%_52.08%_14.58%] opacity-70 rounded-[3px]" />
            <div className="absolute bg-white inset-[52.08%_14.58%_14.58%_52.08%] opacity-60 rounded-[3px]" />
            <div className="absolute bg-white inset-[52.08%_52.08%_14.58%_14.58%] opacity-40 rounded-[3px]" />
          </div>
        </div>
      </div>
    </button>
  );
}

function BottomNavigation({ onTabChange, activeTab }: { 
  onTabChange?: (tabId: string) => void; 
  activeTab?: string;
}) {
  const [localActiveTab, setLocalActiveTab] = useState<string>("xray-live");
  const [visibleComponents, setVisibleComponents] = useState<Array<'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator'>>([
    'xrayLive', 'interventionalWorkspace', 'hemo'
  ]);
  const previousComponentsRef = useRef<string>('');
  
  // Read from localStorage directly on mount and when needed
  useEffect(() => {
    const updateFromLocalStorage = () => {
      const stored = localStorage.getItem('activeComponents');
      
      if (stored && stored !== previousComponentsRef.current) {
        try {
          const components = JSON.parse(stored);
          setVisibleComponents(components);
          previousComponentsRef.current = stored;
        } catch (e) {
          console.error('Failed to parse components:', e);
        }
      }
    };

    // Update immediately
    updateFromLocalStorage();
    
    // Poll localStorage every 1000ms
    const interval = setInterval(updateFromLocalStorage, 1000);
    
    return () => clearInterval(interval);
  }, []); // No dependencies to avoid loops
  
  // Use prop activeTab if provided, otherwise use local state
  const currentActiveTab = activeTab || localActiveTab;

  const handleTabClick = (tabId: string) => {
    setLocalActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const handleAppsClick = () => {
    console.log("Apps menu clicked");
  };

  const handleToolClick = (tool: string) => {
    console.log(`Tool clicked: ${tool}`);
  };

  // Map component names to tab info
  const componentToTab = {
    xrayLive: { id: "xray-live", icon: imgIcoCardio, label: "X-ray Live" },
    interventionalWorkspace: { id: "uniguide", icon: imgIcoIw, label: "UniGuide" },
    hemo: { id: "hemo", icon: imgIcoCollablive, label: "Hemo" },
    smartNavigator: { id: "smartnav", icon: imgIcoIw, label: "Smart Navigator" }
  };

  // Get visible tabs based on visible components
  const visibleTabs = visibleComponents.map(comp => componentToTab[comp]);

  return (
    <div className="flex gap-0 items-center justify-between relative shrink-0 w-full">
      <div className="flex gap-0 items-center flex-1 min-w-0">
        <AppsButton onClick={handleAppsClick} />
        <div className="flex gap-0.5 items-center overflow-x-auto">
          {visibleTabs.map(tab => (
            <BottomNavButton 
              key={tab.id}
              icon={tab.icon} 
              label={tab.label} 
              isActive={currentActiveTab === tab.id} 
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center flex-shrink-0 ml-auto">
        <SmallNavButton 
          icon={imgFluoroscopyImageStore} 
          ariaLabel="Fluoroscopy image store"
          onClick={() => handleToolClick("fluoroscopy")}
        />
        <SmallNavButton 
          icon={imgIcon32DlsHome} 
          ariaLabel="Home"
          onClick={() => handleToolClick("home")}
        />
        <SmallNavButton 
          icon={DLSHome} 
          ariaLabel="DLS Home"
          onClick={() => handleToolClick("dls-home")}
        />
      </div>
    </div>
  );
}

export function TSMInterface() {
  const location = useLocation();
  const [activeBottomTab, setActiveBottomTab] = useState<string>("xray-live");
  const { isUniGuideActive } = useAngle();


  // Sync with cross-screen UniGuide activation
  useEffect(() => {
    if (isUniGuideActive) {
      setActiveBottomTab("uniguide");
    }
  }, [isUniGuideActive]);

  // Listen for localStorage changes for cross-tab communication
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'isUniGuideActive' && e.newValue === 'true') {
        setActiveBottomTab("uniguide");
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check initial state from localStorage
    const storedUniGuideActive = localStorage.getItem('isUniGuideActive');
    if (storedUniGuideActive === 'true') {
      setActiveBottomTab("uniguide");
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleBottomTabChange = (tabId: string) => {
    setActiveBottomTab(tabId);
  };

  // Render the component based on active tab
  const renderActiveComponent = () => {
    
    // Map tab IDs to components
    switch (activeBottomTab) {
      case 'xray-live':
        return <XrayLive componentSize="fullscreen" hideHeader={true} />;
      case 'uniguide':
        return <InterventionalWorkspace componentSize="fullscreen" hideHeader={true} />;
      case 'hemo':
        return <Hemo componentSize="fullscreen" hideHeader={true} />;
      case 'smartnav':
        return <SmartNavigator componentSize="fullscreen" hideHeader={true} isActive={true} />;
      default:
        // Default view
        return (
          <>
            <TaskMenu />
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
              <TopNavigation />
              <MainContent />
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-black flex flex-col w-[1200px] h-[800px]">
      {/* Component area - full width, no gap */}
      <div className="flex-1 w-full overflow-hidden">
        {renderActiveComponent()}
      </div>
      {/* Bottom navigation */}
      <BottomNavigation 
        onTabChange={handleBottomTabChange} 
        activeTab={activeBottomTab}
      />
      {/* Footer */}
      <div className="font-['CentraleSans:Medium',_sans-serif] h-5 leading-[0] not-italic text-[#959595] text-[12px] text-center w-14">
        <p className="leading-[20px]">04</p>
      </div>
    </div>
  );
}