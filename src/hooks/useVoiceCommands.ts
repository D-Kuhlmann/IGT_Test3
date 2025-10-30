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
  const processVoiceCommand = useCallback((transcript: string) => {
    const text = transcript.toLowerCase().trim();
    console.log('🔍 Processing voice command:', text);

    // Helper function to check if command should be executed
    const shouldExecuteCommand = (commandName: string): boolean => {
      const now = Date.now();
      if (lastCommandRef.current) {
        const { command, timestamp } = lastCommandRef.current;
        const timeSinceLastCommand = now - timestamp;
        
        // If it's the same command within cooldown period, skip it
        if (command === commandName && timeSinceLastCommand < COMMAND_COOLDOWN_MS) {
          console.log(`⏭️ Skipping duplicate command "${commandName}" (cooldown: ${timeSinceLastCommand}ms / ${COMMAND_COOLDOWN_MS}ms)`);
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
        console.log('✅ Command: Next Workflow');
        onFeedback?.('Next step initiated', () => onNextWorkflow());
      }
      return;
    }

    if (onPreviousWorkflow && (
      text.includes('previous workflow') ||
      text.includes('previous step') ||
      text.includes('go back') ||
      text.includes('back to previous')
    )) {
      if (shouldExecuteCommand('previous-workflow')) {
        console.log('✅ Command: Previous Workflow');
        onFeedback?.('Previous step initiated', () => onPreviousWorkflow());
      }
      return;
    }

    if (onRestartWizard && (
      text.includes('restart wizard') ||
      text.includes('reset wizard') ||
      text.includes('restart navigation') ||
      text.includes('start over')
    )) {
      if (shouldExecuteCommand('restart-wizard')) {
        console.log('✅ Command: Restart Wizard');
        onFeedback?.('Wizard restarted', () => onRestartWizard());
      }
      return;
    }

    // Workflow overlay commands
    if (onShowWorkflows && (
      text.includes('show workflows') ||
      text.includes('open workflows') ||
      text.includes('display workflows')
    )) {
      if (shouldExecuteCommand('show-workflows')) {
        console.log('✅ Command: Show Workflows');
        onFeedback?.('Workflows opened', () => onShowWorkflows());
      }
      return;
    }

    if (onHideWorkflows && (
      text.includes('hide workflows') ||
      text.includes('close workflows')
    )) {
      if (shouldExecuteCommand('hide-workflows')) {
        console.log('✅ Command: Hide Workflows');
        onFeedback?.('Workflows closed', () => onHideWorkflows());
      }
      return;
    }

    // Presets overlay commands
    if (onShowPresets && (
      text.includes('show presets') ||
      text.includes('open presets') ||
      text.includes('display presets')
    )) {
      if (shouldExecuteCommand('show-presets')) {
        console.log('✅ Command: Show Presets');
        onFeedback?.('Presets opened', () => onShowPresets());
      }
      return;
    }

    if (onHidePresets && (
      text.includes('hide presets') ||
      text.includes('close presets')
    )) {
      if (shouldExecuteCommand('hide-presets')) {
        console.log('✅ Command: Hide Presets');
        onFeedback?.('Presets closed', () => onHidePresets());
      }
      return;
    }

    // Focus mode commands
    if (onToggleFocusMode && (
      text.includes('focus mode') ||
      text.includes('toggle focus') ||
      text.includes('enable focus') ||
      text.includes('disable focus')
    )) {
      if (shouldExecuteCommand('toggle-focus-mode')) {
        console.log('✅ Command: Toggle Focus Mode');
        onFeedback?.('Focus mode toggled', () => onToggleFocusMode());
      }
      return;
    }

    // Settings commands
    if (onOpenSettings && (
      text.includes('open settings') ||
      text.includes('show settings') ||
      text.includes('settings menu')
    )) {
      if (shouldExecuteCommand('open-settings')) {
        console.log('✅ Command: Open Settings');
        onFeedback?.('Settings opened', () => onOpenSettings());
      }
      return;
    }

    if (onCloseSettings && (
      text.includes('close settings') ||
      text.includes('hide settings') ||
      text.includes('exit settings')
    )) {
      if (shouldExecuteCommand('close-settings')) {
        console.log('✅ Command: Close Settings');
        onFeedback?.('Settings closed', () => onCloseSettings());
      }
      return;
    }

    // Preset selection commands
    if (onPreset1 && (
      text.includes('preset 1') ||
      text.includes('preset one') ||
      text.includes('first preset')
    )) {
      if (shouldExecuteCommand('preset-1')) {
        console.log('✅ Command: Preset 1');
        onFeedback?.('Preset 1 activated', () => onPreset1());
      }
      return;
    }

    if (onPreset2 && (
      text.includes('preset 2') ||
      text.includes('preset two') ||
      text.includes('second preset')
    )) {
      if (shouldExecuteCommand('preset-2')) {
        console.log('✅ Command: Preset 2');
        onFeedback?.('Preset 2 activated', () => onPreset2());
      }
      return;
    }

    console.log('❌ No matching command found for:', text);
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
