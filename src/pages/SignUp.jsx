import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
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

export default function SignUp() {
  const navigate = useNavigate();

  // Active view: 'form' | 'tnc' | 'complete-profile' | 'work-profile' | 'profile-badges'
  const [currentView, setCurrentView] = useState('form');

  // Active modal: null | 'email-verification' | 'welcome' | 'confirm-update' | 'update-success'
  const [activeModal, setActiveModal] = useState(null);

  // Form inputs (initialized with clean or filled values matching Figma)
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('INA');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Email OTP inputs (6 boxes)
  const [otpDigits, setOtpDigits] = useState(['0', '0', '0', '0', '0', '0']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Work Profile Form State
  const [firstName, setFirstName] = useState('Tonald');
  const [lastName, setLastName] = useState('Drump');
  const [dob, setDob] = useState('10 December 1997');
  const [position, setPosition] = useState('Junior Full Stack Developer');
  const [address, setAddress] = useState('Jl. Sudirman No. 45, Jakarta');

  // Form Submit -> Opens Email Verification Modal
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
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
    setCurrentView('complete-profile');
  };

  const handleExploreAppFirst = () => {
    setActiveModal(null);
    navigate('/home');
  };

  return (
    <div className="figma-signup-container">
      {/* ===================================================================
          1. MAIN SIGN UP REGISTRATION FORM (Figma Frame SignUp)
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
                  <Mail size={16} />
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
                  placeholder="+62 8200 0000 0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {showCountryDropdown && (
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EDEDF8',
                    borderRadius: '12px',
                    padding: '6px',
                    marginTop: '4px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    zIndex: 20
                  }}
                >
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
                      style={{
                        padding: '6px 10px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#1A1D2E',
                        cursor: 'pointer',
                        borderRadius: '6px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
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
                  <User size={16} />
                </div>
                <input
                  type="text"
                  className="signup-input-element"
                  placeholder="Enter Company ID"
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field 4: Password */}
            <div className="signup-input-row">
              <label className="signup-label">Password</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <Lock size={16} />
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
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Field 5: Confirm Password */}
            <div className="signup-input-row">
              <label className="signup-label">Confirm Password</label>
              <div className="signup-input-field">
                <div className="signup-field-icon">
                  <Lock size={16} />
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
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Checkbox: I agree with terms & conditions and privacy policy */}
            <div className="signup-agreement-row">
              <div
                className={`signup-checkbox ${agreedToTerms ? 'checked' : ''}`}
                onClick={() => setAgreedToTerms(!agreedToTerms)}
              >
                {agreedToTerms && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
              </div>
              <div>
                <span>I agree with </span>
                <button
                  type="button"
                  className="signup-terms-link"
                  onClick={() => setCurrentView('tnc')}
                >
                  terms &amp; conditions and privacy policy
                </button>
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
              Sign In Here
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          2. TERMS & CONDITIONS AND PRIVACY POLICY VIEW (Figma Frame SignUp/TnC & PP)
          =================================================================== */}
      {currentView === 'tnc' && (
        <div className="tnc-screen-container">
          <h2 className="tnc-title">Terms &amp; Conditions and Privacy Policy</h2>

          <div className="tnc-scroll-card">
            <div className="tnc-heading">Terms and Conditions:</div>
            <p>
              <strong>Acceptance:</strong> By using the Workmate app, you agree to comply with all applicable terms and conditions.
            </p>
            <p>
              <strong>Usage:</strong> This app is for personal use only and may not be used for commercial purposes without permission.
            </p>
            <p>
              <strong>Account:</strong> You are responsible for the security of your account and all activities that occur under it.
            </p>
            <p>
              <strong>Content:</strong> You must not upload content that violates copyright, privacy, or applicable laws.
            </p>
            <p>
              <strong>Changes:</strong> We reserve the right to change the terms and conditions at any time and will notify you of these changes through the app or email.
            </p>

            <div className="tnc-heading">Privacy Policy:</div>
            <p>
              <strong>Data Collection:</strong> We collect personal data such as name, email, and location to process transactions and improve our services.
            </p>
            <p>
              <strong>Data Usage:</strong> Your data is used for internal purposes such as account management, usage analytics, and service offerings.
            </p>
            <p>
              <strong>Security:</strong> We protect your data with appropriate security measures to prevent unauthorized access.
            </p>
            <p>
              <strong>Data Sharing:</strong> We do not share your personal data with third parties without your consent except as required by law.
            </p>
            <p>
              <strong>Your Rights:</strong> You can access, update, or delete your personal data.
            </p>
          </div>

          <button
            type="button"
            className="signup-btn-primary"
            onClick={() => {
              setAgreedToTerms(true);
              setCurrentView('form');
            }}
          >
            I Agree
          </button>

          <button
            type="button"
            className="signup-btn-secondary"
            onClick={() => {
              setCurrentView('form');
            }}
          >
            Decline
          </button>
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
              onClick={() => setCurrentView('form')}
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
                <span role="img" aria-label="profile">👧</span>
              </div>
            )}

            <div className="profile-name-row">
              <span className="profile-user-name">Tonald Drump</span>
              <div style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Check size={9} strokeWidth={3} color="#FFFFFF" />
              </div>
            </div>

            <span className="profile-role-text">
              {currentView === 'profile-badges' ? 'Junior Full Stack Developer' : 'Tonald@work.com'}
            </span>

            {/* Achievements Section when badges unlocked */}
            {currentView === 'profile-badges' && (
              <div className="profile-achievements-box">
                <span className="profile-achievements-title">Achievements</span>
                <div className="profile-badges-row">
                  {[
                    { name: 'Probation Slayer', color: '#10B981', icon: '💎' },
                    { name: 'Junior Of The Month', color: '#6366F1', icon: '⭐' },
                    { name: 'Employee Of The Year', color: '#F59E0B', icon: '✨' },
                    { name: 'Top Performer', color: '#EC4899', icon: '👑' }
                  ].map((b, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '56px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: `${b.color}18`,
                          border: `1.5px solid ${b.color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '13px',
                          transform: 'rotate(45deg)',
                          marginBottom: '6px'
                        }}
                      >
                        <span style={{ transform: 'rotate(-45deg)' }}>{b.icon}</span>
                      </div>
                      <span style={{ fontSize: '7.5px', fontWeight: '700', color: '#4A4E69', lineHeight: '1.2' }}>
                        {b.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Account Section */}
          <div className="profile-section-title">Account</div>
          <div className="profile-menu-card">
            <div
              className="profile-menu-item"
              onClick={() => setCurrentView('work-profile')}
            >
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <User size={15} />
                </div>
                <span className="profile-menu-label">My Work Profile</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Office Assets clicked')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Briefcase size={15} />
                </div>
                <span className="profile-menu-label">Office Assets</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Payroll & Tax clicked')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Receipt size={15} />
                </div>
                <span className="profile-menu-label">Payroll &amp; Tax</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Roles clicked')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Shield size={15} />
                </div>
                <span className="profile-menu-label">Roles</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>
          </div>

          {/* Settings Section */}
          <div className="profile-section-title">Settings</div>
          <div className="profile-menu-card">
            <div className="profile-menu-item" onClick={() => navigate('/forgot-password')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Key size={15} />
                </div>
                <span className="profile-menu-label">Change Password</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('Version: Workmate Mobile v2.4')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <Info size={15} />
                </div>
                <span className="profile-menu-label">Versioning</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => alert('FAQ and Help Center')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon">
                  <HelpCircle size={15} />
                </div>
                <span className="profile-menu-label">FAQ and Help</span>
              </div>
              <ChevronRight size={16} color="#A0A5BD" />
            </div>

            <div className="profile-menu-item" onClick={() => navigate('/signin')}>
              <div className="profile-menu-left">
                <div className="profile-menu-icon" style={{ background: '#FFF1F2', color: '#F43F5E' }}>
                  <LogOut size={15} />
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
              onClick={() => setCurrentView('complete-profile')}
            >
              <ArrowLeft size={18} />
            </button>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#1A1D2E', margin: 0 }}>
              My Work Profile
            </h2>
            <div style={{ width: '20px' }} />
          </div>

          <div className="work-profile-body">
            <h3 style={{ fontSize: '13.5px', fontWeight: '800', color: '#1A1D2E', marginBottom: '2px' }}>
              Personal Data Information
            </h3>
            <p style={{ fontSize: '11px', color: '#8F95B2', marginBottom: '16px' }}>
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
                  <Camera size={11} />
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
                  <User size={16} />
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
                  <User size={16} />
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
                  <Calendar size={16} />
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
                  <Briefcase size={16} />
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
              <Mail size={26} strokeWidth={2.4} />
            </div>

            <h2 className="signup-modal-title">Email Verification Sent!</h2>

            <p className="signup-modal-desc">
              A verification code will be sent to the email{' '}
              <strong style={{ color: '#1A1D2E' }}>Hello@work.com</strong> for your account verification process.
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
              Haven't received the verification code?
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
              <Shield size={26} strokeWidth={2.4} />
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
              <User size={26} strokeWidth={2.4} />
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
              <User size={26} strokeWidth={2.4} />
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
                setCurrentView('profile-badges');
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
