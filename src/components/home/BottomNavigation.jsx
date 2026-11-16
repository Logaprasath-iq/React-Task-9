import React from 'react';
import { Home, Clock, CheckSquare, Receipt, CalendarDays } from 'lucide-react';

export default function BottomNavigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'clockin', label: 'Clock In', icon: Clock },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'expense', label: 'Expense', icon: Receipt },
    { id: 'leave', label: 'Leave', icon: CalendarDays }
  ];

  return (
    <nav className="bottom-nav-bar" aria-label="Bottom Navigation">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            aria-label={tab.label}
          >
            <IconComponent size={21} strokeWidth={isActive ? 2.4 : 1.8} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
