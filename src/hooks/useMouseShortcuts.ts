import { useEffect } from 'react';
import { useSettings, matchesMouseInput } from '../contexts/SettingsContext';

interface MouseActions {
  smartWorkflows?: () => void;
  toggleAutomation?: () => void;
  quickSettings?: () => void;
  workflowStepLeft?: () => void;
  workflowStepRight?: () => void;
  workflowClose?: () => void;
}

export function useMouseShortcuts(actions: MouseActions) {
  const { inputSettings } = useSettings();

  useEffect(() => {
    
    const handleMouseEvent = (event: MouseEvent) => {
      
      // Check for Smart Workflows mouse shortcut
      if (actions.smartWorkflows && matchesMouseInput(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation mouse shortcut
      if (actions.toggleAutomation && matchesMouseInput(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings mouse shortcut
      if (actions.quickSettings && matchesMouseInput(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }

      // Check for Workflow Step Left mouse shortcut
      if (actions.workflowStepLeft && matchesMouseInput(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepLeft();
        return;
      }

      // Check for Workflow Step Right mouse shortcut
      if (actions.workflowStepRight && matchesMouseInput(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepRight();
        return;
      }

      // Check for Workflow Close mouse shortcut
      if (actions.workflowClose && matchesMouseInput(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowClose();
        return;
      }
    };

    const handleWheelEvent = (event: WheelEvent) => {
      
      // Check for Smart Workflows wheel shortcut
      if (actions.smartWorkflows && matchesMouseInput(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation wheel shortcut
      if (actions.toggleAutomation && matchesMouseInput(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings wheel shortcut
      if (actions.quickSettings && matchesMouseInput(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }

      // Check for Workflow Step Left wheel shortcut
      if (actions.workflowStepLeft && matchesMouseInput(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepLeft();
        return;
      }

      // Check for Workflow Step Right wheel shortcut
      if (actions.workflowStepRight && matchesMouseInput(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepRight();
        return;
      }

      // Check for Workflow Close wheel shortcut
      if (actions.workflowClose && matchesMouseInput(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowClose();
        return;
      }
    };

    const handleDoubleClick = (event: MouseEvent) => {
      // Check for Smart Workflows double-click shortcut
      if (actions.smartWorkflows && matchesMouseInput(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation double-click shortcut
      if (actions.toggleAutomation && matchesMouseInput(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings double-click shortcut
      if (actions.quickSettings && matchesMouseInput(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }

      // Check for Workflow Step Left double-click shortcut
      if (actions.workflowStepLeft && matchesMouseInput(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepLeft();
        return;
      }

      // Check for Workflow Step Right double-click shortcut
      if (actions.workflowStepRight && matchesMouseInput(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepRight();
        return;
      }

      // Check for Workflow Close double-click shortcut
      if (actions.workflowClose && matchesMouseInput(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowClose();
        return;
      }
    };

    // Add event listeners
    document.addEventListener('click', handleMouseEvent);
    document.addEventListener('contextmenu', handleMouseEvent); // Right-click
    document.addEventListener('auxclick', handleMouseEvent); // Middle-click and other buttons
    document.addEventListener('wheel', handleWheelEvent, { passive: false });
    document.addEventListener('dblclick', handleDoubleClick);

    return () => {
      document.removeEventListener('click', handleMouseEvent);
      document.removeEventListener('contextmenu', handleMouseEvent);
      document.removeEventListener('auxclick', handleMouseEvent);
      document.removeEventListener('wheel', handleWheelEvent);
      document.removeEventListener('dblclick', handleDoubleClick);
    };
  }, [actions, inputSettings]);
}
