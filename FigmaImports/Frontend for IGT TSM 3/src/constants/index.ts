// Constants for the IGT TSM application

export const COLORS = {
  primary: '#2b86b2',
  secondary: '#41c9fe',
  background: '#000000',
  surface: '#2b2b2b',
  border: '#454545',
  text: {
    primary: '#d7d7d7',
    secondary: '#959595',
    muted: '#787878'
  }
} as const;

export const DIMENSIONS = {
  interface: {
    width: 1500,
    height: 800
  },
  sidebar: {
    width: 298
  },
  topNav: {
    height: 52
  },
  bottomNav: {
    height: 72
  }
} as const;

export const Z_INDEX = {
  dropdown: 1000,
  modal: 2000,
  tooltip: 3000
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 200,
  slow: 300
} as const;