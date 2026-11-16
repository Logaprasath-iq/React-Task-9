import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/chat.css';

// SVG Document Icon matching Figma 1:1
function TaskDocBadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3H14L18 7V21H6V3Z"
        stroke="#7146FD"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FAF8FF"
      />
      <path d="M14 3V7H18" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="11" x2="15" y2="11" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="14" x2="15" y2="14" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="17" x2="13" y2="17" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// SVG Receipt Icon matching Figma 1:1
function ReceiptBadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3H18V21L15 19.5L12 21L9 19.5L6 21V3Z"
        stroke="#7146FD"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FAF8FF"
      />
      <line x1="9" y1="8" x2="15" y2="8" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="11" x2="15" y2="11" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="14" x2="13" y2="14" stroke="#7146FD" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// SVG Meeting Grid Icon matching Figma 1:1
function MeetingGridBadgeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#7146FD" strokeWidth="1.8" fill="#FAF8FF" />
      {/* 6 mini avatar heads in 2x3 grid */}
      <circle cx="7" cy="8" r="1.5" fill="#7146FD" />
      <circle cx="12" cy="8" r="1.5" fill="#7146FD" />
      <circle cx="17" cy="8" r="1.5" fill="#7146FD" />
      <circle cx="7" cy="14" r="1.5" fill="#7146FD" />
      <circle cx="12" cy="14" r="1.5" fill="#7146FD" />
      <circle cx="17" cy="14" r="1.5" fill="#7146FD" />
    </svg>
  );
}

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 'notif-1',
      title: 'New Task Assigned to You!',
      time: '09.10',
      description:
        'You have new task for this sprint from Alicia, you can check your task "Create Onboarding Screen" by tap here',
      icon: <TaskDocBadgeIcon />,
      action: () => navigate('/tasks')
    },
    {
      id: 'notif-2',
      title: 'Expense has been approved!',
      time: '09.10',
      description: 'Your expense has been been approved by Jessica, view expense report here',
      icon: <ReceiptBadgeIcon />,
      action: () => navigate('/expense')
    },
    {
      id: 'notif-3',
      title: 'You have invited in meeting!',
      time: '09.10',
      description: 'You have been invited to a meeting. Tap to find the meeting details',
      icon: <MeetingGridBadgeIcon />,
      action: () => alert('Meeting Invitation: Townhall Meeting (01:30 AM - 02:00 AM)')
    }
  ];

  return (
    <div className="notifications-page-wrap">
      {/* Top Header */}
      <div className="messages-header">
        <button
          type="button"
          className="task-round-back-btn"
          onClick={() => navigate('/home')}
          aria-label="Back to Dashboard"
        >
          <ArrowLeft size={18} />
        </button>
        <h2 className="messages-title">Messages</h2>
        <div style={{ width: '32px' }} />
      </div>

      {/* Notifications List matching Figma 1:1 */}
      <div className="notifications-list">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="notification-item-card"
            onClick={n.action}
          >
            <div className="notification-badge-icon">
              {n.icon}
            </div>

            <div className="notification-content">
              <div className="notification-header-row">
                <h3 className="notification-title">{n.title}</h3>
                <span className="notification-time">{n.time}</span>
              </div>
              <p className="notification-sub">{n.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
