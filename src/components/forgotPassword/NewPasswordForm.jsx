import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import PasswordInput from '../common/PasswordInput';
import PrimaryButton from '../common/PrimaryButton';

export default function NewPasswordForm({ onNext }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const hasLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;

  const isAllValid = hasLength && hasUpper && hasLower && hasNumber && passwordsMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!newPassword) {
      errs.newPassword = 'New password is required';
    } else if (!hasLength || !hasUpper || !hasLower || !hasNumber) {
      errs.newPassword = 'Password must meet all security requirements';
    }
    if (!confirmPassword) {
      errs.confirmPassword = 'Confirm your new password';
    } else if (newPassword !== confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onNext();
      }, 700);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <PasswordInput
        label="New Password"
        placeholder="Enter at least 8 characters"
        value={newPassword}
        onChange={(e) => {
          setNewPassword(e.target.value);
          if (errors.newPassword) setErrors({ ...errors, newPassword: '' });
        }}
        error={errors.newPassword}
        required
      />

      <PasswordInput
        label="Confirm New Password"
        placeholder="Re-type your new password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
        }}
        error={errors.confirmPassword}
        required
      />

      {/* Validation Checklist */}
      <div className="password-criteria-list">
        <div className={`password-criteria-item ${hasLength ? 'valid' : ''}`}>
          {hasLength ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>Minimum 8 characters</span>
        </div>
        <div className={`password-criteria-item ${hasUpper && hasLower ? 'valid' : ''}`}>
          {hasUpper && hasLower ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>Both uppercase and lowercase letters</span>
        </div>
        <div className={`password-criteria-item ${hasNumber ? 'valid' : ''}`}>
          {hasNumber ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>At least one number (0-9)</span>
        </div>
        <div className={`password-criteria-item ${passwordsMatch ? 'valid' : ''}`}>
          {passwordsMatch ? <Check size={14} color="var(--status-green)" /> : <X size={14} color="var(--text-muted)" />}
          <span>Both passwords match</span>
        </div>
      </div>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading || !isAllValid}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        {isLoading ? 'Updating Password...' : 'Reset Password'}
      </PrimaryButton>
    </form>
  );
}
