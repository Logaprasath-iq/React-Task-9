import React from 'react';
import { Video, Zap, Clock, Calendar, MessageSquare, Flag } from 'lucide-react';

// Cute illustrated vector avatars matching screenshot
function IllustratedAvatar({ type = 1 }) {
  const styles = [
    { bg: '#FFD79E', border: '#FFB057', hair: '#FF6B6B', face: '👧' }, // Red-hair girl
    { bg: '#FFE3A8', border: '#F59E0B', hair: '#FCD34D', face: '👦' }, // Blonde boy
    { bg: '#C7D2FE', border: '#818CF8', hair: '#6366F1', face: '👩‍🦱' }, // Curly hair
  ];
  const item = styles[(type - 1) % styles.length];

  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: item.bg,
        border: '2px solid #FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '11px',
        userSelect: 'none',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
    >
      {item.face}
    </div>
  );
}

// 1. Today Meeting Card (Used in Screen 1)
function TodayMeetingCard() {
  return (
    <div className="onboard-card-content">
      <div className="card-top-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="card-title">Today Meeting</span>
          <span className="card-count-badge">2</span>
        </div>
      </div>
      <p className="card-subtitle">Your schedule for the day</p>

      <div className="card-inner-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div className="card-icon-circle purple">
              <Video size={13} color="#FFFFFF" strokeWidth={2.4} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#1A1D2E' }}>
              Townhall Meeting
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="pill-gray">
              <Clock size={10} /> 01:30 AM – 02:00 AM
            </span>
            <button type="button" className="pill-btn-purple">
              Join Meet
            </button>
          </div>
        </div>

        {/* Avatars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div className="avatar-overlap-row">
            <IllustratedAvatar type={1} />
            <IllustratedAvatar type={2} />
            <IllustratedAvatar type={3} />
          </div>
          <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#7E8299', marginLeft: '4px' }}>
            +3
          </span>
        </div>
      </div>
    </div>
  );
}

// 2. Today Task Card (Used in Screen 1, 3, 4)
function TodayTaskCard() {
  return (
    <div className="onboard-card-content">
      <div className="card-top-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="card-title">Today Task</span>
          <span className="card-count-badge">1</span>
        </div>
      </div>
      <p className="card-subtitle">The tasks assigned to you for today</p>

      <div className="card-inner-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div className="card-icon-circle purple">
            <Zap size={13} color="#FFFFFF" strokeWidth={2.4} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: '700', color: '#1A1D2E' }}>
            Wiring Dashboard Analytics
          </span>
        </div>

        {/* Tags row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <span className="pill-status-in-progress">
            <span className="dot-gray" /> In Progress
          </span>
          <span className="pill-status-high">
            <Flag size={10} color="#ED2E7E" fill="#ED2E7E" /> High
          </span>
        </div>

        {/* Purple Progress Bar */}
        <div className="card-progress-track">
          <div className="card-progress-fill" style={{ width: '70%' }} />
        </div>

        {/* Footer Meta Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
          <div className="avatar-overlap-row">
            <IllustratedAvatar type={1} />
            <IllustratedAvatar type={2} />
            <IllustratedAvatar type={3} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="pill-gray">
              <Calendar size={10} /> 27 April
            </span>
            <span className="pill-gray">
              <MessageSquare size={10} /> 2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. Working Period Line/Area Chart Card (Used in Screen 2, 4)
function WorkingPeriodCard() {
  return (
    <div className="onboard-card-content">
      <div className="card-top-row">
        <span className="card-title">Working Period</span>
      </div>
      <p className="card-subtitle">Average your working period</p>

      {/* Line Chart with Peak Callout */}
      <div style={{ position: 'relative', marginTop: '6px', paddingRight: '6px' }}>
        <div style={{ display: 'flex', height: '110px' }}>
          {/* Y Axis */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#9DA2B8', paddingRight: '6px', textAlign: 'right', minWidth: '32px' }}>
            <span>60 hrs</span>
            <span>50 hrs</span>
            <span>40 hrs</span>
            <span>30 hrs</span>
            <span>20 hrs</span>
          </div>

          {/* Chart SVG Canvas */}
          <div style={{ flex: 1, position: 'relative' }}>
            {/* Grid Lines */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
              <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
              <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
              <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
              <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
              <div style={{ borderBottom: '1px solid #ECEEF6', height: 0 }} />
            </div>

            <svg viewBox="0 0 200 90" preserveAspectRatio="none" style={{ width: '100%', height: '90px', overflow: 'visible' }}>
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7146FD" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#7146FD" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Area Under Curve */}
              <path
                d="M 10 75 Q 40 70, 60 62 T 110 52 T 150 24 T 190 32 L 190 85 L 10 85 Z"
                fill="url(#areaGrad)"
              />

              {/* Curve Line */}
              <path
                d="M 10 75 Q 40 70, 60 62 T 110 52 T 150 24 T 190 32"
                fill="none"
                stroke="#7146FD"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Dots on line */}
              <circle cx="10" cy="75" r="3" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
              <circle cx="60" cy="62" r="3" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
              <circle cx="110" cy="52" r="3" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
              <circle cx="150" cy="24" r="3.5" fill="#7146FD" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="190" cy="32" r="3" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
            </svg>

            {/* Peak Tooltip Pill above 48 hrs (Aug) */}
            <div
              style={{
                position: 'absolute',
                top: '6px',
                right: '42px',
                background: '#1A1D2E',
                color: '#FFFFFF',
                fontSize: '9.5px',
                fontWeight: '800',
                padding: '2px 7px',
                borderRadius: '9999px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.18)'
              }}
            >
              48 hrs
            </div>
          </div>
        </div>

        {/* X Axis Months */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '36px', fontSize: '9.5px', color: '#9DA2B8', marginTop: '6px', paddingRight: '6px' }}>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span style={{ fontWeight: '800', color: '#1A1D2E' }}>Aug</span>
          <span>Sept</span>
        </div>
      </div>
    </div>
  );
}

// 4. Working Level Bar Chart Card (Used in Screen 2)
function WorkingLevelCard() {
  const bars = [
    { sprint: 'Sprint 1', val: 55, mood: '🟢', moodColor: '#00BA88', isTarget: false },
    { sprint: 'Sprint 2', val: 75, mood: '🟡', moodColor: '#F59E0B', isTarget: false },
    { sprint: 'Sprint 3', val: 65, mood: '🟢', moodColor: '#00BA88', isTarget: false },
    { sprint: 'Sprint 4', val: 105, mood: '🔴', moodColor: '#ED2E7E', isTarget: true }, // High stress
    { sprint: 'Sprint 5', val: 60, mood: '🟠', moodColor: '#FF8A00', isTarget: false },
  ];

  return (
    <div className="onboard-card-content">
      <div className="card-top-row">
        <span className="card-title">Working Level</span>
      </div>
      <p className="card-subtitle">Your story point so far</p>

      {/* Bar Chart */}
      <div style={{ display: 'flex', height: '118px', marginTop: '4px' }}>
        {/* Y Axis */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#9DA2B8', paddingRight: '8px', textAlign: 'right', minWidth: '24px' }}>
          <span>120</span>
          <span>110</span>
          <span>100</span>
          <span>90</span>
          <span>80</span>
        </div>

        {/* Bars Container */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingRight: '8px', borderBottom: '1px solid #ECEEF6' }}>
          {bars.map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '28px' }}>
              {/* Mood Face Icon */}
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: b.moodColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '4px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFFFFF' }} />
              </div>

              {/* Bar Fill */}
              <div
                style={{
                  width: '14px',
                  height: `${b.val * 0.72}px`,
                  borderRadius: '6px 6px 0 0',
                  background: b.isTarget ? 'linear-gradient(180deg, #7146FD 0%, #5833EA 100%)' : '#EFEFF8',
                  boxShadow: b.isTarget ? '0 4px 12px rgba(113, 70, 253, 0.35)' : 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sprints Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '28px', paddingRight: '8px', fontSize: '8.5px', color: '#7E8299', marginTop: '6px' }}>
        {bars.map((b, i) => (
          <span key={i} style={{ fontWeight: b.isTarget ? '800' : '500', color: b.isTarget ? '#1A1D2E' : '#7E8299' }}>
            {b.sprint}
          </span>
        ))}
      </div>
    </div>
  );
}

// 5. Achievement Badges Card (Used in Screen 3)
function AchievementBadgesCard() {
  const badges = [
    { title: 'Probation Slayer', color: '#10B981', bg: '#E6F8F3', icon: '💎' },
    { title: 'Rising Junior', color: '#7146FD', bg: '#F0EEFC', icon: '⭐' },
    { title: 'Employee Of The Month', color: '#F59E0B', bg: '#FEF3C7', icon: '🏅' },
    { title: 'Top Performer', color: '#EC4899', bg: '#FCE7F3', icon: '💎' },
    { title: 'Leader Of The Year', color: '#EF4444', bg: '#FEE2E2', icon: '👑' },
  ];

  return (
    <div className="onboard-card-content">
      <div className="card-top-row">
        <span className="card-title">Achievement</span>
      </div>
      <p className="card-subtitle">Your achievement so far</p>

      {/* Badges Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '10px' }}>
        {badges.map((b, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '48px', textAlign: 'center' }}>
            {/* Hexagon/Diamond Icon Badge */}
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: b.bg,
                border: `1.5px solid ${b.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                transform: 'rotate(45deg)',
                boxShadow: '0 3px 8px rgba(0,0,0,0.06)'
              }}
            >
              <span style={{ transform: 'rotate(-45deg)' }}>{b.icon}</span>
            </div>

            {/* Label */}
            <span style={{ fontSize: '8px', fontWeight: '700', color: '#4A4E69', marginTop: '10px', lineHeight: '1.2' }}>
              {b.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main 3D Floating Perspective Scene Orchestrator
export default function OnboardingIllustration({ step = 1 }) {
  switch (step) {
    case 1:
      // Screen 1: Today Meeting (Back) + Today Task (Front)
      return (
        <div className="onboarding-cards-3d-scene">
          <div className="floating-card-3d card-back">
            <TodayMeetingCard />
          </div>
          <div className="floating-card-3d card-front">
            <TodayTaskCard />
          </div>
        </div>
      );

    case 2:
      // Screen 2: Working Period (Back) + Working Level (Front)
      return (
        <div className="onboarding-cards-3d-scene">
          <div className="floating-card-3d card-back">
            <WorkingPeriodCard />
          </div>
          <div className="floating-card-3d card-front">
            <WorkingLevelCard />
          </div>
        </div>
      );

    case 3:
      // Screen 3: Achievement Badges (Back) + Today Task (Front)
      return (
        <div className="onboarding-cards-3d-scene">
          <div className="floating-card-3d card-back">
            <AchievementBadgesCard />
          </div>
          <div className="floating-card-3d card-front">
            <TodayTaskCard />
          </div>
        </div>
      );

    case 4:
    default:
      // Screen 4 (OnboardFinal): Today Task (Back) + Working Period (Front)
      return (
        <div className="onboarding-cards-3d-scene">
          <div className="floating-card-3d card-back">
            <TodayTaskCard />
          </div>
          <div className="floating-card-3d card-front">
            <WorkingPeriodCard />
          </div>
        </div>
      );
  }
}
