import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

export default function SuccessMessage({
  title = 'Congratulations!',
  description = 'Your operation was completed successfully.',
  buttonText = 'Continue',
  onButtonClick,
  badge = null,
  icon = null
}) {
  return (
    <div
      className="animate-slide-up"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '30px 20px',
        minHeight: '400px'
      }}
    >
      <div
        style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.15) 0%, rgba(0, 186, 136, 0.15) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          boxShadow: '0 12px 30px rgba(108, 92, 231, 0.15)'
        }}
      >
        {icon || (
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--purple-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <CheckCircle2 size={36} strokeWidth={2.2} />
          </div>
        )}
      </div>

      {badge && (
        <span
          style={{
            padding: '4px 14px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--purple-soft)',
            color: 'var(--primary-purple)',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            marginBottom: '12px'
          }}
        >
          {badge}
        </span>
      )}

      <h2
        style={{
          fontSize: '22px',
          fontWeight: '700',
          color: 'var(--text-dark)',
          marginBottom: '10px'
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: '1.6',
          maxWidth: '300px',
          marginBottom: '32px'
        }}
      >
        {description}
      </p>

      {onButtonClick && (
        <PrimaryButton onClick={onButtonClick} size="lg">
          {buttonText}
        </PrimaryButton>
      )}
    </div>
  );
}
