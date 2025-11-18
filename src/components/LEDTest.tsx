import { useState } from 'react';

export function LEDTest() {
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

  const sendCommand = async (command: string, buttonName: string) => {
    try {
      setError('');
      setStatus(`Sending command: ${command}`);
      
      // Request serial port access
      if (!('serial' in navigator)) {
        setError('Web Serial API not supported in this browser');
        return;
      }

      const port = await (navigator as any).serial.requestPort();
      await port.open({ baudRate: 9600 });

      const encoder = new TextEncoder();
      const writer = port.writable.getWriter();
      await writer.write(encoder.encode(command + '\n'));
      writer.releaseLock();

      setStatus(`${buttonName}: Command sent successfully`);

      // Close the port after a short delay
      setTimeout(async () => {
        await port.close();
      }, 100);
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setStatus('');
    }
  };

  return (
    <div className="w-full h-full bg-black flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-2">LED Test Component</h1>
          <p className="text-gray-400">Arduino LED Control via Serial Port</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Button 1: SmartUI */}
          <button
            onClick={() => sendCommand('mode smartui', 'SmartUI')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-8 px-6 rounded-lg text-2xl transition-colors border-2 border-blue-400"
          >
            SmartUI
          </button>

          {/* Button 2: APC */}
          <button
            onClick={() => sendCommand('mode APC', 'APC')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-8 px-6 rounded-lg text-2xl transition-colors border-2 border-green-400"
          >
            APC
          </button>

          {/* Button 3: Footswitch */}
          <button
            onClick={() => sendCommand('LED ON', 'Footswitch')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-8 px-6 rounded-lg text-2xl transition-colors border-2 border-yellow-400"
          >
            Footswitch
          </button>

          {/* Button 4: Off */}
          <button
            onClick={() => sendCommand('mode off', 'OFF')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-8 px-6 rounded-lg text-2xl transition-colors border-2 border-red-400"
          >
            OFF
          </button>
        </div>

        {/* Status Display */}
        <div className="space-y-4">
          {status && (
            <div className="bg-gray-800 border border-gray-600 rounded p-4">
              <div className="text-green-400 font-mono">{status}</div>
            </div>
          )}
          
          {error && (
            <div className="bg-gray-800 border border-red-600 rounded p-4">
              <div className="text-red-400 font-mono">{error}</div>
            </div>
          )}
        </div>

        <div className="text-center text-gray-500 text-sm">
          Note: Click a button to select the serial port and send the command
        </div>
      </div>
    </div>
  );
}
