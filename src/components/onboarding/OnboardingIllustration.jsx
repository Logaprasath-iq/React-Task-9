import React from 'react';

export default function OnboardingIllustration({ step = 1 }) {
  switch (step) {
    case 1:
      // Screen 1: Floating task management illustration with calendar, checkmarks, floating task cards
      return (
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '220px' }}>
          <defs>
            <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F5F3FF" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="purpleAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A75FF" />
              <stop offset="100%" stopColor="#5843E5" />
            </linearGradient>
            <filter id="shadow1" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#3A2890" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background glowing circles */}
          <circle cx="160" cy="120" r="95" fill="white" fillOpacity="0.08" />
          <circle cx="160" cy="120" r="65" fill="white" fillOpacity="0.12" />

          {/* Central Main Task Card */}
          <g filter="url(#shadow1)">
            <rect x="75" y="45" width="170" height="135" rx="18" fill="url(#cardGrad1)" />
            {/* Header pill */}
            <rect x="92" y="62" width="75" height="12" rx="6" fill="#6C5CE7" fillOpacity="0.2" />
            <rect x="92" y="64" width="45" height="8" rx="4" fill="#6C5CE7" />

            {/* Task rows */}
            <g transform="translate(92, 86)">
              <circle cx="8" cy="8" r="8" fill="#10B981" />
              <path d="M5 8L7.5 10.5L11.5 5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="22" y="4" width="85" height="8" rx="4" fill="#3A3D55" />
            </g>

            <g transform="translate(92, 110)">
              <circle cx="8" cy="8" r="8" fill="#10B981" />
              <path d="M5 8L7.5 10.5L11.5 5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="22" y="4" width="70" height="8" rx="4" fill="#3A3D55" />
            </g>

            <g transform="translate(92, 134)">
              <circle cx="8" cy="8" r="8" fill="#FF8A00" />
              <path d="M8 5V9L11 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <rect x="22" y="4" width="55" height="8" rx="4" fill="#8F95B2" />
            </g>

            {/* Progress indicator */}
            <rect x="92" y="156" width="136" height="6" rx="3" fill="#EAEBF5" />
            <rect x="92" y="156" width="95" height="6" rx="3" fill="url(#purpleAccent)" />
          </g>

          {/* Floating Small Badge - Timeline / Calendar */}
          <g filter="url(#shadow1)" transform="translate(42, 60)">
            <rect width="52" height="52" rx="14" fill="#FFFFFF" />
            <rect x="10" y="8" width="32" height="6" rx="3" fill="#FF8A00" />
            <text x="26" y="32" textAnchor="middle" fill="#1A1D2E" fontSize="16" fontWeight="800" fontFamily="sans-serif">24</text>
            <text x="26" y="44" textAnchor="middle" fill="#8F95B2" fontSize="9" fontWeight="600" fontFamily="sans-serif">SEP</text>
          </g>

          {/* Floating Badge - Success / Celebration */}
          <g filter="url(#shadow1)" transform="translate(215, 125)">
            <rect width="64" height="48" rx="14" fill="#FFFFFF" />
            <circle cx="20" cy="24" r="10" fill="#10B981" fillOpacity="0.2" />
            <path d="M16 24L19 27L24 21" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="36" y="19" width="20" height="4" rx="2" fill="#1A1D2E" />
            <rect x="36" y="27" width="14" height="3" rx="1.5" fill="#8F95B2" />
          </g>

          {/* Sparkles / stars */}
          <path d="M60 145L62 149L66 151L62 153L60 157L58 153L54 151L58 149Z" fill="#FFD166" />
          <path d="M260 55L261.5 58L264.5 59.5L261.5 61L260 64L258.5 61L255.5 59.5L258.5 58Z" fill="#FFFFFF" fillOpacity="0.8" />
        </svg>
      );

    case 2:
      // Screen 2: Workload analytics & stress management illustration
      return (
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '220px' }}>
          <defs>
            <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F5F3FF" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="meterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="60%" stopColor="#FF8A00" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
            <filter id="shadow2" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#3A2890" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Background circles */}
          <circle cx="160" cy="120" r="95" fill="white" fillOpacity="0.08" />
          <circle cx="160" cy="120" r="65" fill="white" fillOpacity="0.12" />

          {/* Workload Health Card */}
          <g filter="url(#shadow2)">
            <rect x="70" y="45" width="180" height="140" rx="20" fill="url(#cardGrad2)" />
            {/* Card title */}
            <text x="90" y="70" fill="#1A1D2E" fontSize="13" fontWeight="700" fontFamily="sans-serif">Workload Balance</text>
            <text x="90" y="85" fill="#8F95B2" fontSize="10" fontFamily="sans-serif">Healthy Stress Level</text>

            {/* Gauge meter arc */}
            <path d="M100 135 A 45 45 0 0 1 220 135" stroke="#EAEBF5" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M100 135 A 45 45 0 0 1 185 95" stroke="url(#meterGrad)" strokeWidth="10" strokeLinecap="round" fill="none" />

            {/* Needle center */}
            <circle cx="160" cy="135" r="7" fill="#6C5CE7" />
            <line x1="160" y1="135" x2="175" y2="105" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" />

            {/* Status Tag */}
            <rect x="125" y="152" width="70" height="20" rx="10" fill="#E6F8F3" />
            <text x="160" y="166" textAnchor="middle" fill="#00BA88" fontSize="10" fontWeight="700" fontFamily="sans-serif">Optimal 65%</text>
          </g>

          {/* Floating Pill - Rest & Heartbeat */}
          <g filter="url(#shadow2)" transform="translate(35, 120)">
            <rect width="64" height="42" rx="14" fill="#FFFFFF" />
            <circle cx="18" cy="21" r="10" fill="#FEECEF" />
            <path d="M18 17C16.5 15.5 14 16.5 14 18.5C14 21 18 24 18 24C18 24 22 21 22 18.5C22 16.5 19.5 15.5 18 17Z" fill="#ED2E7E" />
            <rect x="34" y="16" width="20" height="4" rx="2" fill="#1A1D2E" />
            <rect x="34" y="23" width="12" height="3" rx="1.5" fill="#8F95B2" />
          </g>

          {/* Floating Pill - Break Time Alert */}
          <g filter="url(#shadow2)" transform="translate(225, 65)">
            <rect width="60" height="42" rx="14" fill="#FFFFFF" />
            <circle cx="18" cy="21" r="10" fill="#EAF4FE" />
            <path d="M18 16V21L21 22.5" stroke="#0984E3" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="34" y="16" width="18" height="4" rx="2" fill="#1A1D2E" />
            <rect x="34" y="23" width="10" height="3" rx="1.5" fill="#8F95B2" />
          </g>
        </svg>
      );

    case 3:
      // Screen 3: Achievement badges and task conquest illustration
      return (
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '220px' }}>
          <defs>
            <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <filter id="shadow3" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#3A2890" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Circles */}
          <circle cx="160" cy="120" r="95" fill="white" fillOpacity="0.08" />
          <circle cx="160" cy="120" r="65" fill="white" fillOpacity="0.12" />

          {/* Center Trophy Card */}
          <g filter="url(#shadow3)">
            <rect x="75" y="45" width="170" height="140" rx="20" fill="#FFFFFF" fillOpacity="0.95" />

            {/* Big Golden Trophy */}
            <g transform="translate(132, 65)">
              <path d="M12 40H44L40 48H16L12 40Z" fill="url(#trophyGrad)" />
              <rect x="25" y="32" width="6" height="10" fill="#D97706" />
              <path d="M10 8C10 8 10 28 28 28C46 28 46 8 46 8H10Z" fill="url(#trophyGrad)" />
              <path d="M10 12H4C4 18 8 20 12 20M46 12H52C52 18 48 20 44 20" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <circle cx="28" cy="17" r="4" fill="#FFFFFF" fillOpacity="0.6" />
            </g>

            {/* Achievement text */}
            <text x="160" y="138" textAnchor="middle" fill="#1A1D2E" fontSize="13" fontWeight="800" fontFamily="sans-serif">Top Performer</text>
            <text x="160" y="152" textAnchor="middle" fill="#6C5CE7" fontSize="11" fontWeight="600" fontFamily="sans-serif">+5 Badges Earned</text>

            <rect x="100" y="162" width="120" height="5" rx="2.5" fill="#EAEBF5" />
            <rect x="100" y="162" width="95" height="5" rx="2.5" fill="#6C5CE7" />
          </g>

          {/* Floating Star Badge */}
          <g filter="url(#shadow3)" transform="translate(45, 75)">
            <circle cx="24" cy="24" r="24" fill="#FFFFFF" />
            <circle cx="24" cy="24" r="18" fill="#FFF4E8" />
            <path d="M24 14L26.5 20.5H33.5L28 24.5L30 31L24 27L18 31L20 24.5L14.5 20.5H21.5L24 14Z" fill="#FF8A00" />
          </g>

          {/* Floating Target Badge */}
          <g filter="url(#shadow3)" transform="translate(225, 115)">
            <circle cx="22" cy="22" r="22" fill="#FFFFFF" />
            <circle cx="22" cy="22" r="16" fill="#F0EEFC" />
            <circle cx="22" cy="22" r="10" stroke="#6C5CE7" strokeWidth="2.5" fill="none" />
            <circle cx="22" cy="22" r="4" fill="#6C5CE7" />
          </g>
        </svg>
      );

    case 4:
    default:
      // Screen 4: Final Onboarding - Work journey rocket / career milestone
      return (
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '220px' }}>
          <defs>
            <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F5F3FF" />
            </linearGradient>
            <filter id="shadow4" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#3A2890" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Circles */}
          <circle cx="160" cy="120" r="95" fill="white" fillOpacity="0.08" />
          <circle cx="160" cy="120" r="65" fill="white" fillOpacity="0.12" />

          {/* Big Career Journey Hub */}
          <g filter="url(#shadow4)">
            <rect x="65" y="45" width="190" height="140" rx="22" fill="#FFFFFF" fillOpacity="0.95" />

            {/* Launching Rocket Graphic */}
            <g transform="translate(136, 60)">
              {/* Smoke / Flames */}
              <path d="M24 58C21 54 27 54 24 50" stroke="#FF8A00" strokeWidth="3" strokeLinecap="round" />
              <path d="M20 62C18 57 22 57 20 54" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M28 62C26 57 30 57 28 54" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />

              {/* Rocket Body */}
              <path d="M24 10C16 20 14 36 14 46H34C34 36 32 20 24 10Z" fill="#6C5CE7" />
              <path d="M24 10C21 16 19 25 19 32H29C29 25 27 16 24 10Z" fill="#8C7CFF" />
              <circle cx="24" cy="26" r="4.5" fill="#FFFFFF" />
              <circle cx="24" cy="26" r="2.5" fill="#3D348B" />

              {/* Fins */}
              <path d="M14 38L7 45V48H14V38Z" fill="#ED2E7E" />
              <path d="M34 38L41 45V48H34V38Z" fill="#ED2E7E" />
            </g>

            {/* Text */}
            <text x="160" y="142" textAnchor="middle" fill="#1A1D2E" fontSize="13" fontWeight="800" fontFamily="sans-serif">Workmate Mobile 2.0</text>
            <text x="160" y="158" textAnchor="middle" fill="#8F95B2" fontSize="11" fontFamily="sans-serif">Everything you need to conquer your day</text>

            {/* Checkmark pills */}
            <g transform="translate(90, 166)">
              <circle cx="8" cy="6" r="5" fill="#00BA88" />
              <text x="18" y="10" fill="#1A1D2E" fontSize="9" fontWeight="600" fontFamily="sans-serif">HR</text>

              <circle cx="50" cy="6" r="5" fill="#6C5CE7" />
              <text x="60" y="10" fill="#1A1D2E" fontSize="9" fontWeight="600" fontFamily="sans-serif">Tasks</text>

              <circle cx="95" cy="6" r="5" fill="#FF8A00" />
              <text x="105" y="10" fill="#1A1D2E" fontSize="9" fontWeight="600" fontFamily="sans-serif">Claims</text>
            </g>
          </g>

          {/* Floating Stars */}
          <path d="M48 65L50 69L54 71L50 73L48 77L46 73L42 71L46 69Z" fill="#FFD166" />
          <path d="M265 140L266.5 143L269.5 144.5L266.5 146L265 149L263.5 146L260.5 144.5L263.5 143Z" fill="#FFFFFF" />
        </svg>
      );
  }
}
