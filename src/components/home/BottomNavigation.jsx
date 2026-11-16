import React from 'react';
import { Home, Calendar, Clock, Ticket, Layers } from 'lucide-react';

export default function BottomNavigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'clockin', icon: Calendar, label: 'Calendar' },
    { id: 'tasks', icon: Clock, label: 'Tasks' },
    { id: 'expense', icon: Ticket, label: 'Expense' },
    { id: 'leave', icon: Layers, label: 'Leave' }
  ];

  return (
    <nav className="figma-dark-bottom-bar" aria-label="Bottom Navigation">
      <div className="figma-bottom-nav-row">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`figma-bottom-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              aria-label={tab.label}
            >
              <Icon
                size={22}
                color={isActive ? '#FFFFFF' : '#8F95B2'}
                strokeWidth={isActive ? 2.4 : 1.8}
                fill={isActive && tab.id === 'home' ? '#FFFFFF' : 'none'}
              />
              {isActive && (
                <div className="figma-active-indicator" />
              )}
            </button>
          );
        })}
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="figma-home-indicator-bar" />
    </nav>
  );
}
