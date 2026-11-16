import React, { useState } from 'react';
import Modal from '../common/Modal';
import { notificationsList } from '../../data/mockData';
import { CheckCircle2, Bell, Clock, CalendarDays, Receipt } from 'lucide-react';

export default function NotificationsModal({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState(notificationsList);

  const getIcon = (type) => {
    switch (type) {
      case 'leave':
        return <CalendarDays size={18} color="var(--primary-purple)" />;
      case 'expense':
        return <Receipt size={18} color="var(--status-orange)" />;
      case 'attendance':
        return <Clock size={18} color="var(--status-blue)" />;
      case 'task':
      default:
        return <CheckCircle2 size={18} color="var(--status-green)" />;
    }
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Notifications" subtitle="Recent updates & HR alerts">
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
        <button
          type="button"
          onClick={markAllRead}
          style={{ fontSize: '12px', fontWeight: '600', color: 'var(--primary-purple)', cursor: 'pointer' }}
        >
          Mark all as read
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '12px',
              background: n.unread ? 'var(--purple-soft)' : '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {getIcon(n.type)}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-dark)' }}>
                  {n.title}
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{n.time}</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-body)', marginTop: '2px', lineHeight: '1.45' }}>
                {n.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
