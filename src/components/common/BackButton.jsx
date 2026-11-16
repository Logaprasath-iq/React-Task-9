import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ onClick, to, label = '', style = {} }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Go back"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        background: '#FFFFFF',
        border: '1.5px solid var(--border-light)',
        color: 'var(--text-dark)',
        boxShadow: 'var(--shadow-sm)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        flexShrink: 0,
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary-purple)';
        e.currentTarget.style.transform = 'translateX(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-light)';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      <ArrowLeft size={20} strokeWidth={2.2} />
      {label && <span style={{ fontSize: '14px', fontWeight: '600' }}>{label}</span>}
    </button>
  );
}
