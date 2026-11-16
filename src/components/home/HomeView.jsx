import React from 'react';
import { Sparkles, Calendar, Clock, Video, Zap, Flag, MessageSquare, Inbox } from 'lucide-react';

export default function HomeView({ isEmpty = false, onTabJump }) {
  if (isEmpty) {
    return (
      <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
        {/* Purple Banner */}
        <div className="home-summary-banner">
          <div>
            <h2 className="home-summary-title">My Work Summary</h2>
            <p className="home-summary-desc">No active tasks or attendance recorded today.</p>
          </div>
          <Sparkles size={36} color="#FFFFFF" opacity={0.8} />
        </div>

        {/* Empty Today Meeting */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today Meeting</h3>
              <span className="home-section-badge">0</span>
            </div>
          </div>
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <Inbox size={32} />
            </div>
            <h4 className="empty-state-title">No Meetings Today</h4>
            <p className="empty-state-subtitle">
              You have no meetings scheduled on your calendar for today.
            </p>
          </div>
        </div>

        {/* Empty Today Task */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today Task</h3>
              <span className="home-section-badge">0</span>
            </div>
          </div>
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <Calendar size={32} />
            </div>
            <h4 className="empty-state-title">No Task Assigned</h4>
            <p className="empty-state-subtitle">
              Great news! You have no pending tasks scheduled on your plate.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
      {/* 1. Purple Work Summary Banner matching Figma 1:1 */}
      <div className="home-summary-banner">
        <div>
          <h2 className="home-summary-title">My Work Summary</h2>
          <p className="home-summary-desc">
            Today task &amp; presence activity
          </p>
        </div>
        {/* 3D Surveillance Camera / Work graphic */}
        <div style={{ flexShrink: 0 }}>
          <svg width="54" height="54" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="26" fill="white" fillOpacity="0.18" />
            <path d="M16 28L40 18L44 32L24 40L16 28Z" fill="white" fillOpacity="0.9" />
            <circle cx="23" cy="33" r="4.5" fill="#7146FD" />
            <path d="M40 18L46 15L48 24L44 32" fill="#E0E7FF" />
            {/* Sparkles */}
            <circle cx="14" cy="18" r="1.5" fill="white" />
            <circle cx="48" cy="38" r="2" fill="white" />
            <path d="M46 12L47 9L48 12L51 13L48 14L47 17L46 14L43 13L46 12Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* 2. Today Meeting Section matching Figma 1:1 */}
      <div className="home-section">
        <div className="home-section-header" style={{ marginBottom: '12px' }}>
          <div>
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today Meeting</h3>
              <span className="home-section-badge">2</span>
            </div>
            <p className="home-section-subtitle">Your schedule for the day</p>
          </div>
        </div>

        {/* Meeting 1: Townhall Meeting */}
        <div className="activity-card" style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7146FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Video size={14} color="#FFFFFF" strokeWidth={2.4} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#1A1D2E' }}>
                  Townhall Meeting
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ background: '#FAFAFE', border: '1px solid #ECEEF6', color: '#7E8299', padding: '3px 8px', borderRadius: '9999px', fontSize: '10px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Clock size={10} /> 01:30 AM - 02:00 AM
                </span>
                <button
                  type="button"
                  style={{ background: '#7146FD', color: '#FFFFFF', border: 'none', borderRadius: '9999px', padding: '4px 11px', fontSize: '10.5px', fontWeight: '700', cursor: 'pointer' }}
                  onClick={() => alert('Launching Meet: Townhall Meeting')}
                >
                  Join Meet
                </button>
              </div>
            </div>

            {/* Avatars */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFD79E', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
                  👧
                </div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FCE7F3', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', marginLeft: '-5px' }}>
                  👩‍🦱
                </div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C7D2FE', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', marginLeft: '-5px' }}>
                  👩‍💻
                </div>
              </div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#7E8299', marginLeft: '6px' }}>
                +3
              </span>
            </div>
          </div>
        </div>

        {/* Meeting 2: Dashboard Report */}
        <div className="activity-card">
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7146FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Video size={14} color="#FFFFFF" strokeWidth={2.4} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#1A1D2E' }}>
                  Dashboard Report
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ background: '#FAFAFE', border: '1px solid #ECEEF6', color: '#7E8299', padding: '3px 8px', borderRadius: '9999px', fontSize: '10px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Clock size={10} /> 01:30 AM - 02:00 AM
                </span>
                <button
                  type="button"
                  style={{ background: '#7146FD', color: '#FFFFFF', border: 'none', borderRadius: '9999px', padding: '4px 11px', fontSize: '10.5px', fontWeight: '700', cursor: 'pointer' }}
                  onClick={() => alert('Launching Meet: Dashboard Report')}
                >
                  Join Meet
                </button>
              </div>
            </div>

            {/* Avatars */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FCE7F3', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
                  👩‍🦱
                </div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C7D2FE', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', marginLeft: '-5px' }}>
                  👩‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Today Task Section matching Figma 1:1 */}
      <div className="home-section">
        <div className="home-section-header" style={{ marginBottom: '12px' }}>
          <div>
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today Task</h3>
              <span className="home-section-badge">1</span>
            </div>
            <p className="home-section-subtitle">The tasks assigned to you for today</p>
          </div>
        </div>

        {/* Task Card: Wiring Dashboard Analytics */}
        <div className="task-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#7146FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={13} color="#FFFFFF" strokeWidth={2.5} />
            </div>
            <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#1A1D2E', margin: 0 }}>
              Wiring Dashboard Analytics
            </h4>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={{ background: '#F0F1F7', color: '#7E8299', padding: '2.5px 8px', borderRadius: '9999px', fontSize: '10px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8F95B2' }} /> In Progress
            </span>
            <span style={{ background: '#ED2E7E', color: '#FFFFFF', padding: '2.5px 9px', borderRadius: '9999px', fontSize: '10px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              <Flag size={9} color="#FFFFFF" fill="#FFFFFF" /> High
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ height: '5px', background: '#EAE6FE', borderRadius: '9999px', overflow: 'hidden', margin: '6px 0 8px' }}>
            <div style={{ height: '100%', background: '#7146FD', width: '70%', borderRadius: '9999px' }} />
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFD79E', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>
                👧
              </div>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FCE7F3', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', marginLeft: '-5px' }}>
                👩‍🦱
              </div>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C7D2FE', border: '1.5px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', marginLeft: '-5px' }}>
                👩‍💻
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ background: '#FFFFFF', border: '1px solid #ECEEF6', color: '#7E8299', padding: '3px 8px', borderRadius: '9999px', fontSize: '10px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={10} /> 27 April
              </span>
              <span style={{ background: '#FFFFFF', border: '1px solid #ECEEF6', color: '#7E8299', padding: '3px 8px', borderRadius: '9999px', fontSize: '10px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <MessageSquare size={10} /> 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
