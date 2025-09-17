import React from 'react';

// Core application types
export interface WorkflowStep {
  id: string;
  label: string;
  category: string;
}

export interface AppState {
  currentWorkflowStep: string;
  currentWorkspace: string;
  showLiveWorkspaces: boolean;
}

export interface NavigationState {
  currentDate: string;
  currentTime: string;
}

// Component prop types
export interface IGTLayoutProps {
  currentDate: string;
  currentTime: string;
  currentWorkflowStep: string;
  onWorkflowStepChange: (step: WorkflowStep) => void;
  children: React.ReactNode;
}


// Workflow configuration
export type WorkflowType = 'startup' | 'xray' | 'hemo';

export interface WorkflowConfig {
  id: WorkflowType;
  label: string;
  category: string;
  component: React.ComponentType;
}