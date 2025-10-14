import { useState, useEffect } from "react";
import { TaskMenu } from "./TaskMenu";
import { TopNavigation } from "./TopNavigation";
import { MainContent } from "./MainContent";
import { UniGuideInterface } from "./UniGuideInterface";
import { useAngle } from "../../../contexts/AngleContext";
import { 
  imgFluoroscopyImageStore,
  imgIcon32DlsHome,
  imgIcoCardio,
  imgIcoIw,
  imgIcoCollablive
} from "../../../imports/svg-w95w9";
// Radiation assets - using fallback for local development
const imgDlsRadiation = "/api/placeholder/32/32";
const imgDlsRadiation1 = "/api/placeholder/32/32";

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
  variant = "default",
  onClick,
  ariaLabel
}: { 
  icon: string; 
  variant?: "default" | "radiation";
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button 
      className="h-[71.111px] overflow-clip relative shrink-0 w-16 transition-colors hover:bg-[#3a3a3a] rounded focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <div className="absolute left-1/2 size-16 translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.444px)" }} />
      <div className="absolute left-1/2 size-8 top-4 translate-x-[-50%]">
        {variant === "radiation" ? (
          <div className="absolute contents inset-0">
            <div className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left inset-0" style={{ backgroundImage: `url('${imgDlsRadiation}')` }} />
            <div className="absolute bg-[#d6d6d6] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32px_32px]" style={{ maskImage: `url('${imgDlsRadiation1}')` }} />
          </div>
        ) : (
          <img className="block max-w-none size-full" src={icon} alt={ariaLabel} />
        )}
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

function BottomNavigation({ onTabChange, activeTab }: { onTabChange?: (tabId: string) => void; activeTab?: string }) {
  const [localActiveTab, setLocalActiveTab] = useState<string>("xray-live");
  
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

  return (
    <div className="content-start flex flex-wrap gap-0 items-start justify-start relative shrink-0">
      <AppsButton onClick={handleAppsClick} />
      <div className="content-stretch flex gap-0.5 items-center justify-start relative shrink-0">
        <BottomNavButton 
          icon={imgIcoCardio} 
          label="X-ray Live" 
          isActive={currentActiveTab === "xray-live"} 
          onClick={() => handleTabClick("xray-live")}
        />
        <BottomNavButton 
          icon={imgIcoIw} 
          label="UniGuide" 
          isActive={currentActiveTab === "uniguide"}
          onClick={() => handleTabClick("uniguide")}
        />
        <BottomNavButton 
          icon={imgIcoCollablive} 
          label="Collaboration Live" 
          isActive={currentActiveTab === "collaboration"}
          onClick={() => handleTabClick("collaboration")}
        />
      </div>
      <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
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
          icon="" 
          variant="radiation" 
          ariaLabel="Radiation settings"
          onClick={() => handleToolClick("radiation")}
        />
      </div>
    </div>
  );
}

export function TSMInterface() {
  const [activeBottomTab, setActiveBottomTab] = useState<string>("xray-live");
  const { isUniGuideActive } = useAngle();

  // Sync with cross-screen UniGuide activation
  useEffect(() => {
    console.log('🔄 TSM - isUniGuideActive changed:', isUniGuideActive);
    if (isUniGuideActive) {
      console.log('✅ TSM - Activating UniGuide tab');
      setActiveBottomTab("uniguide");
    }
  }, [isUniGuideActive]);

  // Listen for localStorage changes for cross-tab communication
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'isUniGuideActive' && e.newValue === 'true') {
        console.log('📡 TSM - Received UniGuide activation from localStorage');
        setActiveBottomTab("uniguide");
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check initial state from localStorage
    const storedUniGuideActive = localStorage.getItem('isUniGuideActive');
    if (storedUniGuideActive === 'true') {
      console.log('🔄 TSM - Loading UniGuide active state from localStorage');
      setActiveBottomTab("uniguide");
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleBottomTabChange = (tabId: string) => {
    setActiveBottomTab(tabId);
  };

  return (
    <div className="bg-black content-stretch flex flex-col gap-2.5 items-start justify-start relative w-[1500px] h-[800px]">
      <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0">
        {activeBottomTab === "uniguide" ? (
          <UniGuideInterface />
        ) : (
          <>
            <TaskMenu />
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0">
              <TopNavigation />
              <MainContent />
            </div>
          </>
        )}
      </div>
      <BottomNavigation onTabChange={handleBottomTabChange} activeTab={activeBottomTab} />
      <div className="font-['CentraleSans:Medium',_sans-serif] h-5 leading-[0] not-italic relative shrink-0 text-[#959595] text-[12px] text-center w-14">
        <p className="leading-[20px]">04</p>
      </div>
    </div>
  );
}