import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (pin: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const CORRECT_PIN = '123456'; // You can change this or make it configurable

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const broadcastChannelRef = useRef<BroadcastChannel | null>(null);

  // Initialize broadcast channel for authentication events
  useEffect(() => {
    if (!broadcastChannelRef.current) {
      broadcastChannelRef.current = new BroadcastChannel('igt_auth_channel');
    }

    const channel = broadcastChannelRef.current;
    
    const handleAuthMessage = (event: MessageEvent) => {
      const { type } = event.data;
      
      if (type === 'LOGIN_SUCCESS') {
        setIsAuthenticated(true);
        sessionStorage.setItem('igt_authenticated', 'true');
      } else if (type === 'LOGOUT') {
        setIsAuthenticated(false);
        sessionStorage.removeItem('igt_authenticated');
      }
    };

    channel.addEventListener('message', handleAuthMessage);

    return () => {
      channel.removeEventListener('message', handleAuthMessage);
    };
  }, []);

  // Check if user is already authenticated (persisted in sessionStorage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem('igt_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Cleanup broadcast channel on unmount
  useEffect(() => {
    return () => {
      if (broadcastChannelRef.current) {
        broadcastChannelRef.current.close();
        broadcastChannelRef.current = null;
      }
    };
  }, []);

  const login = (pin: string): boolean => {
    if (pin === CORRECT_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem('igt_authenticated', 'true');
      
      // Broadcast successful login to all other screens
      if (broadcastChannelRef.current) {
        try {
          broadcastChannelRef.current.postMessage({
            type: 'LOGIN_SUCCESS',
            timestamp: Date.now()
          });
        } catch (error) {
          // Failed to broadcast login success
        }
      }
      
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('igt_authenticated');
    
    // Broadcast logout to all other screens
    if (broadcastChannelRef.current) {
      try {
        broadcastChannelRef.current.postMessage({
          type: 'LOGOUT',
          timestamp: Date.now()
        });
      } catch (error) {
        // Failed to broadcast logout
      }
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
