import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DeviceFrame from './components/common/DeviceFrame';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import './styles/global.css';

function AppContent() {
  const [isEmptyState, setIsEmptyState] = useState(false);
  const [currentHomeTab, setCurrentHomeTab] = useState('home');

  const toggleEmptyState = () => {
    setIsEmptyState(prev => !prev);
  };

  return (
    <DeviceFrame
      isEmptyState={isEmptyState}
      onToggleEmptyState={toggleEmptyState}
      currentTab={currentHomeTab}
      onTabChange={setCurrentHomeTab}
    >
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
              activeTab={currentHomeTab}
              onTabChange={setCurrentHomeTab}
            />
          }
        />
        <Route path="*" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </DeviceFrame>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
