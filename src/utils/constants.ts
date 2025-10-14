// Application constants

export const APP_ROUTES = {
  WORKSPACE_XRAY_LIVE: '#workspace=xray-live',
  WORKSPACE_INTERVENTIONAL: '#workspace=interventional-workspace', 
  WORKSPACE_HEMO: '#workspace=hemo',
  LIVE_WORKSPACES: '#live-workspaces=true',
} as const;

export const WORKFLOW_IDS = {
  START: 'start',
  STARTUP: 'startup',
  ULTRASOUND: 'ultrasound',
  CCTA_PLANNING: 'ccta-planning',
  IVUS_ACQUISITION: 'ivus-acquisition',
  XRAY: 'xray',
  HEMO: 'hemo',
  FINALISE: 'finalise',
} as const;

export const KEYBOARD_SHORTCUTS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  F1: 'F1',
} as const;

export const DATE_TIME_CONFIG = {
  DATE_OPTIONS: {
    day: '2-digit' as const,
    month: 'short' as const,
    year: 'numeric' as const,
  },
  TIME_OPTIONS: {
    hour12: false,
    hour: '2-digit' as const,
    minute: '2-digit' as const,
  },
  DATE_LOCALE: 'en-GB',
  TIME_LOCALE: 'en-US',
  UPDATE_INTERVAL: 1000, // 1 second for real-time updates
} as const;