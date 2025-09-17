import { useEffect } from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { matchesInput } from '../contexts/SettingsContext';

interface UnifiedInputActions {
  smartWorkflows?: () => void;
  toggleAutomation?: () => void;
  quickSettings?: () => void;
  workflowStepLeft?: () => void;
  workflowStepRight?: () => void;
  workflowClose?: () => void;
}

export function useUnifiedInput(actions: UnifiedInputActions) {
  const { inputSettings } = useSettings();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Smart Workflows shortcut
      if (actions.smartWorkflows && matchesInput(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation shortcut
      if (actions.toggleAutomation && matchesInput(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings shortcut
      if (actions.quickSettings && matchesInput(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }

      // Check for Workflow Step Left shortcut
      if (actions.workflowStepLeft && matchesInput(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepLeft();
        return;
      }

      // Check for Workflow Step Right shortcut
      if (actions.workflowStepRight && matchesInput(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepRight();
        return;
      }

      // Check for Workflow Close shortcut
      if (actions.workflowClose && matchesInput(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowClose();
        return;
      }
    };

    const handleMouseEvent = (event: MouseEvent) => {
      // Check for Smart Workflows mouse shortcut
      if (actions.smartWorkflows && matchesInput(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation mouse shortcut
      if (actions.toggleAutomation && matchesInput(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings mouse shortcut
      if (actions.quickSettings && matchesInput(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }

      // Check for Workflow Step Left mouse shortcut
      if (actions.workflowStepLeft && matchesInput(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepLeft();
        return;
      }

      // Check for Workflow Step Right mouse shortcut
      if (actions.workflowStepRight && matchesInput(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepRight();
        return;
      }

      // Check for Workflow Close mouse shortcut
      if (actions.workflowClose && matchesInput(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowClose();
        return;
      }
    };

    const handleWheelEvent = (event: WheelEvent) => {
      // Check for Smart Workflows wheel shortcut
      if (actions.smartWorkflows && matchesInput(event, inputSettings.smartWorkflows)) {
        event.preventDefault();
        event.stopPropagation();
        actions.smartWorkflows();
        return;
      }

      // Check for Toggle Automation wheel shortcut
      if (actions.toggleAutomation && matchesInput(event, inputSettings.toggleAutomation)) {
        event.preventDefault();
        event.stopPropagation();
        actions.toggleAutomation();
        return;
      }

      // Check for Quick Settings wheel shortcut
      if (actions.quickSettings && matchesInput(event, inputSettings.quickSettings)) {
        event.preventDefault();
        event.stopPropagation();
        actions.quickSettings();
        return;
      }

      // Check for Workflow Step Left wheel shortcut
      if (actions.workflowStepLeft && matchesInput(event, inputSettings.workflowStepLeft)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepLeft();
        return;
      }

      // Check for Workflow Step Right wheel shortcut
      if (actions.workflowStepRight && matchesInput(event, inputSettings.workflowStepRight)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowStepRight();
        return;
      }

      // Check for Workflow Close wheel shortcut
      if (actions.workflowClose && matchesInput(event, inputSettings.workflowClose)) {
        event.preventDefault();
        event.stopPropagation();
        actions.workflowClose();
        return;
      }
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleMouseEvent);
    document.addEventListener('contextmenu', handleMouseEvent);
    document.addEventListener('auxclick', handleMouseEvent);
    document.addEventListener('wheel', handleWheelEvent, { passive: false });
    document.addEventListener('dblclick', handleMouseEvent);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleMouseEvent);
      document.removeEventListener('contextmenu', handleMouseEvent);
      document.removeEventListener('auxclick', handleMouseEvent);
      document.removeEventListener('wheel', handleWheelEvent);
      document.removeEventListener('dblclick', handleMouseEvent);
    };
  }, [actions, inputSettings]);
}
