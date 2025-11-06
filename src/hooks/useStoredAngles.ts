import { useState, useCallback } from 'react';

export interface StoredAngle {
  id: string;
  name: string;
  angle: number;
  rotation: number;
}

export function useStoredAngles() {
  const [selectedAngle, setSelectedAngle] = useState<StoredAngle | null>(null);
  const [showConfirmOverlay, setShowConfirmOverlay] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const selectAngle = useCallback((angle: StoredAngle) => {
    setSelectedAngle(angle);
    setShowConfirmOverlay(true);
    setIsMoving(false);
  }, []);

  const confirmPosition = useCallback(() => {
    if (!selectedAngle) return;

    // Hide overlay immediately when confirmed
    setShowConfirmOverlay(false);
    setIsMoving(false);
    setSelectedAngle(null);
    
    // Trigger the actual C-arm movement
    console.log('C-arm confirmed for position:', selectedAngle);
  }, [selectedAngle]);

  const cancelPosition = useCallback(() => {
    setShowConfirmOverlay(false);
    setSelectedAngle(null);
    setIsMoving(false);
  }, []);

  return {
    selectedAngle,
    showConfirmOverlay,
    isMoving,
    selectAngle,
    confirmPosition,
    cancelPosition
  };
}
