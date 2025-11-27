// Serial Port utility for Arduino communication

export interface SerialPortConnection {
  port: any; // Web Serial API SerialPort type
  isConnected: boolean;
}

export class SerialPortManager {
  private static instance: SerialPortManager;
  private connections: Map<string, SerialPortConnection> = new Map();

  private constructor() {}

  static getInstance(): SerialPortManager {
    if (!SerialPortManager.instance) {
      SerialPortManager.instance = new SerialPortManager();
    }
    return SerialPortManager.instance;
  }

  /**
   * Check if Web Serial API is supported
   */
  isSupported(): boolean {
    return 'serial' in navigator;
  }

  /**
   * Request and connect to a serial port
   */
  async selectAndConnect(connectionId: string, baudRate: number = 9600): Promise<boolean> {
    try {
      if (!this.isSupported()) {
        throw new Error('Web Serial API not supported in this browser');
      }

      // Close existing connection if any
      await this.disconnect(connectionId);

      // Request port from user
      const port = await (navigator as any).serial.requestPort();
      await port.open({ baudRate });

      this.connections.set(connectionId, {
        port,
        isConnected: true
      });

      return true;
    } catch (err) {
      console.error('Failed to connect to serial port:', err);
      throw err;
    }
  }

  /**
   * Send a command to a connected port
   */
  async sendCommand(connectionId: string, command: string): Promise<void> {
    const connection = this.connections.get(connectionId);
    
    if (!connection || !connection.isConnected || !connection.port) {
      throw new Error('No active connection. Please select a COM port first.');
    }

    try {
      const encoder = new TextEncoder();
      const writer = connection.port.writable.getWriter();
      await writer.write(encoder.encode(command + '\n'));
      writer.releaseLock();
    } catch (err) {
      console.error('Failed to send command:', err);
      throw err;
    }
  }

  /**
   * Disconnect from a specific port
   */
  async disconnect(connectionId: string): Promise<void> {
    const connection = this.connections.get(connectionId);
    
    if (connection && connection.port) {
      try {
        await connection.port.close();
      } catch (err) {
        console.error('Error closing port:', err);
      }
      this.connections.delete(connectionId);
    }
  }

  /**
   * Force release all COM ports
   */
  async disconnectAll(): Promise<void> {
    const disconnectPromises = Array.from(this.connections.keys()).map(
      id => this.disconnect(id)
    );
    await Promise.all(disconnectPromises);
    this.connections.clear();
  }

  /**
   * Check if a specific connection is active
   */
  isConnected(connectionId: string): boolean {
    const connection = this.connections.get(connectionId);
    return connection?.isConnected ?? false;
  }

  /**
   * Get connection info
   */
  getConnectionInfo(connectionId: string): string {
    const connection = this.connections.get(connectionId);
    if (!connection || !connection.isConnected) {
      return 'Not connected';
    }
    return 'Connected';
  }
}

// Export singleton instance
export const serialPortManager = SerialPortManager.getInstance();
