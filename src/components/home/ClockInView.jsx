import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, Play, Square, History } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';
import { initialAttendance } from '../../data/mockData';

export default function ClockInView({ isEmpty = false }) {
  const [attendance, setAttendance] = useState(initialAttendance);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [seconds, setSeconds] = useState(initialAttendance.activeSeconds);
  const [statusMessage, setStatusMessage] = useState('');

  // Live timer tick when clocked in
  useEffect(() => {
    let interval = null;
    if (isClockedIn) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isClockedIn]);

  const formatTimer = (totalSecs) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} Hrs`;
  };

  const toggleClock = () => {
    if (!isClockedIn) {
      setIsClockedIn(true);
      setStatusMessage('Clocked In successfully at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } else {
      setIsClockedIn(false);
      setStatusMessage('Clocked Out successfully at ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
    setTimeout(() => setStatusMessage(''), 3500);
  };

  if (isEmpty) {
    return (
      <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
        {/* Header */}
        <div className="home-summary-banner" style={{ background: 'var(--purple-gradient-header)' }}>
          <div>
            <h2 className="home-summary-title">Let's Clock-In!</h2>
            <p className="home-summary-desc">No active work logs recorded for this period.</p>
          </div>
          <Clock size={36} color="#FFFFFF" opacity={0.8} />
        </div>

        <div className="home-section">
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <History size={32} />
            </div>
            <h4 className="empty-state-title">No Working Time Available</h4>
            <p className="empty-state-subtitle">
              You haven't recorded any clock-in shifts yet. Hit the Clock-In button to start your daily timer.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
      {/* Header Banner */}
      <div className="home-summary-banner">
        <div>
          <h2 className="home-summary-title">Let's Clock-In!</h2>
          <p className="home-summary-desc">Shift: 09:00 AM – 06:00 PM (Regular Day)</p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <Clock size={40} color="#FFFFFF" opacity={0.9} />
        </div>
      </div>

      {/* Live Breakdown Card */}
      <div className="home-section">
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)' }}>Live Breakdown</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Today: Friday, 12 Sept 2024</p>
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '11.5px',
                fontWeight: '700',
                background: isClockedIn ? 'var(--status-green-bg)' : 'var(--purple-soft)',
                color: isClockedIn ? 'var(--status-green)' : 'var(--primary-purple)'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: isClockedIn ? 'var(--status-green)' : 'var(--text-muted)',
                  animation: isClockedIn ? 'pulse 1.5s infinite' : 'none'
                }}
              />
              {isClockedIn ? 'Active Now' : 'Off-Duty'}
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              padding: '14px',
              background: 'var(--purple-soft)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '18px'
            }}
          >
            <div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: '600' }}>Today Logged</div>
              <div style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>
                {formatTimer(seconds)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: '600' }}>Target Hours</div>
              <div style={{ fontSize: '17px', fontWeight: '800', color: 'var(--primary-purple)', marginTop: '2px' }}>
                {attendance.targetHours}
              </div>
            </div>
          </div>

          {statusMessage && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--status-green-bg)',
                color: 'var(--status-green)',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '14px'
              }}
            >
              <CheckCircle2 size={16} />
              <span>{statusMessage}</span>
            </div>
          )}

          <PrimaryButton
            size="lg"
            onClick={toggleClock}
            icon={isClockedIn ? <Square size={18} /> : <Play size={18} />}
            style={{
              background: isClockedIn ? 'linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)' : 'var(--purple-gradient)',
              boxShadow: isClockedIn ? '0 8px 20px rgba(238, 82, 83, 0.35)' : 'var(--shadow-purple-btn)'
            }}
          >
            {isClockedIn ? 'Clock-Out' : 'Clock-In'}
          </PrimaryButton>
        </div>

        {/* History Breakdown */}
        <div className="home-section-header" style={{ marginBottom: '10px' }}>
          <h3 className="home-section-title">Attendance History</h3>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Last 30 Days</span>
        </div>

        {attendance.history.map((item) => (
          <div
            key={item.id}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '14px 16px',
              marginBottom: '10px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-dark)' }}>
                {item.date}
              </div>
              <span className="status-pill completed">{item.status}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
              <div>
                <span>Total: </span>
                <strong style={{ color: 'var(--text-dark)' }}>{item.totalHrs}</strong>
              </div>
              <div>
                <span>Working: </span>
                <strong style={{ color: 'var(--text-dark)' }}>{item.workingHrs}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
