import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AngleContextType {
  selectedAngleId: string | null;
  selectedAngleImage: string | null;
  isUniGuideActive: boolean;
  setSelectedAngle: (angleId: string, angleImage: string) => void;
  activateUniGuide: () => void;
  deactivateUniGuide: () => void;
}

const AngleContext = createContext<AngleContextType | undefined>(undefined);

interface AngleProviderProps {
  children: ReactNode;
}

export function AngleProvider({ children }: AngleProviderProps) {
  const [selectedAngleId, setSelectedAngleId] = useState<string | null>(null);
  const [selectedAngleImage, setSelectedAngleImage] = useState<string | null>(null);
  const [isUniGuideActive, setIsUniGuideActive] = useState(false);

  const setSelectedAngle = (angleId: string, angleImage: string) => {
    setSelectedAngleId(angleId);
    setSelectedAngleImage(angleImage);
  };

  const activateUniGuide = () => {
    setIsUniGuideActive(true);
  };

  const deactivateUniGuide = () => {
    setIsUniGuideActive(false);
  };

  return (
    <AngleContext.Provider
      value={{
        selectedAngleId,
        selectedAngleImage,
        isUniGuideActive,
        setSelectedAngle,
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
