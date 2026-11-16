import React, { useState } from 'react';
import { Smartphone, LayoutGrid, Sparkles, Moon, Sun, ToggleLeft, ToggleRight, X, ExternalLink } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DeviceFrame({ children, isEmptyState, onToggleEmptyState, currentTab, onTabChange }) {
  const [deviceSize, setDeviceSize] = useState('390x844');
  const [isJumpOpen, setIsJumpOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const deviceDimensions = {
    '360x800': { width: 360, height: 800, label: '360 × 800 (Compact Android)' },
    '375x812': { width: 375, height: 812, label: '375 × 812 (iPhone Mini / X)' },
    '390x844': { width: 390, height: 844, label: '390 × 844 (iPhone 14 / 15)' },
    '414x896': { width: 414, height: 896, label: '414 × 896 (iPhone Plus / XR)' },
    '430x932': { width: 430, height: 932, label: '430 × 932 (iPhone Pro Max)' }
  };

  const currentDim = deviceDimensions[deviceSize] || deviceDimensions['390x844'];

  const quickJump = (path, tab = null) => {
    navigate(path);
    if (tab && onTabChange) {
      onTabChange(tab);
    }
    setIsJumpOpen(false);
  };

  return (
    <div className="app-viewport-wrapper">
      {/* Top Desktop Controls Toolbar */}
      <header className="dev-toolbar">
        <div className="dev-toolbar-left">
          <div className="dev-brand-badge">
            <Sparkles size={14} />
            <span>WORKMATE MOBILE</span>
          </div>
          <span style={{ fontSize: '11px', color: '#B2B7D0', fontWeight: '500' }}>
            Figma HR & Task Management
          </span>
        </div>

        <div className="dev-toolbar-center">
          {/* Device Dimension Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Smartphone size={14} color="#9C8CFF" />
            <select
              className="dev-select"
              value={deviceSize}
              onChange={(e) => setDeviceSize(e.target.value)}
              aria-label="Select Device Size"
            >
              {Object.entries(deviceDimensions).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.label}
                </option>
              ))}
            </select>
          </div>

          {/* Figma State Toggle: Populated vs Empty State */}
          <button
            type="button"
            className={`dev-toggle-btn ${isEmptyState ? 'active' : ''}`}
            onClick={onToggleEmptyState}
            title="Toggle between Figma Row 1 (Populated) and Figma Row 2 (Empty States)"
          >
            {isEmptyState ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
            <span>{isEmptyState ? 'Figma Empty State: ON' : 'Figma Normal State'}</span>
          </button>
        </div>

        <div>
          {/* Quick Screen Jump Drawer Trigger */}
          <button
            type="button"
            className="dev-jump-btn"
            onClick={() => setIsJumpOpen(true)}
          >
            <LayoutGrid size={14} />
            <span>All Screens ({location.pathname})</span>
          </button>
        </div>
      </header>

      {/* Realistic Mobile Device Frame */}
      <div
        className="device-shell"
        style={{
          width: `${currentDim.width}px`,
          height: `${currentDim.height}px`
        }}
      >
        <div className="phone-viewport">
          {/* Dynamic Island / Camera Notch */}
          <div className="phone-notch-container">
            <div className="dynamic-island">
              <div className="camera-lens" />
            </div>
          </div>

          {/* Status Bar */}
          <div className={`phone-status-bar ${location.pathname === '/onboarding' ? 'white-text' : ''}`}>
            <span>09:41</span>
            <div className="status-bar-icons">
              <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
                <rect x="0" y="7" width="2" height="4" rx="0.5" />
                <rect x="4" y="5" width="2" height="6" rx="0.5" />
                <rect x="8" y="2.5" width="2" height="8.5" rx="0.5" />
                <rect x="12" y="0" width="2" height="11" rx="0.5" />
              </svg>
              <svg width="14" height="11" viewBox="0 0 14 11" fill="currentColor">
                <path d="M7 10C8.1 10 9 9.1 9 8C9 6.9 8.1 6 7 6C5.9 6 5 6.9 5 8C5 9.1 5.9 10 7 10ZM7 0C2.6 0 0 3 0 3L7 11L14 3C14 3 11.4 0 7 0Z" />
              </svg>
              <svg width="22" height="11" viewBox="0 0 22 11" fill="currentColor">
                <rect x="1" y="1" width="18" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <rect x="3" y="3" width="12" height="5" rx="1" />
                <path d="M20 4V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Screen Scroll View */}
          <div className="screen-scroll-container">
            {children}
          </div>

          {/* Home Touch Indicator */}
          <div className={`phone-home-indicator ${location.pathname === '/onboarding' ? 'light' : ''}`} />
        </div>
      </div>

      {/* Screen Jump Drawer Modal */}
      {isJumpOpen && (
        <div className="jump-drawer-overlay" onClick={() => setIsJumpOpen(false)}>
          <div className="jump-drawer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="jump-drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LayoutGrid size={18} color="var(--primary-purple)" />
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Screen Navigation Explorer</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsJumpOpen(false)}
                style={{ color: '#FFFFFF', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Onboarding Flow */}
            <div className="jump-section-title">1. Onboarding Screens</div>
            <div className="jump-grid">
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/onboarding' ? 'active' : ''}`}
                onClick={() => quickJump('/onboarding')}
              >
                <span>4-Step Onboarding</span>
              </button>
            </div>

            {/* Authentication */}
            <div className="jump-section-title">2. Authentication Methods</div>
            <div className="jump-grid">
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/signin' ? 'active' : ''}`}
                onClick={() => quickJump('/signin')}
              >
                <span>Email Login</span>
              </button>
              <button
                type="button"
                className="jump-item-btn"
                onClick={() => quickJump('/signin')}
              >
                <span>Phone / OTP Login</span>
              </button>
              <button
                type="button"
                className="jump-item-btn"
                onClick={() => quickJump('/signin')}
              >
                <span>Employee ID Login</span>
              </button>
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/signup' ? 'active' : ''}`}
                onClick={() => quickJump('/signup')}
              >
                <span>5-Step Registration</span>
              </button>
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/forgot-password' ? 'active' : ''}`}
                onClick={() => quickJump('/forgot-password')}
              >
                <span>Forgot Password Flow</span>
              </button>
            </div>

            {/* Home Connected Screens */}
            <div className="jump-section-title">3. Home & Connected HR Screens</div>
            <div className="jump-grid">
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/home' && currentTab === 'home' ? 'active' : ''}`}
                onClick={() => quickJump('/home', 'home')}
              >
                <span>Home Dashboard</span>
              </button>
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/home' && currentTab === 'clockin' ? 'active' : ''}`}
                onClick={() => quickJump('/home', 'clockin')}
              >
                <span>Clock In / Attendance</span>
              </button>
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/home' && currentTab === 'tasks' ? 'active' : ''}`}
                onClick={() => quickJump('/home', 'tasks')}
              >
                <span>Challenges & Tasks</span>
              </button>
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/home' && currentTab === 'expense' ? 'active' : ''}`}
                onClick={() => quickJump('/home', 'expense')}
              >
                <span>Expense Summary</span>
              </button>
              <button
                type="button"
                className={`jump-item-btn ${location.pathname === '/home' && currentTab === 'leave' ? 'active' : ''}`}
                onClick={() => quickJump('/home', 'leave')}
              >
                <span>Leave Summary</span>
              </button>
            </div>

            {/* Figma Empty States */}
            <div className="jump-section-title">4. Figma Empty State Variations</div>
            <div style={{ background: 'rgba(255, 138, 0, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(255, 138, 0, 0.3)' }}>
              <p style={{ fontSize: '12px', color: '#FFE0B2', marginBottom: '8px' }}>
                Reproducing Figma Row 2: "No Activity Available", "No Working Time", "No Task Assigned", "No Expense Submitted", "No Leave Submitted".
              </p>
              <button
                type="button"
                className="dev-toggle-btn active"
                onClick={() => {
                  onToggleEmptyState();
                  setIsJumpOpen(false);
                }}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Toggle Empty State Mode ({isEmptyState ? 'Currently Empty' : 'Currently Populated'})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
