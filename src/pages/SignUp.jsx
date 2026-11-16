import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Mail,
  Eye,
  EyeOff,
  User,
  Shield,
  Briefcase,
  Receipt,
  Key,
  Info,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  Camera,
  Check,
  Calendar
} from 'lucide-react';
import { currentUser } from '../data/mockData';
import '../styles/signup.css';

// Exact Figma Biometric Scanner Icon (Corner scanning brackets with biometric lines)
function BiometricScanIcon({ size = 18, color = '#7146FD' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M4 8V5a1 1 0 0 1 1-1h3" />
      <path d="M16 4h3a1 1 0 0 1 1 1v3" />
      <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M12 8a3.5 3.5 0 0 0-3 3.5c0 1.8 1.2 3.2 2.5 4" />
      <path d="M15 11.5a3 3 0 0 0-3-3" />
      <path d="M12 11.5v3" />
    </svg>
  );
}

// Exact Figma Company ID Card Icon
function CompanyIdIcon({ size = 18, color = '#7146FD' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <circle cx="8.5" cy="12" r="2" />
      <line x1="13" y1="11" x2="18" y2="11" />
      <line x1="13" y1="14" x2="16" y2="14" />
    </svg>
  );
}

// Exact Figma 3D Hexagonal Achievement Badge
function HexagonBadge({ color, icon, name }) {
  return (
    <div className="achievement-badge-col">
      <div className="achievement-badge-hex-wrap" style={{ filter: `drop-shadow(0 4px 10px ${color}45)` }}>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none">
          {/* Main Hexagon Body */}
          <polygon
            points="22,2 42,13.5 42,36.5 22,46 2,36.5 2,13.5"
            fill={color}
          />
          {/* Top/Inner Highlight Facet */}
          <polygon
            points="22,5 39,14.5 39,34 22,43 5,34 5,14.5"
            fill="#FFFFFF"
            opacity="0.22"
          />
          {/* Specular Glint Top Corner */}
          <polygon
            points="22,5 30,9.5 22,14 14,9.5"
            fill="#FFFFFF"
            opacity="0.35"
          />
        </svg>
        <span className="achievement-badge-center-icon">{icon}</span>
      </div>
      <span className="achievement-badge-caption">{name}</span>
    </div>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to determine initial view from route
  const getViewFromPath = () => {
    const p = location.pathname.toLowerCase();
    if (p.includes('work-profile')) return 'work-profile';
    if (p.includes('badges')) return 'profile-badges';
    if (p.includes('profile')) return 'complete-profile';
    return 'form';
  };

  // Active view: 'form' | 'complete-profile' | 'work-profile' | 'profile-badges'
  const [currentView, setCurrentView] = useState(getViewFromPath);

  // Active modal: null | 'tnc' | 'email-verification' | 'welcome' | 'confirm-update' | 'update-success'
  const [activeModal, setActiveModal] = useState(() => {
    if (location.pathname.toLowerCase().includes('tnc')) return 'tnc';
    return null;
  });

  // Sync route if location changes
  useEffect(() => {
    const p = location.pathname.toLowerCase();
    if (p.includes('tnc')) {
      setActiveModal('tnc');
    }
    setCurrentView(getViewFromPath());
  }, [location.pathname]);

  // Form inputs (Pre-filled matching Figma SignUp/Filled frame)
  const [email, setEmail] = useState('Tonald@work.com');
  const [phoneCode, setPhoneCode] = useState('INA');
  const [phoneNumber, setPhoneNumber] = useState('+62 82150005000');
  const [companyId, setCompanyId] = useState('1015015');
  const [password, setPassword] = useState('password123');
  const [confirmPassword, setConfirmPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Email OTP inputs (6 boxes pre-filled with '0' as in Figma SignUp/EmailVerification/Filled)
  const [otpDigits, setOtpDigits] = useState(['0', '0', '0', '0', '0', '0']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Work Profile Form State (Pre-filled matching Figma SignUp/WorkProfileFilled)
  const [firstName, setFirstName] = useState('Tonald');
  const [lastName, setLastName] = useState('Drump');
  const [dob, setDob] = useState('10 December 1997');
  const [position, setPosition] = useState('Junior Full Stack Developer');
  const [address, setAddress] = useState('Your current domicile');

  // Navigate to internal views
  const switchView = (viewName) => {
    setCurrentView(viewName);
    if (viewName === 'form') navigate('/signup');
    else if (viewName === 'complete-profile') navigate('/signup/profile');
    else if (viewName === 'work-profile') navigate('/signup/work-profile');
    else if (viewName === 'profile-badges') navigate('/signup/badges');
  };

  // Open Terms & Conditions Modal
  const openTncModal = () => {
    setActiveModal('tnc');
  };

  // Agree Terms
  const handleAgreeTnc = () => {
    setAgreedToTerms(true);
    setActiveModal(null);
    if (location.pathname.toLowerCase().includes('tnc')) {
      navigate('/signup');
    }
  };

  // Decline Terms
  const handleDeclineTnc = () => {
    setAgreedToTerms(false);
    setActiveModal(null);
    if (location.pathname.toLowerCase().includes('tnc')) {
      navigate('/signup');
    }
  };

  // Form Submit -> If not agreed yet, prompt TnC modal; otherwise opens Email Verification Modal
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      openTncModal();
      return;
    }
    setActiveModal('email-verification');
  };

  // OTP Change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);
    if (value && index < 5) {
      otpInputRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };

  // OTP Submit -> Opens Welcome To Workmate Modal
  const handleOtpSubmit = () => {
    setActiveModal('welcome');
  };

  // Welcome modal handlers
  const handleSetUpProfile = () => {
    setActiveModal(null);
    switchView('complete-profile');
  };

  const handleExploreAppFirst = () => {
    setActiveModal(null);
    navigate('/home');
  };

  return (
    <div className="figma-signup-container">
      {/* ===================================================================
          1. MAIN SIGN UP REGISTRATION FORM (Figma Frame SignUp / SignUp/Filled / Complete)
          =================================================================== */}
      {currentView === 'form' && (
        <div className="signup-main-content">
          {/* Logo & Brand Header */}
          <div className="signup-brand-header">
            <div className="signup-logo-box">
              {/* Stylized WM Workmate Logo Mark */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M4 6V18M9 6V18M15 6V18M20 6V18" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M4 14L9 18L15 10L20 14" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="signup-brand-title">Work Mate</h1>
            <p className="signup-brand-subtitle">Register Using Your Credentials</p>
          </div>

          <form onSubmit={handleSignUpSubmit}>
            {/* Field 1: Email */}
            <div className="signup-input-row">
              <label className="signup-label">Email</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <Mail size={18} color="#7146FD" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  className="signup-input-element"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field 2: Phone Number with Country Dropdown */}
            <div className="signup-input-row">
              <label className="signup-label">Phone Number</label>
              <div className="signup-input-field">
                <div
                  className="signup-country-selector"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <span className="signup-country-code">{phoneCode}</span>
                  <ChevronDown size={14} color="#8F95B2" />
                </div>

                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="+62 82150005000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {showCountryDropdown && (
                <div className="signup-country-dropdown-menu">
                  {[
                    { code: 'INA', prefix: '+62', name: 'Indonesia' },
                    { code: 'USA', prefix: '+1', name: 'United States' },
                    { code: 'GBR', prefix: '+44', name: 'United Kingdom' },
                    { code: 'IND', prefix: '+91', name: 'India' }
                  ].map((c) => (
                    <div
                      key={c.code}
                      onClick={() => {
                        setPhoneCode(c.code);
                        setPhoneNumber(`${c.prefix} `);
                        setShowCountryDropdown(false);
                      }}
                      className="signup-country-dropdown-item"
                    >
                      <span>{c.name} ({c.code})</span>
                      <span style={{ color: '#7146FD' }}>{c.prefix}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Field 3: Company ID */}
            <div className="signup-input-row">
              <label className="signup-label">Company ID</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <CompanyIdIcon size={18} color="#7146FD" />
                </div>
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="1015015"
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field 4: Password with Biometric Scan Icon */}
            <div className="signup-input-row">
              <label className="signup-label">Password</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <BiometricScanIcon size={18} color="#7146FD" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="signup-input-element"
                  placeholder="My Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="signin-icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} color="#7146FD" /> : <Eye size={18} color="#7146FD" />}
                </button>
              </div>
            </div>

            {/* Field 5: Confirm Password with Biometric Scan Icon */}
            <div className="signup-input-row">
              <label className="signup-label">Confirm Password</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <BiometricScanIcon size={18} color="#7146FD" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="signup-input-element"
                  placeholder="Confirm My Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="signin-icon-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} color="#7146FD" /> : <Eye size={18} color="#7146FD" />}
                </button>
              </div>
            </div>

            {/* Checkbox: I agree with terms & conditions and privacy policy */}
            <div
              className="signup-agreement-row"
              onClick={openTncModal}
              style={{ cursor: 'pointer' }}
            >
              <div
                className={`signup-checkbox ${agreedToTerms ? 'checked' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!agreedToTerms) {
                    openTncModal();
                  } else {
                    setAgreedToTerms(false);
                  }
                }}
              >
                {agreedToTerms && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
              </div>
              <div className="signup-agreement-label">
                <span>I agree with </span>
                <span
                  className="signup-terms-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    openTncModal();
                  }}
                >
                  terms &amp; conditions and privacy policy
                </span>
              </div>
            </div>

            {/* Primary Sign Up Button */}
            <button type="submit" className="signup-btn-primary">
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <div className="signup-footer-text">
            <span>Already have an account?</span>
            <button
              type="button"
              className="signup-footer-link"
              onClick={() => navigate('/signin')}
            >
              Sign in here
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL 0: TERMS & CONDITIONS AND PRIVACY POLICY BOTTOM SHEET
          (Figma Frame SignUp/TnC & PP matching media_1794833713713_28b69416.png)
          =================================================================== */}
      {activeModal === 'tnc' && (
        <div
          className="signup-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleDeclineTnc();
          }}
        >
          <div className="tnc-bottom-modal">
            <h2 className="tnc-title">Terms &amp; Conditions and Privacy Policy</h2>

            <div className="tnc-scroll-card">
              <div className="tnc-heading">Terms and Conditions:</div>
              <p>
                <strong>Acceptance:</strong> By using the Re-Dus app, you agree to comply with all applicable terms and conditions.
              </p>
              <p>
                <strong>Usage:</strong> This app is for personal use only and may not be used for commercial purposes without permission.
              </p>
              <p>
                <strong>Account:</strong> You are responsible for the security of your account and all activities that occur within it.
              </p>
              <p>
                <strong>Content:</strong> You must not upload content that violates copyright, privacy, or applicable laws.
              </p>
              <p>
                <strong>Changes:</strong> We reserve the right to change the terms and conditions at any time and will notify you of these changes through the app or via email.
              </p>

              <div className="tnc-heading">Privacy Policy:</div>
              <p>
                <strong>Data Collection:</strong> We collect personal data such as name, email, and location to process transactions and improve our services.
              </p>
              <p>
                <strong>Data Usage:</strong> Your data is used for internal purposes such as account management, usage analysis, and service offerings.
              </p>
              <p>
                <strong>Security:</strong> We protect your data with appropriate security measures to prevent unauthorized access.
              </p>
              <p>
                <strong>Data Sharing:</strong> We do not share your personal data with third parties without your consent, except as required by law.
              </p>
              <p>
                <strong>Your Rights:</strong> You can access, update, or delete your personal data...
              </p>
            </div>

            <button
              type="button"
              className="signup-btn-primary"
              onClick={handleAgreeTnc}
            >
              I Agree
            </button>

            <button
              type="button"
              className="signup-btn-secondary"
              onClick={handleDeclineTnc}
            >
              Decline
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          3. MY PROFILE VIEW (Figma Frame SignUp/CompleteProfile & Badges)
          =================================================================== */}
      {(currentView === 'complete-profile' || currentView === 'profile-badges') && (
        <div className="profile-screen-container">
          {/* Purple Header */}
          <div className="profile-purple-header">
            <button
              type="button"
              className="profile-back-btn"
              onClick={() => switchView('form')}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className="profile-header-title">My Profile</h2>
            <div style={{ width: '24px' }} />
          </div>

          {/* User Avatar Card */}
          <div className="profile-avatar-card">
            {currentView === 'profile-badges' ? (
              <img
                src={currentUser.avatar}
                alt="Tonald Drump"
                className="profile-avatar-big"
              />
            ) : (
              <div className="profile-avatar-placeholder">
                <svg width="48" height="48" viewBox="0 0 44 44" fill="none">
                  <rect width="44" height="44" rx="14" fill="#EDE9FE" />
                  <circle cx="15" cy="18" r="2.5" fill="#7146FD" />
                  <circle cx="29" cy="18" r="2.5" fill="#7146FD" />
                  <path d="M16 26C18 29.5 26 29.5 28 26" stroke="#7146FD" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="11" cy="24" r="2" fill="#F472B6" opacity="0.6" />
                  <circle cx="33" cy="24" r="2" fill="#F472B6" opacity="0.6" />
                </svg>
              </div>
            )}

            <div className="profile-name-row">
              <span className="profile-user-name">Tonald Drump</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" fill="#3B82F6" />
                <path d="M8.5 12.5L11 15L16 9.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <span className="profile-role-text">
              {currentView === 'profile-badges' ? 'Junior Full Stack Developer' : 'Tonald@work.com'}
            </span>

            {/* Achievements Section when badges unlocked */}
            {currentView === 'profile-badges' && (
              <div className="profile-achievements-box">
                <div className="profile-achievements-header">
                  <span className="profile-achievements-title">Achievement</span>
                  <span className="profile-achievements-sub">Your achievement so far</span>
                </div>
                <div className="profile-badges-row">
                  <HexagonBadge color="#10B981" icon="💎" name="Probation Slayer" />
                  <HexagonBadge color="#6366F1" icon="⭐" name="Rising Junior" />
                  <HexagonBadge color="#F59E0B" icon="✨" name="Employee Of The Month" />
                  <HexagonBadge color="#EC4899" icon="💎" name="Top Performer" />
                  <HexagonBadge color="#EF4444" icon="👑" name="Leader Of The Year" />
                </div>
              </div>
            )}
          </div>

          {/* Account Section */}
          <div className="profile-section-title">ACCOUNT</div>
          <div className="profile-menu-card">
            <div
              className="profile-menu-item"
              onClick={() => switchView('work-profile')}
            >
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <User size={16} />
                </div>
                <span className="profile-menu-label">My Work Profile</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Office Assets: 1x MacBook Pro M3, 1x 4K Monitor, 1x Magic Trackpad')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Briefcase size={16} />
                </div>
                <span className="profile-menu-label">Office Assets</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Payroll & Tax: Next salary payout on 28th Nov.')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Receipt size={16} />
                </div>
                <span className="profile-menu-label">Payroll &amp; Tax</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Role: Full-Stack Developer (Engineering Squad)')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Shield size={16} />
                </div>
                <span className="profile-menu-label">Roles</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>
          </div>

          {/* Settings Section */}
          <div className="profile-section-title">SETTINGS</div>
          <div className="profile-menu-card">
            <div className="profile-menu-item" onClick={() => navigate('/forgot-password')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Key size={16} />
                </div>
                <span className="profile-menu-label">Change Password</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Work Mate v2.4.0 (Build 2026)')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Info size={16} />
                </div>
                <span className="profile-menu-label">Versioning</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Work Mate Help Desk: support@workmate.internal')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <HelpCircle size={16} />
                </div>
                <span className="profile-menu-label">FAQ and Help</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => navigate('/signin')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon" style={{ background: '#FFF1F2', color: '#F43F5E' }}>
                  <LogOut size={16} />
                </div>
                <span className="profile-menu-label" style={{ color: '#F43F5E' }}>Logout</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          4. MY WORK PROFILE FORM (Figma Frame SignUp/WorkProfileEmpty & Filled)
          =================================================================== */}
      {currentView === 'work-profile' && (
        <div className="work-profile-screen">
          <div className="work-profile-header">
            <button
              type="button"
              className="signin-icon-btn"
              onClick={() => switchView('complete-profile')}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 className="work-profile-header-title">
              My Work Profile
            </h2>
            <div style={{ width: '20px' }} />
          </div>

          <div className="work-profile-body">
            <h3 className="work-profile-section-heading">
              Personal Data Information
            </h3>
            <p className="work-profile-section-sub">
              Your personal data information
            </p>

            {/* Photo Upload Container */}
            <div className="photo-upload-container">
              <div className="photo-upload-avatar-wrap">
                <img
                  src={currentUser.avatar}
                  alt="Upload Preview"
                  className="photo-upload-img"
                />
                <div className="photo-upload-badge">
                  <Camera size={11} color="#FFFFFF" />
                </div>
              </div>
              <span className="photo-upload-title">Upload Photo</span>
              <span className="photo-upload-hint">
                Format should be in jpeg, png, and max 500*500px and less than 5MB
              </span>
            </div>

            {/* Form Fields */}
            <div className="signup-input-row">
              <label className="signup-label">First Name</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <User size={18} color="#7146FD" />
                </div>
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="Tonald"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

            <div className="signup-input-row">
              <label className="signup-label">Last Name</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <User size={18} color="#7146FD" />
                </div>
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="Drump"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="signup-input-row">
              <label className="signup-label">Date of Birth</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <Calendar size={18} color="#7146FD" />
                </div>
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="10 December 1997"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <ChevronDown size={14} color="#8F95B2" />
              </div>
            </div>

            <div className="signup-input-row">
              <label className="signup-label">Position</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <Briefcase size={18} color="#7146FD" />
                </div>
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="Junior Full Stack Developer"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <ChevronDown size={14} color="#8F95B2" />
              </div>
            </div>

            <div className="signup-input-row" style={{ marginBottom: '24px' }}>
              <label className="signup-label">Address</label>
              <div className="signup-input-field">
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="Your current domicile"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Update Profile Button */}
            <button
              type="button"
              className="signup-btn-primary"
              onClick={() => setActiveModal('confirm-update')}
            >
              Update Profile
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL 1: EMAIL VERIFICATION SENT (Figma Frame SignUp/EmailVerification)
          =================================================================== */}
      {activeModal === 'email-verification' && (
        <div className="signup-modal-backdrop">
          <div className="signup-bottom-modal">
            <div className="signup-floating-badge">
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={26} strokeWidth={2.4} color="#FFFFFF" />
                <span className="email-badge-dot" />
              </div>
            </div>

            <h2 className="signup-modal-title">Email Verification Sent!</h2>

            <p className="signup-modal-desc">
              A verification code will be sent to the email{' '}
              <strong style={{ color: '#1A1D2E' }}>{email || 'Hello@work.com'}</strong> for your account verification process.
            </p>

            {/* 6 OTP Boxes */}
            <div className="phone-otp-boxes-row">
              {otpDigits.map((digit, i) => (
                <input
                  key={i}
                  ref={otpInputRefs[i]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="phone-otp-box"
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                />
              ))}
            </div>

            <div className="phone-otp-resend-prompt">
              Haven't received the verification code?{' '}
              <button
                type="button"
                className="phone-otp-resend-btn"
                onClick={() => alert('New verification code sent!')}
              >
                Resend it.
              </button>
            </div>

            <button
              type="button"
              className="signup-btn-primary"
              onClick={handleOtpSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL 2: WELCOME TO WORK MATE (Figma Frame SignUp/Success)
          =================================================================== */}
      {activeModal === 'welcome' && (
        <div className="signup-modal-backdrop">
          <div className="signup-bottom-modal">
            <div className="signup-floating-badge">
              <User size={26} strokeWidth={2.4} color="#FFFFFF" />
            </div>

            <h2 className="signup-modal-title">Welcome To Work Mate!</h2>

            <p className="signup-modal-desc">
              To enhance your user experience, please set up your profile first. This will help us tailor the app to your needs and ensure you get the most out of our features!
            </p>

            <button
              type="button"
              className="signup-btn-primary"
              onClick={handleSetUpProfile}
            >
              Set Up My Profile
            </button>

            <button
              type="button"
              className="signup-btn-secondary"
              onClick={handleExploreAppFirst}
            >
              Explore The App First
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL 3: CONFIRM UPDATE PROFILE (Figma Frame SignUp/WorkProfileUpdate)
          =================================================================== */}
      {activeModal === 'confirm-update' && (
        <div className="signup-modal-backdrop">
          <div className="signup-bottom-modal">
            <div className="signup-floating-badge">
              <User size={26} strokeWidth={2.4} color="#FFFFFF" />
            </div>

            <h2 className="signup-modal-title">Update Profile</h2>

            <p className="signup-modal-desc">
              Are you sure you want to update your profile? This will help us improve your experience and provide personalized features.
            </p>

            <button
              type="button"
              className="signup-btn-primary"
              onClick={() => setActiveModal('update-success')}
            >
              Yes, Update Profile
            </button>

            <button
              type="button"
              className="signup-btn-secondary"
              onClick={() => setActiveModal(null)}
            >
              No, Let me check
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          MODAL 4: PROFILE UPDATED SUCCESS (Figma Frame SignUp/WorkProfileUpdated)
          =================================================================== */}
      {activeModal === 'update-success' && (
        <div className="signup-modal-backdrop">
          <div className="signup-bottom-modal">
            <div className="signup-floating-badge">
              <User size={26} strokeWidth={2.4} color="#FFFFFF" />
            </div>

            <h2 className="signup-modal-title">Profile Updated!</h2>

            <p className="signup-modal-desc">
              Your profile has been successfully updated. We're excited to see you take this step!
            </p>

            <button
              type="button"
              className="signup-btn-primary"
              onClick={() => {
                setActiveModal(null);
                switchView('profile-badges');
              }}
            >
              Visit My Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
