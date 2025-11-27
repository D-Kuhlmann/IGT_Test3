import { useState } from 'react';
import { serialPortManager } from '../utils/serialPort';

const TSO_CONNECTION = 'tso';
const FOOTSWITCH_CONNECTION = 'footswitch';

export function LEDTest() {
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [tsoConnected, setTsoConnected] = useState(false);
  const [footswitchConnected, setFootswitchConnected] = useState(false);

  const handleSelectPort = async (connectionId: string) => {
    try {
      setError('');
      setStatus(`Selecting COM port for ${connectionId}...`);
      
      if (!serialPortManager.isSupported()) {
        setError('Web Serial API not supported in this browser');
        return;
      }

      await serialPortManager.selectAndConnect(connectionId, 9600);
      
      if (connectionId === TSO_CONNECTION) {
        setTsoConnected(true);
      } else {
        setFootswitchConnected(true);
      }
      
      setStatus(`${connectionId} COM port connected successfully`);
    } catch (err) {
      setError(`Failed to select port: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setStatus('');
    }
  };

  const handleForceReleaseAll = async () => {
    try {
      setError('');
      setStatus('Releasing all COM ports...');
      await serialPortManager.disconnectAll();
      setTsoConnected(false);
      setFootswitchConnected(false);
      setStatus('All COM ports released');
    } catch (err) {
      setError(`Failed to release ports: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  };

  const sendCommand = async (connectionId: string, command: string, buttonName: string) => {
    try {
      setError('');
      setStatus(`Sending: ${command}`);
      
      await serialPortManager.sendCommand(connectionId, command);
      setStatus(`${buttonName}: Command sent successfully`);
    } catch (err) {
      setError(`${buttonName} error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setStatus('');
    }
  };

  return (
    <div className="w-full h-full bg-black flex flex-col p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-bold mb-2">LED Test Component</h1>
        <p className="text-gray-400">Arduino LED Control via Serial Port</p>
      </div>

      {/* COM Port Controls */}
      <div className="mb-8 bg-gray-900 rounded-lg p-6 border-2 border-gray-700">
        <h2 className="text-white text-2xl font-bold mb-4">COM Port Management</h2>
        <button
          onClick={handleForceReleaseAll}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors border-2 border-red-400"
        >
          Force Release All COM Ports
        </button>
      </div>

      {/* Main Content - Two Sections */}
      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* LEFT SECTION - TSO */}
        <div className="bg-gray-900 rounded-lg p-6 border-2 border-gray-700 flex flex-col">
          <h2 className="text-white text-3xl font-bold mb-4 text-center">TSO Controls</h2>
          
          {/* TSO COM Port Selection */}
          <div className="mb-6">
            <button
              onClick={() => handleSelectPort(TSO_CONNECTION)}
              className={`w-full font-bold py-3 px-6 rounded-lg text-lg transition-colors border-2 ${
                tsoConnected
                  ? 'bg-green-600 hover:bg-green-700 border-green-400'
                  : 'bg-gray-600 hover:bg-gray-700 border-gray-400'
              } text-white`}
            >
              {tsoConnected ? '✓ TSO COM Port Connected' : 'Select TSO COM Port'}
            </button>
          </div>

          {/* TSO Buttons */}
          <div className="flex-1 space-y-4">
            <button
              onClick={() => sendCommand(TSO_CONNECTION, 'mode smartui', 'SmartUI')}
              disabled={!tsoConnected}
              className={`w-full font-bold py-6 px-6 rounded-lg text-2xl transition-colors border-2 ${
                tsoConnected
                  ? 'bg-blue-600 hover:bg-blue-700 border-blue-400 text-white'
                  : 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              SmartUI
            </button>

            <button
              onClick={() => sendCommand(TSO_CONNECTION, 'mode APC', 'APC')}
              disabled={!tsoConnected}
              className={`w-full font-bold py-6 px-6 rounded-lg text-2xl transition-colors border-2 ${
                tsoConnected
                  ? 'bg-green-600 hover:bg-green-700 border-green-400 text-white'
                  : 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              APC
            </button>

            <button
              onClick={() => sendCommand(TSO_CONNECTION, 'mode none', 'Dim All')}
              disabled={!tsoConnected}
              className={`w-full font-bold py-6 px-6 rounded-lg text-2xl transition-colors border-2 ${
                tsoConnected
                  ? 'bg-purple-600 hover:bg-purple-700 border-purple-400 text-white'
                  : 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              Dim All LEDs
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - Footswitch */}
        <div className="bg-gray-900 rounded-lg p-6 border-2 border-gray-700 flex flex-col">
          <h2 className="text-white text-3xl font-bold mb-4 text-center">Footswitch Controls</h2>
          
          {/* Footswitch COM Port Selection */}
          <div className="mb-6">
            <button
              onClick={() => handleSelectPort(FOOTSWITCH_CONNECTION)}
              className={`w-full font-bold py-3 px-6 rounded-lg text-lg transition-colors border-2 ${
                footswitchConnected
                  ? 'bg-green-600 hover:bg-green-700 border-green-400'
                  : 'bg-gray-600 hover:bg-gray-700 border-gray-400'
              } text-white`}
            >
              {footswitchConnected ? '✓ Footswitch COM Port Connected' : 'Select Footswitch COM Port'}
            </button>
          </div>

          {/* Footswitch Buttons */}
          <div className="flex-1 space-y-4">
            <button
              onClick={() => sendCommand(FOOTSWITCH_CONNECTION, 'led on', 'SmartUI LED ON')}
              disabled={!footswitchConnected}
              className={`w-full font-bold py-8 px-6 rounded-lg text-2xl transition-colors border-2 ${
                footswitchConnected
                  ? 'bg-yellow-600 hover:bg-yellow-700 border-yellow-400 text-white'
                  : 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              SmartUI LED ON
            </button>

            <button
              onClick={() => sendCommand(FOOTSWITCH_CONNECTION, 'led off', 'LEDs OFF')}
              disabled={!footswitchConnected}
              className={`w-full font-bold py-8 px-6 rounded-lg text-2xl transition-colors border-2 ${
                footswitchConnected
                  ? 'bg-red-600 hover:bg-red-700 border-red-400 text-white'
                  : 'bg-gray-700 border-gray-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              LEDs OFF
            </button>
          </div>
        </div>
      </div>

      {/* Status Display */}
      <div className="mt-6 space-y-3">
        {status && (
          <div className="bg-gray-800 border border-gray-600 rounded p-4">
            <div className="text-green-400 font-mono text-center">{status}</div>
          </div>
        )}
        
        {error && (
          <div className="bg-gray-800 border border-red-600 rounded p-4">
            <div className="text-red-400 font-mono text-center">{error}</div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center text-gray-500 text-sm">
        Note: Use Chrome or Edge browser for Web Serial API support
      </div>
    </div>
  );
}
