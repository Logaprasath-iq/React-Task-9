import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import './styles/global.css';

export default function App() {
  const [isEmptyState, setIsEmptyState] = useState(false);
  const [currentHomeTab, setCurrentHomeTab] = useState('home');

  const toggleEmptyState = () => {
    setIsEmptyState(prev => !prev);
  };

  return (
    <div className="app-container">
      <Router>
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
      </Router>
    </div>
  );
}
