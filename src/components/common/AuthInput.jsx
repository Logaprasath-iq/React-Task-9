import React, { useState } from 'react';

export default function AuthInput({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon = null,
  rightElement = null,
  error = '',
  disabled = false,
  required = false,
  helperText = '',
  name = '',
  autoFocus = false,
  maxLength,
  style = {},
  inputMode,
  pattern
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', marginBottom: '16px', ...style }}>
      {label && (
        <label style={{
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--text-dark)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          {label}
          {required && <span style={{ color: 'var(--status-red)' }}>*</span>}
        </label>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: isFocused ? '#FFFFFF' : '#FAFAFE',
          border: error
            ? '1.5px solid #ED2E7E'
            : isFocused
            ? '1.5px solid #7146FD'
            : '1.5px solid #EDEDF8',
          borderRadius: '16px',
          padding: '0 16px',
          height: '52px',
          boxShadow: isFocused ? '0 0 0 3px rgba(113, 70, 253, 0.12)' : 'none',
          transition: 'all 0.2s ease',
          gap: '10px'
        }}
      >
        {icon && (
          <span style={{
            color: isFocused ? 'var(--primary-purple)' : 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
            flexShrink: 0,
            transition: 'color 0.2s ease'
          }}>
            {icon}
          </span>
        )}

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          maxLength={maxLength}
          inputMode={inputMode}
          pattern={pattern}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            color: 'var(--text-dark)',
            fontSize: '14.5px',
            fontWeight: '500',
            width: '100%'
          }}
        />

        {rightElement && (
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            {rightElement}
          </div>
        )}
      </div>

      {error ? (
        <span style={{ fontSize: '12px', color: 'var(--status-red)', fontWeight: '500' }}>
          {error}
        </span>
      ) : helperText ? (
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
