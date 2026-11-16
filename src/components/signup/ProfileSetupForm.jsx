import React, { useState } from 'react';
import { Camera, Check, ArrowRight } from 'lucide-react';
import { avatarOptions } from '../../data/mockData';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';

export default function ProfileSetupForm({ formData, updateFormData, onSubmit }) {
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [agreedPrivacy, setAgreedPrivacy] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedTerms || !agreedPrivacy) {
      setError('You must accept the Terms of Service & Privacy Agreement to proceed');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSubmit();
    }, 700);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Select Your Workspace Avatar
        </p>

        <div className="avatar-selection-grid">
          {avatarOptions.map((opt) => {
            const isSelected = formData.avatar === opt.url;
            return (
              <div
                key={opt.id}
                className={`avatar-option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => updateFormData({ avatar: opt.url })}
              >
                <div style={{ position: 'relative' }}>
                  <img src={opt.url} alt={opt.label} className="avatar-preview-img" />
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        right: -2,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--primary-purple)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF'
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>
                <span style={{ fontSize: '11px', fontWeight: '600', color: isSelected ? 'var(--primary-purple)' : 'var(--text-muted)' }}>
                  {opt.label.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <AuthInput
        label="Workplace Location"
        placeholder="e.g. San Francisco HQ / Remote"
        value={formData.location}
        onChange={(e) => updateFormData({ location: e.target.value })}
      />

      {/* Terms & Conditions Checkboxes */}
      <div style={{ margin: '18px 0 24px' }}>
        <label className="signup-terms-row">
          <input
            type="checkbox"
            checked={agreedTerms}
            onChange={(e) => setAgreedTerms(e.target.checked)}
          />
          <span>
            I agree to the <strong style={{ color: 'var(--primary-purple)' }}>Workmate Terms of Service</strong> and workplace employee policy.
          </span>
        </label>

        <label className="signup-terms-row">
          <input
            type="checkbox"
            checked={agreedPrivacy}
            onChange={(e) => setAgreedPrivacy(e.target.checked)}
          />
          <span>
            I consent to the processing of my attendance, HR and task management data according to the <strong style={{ color: 'var(--primary-purple)' }}>Privacy Agreement</strong>.
          </span>
        </label>
      </div>

      {error && (
        <p style={{ fontSize: '12px', color: 'var(--status-red)', marginBottom: '14px', textAlign: 'center' }}>
          {error}
        </p>
      )}

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading || !agreedTerms || !agreedPrivacy}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        {isLoading ? 'Creating Your Account...' : 'Complete Registration'}
      </PrimaryButton>
    </form>
  );
}
