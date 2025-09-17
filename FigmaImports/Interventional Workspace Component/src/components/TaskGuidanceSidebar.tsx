import React, { useState } from "react";
import imgUntitled11 from "figma:asset/0f0384f86d80f261ddeb017dcfe5c3bd1140e4e8.png";
import { imgCollapse, imgIconsTaskSeries24, imgIconsTaskPlanning24, imgIconsTaskLive24, imgTitle, imgVector1, imgCheckbox, imgIcon5, imgPath, imgVector2 } from "../imports/svg-f5yzw";

// Task Tab Components
function TaskTab({ icon, label, isActive = false }: { icon: string; label: string; isActive?: boolean }) {
  const IconComponent = () => (
    <div className="relative shrink-0 size-6" data-name="Icon Left">
      <div className="absolute inset-0 overflow-clip">
        <div className="absolute inset-[8.33%_12.5%]">
          <img className="block max-w-none size-full" src={icon} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={`h-10 relative shrink-0 w-full ${isActive ? "bg-[rgba(255,255,255,0.1)]" : ""}`}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-4 h-10 items-center justify-center px-4 py-0 relative w-full">
          <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">
            <IconComponent />
            <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
              <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">{label}</p>
            </div>
          </div>
          {isActive && <div className="absolute bg-[#439ac1] bottom-0 left-0 top-0 w-[3px]" data-name="Selection indicator" />}
        </div>
      </div>
    </div>
  );
}

// Planning Section Components
function CArmPreview() {
  return (
    <div className="relative shrink-0 w-full" data-name="C-arm preview">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center pb-0 pt-1 px-[100px] relative w-full">
          <div className="h-[132px] relative shrink-0 w-[200px]">
            <div className="absolute bg-center bg-cover bg-no-repeat inset-0" style={{ backgroundImage: `url('${imgUntitled11}')` }} />
          </div>
          <div className="h-10 relative shrink-0 w-[292px]">
            <div className="absolute flex flex-col font-['CentraleSans:Book',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#d6d6d6] text-[16px] text-center">
              <p className="leading-[22px]">Rot -180° Ang -180°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoreAngleButton() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-0 relative shrink-0">
      <div className="bg-[#1474a4] box-border content-stretch flex gap-2 h-10 items-center justify-center px-4 py-[9px] relative rounded-[2px] shrink-0 w-[292px]">
        <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-center text-nowrap text-white">
          <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">Store angle</p>
        </div>
      </div>
    </div>
  );
}

function AngleListItem({ 
  icon, 
  title, 
  angle, 
  hasDelete = false 
}: { 
  icon?: string; 
  title: string; 
  angle: string; 
  hasDelete?: boolean; 
}) {
  const IconComponent = () => {
    if (icon) {
      return (
        <div className="relative shrink-0 size-6">
          <img className="block max-w-none size-full" src={icon} />
        </div>
      );
    }
    return (
      <div className="relative shrink-0 size-6">
        <img className="block max-w-none size-full" src={imgCheckbox} />
      </div>
    );
  };

  const DeleteIcon = () => (
    <div className="relative shrink-0 size-6">
      <div className="absolute inset-0 overflow-clip">
        <div className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <img className="block max-w-none size-full" src={imgPath} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="box-border content-stretch flex h-[60px] items-start justify-start px-0 py-2 relative shrink-0 w-[324px]">
      <div className="box-border content-stretch flex gap-4 h-11 items-center justify-start px-4 py-0 relative shrink-0 w-[324px]">
        <IconComponent />
        <div className="basis-0 content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] grow items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
          <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
            <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">{title}</p>
          </div>
          <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-full">
            <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-[16px] text-nowrap">{angle}</p>
          </div>
        </div>
        {hasDelete && <DeleteIcon />}
      </div>
    </div>
  );
}

function ExpandableSection({ 
  title, 
  children, 
  isCollapsed = true 
}: { 
  title: string; 
  children: React.ReactNode; 
  isCollapsed?: boolean; 
}) {
  const [collapsed, setCollapsed] = useState(isCollapsed);

  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div 
            className="box-border content-stretch flex gap-3 items-center justify-start px-4 py-3 relative w-full cursor-pointer hover:bg-black/5 transition-colors"
            onClick={() => setCollapsed(!collapsed)}
          >
            <div className="basis-0 content-stretch flex gap-4 grow items-center justify-start min-h-px min-w-px relative shrink-0">
              <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-6 justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
                <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">{title}</p>
              </div>
            </div>
            <div className="relative shrink-0 size-6">
              <img className="block max-w-none size-full" src={imgTitle} />
            </div>
          </div>
        </div>
      </div>
      {!collapsed && children}
      {!collapsed && (
        <div className="flex items-center justify-center relative shrink-0 w-full" style={{ height: "324px" }}>
          <div className="flex-none rotate-[90deg] w-full">
            <div className="h-[324px] relative w-full">
              <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
                <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                  <img className="block max-w-none size-full" src={collapsed ? imgVector1 : imgVector2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TaskGuidanceSidebar() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-start left-0 top-14 w-[324px]" data-name="Task Guidance">
      <div className="basis-0 bg-neutral-900 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full">
        
        {/* Header */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-end overflow-clip relative size-full">
            <div className="box-border content-stretch flex gap-3 items-center justify-end px-4 py-3 relative w-full">
              <div className="basis-0 font-['CentraleSans:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[16px] text-nowrap">
                <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Task Guidance</p>
              </div>
              <div className="content-stretch flex gap-4 items-center justify-end relative shrink-0">
                <div className="relative shrink-0 size-6">
                  <img className="block max-w-none size-full" src={imgCollapse} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Overview */}
        <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-5 pt-0 px-0 relative shrink-0 w-full">
          <TaskTab icon={imgIconsTaskSeries24} label="Series" />
          <TaskTab icon={imgIconsTaskPlanning24} label="Plan" isActive={true} />
          <TaskTab icon={imgIconsTaskLive24} label="Live" />
        </div>

        {/* Step Overview */}
        <div className="basis-0 bg-[#212121] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
          
          {/* Planning Section */}
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <ExpandableSection title="Planning" isCollapsed={true}>
              <div className="flex items-center justify-center relative shrink-0 w-full" style={{ height: "324px" }}>
                <div className="flex-none rotate-[90deg] w-full">
                  <div className="h-[324px] relative w-full">
                    <div className="absolute bottom-0 left-1/2 right-1/2 top-0">
                      <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                        <img className="block max-w-none size-full" src={imgVector1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>

          {/* Viewing Angles Section */}
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <ExpandableSection title="Viewing Angles" isCollapsed={false}>
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-start justify-start min-h-px min-w-px pb-5 pt-0 px-0 relative shrink-0">
                  <CArmPreview />
                  <StoreAngleButton />
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[324px]">
                    <AngleListItem title="Angle 1" angle="Rot -180° Ang -180°" />
                    <AngleListItem title="Angle 2" angle="Rot -180° Ang -180°" />
                    <AngleListItem icon={imgIcon5} title="Angle 3" angle="Rot -180° Ang -180°" hasDelete={true} />
                    <AngleListItem icon={imgIcon5} title="Angle 4" angle="Rot -180° Ang -180°" hasDelete={true} />
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>

        </div>
      </div>
    </div>
  );
}