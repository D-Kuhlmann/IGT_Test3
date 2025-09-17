import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScreenFlexvision } from './ScreenFlexvision';
import { ScreenTSM } from './ScreenTSM';
import { ScreenWMU } from './ScreenWMU';
import { ScreenFlexspots1 } from './ScreenFlexspots1';
import { ScreenFlexspots2 } from './ScreenFlexspots2';
import { MultiScreenHub } from './MultiScreenHub';
import { AuthProvider } from '../hooks/useAuth';
import { ProtectedRoute } from './ProtectedRoute';
import { SettingsProvider } from '../contexts/SettingsContext';
import { AngleProvider } from '../contexts/AngleContext';

export function AppRouter() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <AngleProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/hub" replace />} />
              <Route path="/hub" element={<MultiScreenHub />} />
              <Route path="/flexvision" element={
                <ProtectedRoute screenType="flexvision">
                  <ScreenFlexvision />
                </ProtectedRoute>
              } />
              <Route path="/tsm" element={
                <ProtectedRoute screenType="tsm">
                  <ScreenTSM />
                </ProtectedRoute>
              } />
              <Route path="/wmu" element={
                <ProtectedRoute screenType="wmu">
                  <ScreenWMU />
                </ProtectedRoute>
              } />
              <Route path="/flexspots1" element={
                <ProtectedRoute screenType="flexspot1">
                  <ScreenFlexspots1 />
                </ProtectedRoute>
              } />
              <Route path="/flexspots2" element={
                <ProtectedRoute screenType="flexspot2">
                  <ScreenFlexspots2 />
                </ProtectedRoute>
              } />
            </Routes>
          </Router>
        </AngleProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
