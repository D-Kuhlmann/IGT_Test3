// Utility helper functions

/**
 * Format a date for display in the navigation header
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).replace(/ /g, '-');
}

/**
 * Format time for display in the navigation header
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * Format time with AM/PM for status bar displays
 */
export function formatTimeWithAMPM(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Parse URL hash parameters
 */
export function parseHashParams(hash: string): URLSearchParams {
  return new URLSearchParams(hash.substring(1));
}

/**
 * Check if element is an input element (to avoid keyboard shortcuts on form inputs)
 */
export function isInputElement(element: EventTarget | null): boolean {
  return element instanceof HTMLInputElement || 
         element instanceof HTMLTextAreaElement ||
         element instanceof HTMLSelectElement;
}

/**
 * Capitalize first letter of a string and replace hyphens with spaces
 */
export function formatWorkflowName(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
}

/**
 * Generate a random percentage for demo purposes
 */
export function randomPercentage(): number {
  return Math.floor(Math.random() * 100);
}