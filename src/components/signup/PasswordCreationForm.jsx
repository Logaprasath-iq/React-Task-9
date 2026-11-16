import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import PasswordInput from '../common/PasswordInput';
import PrimaryButton from '../common/PrimaryButton';

export default function PasswordCreationForm({ formData, updateFormData, onNext }) {
  const [errors, setErrors] = useState({});

  const password = formData.password || '';
  const confirmPassword = formData.confirmPassword || '';

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const isAllValid = hasLength && hasUpper && hasLower && hasNumber && passwordsMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!password) {
      errs.password = 'Password is required';
    } else if (!hasLength || !hasUpper || !hasLower || !hasNumber) {
      errs.password = 'Password must meet all security criteria';
    }
    if (!confirmPassword) {
      errs.confirmPassword = 'Confirm your password';
    } else if (password !== confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <PasswordInput
        label="Create Password"
        placeholder="At least 8 characters"
        value={password}
        onChange={(e) => {
          updateFormData({ password: e.target.value });
          if (errors.password) setErrors({ ...errors, password: '' });
        }}
        error={errors.password}
        required
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        onChange={(e) => {
          updateFormData({ confirmPassword: e.target.value });
          if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
        }}
        error={errors.confirmPassword}
        required
      />

      {/* Security Checklist */}
      <div className="password-criteria-list">
        <div className={`password-criteria-item ${hasLength ? 'valid' : ''}`}>
          {hasLength ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>At least 8 characters long</span>
        </div>
        <div className={`password-criteria-item ${hasUpper && hasLower ? 'valid' : ''}`}>
          {hasUpper && hasLower ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>Contains both uppercase and lowercase letters</span>
        </div>
        <div className={`password-criteria-item ${hasNumber ? 'valid' : ''}`}>
          {hasNumber ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>Contains at least one number (0-9)</span>
        </div>
        <div className={`password-criteria-item ${passwordsMatch ? 'valid' : ''}`}>
          {passwordsMatch ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>Both passwords match</span>
        </div>
      </div>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={!isAllValid}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        Verify Phone & Email
      </PrimaryButton>
    </form>
  );
}
