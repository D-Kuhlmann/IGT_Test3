import { useState, useEffect, useRef } from 'react';
import ShieldWhite from '../assets/Shield_White_2014.png';

interface LoginScreenProps {
  screenType: 'flexspot' | 'flexvision' | 'tsm' | 'wmu' | 'flexspot1' | 'flexspot2';
  onLogin: (pin: string) => boolean;
}

export function LoginScreen({ screenType, onLogin }: LoginScreenProps) {
  const [pin, setPin] = useState('');
  const [sharedPin, setSharedPin] = useState('');
  const [activeScreen, setActiveScreen] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const broadcastChannelRef = useRef<BroadcastChannel | null>(null);

  // Initialize and manage broadcast channel
  useEffect(() => {
    if (!broadcastChannelRef.current) {
      broadcastChannelRef.current = new BroadcastChannel('igt_pin_channel');
    }

    const channel = broadcastChannelRef.current;
    
    const handlePinMessage = (event: MessageEvent) => {
      const { type, pin: receivedPin, screenType: senderScreen } = event.data;
      
      if (senderScreen !== screenType) {
        if (type === 'PIN_UPDATE') {
          setSharedPin(receivedPin);
          setActiveScreen(senderScreen);
        } else if (type === 'PIN_CLEAR') {
          setSharedPin('');
          setActiveScreen(null);
        } else if (type === 'PIN_START') {
          setActiveScreen(senderScreen);
        } else if (type === 'PIN_RELEASE') {
          setActiveScreen(null);
        }
      }
    };

    channel.addEventListener('message', handlePinMessage);

    return () => {
      channel.removeEventListener('message', handlePinMessage);
    };
  }, [screenType]);

  // Cleanup broadcast channel on unmount
  useEffect(() => {
    return () => {
      if (broadcastChannelRef.current) {
        broadcastChannelRef.current.close();
        broadcastChannelRef.current = null;
      }
    };
  }, []);

  const broadcastPinUpdate = (newPin: string, type: string) => {
    if (broadcastChannelRef.current) {
      try {
        broadcastChannelRef.current.postMessage({
          type,
          pin: newPin,
          screenType
        });
      } catch (error) {
        // Failed to broadcast PIN update
      }
    }
  };

  const handlePinInput = (digit: string) => {
    if (isLoading || (activeScreen && activeScreen !== screenType)) return;
    
    if (pin.length < 6) {
      const newPin = pin + digit;
      setPin(newPin);
      
      // Start input session and broadcast update
      if (pin.length === 0) {
        setActiveScreen(screenType);
        broadcastPinUpdate('', 'PIN_START');
      }
      broadcastPinUpdate(newPin, 'PIN_UPDATE');
    }
  };

  const handleDelete = () => {
    if (isLoading || (activeScreen && activeScreen !== screenType)) return;
    
    if (pin.length > 0) {
      const newPin = pin.slice(0, -1);
      setPin(newPin);
      broadcastPinUpdate(newPin, 'PIN_UPDATE');
      
      // If pin is now empty, release control
      if (newPin === '') {
        setActiveScreen(null);
        broadcastPinUpdate('', 'PIN_RELEASE');
      }
    }
  };

  const handleSubmit = async () => {
    if (pin.length !== 6) return;
    
    setIsLoading(true);
    const success = onLogin(pin);
    
    if (!success) {
      // Clear PIN on failed login and broadcast
      setPin('');
      setSharedPin('');
      setActiveScreen(null);
      broadcastPinUpdate('', 'PIN_CLEAR');
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    if (pin.length === 6) {
      handleSubmit();
    }
  }, [pin]);

  // Flexvision is locked - only show welcome message
  if (screenType === 'flexvision') {
    return (
      <div className="h-screen w-full flex items-center justify-center" 
           style={{ background: 'linear-gradient(135deg, #4A90A4 0%, #2E5266 100%)' }}>
        <div className="text-center">
          {/* Philips Logo with glow effect and animated circle */}
          <div className="relative mb-8">
            {/* Animated circle swirl */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-96 h-96" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="swirl-gradient-flexvision" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100,10 A 90,90 0 1,1 99,10"
                  fill="none"
                  stroke="url(#swirl-gradient-flexvision)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;360 100 100"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M 100,15 A 85,85 0 1,1 99,15"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.4"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;-360 100 100"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M 100,20 A 80,80 0 1,1 99,20"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.3"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;360 100 100"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            <div className="w-72 h-84 mx-auto flex items-center justify-center relative">
              <div className="absolute inset-0 blur-xl"></div>
              <div className="relative w-60 h-72 flex items-center justify-center">
                <img src={ShieldWhite} alt="Philips" className="object-contain" style={{ maxWidth: '185px', maxHeight: '236px', width: 'auto', height: 'auto' }} />
              </div>
            </div>
          </div>
          
          <div className="text-white text-xl font-light">
            Welcome back,<br />
            please log in...
          </div>
        </div>
      </div>
    );
  }

  // Flexspot layout - logo + text in center, PIN in bottom right
  if (screenType === 'flexspot' || screenType === 'flexspot1' || screenType === 'flexspot2') {
    return (
      <div className="h-screen w-full relative" 
           style={{ background: 'linear-gradient(135deg, #4A90A4 0%, #2E5266 100%)' }}>
        
        {/* Central logo and text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Philips Shield with glow and animated circle */}
          <div className="relative mb-8">
            {/* Animated circle swirl */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-96 h-96" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="swirl-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 100,10 A 90,90 0 1,1 99,10"
                  fill="none"
                  stroke="url(#swirl-gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;360 100 100"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M 100,15 A 85,85 0 1,1 99,15"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.4"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;-360 100 100"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M 100,20 A 80,80 0 1,1 99,20"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.3"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="0 100 100;360 100 100"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/30 blur-xl scale-150"></div>
            {/* Shield container */}
            <div className="relative w-72 h-72 rounded-full bg-white/20 flex items-center justify-center">
              <img src={ShieldWhite} alt="Philips" className="object-contain" style={{ maxWidth: '185px', maxHeight: '236px', width: 'auto', height: 'auto' }} />
            </div>
          </div>
          
          {/* Welcome message directly below logo */}
          <div className="text-center text-white">
            <div className="text-lg font-light">Welcome back,</div>
            <div className="text-lg font-light">please log in...</div>
          </div>
        </div>
        
        {/* PIN input in bottom right - using WMU/TSM styling */}
        <div style={{ position: 'absolute', bottom: '32px', right: '32px', zIndex: 1000 }} className="backdrop-blur-md p-8 rounded-lg">
          <div className="text-center">
            <div className="text-white text-lg mb-8 font-light">Enter the pincode</div>
            
            {/* PIN dots */}
            <div className="flex gap-4 mb-12 justify-center">
              {[...Array(6)].map((_, i) => {
                const displayPin = pin || sharedPin;
                const isFilled = i < displayPin.length;
                const isFromOtherScreen = sharedPin && !pin;
                
                return (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 transition-colors duration-200"
                    style={{
                      backgroundColor: isFilled 
                        ? (isFromOtherScreen ? 'rgba(255,255,255,0.7)' : '#ffffff') 
                        : 'transparent',
                      borderColor: isFilled 
                        ? (isFromOtherScreen ? 'rgba(255,255,255,0.8)' : '#ffffff') 
                        : 'rgba(255,255,255,0.7)',
                      boxShadow: isFilled ? '0 2px 4px rgba(255,255,255,0.3)' : 'none'
                    }}
                  />
                );
              })}
            </div>

            {/* Numpad */}
            <div className="grid grid-cols-3 gap-4 max-w-xs">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                <button
                  key={num}
                  onClick={() => handlePinInput(num)}
                  className={`w-16 h-16 text-white text-2xl font-light rounded-full transition-colors ${
                    activeScreen && activeScreen !== screenType 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-white/10'
                  }`}
                  disabled={isLoading || Boolean(activeScreen && activeScreen !== screenType)}
                >
                  {num}
                </button>
              ))}
              <div></div>
              <button
                onClick={() => handlePinInput('0')}
                className={`w-16 h-16 text-white text-2xl font-light rounded-full transition-colors ${
                  activeScreen && activeScreen !== screenType 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-white/10'
                }`}
                disabled={isLoading || Boolean(activeScreen && activeScreen !== screenType)}
              >
                0
              </button>
              <button
                onClick={handleDelete}
                className={`w-16 h-16 text-white text-sm font-light rounded-full transition-colors ${
                  activeScreen && activeScreen !== screenType 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-white/10'
                }`}
                disabled={isLoading || Boolean(activeScreen && activeScreen !== screenType)}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TSM/WMU layout - grid numpad with background shield
  return (
    <div className="flex items-center justify-center relative overflow-hidden" 
         style={{ 
           width: screenType === 'tsm' ? '1500px' : '768px', 
           height: screenType === 'tsm' ? '800px' : '512px', 
           background: 'linear-gradient(135deg, #4A90A4 0%, #2E5266 100%)' 
         }}>
      {/* Background shield with blur - for WMU and TSM */}
      {(screenType === 'wmu' || screenType === 'tsm') && (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img 
            src={ShieldWhite} 
            alt="Philips Background" 
            className="object-contain" 
            style={{ 
              maxWidth: '300px', 
              maxHeight: '383px', 
              width: 'auto', 
              height: 'auto',
              filter: 'blur(8px)'
            }} 
          />
        </div>
      )}
      <div className={`text-center relative z-10 ${(screenType === 'wmu' || screenType === 'tsm') ? 'backdrop-blur-md p-8 rounded-lg' : ''}`}>
        <div className="text-white text-lg mb-8 font-light">Enter the pincode</div>
        
        {/* PIN dots */}
        <div className="flex gap-4 mb-12 justify-center">
          {[...Array(6)].map((_, i) => {
            const displayPin = pin || sharedPin;
            const isFilled = i < displayPin.length;
            const isFromOtherScreen = sharedPin && !pin;
            
            return (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 transition-colors duration-200"
                style={{
                  backgroundColor: isFilled 
                    ? (isFromOtherScreen ? 'rgba(255,255,255,0.7)' : '#ffffff') 
                    : 'transparent',
                  borderColor: isFilled 
                    ? (isFromOtherScreen ? 'rgba(255,255,255,0.8)' : '#ffffff') 
                    : 'rgba(255,255,255,0.7)',
                  boxShadow: isFilled ? '0 2px 4px rgba(255,255,255,0.3)' : 'none'
                }}
              />
            );
          })}
        </div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-4 max-w-xs">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handlePinInput(num)}
              className={`w-16 h-16 text-white text-2xl font-light rounded-full transition-colors ${
                activeScreen && activeScreen !== screenType 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-white/10'
              }`}
              disabled={isLoading || (activeScreen && activeScreen !== screenType)}
            >
              {num}
            </button>
          ))}
          <div></div>
          <button
            onClick={() => handlePinInput('0')}
            className={`w-16 h-16 text-white text-2xl font-light rounded-full transition-colors ${
              activeScreen && activeScreen !== screenType 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/10'
            }`}
            disabled={isLoading || (activeScreen && activeScreen !== screenType)}
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className={`w-16 h-16 text-white text-sm font-light rounded-full transition-colors ${
              activeScreen && activeScreen !== screenType 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-white/10'
            }`}
            disabled={isLoading || (activeScreen && activeScreen !== screenType)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
