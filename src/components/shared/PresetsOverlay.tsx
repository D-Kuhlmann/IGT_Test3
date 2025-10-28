import { useEffect } from "react";

interface PresetsOverlayProps {
  isVisible: boolean;
  onClose: () => void;
  onPresetSelect: (preset: 1 | 2) => void;
  activePreset: 1 | 2;
}

export function PresetsOverlay({
  isVisible,
  onClose,
  onPresetSelect,
  activePreset,
}: PresetsOverlayProps) {
  // Handle ESC key to close
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "1") {
        onPresetSelect(1);
      } else if (event.key === "2") {
        onPresetSelect(2);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, onClose, onPresetSelect]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Presets Menu */}
      <div
        className="relative bg-[#2a2a2a] rounded-lg shadow-2xl border border-[#3b3b3b] p-8 min-w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-['CentraleSans:Bold',_sans-serif] text-white">
            Select Preset
          </h2>
          <button
            onClick={onClose}
            className="text-[#d6d6d6] hover:text-white transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Preset Options */}
        <div className="space-y-4">
          {/* Preset 1 - Cardio */}
          <button
            onClick={() => onPresetSelect(1)}
            className={`w-full p-6 rounded-lg border-2 transition-all ${
              activePreset === 1
                ? "border-[#41c9fe] bg-[#41c9fe]/10 shadow-lg shadow-[#41c9fe]/20"
                : "border-[#3b3b3b] bg-[#383838] hover:border-[#41c9fe]/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#41c9fe]/20 flex items-center justify-center">
                  <span className="text-2xl font-['CentraleSans:Bold',_sans-serif] text-[#41c9fe]">
                    1
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-['CentraleSans:Bold',_sans-serif] text-white mb-1">
                    Cardio
                  </h3>
                  <p className="text-sm font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6]">
                    Standard medical workflow
                  </p>
                </div>
              </div>
              {activePreset === 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#41c9fe"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>

          {/* Preset 2 - Neuro */}
          <button
            onClick={() => onPresetSelect(2)}
            className={`w-full p-6 rounded-lg border-2 transition-all ${
              activePreset === 2
                ? "border-[#41c9fe] bg-[#41c9fe]/10 shadow-lg shadow-[#41c9fe]/20"
                : "border-[#3b3b3b] bg-[#383838] hover:border-[#41c9fe]/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#41c9fe]/20 flex items-center justify-center">
                  <span className="text-2xl font-['CentraleSans:Bold',_sans-serif] text-[#41c9fe]">
                    2
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-['CentraleSans:Bold',_sans-serif] text-white mb-1">
                    Neuro
                  </h3>
                  <p className="text-sm font-['CentraleSans:Book',_sans-serif] text-[#d6d6d6]">
                    Navigator workflow with SmartNavigator
                  </p>
                </div>
              </div>
              {activePreset === 2 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#41c9fe"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Footer hint */}
        <div className="mt-6 pt-4 border-t border-[#3b3b3b]">
          <p className="text-sm font-['CentraleSans:Book',_sans-serif] text-[#8c8c8c] text-center">
            Press <span className="text-[#41c9fe]">1</span> or{" "}
            <span className="text-[#41c9fe]">2</span> to quickly select a preset
          </p>
        </div>
      </div>
    </div>
  );
}
