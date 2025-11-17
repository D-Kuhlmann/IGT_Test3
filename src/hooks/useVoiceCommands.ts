import { useCallback, useRef } from 'react';

export interface VoiceCommand {
  phrases: string[]; // Trigger phrases for this command
  action: () => void; // What to do when command is recognized
  description: string; // Human-readable description
}

interface UseVoiceCommandsProps {
  // Workflow commands
  onNextWorkflow?: () => void;
  onPreviousWorkflow?: () => void;
  onRestartWizard?: () => void;
  onGoToStep?: (stepId: string) => void; // NEW: Go to specific workflow step
  
  // UI commands
  onShowWorkflows?: () => void;
  onHideWorkflows?: () => void;
  onShowPresets?: () => void;
  onHidePresets?: () => void;
  onToggleFocusMode?: () => void;
  
  // Settings commands
  onOpenSettings?: () => void;
  onCloseSettings?: () => void;
  
  // Preset commands
  onPreset1?: () => void;
  onPreset2?: () => void;
  
  // Feedback callback - now takes the action to execute after delay
  onFeedback?: (message: string, action: () => void) => void;
}

export function useVoiceCommands({
  onNextWorkflow,
  onPreviousWorkflow,
  onRestartWizard,
  onGoToStep,
  onShowWorkflows,
  onHideWorkflows,
  onShowPresets,
  onHidePresets,
  onToggleFocusMode,
  onOpenSettings,
  onCloseSettings,
  onPreset1,
  onPreset2,
  onFeedback,
}: UseVoiceCommandsProps) {
  
  // Track the last executed command and timestamp to prevent duplicate execution
  const lastCommandRef = useRef<{ command: string; timestamp: number } | null>(null);
  const COMMAND_COOLDOWN_MS = 2000; // 2 seconds cooldown between same command
  
  // Process voice input and execute matching commands
  const processVoiceCommand = useCallback((transcript: string): boolean => {
    const text = transcript.toLowerCase().trim();

    // Helper function to check if command should be executed
    const shouldExecuteCommand = (commandName: string): boolean => {
      const now = Date.now();
      if (lastCommandRef.current) {
        const { command, timestamp } = lastCommandRef.current;
        const timeSinceLastCommand = now - timestamp;
        
        // If it's the same command within cooldown period, skip it
        if (command === commandName && timeSinceLastCommand < COMMAND_COOLDOWN_MS) {
          return false;
        }
      }
      
      // Update last command
      lastCommandRef.current = { command: commandName, timestamp: now };
      return true;
    };

    // Workflow navigation commands
    if (onNextWorkflow && (
      text.includes('next workflow') ||
      text.includes('next step') ||
      text.includes('go to next') ||
      text.includes('continue workflow')
    )) {
      if (shouldExecuteCommand('next-workflow')) {
        onFeedback?.('Next step initiated', () => onNextWorkflow());
        return true;
      }
      return true;
    }

    if (onPreviousWorkflow && (
      text.includes('previous workflow') ||
      text.includes('previous step') ||
      text.includes('go back') ||
      text.includes('back to previous')
    )) {
      if (shouldExecuteCommand('previous-workflow')) {
        onFeedback?.('Previous step initiated', () => onPreviousWorkflow());
        return true;
      }
      return true;
    }

    if (onRestartWizard && (
      text.includes('restart wizard') ||
      text.includes('reset wizard') ||
      text.includes('restart navigation') ||
      text.includes('start over')
    )) {
      if (shouldExecuteCommand('restart-wizard')) {
        onFeedback?.('Wizard restarted', () => onRestartWizard());
        return true;
      }
      return true;
    }

    // Go to specific workflow step commands
    if (onGoToStep) {
      // Preset 1 steps
      if (text.includes('go to start') || text.includes('goto start')) {
        if (shouldExecuteCommand('go-to-start')) {
          onFeedback?.('Going to Start', () => onGoToStep('start'));
          return true;
        }
        return true;
      }
      
      if (text.includes('go to ultrasound') || text.includes('goto ultrasound')) {
        if (shouldExecuteCommand('go-to-ultrasound')) {
          onFeedback?.('Going to Ultrasound', () => onGoToStep('ultrasound'));
          return true;
        }
        return true;
      }
      
      if (text.includes('go to ccta') || text.includes('goto ccta') || 
          text.includes('go to planning') || text.includes('goto planning') ||
          text.includes('go to ccta planning') || text.includes('goto ccta planning')) {
        if (shouldExecuteCommand('go-to-ccta-planning')) {
          onFeedback?.('Going to CCTA Planning', () => onGoToStep('ccta-planning'));
          return true;
        }
        return true;
      }
      
      if (text.includes('go to ivus') || text.includes('goto ivus') ||
          text.includes('go to acquisition') || text.includes('goto acquisition')) {
        if (shouldExecuteCommand('go-to-ivus')) {
          onFeedback?.('Going to IVUS', () => onGoToStep('ivus-acquisition'));
          return true;
        }
        return true;
      }
      
      if (text.includes('go to finalise') || text.includes('goto finalise') ||
          text.includes('go to finalize') || text.includes('goto finalize')) {
        if (shouldExecuteCommand('go-to-finalise')) {
          onFeedback?.('Going to Finalise', () => onGoToStep('finalise'));
          return true;
        }
        return true;
      }
      
      // Preset 2 steps
      if (text.includes('go to access') || text.includes('goto access')) {
        if (shouldExecuteCommand('go-to-access')) {
          onFeedback?.('Going to Access', () => onGoToStep('access'));
          return true;
        }
        return true;
      }
      
      if (text.includes('go to 3d scan') || text.includes('goto 3d scan') ||
          text.includes('go to three d scan') || text.includes('goto three d scan')) {
        if (shouldExecuteCommand('go-to-3d-scan')) {
          onFeedback?.('Going to 3D Scan', () => onGoToStep('3d-scan'));
          return true;
        }
        return true;
      }
      
      if (text.includes('go to treatment') || text.includes('goto treatment')) {
        if (shouldExecuteCommand('go-to-treatment')) {
          onFeedback?.('Going to Treatment', () => onGoToStep('treatment'));
          return true;
        }
        return true;
      }
    }

    // Workflow overlay commands
    if (onShowWorkflows && (
      text.includes('show workflows') ||
      text.includes('open workflows') ||
      text.includes('display workflows')
    )) {
      if (shouldExecuteCommand('show-workflows')) {
        onFeedback?.('Workflows opened', () => onShowWorkflows());
        return true;
      }
      return true;
    }

    if (onHideWorkflows && (
      text.includes('hide workflows') ||
      text.includes('close workflows')
    )) {
      if (shouldExecuteCommand('hide-workflows')) {
        onFeedback?.('Workflows closed', () => onHideWorkflows());
        return true;
      }
      return true;
    }

    // Presets overlay commands
    if (onShowPresets && (
      text.includes('show presets') ||
      text.includes('open presets') ||
      text.includes('display presets')
    )) {
      if (shouldExecuteCommand('show-presets')) {
        onFeedback?.('Presets opened', () => onShowPresets());
        return true;
      }
      return true;
    }

    if (onHidePresets && (
      text.includes('hide presets') ||
      text.includes('close presets')
    )) {
      if (shouldExecuteCommand('hide-presets')) {
        onFeedback?.('Presets closed', () => onHidePresets());
        return true;
      }
      return true;
    }

    // Focus mode commands
    if (onToggleFocusMode && (
      text.includes('focus mode') ||
      text.includes('toggle focus') ||
      text.includes('enable focus') ||
      text.includes('disable focus')
    )) {
      if (shouldExecuteCommand('toggle-focus-mode')) {
        onFeedback?.('Focus mode toggled', () => onToggleFocusMode());
        return true;
      }
      return true;
    }

    // Settings commands
    if (onOpenSettings && (
      text.includes('open settings') ||
      text.includes('show settings') ||
      text.includes('settings menu')
    )) {
      if (shouldExecuteCommand('open-settings')) {
        onFeedback?.('Settings opened', () => onOpenSettings());
        return true;
      }
      return true;
    }

    if (onCloseSettings && (
      text.includes('close settings') ||
      text.includes('hide settings') ||
      text.includes('exit settings')
    )) {
      if (shouldExecuteCommand('close-settings')) {
        onFeedback?.('Settings closed', () => onCloseSettings());
        return true;
      }
      return true;
    }

    // Preset selection commands
    if (onPreset1 && (
      text.includes('preset 1') ||
      text.includes('preset one') ||
      text.includes('first preset')
    )) {
      if (shouldExecuteCommand('preset-1')) {
        onFeedback?.('Preset 1 activated', () => onPreset1());
        return true;
      }
      return true;
    }

    if (onPreset2 && (
      text.includes('preset 2') ||
      text.includes('preset two') ||
      text.includes('second preset')
    )) {
      if (shouldExecuteCommand('preset-2')) {
        onFeedback?.('Preset 2 activated', () => onPreset2());
        return true;
      }
      return true;
    }

    return false;
  }, [
    onNextWorkflow,
    onPreviousWorkflow,
    onRestartWizard,
    onGoToStep,
    onShowWorkflows,
    onHideWorkflows,
    onShowPresets,
    onHidePresets,
    onToggleFocusMode,
    onOpenSettings,
    onCloseSettings,
    onPreset1,
    onPreset2,
    onFeedback,
  ]);

  // Get list of all available commands (for help/display)
  const getAvailableCommands = useCallback((): VoiceCommand[] => {
    const commands: VoiceCommand[] = [];

    if (onNextWorkflow) {
      commands.push({
        phrases: ['next workflow', 'next step', 'go to next', 'continue workflow'],
        action: onNextWorkflow,
        description: 'Go to the next workflow step'
      });
    }

    if (onPreviousWorkflow) {
      commands.push({
        phrases: ['previous workflow', 'previous step', 'go back', 'back to previous'],
        action: onPreviousWorkflow,
        description: 'Go to the previous workflow step'
      });
    }

    if (onRestartWizard) {
      commands.push({
        phrases: ['restart wizard', 'reset wizard', 'restart navigation', 'start over'],
        action: onRestartWizard,
        description: 'Restart the Smart Navigator wizard'
      });
    }

    if (onGoToStep) {
      commands.push({
        phrases: ['go to start', 'go to ultrasound', 'go to ccta planning', 'go to ivus', 'go to finalise', 'go to access', 'go to 3d scan', 'go to treatment'],
        action: () => {}, // Placeholder - actual step determined by voice input
        description: 'Go to a specific workflow step'
      });
    }

    if (onShowWorkflows) {
      commands.push({
        phrases: ['show workflows', 'open workflows'],
        action: onShowWorkflows,
        description: 'Show the workflows overlay'
      });
    }

    if (onHideWorkflows) {
      commands.push({
        phrases: ['hide workflows', 'close workflows'],
        action: onHideWorkflows,
        description: 'Hide the workflows overlay'
      });
    }

    if (onShowPresets) {
      commands.push({
        phrases: ['show presets', 'open presets'],
        action: onShowPresets,
        description: 'Show the presets overlay'
      });
    }

    if (onHidePresets) {
      commands.push({
        phrases: ['hide presets', 'close presets'],
        action: onHidePresets,
        description: 'Hide the presets overlay'
      });
    }

    if (onToggleFocusMode) {
      commands.push({
        phrases: ['focus mode', 'toggle focus'],
        action: onToggleFocusMode,
        description: 'Toggle focus mode on/off'
      });
    }

    if (onOpenSettings) {
      commands.push({
        phrases: ['open settings', 'show settings'],
        action: onOpenSettings,
        description: 'Open settings menu'
      });
    }

    if (onCloseSettings) {
      commands.push({
        phrases: ['close settings', 'hide settings'],
        action: onCloseSettings,
        description: 'Close settings menu'
      });
    }

    if (onPreset1) {
      commands.push({
        phrases: ['preset 1', 'preset one', 'first preset'],
        action: onPreset1,
        description: 'Switch to preset 1'
      });
    }

    if (onPreset2) {
      commands.push({
        phrases: ['preset 2', 'preset two', 'second preset'],
        action: onPreset2,
        description: 'Switch to preset 2'
      });
    }

    return commands;
  }, [
    onNextWorkflow,
    onPreviousWorkflow,
    onRestartWizard,
    onShowWorkflows,
    onHideWorkflows,
    onShowPresets,
    onHidePresets,
    onToggleFocusMode,
    onOpenSettings,
    onCloseSettings,
    onPreset1,
    onPreset2,
  ]);

  return {
    processVoiceCommand,
    getAvailableCommands,
  };
}
