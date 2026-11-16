import React, { useState } from 'react';
import Modal from '../common/Modal';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';
import { DollarSign, Plus } from 'lucide-react';

export default function ClaimExpenseModal({ isOpen, onClose, onExpenseClaimed }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Travelling');
  const [receiptNumber, setReceiptNumber] = useState(`REC-${Math.floor(1000 + Math.random() * 9000)}`);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Expense description is required');
      return;
    }
    if (!amount.trim() || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      category,
      date: 'Today, 12 Sept 2024',
      totalExpense: `$${amount}`,
      rawAmount: Number(amount),
      status: 'Pending',
      receiptNumber
    };

    onExpenseClaimed(newExpense);
    setTitle('');
    setAmount('');
    setError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Claim Expense" subtitle="Submit corporate expense for HR reimbursement">
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="Expense Title / Merchant"
          placeholder="e.g. Flight Ticket to Client Meeting"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          error={error}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
          <AuthInput
            label="Amount (USD)"
            placeholder="e.g. 150"
            value={amount}
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
              if (error) setError('');
            }}
            icon={<DollarSign size={16} />}
            required
            style={{ marginBottom: 0 }}
          />

          <div>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px', display: 'block' }}>
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              <option value="Travelling">Travelling / Flight</option>
              <option value="Meals">Client Meals / Food</option>
              <option value="Equipment">Office Equipment</option>
              <option value="Software">Software & Licenses</option>
              <option value="Conference">Professional Dev</option>
            </select>
          </div>
        </div>

        <AuthInput
          label="Receipt Reference Number"
          value={receiptNumber}
          onChange={(e) => setReceiptNumber(e.target.value)}
          helperText="Attach your physical invoice or digital PDF with finance"
        />

        <PrimaryButton type="submit" size="lg" icon={<Plus size={18} />}>
          Submit Claim
        </PrimaryButton>
      </form>
    </Modal>
  );
}
