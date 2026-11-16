import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';
import { countryCodes } from '../../data/mockData';

export default function RecoveryForm({ onNext, recoveryTarget, setRecoveryTarget }) {
  const [method, setMethod] = useState('email'); // 'email' | 'phone'
  const [countryCode, setCountryCode] = useState('+1');
  const [email, setEmail] = useState(recoveryTarget.email || 'tariqul.islam@workmate.io');
  const [phone, setPhone] = useState(recoveryTarget.phone || '5553829912');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === 'email') {
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address');
        return;
      }
      setRecoveryTarget({ type: 'email', target: email });
    } else {
      if (!phone.trim() || phone.length < 8) {
        setError('Please enter a valid phone number');
        return;
      }
      setRecoveryTarget({ type: 'phone', target: `${countryCode} ${phone}` });
    }

    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onNext();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      {/* Recovery Method Selection */}
      <div className="recovery-tab-group">
        <button
          type="button"
          className={`recovery-tab-btn ${method === 'email' ? 'active' : ''}`}
          onClick={() => {
            setMethod('email');
            setError('');
          }}
        >
          Email Address
        </button>
        <button
          type="button"
          className={`recovery-tab-btn ${method === 'phone' ? 'active' : ''}`}
          onClick={() => {
            setMethod('phone');
            setError('');
          }}
        >
          Phone Number
        </button>
      </div>

      {method === 'email' ? (
        <AuthInput
          label="Registered Work Email"
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          icon={<Mail size={18} />}
          error={error}
          helperText="We’ll send a 6-digit recovery code to this email."
          required
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>
            Registered Phone Number *
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
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
            <div style={{ flex: 1 }}>
              <AuthInput
                type="tel"
                placeholder="555-0199"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/[^0-9]/g, ''));
                  if (error) setError('');
                }}
                icon={<Phone size={18} />}
                style={{ marginBottom: 0 }}
              />
            </div>
          </div>
          {error && <span style={{ fontSize: '12px', color: 'var(--status-red)' }}>{error}</span>}
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            We’ll send a 6-digit recovery code via SMS.
          </span>
        </div>
      )}

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
        style={{ marginTop: '14px' }}
      >
        {isLoading ? 'Sending Code...' : 'Send Recovery Code'}
      </PrimaryButton>
    </form>
  );
}
