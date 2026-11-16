import React from 'react';

export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = true,
  variant = 'gradient', // 'gradient' | 'outline' | 'ghost' | 'soft'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  iconPosition = 'left',
  className = '',
  style = {}
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return {
          background: 'transparent',
          border: '1.5px solid var(--primary-purple)',
          color: 'var(--primary-purple)',
          boxShadow: 'none'
        };
      case 'soft':
        return {
          background: 'var(--purple-soft)',
          border: '1.5px solid var(--purple-soft-border)',
          color: 'var(--primary-purple-dark)',
          boxShadow: 'none'
        };
      case 'ghost':
        return {
          background: 'transparent',
          border: 'none',
          color: 'var(--text-muted)',
          boxShadow: 'none'
        };
      case 'gradient':
      default:
        return {
          background: 'var(--purple-gradient)',
          border: 'none',
          color: '#FFFFFF',
          boxShadow: 'var(--shadow-purple-btn)'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '10px 18px', fontSize: '13px', borderRadius: 'var(--radius-sm)' };
      case 'lg':
        return { padding: '16px 28px', fontSize: '16px', borderRadius: 'var(--radius-md)' };
      case 'md':
      default:
        return { padding: '14px 22px', fontSize: '15px', borderRadius: 'var(--radius-md)' };
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`primary-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: '600',
        width: fullWidth ? '100%' : 'auto',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        userSelect: 'none',
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style
      }}
    >
      {icon && iconPosition === 'left' && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={{ display: 'inline-flex' }}>{icon}</span>}
    </button>
  );
}
