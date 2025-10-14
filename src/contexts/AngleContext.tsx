import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SelectedAngle {
  id: string;
  name: string;
  image: string;
  rotation: string;
  angle: string;
}

interface AngleContextType {
  selectedAngle: SelectedAngle | null;
  setSelectedAngle: (angle: SelectedAngle) => void;
  clearSelectedAngle: () => void;
  isUniGuideActive: boolean;
  activateUniGuide: () => void;
  deactivateUniGuide: () => void;
}

const AngleContext = createContext<AngleContextType | undefined>(undefined);

interface AngleProviderProps {
  children: ReactNode;
}

export function AngleProvider({ children }: AngleProviderProps) {
  const [selectedAngle, setSelectedAngleState] = useState<SelectedAngle | null>(null);
  const [isUniGuideActive, setIsUniGuideActive] = useState(false);

  // Listen for cross-tab angle changes and auth events
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'selectedAngle' && e.newValue) {
        try {
          const angleData = JSON.parse(e.newValue);
          console.log('📡 AngleContext - Received cross-tab angle update:', angleData);
          setSelectedAngleState(angleData);
        } catch (error) {
          console.error('❌ AngleContext - Error parsing cross-tab angle data:', error);
        }
      }
      
      if (e.key === 'isUniGuideActive' && e.newValue === 'true') {
        console.log('📡 AngleContext - Received cross-tab UniGuide activation');
        setIsUniGuideActive(true);
      }
    };

    // Listen for auth broadcast channel messages
    const authChannel = new BroadcastChannel('igt_auth_channel');
    const handleAuthMessage = (event: MessageEvent) => {
      const { type } = event.data;
      
      if (type === 'LOGOUT') {
        console.log('🔄 AngleContext - Logout detected, clearing angle states');
        setSelectedAngleState(null);
        setIsUniGuideActive(false);
        // Clear localStorage angle data on logout
        localStorage.removeItem('selectedAngle');
        localStorage.removeItem('isUniGuideActive');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    authChannel.addEventListener('message', handleAuthMessage);
    
    // Load initial state from localStorage
    const storedAngle = localStorage.getItem('selectedAngle');
    if (storedAngle) {
      try {
        const angleData = JSON.parse(storedAngle);
        console.log('🔄 AngleContext - Loading stored angle on mount:', angleData);
        setSelectedAngleState(angleData);
      } catch (error) {
        console.error('❌ AngleContext - Error parsing stored angle data:', error);
      }
    }

    // Load initial UniGuide state from localStorage
    const storedUniGuideActive = localStorage.getItem('isUniGuideActive');
    if (storedUniGuideActive === 'true') {
      console.log('🔄 AngleContext - Loading stored UniGuide active state on mount');
      setIsUniGuideActive(true);
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      authChannel.removeEventListener('message', handleAuthMessage);
      authChannel.close();
    };
  }, []);

  const setSelectedAngle = (angle: SelectedAngle) => {
    console.log('🔄 AngleContext - setSelectedAngle called:', {
      id: angle.id,
      name: angle.name,
      image: angle.image,
      rotation: angle.rotation,
      angle: angle.angle
    });
    
    // Update local state
    setSelectedAngleState(angle);
    
    // Store in localStorage for cross-tab communication
    localStorage.setItem('selectedAngle', JSON.stringify(angle));
    console.log('💾 AngleContext - Angle saved to localStorage for cross-tab sync');
    console.log('✅ AngleContext - selectedAngle state updated successfully');
  };

  const clearSelectedAngle = () => {
    setSelectedAngleState(null);
    localStorage.removeItem('selectedAngle');
    console.log('🗑️ AngleContext - Cleared selected angle from localStorage');
  };

  const activateUniGuide = () => {
    setIsUniGuideActive(true);
    // Store UniGuide activation state for cross-tab communication
    localStorage.setItem('isUniGuideActive', 'true');
    console.log('🚀 AngleContext - UniGuide activated and saved to localStorage');
  };

  const deactivateUniGuide = () => {
    setIsUniGuideActive(false);
  };

  return (
    <AngleContext.Provider
      value={{
        selectedAngle,
        setSelectedAngle,
        clearSelectedAngle,
        isUniGuideActive,
        activateUniGuide,
        deactivateUniGuide,
      }}
    >
      {children}
    </AngleContext.Provider>
  );
}

export function useAngle() {
  const context = useContext(AngleContext);
  if (context === undefined) {
    throw new Error('useAngle must be used within an AngleProvider');
  }
  return context;
}
