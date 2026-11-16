import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Fingerprint,
  Eye,
  EyeOff
} from 'lucide-react';
import OnboardingIllustration from '../components/onboarding/OnboardingIllustration';
import '../styles/forgotPassword.css';

// Exact White Shield with Purple Keyhole icon matching Figma screenshot
function ShieldKeyholeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L4 5.2V11.2C4 16.8 7.4 21.2 12 22.2C16.6 21.2 20 16.8 20 11.2V5.2L12 2Z"
        fill="#FFFFFF"
      />
      {/* Keyhole inside */}
      <circle cx="12" cy="10.2" r="2.2" fill="#7146FD" />
      <path d="M10.8 11.8L10.2 15.8H13.8L13.2 11.8Z" fill="#7146FD" />
    </svg>
  );
}

export default function ForgotPassword() {
  const navigate = useNavigate();

  // Active step: 'email-input' | 'otp' | 'new-password' | 'success'
  const [currentStep, setCurrentStep] = useState('email-input');

  // Email state
  const [email, setEmail] = useState('');

  // 6 OTP Digits (initialized with '1', '2', '3', '1', '2', '3' matching Figma screenshot 2)
  const [otpDigits, setOtpDigits] = useState(['1', '2', '3', '1', '2', '3']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // New Password state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Preset jumper for testing all Figma frames directly
  const applyPreset = (step) => {
    switch (step) {
      case 'email-empty':
        setCurrentStep('email-input');
        setEmail('');
        break;
      case 'email-filled':
        setCurrentStep('email-input');
        setEmail('Tonald@work.com');
        break;
      case 'otp':
        setCurrentStep('otp');
        setEmail('Tonald@work.com');
        setOtpDigits(['1', '2', '3', '1', '2', '3']);
        break;
      case 'new-password-empty':
        setCurrentStep('new-password');
        setPassword('');
        setConfirmPassword('');
        break;
      case 'new-password-filled':
        setCurrentStep('new-password');
        setPassword('••••••••');
        setConfirmPassword('••••••••');
        break;
      case 'success':
        setCurrentStep('success');
        break;
      default:
        break;
    }
  };

  // Step 1: Send Verification Code
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setCurrentStep('otp');
  };

  // Step 2: Handle OTP input
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

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setCurrentStep('new-password');
  };

  // Step 3: Handle New Password Submit
  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    setCurrentStep('success');
  };

  // Step 4: Final Sign In redirect
  const handleFinalSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="forgot-backdrop-screen">
      {/* Background Dimmed Cards Graphic matching Figma */}
      <div className="forgot-backdrop-graphic">
        <OnboardingIllustration step={1} />
      </div>

      {/* Top Quick Navigation Toolbar for testing all 5 Figma frames */}
      <div className="forgot-frame-toolbar">
        <button
          type="button"
          className={`forgot-frame-pill ${currentStep === 'email-input' && !email ? 'active' : ''}`}
          onClick={() => applyPreset('email-empty')}
        >
          1. Email Empty
        </button>
        <button
          type="button"
          className={`forgot-frame-pill ${currentStep === 'email-input' && email ? 'active' : ''}`}
          onClick={() => applyPreset('email-filled')}
        >
          2. Email Filled
        </button>
        <button
          type="button"
          className={`forgot-frame-pill ${currentStep === 'otp' ? 'active' : ''}`}
          onClick={() => applyPreset('otp')}
        >
          3. OTP Code
        </button>
        <button
          type="button"
          className={`forgot-frame-pill ${currentStep === 'new-password' ? 'active' : ''}`}
          onClick={() => applyPreset('new-password-filled')}
        >
          4. New Password
        </button>
        <button
          type="button"
          className={`forgot-frame-pill ${currentStep === 'success' ? 'active' : ''}`}
          onClick={() => applyPreset('success')}
        >
          5. Success
        </button>
      </div>

      {/* ===================================================================
          STEP 1: FORGOT PASSWORD - ENTER EMAIL (Figma Screenshot 1)
          =================================================================== */}
      {currentStep === 'email-input' && (
        <div className="forgot-bottom-sheet">
          {/* Floating Purple Shield Badge at Top */}
          <div className="forgot-floating-badge">
            <ShieldKeyholeIcon />
          </div>

          <h1 className="forgot-sheet-title">Forgot Password</h1>

          <p className="forgot-sheet-subtitle">
            A verification code will be sent to your email to reset your password.
          </p>

          <form onSubmit={handleEmailSubmit}>
            <div className="forgot-field-group">
              <label className="forgot-field-label">Email</label>
              <div className="forgot-input-box">
                <div className="forgot-input-icon">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  className="forgot-input-control"
                  placeholder="My email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="forgot-primary-btn"
              disabled={!email}
            >
              Send Verification Code
            </button>
          </form>
        </div>
      )}

      {/* ===================================================================
          STEP 2: FORGOT PASSWORD - ENTER OTP CODE (Figma Screenshot 2)
          =================================================================== */}
      {currentStep === 'otp' && (
        <div className="forgot-bottom-sheet">
          <div className="forgot-floating-badge">
            <ShieldKeyholeIcon />
          </div>

          <h1 className="forgot-sheet-title">Forgot Password</h1>

          <p className="forgot-sheet-subtitle">
            A reset code has been sent to{' '}
            <span className="forgot-target-email">{email || 'Tonald@work.com'}</span>
            , check your email to continue the password reset process.
          </p>

          <form onSubmit={handleOtpSubmit}>
            {/* 6 OTP Boxes: 1 2 3 1 2 3 */}
            <div className="forgot-otp-boxes-row">
              {otpDigits.map((digit, i) => (
                <input
                  key={i}
                  ref={otpInputRefs[i]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="forgot-otp-box"
                  value={digit}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(i, e)}
                />
              ))}
            </div>

            <div className="forgot-resend-prompt">
              Haven't received the verification code?
              <button
                type="button"
                className="forgot-resend-btn"
                onClick={() => alert(`New reset code resent to ${email || 'Tonald@work.com'}`)}
              >
                Resend it.
              </button>
            </div>

            <button type="submit" className="forgot-primary-btn">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* ===================================================================
          STEP 3: SET A NEW PASSWORD (Figma Screenshot 2)
          =================================================================== */}
      {currentStep === 'new-password' && (
        <div className="forgot-bottom-sheet">
          <div className="forgot-floating-badge">
            <ShieldKeyholeIcon />
          </div>

          <h1 className="forgot-sheet-title">Set a New Password</h1>

          <p className="forgot-sheet-subtitle">
            Please set a new password to secure your Work Mate account.
          </p>

          <form onSubmit={handleNewPasswordSubmit}>
            {/* Password Field */}
            <div className="forgot-field-group">
              <label className="forgot-field-label">Password</label>
              <div className="forgot-input-box">
                <div className="forgot-input-icon">
                  <Fingerprint size={16} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="forgot-input-control"
                  placeholder="Input Password"
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

            {/* Confirm Password Field */}
            <div className="forgot-field-group">
              <label className="forgot-field-label">Confirm Password</label>
              <div className="forgot-input-box">
                <div className="forgot-input-icon">
                  <Fingerprint size={16} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="forgot-input-control"
                  placeholder="Re Enter Your Password"
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

            <button type="submit" className="forgot-primary-btn">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* ===================================================================
          STEP 4: PASSWORD HAS BEEN CREATED - SUCCESS (Figma Screenshot 2)
          =================================================================== */}
      {currentStep === 'success' && (
        <div className="forgot-bottom-sheet">
          <div className="forgot-floating-badge">
            <ShieldKeyholeIcon />
          </div>

          <h1 className="forgot-sheet-title">Password Has Been Created</h1>

          <p className="forgot-sheet-subtitle">
            To log in to your account, click the Sign In button and enter your email along with your new password.
          </p>

          <button
            type="button"
            className="forgot-primary-btn"
            onClick={handleFinalSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
