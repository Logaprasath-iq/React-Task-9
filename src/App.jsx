import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StatusBar from './components/common/StatusBar';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import './styles/global.css';

function MainApp() {
  const [isEmptyState, setIsEmptyState] = useState(false);
  const [currentHomeTab, setCurrentHomeTab] = useState('home');
  const location = useLocation();

  const toggleEmptyState = () => {
    setIsEmptyState(prev => !prev);
  };

  const isDarkTop =
    location.pathname === '/onboarding' ||
    location.pathname === '/' ||
    location.pathname === '/signin' ||
    location.pathname === '/forgot-password';
  const statusTheme = isDarkTop ? 'white' : 'dark';

  return (
    <div className="app-container">
      {/* Figma Top Mobile Status Bar: 08:15, Signal, Wifi, Battery */}
      <StatusBar
        theme={statusTheme}
        time="08:15"
        style={
          isDarkTop
            ? { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }
            : { position: 'relative', background: '#FFFFFF', zIndex: 100 }
        }
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab={currentHomeTab}
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route path="*" element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
