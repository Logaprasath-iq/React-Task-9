import React from 'react';
import { Bell, Check, MessageSquare, Layers } from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function HomeHeader({
  onOpenNotifications,
  unreadCount = 2,
  isEmptyState = false,
  onToggleEmptyState = null
}) {
  return (
    <header className="home-header">
      <div className="home-user-info">
        <div className="home-avatar-wrap">
          <img src={currentUser.avatar} alt={currentUser.name} className="home-avatar-img" />
          {/* Blue Verified Badge matching Figma 1:1 */}
          <div className="home-verified-badge" style={{ background: '#3B82F6' }}>
            <Check size={9} strokeWidth={3} color="#FFFFFF" />
          </div>
        </div>
        <div>
          <div className="home-user-name">
            <span>{currentUser.name}</span>
          </div>
          <div className="home-user-role">{currentUser.role}</div>
        </div>
      </div>

      <div className="home-header-actions">
        {onToggleEmptyState && (
          <button
            type="button"
            className="home-icon-btn"
            title={isEmptyState ? 'Switch to Populated Data' : 'Switch to Empty State'}
            onClick={onToggleEmptyState}
            style={{
              color: isEmptyState ? '#FF8A00' : '#8F95B2',
              borderColor: isEmptyState ? '#FF8A00' : '#EDEDF8'
            }}
          >
            <Layers size={17} />
          </button>
        )}

        {/* Chat / Message button matching Figma */}
        <button
          type="button"
          className="home-icon-btn"
          aria-label="Messages"
          onClick={() => alert('Chat & Messages opened')}
        >
          <MessageSquare size={17} />
        </button>

        {/* Notifications button */}
        <button
          type="button"
          className="home-icon-btn"
          aria-label="Notifications"
          onClick={onOpenNotifications}
        >
          <Bell size={17} />
          {unreadCount > 0 && <span className="home-notification-badge" />}
        </button>
      </div>
    </header>
  );
}
