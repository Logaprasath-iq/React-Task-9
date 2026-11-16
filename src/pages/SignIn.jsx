import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Eye,
  EyeOff,
  User,
  Phone,
  Fingerprint,
  AlertCircle,
  Check,
  ChevronDown,
  ArrowUp,
  Delete,
  Smile,
  Mic
} from 'lucide-react';
import OnboardingIllustration from '../components/onboarding/OnboardingIllustration';
import '../styles/auth.css';

// Exact Figma Biometric Scanner Icon (Corner brackets with biometric lines)
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
      {/* 4 corner scanning brackets matching Figma 1:1 */}
      <path d="M4 8V5a1 1 0 0 1 1-1h3" />
      <path d="M16 4h3a1 1 0 0 1 1 1v3" />
      <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
      <path d="M8 20H5a1 1 0 0 1-1-1v-3" />
      {/* Biometric center ridges */}
      <path d="M12 8a3.5 3.5 0 0 0-3 3.5c0 1.8 1.2 3.2 2.5 4" />
      <path d="M15 11.5a3 3 0 0 0-3-3" />
      <path d="M12 11.5v3" />
    </svg>
  );
}

// iOS Virtual Keyboard matching Figma "Fill the data" Screen
function VirtualIOSKeyboard({ onKeyPress, onReturn }) {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div className="ios-virtual-keyboard">
      {/* Row 1 */}
      <div className="keyboard-row">
        {row1.map((k) => (
          <button key={k} type="button" className="keyboard-key" onClick={() => onKeyPress(k)}>
            {k}
          </button>
        ))}
      </div>

      {/* Row 2 */}
      <div className="keyboard-row">
        {row2.map((k) => (
          <button key={k} type="button" className="keyboard-key" onClick={() => onKeyPress(k)}>
            {k}
          </button>
        ))}
      </div>

      {/* Row 3 */}
      <div className="keyboard-row">
        <button type="button" className="keyboard-key special" aria-label="Shift">
          <ArrowUp size={15} strokeWidth={2.4} />
        </button>
        {row3.map((k) => (
          <button key={k} type="button" className="keyboard-key" onClick={() => onKeyPress(k)}>
            {k}
          </button>
        ))}
        <button type="button" className="keyboard-key special" onClick={() => onKeyPress('BACK')} aria-label="Backspace">
          <Delete size={15} strokeWidth={2} />
        </button>
      </div>

      {/* Row 4 */}
      <div className="keyboard-row">
        <button type="button" className="keyboard-key special" style={{ minWidth: '40px' }}>
          123
        </button>
        <button type="button" className="keyboard-key space-key" onClick={() => onKeyPress(' ')}>
          space
        </button>
        <button type="button" className="keyboard-key action-return" onClick={onReturn}>
          return
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="keyboard-bottom-controls">
        <Smile size={19} />
        <Mic size={19} />
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="keyboard-home-bar" />
    </div>
  );
}

export default function SignIn() {
  const navigate = useNavigate();

  // Active method: 'email' | 'phone' | 'phone-otp' | 'employee'
  const [activeMethod, setActiveMethod] = useState('email');

  // Error state: 'none' | 'email-not-registered' | 'wrong-password'
  const [errorState, setErrorState] = useState('none');

  // Keyboard open state for "Fill the data" preview
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Email form state (Pre-filled matching Figma "Hide Password" screen by default)
  const [email, setEmail] = useState('Tonald@work.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Phone form state
  const [phoneCode, setPhoneCode] = useState('INA');
  const [phoneNumber, setPhoneNumber] = useState('+62 821 0000 0000');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Phone OTP state
  const [otpDigits, setOtpDigits] = useState(['1', '2', '3', '4', '5', '6']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Employee ID form state
  const [employeeId, setEmployeeId] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [showEmployeePassword, setShowEmployeePassword] = useState(false);

  // Helper to switch between exact Figma flow screens shown in user screenshots
  const applyFigmaState = (stateKey) => {
    setActiveMethod('email');
    if (stateKey === 'fill-data') {
      setEmail('Tonald@Wo');
      setPassword('');
      setIsKeyboardOpen(true);
      setErrorState('none');
    } else if (stateKey === 'hide-password') {
      setEmail('Tonald@work.com');
      setPassword('password123');
      setShowPassword(false);
      setIsKeyboardOpen(false);
      setErrorState('none');
    } else if (stateKey === 'email-error') {
      setEmail('Hello@work.com');
      setPassword('password123');
      setIsKeyboardOpen(false);
      setErrorState('email-not-registered');
    } else if (stateKey === 'pass-error') {
      setEmail('Hello@work.com');
      setPassword('password123');
      setIsKeyboardOpen(false);
      setErrorState('wrong-password');
    }
  };

  // Virtual keyboard key press handler
  const handleVirtualKeyPress = (char) => {
    if (char === 'BACK') {
      setEmail((prev) => prev.slice(0, -1));
    } else {
      setEmail((prev) => prev + char);
    }
  };

  // Handle Email Form Submit -> Figma "Sign In Success" -> Home
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (errorState === 'email-not-registered' || email.toLowerCase().includes('wrong') || email.toLowerCase().includes('notreg')) {
      setErrorState('email-not-registered');
      return;
    }
    if (errorState === 'wrong-password' || password === 'wrong') {
      setErrorState('wrong-password');
      return;
    }
    // Success -> Navigate to Home matching Figma "Sign In Success"
    navigate('/home');
  };

  // Handle Phone Form Submit -> Opens OTP Sheet
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setActiveMethod('phone-otp');
  };

  // Handle OTP digit change with auto-advance
  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    if (value && index < 5) {
      otpInputRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs[index - 1].current?.focus();
    }
  };

  // Handle Employee Submit
  const handleEmployeeSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="signin-backdrop-screen">
      {/* Dimmed Background 3D Cards Graphic matching Figma */}
      <div className="signin-backdrop-graphic">
        <OnboardingIllustration step={1} />
      </div>

      {/* ===================================================================
          1. METHOD: EMAIL SIGN IN (Figma Row 1 & 2)
          =================================================================== */}
      {activeMethod === 'email' && (
        <div className={`signin-bottom-sheet ${isKeyboardOpen ? 'keyboard-open' : ''}`}>
          <div className="signin-sheet-header">
            <h1 className="signin-sheet-title">Sign In</h1>
            <p className="signin-sheet-subtitle">Sign in to my account</p>
          </div>

          <form onSubmit={handleEmailSubmit}>
            {/* Email Field */}
            <div className="signin-field-group">
              <label className="signin-field-label">Email</label>
              <div
                className={`signin-input-box ${
                  errorState === 'email-not-registered'
                    ? 'error'
                    : isKeyboardOpen || email === 'Tonald@Wo'
                    ? 'focused'
                    : ''
                }`}
              >
                <div className="signin-input-icon">
                  <Mail
                    size={18}
                    color={errorState === 'email-not-registered' ? '#FF6B72' : '#7146FD'}
                  />
                </div>
                <input
                  type="text"
                  className="signin-input-control"
                  placeholder="My Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorState === 'email-not-registered') setErrorState('none');
                  }}
                  onFocus={() => {
                    if (errorState === 'email-not-registered') setErrorState('none');
                  }}
                />
                {errorState === 'email-not-registered' && (
                  <AlertCircle size={18} color="#FF6B72" style={{ flexShrink: 0 }} />
                )}
              </div>
              {errorState === 'email-not-registered' && (
                <div className="signin-error-message">
                  Email doesn't registered to any account
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="signin-field-group">
              <label className="signin-field-label">Password</label>
              <div className={`signin-input-box ${errorState === 'wrong-password' ? 'error' : ''}`}>
                <div className="signin-input-icon">
                  <BiometricScanIcon
                    size={18}
                    color={errorState === 'wrong-password' ? '#FF6B72' : '#7146FD'}
                  />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="signin-input-control"
                  placeholder="My Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorState === 'wrong-password') setErrorState('none');
                  }}
                />
                <button
                  type="button"
                  className="signin-icon-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <Eye size={18} color="#7146FD" />
                  ) : (
                    <EyeOff size={18} color="#7146FD" />
                  )}
                </button>
              </div>
              {errorState === 'wrong-password' && (
                <div className="signin-error-message">Wrong Password</div>
              )}
            </div>

            {/* Remember Me & Forgot Password Row */}
            <div className="signin-options-row">
              <label className="signin-remember-label" onClick={() => setRememberMe(!rememberMe)}>
                <div className={`signin-custom-checkbox ${rememberMe ? 'checked' : ''}`}>
                  {rememberMe && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
                </div>
                <span>Remember Me</span>
              </label>

              <button
                type="button"
                className="signin-forgot-link"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password
              </button>
            </div>

            {/* Primary Sign In Button */}
            <button type="submit" className="signin-primary-btn">
              Sign In
            </button>
          </form>

          {/* Virtual iOS Keyboard (Shown when in "Fill the data" state) */}
          {isKeyboardOpen ? (
            <VirtualIOSKeyboard
              onKeyPress={handleVirtualKeyPress}
              onReturn={() => {
                setIsKeyboardOpen(false);
                setPassword('password123');
              }}
            />
          ) : (
            <>
              {/* OR Divider */}
              <div className="signin-divider">
                <span>OR</span>
              </div>

              {/* Alternate Method 1: Sign in with Employee ID */}
              <button
                type="button"
                className="signin-alt-btn"
                onClick={() => {
                  setActiveMethod('employee');
                  setErrorState('none');
                }}
              >
                <User size={16} color="#7146FD" />
                <span>Sign in With Employee ID</span>
              </button>

              {/* Alternate Method 2: Sign in with Phone */}
              <button
                type="button"
                className="signin-alt-btn"
                onClick={() => {
                  setActiveMethod('phone');
                  setErrorState('none');
                }}
              >
                <Phone size={16} color="#7146FD" />
                <span>Sign in With Phone</span>
              </button>

              {/* Footer Link */}
              <div className="signin-footer">
                <span>Don't have an account?</span>
                <button
                  type="button"
                  className="signin-footer-link"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up Here
                </button>
              </div>
            </>
          )}

          {/* Discreet Figma Flow Navigator Pills (Directly matching Figma frames) */}
          <div className="figma-flow-switcher">
            <button
              type="button"
              className={`figma-flow-pill ${isKeyboardOpen ? 'active' : ''}`}
              onClick={() => applyFigmaState('fill-data')}
              title="Show typing state with iOS keyboard"
            >
              Fill the data
            </button>
            <button
              type="button"
              className={`figma-flow-pill ${!isKeyboardOpen && errorState === 'none' ? 'active' : ''}`}
              onClick={() => applyFigmaState('hide-password')}
              title="Normal filled state with hidden password"
            >
              Hide Password
            </button>
            <button
              type="button"
              className={`figma-flow-pill ${errorState === 'email-not-registered' ? 'active' : ''}`}
              onClick={() => applyFigmaState('email-error')}
              title="Email Not Registered Error"
            >
              Email Not Registered
            </button>
            <button
              type="button"
              className={`figma-flow-pill ${errorState === 'wrong-password' ? 'active' : ''}`}
              onClick={() => applyFigmaState('pass-error')}
              title="Wrong Password Error"
            >
              Wrong Password
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          2. METHOD: PHONE SIGN IN (Figma Sign In Phone Number)
          =================================================================== */}
      {activeMethod === 'phone' && (
        <div className="signin-bottom-sheet">
          <div className="signin-sheet-header">
            <h1 className="signin-sheet-title">Sign In</h1>
            <p className="signin-sheet-subtitle">Sign in to my account</p>
          </div>

          <form onSubmit={handlePhoneSubmit}>
            {/* Phone Number Field */}
            <div className="signin-field-group">
              <label className="signin-field-label">Phone Number</label>
              <div className="signin-input-box">
                {/* Country Code Dropdown */}
                <div
                  className="signin-country-selector"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                >
                  <span className="signin-country-code">{phoneCode}</span>
                  <ChevronDown size={14} color="#8F95B2" />
                </div>

                <input
                  type="text"
                  className="signin-input-control"
                  placeholder="+62 821 0000 0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              {/* Country selector dropdown list */}
              {showCountryDropdown && (
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #EDEDF8',
                    borderRadius: '12px',
                    padding: '6px',
                    marginTop: '6px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    zIndex: 10
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

            {/* Options Row */}
            <div className="signin-options-row">
              <label className="signin-remember-label" onClick={() => setRememberMe(!rememberMe)}>
                <div className={`signin-custom-checkbox ${rememberMe ? 'checked' : ''}`}>
                  {rememberMe && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
                </div>
                <span>Remember Me</span>
              </label>

              <button
                type="button"
                className="signin-forgot-link"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password
              </button>
            </div>

            {/* Primary Sign In Button */}
            <button type="submit" className="signin-primary-btn">
              Sign In
            </button>
          </form>

          {/* OR Divider */}
          <div className="signin-divider">
            <span>OR</span>
          </div>

          {/* Alternate 1: Sign in with Employee ID */}
          <button
            type="button"
            className="signin-alt-btn"
            onClick={() => setActiveMethod('employee')}
          >
            <User size={16} />
            <span>Sign in With Employee ID</span>
          </button>

          {/* Alternate 2: Sign in with Email */}
          <button
            type="button"
            className="signin-alt-btn"
            onClick={() => setActiveMethod('email')}
          >
            <Mail size={16} />
            <span>Sign in With Email</span>
          </button>

          {/* Footer */}
          <div className="signin-footer">
            <span>Don't have an account?</span>
            <button
              type="button"
              className="signin-footer-link"
              onClick={() => navigate('/signup')}
            >
              Sign Up Here
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          3. METHOD: PHONE NUMBER OTP SHEET (Figma 1:1 with floating purple badge)
          =================================================================== */}
      {activeMethod === 'phone-otp' && (
        <div className="phone-otp-sheet">
          {/* Floating Purple Phone Icon Badge matching Figma screenshot */}
          <div className="phone-otp-floating-icon">
            <Phone size={26} strokeWidth={2.4} fill="#FFFFFF" />
          </div>

          <h2 className="phone-otp-title">Sign In Phone Number</h2>

          <p className="phone-otp-instruction">
            Sign in code has been sent to{' '}
            <span className="phone-otp-target">+6292121002200</span>
            , check your inbox to continue the sign in process.
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

          {/* Resend Link */}
          <div className="phone-otp-resend-prompt">
            Haven't received the sign in code?
            <button
              type="button"
              className="phone-otp-resend-btn"
              onClick={() => alert('New OTP code resent to +6292121002200')}
            >
              Resend it.
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="signin-primary-btn"
            onClick={() => navigate('/home')}
          >
            Submit
          </button>

          {/* Different Method Link */}
          <div className="phone-otp-diff-method">
            Sign in with different method{' '}
            <button
              type="button"
              className="signin-footer-link"
              onClick={() => setActiveMethod('email')}
            >
              Here.
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          4. METHOD: EMPLOYEE ID SIGN IN (Figma Sign In Employee ID)
          =================================================================== */}
      {activeMethod === 'employee' && (
        <div className="signin-bottom-sheet">
          <div className="signin-sheet-header">
            <h1 className="signin-sheet-title">Sign In</h1>
            <p className="signin-sheet-subtitle">Sign in to my account</p>
          </div>

          <form onSubmit={handleEmployeeSubmit}>
            {/* Employee ID Field */}
            <div className="signin-field-group">
              <label className="signin-field-label">Employee ID</label>
              <div className="signin-input-box">
                <div className="signin-input-icon">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  className="signin-input-control"
                  placeholder="My Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
                <div style={{ color: '#8F95B2' }}>
                  <Fingerprint size={16} />
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="signin-field-group">
              <label className="signin-field-label">Password</label>
              <div className="signin-input-box">
                <div className="signin-input-icon">
                  <Lock size={16} />
                </div>
                <input
                  type={showEmployeePassword ? 'text' : 'password'}
                  className="signin-input-control"
                  placeholder="My Password"
                  value={employeePassword}
                  onChange={(e) => setEmployeePassword(e.target.value)}
                />
                <button
                  type="button"
                  className="signin-icon-btn"
                  onClick={() => setShowEmployeePassword(prev => !prev)}
                  aria-label="Toggle password visibility"
                >
                  {showEmployeePassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Options Row */}
            <div className="signin-options-row">
              <label className="signin-remember-label" onClick={() => setRememberMe(!rememberMe)}>
                <div className={`signin-custom-checkbox ${rememberMe ? 'checked' : ''}`}>
                  {rememberMe && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
                </div>
                <span>Remember Me</span>
              </label>

              <button
                type="button"
                className="signin-forgot-link"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password
              </button>
            </div>

            {/* Primary Sign In Button */}
            <button type="submit" className="signin-primary-btn">
              Sign In
            </button>
          </form>

          {/* OR Divider */}
          <div className="signin-divider">
            <span>OR</span>
          </div>

          {/* Alternate 1: Sign in with Email */}
          <button
            type="button"
            className="signin-alt-btn"
            onClick={() => setActiveMethod('email')}
          >
            <Mail size={16} />
            <span>Sign in With Email</span>
          </button>

          {/* Alternate 2: Sign in with Phone */}
          <button
            type="button"
            className="signin-alt-btn"
            onClick={() => setActiveMethod('phone')}
          >
            <Phone size={16} />
            <span>Sign in With Phone</span>
          </button>

          {/* Footer */}
          <div className="signin-footer">
            <span>Don't have an account?</span>
            <button
              type="button"
              className="signin-footer-link"
              onClick={() => navigate('/signup')}
            >
              Sign Up Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
