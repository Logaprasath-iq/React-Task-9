import React, { useState } from 'react';
import { CalendarDays, Plus, Briefcase, Inbox, AlertCircle, CheckCircle2 } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';
import { initialLeaves } from '../../data/mockData';

export default function LeaveView({ isEmpty = false, onOpenSubmitLeave }) {
  const [filter, setFilter] = useState('Pending'); // 'Pending' | 'Approved' | 'Rejected'
  const [leaves, setLeaves] = useState(initialLeaves);

  const pendingCount = leaves.filter(l => l.status === 'Pending').length;
  const approvedCount = leaves.filter(l => l.status === 'Approved').length;
  const rejectedCount = leaves.filter(l => l.status === 'Rejected').length;

  const filteredLeaves = leaves.filter(l => l.status === filter);

  if (isEmpty) {
    return (
      <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
        <div className="home-summary-banner">
          <div>
            <h2 className="home-summary-title">Leave Summary</h2>
            <p className="home-summary-desc">Request time-off and track leave balances</p>
          </div>
          <CalendarDays size={36} color="#FFFFFF" opacity={0.8} />
        </div>

        <div className="home-section">
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <Inbox size={32} />
            </div>
            <h4 className="empty-state-title">No Leave Submitted</h4>
            <p className="empty-state-subtitle">
              You haven't requested any time off for this period. Click below to submit a new leave request.
            </p>
            <div style={{ marginTop: '16px', width: '200px' }}>
              <PrimaryButton size="sm" onClick={onOpenSubmitLeave} icon={<Plus size={16} />}>
                Submit Leave
              </PrimaryButton>
            </div>
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
          <h2 className="home-summary-title">Leave Summary</h2>
          <p className="home-summary-desc">Track and request your annual vacation & time-off</p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <CalendarDays size={38} color="#FFFFFF" opacity={0.9} />
        </div>
      </div>

      <div className="home-section">
        {/* Total Leave Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '18px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '16px'
          }}
        >
          <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-dark)' }}>
            Total Leave
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>
            Summary of your annual leave taken & remaining balance
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div
              style={{
                background: 'var(--purple-soft)',
                padding: '14px 12px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Total Leave</span>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>
                20 Days
              </div>
            </div>

            <div
              style={{
                background: 'var(--status-green-bg)',
                padding: '14px 12px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '12px', color: 'var(--status-green)', fontWeight: '600' }}>Leave Left</span>
              <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--status-green)', marginTop: '2px' }}>
                8 Days
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <button
            type="button"
            className={`tab-filter-btn ${filter === 'Pending' ? 'active' : ''}`}
            onClick={() => setFilter('Pending')}
          >
            Pending ({pendingCount})
          </button>
          <button
            type="button"
            className={`tab-filter-btn ${filter === 'Approved' ? 'active' : ''}`}
            onClick={() => setFilter('Approved')}
          >
            Approved ({approvedCount})
          </button>
          <button
            type="button"
            className={`tab-filter-btn ${filter === 'Rejected' ? 'active' : ''}`}
            onClick={() => setFilter('Rejected')}
          >
            Rejected ({rejectedCount})
          </button>
        </div>

        {/* Filtered Leaves List */}
        {filteredLeaves.length === 0 ? (
          <div className="empty-state-card">
            <Inbox size={32} color="var(--text-muted)" />
            <h4 className="empty-state-title" style={{ marginTop: '8px' }}>
              No Leave {filter}
            </h4>
            <p className="empty-state-subtitle">No records found matching this leave filter.</p>
          </div>
        ) : (
          filteredLeaves.map((leave) => (
            <div
              key={leave.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '10px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {leave.date}
                  </div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-dark)', marginTop: '2px' }}>
                    {leave.title}
                  </h4>
                </div>
                <span
                  className={`status-pill ${
                    leave.status === 'Approved' ? 'approved' : leave.status === 'Rejected' ? 'rejected' : 'pending'
                  }`}
                >
                  {leave.status}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', paddingTop: '8px', borderTop: '1px solid var(--border-light)' }}>
                <span>Leave Duration: <strong style={{ color: 'var(--text-dark)' }}>{leave.leaveTaken}</strong></span>
                <span>Days: <strong style={{ color: 'var(--primary-purple)' }}>{leave.totalDays}</strong></span>
              </div>
            </div>
          ))
        )}

        {/* Bottom Submit Leave Button */}
        <div style={{ marginTop: '16px' }}>
          <PrimaryButton
            size="lg"
            onClick={onOpenSubmitLeave}
            icon={<Plus size={18} />}
          >
            Submit Leave
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
