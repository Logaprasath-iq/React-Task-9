import React from 'react';
import { Video, Zap, Clock, Calendar, MessageSquare, Flag, Flame, Heart, Award, Trophy, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function OnboardingIllustration({ step = 1 }) {
  // Avatars SVG components
  const Avatar1 = () => (
    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFD166', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', overflow: 'hidden' }}>
      👩‍🦰
    </div>
  );
  const Avatar2 = () => (
    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#06D6A0', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', overflow: 'hidden' }}>
      👨‍💼
    </div>
  );
  const Avatar3 = () => (
    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EF476F', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', overflow: 'hidden' }}>
      👩‍💻
    </div>
  );

  switch (step) {
    case 1:
      // Screen 1: EXACT MATCH to user screenshot (media_1794816396188_8728b509.jpg)
      return (
        <div className="onboarding-cards-3d-scene">
          {/* Card 1: Today Meeting (Top / Back tilted card) */}
          <div className="floating-card-3d card-back">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="card-title">Today Meeting</span>
                <span className="card-count-badge">2</span>
              </div>
            </div>
            <p className="card-subtitle">Your schedule for the day</p>

            {/* Inner row */}
            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="card-icon-circle purple">
                    <Video size={14} color="#FFFFFF" />
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <div className="avatar-overlap-row">
                  <Avatar1 />
                  <Avatar2 />
                  <Avatar3 />
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#7E8299', marginLeft: '6px' }}>
                  +3
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Today Task (Front overlapping card) */}
          <div className="floating-card-3d card-front">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div className="card-mini-icon">
                  <Zap size={11} color="#7146FD" />
                </div>
                <span className="card-title">Today Task</span>
                <span className="card-count-badge">1</span>
              </div>
            </div>
            <p className="card-subtitle">The tasks assigned to you for today</p>

            {/* Inner task box */}
            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <div className="card-icon-circle purple">
                  <Zap size={13} color="#FFFFFF" />
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
                  <Flag size={10} color="#ED2E7E" /> High
                </span>
              </div>

              {/* Purple Progress Bar */}
              <div className="card-progress-track">
                <div className="card-progress-fill" style={{ width: '70%' }} />
              </div>

              {/* Footer Meta Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <div className="avatar-overlap-row">
                  <Avatar1 />
                  <Avatar2 />
                  <Avatar3 />
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
        </div>
      );

    case 2:
      // Screen 2: Manage Stress Effectively (Workload Balance & Burnout Risk)
      return (
        <div className="onboarding-cards-3d-scene">
          {/* Card 1: Stress & Energy Health */}
          <div className="floating-card-3d card-back">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="card-title">Energy Level</span>
                <span className="card-count-badge green">Good</span>
              </div>
            </div>
            <p className="card-subtitle">AI-assisted daily recovery score</p>

            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="card-icon-circle green">
                    <Heart size={14} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#1A1D2E' }}>Optimal Rest</div>
                    <div style={{ fontSize: '10px', color: '#7E8299' }}>Heart-rate variability balanced</div>
                  </div>
                </div>
                <span style={{ fontSize: '15px', fontWeight: '800', color: '#00BA88' }}>88%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Workload Balance & Burnout Risk */}
          <div className="floating-card-3d card-front">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div className="card-mini-icon">
                  <Flame size={12} color="#FF8A00" />
                </div>
                <span className="card-title">Workload Balance</span>
                <span className="card-count-badge orange">Balanced</span>
              </div>
            </div>
            <p className="card-subtitle">Track your weekly tasks and avoid fatigue</p>

            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="card-icon-circle purple">
                    <Flame size={13} color="#FFFFFF" />
                  </div>
                  <div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#1A1D2E' }}>
                      Burnout Risk Index
                    </span>
                    <div style={{ fontSize: '10.5px', color: '#7E8299' }}>Safe Zone: 3 Tasks Remaining</div>
                  </div>
                </div>
                <span className="pill-status-in-progress" style={{ background: '#E6F9F2', color: '#00BA88' }}>
                  ● 62% Safe
                </span>
              </div>

              {/* Progress bar */}
              <div className="card-progress-track">
                <div className="card-progress-fill" style={{ width: '62%', background: 'linear-gradient(90deg, #00BA88 0%, #FF8A00 100%)' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                <span className="pill-gray">
                  ☕ Break Recommended in 45m
                </span>
                <span className="pill-gray">
                  🎯 5h Work Logged
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 3:
      // Screen 3: Plan for Success (Achievement badges & conquer tasks)
      return (
        <div className="onboarding-cards-3d-scene">
          {/* Card 1: Achievement Milestone */}
          <div className="floating-card-3d card-back">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="card-title">Weekly Milestone</span>
                <span className="card-count-badge gold">100%</span>
              </div>
            </div>
            <p className="card-subtitle">All primary deliverables finalized</p>

            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="card-icon-circle gold">
                    <Star size={14} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#1A1D2E' }}>Sprint Champion</div>
                    <div style={{ fontSize: '10px', color: '#7E8299' }}>Earned +250 Karma Points</div>
                  </div>
                </div>
                <span style={{ fontSize: '14px', fontWeight: '800', color: '#F59E0B' }}>Level 4</span>
              </div>
            </div>
          </div>

          {/* Card 2: Badges & Tasks Conquered */}
          <div className="floating-card-3d card-front">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div className="card-mini-icon">
                  <Trophy size={12} color="#F59E0B" />
                </div>
                <span className="card-title">Achievement Badges</span>
                <span className="card-count-badge purple">+5 Badges</span>
              </div>
            </div>
            <p className="card-subtitle">Conquer tasks and celebrate your progress</p>

            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <div className="card-icon-circle purple">
                  <Award size={14} color="#FFFFFF" />
                </div>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#1A1D2E' }}>
                    Top Performer of the Month
                  </span>
                  <div style={{ fontSize: '10.5px', color: '#7E8299' }}>Product Design & UX Team</div>
                </div>
              </div>

              {/* Badge Pills */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span className="pill-gray" style={{ background: '#FFF7E6', color: '#D97706', fontWeight: '700' }}>
                  🏆 Fast Finisher
                </span>
                <span className="pill-gray" style={{ background: '#F0EEFC', color: '#7146FD', fontWeight: '700' }}>
                  ⚡ Zero Bugs
                </span>
                <span className="pill-gray" style={{ background: '#E6F8F3', color: '#00BA88', fontWeight: '700' }}>
                  🌟 Team Star
                </span>
              </div>

              <div className="card-progress-track">
                <div className="card-progress-fill" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      );

    case 4:
    default:
      // Screen 4: Final Onboarding - Navigate Your Work Journey
      return (
        <div className="onboarding-cards-3d-scene">
          {/* Card 1: Attendance & Clock-In */}
          <div className="floating-card-3d card-back">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="card-title">Live Clock-In</span>
                <span className="card-count-badge green">Active</span>
              </div>
            </div>
            <p className="card-subtitle">On-time corporate work hours</p>

            <div className="card-inner-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="card-icon-circle purple">
                    <Clock size={14} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#1A1D2E' }}>Logged: 08:35:00 Hrs</div>
                    <div style={{ fontSize: '10px', color: '#7E8299' }}>Target: 09:00 Hrs</div>
                  </div>
                </div>
                <span className="pill-status-in-progress" style={{ background: '#E6F8F3', color: '#00BA88' }}>
                  On Time
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Workmate All-In-One Hub */}
          <div className="floating-card-3d card-front">
            <div className="card-top-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div className="card-mini-icon">
                  <ShieldCheck size={12} color="#7146FD" />
                </div>
                <span className="card-title">Workmate Workspace</span>
                <span className="card-count-badge purple">All-In-One</span>
              </div>
            </div>
            <p className="card-subtitle">Increase work management & career growth radically</p>

            <div className="card-inner-box">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ background: '#F8F9FE', padding: '8px 10px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#00BA88" />
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#1A1D2E' }}>HR Portal</span>
                </div>
                <div style={{ background: '#F8F9FE', padding: '8px 10px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#7146FD" />
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#1A1D2E' }}>Tasks & Sprints</span>
                </div>
                <div style={{ background: '#F8F9FE', padding: '8px 10px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#FF8A00" />
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#1A1D2E' }}>Expenses</span>
                </div>
                <div style={{ background: '#F8F9FE', padding: '8px 10px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#0984E3" />
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#1A1D2E' }}>Leave Requests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
