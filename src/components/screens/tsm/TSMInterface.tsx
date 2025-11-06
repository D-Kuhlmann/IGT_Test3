import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TaskMenu } from "./TaskMenu";
import { TopNavigation } from "./TopNavigation";
import { MainContent } from "./MainContent";
import { UniGuideInterface } from "./UniGuideInterface";
import { useAngle } from "../../../contexts/AngleContext";
import { useActiveComponents } from "../../../contexts/ActiveComponentsContext";
import { useWorkflowSync } from "../../../contexts/WorkflowSyncContext";
import { XrayLive } from "../flexvision/XrayLive";
import { InterventionalWorkspace } from "../flexvision/InterventionalWorkspace";
import { Hemo } from "../flexvision/Hemo";
import { SmartNavigator } from "../flexvision/SmartNavigator";
import { SmartOrchestratorMenu } from "./SmartOrchestratorMenu";
import { WorkflowStatusIndicator } from "../../shared/WorkflowStatusIndicator";
import { 
  imgFluoroscopyImageStore,
  imgIcon32DlsHome,
  imgIcoCardio,
  imgIcoIw,
  imgIcoCollablive
} from "../../../imports/svg-w95w9";
import DLSHome from "../../../assets/DLS_Home.png";
import SmartUIOrchestrator from "../../../assets/SmartUIOrchestrator.png";
import type { WorkflowStep } from "../../../types";

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
      className="h-20 relative shrink-0 w-32 transition-colors hover:bg-[#3a3a3a] rounded focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset flex items-center justify-center"
      onClick={onClick}
      aria-label="Open Smart UI Orchestrator"
      type="button"
    >
      <div className="size-12">
        <img className="block size-full object-contain" src={SmartUIOrchestrator} alt="Smart UI Orchestrator" />
      </div>
    </button>
  );
}

function BottomNavigation({ onTabChange, activeTab, currentWorkflowStep, activePreset, onStepSelect, onOrchestratorToggle }: { 
  onTabChange?: (tabId: string) => void; 
  activeTab?: string;
  currentWorkflowStep?: string;
  activePreset?: 1 | 2;
  onStepSelect?: (step: WorkflowStep) => void;
  onOrchestratorToggle?: () => void;
}) {
  const [localActiveTab, setLocalActiveTab] = useState<string>("xray-live");
  const [showOrchestratorMenu, setShowOrchestratorMenu] = useState(false);
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
    onOrchestratorToggle?.();
  };

  const handleToolClick = (tool: string) => {
    console.log(`Tool clicked: ${tool}`);
  };

  const handleOrchestratorClose = () => {
    setShowOrchestratorMenu(false);
  };

  const handleWorkflowStepSelect = (step: WorkflowStep) => {
    onStepSelect?.(step);
    setShowOrchestratorMenu(false);
  };

  // Map component names to tab info
  const componentToTab = {
    xrayLive: { id: "xray-live", icon: imgIcoCardio, label: "X-ray Live" },
    interventionalWorkspace: { id: "uniguide", icon: imgIcoIw, label: "UniGuide" },
    hemo: { id: "hemo", icon: imgIcoCollablive, label: "Hemo" },
    smartNavigator: { id: "smartnav", icon: imgIcoIw, label: "Smart Navigator" }
  };

  // Get visible tabs based on visible components
  const visibleTabs = visibleComponents
    .map(comp => componentToTab[comp])
    .filter(tab => tab !== undefined);

  return (
    <>
      <div className="flex gap-0 items-center justify-between relative shrink-0 w-full">
        <div className="flex gap-0 items-center flex-1 min-w-0">
          <AppsButton onClick={handleAppsClick} />
          <div 
            className="flex gap-0.5 items-center overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={(e) => {
              const ele = e.currentTarget;
              const startX = e.pageX - ele.offsetLeft;
              const scrollLeft = ele.scrollLeft;
              
              const handleMouseMove = (e: MouseEvent) => {
                const x = e.pageX - ele.offsetLeft;
                const walk = (x - startX) * 2;
                ele.scrollLeft = scrollLeft - walk;
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
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

    </>
  );
}

export function TSMInterface() {
  const location = useLocation();
  const [activeBottomTab, setActiveBottomTab] = useState('cardio');
  const workflowSync = useWorkflowSync();
  const [showOrchestratorMenu, setShowOrchestratorMenu] = useState(false);
  const { isUniGuideActive } = useAngle();

  // Sync with cross-screen UniGuide activation
  useEffect(() => {
    if (isUniGuideActive) {
      setActiveBottomTab("uniguide");
    }
  }, [isUniGuideActive]);

  const handleBottomTabChange = (tabId: string) => {
    setActiveBottomTab(tabId);
  };

  const handleWorkflowStepSelect = (step: WorkflowStep) => {
    // Use workflow sync to broadcast to all screens
    workflowSync.setWorkflowStepId(step.id, workflowSync.activePreset);
  };

  // Get active components from localStorage
  const [visibleComponents, setVisibleComponents] = useState<Array<'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator'>>([]);
  
  useEffect(() => {
    const updateComponents = () => {
      const stored = localStorage.getItem('activeComponents');
      if (stored) {
        try {
          setVisibleComponents(JSON.parse(stored));
        } catch (e) {
          console.error('Failed to parse components:', e);
        }
      }
    };
    
    updateComponents();
    const interval = setInterval(updateComponents, 1000);
    return () => clearInterval(interval);
  }, []);

  // Render the component based on active tab
  const renderActiveComponent = () => {
    // Show orchestrator menu if that tab is active
    if (showOrchestratorMenu) {
      return (
        <SmartOrchestratorMenu
          activeComponents={visibleComponents}
          currentWorkflowStep={workflowSync.workflowStepId || ''}
          activePreset={workflowSync.activePreset}
          onStepSelect={handleWorkflowStepSelect}
        />
      );
    }
    
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
    <div className="bg-black flex flex-col w-screen h-screen">
      {/* Component area - full width, no gap */}
      <div className="flex-1 w-full overflow-hidden">
        {renderActiveComponent()}
      </div>
      {/* Bottom navigation */}
      <BottomNavigation 
        onTabChange={handleBottomTabChange} 
        activeTab={activeBottomTab}
        currentWorkflowStep={workflowSync.workflowStepId || ''}
        activePreset={workflowSync.activePreset}
        onStepSelect={handleWorkflowStepSelect}
        onOrchestratorToggle={() => setShowOrchestratorMenu(!showOrchestratorMenu)}
      />
      
      {/* Workflow Status Indicator */}
      <WorkflowStatusIndicator />
    </div>
  );
}