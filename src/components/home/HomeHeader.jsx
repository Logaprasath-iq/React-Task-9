import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, MessageSquare } from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function HomeHeader({
  onOpenNotifications,
  unreadCount = 2,
  isEmptyState = false,
  onToggleEmptyState = null
}) {
  const navigate = useNavigate();

  return (
    <header className="home-header" style={{ background: '#FFFFFF', padding: '14px 20px', borderBottom: '1px solid #F0F1F7' }}>
      <div
        className="home-user-info"
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        onClick={() => navigate('/profile')}
        title="View My Profile"
      >
        <div className="home-avatar-wrap" style={{ width: '42px', height: '42px', position: 'relative' }}>
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div className="home-user-name" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#1A1D2E', letterSpacing: '-0.2px' }}>
              {currentUser.name}
            </span>
            {/* Inline Blue Verified Checkmark Badge matching Figma */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" fill="#3B82F6" />
              <path d="M8.5 12.5L11 15L16 9.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="home-user-role" style={{ fontSize: '12px', fontWeight: '600', color: '#7146FD', marginTop: '2px' }}>
            {currentUser.role}
          </div>
        </div>
      </div>

      <div className="home-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Chat / Message Button matching Figma */}
        <button
          type="button"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#F0EDFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7146FD',
            cursor: 'pointer'
          }}
          aria-label="Messages"
          onClick={() => navigate('/messages')}
        >
          <MessageSquare size={17} fill="#7146FD" stroke="#7146FD" />
        </button>

        {/* Notifications Button matching Figma */}
        <button
          type="button"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#F0EDFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#7146FD',
            cursor: 'pointer',
            position: 'relative'
          }}
          aria-label="Notifications"
          onClick={() => navigate('/notifications')}
        >
          <Bell size={17} fill="#7146FD" stroke="#7146FD" />
          {unreadCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '9px',
                right: '9px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#FF4757',
                border: '1.5px solid #FFFFFF'
              }}
            />
          )}
        </button>
      </div>
    </header>
  );
}
