import React, { useState } from 'react';
import { BadgeCheck, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthInput from '../common/AuthInput';
import PasswordInput from '../common/PasswordInput';
import PrimaryButton from '../common/PrimaryButton';

export default function EmployeeLogin({ onLoginSuccess }) {
  const [employeeId, setEmployeeId] = useState('EMP-2024-089');
  const [orgCode, setOrgCode] = useState('WORKMATE-GLOBAL');
  const [pin, setPin] = useState('8901');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!employeeId.trim()) {
      errs.employeeId = 'Employee ID is required (e.g. EMP-2024-089)';
    }
    if (!orgCode.trim()) {
      errs.orgCode = 'Organization code is required';
    }
    if (!pin.trim() || pin.length < 4) {
      errs.pin = 'Enter your 4-6 digit employee security PIN';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

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

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <AuthInput
        label="Employee ID"
        placeholder="e.g. EMP-2024-089"
        value={employeeId}
        onChange={(e) => {
          setEmployeeId(e.target.value.toUpperCase());
          if (errors.employeeId) setErrors({ ...errors, employeeId: '' });
        }}
        icon={<BadgeCheck size={18} />}
        error={errors.employeeId}
        required
      />

      <AuthInput
        label="Organization / Company Code"
        placeholder="e.g. WORKMATE-GLOBAL"
        value={orgCode}
        onChange={(e) => {
          setOrgCode(e.target.value.toUpperCase());
          if (errors.orgCode) setErrors({ ...errors, orgCode: '' });
        }}
        icon={<Building2 size={18} />}
        error={errors.orgCode}
        required
      />

      <PasswordInput
        label="Employee PIN / Security Code"
        placeholder="Enter 4-digit PIN"
        value={pin}
        onChange={(e) => {
          setPin(e.target.value);
          if (errors.pin) setErrors({ ...errors, pin: '' });
        }}
        error={errors.pin}
        required
      />

      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '18px' }}>
        Assigned by your HR Department for internal employee sign-in.
      </p>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        {isLoading ? 'Verifying Employee ID...' : 'Sign In as Employee'}
      </PrimaryButton>
    </form>
  );
}
