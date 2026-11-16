import React, { useState } from 'react';
import Modal from '../common/Modal';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';
import { CalendarDays, Plus } from 'lucide-react';

export default function SubmitLeaveModal({ isOpen, onClose, onLeaveSubmitted }) {
  const [type, setType] = useState('Annual Vacation');
  const [startDate, setStartDate] = useState('15 Sept 2024');
  const [endDate, setEndDate] = useState('18 Sept 2024');
  const [days, setDays] = useState('3');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason.trim()) {
      setError('Please provide a reason for your leave request');
      return;
    }

    const newLeave = {
      id: Date.now(),
      title: type,
      leaveTaken: `${startDate} – ${endDate}`,
      totalDays: `${days} Days`,
      date: 'Today, 12 Sept 2024',
      status: 'Pending',
      reason
    };

    onLeaveSubmitted(newLeave);
    setReason('');
    setError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request Time-Off" subtitle="Submit your leave application to HR manager">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px', display: 'block' }}>
            Leave Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              width: '100%',
              height: '50px',
              background: 'var(--bg-input)',
              border: '1.5px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0 12px',
              fontSize: '14px',
              color: 'var(--text-dark)',
              outline: 'none'
            }}
          >
            <option value="Annual Vacation">Annual Vacation</option>
            <option value="Casual Leave">Casual Personal Leave</option>
            <option value="Sick Leave">Sick / Medical Leave</option>
            <option value="Paternity/Maternity">Family / Parental Leave</option>
            <option value="Compensatory Off">Compensatory Off</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <AuthInput
            label="From Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            icon={<CalendarDays size={16} />}
          />
          <AuthInput
            label="To Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            icon={<CalendarDays size={16} />}
          />
        </div>

        <AuthInput
          label="Total Number of Days"
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <AuthInput
          label="Reason for Request"
          placeholder="Brief description of your leave"
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
            if (error) setError('');
          }}
          error={error}
          required
        />

        <PrimaryButton type="submit" size="lg" icon={<Plus size={18} />}>
          Submit Leave Request
        </PrimaryButton>
      </form>
    </Modal>
  );
}
