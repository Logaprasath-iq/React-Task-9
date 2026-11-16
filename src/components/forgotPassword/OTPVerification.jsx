import React, { useState, useEffect } from 'react';
import { KeyRound, RotateCw, CheckCircle2, ArrowRight } from 'lucide-react';
import OTPInput from '../common/OTPInput';
import PrimaryButton from '../common/PrimaryButton';

export default function OTPVerification({ recoveryTarget, onNext }) {
  const [otp, setOtp] = useState('784920');
  const [timer, setTimer] = useState(45);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (!canResend) return;
    setTimer(45);
    setCanResend(false);
    setNotice('New password recovery code sent!');
    setTimeout(() => setNotice(''), 3000);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError('Please enter all 6 digits of the code');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNext();
    }, 600);
  };

  return (
    <form onSubmit={handleVerify} className="animate-slide-up">
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'var(--purple-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-purple)',
            margin: '0 auto 12px'
          }}
        >
          <KeyRound size={28} />
        </div>
        <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
          Enter the 6-digit password reset code sent to{' '}
          <strong style={{ color: 'var(--text-dark)' }}>
            {recoveryTarget?.target || 'your recovery destination'}
          </strong>
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

      {notice && (
        <p style={{ fontSize: '12px', color: 'var(--status-green)', textAlign: 'center', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <CheckCircle2 size={14} /> {notice}
        </p>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', fontSize: '13px', margin: '14px 0 24px', color: 'var(--text-muted)' }}>
        <span>Didn't get code?</span>
        {canResend ? (
          <button
            type="button"
            onClick={handleResend}
            style={{ color: 'var(--primary-purple)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <RotateCw size={13} /> Resend Code
          </button>
        ) : (
          <span style={{ color: 'var(--primary-purple)', fontWeight: '600' }}>
            Resend in 00:{timer < 10 ? `0${timer}` : timer}
          </span>
        )}
      </div>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading || otp.length < 6}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        {isLoading ? 'Verifying Code...' : 'Verify Code'}
      </PrimaryButton>
    </form>
  );
}
