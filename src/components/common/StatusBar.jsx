import React from 'react';

export default function StatusBar({ theme = 'white', time = '08:15', style = {} }) {
  const isDark = theme === 'dark';
  const color = isDark ? '#1A1D2E' : '#FFFFFF';

  return (
    <div
      style={{
        height: '44px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        zIndex: 100,
        flexShrink: 0,
        userSelect: 'none',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        ...style
      }}
    >
      {/* Exact Time from Figma */}
      <span
        style={{
          fontSize: '14.5px',
          fontWeight: '700',
          color: color,
          letterSpacing: '-0.3px',
          fontFamily: 'inherit'
        }}
      >
        {time}
      </span>

      {/* Exact Icons from Figma: Signal, Wifi, Battery */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: color }}>
        {/* Cellular Signal Bars (4 bars) */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill={color}>
          <rect x="0" y="8" width="2.6" height="4" rx="0.75" />
          <rect x="4.6" y="5.5" width="2.6" height="6.5" rx="0.75" />
          <rect x="9.2" y="3" width="2.6" height="9" rx="0.75" />
          <rect x="13.8" y="0.5" width="2.6" height="11.5" rx="0.75" />
        </svg>

        {/* Wifi Icon */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill={color}>
          <circle cx="8" cy="9.5" r="1.3" />
          <path d="M4.5 5.5C5.467 4.533 6.717 4 8 4C9.283 4 10.533 4.533 11.5 5.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M1.5 2C3.228 0.8 5.564 0.2 8 0.2C10.436 0.2 12.772 0.8 14.5 2" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>

        {/* Battery Icon */}
        <svg width="24" height="12" viewBox="0 0 24 12" fill={color}>
          {/* Battery Outer Border */}
          <rect x="0.5" y="0.5" width="20" height="11" rx="3" fill="none" stroke={color} strokeWidth="1.2" />
          {/* Battery Level Fill */}
          <rect x="2.5" y="2.5" width="13.5" height="7" rx="1.5" fill={color} />
          {/* Battery Terminal Tip */}
          <path d="M22 4C22.6 4.3 23 4.9 23 5.5V6.5C23 7.1 22.6 7.7 22 8" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}
