import React, { useRef, useEffect } from 'react';
import { ComponentHeader } from '../../shared/ViewportHeaders';
import { useWorkflowSync } from '../../../contexts/WorkflowSyncContext';

interface PlaceholderProps {
  componentSize?: 'small' | 'medium' | 'large' | 'xlarge' | 'fullscreen';
  title?: string;
  hideHeader?: boolean;
  contentImage?: string;
  contentVideo?: string;
  whiteBg?: boolean;
  showPatientBar?: boolean;
}

export function Placeholder({ componentSize = 'large', title = 'Placeholder', hideHeader = false, contentImage, contentVideo, whiteBg = false, showPatientBar = false }: PlaceholderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const workflowSync = useWorkflowSync();

  // Sync with IVUS recording state when this is the XRay Live placeholder in IVUS step
  useEffect(() => {
    if (!contentVideo || !videoRef.current) return;
    
    const isIvusStep = workflowSync.workflowStepId === 'ivus-acquisition';
    const isRecording = workflowSync.ivusIsRecording;
    
    // Only sync during active recording
    if (!isIvusStep || !isRecording) {
      // Pause and hide video when not recording
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
      return;
    }

    // Continuous sync during recording only
    const syncVideo = () => {
      if (!videoRef.current) return;
      
      const targetTime = workflowSync.ivusVideoTime || 0;
      const currentTime = videoRef.current.currentTime;
      
      // Only update if difference is significant (> 0.15s) to avoid jitter
      if (Math.abs(currentTime - targetTime) > 0.15) {
        videoRef.current.currentTime = targetTime;
      }
      
      // Always playing during recording
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => {
          console.log('Video play failed:', err);
        });
      }
    };

    // Initial sync
    syncVideo();

    // Continuous sync during recording
    const interval = setInterval(syncVideo, 100); // Sync 10 times per second
    return () => clearInterval(interval);
  }, [contentVideo, workflowSync.workflowStepId, workflowSync.ivusIsRecording, workflowSync.ivusVideoTime]);

  // Determine if video should be rendered - render during active recording
  const isIvusStep = workflowSync.workflowStepId === 'ivus-acquisition';
  const isRecording = isIvusStep && workflowSync.ivusIsRecording;
  const renderVideo = contentVideo && isRecording;
  // Video is visible only when CINE button is pressed
  const videoVisible = isRecording && workflowSync.ivusCinePressed;

  return (
    <div className="flex flex-col h-full">
      {/* Headers stay normal size */}
      {!hideHeader && <ComponentHeader title={title} showPatientBar={showPatientBar} />}
      
      {/* Content Area - Blank or with image/video, black or white background */}
      <div className={`flex-1 relative overflow-hidden ${whiteBg ? 'bg-[#ffffff]' : 'bg-[#000000]'}`}>
        {renderVideo ? (
          <video 
            ref={videoRef}
            src={contentVideo} 
            className="w-full h-full object-contain"
            style={{ opacity: videoVisible ? 1 : 0 }}
            muted
            playsInline
          />
        ) : contentImage ? (
          <img 
            src={contentImage} 
            alt={title} 
            className="w-full h-full object-contain"
          />
        ) : (
          /* Intentionally blank content area */
          null
        )}
      </div>
    </div>
  );
}
