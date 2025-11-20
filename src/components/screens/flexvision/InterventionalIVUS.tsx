import React, { useState, useEffect, useRef } from 'react';
import { ComponentHeader, ViewportHeader } from '../../shared/ViewportHeaders';
import { useSettings } from '../../../contexts/SettingsContext';
import { useWorkflowSync } from '../../../contexts/WorkflowSyncContext';

// SVG paths from Uniguide
const svgPaths = {
  philipsWordmark: "M25.913 0.287144H21.8089V5.63082H17.5368V0.287144H13.4327V13.7339H17.5368V8.44622H21.8089V13.7339H25.913V0.287144ZM40.1931 11.0305V0.287144H36.089V13.7339H43.5058L44.1221 11.0305H40.1861H40.1931ZM33.0495 0.287144H28.9455V13.7339H33.0495V0.287144ZM49.6898 0.287144H45.5858V13.7339H49.6898V0.287144ZM69.923 3.71886C69.923 2.9905 70.6513 2.64732 71.8349 2.64732C73.1306 2.64732 74.5313 2.92746 75.4907 3.31966L75.1546 0.392196C74.083 0.168084 73.1306 0 71.3867 0C68.067 0 65.8189 1.30965 65.8189 4.04802C65.8189 8.77539 72.2271 7.81591 72.2271 10.008C72.2271 10.8484 71.6108 11.3037 70.091 11.3037C68.7394 11.3037 66.6593 10.8554 65.4267 10.2321L65.8749 13.3277C67.1146 13.7759 68.7954 14 70.1471 14C73.5788 14 76.3872 12.8724 76.3872 9.49675C76.3872 4.9935 69.923 5.84092 69.923 3.70485V3.71886ZM58.3462 10.5263C62.1701 10.5263 64.5863 8.55828 64.5863 5.12656C64.5863 1.35868 62.002 0.0070035 57.7859 0.0070035C56.1541 0.0070035 54.1861 0.11906 52.7854 0.287144V13.7339H56.8894V10.5263H58.3532H58.3462ZM60.5383 5.18259C60.5383 6.92646 59.6978 8.11005 57.5618 8.11005H56.8894V2.54927C57.1276 2.53527 57.3517 2.53527 57.5618 2.53527C59.5858 2.53527 60.5383 3.49475 60.5383 5.17559V5.18259ZM5.56778 10.5263C9.3917 10.5263 11.8079 8.55828 11.8079 5.12656C11.8009 1.35868 9.21661 0.0070035 5.0005 0.0070035C3.37569 0.0070035 1.4077 0.11906 0 0.287144V13.7339H4.10405V10.5263H5.56778ZM7.75988 5.18259C7.75988 6.92646 6.91946 8.11005 4.78339 8.11005H4.11106V2.54927C4.34917 2.53527 4.57329 2.53527 4.78339 2.53527C6.8074 2.53527 7.75988 3.49475 7.75988 5.17559V5.18259Z",
  patientIcon: "M30.6667 12L29.3333 14.6667H25.3333V25.3333H6.66667V14.6667H2.66667L1.33333 12H30.6667ZM4 5.33333C5.46667 5.33333 6.66667 6.53333 6.66667 8C6.66667 9.46667 5.46667 10.6667 4 10.6667C2.53333 10.6667 1.33333 9.46667 1.33333 8C1.33333 6.53333 2.53333 5.33333 4 5.33333ZM28.4 6.66667H29.3333V10.6667H8V6.66667H17.3333V8H28V6.66667H28.4Z",
  icon1: "M18 5L16 3H8L6 5H1V21H23V5H18ZM12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8Z",
  icon2: "M23 5L17 11.001V5H1V19.003H17V13.002L23 19.003V5Z",
  icon3: "M14.5 1C9.8 1 6 4.8 6 9.5C6 11.3 6.6 13 7.6 14.4L1 21L3 23L9.6 16.4C11 17.4 12.7 18 14.5 18C19.2 18 23 14.2 23 9.5C23 4.8 19.2 1 14.5 1ZM14.5 15C13.4 15 12.3 14.6 11.3 14L10.5 13.5L10 12.7C9.3 11.8 9 10.7 9 9.5C9 6.5 11.5 4 14.5 4C17.5 4 20 6.5 20 9.5C20 12.5 17.5 15 14.5 15Z"
};

function PhilipsWordmark2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[77px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 15">
        <path d={svgPaths.philipsWordmark} fill="white" />
      </svg>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="box-border content-stretch flex flex-col h-[15px] items-center px-[8px] py-0 relative shrink-0">
      <PhilipsWordmark2 />
    </div>
  );
}

function SolutionName() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[8px] py-0 relative shrink-0">
      <p className="font-['CentraleSans:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">IVUS</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Wordmark />
      <SolutionName />
    </div>
  );
}

function DlsPatientAcquisition24() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.patientIcon} fill="#41C9FE" />
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['CentraleSans:Medium',_sans-serif] leading-[28px] not-italic relative shrink-0 text-[#41c9fe] text-[20px] text-nowrap whitespace-pre">DOE, Jane</p>
    </div>
  );
}

function Patient() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DlsPatientAcquisition24 />
      <TextContainer />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(214,214,214,0.65)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">Patient ID</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">234567</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex font-['CentraleSans:Book',_sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#8c8c8c]">
        <p className="leading-[28px] text-nowrap whitespace-pre">DOB</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.8)]">
        <p className="leading-[28px] text-nowrap whitespace-pre">15-Jan-1991 (33 y)</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Label />
      <Label1 />
    </div>
  );
}

function PatientInfo() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-center justify-center relative shrink-0">
      <Patient />
      <Info />
    </div>
  );
}

function Left2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[48px] items-center left-[8px] pl-[8px] pr-0 py-0 top-[110%] translate-y-[-50%]">
      <Left1 />
      <PatientInfo />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px]">
      <div className="flex flex-col font-['CentraleSansDS:Book',_sans-serif] justify-center relative shrink-0 text-nowrap">
        <p className="leading-[28px] whitespace-pre">09:00</p>
      </div>
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center relative shrink-0 text-center w-[40px]">
        <p className="leading-[28px]">AM</p>
      </div>
    </div>
  );
}

function DateTimeUser() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['CentraleSans:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">01-Jul-2024</p>
      </div>
      <Time />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.icon1} fill="#D6D6D6" />
      </svg>
    </div>
  );
}

function ButtonIgt5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.icon2} fill="#D6D6D6" />
      </svg>
    </div>
  );
}

function ButtonIgt6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.icon3} fill="#D6D6D6" />
      </svg>
    </div>
  );
}

function ButtonIgt7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[2px] shrink-0 size-[40px]">
      <Icon3 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <ButtonIgt5 />
      <ButtonIgt6 />
      <ButtonIgt7 />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center justify-end relative shrink-0">
      <DateTimeUser />
      <Icons3 />
    </div>
  );
}

function Right1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center justify-end right-[16px] top-[110%] translate-y-[-50%]">
      <RightSide />
    </div>
  );
}

function Background() {
  return <div className="basis-0 bg-[#383838] grow h-full min-h-px min-w-px shrink-0" />;
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center relative shrink-0 w-full">
      <Background />
      <Left2 />
      <Right1 />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 right-0 top-0 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)]">
      <TopRow />
    </div>
  );
}

function InterventionalIVUSContent({ isFocused, isSelected, hideFocusIndicators = false }: { isFocused: boolean; isSelected: boolean; hideFocusIndicators?: boolean }) {
  const { inputSettings } = useSettings();
  const workflowSync = useWorkflowSync();
  // Use shared state from workflowSync for cross-screen synchronization
  const setupStep = workflowSync.ivusSetupStep ?? 1; // Default to step 1 if undefined
  const [focusedButtonIndex, setFocusedButtonIndex] = useState(2); // Start with Ringdown button selected in live mode
  const [ringdownActive, setRingdownActive] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  // Use shared state from workflowSync for cross-screen synchronization
  const isRecordingStopped = workflowSync.ivusRecordingStopped || false;
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrubberRef = useRef<HTMLDivElement>(null);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const isProcessingKey = useRef(false);
  const [scrubberFocused, setScrubberFocused] = useState(false); // Scrubber is selected
  const [scrubberActive, setScrubberActive] = useState(false); // Scrubber is being controlled
  const [isPlaying, setIsPlaying] = useState(false); // Video playback state
  const [bookmarks, setBookmarks] = useState<number[]>([]); // Bookmark positions in seconds
  const keyHoldTimer = useRef<NodeJS.Timeout | null>(null);
  const keyHoldCount = useRef(0);
  
  // Bottom row buttons (left to right) - changes based on recording state
  const buttons = isRecordingStopped
    ? [
        { id: 'bookmark', label: 'Bookmark' },
        { id: isPlaying ? 'pause' : 'play', label: isPlaying ? 'Pause' : 'Play' },
        { id: 'live', label: 'Live' }
      ]
    : isRecording 
    ? [
        { id: 'bookmark', label: 'Bookmark' },
        { id: 'stop', label: 'Stop' }
      ]
    : [
        { id: 'save-frame', label: 'Save Frame' },
        { id: 'freeze', label: 'Freeze' },
        { id: 'ringdown', label: 'Ringdown' },
        { id: 'record', label: 'Record' }
      ];

  const handleButtonClick = (buttonId: string) => {
    console.log(`IVUS: Button clicked: ${buttonId}`);
    
    if (buttonId === 'freeze') {
      setIsFrozen(!isFrozen);
      if (!isFrozen && videoRef.current) {
        videoRef.current.pause();
      } else if (isFrozen && videoRef.current) {
        videoRef.current.play();
      }
      console.log('IVUS: Freeze toggled:', !isFrozen);
    } else if (buttonId === 'ringdown') {
      setRingdownActive(true);
      console.log('IVUS: Ringdown activated');
    } else if (buttonId === 'record') {
      const newRecordingState = !isRecording;
      setIsRecording(newRecordingState);
      console.log('IVUS: Recording toggled:', newRecordingState);
      
      if (newRecordingState) {
        // Start recording - reset timer, play recording video, and reset button focus
        setRecordingTime(0);
        setFocusedButtonIndex(0); // Reset to first button (Bookmark)
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      } else {
        // Stop recording
        setRecordingTime(0);
        setFocusedButtonIndex(0); // Reset to first button (Save Frame)
      }
    } else if (buttonId === 'stop') {
      // Stop recording manually - enter review mode
      setIsRecording(false);
      workflowSync.setIvusRecordingStopped(true);
      setRecordingTime(34); // Jump to end (34 seconds)
      setFocusedButtonIndex(0); // Reset to first button (Bookmark)
      
      // Pause video and set to end
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 34;
      }
      console.log('IVUS: Recording stopped manually, entering review mode');
    } else if (buttonId === 'pause' || buttonId === 'play') {
      // Toggle play/pause
      if (buttonId === 'pause') {
        console.log('IVUS: Playback paused');
        setIsPlaying(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      } else {
        console.log('IVUS: Playback resumed');
        setIsPlaying(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    } else if (buttonId === 'live') {
      // Live button - exit review mode and return to live view
      console.log('IVUS: Returning to live view');
      workflowSync.setIvusRecordingStopped(false);
      setRecordingTime(0);
      setFocusedButtonIndex(2); // Auto-select Ringdown button when returning to live
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else if (buttonId === 'bookmark') {
      console.log('IVUS: Bookmark added at', recordingTime);
      // Add bookmark at current position
      if (!bookmarks.includes(recordingTime)) {
        setBookmarks([...bookmarks, recordingTime].sort((a, b) => a - b));
      }
    }
  };

  // Recording timer - update every 100ms for smoother scrubber animation
  useEffect(() => {
    if (!isRecording) return;

    const interval = setInterval(() => {
      setRecordingTime((prev) => Math.min(prev + 0.1, 34)); // Increment by 0.1 seconds, cap at 34
    }, 100);

    return () => clearInterval(interval);
  }, [isRecording]);

  // Format recording time as MM:SS
  const formatTime = (seconds: number) => {
    const wholeSeconds = Math.floor(seconds);
    const mins = Math.floor(wholeSeconds / 60);
    const secs = wholeSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle scrubbing through the video
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubberRef.current || !isRecordingStopped) return;
    
    const rect = scrubberRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newTime = Math.round(percentage * 34 * 10) / 10; // Round to nearest 0.1 second (frame)
    
    setRecordingTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isRecordingStopped) return;
    setIsScrubbing(true);
    handleScrub(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isScrubbing) {
      handleScrub(e);
    }
  };

  const handleMouseUp = () => {
    setIsScrubbing(false);
  };

  // Add global mouse up listener for scrubbing
  useEffect(() => {
    if (isScrubbing) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isScrubbing]);

  // Start playback when entering review mode
  useEffect(() => {
    if (isRecordingStopped && videoRef.current) {
      // Reset to beginning and start playing
      videoRef.current.currentTime = 0;
      setRecordingTime(0);
      setIsPlaying(true);
      videoRef.current.play();
    }
  }, [isRecordingStopped]);

  // Sync scrubber with video playback
  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;

    const updateScrubber = () => {
      if (videoRef.current) {
        const currentTime = Math.round(videoRef.current.currentTime * 10) / 10; // Round to frame precision
        setRecordingTime(currentTime);
        
        // Stop at end
        if (currentTime >= 34) {
          setIsPlaying(false);
          videoRef.current.pause();
        }
      }
    };

    const interval = setInterval(updateScrubber, 100); // Update 10 times per second
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Debug: Log bookmarks when they change
  useEffect(() => {
    console.log('IVUS: Bookmarks array updated:', bookmarks);
    console.log('IVUS: Number of bookmarks:', bookmarks.length);
  }, [bookmarks]);

  // Handle keyboard navigation for bottom buttons
  useEffect(() => {
    // Enable keyboard control when either focused OR selected AND focus indicators are not hidden
    const isActive = (isFocused || isSelected) && !hideFocusIndicators;
    
    if (!isActive) {
      console.log('IVUS: Not active (focused or selected) or focus hidden, keyboard control disabled');
      return;
    }

    console.log('IVUS: Active (focused:', isFocused, 'selected:', isSelected, '), keyboard control enabled');

    const handleKeyDown = (e: KeyboardEvent) => {
      // If in setup mode, handle activate key to advance steps
      if (setupStep > 0) {
        const activateKey = typeof inputSettings.workflowStepActivate === 'string' ? inputSettings.workflowStepActivate.toLowerCase() : 'enter';
        if (e.key.toLowerCase() === activateKey) {
          e.preventDefault();
          e.stopPropagation();
          console.log('IVUS: Advancing setup step from', setupStep);
          if (setupStep < 3) {
            workflowSync.setIvusSetupStep(setupStep + 1);
          } else {
            workflowSync.setIvusSetupStep(0); // Complete setup
          }
          return;
        }
        return; // Block all other keys during setup
      }
      // Prevent duplicate processing
      if (isProcessingKey.current) {
        console.log('IVUS: Key already being processed, ignoring');
        return;
      }
      
      const key = e.key.toLowerCase();
      console.log('IVUS: Key pressed:', key);
      
      const leftKey = typeof inputSettings.workflowStepLeft === 'string' ? inputSettings.workflowStepLeft.toLowerCase() : 'arrowleft';
      const rightKey = typeof inputSettings.workflowStepRight === 'string' ? inputSettings.workflowStepRight.toLowerCase() : 'arrowright';
      const activateKey = typeof inputSettings.workflowStepActivate === 'string' ? inputSettings.workflowStepActivate.toLowerCase() : 'enter';
      const previousKey = typeof inputSettings.navigatorPreviousStep === 'string' ? inputSettings.navigatorPreviousStep.toLowerCase() : 'q';
      
      // If scrubber is active (being controlled)
      if (scrubberActive && isRecordingStopped) {
        console.log('IVUS: Scrubber is active, key pressed:', key);
        
        if (key === activateKey) {
          // Add bookmark at current position
          e.preventDefault();
          e.stopPropagation();
          isProcessingKey.current = true;
          console.log('IVUS: Adding bookmark at', recordingTime);
          console.log('IVUS: Current bookmarks:', bookmarks);
          if (!bookmarks.includes(recordingTime)) {
            const newBookmarks = [...bookmarks, recordingTime].sort((a, b) => a - b);
            console.log('IVUS: New bookmarks array:', newBookmarks);
            setBookmarks(newBookmarks);
          } else {
            console.log('IVUS: Bookmark already exists at this position');
          }
          setTimeout(() => { isProcessingKey.current = false; }, 100);
          return;
        } else if (key === leftKey) {
          e.preventDefault();
          e.stopPropagation();
          
          // Calculate step size based on how long key is held
          keyHoldCount.current++;
          const stepSize = Math.min(keyHoldCount.current * 0.1, 2); // Max 2 seconds per step
          
          console.log('IVUS: Scrub backward, step:', stepSize);
          const newTime = Math.max(0, Math.round((recordingTime - stepSize) * 10) / 10);
          setRecordingTime(newTime);
          if (videoRef.current) {
            videoRef.current.currentTime = newTime;
          }
          
          // Reset hold count after a delay
          if (keyHoldTimer.current) clearTimeout(keyHoldTimer.current);
          keyHoldTimer.current = setTimeout(() => {
            keyHoldCount.current = 0;
          }, 200);
        } else if (key === rightKey) {
          e.preventDefault();
          e.stopPropagation();
          
          // Calculate step size based on how long key is held
          keyHoldCount.current++;
          const stepSize = Math.min(keyHoldCount.current * 0.1, 2); // Max 2 seconds per step
          
          console.log('IVUS: Scrub forward, step:', stepSize);
          const newTime = Math.min(34, Math.round((recordingTime + stepSize) * 10) / 10);
          setRecordingTime(newTime);
          if (videoRef.current) {
            videoRef.current.currentTime = newTime;
          }
          
          // Reset hold count after a delay
          if (keyHoldTimer.current) clearTimeout(keyHoldTimer.current);
          keyHoldTimer.current = setTimeout(() => {
            keyHoldCount.current = 0;
          }, 200);
        } else if (key === previousKey) {
          e.preventDefault();
          e.stopPropagation();
          isProcessingKey.current = true;
          console.log('IVUS: Exit scrubber control');
          setScrubberActive(false);
          setTimeout(() => { isProcessingKey.current = false; }, 100);
        }
        return;
      }
      
      // If scrubber is focused but not active
      if (scrubberFocused && isRecordingStopped) {
        if (key === activateKey) {
          e.preventDefault();
          e.stopPropagation();
          isProcessingKey.current = true;
          console.log('IVUS: Activate scrubber control');
          setScrubberActive(true);
          // Pause video when entering scrubber control
          if (isPlaying) {
            setIsPlaying(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
          setTimeout(() => { isProcessingKey.current = false; }, 100);
          return;
        } else if (key === previousKey) {
          e.preventDefault();
          e.stopPropagation();
          isProcessingKey.current = true;
          console.log('IVUS: Unfocus scrubber');
          setScrubberFocused(false);
          setTimeout(() => { isProcessingKey.current = false; }, 100);
          return;
        } else if (key === rightKey) {
          // Move from scrubber to first button
          e.preventDefault();
          e.stopPropagation();
          isProcessingKey.current = true;
          console.log('IVUS: Move from scrubber to first button');
          setScrubberFocused(false);
          setFocusedButtonIndex(0);
          setTimeout(() => { isProcessingKey.current = false; }, 100);
          return;
        } else if (key === leftKey) {
          // Move from scrubber to last button
          e.preventDefault();
          e.stopPropagation();
          isProcessingKey.current = true;
          console.log('IVUS: Move from scrubber to last button');
          setScrubberFocused(false);
          setFocusedButtonIndex(buttons.length - 1);
          setTimeout(() => { isProcessingKey.current = false; }, 100);
          return;
        }
        // Block all other keys when scrubber is focused
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Normal button navigation
      // Navigate left
      if (key === leftKey) {
        e.preventDefault();
        e.stopPropagation();
        isProcessingKey.current = true;
        console.log('IVUS: Navigate left from button', focusedButtonIndex);
        
        // Mirror of right navigation but in reverse
        if (focusedButtonIndex === 0 && isRecordingStopped) {
          // At first button, wrap to scrubber
          console.log('IVUS: Wrapping to scrubber from first button');
          setFocusedButtonIndex(-1); // Clear button focus
          setScrubberFocused(true);
        } else {
          setFocusedButtonIndex((prev) => (prev - 1 + buttons.length) % buttons.length);
        }
        setTimeout(() => { isProcessingKey.current = false; }, 100);
      }
      // Navigate right
      else if (key === rightKey) {
        e.preventDefault();
        e.stopPropagation();
        isProcessingKey.current = true;
        console.log('IVUS: Navigate right from button', focusedButtonIndex);
        
        // If at last button and in review mode, focus scrubber
        if (focusedButtonIndex === buttons.length - 1 && isRecordingStopped) {
          console.log('IVUS: Wrapping to scrubber from last button');
          setFocusedButtonIndex(-1); // Clear button focus
          setScrubberFocused(true);
        } else {
          setFocusedButtonIndex((prev) => (prev + 1) % buttons.length);
        }
        setTimeout(() => { isProcessingKey.current = false; }, 100);
      }
      // Activate button
      else if (key === activateKey || key === 'enter') {
        e.preventDefault();
        e.stopPropagation();
        isProcessingKey.current = true;
        const buttonId = buttons[focusedButtonIndex].id;
        handleButtonClick(buttonId);
        setTimeout(() => { isProcessingKey.current = false; }, 100);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      console.log('IVUS: Removing keyboard listener');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFocused, isSelected, focusedButtonIndex, inputSettings, isRecording, isRecordingStopped, scrubberFocused, scrubberActive, recordingTime, isPlaying, isFrozen, setupStep]);

  // If in setup mode, show setup wizard
  if (setupStep > 0) {
    const stepImages = {
      1: '/src/assets/Assets_Prototype-vids/IvusStep1.png',
      2: '/src/assets/Assets_Prototype-vids/IvusStep2.png',
      3: '/src/assets/Assets_Prototype-vids/IvusStep3.png'
    };

    return (
      <div className="flex flex-col w-full h-full bg-black">
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={stepImages[setupStep as 1 | 2 | 3]} 
            alt={`Setup Step ${setupStep}`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* Main Content Area - Two Panels Side by Side */}
      <div className="flex-1 flex gap-0 overflow-hidden">
        {/* Left Panel - Controller Information */}
        <div className="w-[400px] bg-black flex flex-col p-6">
          {isRecordingStopped ? (
            /* Review Mode - Show IVUS Wire image */
            <div className="flex-1 flex items-start justify-center">
              <img 
                src="/src/assets/Assets_Prototype-vids/IVUSWire.png" 
                alt="IVUS Wire" 
                className="w-full h-auto object-contain"
              />
            </div>
          ) : isRecording ? (
            /* Recording Mode - Show different content */
            <>
              {/* Warning Message */}
              <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 mb-6">
                <div className="flex gap-3">
                  <div className="text-yellow-500 text-xl">⚠</div>
                  <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[13px] leading-[18px]">
                    <p>Avoid changing the zoom, moving the table and C-arm position. Make sure the Guide and IVUS Catheter are visible during the pullback.</p>
                  </div>
                </div>
              </div>

              {/* Recording Instructions */}
              <div className="text-center">
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#41c9fe] text-[16px] mb-8">
                  Begin Continuous Fluoro and Start Pullback now
                </p>
                
                {/* Catheter Illustration */}
                <div className="bg-[#1a1a1a] rounded p-4 mb-4">
                  <div className="flex items-center justify-center h-[120px]">
                    <img 
                      src="/src/assets/Assets_Prototype-vids/Pedal-press-TSM.gif" 
                      alt="Catheter Pullback" 
                      className="h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Normal Mode - Show tutorial */
            <>
              {/* Warning Message */}
              <div className="bg-[#2a2a2a] border-l-4 border-yellow-500 p-4 mb-6">
                <div className="flex gap-3">
                  <div className="text-yellow-500 text-xl">⚠</div>
                  <div className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[13px] leading-[18px]">
                    <p>Avoid changing the zoom, moving the table or C-arm position. Make sure the guide and IVUS Catheter are visible during the pullback.</p>
                  </div>
                </div>
              </div>

              {/* Tutorial Section */}
              <div className="bg-[#2a2a2a] rounded p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#41c9fe] rounded flex items-center justify-center text-[10px] text-black font-bold">i</div>
                <p className="font-['CentraleSans:Medium',_sans-serif] text-white text-[14px]">IVUS Co-registration Tutorial</p>
              </div>
              <button className="text-[#d6d6d6] hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>

            {/* Catheter Illustration */}
            <div className="bg-[#1a1a1a] rounded p-4 mb-4">
              <div className="flex items-center justify-center h-[120px]">
                <img 
                  src="/src/assets/Assets_Prototype-vids/Pedal-press-TSM.gif" 
                  alt="Catheter Pullback" 
                  className="h-full object-contain"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#666] mt-0.5"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#999] text-[13px]">Position the catheter</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#666] mt-0.5"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#999] text-[13px]">Press 'Record'</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#23cc72] border-2 border-[#23cc72] mt-0.5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-white text-[13px]">Start continuous fluoroscopy (optimal 15 fps) and then pull back proximally at 1 mm/sec</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-[#666] mt-0.5"></div>
                <p className="font-['CentraleSans:Book',_sans-serif] text-[#999] text-[13px]">Press 'Stop' or end fluoroscopy to stop recording</p>
              </div>
            </div>
          </div>
            </>
          )}
        </div>

        {/* Right Panel - IVUS Image */}
        <div className="flex-1 bg-black relative">
          {/* CO-REG LIVE / RECORDING / REVIEW Label */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-black/50 px-3 py-1 rounded">
              {isRecordingStopped ? (
                <>
                  <p className="font-['CentraleSans:Medium',_sans-serif] text-white text-[14px]">REVIEW #{Math.floor(recordingTime * 10)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <p className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">Eagle Eye Platinum</p>
                  </div>
                </>
              ) : isRecording ? (
                <>
                  <p className="font-['CentraleSans:Medium',_sans-serif] text-[#ff3333] text-[14px]">RECORDING {formatTime(recordingTime)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#ff3333] animate-pulse"></div>
                    <p className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">Eagle Eye Platinum</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-['CentraleSans:Medium',_sans-serif] text-[#23cc72] text-[14px]">CO-REG LIVE</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#23cc72]"></div>
                    <p className="font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6] text-[12px]">Eagle Eye Platinum</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* IVUS Circular Display */}
          <div className={`absolute inset-0 flex justify-center ${(isRecording || isRecordingStopped) ? 'items-start pt-8' : 'items-center'} transition-all duration-300`}>
            <div className={`relative transition-all duration-300 ${(isRecording || isRecordingStopped) ? 'w-[450px] h-[450px]' : 'w-[600px] h-[600px]'}`}>
              {/* IVUS Video */}
              <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                autoPlay={!isFrozen}
                loop={!isRecording && !isRecordingStopped && !isFrozen}
                muted
                playsInline
                key={(isRecording || isRecordingStopped) ? 'recording' : 'live'}
                onEnded={() => {
                  if (isRecording) {
                    // When recording completes automatically, transition to review mode
                    console.log('IVUS: Recording completed automatically, transitioning to review mode');
                    setIsRecording(false);
                    workflowSync.setIvusRecordingStopped(true);
                    setFocusedButtonIndex(0); // Focus first button (Bookmark) in review mode
                    // Video will restart from beginning in review mode via useEffect
                  }
                }}
              >
                <source 
                  src={(isRecording || isRecordingStopped)
                    ? "/src/assets/Assets_Prototype-vids/IVUSTomoRecording-fullPullback.mp4" 
                    : "/src/assets/Assets_Prototype-vids/IVUSTomoLive-repeats.mp4"
                  } 
                  type="video/mp4" 
                />
              </video>
            </div>
          </div>

          {/* Right Side Tools - Hidden during recording */}
          {!isRecording && (
          <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-4">
            {/* Top Buttons - Different for Review vs Acquisition */}
            {isRecordingStopped ? (
              /* Review Mode Buttons: Diameter, Autoborder, Draw, Dots, Length, Rapid Review */
              <div className="flex flex-col gap-2">
                {/* Diameter */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="4" y1="8" x2="4" y2="16" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="20" y1="8" x2="20" y2="16" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Diameter</span>
                </button>

                {/* Autoborder */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" strokeDasharray="3 2"/>
                    <path d="M12 3 L15 6 M21 12 L18 15 M12 21 L9 18 M3 12 L6 9" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Autoborder</span>
                </button>

                {/* Draw */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Draw</span>
                </button>

                {/* Dots */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="2"/>
                    <circle cx="18" cy="6" r="2"/>
                    <circle cx="6" cy="18" r="2"/>
                    <circle cx="18" cy="18" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Dots</span>
                </button>

                {/* Length */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <line x1="12" y1="4" x2="12" y2="20" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="4" x2="16" y2="4" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="20" x2="16" y2="20" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Length</span>
                </button>

                {/* Rapid Review */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[9px]">Rapid Review</span>
                </button>
              </div>
            ) : (
              /* Acquisition Step Buttons: Brightness, Contrast, Adaptive, Revolve */
              <div className="flex flex-col gap-2">
                {/* Brightness Control */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] relative group">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[11px]">50</span>
                </button>

                {/* Contrast Control */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] relative group">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2 A10 10 0 0 1 12 22 Z" fill="currentColor"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[11px]">10</span>
                </button>

                {/* Adaptive */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] relative group">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#666]">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  <svg className="w-12 h-12 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="8" r="2" fill="currentColor"/>
                    <circle cx="8" cy="16" r="2" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Adaptive</span>
                </button>

                {/* Revolve */}
                <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6]">
                  <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">Revolve</span>
                </button>
              </div>
            )}

            {/* ChromaFlo Button at Bottom */}
            <button className="w-[80px] h-[80px] bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded flex flex-col items-center justify-center text-[#d6d6d6] mb-[70px]">
              <div className="relative w-16 h-16 mb-1">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="1.5" fill="#41c9fe"/>
                  <circle cx="17" cy="12" r="1.5" fill="#41c9fe"/>
                  <circle cx="12" cy="17" r="1.5" fill="#41c9fe"/>
                  <circle cx="7" cy="12" r="1.5" fill="#41c9fe"/>
                </svg>
              </div>
              <span className="font-['CentraleSans:Book',_sans-serif] text-[10px]">ChromaFlo</span>
            </button>
          </div>
          )}
        </div>
      </div>

      {/* Scrubber Bar - Visible during recording and review mode */}
      {(isRecording || isRecordingStopped) && (
        <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 scale-75 z-20 flex items-stretch gap-2">
          {/* Skip Backward Button */}
          <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] px-3 flex items-center justify-center text-[#d6d6d6] hover:text-white transition-colors rounded">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>

          <div 
            ref={scrubberRef}
            className={`relative bg-black transition-all ${
              scrubberFocused 
                ? 'border-4 border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30' 
                : 'border-2 border-gray-700'
            } ${isRecordingStopped ? 'cursor-pointer' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            {/* Full IVUS image */}
            <img 
              src="/src/assets/Assets_Prototype-vids/IVUS_ild-boom.png" 
              alt="IVUS Progress Background" 
              className="block pointer-events-none"
            />
            
            {/* Black overlay - only in recording mode, hides unrecorded portion */}
            {isRecording && (
              <div 
                className="absolute top-0 right-0 h-full bg-black transition-all duration-100 ease-linear"
                style={{ 
                  width: `${100 - (recordingTime / 34) * 100}%`
                }}
              />
            )}
            
            {/* Playhead line - red during recording, blue when active, white in review */}
            <div 
              className={`absolute top-0 bottom-0 w-1 transition-all duration-100 ease-linear z-10 ${
                isRecording ? 'bg-red-600' : scrubberActive ? 'bg-[#41c9fe]' : 'bg-white'
              }`}
              style={{ 
                left: `${(recordingTime / 34) * 100}%`
              }}
            />
            
            {/* Bookmarks */}
            {bookmarks.map((time, index) => (
              <div 
                key={index}
                className="absolute bottom-1 z-50"
                style={{ 
                  left: `${(time / 34) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <svg className="w-4 h-5" fill="#FFA500" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }}>
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
            ))}
          </div>

          {/* Skip Forward Button */}
          <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] px-3 flex items-center justify-center text-[#d6d6d6] hover:text-white transition-colors rounded">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 18h2V6h-2zm-2.5-6L5 6v12z"/>
            </svg>
          </button>
        </div>
      )}

      {/* Bottom Control Bar */}
      <div className="h-[60px] bg-black flex items-center justify-between px-6">
        {isRecordingStopped ? (
          /* Review Mode - Show Bookmark, Pause, Live */
          <>
            <div className="flex-1"></div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleButtonClick('bookmark')}
                className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
                  !hideFocusIndicators && focusedButtonIndex === 0 
                    ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]' 
                    : 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Bookmark
              </button>
              <button 
                onClick={() => handleButtonClick('pause')}
                className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
                  !hideFocusIndicators && focusedButtonIndex === 1 && !scrubberFocused
                    ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]' 
                    : 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
                }`}
              >
                {isPlaying ? (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                    Pause
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                  </>
                )}
              </button>
              <button 
                onClick={() => handleButtonClick('live')}
                className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
                  !hideFocusIndicators && focusedButtonIndex === 2 && !scrubberFocused
                    ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]' 
                    : 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
                Live
              </button>
            </div>
          </>
        ) : isRecording ? (
          /* Recording Mode - Show Bookmark and Stop */
          <>
            <div className="flex-1"></div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleButtonClick('bookmark')}
                className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
                  !hideFocusIndicators && focusedButtonIndex === 0 && !scrubberFocused
                    ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]' 
                    : 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Bookmark
              </button>
              <button 
                onClick={() => handleButtonClick('stop')}
                className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
                  !hideFocusIndicators && focusedButtonIndex === 1 && !scrubberFocused
                    ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#1474a4]' 
                    : 'border-[#3b3b3b] bg-[#1474a4] hover:border-[#41c9fe]'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h12v12H6z"/>
                </svg>
                Stop
              </button>
            </div>
          </>
        ) : (
          /* Normal Mode - Show all buttons */
          <>
        {/* Left - Save Frame Button */}
        <button 
          className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
            !hideFocusIndicators && focusedButtonIndex === 0 && !scrubberFocused
              ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]' 
              : 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          Save Frame
        </button>

        {/* Right - Control Buttons and Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleButtonClick('freeze')}
            className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
              !hideFocusIndicators && focusedButtonIndex === 1 
                ? isFrozen
                  ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#1474a4]'
                  : 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]'
                : isFrozen
                  ? 'border-[#3b3b3b] bg-[#1474a4] hover:border-[#41c9fe]'
                  : 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Freeze
          </button>
          <button 
            onClick={() => handleButtonClick('ringdown')}
            className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
              !hideFocusIndicators && focusedButtonIndex === 2 
                ? ringdownActive
                  ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#3a3a3a]'
                  : 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#1474a4]'
                : ringdownActive
                  ? 'border-[#3b3b3b] bg-[#3a3a3a] hover:border-[#41c9fe]'
                  : 'border-[#3b3b3b] bg-[#1474a4] hover:border-[#41c9fe]'
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            Ringdown
          </button>
          <button 
            onClick={() => handleButtonClick('record')}
            className={`px-6 py-2 rounded border-4 flex items-center gap-2 text-white font-['CentraleSans:Book',_sans-serif] text-[13px] transition-all min-w-[150px] justify-center ${
              !hideFocusIndicators && focusedButtonIndex === 3 
                ? 'border-[#41c9fe] border-opacity-70 shadow-lg shadow-[#41c9fe]/30 bg-[#1474a4]'
                : 'border-[#3b3b3b] bg-[#1474a4] hover:border-[#41c9fe]'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-white"></div>
            Record
          </button>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-[#3a3a3a] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#23cc72]"></div>
            </div>
            <span className="font-['CentraleSans:Book',_sans-serif] text-white text-[13px]">Co-registration</span>
          </label>
        </div>
          </>
        )}
      </div>
    </div>
  );
}

interface InterventionalIVUSProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  hideHeader?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  hideFocusIndicators?: boolean;
}

export function InterventionalIVUS({ 
  componentSize = 'large', 
  hideHeader = false,
  isFocused = false,
  isSelected = false,
  hideFocusIndicators = false
}: InterventionalIVUSProps) {
  // Content scaling based on component size - headers stay normal, only content scales
  const getContentScale = () => {
    switch (componentSize) {
      case 'small':
        return {
          scale: 'scale-[0.3]',
          showPatientBar: false
        };
      case 'medium':
        return {
          scale: 'scale-[0.5]',
          showPatientBar: false
        };
      case 'large':
        return {
          scale: 'scale-[0.7]',
          showPatientBar: true
        };
      case 'xlarge':
        return {
          scale: 'scale-[0.9]',
          showPatientBar: true
        };
      case 'fullscreen':
        return {
          scale: 'scale-100',
          showPatientBar: true
        };
      default:
        return {
          scale: 'scale-[0.7]',
          showPatientBar: true
        };
    }
  };

  const { scale, showPatientBar } = getContentScale();

  return (
    <div className="flex flex-col h-full bg-black">
      {/* ViewportHeader - standard header for all FlexVision components */}
      {!hideHeader && <ViewportHeader title="Interventional Workspace" />}
      
      {/* Content wrapper with NavigationBar */}
      <div className="flex-1 relative overflow-hidden">
        {/* Navigation bar with Philips wordmark */}
        {!hideHeader && <NavigationBar />}
        
        {/* Content area uses full available space, then gets scaled */}
        <div className="absolute inset-0" style={{ top: hideHeader ? 0 : '40px' }}>
          <div className={`transform ${scale} origin-center w-full h-full flex items-center justify-center`}>
            <InterventionalIVUSContent isFocused={isFocused} isSelected={isSelected} hideFocusIndicators={hideFocusIndicators} />
          </div>
        </div>
      </div>
    </div>
  );
}
