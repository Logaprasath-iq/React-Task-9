import React from 'react';
import { Video, Zap, Clock, Calendar, MessageSquare, Flag } from 'lucide-react';

// Exact SVG Vector Avatars matching Figma
function AvatarBlonde({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ borderRadius: '50%', border: '1.5px solid #FFFFFF', flexShrink: 0 }}>
      {/* Background Face */}
      <circle cx="12" cy="12" r="12" fill="#FFE2C7" />
      {/* Hair (Blonde/Orange) */}
      <path d="M4 11C4 6.5 7.5 3 12 3C16.5 3 20 6.5 20 11C20 11 18 8 12 8C6 8 4 11 4 11Z" fill="#F59E0B" />
      <circle cx="5" cy="8" r="3" fill="#F59E0B" />
      <circle cx="19" cy="8" r="3" fill="#F59E0B" />
      {/* Eyes */}
      <circle cx="9.5" cy="12.5" r="1.2" fill="#2E1B0F" />
      <circle cx="14.5" cy="12.5" r="1.2" fill="#2E1B0F" />
      {/* Smile */}
      <path d="M10.5 15C11 16 13 16 13.5 15" stroke="#2E1B0F" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Shirt */}
      <path d="M6 24C6 20 8.5 18.5 12 18.5C15.5 18.5 18 20 18 24Z" fill="#F472B6" />
    </svg>
  );
}

function AvatarPink({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ borderRadius: '50%', border: '1.5px solid #FFFFFF', flexShrink: 0, marginLeft: '-6px' }}>
      <circle cx="12" cy="12" r="12" fill="#FED7AA" />
      {/* Pink hair with bangs */}
      <path d="M3 12C3 6.5 7 3.5 12 3.5C17 3.5 21 6.5 21 12C21 12 19 8.5 13 8.5C7 8.5 3 12 3 12Z" fill="#EC4899" />
      <path d="M5 9C4 11 4 14 5 15C6 14 7 11 7 9Z" fill="#EC4899" />
      <circle cx="9" cy="13" r="1.2" fill="#1E293B" />
      <circle cx="15" cy="13" r="1.2" fill="#1E293B" />
      <path d="M10.5 15.5C11 16.2 13 16.2 13.5 15.5" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Shirt */}
      <path d="M5 24C5 20.5 8 19 12 19C16 19 19 20.5 19 24Z" fill="#818CF8" />
    </svg>
  );
}

function AvatarTeal({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ borderRadius: '50%', border: '1.5px solid #FFFFFF', flexShrink: 0, marginLeft: '-6px' }}>
      <circle cx="12" cy="12" r="12" fill="#FEF3C7" />
      {/* Teal / Cyan Hair */}
      <path d="M4 11C4 6 7.5 3 12 3C16.5 3 20 6 20 11C20 9 18 7.5 12 7.5C6 7.5 4 11 4 11Z" fill="#14B8A6" />
      <circle cx="4.5" cy="10" r="2.5" fill="#14B8A6" />
      <circle cx="19.5" cy="10" r="2.5" fill="#14B8A6" />
      <circle cx="9.5" cy="12.5" r="1.2" fill="#1E293B" />
      <circle cx="14.5" cy="12.5" r="1.2" fill="#1E293B" />
      <path d="M10.5 15C11 16 13 16 13.5 15" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" fill="none" />
      {/* Shirt */}
      <path d="M5 24C5 20 8 18.5 12 18.5C16 18.5 19 20 19 24Z" fill="#34D399" />
    </svg>
  );
}

// 3 Avatars Row matching Figma
function IllustratedAvatarsRow({ extra = '+3' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AvatarBlonde />
        <AvatarPink />
        <AvatarTeal />
      </div>
      {extra && (
        <span style={{ fontSize: '10px', fontWeight: '800', color: '#7E8299', marginLeft: '5px' }}>
          {extra}
        </span>
      )}
    </div>
  );
}

// Vector Mood Face for Working Level Bars
function VectorMoodFace({ type = 'happy' }) {
  if (type === 'happy-green') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="9" fill="#00BA88" />
        <circle cx="6.2" cy="7.5" r="1" fill="#003B2A" />
        <circle cx="11.8" cy="7.5" r="1" fill="#003B2A" />
        <path d="M6 10.8C7 12.8 11 12.8 12 10.8" stroke="#003B2A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (type === 'smile-yellow') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="9" fill="#F59E0B" />
        <circle cx="6.2" cy="7.5" r="1" fill="#78350F" />
        <circle cx="11.8" cy="7.5" r="1" fill="#78350F" />
        <path d="M6.5 11.2C7.5 12.2 10.5 12.2 11.5 11.2" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  if (type === 'stressed-red') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
        <circle cx="9" cy="9" r="9" fill="#FF4757" />
        {/* Frowning / stressed eyebrows and eyes */}
        <path d="M5 6.5L7.5 8M7.5 6.5L5 8" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M13 6.5L10.5 8M10.5 6.5L13 8" stroke="#FFFFFF" strokeWidth="1.1" strokeLinecap="round" />
        {/* Open frown mouth */}
        <path d="M6.5 12.5C7.5 11 10.5 11 11.5 12.5" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  // Unhappy Orange
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="9" fill="#FF8A00" />
      <circle cx="6.2" cy="7.5" r="1" fill="#5A2300" />
      <circle cx="11.8" cy="7.5" r="1" fill="#5A2300" />
      <path d="M6.5 12C7.5 10.8 10.5 10.8 11.5 12" stroke="#5A2300" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// 3D Hexagonal Achievement Badge matching Screen 3 Figma crop
function HexagonBadge({ titleLine1, titleLine2, gradId, color1, color2, iconType }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '48px', textAlign: 'center' }}>
      <svg width="34" height="38" viewBox="0 0 34 38" style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.12))' }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        {/* Hexagon Polygon */}
        <polygon
          points="17,2 32,9.5 32,28.5 17,36 2,28.5 2,9.5"
          fill={`url(#${gradId})`}
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
        {/* Center Icons */}
        {iconType === 'diamond' && (
          <path d="M17 11L23 19L17 27L11 19Z" fill="#FFFFFF" opacity="0.95" />
        )}
        {iconType === 'star' && (
          <path d="M17 10L19 15.5L25 16L20.5 19.5L22 25L17 22L12 25L13.5 19.5L9 16L15 15.5Z" fill="#FFFFFF" opacity="0.95" />
        )}
        {iconType === 'sparkle' && (
          <path d="M17 10C17 14.5 19 16.5 23.5 16.5C19 16.5 17 18.5 17 23C17 18.5 15 16.5 10.5 16.5C15 16.5 17 14.5 17 10Z" fill="#FFFFFF" opacity="0.95" />
        )}
        {iconType === 'gem' && (
          <g fill="#FFFFFF" opacity="0.95">
            <path d="M13 14H21L24 18L17 26L10 18L13 14Z" />
            <path d="M13 14L17 18L21 14" stroke="#F472B6" strokeWidth="0.7" fill="none" />
            <path d="M17 18V26" stroke="#F472B6" strokeWidth="0.7" />
          </g>
        )}
        {iconType === 'crown' && (
          <path d="M11 23H23L24 16L20 19L17 13L14 19L10 16L11 23Z" fill="#FFFFFF" opacity="0.95" />
        )}
      </svg>

      <span style={{ fontSize: '7.8px', fontWeight: '700', color: '#4A4E69', fontStyle: 'italic', marginTop: '6px', lineHeight: '1.2' }}>
        {titleLine1}<br />{titleLine2}
      </span>
    </div>
  );
}

// 1. TODAY MEETING CARD (Screen 1 Back Card)
export function TodayMeetingCard() {
  return (
    <div className="card-content-inner">
      <div className="card-top-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="card-title">Today Meeting</span>
          <span className="card-count-badge">2</span>
        </div>
      </div>
      <p className="card-subtitle">Your schedule for the day</p>

      {/* Row 1 */}
      <div className="card-inner-box">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div className="card-icon-circle purple">
              <Video size={13} color="#FFFFFF" strokeWidth={2.4} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#1A1D2E' }}>
              Townhall Meeting
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span className="pill-gray">
              <Clock size={10} /> 01:30 AM – 02:00 AM
            </span>
            <button type="button" className="pill-btn-purple">
              Join Meet
            </button>
          </div>
        </div>

        {/* Avatars */}
        <IllustratedAvatarsRow extra="+3" />
      </div>

      {/* Row 2 partially peeking out below to match Figma */}
      <div className="card-inner-box" style={{ marginTop: '8px', opacity: 0.85 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div className="card-icon-circle purple">
              <Video size={13} color="#FFFFFF" strokeWidth={2.4} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#1A1D2E' }}>
              Design Sync Meeting
            </span>
          </div>
          <AvatarPink />
        </div>
      </div>
    </div>
  );
}

// 2. TODAY TASK CARD (Screen 1 Front, Screen 3 Front, Screen 4 Back)
export function TodayTaskCard() {
  return (
    <div className="card-content-inner">
      <div className="card-top-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div className="card-mini-icon">
            <Zap size={10} color="#7146FD" />
          </div>
          <span className="card-title">Today Task</span>
          <span className="card-count-badge">1</span>
        </div>
      </div>
      <p className="card-subtitle">The tasks assigned to you for today</p>

      <div className="card-inner-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div className="card-icon-circle purple">
            <Zap size={13} color="#FFFFFF" strokeWidth={2.5} />
          </div>
          <span style={{ fontSize: '13px', fontWeight: '800', color: '#1A1D2E' }}>
            Wiring Dashboard Analytics
          </span>
        </div>

        {/* Status Tags */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <span className="pill-status-in-progress">
            <span className="dot-gray" /> In Progress
          </span>
          <span className="pill-status-high">
            <Flag size={9} color="#FFFFFF" fill="#FFFFFF" /> High
          </span>
        </div>

        {/* Purple Progress Bar */}
        <div className="card-progress-track">
          <div className="card-progress-fill" style={{ width: '70%' }} />
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
          <IllustratedAvatarsRow extra={null} />

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

// 3. WORKING PERIOD LINE/AREA CHART CARD (Screen 2 Back, Screen 4 Front)
export function WorkingPeriodCard() {
  return (
    <div className="card-content-inner">
      <div className="card-top-row">
        <span className="card-title">Working Period</span>
      </div>
      <p className="card-subtitle">Average your working period</p>

      <div style={{ position: 'relative', marginTop: '4px', paddingRight: '6px' }}>
        <div style={{ display: 'flex', height: '110px' }}>
          {/* Y Axis */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#9DA2B8', paddingRight: '6px', textAlign: 'right', minWidth: '32px' }}>
            <span>60 hrs</span>
            <span>50 hrs</span>
            <span>40 hrs</span>
            <span>30 hrs</span>
            <span>20 hrs</span>
          </div>

          {/* Canvas */}
          <div style={{ flex: 1, position: 'relative' }}>
            {/* Dashed Grid Lines */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
              <div style={{ borderBottom: '1px dashed #ECEEF6', height: 0 }} />
              <div style={{ borderBottom: '1px dashed #ECEEF6', height: 0 }} />
              <div style={{ borderBottom: '1px dashed #ECEEF6', height: 0 }} />
              <div style={{ borderBottom: '1px dashed #ECEEF6', height: 0 }} />
              <div style={{ borderBottom: '1px solid #E2E4F0', height: 0 }} />
            </div>

            <svg viewBox="0 0 200 90" preserveAspectRatio="none" style={{ width: '100%', height: '90px', overflow: 'visible' }}>
              <defs>
                <linearGradient id="wpGradExact" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7146FD" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#7146FD" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Gradient Area Fill */}
              <path
                d="M 15 70 L 60 62 L 105 54 L 150 18 L 195 36 L 195 85 L 15 85 Z"
                fill="url(#wpGradExact)"
              />

              {/* Purple Line */}
              <path
                d="M 15 70 L 60 62 L 105 54 L 150 18 L 195 36"
                fill="none"
                stroke="#7146FD"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              <circle cx="15" cy="70" r="3.2" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
              <circle cx="60" cy="62" r="3.2" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
              <circle cx="105" cy="54" r="3.2" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
              <circle cx="150" cy="18" r="3.5" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2.2" />
              <circle cx="195" cy="36" r="3.2" fill="#FFFFFF" stroke="#7146FD" strokeWidth="2" />
            </svg>

            {/* Peak Indicator "48 hrs" directly above August peak */}
            <div
              style={{
                position: 'absolute',
                top: '-3px',
                right: '40px',
                color: '#1A1D2E',
                fontSize: '9.5px',
                fontWeight: '800',
                letterSpacing: '-0.2px'
              }}
            >
              48 hrs
            </div>
          </div>
        </div>

        {/* X Axis */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '36px', fontSize: '9px', color: '#9DA2B8', marginTop: '6px', paddingRight: '6px' }}>
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

// 4. WORKING LEVEL BAR CHART CARD (Screen 2 Front)
export function WorkingLevelCard() {
  const bars = [
    { sprint: 'Sprint 1', height: 48, moodType: 'happy-green', isTarget: false },
    { sprint: 'Sprint 2', height: 65, moodType: 'smile-yellow', isTarget: false },
    { sprint: 'Sprint 3', height: 56, moodType: 'happy-green', isTarget: false },
    { sprint: 'Sprint 4', height: 96, moodType: 'stressed-red', isTarget: true }, // Peak Purple Bar
    { sprint: 'Sprint 5', height: 82, moodType: 'unhappy-orange', isTarget: false },
  ];

  return (
    <div className="card-content-inner">
      <div className="card-top-row">
        <span className="card-title">Working Level</span>
      </div>
      <p className="card-subtitle">Your story point so far</p>

      {/* Bar Chart */}
      <div style={{ display: 'flex', height: '120px', marginTop: '4px' }}>
        {/* Y Axis */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '9px', color: '#9DA2B8', paddingRight: '8px', textAlign: 'right', minWidth: '24px' }}>
          <span>120</span>
          <span>110</span>
          <span>100</span>
          <span>90</span>
          <span>80</span>
        </div>

        {/* Bars Container with Dashed Background Lines */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingRight: '8px', borderBottom: '1px solid #ECEEF6' }}>
          {/* Dashed Horizontal Lines */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
            <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
            <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
            <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
            <div style={{ borderBottom: '1px dashed #F0F1F8', height: 0 }} />
          </div>

          {bars.map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '28px', zIndex: 1 }}>
              {/* Vector Mood Face */}
              <div style={{ marginBottom: '4px' }}>
                <VectorMoodFace type={b.moodType} />
              </div>

              {/* Vertical Pill Bar */}
              <div
                style={{
                  width: '16px',
                  height: `${b.height}px`,
                  borderRadius: '6px 6px 0 0',
                  background: b.isTarget ? '#7146FD' : '#E9EBF2',
                  boxShadow: b.isTarget ? '0 4px 14px rgba(113, 70, 253, 0.40)' : 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sprints Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '28px', paddingRight: '8px', fontSize: '8px', color: '#7E8299', marginTop: '6px' }}>
        {bars.map((b, i) => (
          <span key={i} style={{ fontWeight: b.isTarget ? '800' : '500', color: b.isTarget ? '#1A1D2E' : '#7E8299' }}>
            {b.sprint}
          </span>
        ))}
      </div>
    </div>
  );
}

// 5. ACHIEVEMENT BADGES CARD (Screen 3 Back)
export function AchievementBadgesCard() {
  return (
    <div className="card-content-inner">
      <div className="card-top-row">
        {/* Note exact spelling in Figma screenshot: Achiuevement */}
        <span className="card-title">Achiuevement</span>
      </div>
      <p className="card-subtitle">Your achievement so far</p>

      {/* 5 3D Hexagon Badges matching Figma Screen 3 crop */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '8px' }}>
        <HexagonBadge
          titleLine1="Probation"
          titleLine2="Slayer"
          gradId="hexGreen"
          color1="#4ADE80"
          color2="#16A34A"
          iconType="diamond"
        />
        <HexagonBadge
          titleLine1="Rising"
          titleLine2="Junior"
          gradId="hexPurple"
          color1="#A5B4FC"
          color2="#6366F1"
          iconType="star"
        />
        <HexagonBadge
          titleLine1="Employee Of"
          titleLine2="The Month"
          gradId="hexGold"
          color1="#FDE047"
          color2="#F59E0B"
          iconType="sparkle"
        />
        <HexagonBadge
          titleLine1="Top"
          titleLine2="Performer"
          gradId="hexPink"
          color1="#F472B6"
          color2="#DB2777"
          iconType="gem"
        />
        <HexagonBadge
          titleLine1="Leader Of"
          titleLine2="The Year"
          gradId="hexRed"
          color1="#F87171"
          color2="#DC2626"
          iconType="crown"
        />
      </div>
    </div>
  );
}

// Main 3D Floating Isometric Orchestrator
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
