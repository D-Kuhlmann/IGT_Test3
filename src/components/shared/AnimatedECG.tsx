import { useEffect, useState } from 'react';

interface ECGProps {
  className?: string;
}

export function AnimatedECG({ className = "" }: ECGProps) {
  const [scanPosition, setScanPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition(prev => (prev + 2) % 800);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Generate static ECG heartbeat waveform
  const generateStaticECGWave = (amplitude: number = 25, heartRate: number = 75, phaseOffset: number = 0) => {
    const points = [];
    const width = 800;
    const centerY = 30;
    
    // Calculate heartbeat interval based on heart rate (beats per minute)
    const beatInterval = (60 / heartRate) * 100; // Convert to pixels at 25mm/s
    
    for (let x = 0; x < width; x += 1) {
      const t = (x + phaseOffset) % beatInterval;
      let y = centerY;
      
      // Baseline with slight drift
      const baseline = Math.sin((x + phaseOffset) / 300) * 0.5;
      y += baseline;
      
      // Generate PQRST complex
      if (t < beatInterval * 0.8) { // Only generate heartbeat in first 80% of interval
        
        // P wave (0-10% of beat)
        if (t >= beatInterval * 0.05 && t <= beatInterval * 0.15) {
          const pPhase = (t - beatInterval * 0.05) / (beatInterval * 0.10);
          y += Math.sin(pPhase * Math.PI) * amplitude * 0.15;
        }
        
        // QRS Complex (20-25% of beat) - The characteristic heartbeat spike
        else if (t >= beatInterval * 0.20 && t <= beatInterval * 0.28) {
          const qrsPhase = (t - beatInterval * 0.20) / (beatInterval * 0.08);
          
          if (qrsPhase < 0.2) {
            // Q wave (small negative deflection)
            y -= amplitude * 0.1 * Math.sin(qrsPhase * Math.PI / 0.2);
          } else if (qrsPhase < 0.6) {
            // R wave (large positive spike)
            const rPhase = (qrsPhase - 0.2) / 0.4;
            y += amplitude * 1.5 * Math.sin(rPhase * Math.PI);
          } else {
            // S wave (negative deflection)
            const sPhase = (qrsPhase - 0.6) / 0.4;
            y -= amplitude * 0.3 * Math.sin(sPhase * Math.PI);
          }
        }
        
        // T wave (45-65% of beat)
        else if (t >= beatInterval * 0.45 && t <= beatInterval * 0.65) {
          const tPhase = (t - beatInterval * 0.45) / (beatInterval * 0.20);
          y += Math.sin(tPhase * Math.PI) * amplitude * 0.25;
        }
      }
      
      points.push(`${x},${Math.max(5, Math.min(55, y))}`);
    }
    
    return points.join(' ');
  };

  // Generate static arterial pressure waveform
  const generateStaticPressureWave = (systolic: number = 120, diastolic: number = 80, heartRate: number = 75, phaseOffset: number = 0) => {
    const points = [];
    const width = 800;
    const centerY = 100;
    const range = systolic - diastolic;
    
    // Sync with heart rate
    const beatInterval = (60 / heartRate) * 50; // Adjusted for pressure wave timing
    
    for (let x = 0; x < width; x += 1) {
      const t = (x + phaseOffset) % beatInterval;
      let pressure = diastolic;
      
      // Arterial pressure waveform shape
      if (t < beatInterval * 0.3) {
        // Systolic upstroke (sharp rise)
        const upstroke = t / (beatInterval * 0.3);
        pressure = diastolic + range * Math.pow(upstroke, 0.5);
      } else if (t < beatInterval * 0.4) {
        // Peak systolic
        pressure = systolic;
      } else if (t < beatInterval * 0.6) {
        // Dicrotic notch area
        const notchPhase = (t - beatInterval * 0.4) / (beatInterval * 0.2);
        pressure = systolic - range * 0.15 * notchPhase;
        // Add dicrotic notch
        if (notchPhase > 0.3 && notchPhase < 0.5) {
          pressure -= range * 0.05;
        }
      } else {
        // Diastolic decay (exponential fall)
        const decay = (t - beatInterval * 0.6) / (beatInterval * 0.4);
        pressure = systolic - range * 0.15 - (range * 0.85) * (1 - Math.exp(-decay * 3));
      }
      
      const y = centerY - ((pressure - 50) / 150) * 80;
      points.push(`${x},${Math.max(20, Math.min(180, y))}`);
    }
    
    return points.join(' ');
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 8);
  };

  return (
    <div className={`relative overflow-hidden bg-black text-[#00ff00] ${className}`}>
      {/* Grid background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="ecg-grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1a3d1a" strokeWidth="0.5" opacity="0.4"/>
            </pattern>
            <pattern id="ecg-grid-major" width="125" height="125" patternUnits="userSpaceOnUse">
              <path d="M 125 0 L 0 0 0 125" fill="none" stroke="#2a5d2a" strokeWidth="1" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecg-grid)" />
          <rect width="100%" height="100%" fill="url(#ecg-grid-major)" />
        </svg>
      </div>

      {/* Top Header with Vital Signs */}
      <div className="absolute top-2 left-4 right-4 flex justify-between items-start">
        <div className="flex gap-8">
          <div>
            <span className="text-red-400">¹ </span>
            <span className="text-red-400 font-mono text-lg">AO </span>
            <span className="text-red-400 font-mono text-2xl font-bold">124/84</span>
            <span className="text-yellow-400 font-mono text-lg ml-2">(99)</span>
          </div>
          <div>
            <span className="text-green-400">² </span>
            <span className="text-green-400 font-mono text-lg">LV </span>
            <span className="text-green-400 font-mono text-2xl font-bold">155/5</span>
            <span className="text-yellow-400 font-mono text-lg ml-2">15</span>
          </div>
        </div>
        
        <div className="bg-gray-700 px-3 py-1 text-white text-sm">
          <div>AIR REST</div>
          <div className="text-xs">{getCurrentTime()} AO 124/84 (99)</div>
          <div className="text-xs ml-12">LV 156/5/15</div>
        </div>
      </div>

      {/* ECG Leads */}
      <div className="absolute top-16 left-0 right-0">
        <svg className="w-full h-36">
          <defs>
            {/* Clipping path for fresh waveforms (what's being written) */}
            <clipPath id="freshECGClip">
              <rect x={scanPosition} y="0" width="800" height="150" />
            </clipPath>
            {/* Clipping path for old waveforms (what's already been written) */}
            <clipPath id="oldECGClip">
              <rect x="0" y="0" width={scanPosition} height="150" />
            </clipPath>
          </defs>
          
          {/* Lead I */}
          <g>
            <text x="10" y="25" fill="#00ff00" fontSize="14" fontFamily="monospace" fontWeight="bold">I</text>
            
            {/* Old waveform (already written, slightly dimmed) */}
            <polyline
              points={generateStaticECGWave(20, 80, 0)}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              transform="translate(30, 5)"
              clipPath="url(#oldECGClip)"
              opacity="0.7"
            />
            
            {/* Fresh waveform (being written, bright) */}
            <polyline
              points={generateStaticECGWave(20, 80, 0)}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              transform="translate(30, 5)"
              clipPath="url(#freshECGClip)"
            />
          </g>

          {/* Lead II */}
          <g>
            <text x="10" y="65" fill="#00ff00" fontSize="14" fontFamily="monospace" fontWeight="bold">II</text>
            
            {/* Old waveform (already written, slightly dimmed) */}
            <polyline
              points={generateStaticECGWave(22, 80, 0)}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              transform="translate(30, 45)"
              clipPath="url(#oldECGClip)"
              opacity="0.7"
            />
            
            {/* Fresh waveform (being written, bright) */}
            <polyline
              points={generateStaticECGWave(22, 80, 0)}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              transform="translate(30, 45)"
              clipPath="url(#freshECGClip)"
            />
          </g>

          {/* Lead III */}
          <g>
            <text x="10" y="105" fill="#00ff00" fontSize="14" fontFamily="monospace" fontWeight="bold">III</text>
            
            {/* Old waveform (already written, slightly dimmed) */}
            <polyline
              points={generateStaticECGWave(18, 80, 0)}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              transform="translate(30, 85)"
              clipPath="url(#oldECGClip)"
              opacity="0.7"
            />
            
            {/* Fresh waveform (being written, bright) */}
            <polyline
              points={generateStaticECGWave(18, 80, 0)}
              fill="none"
              stroke="#00ff00"
              strokeWidth="1.5"
              transform="translate(30, 85)"
              clipPath="url(#freshECGClip)"
            />
          </g>

          {/* Time marker */}
          <text x="20" y="130" fill="#666666" fontSize="10" fontFamily="monospace">1 mV</text>
        </svg>
      </div>

      {/* Pressure Waveforms Section */}
      <div className="absolute top-52 left-0 right-0">
        <svg className="w-full h-40">
          <defs>
            {/* Clipping path for fresh pressure waveforms */}
            <clipPath id="freshPressureClip">
              <rect x={scanPosition} y="0" width="800" height="200" />
            </clipPath>
            {/* Clipping path for old pressure waveforms */}
            <clipPath id="oldPressureClip">
              <rect x="0" y="0" width={scanPosition} height="200" />
            </clipPath>
          </defs>
          
          {/* Scale */}
          <text x="10" y="20" fill="#cccccc" fontSize="12" fontFamily="monospace">200</text>
          <line x1="40" y1="15" x2="780" y2="15" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
          
          <text x="10" y="140" fill="#cccccc" fontSize="12" fontFamily="monospace">100</text>
          <line x1="40" y1="135" x2="780" y2="135" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
          
          <text x="10" y="180" fill="#cccccc" fontSize="12" fontFamily="monospace">0</text>
          <line x1="40" y1="175" x2="780" y2="175" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />

          {/* Arterial Pressure (Yellow) - old waveform */}
          <polyline
            points={generateStaticPressureWave(124, 84, 80, 0)}
            fill="none"
            stroke="#ffff00"
            strokeWidth="2"
            transform="translate(0, 40)"
            clipPath="url(#oldPressureClip)"
            opacity="0.7"
          />

          {/* Arterial Pressure (Yellow) - fresh waveform */}
          <polyline
            points={generateStaticPressureWave(124, 84, 80, 0)}
            fill="none"
            stroke="#ffff00"
            strokeWidth="2"
            transform="translate(0, 40)"
            clipPath="url(#freshPressureClip)"
          />

          {/* Left Ventricular Pressure (Red) - old waveform */}
          <polyline
            points={generateStaticPressureWave(155, 5, 80, 10)}
            fill="none"
            stroke="#ff4444"
            strokeWidth="2"
            transform="translate(0, 20)"
            clipPath="url(#oldPressureClip)"
            opacity="0.7"
          />

          {/* Left Ventricular Pressure (Red) - fresh waveform */}
          <polyline
            points={generateStaticPressureWave(155, 5, 80, 10)}
            fill="none"
            stroke="#ff4444"
            strokeWidth="2"
            transform="translate(0, 20)"
            clipPath="url(#freshPressureClip)"
          />
        </svg>
      </div>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/90 border-t border-gray-600 p-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-white text-xs font-mono">00:10:53</span>
          <span className="text-gray-400 text-xs">Vitals Interval: 1:07 (2 min)</span>
          <span className="text-gray-400 text-xs">STAT</span>
          <span className="text-gray-400 text-xs">Sweep Speed: 25 mm/s</span>
        </div>
        
        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-xs text-gray-400">HR</div>
            <div className="text-2xl font-bold text-[#00ff00]">80</div>
            <div className="text-xs text-gray-400">NBP</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">SpO₂</div>
            <div className="text-2xl font-bold text-[#00ffff]">100</div>
            <div className="text-xs text-gray-400">HR</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">TSkin</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">etCO₂</div>
          </div>
        </div>
      </div>

      {/* Scanning line - only covers waveform areas */}
      <div
        className="absolute top-16 w-[5px] bg-black opacity-80 h-76"
        style={{
          left: `${scanPosition}px`,
          transition: 'none'
        }}
      />
    </div>
  );
}