import { useState } from "react";
import { 
  imgTsmTaskMenuBCollapse, 
  imgSidepanelIconsXRaySettings, 
  imgDlsParameters48, 
  imgDlsCropSquare48, 
  imgSidepanelIconsCarmTable, 
  imgDlsPictorialTypeSeries481 
} from "../imports/svg-w95w9";

interface TaskMenuItem {
  id: string;
  label: string;
  icon: string;
}

const taskMenuItems: TaskMenuItem[] = [
  { id: "overview", label: "Overview", icon: imgSidepanelIconsXRaySettings },
  { id: "xray-settings", label: "X-ray settings", icon: imgDlsParameters48 },
  { id: "collimation", label: "Collimation", icon: imgDlsCropSquare48 },
  { id: "carm-table", label: "C-arm and Table", icon: imgSidepanelIconsCarmTable },
  { id: "series", label: "Series", icon: imgDlsPictorialTypeSeries481 },
  { id: "processing", label: "Processing", icon: imgDlsParameters48 },
  { id: "automations", label: "Automations", icon: imgDlsParameters48 },
];

function TaskMenuHeader() {
  return (
    <div className="relative shrink-0 size-16" data-name="TSM/Task menu/b_Collapse">
      <div className="absolute h-[22px] left-[26px] top-[21px] w-3">
        <img className="block max-w-none size-full" src={imgTsmTaskMenuBCollapse} />
      </div>
    </div>
  );
}

function TaskMenuButton({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: TaskMenuItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button 
      className="h-16 relative shrink-0 w-[280px] group transition-colors hover:bg-[#404040] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset" 
      data-name="TSM/Task/Button"
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={item.label}
      type="button"
    >
      <div className={`absolute inset-0 overflow-clip ${isActive ? 'bg-[#383838]' : ''}`}>
        {isActive && <div className="absolute bg-[#383838] inset-0" />}
        <div className={`absolute font-['CentraleSans:Book',_sans-serif] h-7 leading-[0] not-italic right-[204px] ${isActive ? 'text-[#e0dcdc]' : 'text-[#9e9e9e]'} text-[21px] translate-x-[100%] w-[188px] group-hover:text-[#b8b8b8] transition-colors`} style={{ top: "calc(50% - 14px)" }}>
          <p className="leading-[normal]">{item.label}</p>
        </div>
        <div className="absolute inset-[31.25%_80.38%_31.25%_11.62%]">
          <img className="block max-w-none size-full" src={item.icon} alt={`${item.label} icon`} />
        </div>
        {isActive && <div className="absolute bg-[#2b86b2] h-8 left-0 top-1/2 translate-y-[-50%] w-[5px]" />}
        {item.id === "series" && (
          <div className="absolute left-[37px] size-6 top-5">
            <img className="block max-w-none size-full" src={imgDlsPictorialTypeSeries481} alt="Series type icon" />
          </div>
        )}
      </div>
    </button>
  );
}

export function TaskMenu() {
  const [activeItemId, setActiveItemId] = useState<string>("overview");

  const handleItemClick = (itemId: string) => {
    setActiveItemId(itemId);
  };

  return (
    <div className="content-stretch flex flex-col gap-px h-[719px] items-start justify-start relative shrink-0 w-[280px]" data-name="TSM/Task menu">
      <div className="absolute bg-neutral-900 inset-0" />
      <TaskMenuHeader />
      {taskMenuItems.map((item) => (
        <TaskMenuButton 
          key={item.id} 
          item={item} 
          isActive={activeItemId === item.id}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  );
}