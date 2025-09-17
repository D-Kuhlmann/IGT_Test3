import { useState, useEffect } from "react";
import svgPaths from "../../../imports/svg-9nh39pc6ok";
import { useAngle } from "../../../contexts/AngleContext";
import imgImage1 from "figma:asset/82f7f32e258c1f3564c6028958e44e4ec5476529.png";
import imgCoronal from "figma:asset/4c8bbf83fe02a6ff097b8e4c2200db41b8b53782.png";
import imgImage from "figma:asset/71dabdc7502548dbc0e7e3fc8521d3ad4a8010af.png";
import imgImage2 from "figma:asset/db228b80ad186ca3d5adc278aa560e86a0eda3b7.png";
import imgImage3 from "figma:asset/7ece7bb00a5e8eaa345a0ea283f6a6bc424b0ef3.png";
import Angle1 from "../../../assets/ImageAngles/Angle1.png";
import Angle2 from "../../../assets/ImageAngles/Angle2.png";
import Angle3 from "../../../assets/ImageAngles/Angle3.png";
import Angle4 from "../../../assets/ImageAngles/Angle4.png";

interface AngleData {
  id: string;
  name: string;
  rotation: string;
  angle: string;
  icon: "import" | "carm";
  canDelete: boolean;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1c6ba100} fill="var(--fill-0, #E8E8E8)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ActionBarButton({ 
  icon, 
  onClick, 
  ariaLabel 
}: { 
  icon: React.ReactNode; 
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button 
      className="box-border content-stretch flex gap-[8px] h-[64px] items-center justify-center px-[18px] py-[16px] relative rounded-[2px] shrink-0 w-[88px] transition-colors hover:bg-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {icon}
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pa1c6aa0} fill="var(--fill-0, #E8E8E8)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2bda4100} fill="var(--fill-0, #E8E8E8)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ActionBarSection() {
  const handleClick = (action: string) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-start relative shrink-0">
      <ActionBarButton 
        icon={<Icon />} 
        onClick={() => handleClick('home')}
        ariaLabel="Home"
      />
      <ActionBarButton 
        icon={<Icon1 />} 
        onClick={() => handleClick('camera')}
        ariaLabel="Camera"
      />
      <ActionBarButton 
        icon={<Icon2 />} 
        onClick={() => handleClick('video')}
        ariaLabel="Video"
      />
    </div>
  );
}

function TaskButton({ 
  icon, 
  label, 
  isActive, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  isActive?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${isActive ? 'bg-[rgba(255,255,255,0.1)]' : ''} h-[84px] relative shrink-0 w-full transition-colors hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset`}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={label}
      type="button"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] h-[84px] items-center justify-center pb-[4px] pt-[6px] px-[4px] relative w-full">
          {icon}
          <div className="font-['CentraleSans:Book',_sans-serif] leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e8e8e8] text-[14px] text-center text-nowrap" style={{ width: "min-content" }}>
            <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">{label}</p>
          </div>
          {isActive && <div className="absolute bg-[#439ac1] bottom-0 left-0 top-0 w-[4px]" />}
        </div>
      </div>
    </button>
  );
}

function TaskSection() {
  const [activeTask, setActiveTask] = useState<string>("plan");

  const tasks = [
    { id: "series", label: "Series", icon: svgPaths.pf05b500 },
    { id: "plan", label: "Plan", icon: svgPaths.p16f7cf00 },
    { id: "live", label: "Live", icon: svgPaths.p315c5770 }
  ];

  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      {tasks.map((task) => (
        <TaskButton
          key={task.id}
          icon={
            <div className="overflow-clip relative shrink-0 size-[32px]">
              <div className="absolute inset-[9.38%_12.5%_6.25%_12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <path 
                    d={task.icon} 
                    fill={task.id === activeTask ? "#439AC1" : "#D6D6D6"} 
                    fillOpacity={task.id === activeTask ? "1" : "0.8"} 
                  />
                </svg>
              </div>
            </div>
          }
          label={task.label}
          isActive={activeTask === task.id}
          onClick={() => setActiveTask(task.id)}
        />
      ))}
    </div>
  );
}

function ActionBar() {
  return (
    <div className="bg-neutral-900 box-border content-stretch flex flex-col gap-[24px] h-[720px] items-center justify-start px-0 py-[20px] relative shrink-0 w-[128px]">
      <ActionBarSection />
      <TaskSection />
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex gap-[16px] items-center transition-colors hover:bg-[rgba(255,255,255,0.05)] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
      onClick={onClick}
      aria-label="Back to previous view"
      type="button"
    >
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p33541080} fill="#D6D6D6" fillOpacity="0.8" fillRule="evenodd" />
        </svg>
      </div>
      <div className="basis-0 flex flex-col font-['CentraleSans:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Viewing Angles</p>
      </div>
    </button>
  );
}

function StoreAngleButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start px-[16px] py-0 relative shrink-0 w-[304px]">
      <button 
        className="bg-[#1474a4] box-border content-stretch flex gap-[8px] items-center justify-center px-0 py-[18px] relative rounded-[4px] shrink-0 w-full transition-colors hover:bg-[#1a8cc7] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-offset-2 focus:ring-offset-[#212121]"
        onClick={onClick}
        type="button"
      >
        <div className="basis-0 font-['CentraleSans:Book',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-center text-nowrap text-white">
          <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden">Store angle</p>
        </div>
      </button>
    </div>
  );
}

function AngleListItem({ 
  angle, 
  onDelete,
  onSelect 
}: { 
  angle: AngleData; 
  onDelete?: () => void;
  onSelect?: () => void;
}) {
  const iconPath = angle.icon === "import" ? svgPaths.p19e4b880 : svgPaths.p10a6ce00;

  return (
    <button 
      className="content-stretch flex h-[72px] items-start justify-start relative shrink-0 w-[304px] transition-colors hover:bg-[rgba(255,255,255,0.05)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
      onClick={onSelect}
      type="button"
    >
      <div className="box-border content-stretch flex gap-[8px] h-[72px] items-center justify-start px-[16px] py-[8px] relative shrink-0 w-[304px]">
        <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-start min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path d={iconPath} fill="#D6D6D6" />
            </svg>
          </div>
          <div className="content-stretch flex flex-col font-['CentraleSans:Book',_sans-serif] items-start justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap w-[192px]">
            <div className="min-w-full overflow-ellipsis overflow-hidden relative shrink-0" style={{ width: "min-content" }}>
              <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden text-nowrap">{angle.name}</p>
            </div>
            <div className="overflow-ellipsis overflow-hidden relative shrink-0 w-[192px]">
              <p className="[white-space-collapse:collapse] leading-[28px] overflow-ellipsis overflow-hidden text-[20px] text-nowrap">{angle.rotation} {angle.angle}</p>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-[10px] items-center justify-start p-[4px] shrink-0 size-[32px]">
          {angle.canDelete && onDelete && (
            <button
              className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 transition-colors hover:bg-[rgba(255,255,255,0.1)] rounded focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              aria-label={`Delete ${angle.name}`}
              type="button"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3ae2a600} fill="#D6D6D6" fillOpacity="0.8" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </button>
  );
}

function RotationButton({ 
  direction, 
  onClick 
}: { 
  direction: 'left' | 'right' | 'up' | 'down'; 
  onClick: () => void;
}) {
  const pathMap = {
    left: svgPaths.pf55d480,
    right: svgPaths.p12b9bb80,
    up: svgPaths.p84b59f0,
    down: svgPaths.p15243a80
  };

  const positionMap = {
    left: "left-[8px] top-1/2 translate-y-[-50%]",
    right: "right-[8px] top-1/2 translate-y-[-50%]",
    up: "left-1/2 top-[8px] translate-x-[-50%]",
    down: "left-1/2 bottom-[8px] translate-x-[-50%]"
  };

  return (
    <button
      className={`absolute bg-black size-[24px] ${positionMap[direction]} transition-colors hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset rounded`}
      onClick={onClick}
      aria-label={`Rotate ${direction}`}
      type="button"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={pathMap[direction]} fill="#D6D6D6" />
      </svg>
    </button>
  );
}

function ThumbnailImage({ 
  src, 
  isActive, 
  indicatorColor, 
  onClick 
}: { 
  src: string; 
  isActive?: boolean; 
  indicatorColor: string;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-center bg-contain bg-no-repeat relative shrink-0 size-[96px] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-offset-2 focus:ring-offset-black rounded"
      style={{ backgroundImage: `url('${src}')` }}
      onClick={onClick}
      aria-label="Select image view"
      type="button"
    >
      <div className="overflow-clip relative size-[96px]">
        <div className={`absolute bottom-[8px] h-[16px] left-[8px] opacity-70 w-[8px]`} style={{ backgroundColor: indicatorColor }} />
      </div>
      {isActive && <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_2px_inset_#000000]" />}
      <div aria-hidden="true" className="absolute border border-[#b0b0b0] border-solid inset-0 pointer-events-none" />
    </button>
  );
}

function ToolbarButton({ 
  icon, 
  label, 
  hasDropdown = false, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  hasDropdown?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="box-border content-stretch flex flex-col gap-[2px] h-[64px] items-center justify-center min-w-[80px] pb-[4px] pt-[6px] px-[4px] relative rounded-[4px] shrink-0 w-[88px] transition-colors hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[#2b86b2] focus:ring-inset"
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      {icon}
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-center text-nowrap" style={{ width: "min-content" }}>
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">{label}</p>
      </div>
      {hasDropdown && (
        <div className="absolute right-[4px] size-[24px] translate-y-[-50%]" style={{ top: "calc(50% - 8px)" }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d="M17 10L12 15L7 10V9H17V10Z" fill="#D6D6D6" fillRule="evenodd" />
          </svg>
        </div>
      )}
    </button>
  );
}

export function UniGuideInterface() {
  const { selectedAngleId, selectedAngleImage, setSelectedAngle } = useAngle();
  
  const [angles, setAngles] = useState<AngleData[]>([
    { id: "1", name: "Angle 1", rotation: "Rot -180°", angle: "Ang -180°", icon: "import", canDelete: false },
    { id: "2", name: "Angle 2", rotation: "Rot -180°", angle: "Ang -180°", icon: "import", canDelete: false },
    { id: "3", name: "Angle 3", rotation: "Rot -180°", angle: "Ang -180°", icon: "carm", canDelete: true },
    { id: "4", name: "Angle 4", rotation: "Rot -180°", angle: "Ang -180°", icon: "carm", canDelete: true }
  ]);

  const [activeImage, setActiveImage] = useState<number>(1);
  const [currentAngle, setCurrentAngle] = useState({ rotation: "-180°", angle: "-180°" });
  const [mainImage, setMainImage] = useState<string>(imgImage1);

  // Map angle IDs to their corresponding images
  const angleImages = {
    "1": Angle1,
    "2": Angle2,
    "3": Angle3,
    "4": Angle4
  };

  // Sync with cross-screen angle selection
  useEffect(() => {
    if (selectedAngleImage) {
      setMainImage(selectedAngleImage);
    }
  }, [selectedAngleImage]);

  const handleStoreAngle = () => {
    const newAngle: AngleData = {
      id: Date.now().toString(),
      name: `Angle ${angles.length + 1}`,
      rotation: `Rot ${currentAngle.rotation}`,
      angle: `Ang ${currentAngle.angle}`,
      icon: "carm",
      canDelete: true
    };
    setAngles([...angles, newAngle]);
  };

  const handleDeleteAngle = (angleId: string) => {
    setAngles(angles.filter(angle => angle.id !== angleId));
  };

  const handleSelectAngle = (angleId: string) => {
    const selectedImage = angleImages[angleId as keyof typeof angleImages];
    if (selectedImage) {
      setMainImage(selectedImage);
    }
  };

  const handleRotation = (direction: 'left' | 'right' | 'up' | 'down') => {
    console.log(`Rotating ${direction}`);
  };

  const handleToolClick = (tool: string) => {
    console.log(`Tool clicked: ${tool}`);
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const images = [
    { src: imgImage, color: "#23cc72" },
    { src: imgImage2, color: "#ff8370" },
    { src: imgImage3, color: "#63a2ff" }
  ];

  return (
    <div className="content-stretch flex items-center justify-start relative size-full">
      <ActionBar />
      
      {/* Step Overview */}
      <div className="bg-[#212121] box-border content-stretch flex flex-col h-[720px] items-start justify-start pb-0 pt-[16px] px-0 relative shrink-0 w-[304px]">
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex gap-[16px] items-start justify-start px-[20px] py-[24px] relative w-full">
              <BackButton onClick={handleBackClick} />
            </div>
          </div>
        </div>
        
        <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow items-start justify-start min-h-px min-w-px overflow-clip pb-[20px] pt-[4px] px-0 relative shrink-0 w-full">
          {/* C-arm Preview */}
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex items-start justify-start px-[16px] py-0 relative w-full">
                <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0">
                  <div className="absolute flex flex-col font-['CentraleSans:Book',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#d6d6d6] text-[20px] text-center">
                    <p className="leading-[28px]">{currentAngle.rotation} {currentAngle.angle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <StoreAngleButton onClick={handleStoreAngle} />
          
          {/* Angles List */}
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
            {angles.map((angle) => (
              <AngleListItem
                key={angle.id}
                angle={angle}
                onDelete={angle.canDelete ? () => handleDeleteAngle(angle.id) : undefined}
                onSelect={() => handleSelectAngle(angle.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main View Area */}
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start justify-start ml-0 mt-0 relative size-[720px]">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
            <div className="absolute bg-black box-border content-stretch flex flex-col gap-[10px] inset-0 items-start justify-start p-[2px]">
              <div className="basis-0 bg-center bg-contain bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('${mainImage}')` }} />
            </div>
            
            {/* Image Information Overlay */}
            <div className="absolute inset-0 overflow-clip">
              <div className="absolute bottom-0 box-border content-stretch flex flex-col gap-[4px] items-end justify-end p-[12px] right-0">
                <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center p-[4px] relative shrink-0">
                  <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[80px]" style={{ backgroundImage: `url('${imgCoronal}')` }} />
                </div>
                <div className="content-stretch flex flex-col items-end justify-start relative shrink-0">
                  <div className="content-stretch flex gap-[6px] h-[22px] items-center justify-end relative shrink-0">
                    <div className="[text-shadow:#000000_0px_0px_1px,#000000_1px_1px_1px] font-['CentraleSansCnd:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdf5d7] text-[16px] text-nowrap text-right">
                      <p className="leading-[22px] whitespace-pre">Rot 0˚ Ang 0˚</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rotation Controls */}
            <div className="absolute inset-0">
              <RotationButton direction="left" onClick={() => handleRotation('left')} />
              <RotationButton direction="right" onClick={() => handleRotation('right')} />
              <RotationButton direction="up" onClick={() => handleRotation('up')} />
              <RotationButton direction="down" onClick={() => handleRotation('down')} />
            </div>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[16px] items-center justify-center ml-[612px] mt-[200px] overflow-clip relative">
          {images.map((image, index) => (
            <ThumbnailImage
              key={index}
              src={image.src}
              isActive={activeImage === index}
              indicatorColor={image.color}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Toolbar */}
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          <div className="bg-neutral-900 h-[680px] relative shrink-0 w-[88px]">
            {/* Bottom Tools */}
            <div className="absolute bottom-[4px] content-stretch flex flex-col gap-[4px] items-center justify-end">
              <div className="h-px relative shrink-0 w-[88px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 1">
                  <path d="M0 0.5L88 0.5" stroke="#454545" />
                </svg>
              </div>
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p3ca200} fill="#E8E8E8" />
                    </svg>
                  </div>
                }
                label="More"
                onClick={() => handleToolClick('more')}
              />
            </div>
            
            {/* Top Tools */}
            <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-start left-0 overflow-clip top-[4px] w-[88px]">
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p433d900} fill="#D6D6D6" />
                    </svg>
                  </div>
                }
                label="View"
                hasDropdown
                onClick={() => handleToolClick('view')}
              />
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.pf82b7f0} fill="#D6D6D6" />
                    </svg>
                  </div>
                }
                label="Windowing"
                onClick={() => handleToolClick('windowing')}
              />
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p25afd380} fill="#D6D6D6" opacity="0.5" />
                      <path d={svgPaths.p28748400} fill="#D6D6D6" />
                    </svg>
                  </div>
                }
                label="Opacity"
                onClick={() => handleToolClick('opacity')}
              />
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p1e761b80} fill="#D6D6D6" />
                    </svg>
                  </div>
                }
                label="Rotate"
                hasDropdown
                onClick={() => handleToolClick('rotate')}
              />
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p3936f800} fill="#D6D6D6" />
                    </svg>
                  </div>
                }
                label="Orientation"
                hasDropdown
                onClick={() => handleToolClick('orientation')}
              />
              <ToolbarButton
                icon={
                  <div className="relative shrink-0 size-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <path d={svgPaths.p2938bf00} fill="#D6D6D6" />
                    </svg>
                  </div>
                }
                label="Meas. tools"
                hasDropdown
                onClick={() => handleToolClick('measurement')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}