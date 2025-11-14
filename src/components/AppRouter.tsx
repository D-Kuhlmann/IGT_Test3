import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { ActiveComponentsProvider } from '../contexts/ActiveComponentsContext';
import { GlobalVoiceProvider } from '../contexts/GlobalVoiceContext';
import { VoiceInputStateProvider } from '../contexts/VoiceInputStateContext';
import { InputBroadcastProvider } from '../contexts/InputBroadcastContext';
import { AutomationProvider } from '../contexts/AutomationContext';
import { GlobalVoiceCommandHandler } from './GlobalVoiceCommandHandler';

// Inner component that uses location to determine screen ID
function AppContent() {
  const location = useLocation();
  
  // Determine screen ID based on current route
  const getScreenId = (): 'tsm' | 'flexvision' | 'wmu' | 'flexspots1' | 'flexspots2' => {
    const path = location.pathname;
    if (path.includes('/tsm')) return 'tsm';
    if (path.includes('/flexvision')) return 'flexvision';
    if (path.includes('/wmu')) return 'wmu';
    if (path.includes('/flexspots1') || path.includes('/flexspot1')) return 'flexspots1';
    if (path.includes('/flexspots2') || path.includes('/flexspot2')) return 'flexspots2';
    return 'flexvision'; // Default to flexvision
  };

  const screenId = getScreenId();
  const isMaster = screenId === 'tsm'; // TSM is the master that broadcasts input

  console.log('📍 AppContent - Current path:', location.pathname, 'screenId:', screenId, 'isMaster:', isMaster);

  return (
    <InputBroadcastProvider screenId={screenId} isMaster={isMaster}>
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
      
      {/* Global Voice Command Handler */}
      <GlobalVoiceCommandHandler />
    </InputBroadcastProvider>
  );
}

export function AppRouter() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <AngleProvider>
          <ActiveComponentsProvider>
            <AutomationProvider>
              <GlobalVoiceProvider>
                <VoiceInputStateProvider>
                  <Router>
                    <AppContent />
                  </Router>
                </VoiceInputStateProvider>
              </GlobalVoiceProvider>
            </AutomationProvider>
          </ActiveComponentsProvider>
        </AngleProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
