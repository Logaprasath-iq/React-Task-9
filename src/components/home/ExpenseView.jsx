import React, { useState } from 'react';
import { Receipt, Plus, CreditCard, DollarSign, Inbox, FileText } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';
import { initialExpenses } from '../../data/mockData';

export default function ExpenseView({ isEmpty = false, onOpenClaimExpense }) {
  const [filter, setFilter] = useState('Pending'); // 'Pending' | 'Approved' | 'Rejected'
  const [expenses, setExpenses] = useState(initialExpenses);

  const pendingCount = expenses.filter(e => e.status === 'Pending').length;
  const approvedCount = expenses.filter(e => e.status === 'Approved').length;
  const rejectedCount = expenses.filter(e => e.status === 'Rejected').length;

  const filteredExpenses = expenses.filter(e => e.status === filter);

  if (isEmpty) {
    return (
      <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
        <div className="home-summary-banner">
          <div>
            <h2 className="home-summary-title">Expense Summary</h2>
            <p className="home-summary-desc">Track and claim your corporate expenses</p>
          </div>
          <Receipt size={36} color="#FFFFFF" opacity={0.8} />
        </div>

        <div className="home-section">
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <Inbox size={32} />
            </div>
            <h4 className="empty-state-title">No Expense Submitted</h4>
            <p className="empty-state-subtitle">
              You haven't submitted any reimbursement claims for this period yet.
            </p>
            <div style={{ marginTop: '16px', width: '200px' }}>
              <PrimaryButton size="sm" onClick={onOpenClaimExpense} icon={<Plus size={16} />}>
                Claim Expense
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
          <h2 className="home-summary-title">Expense Summary</h2>
          <p className="home-summary-desc">Track and submit all your corporate reimbursements</p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <CreditCard size={38} color="#FFFFFF" opacity={0.9} />
        </div>
      </div>

      <div className="home-section">
        {/* Total Expense Card */}
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
            Total Expense
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>
            Status of all your submitted expenses
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <div
              style={{
                background: 'var(--purple-soft)',
                padding: '12px 10px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>Total</span>
              <div style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>
                $1,212
              </div>
            </div>

            <div
              style={{
                background: 'var(--status-green-bg)',
                padding: '12px 10px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--status-green)', fontWeight: '600' }}>Claimed</span>
              <div style={{ fontSize: '17px', fontWeight: '800', color: 'var(--status-green)', marginTop: '2px' }}>
                $980
              </div>
            </div>

            <div
              style={{
                background: 'var(--status-orange-bg)',
                padding: '12px 10px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--status-orange)', fontWeight: '600' }}>Pending</span>
              <div style={{ fontSize: '17px', fontWeight: '800', color: 'var(--status-orange)', marginTop: '2px' }}>
                $232
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
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

        {/* Filtered Expenses List */}
        {filteredExpenses.length === 0 ? (
          <div className="empty-state-card">
            <Inbox size={32} color="var(--text-muted)" />
            <h4 className="empty-state-title" style={{ marginTop: '8px' }}>
              No Expense {filter}
            </h4>
            <p className="empty-state-subtitle">No records found matching this status.</p>
          </div>
        ) : (
          filteredExpenses.map((exp) => (
            <div
              key={exp.id}
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
                    {exp.date}
                  </div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--text-dark)', marginTop: '2px' }}>
                    {exp.title}
                  </h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-dark)' }}>
                    {exp.totalExpense}
                  </div>
                  <span
                    className={`status-pill ${
                      exp.status === 'Approved' ? 'approved' : exp.status === 'Rejected' ? 'rejected' : 'pending'
                    }`}
                    style={{ marginTop: '4px', display: 'inline-block' }}
                  >
                    {exp.status}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', paddingTop: '8px', borderTop: '1px solid var(--border-light)' }}>
                <span>Category: <strong style={{ color: 'var(--text-dark)' }}>{exp.category}</strong></span>
                <span>ID: {exp.receiptNumber}</span>
              </div>
            </div>
          ))
        )}

        {/* Bottom Claim Button */}
        <div style={{ marginTop: '16px' }}>
          <PrimaryButton
            size="lg"
            onClick={onOpenClaimExpense}
            icon={<Plus size={18} />}
          >
            Claim Expense
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
