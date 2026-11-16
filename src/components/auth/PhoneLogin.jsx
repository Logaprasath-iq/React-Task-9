import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, RotateCw, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { countryCodes } from '../../data/mockData';
import AuthInput from '../common/AuthInput';
import OTPInput from '../common/OTPInput';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

export default function PhoneLogin({ onLoginSuccess }) {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('5553829912');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(45);
  const [isResendActive, setIsResendActive] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendNotice, setResendNotice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendActive(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSendCode = (e) => {
    e.preventDefault();
    if (!phoneNumber.trim() || phoneNumber.length < 8) {
      setError('Please enter a valid phone number (min 8 digits)');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
      setTimer(45);
      setIsResendActive(false);
    }, 500);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError('Please enter the full 6-digit verification code');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        navigate('/home');
      }
    }, 600);
  };

  const handleResend = () => {
    if (!isResendActive) return;
    setTimer(45);
    setIsResendActive(false);
    setResendNotice('New verification code sent via SMS!');
    setTimeout(() => setResendNotice(''), 3000);
  };

  if (step === 'otp') {
    return (
      <div className="animate-slide-up" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--purple-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary-purple)',
              margin: '0 auto 12px'
            }}
          >
            <Phone size={22} />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)' }}>
            Verify Your Phone
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
            Enter the 6-digit code sent to <strong style={{ color: 'var(--text-dark)' }}>{countryCode} {phoneNumber}</strong>
          </p>
        </div>

        <OTPInput
          length={6}
          value={otp}
          onChange={(val) => {
            setOtp(val);
            if (error) setError('');
          }}
        />

        {error && (
          <p style={{ fontSize: '12px', color: 'var(--status-red)', textAlign: 'center', marginBottom: '12px' }}>
            {error}
          </p>
        )}

        {resendNotice && (
          <p style={{ fontSize: '12px', color: 'var(--status-green)', textAlign: 'center', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <CheckCircle2 size={14} /> {resendNotice}
          </p>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '13px', margin: '12px 0 20px', color: 'var(--text-muted)' }}>
          <span>Didn't receive code?</span>
          {isResendActive ? (
            <button
              type="button"
              onClick={handleResend}
              style={{ color: 'var(--primary-purple)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <RotateCw size={13} /> Resend OTP
            </button>
          ) : (
            <span style={{ color: 'var(--primary-purple)', fontWeight: '600' }}>
              Resend in 00:{timer < 10 ? `0${timer}` : timer}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <SecondaryButton
            onClick={() => setStep('phone')}
            style={{ flex: 1 }}
          >
            Edit Phone
          </SecondaryButton>
          <PrimaryButton
            onClick={handleVerifyOTP}
            disabled={isLoading || otp.length < 6}
            style={{ flex: 1.5 }}
          >
            {isLoading ? 'Verifying...' : 'Verify & Sign In'}
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSendCode} className="auth-form">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>
          Mobile Phone Number *
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {/* Country Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-input)',
              border: '1.5px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0 10px',
              height: '50px',
              flexShrink: 0
            }}
          >
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-dark)',
                cursor: 'pointer'
              }}
            >
              {countryCodes.map((c, i) => (
                <option key={i} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          </div>

          {/* Number Input */}
          <div style={{ flex: 1 }}>
            <AuthInput
              type="tel"
              placeholder="e.g. 555-0199"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''));
                if (error) setError('');
              }}
              icon={<Phone size={18} />}
              style={{ marginBottom: 0 }}
            />
          </div>
        </div>
      </div>

      {error && (
        <span style={{ fontSize: '12px', color: 'var(--status-red)', marginBottom: '12px', display: 'block' }}>
          {error}
        </span>
      )}

      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
        We will send a one-time SMS verification code to verify your Workmate mobile identity.
      </p>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        {isLoading ? 'Sending Code...' : 'Get OTP Code'}
      </PrimaryButton>
    </form>
  );
}
