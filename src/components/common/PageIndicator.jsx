import React from 'react';

export default function PageIndicator({ total = 4, activeIndex = 0, onSelect = null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '16px 0' }}>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect && onSelect(index)}
            disabled={!onSelect}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: isActive ? '24px' : '8px',
              height: '8px',
              borderRadius: 'var(--radius-full)',
              background: isActive ? 'var(--primary-purple)' : 'var(--purple-soft-border)',
              border: 'none',
              padding: 0,
              cursor: onSelect ? 'pointer' : 'default',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        );
      })}
    </div>
  );
}
