import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import AuthInput from './AuthInput';

export default function PasswordInput({
  label = 'Password',
  placeholder = 'Enter your password',
  value,
  onChange,
  error = '',
  required = false,
  helperText = '',
  name = 'password',
  style = {}
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthInput
      label={label}
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      required={required}
      helperText={helperText}
      name={name}
      style={style}
      icon={<Lock size={18} />}
      rightElement={
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            background: 'none',
            border: 'none',
            padding: '4px',
            color: showPassword ? 'var(--primary-purple)' : 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
          tabIndex={-1}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
    />
  );
}
