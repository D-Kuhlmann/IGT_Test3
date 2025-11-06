import React, { useEffect, useState } from 'react';
import { useSettings } from '../../contexts/SettingsContext';

interface CarmPositionConfirmOverlayProps {
  isVisible: boolean;
  isMoving?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmKey?: string;
  holdDuration?: number;
}

export function CarmPositionConfirmOverlay({
  isVisible,
  isMoving = false,
  onConfirm,
  onCancel,
  confirmKey = 's',
  holdDuration = 3000
}: CarmPositionConfirmOverlayProps) {
  const { inputSettings } = useSettings();
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [holdStartTime, setHoldStartTime] = useState<number | null>(null);
  const [isCanceling, setIsCanceling] = useState(false);
  const [cancelStartTime, setCancelStartTime] = useState<number | null>(null);
  
  // Get keys and durations from settings
  const activateKey = typeof inputSettings.apcMovementActivate === 'string' ? inputSettings.apcMovementActivate : 's';
  const cancelKey = typeof inputSettings.apcMovementCancel === 'string' ? inputSettings.apcMovementCancel : 'w';
  const activateDuration = inputSettings.apcActivateHoldDuration;
  const cancelDuration = inputSettings.apcCancelHoldDuration;

  useEffect(() => {
    if (!isVisible || isMoving) {
      setIsHolding(false);
      setHoldProgress(0);
      setHoldStartTime(null);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if any modifier keys are pressed or if it's a repeat event
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey || e.repeat) {
        return;
      }
      
      const key = e.key.toLowerCase();
      
      // Only respond to activate key from settings
      if (key === activateKey.toLowerCase() && !isHolding) {
        e.preventDefault();
        e.stopPropagation();
        setIsHolding(true);
        setHoldStartTime(Date.now());
      }
      // Start cancel timer with cancel key from settings
      if (key === cancelKey.toLowerCase() && !isCanceling) {
        e.preventDefault();
        e.stopPropagation();
        setIsCanceling(true);
        setCancelStartTime(Date.now());
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Ignore if any modifier keys are pressed
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
        return;
      }
      
      const key = e.key.toLowerCase();
      
      if (key === activateKey.toLowerCase()) {
        e.preventDefault();
        e.stopPropagation();
        setIsHolding(false);
        setHoldStartTime(null);
        // Don't reset progress - keep it where it was
      }
      // Reset cancel if cancel key is released
      if (key === cancelKey.toLowerCase()) {
        e.preventDefault();
        e.stopPropagation();
        setIsCanceling(false);
        setCancelStartTime(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isVisible, isMoving, activateKey, cancelKey, isHolding, isCanceling, holdProgress, onConfirm]);

  useEffect(() => {
    if (!isHolding || !holdStartTime) return;

    const startProgress = holdProgress; // Remember where we started

    const interval = setInterval(() => {
      const elapsed = Date.now() - holdStartTime;
      const additionalProgress = (elapsed / activateDuration) * 100;
      const progress = Math.min(startProgress + additionalProgress, 100);
      setHoldProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setIsHolding(false);
        setHoldProgress(0);
        setHoldStartTime(null);
        onConfirm();
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isHolding, holdStartTime, activateDuration, onConfirm]);

  // Monitor cancel timer
  useEffect(() => {
    if (!isCanceling || !cancelStartTime) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - cancelStartTime;
      
      if (elapsed >= cancelDuration) {
        clearInterval(interval);
        setIsCanceling(false);
        setCancelStartTime(null);
        onCancel();
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isCanceling, cancelStartTime, cancelDuration, onCancel]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div 
        className="relative rounded-2xl w-fit h-fit max-w-full max-h-full overflow-hidden pointer-events-auto p-4 pl-12"
        style={{
          backgroundImage: "linear-gradient(45deg, #27316F 20%, #2E9BC8 140%)",
          transform: "scale(0.667)"
        }}
      >
        <div className="flex items-center gap-6">
          {/* SmartUI Click Icon - Outside dark box */}
          <div className="flex-shrink-0 pl-4">
            <svg className="w-14 h-32" viewBox="0 0 54 122" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1591_13933)">
                <path d="M6.65809 49.324C7.06046 49.324 7.4649 49.187 7.79633 48.9069C8.54161 48.2767 8.6361 47.1608 8.00679 46.4147C6.1736 44.2402 5.16429 41.473 5.16429 38.6226C5.16429 31.9585 10.5782 26.5372 17.2325 26.5372C23.8868 26.5372 29.3007 31.9585 29.3007 38.6226C29.3007 40.482 28.8909 42.2641 28.083 43.9207C27.6547 44.7985 28.0179 45.8573 28.8945 46.2859C29.7707 46.716 30.8283 46.3507 31.2563 45.4732C32.3024 43.3291 32.8325 41.0243 32.8325 38.6226C32.8325 30.0081 25.8345 23 17.2322 23C8.62992 23 1.63184 30.0081 1.63184 38.6226C1.63184 42.3071 2.93726 45.8847 5.30734 48.6962C5.65702 49.1106 6.15594 49.324 6.65809 49.324Z" fill="#23C1FF"/>
                <path d="M50.47 64.7874C49.3321 58.049 44.4871 57.1332 42.4002 57.0577C41.8095 57.0362 41.2711 56.7249 40.9544 56.2253C39.3746 53.7328 37.2324 53.0769 35.4169 53.0769C34.5856 53.0766 33.8233 53.214 33.2137 53.3755C33.0347 53.4227 32.8525 53.446 32.6724 53.446C32.0313 53.446 31.4134 53.153 31.0276 52.6174C29.4734 50.4612 27.4451 49.8781 25.7064 49.8781C25.2413 49.8781 24.7968 49.92 24.388 49.9842C24.2788 50.0016 24.1705 50.0099 24.0642 50.0099C22.9516 50.0099 22.0129 49.1049 22.0114 47.9503L21.9967 35.4856C21.9926 32.2647 19.5804 30.6553 17.1683 30.6553C14.7514 30.6553 12.3345 32.2703 12.3386 35.4974C12.3451 40.9084 12.3648 57.1606 12.3704 62.0575C12.3716 62.8852 11.8774 63.6331 11.115 63.9523C1.53671 67.9617 13.3647 85.9474 15.4831 89.0298C15.6898 89.3304 15.8122 89.6791 15.8396 90.0432L16.3573 97.0176C16.438 98.0935 17.3334 98.9996 18.411 98.9996C18.4119 98.9996 18.4128 98.9996 18.4136 98.9996L41.556 98.8967C42.5889 98.8953 43.4608 98.0914 43.5953 97.0659L44.5378 89.858C44.5778 89.5541 44.6879 89.2529 44.8539 88.9953C51.0387 79.4219 51.5247 71.0331 50.47 64.7874Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_1591_13933">
                  <rect width="54" height="76" fill="white" transform="translate(0 23)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Dark Content Box */}
          <div className="bg-[#1a2332] rounded-xl p-8 flex-1 flex items-center gap-8">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              {isMoving ? (
                <>
                  <h2 className="font-['CentraleSans:Medium',_sans-serif] text-white text-[26px] leading-none mb-3">
                    Moving C-arm to position
                  </h2>
                  <p className="font-['CentraleSans:Book',_sans-serif] text-white text-[26px] leading-none">
                    Please wait while the C-arm moves into the new position...
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-['CentraleSans:Bold',_sans-serif] font-bold text-white text-[26px] leading-none mb-6">
                    Confirm position of C-arm
                  </h2>
                  <p className="font-['CentraleSans:Book',_sans-serif] text-white text-[26px] leading-none">
                    Pull down and hold <span className="font-['CentraleSans:Medium',_sans-serif]">Smart-Knob</span> to move the C-arm into new position
                  </p>
                </>
              )}
            </div>

            {/* C-arm Icon with fill progress */}
            <div className="relative w-12 flex-shrink-0" style={{ height: '88px' }}>
              {/* Grey C-arm (base) */}
              <img 
                src="/src/assets/CarmGrey.png"
                alt="C-arm"
                className="absolute inset-0 w-full h-full object-contain"
              />
              {/* Blue C-arm (fill from bottom) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(${100 - holdProgress}% 0 0 0)`
                }}
              >
                <img 
                  src="/src/assets/CarmBlue.png"
                  alt="C-arm filled"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
