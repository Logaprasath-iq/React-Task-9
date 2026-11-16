import React from 'react';
import { Bell, Check, Search } from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function HomeHeader({ onOpenNotifications, unreadCount = 2 }) {
  return (
    <header className="home-header">
      <div className="home-user-info">
        <div className="home-avatar-wrap">
          <img src={currentUser.avatar} alt={currentUser.name} className="home-avatar-img" />
          <div className="home-verified-badge">
            <Check size={10} strokeWidth={3} />
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
        <button
          type="button"
          className="home-icon-btn"
          aria-label="Search"
          onClick={() => alert('Search feature: Quick search tasks, colleagues, policies')}
        >
          <Search size={18} />
        </button>

        <button
          type="button"
          className="home-icon-btn"
          aria-label="Notifications"
          onClick={onOpenNotifications}
        >
          <Bell size={18} />
          {unreadCount > 0 && <span className="home-notification-badge" />}
        </button>
      </div>
    </header>
  );
}
