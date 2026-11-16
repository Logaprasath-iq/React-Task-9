import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StatusBar from './components/common/StatusBar';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
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
    location.pathname.startsWith('/signin') ||
    location.pathname.startsWith('/employee') ||
    location.pathname === '/forgot-password' ||
    location.pathname === '/signup/profile' ||
    location.pathname === '/signup/badges' ||
    location.pathname === '/profile';
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
          <Route path="/signin" element={<SignIn initialMethod="email" />} />
          <Route path="/signin/email" element={<SignIn initialMethod="email" />} />
          <Route path="/signin/employee" element={<SignIn initialMethod="employee" />} />
          <Route path="/signin/employee-id" element={<SignIn initialMethod="employee" />} />
          <Route path="/signin/employeeID" element={<SignIn initialMethod="employee" />} />
          <Route path="/signin/phone" element={<SignIn initialMethod="phone" />} />
          <Route path="/signin/phone-otp" element={<SignIn initialMethod="phone-otp" />} />
          <Route path="/employee-id" element={<Navigate to="/signin/employee-id" replace />} />

          {/* Sign Up Flow Routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/tnc" element={<SignUp />} />
          <Route path="/signup/profile" element={<SignUp />} />
          <Route path="/signup/work-profile" element={<SignUp />} />
          <Route path="/signup/badges" element={<SignUp />} />

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
          <Route
            path="/attendant"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="clockin"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/clockin"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="clockin"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="tasks"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/task"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="tasks"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/burnout-stats"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="tasks"
                initialTaskSubScreen="burnout-stats"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/tasks/burnout-stats"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="tasks"
                initialTaskSubScreen="burnout-stats"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/expense"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="expense"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/expenses"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="expense"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/expense/submit"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="expense"
                initialExpenseSubScreen="submit-expense"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/submit-expense"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="expense"
                initialExpenseSubScreen="submit-expense"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/leave"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="leave"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/leaves"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="leave"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/leave/submit"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="leave"
                initialLeaveSubScreen="submit-leave"
                onTabChange={setCurrentHomeTab}
              />
            }
          />
          <Route
            path="/submit-leave"
            element={
              <Home
                isEmptyState={isEmptyState}
                onToggleEmptyState={toggleEmptyState}
                activeTab="leave"
                initialLeaveSubScreen="submit-leave"
                onTabChange={setCurrentHomeTab}
              />
            }
          />

          {/* Profile Routes matching Figma 1:1 */}
          <Route path="/profile" element={<Profile initialSubScreen="main" />} />
          <Route path="/my-profile" element={<Profile initialSubScreen="main" />} />
          <Route path="/profile/personal-data" element={<Profile initialSubScreen="personal-data" />} />
          <Route path="/profile/office-assets" element={<Profile initialSubScreen="office-assets" />} />
          <Route path="/profile/payroll" element={<Profile initialSubScreen="payroll" />} />
          <Route path="/profile/change-password" element={<Profile initialSubScreen="change-password" />} />

          {/* Messages & Notifications Routes matching Figma 1:1 */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/message" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notification" element={<Notifications />} />

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
