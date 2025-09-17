import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LoginScreen } from './LoginScreen';

interface ProtectedRouteProps {
  children: ReactNode;
  screenType: 'flexspot' | 'flexvision' | 'tsm' | 'wmu' | 'flexspot1' | 'flexspot2';
}

export function ProtectedRoute({ children, screenType }: ProtectedRouteProps) {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <LoginScreen screenType={screenType} onLogin={login} />;
  }

  return <>{children}</>;
}