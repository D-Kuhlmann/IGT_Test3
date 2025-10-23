import React, { useState } from 'react';
import { useSettings, formatInputShortcut } from '../contexts/SettingsContext';

interface ShortcutEditorProps {
  label: string;
  shortcut: string;
  onUpdate: (shortcut: string) => void;
}

function ShortcutEditor({ label, shortcut, onUpdate }: ShortcutEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempShortcut, setTempShortcut] = useState<string>(typeof shortcut === 'string' ? shortcut : formatInputShortcut(shortcut));

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Ignore modifier keys by themselves
    if (['Control', 'Alt', 'Shift', 'Meta'].includes(event.key)) {
      return;
    }

    const parts: string[] = [];
    if (event.ctrlKey) parts.push('Ctrl');
    if (event.altKey) parts.push('Alt');
    if (event.shiftKey) parts.push('Shift');
    if (event.metaKey) parts.push('Cmd');
    parts.push(event.key);

    const newShortcutString = parts.join('+');
    setTempShortcut(newShortcutString);
  };

  const handleMouseEvent = (event: React.MouseEvent | React.WheelEvent) => {
    event.preventDefault();
    event.stopPropagation();

    let mouseShortcut = '';
    
    if (event.type === 'wheel') {
      const wheelEvent = event as React.WheelEvent;
      const direction = wheelEvent.deltaY < 0 ? 'up' : 'down';
      mouseShortcut = `wheel:${direction}`;
    } else if (event.type === 'click' || event.type === 'auxclick') {
      const clickEvent = event as React.MouseEvent;
      const buttonMap = { 0: 'left', 1: 'middle', 2: 'right' };
      const button = buttonMap[clickEvent.button as keyof typeof buttonMap];
      mouseShortcut = `click:${button}`;
    } else if (event.type === 'dblclick') {
      const clickEvent = event as React.MouseEvent;
      const buttonMap = { 0: 'left', 1: 'middle', 2: 'right' };
      const button = buttonMap[clickEvent.button as keyof typeof buttonMap];
      mouseShortcut = `doubleclick:${button}`;
    }

    // Add modifiers
    const modifiers = [];
    if (event.ctrlKey) modifiers.push('ctrl');
    if (event.altKey) modifiers.push('alt');
    if (event.shiftKey) modifiers.push('shift');
    if (event.metaKey) modifiers.push('meta');
    
    if (modifiers.length > 0) {
      mouseShortcut += '+' + modifiers.join('+');
    }

    setTempShortcut(mouseShortcut);
  };

  const handleSave = () => {
    onUpdate(tempShortcut);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempShortcut(typeof shortcut === 'string' ? shortcut : formatInputShortcut(shortcut));
    setIsEditing(false);
  };

  const displayValue = isEditing 
    ? (tempShortcut || 'Press a key...')
    : (() => {
        try {
          const formatted = formatInputShortcut(shortcut);
          return typeof formatted === 'string' ? formatted : String(formatted);
        } catch (error) {
          console.warn('Error formatting shortcut:', error);
          return typeof shortcut === 'string' ? shortcut : 'Invalid shortcut';
        }
      })();

  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-700">
      <div className="flex flex-col">
        <span className="text-white font-medium">{label}</span>
        <span className="text-gray-400 text-sm">Press keys or perform mouse actions to set shortcut</span>
      </div>
      
      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <div
              className="px-3 py-2 bg-gray-800 border border-blue-500 rounded text-white min-w-[120px] text-center focus:outline-none"
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={handleMouseEvent}
              onAuxClick={handleMouseEvent}
              onDoubleClick={handleMouseEvent}
              onWheel={handleMouseEvent}
              onContextMenu={handleMouseEvent}
              autoFocus
            >
              {displayValue}
            </div>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <div className="px-3 py-2 bg-gray-800 rounded text-white min-w-[120px] text-center">
              {displayValue}
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
}

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-700">
      <div className="flex flex-col">
        <span className="text-white font-medium">{label}</span>
        <span className="text-gray-400 text-sm">Click to change color</span>
      </div>
      <div className="flex items-center gap-2">
        <div 
          className="w-8 h-8 rounded border-2 border-gray-600 cursor-pointer"
          style={{ backgroundColor: value }}
          onClick={() => {
            const newColor = prompt('Enter hex color (e.g., #9ED5FF):', value);
            if (newColor && /^#[0-9A-Fa-f]{6}$/.test(newColor)) {
              onChange(newColor);
            }
          }}
        />
        <span className="text-gray-300 text-sm font-mono">{value}</span>
      </div>
    </div>
  );
}

export function SettingsMenu() {
  const { inputSettings, updateInputShortcut, updateSetting, resetToDefaults, isSettingsOpen, setIsSettingsOpen } = useSettings();

  if (!isSettingsOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsSettingsOpen(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
      onClick={handleOverlayClick}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div className="bg-gray-900 rounded-lg shadow-xl w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Input Settings</h2>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-white mb-4">Input Controls</h3>
            <div className="space-y-0">
              <ShortcutEditor
                label="Smart Workflows Menu"
                shortcut={typeof inputSettings.smartWorkflows === 'string' ? inputSettings.smartWorkflows : formatInputShortcut(inputSettings.smartWorkflows)}
                onUpdate={(shortcut) => updateInputShortcut('smartWorkflows', shortcut)}
              />
              <ShortcutEditor
                label="Toggle Automation"
                shortcut={typeof inputSettings.toggleAutomation === 'string' ? inputSettings.toggleAutomation : formatInputShortcut(inputSettings.toggleAutomation)}
                onUpdate={(shortcut) => updateInputShortcut('toggleAutomation', shortcut)}
              />
              <ShortcutEditor
                label="Quick Settings"
                shortcut={typeof inputSettings.quickSettings === 'string' ? inputSettings.quickSettings : formatInputShortcut(inputSettings.quickSettings)}
                onUpdate={(shortcut) => updateInputShortcut('quickSettings', shortcut)}
              />
              <ShortcutEditor
                label="Workflow Step Left (inside menu)"
                shortcut={typeof inputSettings.workflowStepLeft === 'string' ? inputSettings.workflowStepLeft : formatInputShortcut(inputSettings.workflowStepLeft)}
                onUpdate={(shortcut) => updateInputShortcut('workflowStepLeft', shortcut)}
              />
              <ShortcutEditor
                label="Workflow Step Right (inside menu)"
                shortcut={typeof inputSettings.workflowStepRight === 'string' ? inputSettings.workflowStepRight : formatInputShortcut(inputSettings.workflowStepRight)}
                onUpdate={(shortcut) => updateInputShortcut('workflowStepRight', shortcut)}
              />
              <ShortcutEditor
                label="Workflow Step Activate"
                shortcut={typeof inputSettings.workflowStepActivate === 'string' ? inputSettings.workflowStepActivate : formatInputShortcut(inputSettings.workflowStepActivate)}
                onUpdate={(shortcut) => updateInputShortcut('workflowStepActivate', shortcut)}
              />
              <ShortcutEditor
                label="Close Workflow Menu"
                shortcut={typeof inputSettings.workflowClose === 'string' ? inputSettings.workflowClose : formatInputShortcut(inputSettings.workflowClose)}
                onUpdate={(shortcut) => updateInputShortcut('workflowClose', shortcut)}
              />
            </div>
          </div>

          {/* Focus Mode Settings */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-white mb-4">Focus Mode Settings</h3>
            
            {/* Enable/Disable Toggle */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-700">
              <div className="flex flex-col">
                <span className="text-white font-medium">Enable Focus Mode</span>
                <span className="text-gray-400 text-sm">Allow focus mode activation on FlexVision screen</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={inputSettings.focusModeEnabled}
                  onChange={(e) => updateSetting('focusModeEnabled', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="space-y-0">
              <ShortcutEditor
                label="Focus Mode Toggle"
                shortcut={typeof inputSettings.focusModeToggle === 'string' ? inputSettings.focusModeToggle : formatInputShortcut(inputSettings.focusModeToggle)}
                onUpdate={(shortcut) => updateInputShortcut('focusModeToggle', shortcut)}
              />
              <ShortcutEditor
                label="Focus Mode Navigation (Forward)"
                shortcut={typeof inputSettings.focusModeNavigation === 'string' ? inputSettings.focusModeNavigation : formatInputShortcut(inputSettings.focusModeNavigation)}
                onUpdate={(shortcut) => updateInputShortcut('focusModeNavigation', shortcut)}
              />
              <ShortcutEditor
                label="Focus Mode Navigation (Reverse)"
                shortcut={typeof inputSettings.focusModeNavigationReverse === 'string' ? inputSettings.focusModeNavigationReverse : formatInputShortcut(inputSettings.focusModeNavigationReverse)}
                onUpdate={(shortcut) => updateInputShortcut('focusModeNavigationReverse', shortcut)}
              />
              <ShortcutEditor
                label="Focus Mode Activation"
                shortcut={typeof inputSettings.focusModeActivation === 'string' ? inputSettings.focusModeActivation : formatInputShortcut(inputSettings.focusModeActivation)}
                onUpdate={(shortcut) => updateInputShortcut('focusModeActivation', shortcut)}
              />
              <ShortcutEditor
                label="Focus Mode Exit"
                shortcut={typeof inputSettings.focusModeExit === 'string' ? inputSettings.focusModeExit : formatInputShortcut(inputSettings.focusModeExit)}
                onUpdate={(shortcut) => updateInputShortcut('focusModeExit', shortcut)}
              />
              <ColorPicker
                label="Focus Border Color 1 (Light)"
                value={inputSettings.focusBorderColor1}
                onChange={(color) => updateSetting('focusBorderColor1', color)}
              />
              <ColorPicker
                label="Focus Border Color 2 (Dark)"
                value={inputSettings.focusBorderColor2}
                onChange={(color) => updateSetting('focusBorderColor2', color)}
              />
            </div>
          </div>


          {/* Instructions */}
          <div className="mb-6 p-4 bg-blue-900 bg-opacity-30 rounded-lg border border-blue-700">
            <h4 className="text-blue-300 font-medium mb-2">Instructions</h4>
            <ul className="text-blue-200 text-sm space-y-1">
              <li>• Click "Edit" next to any shortcut to change it</li>
              <li>• Press the desired key combination while the input is focused</li>
              <li>• Function keys (F1-F12) work great for shortcuts</li>
              <li>• Use Ctrl, Alt, Shift, or Cmd with other keys for complex shortcuts</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button
              onClick={resetToDefaults}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
            >
              Reset to Defaults
            </button>
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
