import React, { useState } from 'react';
import {
  Calendar,
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  Briefcase,
  User,
  Layers,
  Sparkles
} from 'lucide-react';
import '../../styles/leave.css';

// Suitcase with Rainbow Trail SVG matching Figma 1:1
function SuitcaseRainbowIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 68 64" fill="none" style={{ flexShrink: 0 }}>
      {/* Rainbow Arc emerging from behind the suitcase */}
      <path d="M 44 26 C 52 26, 62 30, 66 42" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 46 29 C 53 29, 61 33, 65 44" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 48 32 C 54 32, 60 36, 64 46" stroke="#FFEB3B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 50 35 C 55 35, 59 39, 63 48" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 52 38 C 56 38, 59 41, 62 50" stroke="#00BCD4" strokeWidth="2.5" strokeLinecap="round" />

      {/* Shadow */}
      <rect x="14" y="16" width="30" height="40" rx="6" fill="#181336" opacity="0.3" transform="rotate(-15 14 16)" />

      {/* Telescopic Pull Handle */}
      <path d="M 24 10 L 24 18 M 32 8 L 32 16 M 22 10 L 34 7" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" transform="rotate(-12 28 12)" />

      {/* Main Suitcase Body */}
      <rect x="14" y="15" width="28" height="38" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.2" transform="rotate(-12 14 15)" />

      {/* Suitcase Ridges */}
      <line x1="20" y1="22" x2="20" y2="44" stroke="#EDEDF8" strokeWidth="1.5" strokeLinecap="round" transform="rotate(-12 20 22)" />
      <line x1="25" y1="21" x2="25" y2="43" stroke="#EDEDF8" strokeWidth="1.5" strokeLinecap="round" transform="rotate(-12 25 21)" />
      <line x1="30" y1="20" x2="30" y2="42" stroke="#EDEDF8" strokeWidth="1.5" strokeLinecap="round" transform="rotate(-12 30 20)" />

      {/* Corner Protectors */}
      <rect x="14" y="15" width="6" height="6" rx="2" fill="#D5CCFD" transform="rotate(-12 14 15)" />
      <rect x="36" y="10" width="6" height="6" rx="2" fill="#D5CCFD" transform="rotate(-12 36 10)" />

      {/* Wheels */}
      <circle cx="20" cy="54" r="3" fill="#1E1B38" />
      <circle cx="34" cy="51" r="3" fill="#1E1B38" />

      {/* Sparkles */}
      <polygon points="6,12 8,15 11,16 8,17 6,20 4,17 1,16 4,15" fill="#FFFFFF" opacity="0.9" />
      <circle cx="58" cy="14" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

// Empty State Suitcase Graphic
function EmptySuitcaseGraphic() {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
      <path d="M18 12V8C18 6.89543 18.8954 6 20 6H28C29.1046 6 30 6.89543 30 8V12" stroke="#7146FD" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="10" y="12" width="28" height="30" rx="5" stroke="#7146FD" strokeWidth="2.5" fill="none" />
      <line x1="18" y1="18" x2="18" y2="36" stroke="#7146FD" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="24" y1="18" x2="24" y2="36" stroke="#7146FD" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="30" y1="18" x2="30" y2="36" stroke="#7146FD" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <circle cx="16" cy="44" r="2" fill="#7146FD" />
      <circle cx="32" cy="44" r="2" fill="#7146FD" />
    </svg>
  );
}

// Initial Mock Leave Data from Figma
const INITIAL_APPROVED_LEAVES = [
  {
    id: 'app-1',
    date: '18 September 2024',
    leaveDate: '20 Sept - 22 Sept',
    totalLeave: '2 Days',
    status: 'Approved',
    approvedDate: '19 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  }
];

const INITIAL_REJECTED_LEAVES = [
  {
    id: 'rej-1',
    date: '21 September 2024',
    leaveDate: '10 Nov - 17 Nov',
    totalLeave: '7 Days',
    status: 'Rejected',
    rejectedDate: '22 Sept 2024',
    approver: 'Elaine',
    approverAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
  }
];

const LEAVE_CATEGORIES = [
  'Sick Leave',
  'Annual Leave/Vacation Leave',
  'Maternity/Paternity Leave',
  'Bereavement Leave',
  'Personal Leave',
  'Jury Duty Leave',
  'Compassionate Leave'
];

const DELEGATEES = [
  'Jeane - UX Writer',
  'Alpheas - UI Designer',
  'John - UX Designer',
  'Alicia - Jr Product Manager',
  'Claudia - UI Designer',
  'Brahm - Mid Front End Developer',
  'Ivankov - Sr Front End Developer'
];

export default function LeaveView({
  isEmpty = false,
  subScreen: propSubScreen,
  onSubScreenChange: propOnSubScreenChange
}) {
  // Navigation: 'main' | 'submit-leave'
  const [internalSubScreen, setInternalSubScreen] = useState('main');
  const subScreen = propSubScreen !== undefined ? propSubScreen : internalSubScreen;
  const setSubScreen = propOnSubScreenChange || setInternalSubScreen;

  // Active filter tab: 'review' | 'approved' | 'rejected'
  const [activeTab, setActiveTab] = useState('review');

  // Leave data
  const [reviewLeaves, setReviewLeaves] = useState([]);
  const [approvedLeaves] = useState(INITIAL_APPROVED_LEAVES);
  const [rejectedLeaves] = useState(INITIAL_REJECTED_LEAVES);

  // Form State for Submit Leave
  const [category, setCategory] = useState('Annual Leave/Vacation Leave');
  const [tempCategory, setTempCategory] = useState('Annual Leave/Vacation Leave');
  const [duration, setDuration] = useState('11 Nov 2024 - 13 Nov 2024');
  const [delegation, setDelegation] = useState('John - UX Designer');
  const [tempDelegation, setTempDelegation] = useState('John - UX Designer');
  const [emergencyPhone, setEmergencyPhone] = useState('821 2100 2100');
  const [description, setDescription] = useState('Vacation to Nusa Penida');

  // Calendar State in Leave Duration modal
  const [rangeStart, setRangeStart] = useState(11);
  const [rangeEnd, setRangeEnd] = useState(13);

  // Modals inside Submit Leave: null | 'category' | 'duration' | 'delegation' | 'confirm-submit' | 'submit-success'
  const [activeModal, setActiveModal] = useState(null);

  // Handle Date Click inside calendar modal
  const handleCalendarDayClick = (day) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(day);
      setRangeEnd(null);
    } else if (rangeStart && !rangeEnd) {
      if (day < rangeStart) {
        setRangeEnd(rangeStart);
        setRangeStart(day);
      } else {
        setRangeEnd(day);
      }
    }
  };

  // Submit Leave Handlers
  const handleConfirmSubmit = () => {
    setActiveModal('submit-success');
  };

  const handleFinishSubmit = () => {
    setActiveModal(null);
    const newLeave = {
      id: `rev-${Date.now()}`,
      date: '10 November 2024',
      leaveDate: '11 Nov - 13 Nov',
      totalLeave: '2 Days',
      status: 'Review'
    };

    setReviewLeaves((prev) => [newLeave, ...prev]);
    setActiveTab('review');
    setSubScreen('main');
  };

  // =========================================================================
  // SUB-SCREEN 2: SUBMIT LEAVE (Figma Frame LeaveSummary/SubmitLeave)
  // =========================================================================
  if (subScreen === 'submit-leave') {
    const isFormValid =
      category.trim() !== '' &&
      duration.trim() !== '' &&
      delegation.trim() !== '' &&
      emergencyPhone.trim() !== '';

    return (
      <div className="submit-leave-screen">
        {/* Top Header */}
        <div className="submit-leave-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('main')}
            aria-label="Back to Leave Summary"
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="submit-leave-title">Submit Leave</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Section Heading */}
        <div className="submit-leave-section-title">Fill Leave Information</div>
        <div className="submit-leave-section-sub">Information about leave details</div>

        {/* Form Field 1: Leave Category */}
        <div className="claim-input-row">
          <label className="claim-label">Leave Category</label>
          <div
            className="claim-field-box"
            onClick={() => {
              setTempCategory(category || 'Annual Leave/Vacation Leave');
              setActiveModal('category');
            }}
          >
            <div className={`claim-field-left ${category ? '' : 'placeholder'}`}>
              <Briefcase size={16} color="#7146FD" />
              <span>{category || 'Select Category'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Form Field 2: Leave Duration */}
        <div className="claim-input-row">
          <label className="claim-label">Leave Duration</label>
          <div
            className="claim-field-box"
            onClick={() => setActiveModal('duration')}
          >
            <div className={`claim-field-left ${duration ? '' : 'placeholder'}`}>
              <Calendar size={16} color="#7146FD" />
              <span>{duration || 'Select Duration'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Form Field 3: Task Delegation */}
        <div className="claim-input-row">
          <label className="claim-label">Task Delegation</label>
          <div
            className="claim-field-box"
            onClick={() => {
              setTempDelegation(delegation || 'John - UX Designer');
              setActiveModal('delegation');
            }}
          >
            <div className={`claim-field-left ${delegation ? '' : 'placeholder'}`}>
              <User size={16} color="#7146FD" />
              <span>{delegation || 'Select Delegatee'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Form Field 4: Emergency Contact */}
        <div className="claim-input-row">
          <label className="claim-label">Emergency Contact During Leave Period</label>
          <div className="phone-input-group">
            <button type="button" className="phone-country-btn">
              <span>INA</span>
              <ChevronDown size={13} color="#8F95B2" />
              <span style={{ marginLeft: '4px', color: '#1A1D2E' }}>+62</span>
            </button>
            <input
              type="tel"
              className="phone-number-field"
              placeholder="82150005000"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Form Field 5: Leave Description */}
        <div className="claim-input-row" style={{ marginBottom: '28px' }}>
          <label className="claim-label">Leave Description</label>
          <textarea
            className="claim-textarea"
            placeholder="Enter Leave Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Submit Now CTA */}
        <button
          type="button"
          className="signup-btn-primary"
          style={{
            opacity: isFormValid ? 1 : 0.6,
            pointerEvents: isFormValid ? 'auto' : 'none'
          }}
          onClick={() => setActiveModal('confirm-submit')}
        >
          Submit Now
        </button>

        {/* MODAL 1: SELECT LEAVE CATEGORY */}
        {activeModal === 'category' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Leave Category</h3>
              <p className="selection-modal-sub">Select Leave category</p>

              <div className="selection-options-list" style={{ maxHeight: '340px', overflowY: 'auto' }}>
                {LEAVE_CATEGORIES.map((cat) => {
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

        {/* MODAL 2: LEAVE DURATION CALENDAR PICKER */}
        {activeModal === 'duration' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal calendar-modal-container" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Leave Duration</h3>
              <p className="selection-modal-sub">Select Leave Duration</p>

              <div className="calendar-header-nav">
                <button type="button" className="calendar-nav-arrow" aria-label="Previous Month">
                  <ChevronLeft size={18} />
                </button>
                <span className="calendar-month-title">November 2024</span>
                <button type="button" className="calendar-nav-arrow" aria-label="Next Month">
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="calendar-weekdays-row">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className="calendar-days-grid">
                {/* October trailing dates */}
                {[26, 27, 28, 29, 30, 31].map((d) => (
                  <div key={`prev-${d}`} className="calendar-day-cell other-month">
                    {d}
                  </div>
                ))}

                {/* November dates 1 to 30 */}
                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                  const isStart = rangeStart === day;
                  const isEnd = rangeEnd === day;
                  const isInRange = rangeStart && rangeEnd && day > rangeStart && day < rangeEnd;
                  const isSingle = rangeStart === day && !rangeEnd;

                  let cellClass = 'calendar-day-cell';
                  if (isSingle) cellClass += ' range-single';
                  else if (isStart) cellClass += ' range-start';
                  else if (isEnd) cellClass += ' range-end';
                  else if (isInRange) cellClass += ' in-range';

                  return (
                    <div
                      key={`curr-${day}`}
                      className={cellClass}
                      onClick={() => handleCalendarDayClick(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                <button
                  type="button"
                  className="attendant-btn-purple"
                  onClick={() => {
                    const startStr = rangeStart ? `${rangeStart} Nov 2024` : '11 Nov 2024';
                    const endStr = rangeEnd ? `${rangeEnd} Nov 2024` : `${rangeStart || 13} Nov 2024`;
                    setDuration(`${startStr} - ${endStr}`);
                    setActiveModal(null);
                  }}
                >
                  Submit Date
                </button>
                <button
                  type="button"
                  className="attendant-btn-outline"
                  onClick={() => setActiveModal(null)}
                >
                  Close Message
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 3: SELECT TASK DELEGATION */}
        {activeModal === 'delegation' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Select Task Delegation</h3>
              <p className="selection-modal-sub">Select delegatee</p>

              <div className="selection-options-list" style={{ maxHeight: '340px', overflowY: 'auto' }}>
                {DELEGATEES.map((del) => {
                  const isSelected = tempDelegation === del;
                  return (
                    <div
                      key={del}
                      className={`category-option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setTempDelegation(del)}
                    >
                      <span className="category-option-label">{del}</span>
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
                    setDelegation(tempDelegation);
                    setActiveModal(null);
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 4: SUBMIT LEAVE CONFIRMATION */}
        {activeModal === 'confirm-submit' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <Layers size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>

              <h2 className="signup-modal-title">Submit Leave</h2>
              <p className="signup-modal-desc">
                Double-check your leave details to ensure everything is correct. Do you want to proceed?
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

        {/* MODAL 5: LEAVE SUBMITTED SUCCESS */}
        {activeModal === 'submit-success' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <Layers size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>

              <h2 className="signup-modal-title">Leave Submitted!</h2>
              <p className="signup-modal-desc">
                Your leave request has been sent for review! Wait for HR to review your request.
              </p>

              <button
                type="button"
                className="signup-btn-primary"
                onClick={handleFinishSubmit}
              >
                View Leave History
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN 1: MAIN LEAVE DASHBOARD (Figma Frame LeaveSummary)
  // =========================================================================
  return (
    <div className="leave-screen-wrap">
      {/* Top Purple Banner with Suitcase & Rainbow */}
      <div className="leave-purple-banner">
        <div>
          <h1 className="leave-banner-title">Leave Summary</h1>
          <p className="leave-banner-sub">Submit Leave</p>
        </div>
        <SuitcaseRainbowIcon size={56} />
      </div>

      {/* Floating Total Leave Card (2-Column Grid) */}
      <div className="leave-summary-card">
        <div className="leave-summary-title">Total Leave</div>
        <div className="leave-summary-sub">Period 1 Jan 2024 - 30 Dec 2024</div>

        <div className="leave-stats-grid">
          {/* Stat 1: Available */}
          <div className="leave-stat-box">
            <div className="leave-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
              Available
            </div>
            <div className="leave-stat-val">20</div>
          </div>

          {/* Stat 2: Leave Used */}
          <div className="leave-stat-box">
            <div className="leave-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7146FD' }} />
              Leave Used
            </div>
            <div className="leave-stat-val">2</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs Row */}
      <div className="leave-tabs-row">
        {[
          { id: 'review', label: 'Review', count: reviewLeaves.length },
          { id: 'approved', label: 'Approved', count: approvedLeaves.length },
          { id: 'rejected', label: 'Rejected', count: rejectedLeaves.length }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`leave-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.label}</span>
              {tab.id === 'review' && tab.count > 0 && (
                <span className="leave-tab-badge">{tab.count}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Leave Items List / Empty State */}
      <div className="leave-list-wrap">
        {/* REVIEW TAB */}
        {activeTab === 'review' && (
          <>
            {reviewLeaves.length === 0 ? (
              <>
                <div className="leave-section-header-title">Leave Submitted</div>
                <div className="leave-section-header-sub">Leave Information</div>

                <div className="leave-empty-card">
                  <div className="leave-empty-icon-wrap">
                    <EmptySuitcaseGraphic />
                  </div>
                  <h3 className="leave-empty-title">No Leave Submitted!</h3>
                  <p className="leave-empty-desc">
                    Ready to catch some rest on a beach? Hit "Submit Leave" and relax that well-deserved break!
                  </p>
                </div>
              </>
            ) : (
              reviewLeaves.map((leave) => (
                <div key={leave.id} className="leave-item-card">
                  <div className="leave-item-date-row">
                    <Sparkles size={14} color="#7146FD" />
                    <span>{leave.date}</span>
                  </div>

                  <div className="leave-item-data-row">
                    <div className="leave-data-col">
                      <span className="leave-data-label">Leave Date</span>
                      <span className="leave-data-val">{leave.leaveDate}</span>
                    </div>

                    <div className="leave-data-col right">
                      <span className="leave-data-label">Total Leave</span>
                      <span className="leave-data-val">{leave.totalLeave}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </>
        )}

        {/* APPROVED TAB */}
        {activeTab === 'approved' &&
          approvedLeaves.map((leave) => (
            <div key={leave.id} className="leave-item-card">
              <div className="leave-item-date-row">
                <Calendar size={14} color="#8F95B2" />
                <span>{leave.date}</span>
              </div>

              <div className="leave-item-data-row">
                <div className="leave-data-col">
                  <span className="leave-data-label">Leave Date</span>
                  <span className="leave-data-val">{leave.leaveDate}</span>
                </div>

                <div className="leave-data-col right">
                  <span className="leave-data-label">Total Leave</span>
                  <span className="leave-data-val">{leave.totalLeave}</span>
                </div>
              </div>

              <div className="leave-item-footer">
                <div className="leave-status-approved">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                  <span>Approved at {leave.approvedDate}</span>
                </div>
                <div className="leave-approver-info">
                  <span>By</span>
                  <img src={leave.approverAvatar} alt={leave.approver} className="leave-approver-avatar" />
                  <span className="leave-approver-name">{leave.approver}</span>
                </div>
              </div>
            </div>
          ))}

        {/* REJECTED TAB */}
        {activeTab === 'rejected' &&
          rejectedLeaves.map((leave) => (
            <div key={leave.id} className="leave-item-card">
              <div className="leave-item-date-row">
                <Calendar size={14} color="#8F95B2" />
                <span>{leave.date}</span>
              </div>

              <div className="leave-item-data-row">
                <div className="leave-data-col">
                  <span className="leave-data-label">Leave Date</span>
                  <span className="leave-data-val">{leave.leaveDate}</span>
                </div>

                <div className="leave-data-col right">
                  <span className="leave-data-label">Total Leave</span>
                  <span className="leave-data-val">{leave.totalLeave}</span>
                </div>
              </div>

              <div className="leave-item-footer">
                <div className="leave-status-rejected">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5252' }} />
                  <span>Rejected at {leave.rejectedDate}</span>
                </div>
                <div className="leave-approver-info">
                  <span>By</span>
                  <img src={leave.approverAvatar} alt={leave.approver} className="leave-approver-avatar" />
                  <span className="leave-approver-name">{leave.approver}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Submit Leave Button */}
      <div style={{ padding: '0 16px', marginTop: 'auto' }}>
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setSubScreen('submit-leave')}
        >
          Submit Leave
        </button>
      </div>
    </div>
  );
}
