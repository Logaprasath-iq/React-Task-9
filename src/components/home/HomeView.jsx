import React from 'react';
import { Sparkles, Calendar, CheckCircle2, Clock, Inbox, ArrowUpRight } from 'lucide-react';

export default function HomeView({ isEmpty = false, onTabJump }) {
  if (isEmpty) {
    return (
      <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
        {/* Purple Banner */}
        <div className="home-summary-banner">
          <div>
            <h2 className="home-summary-title">Your Daily Summary</h2>
            <p className="home-summary-desc">No active tasks or attendance recorded today.</p>
          </div>
          <Sparkles size={36} color="#FFFFFF" opacity={0.8} />
        </div>

        {/* Empty Today's Activity */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today's Activity</h3>
              <span className="home-section-badge">0</span>
            </div>
          </div>
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <Inbox size={32} />
            </div>
            <h4 className="empty-state-title">No Activity Available</h4>
            <p className="empty-state-subtitle">
              You haven't completed any tasks yet today. Start by clocking in or reviewing assigned challenges.
            </p>
          </div>
        </div>

        {/* Empty Friday Task */}
        <div className="home-section">
          <div className="home-section-header">
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today's Task</h3>
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
      {/* Purple Daily Summary Banner */}
      <div className="home-summary-banner">
        <div>
          <h2 className="home-summary-title">Your Daily Summary</h2>
          <p className="home-summary-desc">
            Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="26" fill="white" fillOpacity="0.15" />
            <path d="M42 18L18 29L28 33L32 43L37 36L42 18Z" stroke="white" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M28 33L42 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Today's Activity Section */}
      <div className="home-section">
        <div className="home-section-header">
          <div>
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Today's Activity</h3>
              <span className="home-section-badge">2</span>
            </div>
            <p className="home-section-subtitle">You have completed 2 tasks today</p>
          </div>
          <button
            type="button"
            onClick={() => onTabJump('tasks')}
            style={{ fontSize: '12px', fontWeight: '700', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', gap: '2px' }}
          >
            View all <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Activity Item 1 */}
        <div className="activity-card">
          <div className="activity-left">
            <div className="activity-icon-box">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="activity-title">Visual Identity Design</div>
              <div className="activity-time">09:00 AM – 11:00 AM</div>
            </div>
          </div>
          <div className="activity-right">
            <div className="team-avatars-row">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <span className="team-avatar-more">+1</span>
            </div>
            <span className="status-pill completed">Completed</span>
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="activity-card">
          <div className="activity-left">
            <div className="activity-icon-box">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="activity-title">Colleague Project</div>
              <div className="activity-time">11:30 AM – 01:30 PM</div>
            </div>
          </div>
          <div className="activity-right">
            <div className="team-avatars-row">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
            </div>
            <span className="status-pill completed">Completed</span>
          </div>
        </div>
      </div>

      {/* Friday Task / In Progress Tasks Section */}
      <div className="home-section">
        <div className="home-section-header">
          <div>
            <div className="home-section-title-wrap">
              <h3 className="home-section-title">Friday Task</h3>
              <span className="home-section-badge">2</span>
            </div>
            <p className="home-section-subtitle">You still carry 2 active tasks on this Friday</p>
          </div>
        </div>

        {/* Task Card 1 */}
        <div className="task-card">
          <div className="task-card-header">
            <div>
              <span className="task-category-tag">Design</span>
              <h4 className="task-card-title">Wireframe and User Journey</h4>
            </div>
            <span className="status-pill in-progress">In Progress</span>
          </div>

          <div className="task-progress-bar-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '4px' }}>
              <span>Progress</span>
              <span style={{ color: 'var(--primary-purple)' }}>75%</span>
            </div>
            <div className="task-progress-bar-track">
              <div className="task-progress-bar-fill" style={{ width: '75%' }} />
            </div>
          </div>

          <div className="task-card-footer">
            <div className="team-avatars-row">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <span className="team-avatar-more">+3 More</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
              <Clock size={13} />
              <span>Due 05:00 PM</span>
            </div>
          </div>
        </div>

        {/* Task Card 2 */}
        <div className="task-card">
          <div className="task-card-header">
            <div>
              <span className="task-category-tag">Dev</span>
              <h4 className="task-card-title">API Dashboard Analytics Integration</h4>
            </div>
            <span className="status-pill in-progress">In Progress</span>
          </div>

          <div className="task-progress-bar-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '4px' }}>
              <span>Progress</span>
              <span style={{ color: 'var(--primary-purple)' }}>50%</span>
            </div>
            <div className="task-progress-bar-track">
              <div className="task-progress-bar-fill" style={{ width: '50%' }} />
            </div>
          </div>

          <div className="task-card-footer">
            <div className="team-avatars-row">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&q=80"
                alt="Assignee"
                className="team-avatar-tiny"
              />
              <span className="team-avatar-more">+2 More</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
              <Clock size={13} />
              <span>Due Tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
