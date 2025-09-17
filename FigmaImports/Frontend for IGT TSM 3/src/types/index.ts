// Common types for the IGT TSM application

export interface TabItem {
  id: string;
  label: string;
  hasIcon?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  tabId: string;
}

export interface AutomationStates {
  voice: boolean;
  smartmask: boolean;
  collimation: boolean;
  patientDetection: boolean;
}

export interface SettingsStates {
  frameRate: boolean;
  lock: boolean;
}

export interface NavigationItem {
  id: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

export type TaskStatus = 'completed' | 'current' | 'upcoming' | 'disabled';

export interface TaskItem {
  id: string;
  label: string;
  status: TaskStatus;
  icon?: string;
}

export interface ButtonProps {
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}