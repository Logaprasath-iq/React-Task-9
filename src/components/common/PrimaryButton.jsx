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
          background: '#FFFFFF',
          border: '1.5px solid #D5CCFD',
          color: '#7146FD',
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
          background: 'linear-gradient(135deg, #7952FC 0%, #5833EA 100%)',
          border: 'none',
          color: '#FFFFFF',
          boxShadow: '0 10px 24px rgba(113, 70, 253, 0.35)'
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '10px 18px', fontSize: '13px', borderRadius: 'var(--radius-full)' };
      case 'lg':
        return { height: '52px', padding: '0 24px', fontSize: '16px', borderRadius: 'var(--radius-full)' };
      case 'md':
      default:
        return { height: '48px', padding: '0 20px', fontSize: '15px', borderRadius: 'var(--radius-full)' };
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
        fontWeight: '700',
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
