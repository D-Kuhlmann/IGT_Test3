import React from 'react';
import { imgPhilipsWordmark2, imgIcon, imgIcon1, imgIcon2, imgIcon3, imgIcon4 } from "./svg-ymf65";

function Background() {
  return <div className="basis-0 bg-[rgba(56,56,56,0)] grow h-full min-h-px min-w-px shrink-0" data-name="Background" />;
}

function PhilipsWordmark2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[77px]" data-name="philips-wordmark-2">
      <img className="block max-w-none size-full" src={imgPhilipsWordmark2} />
    </div>
  );
}

function Wordmark() {
  return (
    <div className="box-border content-stretch flex flex-col h-[15px] items-center justify-start px-2 py-0 relative shrink-0" data-name="wordmark">
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-2 py-0 relative shrink-0" data-name="solution name">
      <div className="font-['CentraleSans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Azurion NG</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Left">
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function Left1() {
  return (
    <div className="absolute box-border content-stretch flex gap-12 h-12 items-center justify-start left-2 pl-2 pr-0 py-0 top-1/2 translate-y-[-50%]" data-name="Left">
      <Left />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Time">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre"> </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon} />
    </div>
  );
}

function BurgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
    // Add logout functionality here
    setIsOpen(false);
  };

  const handleSettings = () => {
    console.log('Opening user settings...');
    setIsOpen(false);
  };

  const handleHelp = () => {
    console.log('Opening help...');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative rounded-[2px] shrink-0 size-6 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200 focus:outline-none"
        data-name="Button"
      >
        <Icon1 />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-1">
            <button
              onClick={handleSettings}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <span>User Settings</span>
            </button>
            <button
              onClick={handleHelp}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Help & Support</span>
            </button>
            <div className="border-t border-gray-200 my-1"></div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

function Button1() {
  return <BurgerMenu />;
}

function Icon4() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0" data-name="icon4">
      <Button1 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-5 h-12 items-center justify-end relative shrink-0" data-name="Right side">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre"> </p>
      </div>
      <Time />
      <Icon4 />
    </div>
  );
}

function Right() {
  return (
    <div className="absolute content-stretch flex gap-2 h-12 items-center justify-end right-6 top-1/2 translate-y-[-50%]" data-name="Right">
      <RightSide />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-2.5 h-14 items-center justify-start relative shrink-0 w-full" data-name="Top row">
      <Background />
      <Left1 />
      <Right />
    </div>
  );
}

function Template() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-start relative shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="Template">
      <TopRow />
    </div>
  );
}

function NavigationBarIgt() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[768px]" data-name="Navigation bar (IGT)">
      <Template />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-8" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon1} />
    </div>
  );
}

function Button2() {
  return (
    <div className="h-16 relative rounded-[2px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-16 items-center justify-center px-3 py-2 relative w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  const handleClick = () => {
    console.log('System Settings clicked');
    // Add system settings functionality here
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-2 items-center justify-start px-6 py-3 relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      <Button2 />
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-20">
        <p className="mb-0">System</p>
        <p>Settings</p>
      </div>
    </button>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-8" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon2} />
    </div>
  );
}

function Button3() {
  return (
    <div className="h-16 relative rounded-[2px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-16 items-center justify-center px-3 py-2 relative w-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Frame117() {
  const handleClick = () => {
    console.log('Eco-Mode clicked');
    // Add eco-mode functionality here
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-2 items-center justify-start px-6 py-3 relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      <Button3 />
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-20">
        <p className="mb-0">Eco-Mode</p>
        <p>&nbsp;</p>
      </div>
    </button>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-8" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon3} />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-16 relative rounded-[2px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-16 items-center justify-center px-3 py-2 relative w-full">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  const handleClick = () => {
    console.log('AI Assistant clicked');
    // Add AI assistant functionality here
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-2 items-center justify-start px-6 py-3 relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      <Button4 />
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">
        <p className="mb-0">AI Assistant</p>
        <p>&nbsp;</p>
      </div>
    </button>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-8" data-name="Icon">
      <img className="block max-w-none size-full" src={imgIcon4} />
    </div>
  );
}

function Button5() {
  return (
    <div className="h-16 relative rounded-[2px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-16 items-center justify-center px-3 py-2 relative w-full">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Frame119() {
  const handleClick = () => {
    console.log('Training Mode clicked');
    // Add training mode functionality here
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-[rgba(255,255,255,0.2)] box-border content-stretch flex flex-col gap-2 items-center justify-start px-6 py-3 relative rounded-[10px] shrink-0 cursor-pointer hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      <Button5 />
      <div className="font-['CentraleSans:Book',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white w-20">
        <p className="mb-0">Training</p>
        <p>Mode</p>
      </div>
    </button>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0">
      <Frame116 />
      <Frame117 />
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="absolute content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-6 items-center justify-start leading-[0] left-[272px] not-italic text-center text-nowrap text-white top-[472px]">
      <div className="relative shrink-0 text-[0px]">
        <p className="font-['CentraleSans:Bold',_sans-serif] leading-[28px] text-[20px] text-nowrap whitespace-pre">DOE, Jane</p>
      </div>
      <div className="relative shrink-0 text-[20px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">2345412</p>
      </div>
    </div>
  );
}

export default function WmuDefaultPatientLoggedIn() {
  return (
    <div className="bg-[#0b5ed8] relative size-full" data-name="WMU-DefaultPatientLoggedIn">
      <div className="content-stretch flex flex-col gap-10 items-center justify-start overflow-clip relative size-full">
        <div className="absolute bg-[#0b5ed8] h-[512px] left-0 opacity-[0.35] top-0 w-[768px]" />
        <NavigationBarIgt />
        <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] h-14 justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-center text-white w-[258px]">
          <p className="leading-[56px]">9:00 AM</p>
        </div>
        <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] h-6 justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white w-[258px]">
          <p className="leading-[28px]">Tuesday, 15 May 2023</p>
        </div>
        <Frame322 />
        <div className="bg-[rgba(5,5,5,0.2)] h-20 rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[640px]" />
        <div className="absolute bg-[#3c7ee0] h-1 left-1/2 rounded-[3px] top-[438px] translate-x-[-50%] w-56" />
        <Frame120 />
      </div>

    </div>
  );
}