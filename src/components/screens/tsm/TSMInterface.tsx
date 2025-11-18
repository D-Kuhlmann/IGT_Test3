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
import { Lumify } from "../flexvision/Lumify";
import { InterventionalIVUS } from "../flexvision/InterventionalIVUS";
import { SmartOrchestratorMenu } from "./SmartOrchestratorMenu";
import { 
  imgFluoroscopyImageStore,
  imgIcon32DlsHome,
  imgIcoCardio,
  imgIcoIw,
  imgIcoCollablive
} from "../../../imports/svg-w95w9";
import DLSHome from "../../../assets/DLS_Home.png";
import SmartUIOrchestrator from "../../../assets/SmartUIOrchestrator.png";
import CollaborationLivePlaceholder from "../../../assets/CollabarationLivePlaceholder.png";
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

function AppsButton({ onClick, isActive }: { onClick: () => void; isActive?: boolean }) {
  return (
    <button 
      className={`h-20 relative shrink-0 w-32 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset flex items-center justify-center ${
        isActive ? 'bg-[#2b2b2b]' : 'hover:bg-[#3a3a3a]'
      }`}
      onClick={onClick}
      aria-label="Open Smart UI Orchestrator"
      aria-pressed={isActive}
      type="button"
    >
      <div className="size-24">
        <img className="block size-full object-contain" src={SmartUIOrchestrator} alt="Smart UI Orchestrator" />
      </div>
    </button>
  );
}

function BottomNavigation({ onTabChange, activeTab, currentWorkflowStep, activePreset, onStepSelect, onOrchestratorToggle, showOrchestratorMenu }: { 
  onTabChange?: (tabId: string) => void; 
  activeTab?: string;
  currentWorkflowStep?: string;
  activePreset?: 1 | 2;
  onStepSelect?: (step: WorkflowStep) => void;
  onOrchestratorToggle?: () => void;
  showOrchestratorMenu?: boolean;
}) {
  const [localActiveTab, setLocalActiveTab] = useState<string>("xray-live");
  
  // Determine visible components based on workflow step and preset
  // This matches the exact components visible in ScreenFlexvision for each step
  const getVisibleComponentsForStep = (step: string | undefined, preset: 1 | 2 | undefined): Array<'xrayLive' | 'interventionalWorkspace' | 'hemo' | 'smartNavigator' | 'lumify' | 'ivus'> => {
    if (!step || !preset) {
      // No step selected - return empty array (like FlexVision startup with black screen)
      return [];
    }

    if (preset === 1) {
      // Preset 1 - Cardio (matches stepLayouts in ScreenFlexvision)
      switch (step) {
        case 'startup':
          return ['xrayLive', 'interventionalWorkspace', 'hemo'];
        case 'ultrasound':
          return ['xrayLive', 'lumify', 'hemo'];
        case 'ccta-planning':
          return ['xrayLive', 'interventionalWorkspace', 'hemo'];
        case 'ivus-acquisition':
          return ['hemo', 'ivus'];
        case 'finalise':
          return ['hemo']; // Only hemo is a real component, rest are placeholders
        default:
          return ['xrayLive', 'interventionalWorkspace', 'hemo'];
      }
    } else {
      // Preset 2 - Neuro (matches stepLayouts in ScreenFlexvision)
      switch (step) {
        case 'start':
          return ['xrayLive', 'interventionalWorkspace', 'hemo'];
        case 'access':
          return ['xrayLive', 'lumify', 'hemo'];
        case '3d-scan':
          return ['xrayLive', 'hemo', 'smartNavigator'];
        case 'planning':
          return ['xrayLive', 'hemo']; // simSize is not a standard component
        case 'treatment':
          return ['hemo']; // Only hemo is a real component, rest are placeholders
        default:
          return ['xrayLive', 'interventionalWorkspace', 'hemo'];
      }
    }
  };

  const visibleComponents = getVisibleComponentsForStep(currentWorkflowStep, activePreset);
  
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

  const handleWorkflowStepSelect = (step: WorkflowStep) => {
    onStepSelect?.(step);
    // Close orchestrator menu after selecting a step
    onOrchestratorToggle?.();
  };

  // Map component names to tab info
  // ECG icon SVG data
  const ecgIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath fill='white' d='M16.5 23h-.02a1 1 0 0 1-.935-.71l-5.11-17.03-3.99 11.565a.995.995 0 0 1-1.855.08L2.85 13H1v-2h2.5c.395 0 .755.235.915.595l.97 2.18 4.17-12.1A.98.98 0 0 1 10.52 1c.435.01.815.295.94.71l5.115 17.05 2.485-7.095A.99.99 0 0 1 20 11h3v2h-2.29l-3.265 9.33c-.14.4-.52.67-.945.67'%3E%3C/path%3E%3C/svg%3E";
  
  // Ultrasound icon SVG data
  const ultrasoundIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/%3E%3C/svg%3E";
  
  // IVUS icon SVG data (medical/heart related)
  const ivusIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E";

  const componentToTab: Record<string, { id: string; icon: string; label: string }> = {
    xrayLive: { id: "xray-live", icon: imgIcoCardio, label: "X-ray Live" },
    interventionalWorkspace: { id: "uniguide", icon: imgIcoIw, label: "UniGuide" },
    hemo: { id: "hemo", icon: ecgIcon, label: "Hemo" },
    smartNavigator: { id: "smartnav", icon: imgIcoIw, label: "Smart Navigator" },
    lumify: { id: "lumify", icon: ultrasoundIcon, label: "Lumify" },
    ivus: { id: "ivus", icon: ivusIcon, label: "IVUS" }
  };

  // Get visible tabs based on visible components
  const visibleTabs = visibleComponents
    .map(comp => componentToTab[comp])
    .filter(tab => tab !== undefined);

  return (
    <>
      <div className="flex gap-0 items-center justify-between relative shrink-0 w-full">
        <div className="flex gap-0 items-center flex-1 min-w-0">
          <AppsButton onClick={handleAppsClick} isActive={showOrchestratorMenu} />
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
            {/* Collaboration Live - Only visible when a workflow step is selected */}
            {currentWorkflowStep && (
              <BottomNavButton 
                key="collaboration-live"
                icon={imgIcoCollablive} 
                label="Collaboration Live" 
                isActive={currentActiveTab === 'collaboration-live'} 
                onClick={() => handleTabClick('collaboration-live')}
              />
            )}
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
  const { focusedComponent } = useActiveComponents();

  // Sync with cross-screen UniGuide activation
  useEffect(() => {
    if (isUniGuideActive) {
      setActiveBottomTab("uniguide");
    }
  }, [isUniGuideActive]);

  // Auto-switch to focused component (or first visible component) when workflow step changes
  useEffect(() => {
    if (!workflowSync.workflowStepId || showOrchestratorMenu) {
      return; // Don't auto-switch if no step or orchestrator menu is open
    }

    // Helper function to get visible components for current step
    const getVisibleComponents = (step: string, preset: 1 | 2 | undefined): Array<string> => {
      if (!preset) return [];
      
      if (preset === 1) {
        switch (step) {
          case 'startup':
            return ['xrayLive', 'interventionalWorkspace', 'hemo'];
          case 'ultrasound':
            return ['xrayLive', 'lumify', 'hemo'];
          case 'ccta-planning':
            return ['xrayLive', 'interventionalWorkspace', 'hemo'];
          case 'ivus-acquisition':
            return ['hemo', 'ivus'];
          case 'finalise':
            return ['hemo'];
          default:
            return ['xrayLive', 'interventionalWorkspace', 'hemo'];
        }
      } else {
        switch (step) {
          case 'start':
            return ['xrayLive', 'interventionalWorkspace', 'hemo'];
          case 'access':
            return ['xrayLive', 'lumify', 'hemo'];
          case '3d-scan':
            return ['xrayLive', 'hemo', 'smartNavigator'];
          case 'planning':
            return ['xrayLive', 'hemo'];
          case 'treatment':
            return ['hemo'];
          default:
            return ['xrayLive', 'interventionalWorkspace', 'hemo'];
        }
      }
    };

    const visibleComponents = getVisibleComponents(workflowSync.workflowStepId, workflowSync.activePreset);
    
    // Map component names to tab IDs
    const componentToTabId: Record<string, string> = {
      'xrayLive': 'xray-live',
      'interventionalWorkspace': 'uniguide',
      'hemo': 'hemo',
      'smartNavigator': 'smartnav',
      'lumify': 'lumify',
      'ivus': 'ivus'
    };

    // Prioritize focused component if it's visible, otherwise use first visible component
    let componentToShow: string | null = null;
    
    if (focusedComponent && visibleComponents.includes(focusedComponent)) {
      // Focused component is visible, use it
      componentToShow = focusedComponent;
    } else if (focusedComponent === 'interventionalWorkspace' && 
               workflowSync.workflowStepId === 'ivus-acquisition' && 
               visibleComponents.includes('ivus')) {
      // Special case: In IVUS step, 'interventionalWorkspace' focus means show IVUS component
      componentToShow = 'ivus';
    } else if (visibleComponents.length > 0) {
      // No focused component or it's not visible, use first visible
      componentToShow = visibleComponents[0];
    }

    if (componentToShow) {
      const tabId = componentToTabId[componentToShow];
      if (tabId) {
        setActiveBottomTab(tabId);
      }
    }
  }, [workflowSync.workflowStepId, workflowSync.activePreset, showOrchestratorMenu, focusedComponent]);

  const handleBottomTabChange = (tabId: string) => {
    setActiveBottomTab(tabId);
    // Close orchestrator menu when switching to a different tab
    if (showOrchestratorMenu) {
      setShowOrchestratorMenu(false);
    }
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
    // If no workflow step selected, always show black screen regardless of tab
    if (!workflowSync.workflowStepId) {
      return <div className="w-full h-full bg-black" />;
    }
    
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
        return <InterventionalWorkspace componentSize="fullscreen" hideHeader={true} subFocusMode="angles" />;
      case 'hemo':
        return <Hemo componentSize="fullscreen" hideHeader={true} />;
      case 'smartnav':
        return <SmartNavigator componentSize="fullscreen" hideHeader={true} isActive={true} />;
      case 'lumify':
        return <Lumify componentSize="fullscreen" />;
      case 'ivus':
        return <InterventionalIVUS componentSize="fullscreen" />;
      case 'collaboration-live':
        return (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <img 
              src={CollaborationLivePlaceholder} 
              alt="Collaboration Live" 
              className="w-full h-full object-contain"
            />
          </div>
        );
      default:
        // Default view - TaskMenu and MainContent when a workflow step is selected
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
        showOrchestratorMenu={showOrchestratorMenu}
      />
    </div>
  );
}