import React, { useState } from 'react';
import {
  Calendar,
  ArrowLeft,
  ChevronDown,
  Upload,
  Check,
  X,
  Ticket,
  DollarSign,
  FileText
} from 'lucide-react';
import '../../styles/expense.css';

// Credit Card with Rainbow Trail SVG matching Figma 1:1
function CreditCardRainbowIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 68 64" fill="none" style={{ flexShrink: 0 }}>
      {/* Rainbow Arc emerging from behind the card */}
      <path d="M 44 26 C 52 26, 62 30, 66 42" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 46 29 C 53 29, 61 33, 65 44" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 48 32 C 54 32, 60 36, 64 46" stroke="#FFEB3B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 35 C 55 35, 59 39, 63 48" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 52 38 C 56 38, 59 41, 62 50" stroke="#00BCD4" strokeWidth="2.5" strokeLinecap="round" />

      {/* Shadow */}
      <rect x="8" y="14" width="44" height="28" rx="5" fill="#181336" opacity="0.4" transform="rotate(-12 8 14)" />

      {/* Credit Card Body */}
      <rect x="10" y="16" width="44" height="28" rx="5" fill="#241E47" stroke="#3D326F" strokeWidth="1" transform="rotate(-10 10 16)" />

      {/* Magnetic Chip */}
      <rect x="14" y="22" width="6" height="5" rx="1.5" fill="#F59E0B" transform="rotate(-10 14 22)" />
      <line x1="14" y1="24.5" x2="20" y2="24.5" stroke="#B45309" strokeWidth="0.5" transform="rotate(-10 14 24.5)" />

      {/* Card Number Dots */}
      <circle cx="16" cy="34" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="19" cy="33.5" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="22" cy="33" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="25" cy="32.5" r="1" fill="#FFFFFF" opacity="0.8" />

      <circle cx="30" cy="31.5" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="33" cy="31" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="36" cy="30.5" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="39" cy="30" r="1" fill="#FFFFFF" opacity="0.8" />

      {/* Card Brand Circles */}
      <circle cx="44" cy="34" r="3" fill="#FF5252" opacity="0.9" />
      <circle cx="48" cy="33.5" r="3" fill="#F59E0B" opacity="0.9" />

      {/* Sparkles */}
      <polygon points="6,12 8,15 11,16 8,17 6,20 4,17 1,16 4,15" fill="#FFFFFF" opacity="0.9" />
      <circle cx="58" cy="14" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

// Receipt preview graphic matching Figma
function CashReceiptGraphic() {
  return (
    <div className="claim-receipt-preview">
      <div className="receipt-header-title">SHOP NAME</div>
      <div className="receipt-header-sub">CASH RECEIPT</div>
      <div className="receipt-dashed-line" />
      <div className="receipt-item-row">
        <span>Business Expenses</span>
        <span>$180.00</span>
      </div>
      <div className="receipt-item-row">
        <span>Service &amp; Tax</span>
        <span>$20.00</span>
      </div>
      <div className="receipt-dashed-line" />
      <div className="receipt-item-row bold">
        <span>TOTAL</span>
        <span>$200.00</span>
      </div>
      <div className="receipt-barcode">
        {[2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 1, 4, 3, 2, 5, 2, 1, 3, 4, 2].map((w, i) => (
          <div key={i} className="barcode-line" style={{ width: `${w}px` }} />
        ))}
      </div>
    </div>
  );
}

// Initial Mock Expenses from Figma
const INITIAL_REVIEW_EXPENSES = [
  {
    id: 'rev-1',
    date: '27 September 2024',
    type: 'E-Learning',
    amount: '$55',
    rawAmount: 55,
    status: 'Review'
  },
  {
    id: 'rev-2',
    date: '24 September 2024',
    type: 'E-Learning',
    amount: '$55',
    rawAmount: 55,
    status: 'Review'
  },
  {
    id: 'rev-3',
    date: '21 September 2024',
    type: 'E-Learning',
    amount: '$55',
    rawAmount: 55,
    status: 'Review'
  }
];

const INITIAL_APPROVED_EXPENSES = [
  {
    id: 'app-1',
    date: '18 September 2024',
    type: 'E-Learning',
    amount: '$55',
    rawAmount: 55,
    status: 'Approved',
    approvedDate: '18 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  },
  {
    id: 'app-2',
    date: '14 September 2024',
    type: 'E-Learning',
    amount: '$55',
    rawAmount: 55,
    status: 'Approved',
    approvedDate: '16 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  },
  {
    id: 'app-3',
    date: '10 September 2024',
    type: 'E-Learning',
    amount: '$55',
    rawAmount: 55,
    status: 'Approved',
    approvedDate: '12 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  }
];

const INITIAL_REJECTED_EXPENSES = [
  {
    id: 'rej-1',
    date: '27 September 2024',
    type: 'Business Trip',
    amount: '$100',
    rawAmount: 100,
    status: 'Rejected',
    rejectedDate: '28 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  },
  {
    id: 'rej-2',
    date: '24 September 2024',
    type: 'Business Trip',
    amount: '$100',
    rawAmount: 100,
    status: 'Rejected',
    rejectedDate: '28 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  }
];

const EXPENSE_CATEGORIES = [
  'Business Trip',
  'Office Supplies',
  'Meals and Entertainment',
  'Professional Development',
  'Home Office Expenses',
  'Mileage Reimbursement',
  'Miscellaneous Expenses'
];

export default function ExpenseView({
  isEmpty = false,
  subScreen: propSubScreen,
  onSubScreenChange: propOnSubScreenChange
}) {
  // Navigation: 'main' | 'submit-expense'
  const [internalSubScreen, setInternalSubScreen] = useState('main');
  const subScreen = propSubScreen !== undefined ? propSubScreen : internalSubScreen;
  const setSubScreen = propOnSubScreenChange || setInternalSubScreen;

  // Active filter tab: 'review' | 'approved' | 'rejected'
  const [activeTab, setActiveTab] = useState('review');

  // Expenses data
  const [reviewExpenses, setReviewExpenses] = useState(INITIAL_REVIEW_EXPENSES);
  const [approvedExpenses] = useState(INITIAL_APPROVED_EXPENSES);
  const [rejectedExpenses] = useState(INITIAL_REJECTED_EXPENSES);

  // Form State for Submit Expense
  const [uploadStatus, setUploadStatus] = useState('uploaded'); // 'empty' | 'uploading' | 'uploaded'
  const [category, setCategory] = useState('Business Trip');
  const [tempCategory, setTempCategory] = useState('Business Trip');
  const [transactionDate, setTransactionDate] = useState('29 September 2024');
  const [tempDate, setTempDate] = useState('29 September 2024');
  const [amount, setAmount] = useState('200');
  const [description, setDescription] = useState('Business Trip To Bali');

  // Modals in Submit Expense: null | 'category' | 'date' | 'confirm-submit' | 'submit-success'
  const [activeModal, setActiveModal] = useState(null);

  // Handle Upload Simulation
  const handleTriggerUpload = () => {
    setUploadStatus('uploading');
    setTimeout(() => {
      setUploadStatus('uploaded');
    }, 1100);
  };

  const handleRemoveUpload = (e) => {
    e.stopPropagation();
    setUploadStatus('empty');
  };

  // Submit Expense Handlers
  const handleConfirmSubmit = () => {
    setActiveModal('submit-success');
  };

  const handleFinishSubmit = () => {
    setActiveModal(null);
    const newExp = {
      id: `rev-${Date.now()}`,
      date: transactionDate || '29 September 2024',
      type: category || 'Business Trip',
      amount: `$${amount || '200'}`,
      rawAmount: Number(amount) || 200,
      status: 'Review'
    };

    setReviewExpenses((prev) => [newExp, ...prev]);
    setActiveTab('review');
    setSubScreen('main');
  };

  // Calculate Totals dynamically
  const reviewTotal = 455 + (reviewExpenses.length > 3 ? (reviewExpenses.length - 3) * 200 : 0);
  const approvedTotal = 555;
  const grandTotal = reviewTotal + approvedTotal;

  // =========================================================================
  // SUB-SCREEN 2: SUBMIT EXPENSE (Figma Frame ExpenseSummary/SubmitExpense)
  // =========================================================================
  if (subScreen === 'submit-expense') {
    const isFormValid =
      uploadStatus === 'uploaded' &&
      category.trim() !== '' &&
      transactionDate.trim() !== '' &&
      amount.trim() !== '';

    return (
      <div className="submit-expense-screen">
        {/* Top Header */}
        <div className="submit-expense-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('main')}
            aria-label="Back to Expense Summary"
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="submit-expense-title">Submit Expense</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Purple Motivation Banner Card */}
        <div className="submit-expense-banner">
          <h3 className="submit-expense-banner-title">Ensure All Document Well Prepared</h3>
          <p className="submit-expense-banner-sub">1000+ Expenses already approved</p>
          <div className="submit-polaroids-row">
            <div className="submit-polaroid-card left">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Approved colleague"
                className="submit-polaroid-img"
              />
            </div>
            <div className="submit-polaroid-card center">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Approved colleague"
                className="submit-polaroid-img"
              />
            </div>
            <div className="submit-polaroid-card right">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="Approved colleague"
                className="submit-polaroid-img"
              />
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="submit-expense-section-title">Fill Claim Information</div>
        <div className="submit-expense-section-sub">Information about claim details</div>

        {/* Document Upload Box */}
        {uploadStatus === 'empty' && (
          <div className="claim-upload-box" onClick={handleTriggerUpload}>
            <Upload size={22} color="#7146FD" />
            <div className="claim-upload-title">Upload Claim Document</div>
            <div className="claim-upload-hint">Format should be in .pdf, .jpeg, .png less than 5MB</div>
          </div>
        )}

        {uploadStatus === 'uploading' && (
          <div className="claim-upload-box">
            <button
              type="button"
              className="claim-remove-btn"
              onClick={handleRemoveUpload}
              title="Cancel Upload"
            >
              <X size={13} strokeWidth={3} />
            </button>
            <div className="claim-uploading-wrap">
              <div className="claim-upload-circle-progress">
                <span>80%</span>
              </div>
              <span className="claim-uploading-text">Uploading File...</span>
            </div>
          </div>
        )}

        {uploadStatus === 'uploaded' && (
          <div className="claim-upload-box" style={{ padding: '12px' }}>
            <button
              type="button"
              className="claim-remove-btn"
              onClick={handleRemoveUpload}
              title="Remove File"
            >
              <X size={13} strokeWidth={3} />
            </button>
            <CashReceiptGraphic />
          </div>
        )}

        {/* Form Field 1: Expense Category */}
        <div className="claim-input-row">
          <label className="claim-label">Expense Category</label>
          <div
            className="claim-field-box"
            onClick={() => {
              setTempCategory(category || 'Business Trip');
              setActiveModal('category');
            }}
          >
            <div className={`claim-field-left ${category ? '' : 'placeholder'}`}>
              <Ticket size={16} color="#7146FD" />
              <span>{category || 'Select Category'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Form Field 2: Transaction Date */}
        <div className="claim-input-row">
          <label className="claim-label">Transaction Date</label>
          <div
            className="claim-field-box"
            onClick={() => {
              setTempDate(transactionDate || '29 September 2024');
              setActiveModal('date');
            }}
          >
            <div className={`claim-field-left ${transactionDate ? '' : 'placeholder'}`}>
              <Calendar size={16} color="#7146FD" />
              <span>{transactionDate || 'Enter Transaction Date'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Form Field 3: Expense Amount (USD) */}
        <div className="claim-input-row">
          <label className="claim-label">Expense Amount (USD)</label>
          <div className="claim-field-box">
            <div className="claim-field-left" style={{ width: '100%' }}>
              <DollarSign size={16} color="#7146FD" />
              <input
                type="number"
                className="claim-text-input"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Form Field 4: Expense Description */}
        <div className="claim-input-row" style={{ marginBottom: '24px' }}>
          <label className="claim-label">Expense Description</label>
          <textarea
            className="claim-textarea"
            placeholder="Enter Expense Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Submit Expense CTA */}
        <button
          type="button"
          className="signup-btn-primary"
          style={{
            opacity: isFormValid ? 1 : 0.6,
            pointerEvents: isFormValid ? 'auto' : 'none'
          }}
          onClick={() => setActiveModal('confirm-submit')}
        >
          Submit Expense
        </button>

        {/* MODAL 1: SELECT CATEGORY BOTTOM SHEET */}
        {activeModal === 'category' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Expense Category</h3>
              <p className="selection-modal-sub">Select Expense Category</p>

              <div className="selection-options-list" style={{ maxHeight: '340px', overflowY: 'auto' }}>
                {EXPENSE_CATEGORIES.map((cat) => {
                  const isSelected = tempCategory === cat;
                  return (
                    <div
                      key={cat}
                      className={`category-option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setTempCategory(cat)}
                    >
                      <span className="category-option-label">{cat}</span>
                      <div className={`category-radio-circle ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
                <button
                  type="button"
                  className="attendant-btn-outline"
                  onClick={() => setActiveModal(null)}
                >
                  Close Message
                </button>
                <button
                  type="button"
                  className="attendant-btn-purple"
                  onClick={() => {
                    setCategory(tempCategory);
                    setActiveModal(null);
                  }}
                >
                  Submit Data
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 2: TRANSACTION DATE BOTTOM SHEET */}
        {activeModal === 'date' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Transaction Date</h3>
              <p className="selection-modal-sub">Select Date of Expense Incurred</p>

              <div className="selection-options-list">
                {[
                  '29 September 2024',
                  '28 September 2024',
                  '27 September 2024',
                  '26 September 2024',
                  '25 September 2024'
                ].map((d) => {
                  const isSelected = tempDate === d;
                  return (
                    <div
                      key={d}
                      className={`category-option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setTempDate(d)}
                    >
                      <span className="category-option-label">{d}</span>
                      <div className={`category-radio-circle ${isSelected ? 'checked' : ''}`}>
                        {isSelected && <Check size={12} color="#FFFFFF" strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
                <button
                  type="button"
                  className="attendant-btn-outline"
                  onClick={() => setActiveModal(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="attendant-btn-purple"
                  onClick={() => {
                    setTransactionDate(tempDate);
                    setActiveModal(null);
                  }}
                >
                  Select Date
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 3: READY TO SUBMIT CONFIRMATION */}
        {activeModal === 'confirm-submit' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <Ticket size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>

              <h2 className="signup-modal-title">Ready to Submit?</h2>
              <p className="signup-modal-desc">
                Double-check your expense details to ensure everything is correct. Do you want to proceed?
              </p>

              <button
                type="button"
                className="signup-btn-primary"
                onClick={handleConfirmSubmit}
              >
                Yes, Submit
              </button>

              <button
                type="button"
                className="signup-btn-secondary"
                onClick={() => setActiveModal(null)}
              >
                No, Let me check
              </button>
            </div>
          </div>
        )}

        {/* MODAL 4: EXPENSE SUBMITTED SUCCESS */}
        {activeModal === 'submit-success' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <Ticket size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>

              <h2 className="signup-modal-title">Expense Submitted!</h2>
              <p className="signup-modal-desc">
                Your expense report is in! You'll receive your reimbursement with your payroll.
              </p>

              <button
                type="button"
                className="signup-btn-primary"
                onClick={handleFinishSubmit}
              >
                View Expense History
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN 1: MAIN EXPENSE DASHBOARD (Figma Frame ExpenseSummary)
  // =========================================================================
  return (
    <div className="expense-screen-wrap">
      {/* Top Purple Banner with Credit Card & Rainbow */}
      <div className="expense-purple-banner">
        <div>
          <h1 className="expense-banner-title">Expense Summary</h1>
          <p className="expense-banner-sub">Claim your expenses here.</p>
        </div>
        <CreditCardRainbowIcon size={56} />
      </div>

      {/* Floating Total Expense Card */}
      <div className="expense-summary-card">
        <div className="expense-summary-title">Total Expense</div>
        <div className="expense-summary-sub">Period 1 Jan 2024 - 30 Dec 2024</div>

        <div className="expense-stats-grid">
          {/* Stat 1: Total */}
          <div className="expense-stat-box">
            <div className="expense-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7146FD' }} />
              Total
            </div>
            <div className="expense-stat-val">${grandTotal}</div>
          </div>

          {/* Stat 2: Review */}
          <div className="expense-stat-box">
            <div className="expense-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} />
              Review
            </div>
            <div className="expense-stat-val">${reviewTotal}</div>
          </div>

          {/* Stat 3: Approved */}
          <div className="expense-stat-box">
            <div className="expense-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
              Approved
            </div>
            <div className="expense-stat-val">${approvedTotal}</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs Row */}
      <div className="expense-tabs-row">
        {[
          { id: 'review', label: `Review ${reviewExpenses.length}` },
          { id: 'approved', label: `Approved ${approvedExpenses.length}` },
          { id: 'rejected', label: `Rejected ${rejectedExpenses.length}` }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`expense-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Expense Items List */}
      <div className="expense-list-wrap">
        {/* REVIEW TAB ITEMS */}
        {activeTab === 'review' &&
          reviewExpenses.map((exp) => (
            <div key={exp.id} className="expense-item-card">
              <div className="expense-item-date-row">
                <Calendar size={14} color="#8F95B2" />
                <span>{exp.date}</span>
              </div>

              <div className="expense-item-data-row">
                <div className="expense-data-col">
                  <span className="expense-data-label">Type</span>
                  <span className="expense-data-val">{exp.type}</span>
                </div>

                <div className="expense-data-col right">
                  <span className="expense-data-label">Total Expense</span>
                  <span className="expense-data-val">{exp.amount}</span>
                </div>
              </div>
            </div>
          ))}

        {/* APPROVED TAB ITEMS */}
        {activeTab === 'approved' &&
          approvedExpenses.map((exp) => (
            <div key={exp.id} className="expense-item-card">
              <div className="expense-item-date-row">
                <Calendar size={14} color="#8F95B2" />
                <span>{exp.date}</span>
              </div>

              <div className="expense-item-data-row">
                <div className="expense-data-col">
                  <span className="expense-data-label">Type</span>
                  <span className="expense-data-val">{exp.type}</span>
                </div>

                <div className="expense-data-col right">
                  <span className="expense-data-label">Total Expense</span>
                  <span className="expense-data-val">{exp.amount}</span>
                </div>
              </div>

              <div className="expense-item-footer">
                <div className="expense-status-approved">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                  <span>Approved at {exp.approvedDate}</span>
                </div>
                <div className="expense-approver-info">
                  <span>By</span>
                  <img src={exp.approverAvatar} alt={exp.approver} className="expense-approver-avatar" />
                  <span className="expense-approver-name">{exp.approver}</span>
                </div>
              </div>
            </div>
          ))}

        {/* REJECTED TAB ITEMS */}
        {activeTab === 'rejected' &&
          rejectedExpenses.map((exp) => (
            <div key={exp.id} className="expense-item-card">
              <div className="expense-item-date-row">
                <Calendar size={14} color="#8F95B2" />
                <span>{exp.date}</span>
              </div>

              <div className="expense-item-data-row">
                <div className="expense-data-col">
                  <span className="expense-data-label">Type</span>
                  <span className="expense-data-val">{exp.type}</span>
                </div>

                <div className="expense-data-col right">
                  <span className="expense-data-label">Total Expense</span>
                  <span className="expense-data-val">{exp.amount}</span>
                </div>
              </div>

              <div className="expense-item-footer">
                <div className="expense-status-rejected">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5252' }} />
                  <span>Rejected at {exp.rejectedDate}</span>
                </div>
                <div className="expense-approver-info">
                  <span>By</span>
                  <img src={exp.approverAvatar} alt={exp.approver} className="expense-approver-avatar" />
                  <span className="expense-approver-name">{exp.approver}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Submit Expense Button */}
      <div style={{ padding: '0 16px', marginTop: 'auto' }}>
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setSubScreen('submit-expense')}
        >
          Submit Expense
        </button>
      </div>
    </div>
  );
}
