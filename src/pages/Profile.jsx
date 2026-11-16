import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  MapPin,
  User,
  Folder,
  CreditCard,
  Lock,
  Info,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronDown,
  Calendar,
  Briefcase,
  Globe,
  Camera,
  Laptop,
  Tag,
  Shield,
  Download,
  Eye,
  EyeOff,
  Zap,
  ShieldCheck,
  Check
} from 'lucide-react';
import '../styles/profile.css';
import '../styles/signup.css';

// Pink Hoodie Character Avatar SVG matching Figma 1:1
function TonaldAvatarIllustration({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Background Pink */}
      <rect width="64" height="64" rx="16" fill="#FCE7F3" />
      {/* Hoodie Body */}
      <path d="M12 56 C14 42, 22 36, 32 36 C42 36, 50 42, 52 56 Z" fill="#F472B6" />
      {/* Collar / Strings */}
      <path d="M28 38 L28 46 M36 38 L36 46" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      {/* Neck */}
      <rect x="27" y="32" width="10" height="8" rx="2" fill="#FBCFE8" />
      {/* Head / Face */}
      <circle cx="32" cy="24" r="14" fill="#FDE047" />
      {/* Pink Beanie / Cap */}
      <path d="M18 22 C18 14, 24 10, 32 10 C40 10, 46 14, 46 22 Z" fill="#EC4899" />
      <rect x="16" y="20" width="32" height="5" rx="2.5" fill="#DB2777" />
      {/* Hair Tuft */}
      <path d="M20 25 C22 28, 25 28, 27 25" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      {/* Glasses */}
      <rect x="23" y="23" width="7" height="6" rx="2" stroke="#1E1B38" strokeWidth="1.5" fill="none" />
      <rect x="34" y="23" width="7" height="6" rx="2" stroke="#1E1B38" strokeWidth="1.5" fill="none" />
      <line x1="30" y1="26" x2="34" y2="26" stroke="#1E1B38" strokeWidth="1.5" />
      {/* Smile */}
      <path d="M29 32 Q32 35 35 32" stroke="#1E1B38" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const MONTHLY_PAYROLL = [
  { id: 'sep-2024', month: 'September 2024', hours: '40:00:00 hrs', received: '$800', paidOn: '30 Sept 2024' },
  { id: 'aug-2024', month: 'August 2024', hours: '40:00:00 hrs', received: '$800', paidOn: '30 Aug 2024' },
  { id: 'jul-2024', month: 'July 2024', hours: '40:00:00 hrs', received: '$800', paidOn: '30 Jul 2024' },
  { id: 'jun-2024', month: 'June 2024', hours: '40:00:00 hrs', received: '$800', paidOn: '30 Jun 2024' },
  { id: 'may-2024', month: 'May 2024', hours: '40:00:00 hrs', received: '$800', paidOn: '30 May 2024' },
  { id: 'apr-2024', month: 'April 2024', hours: '40:00:00 hrs', received: '$800', paidOn: '30 Apr 2024' }
];

export default function Profile({ initialSubScreen = 'main' }) {
  const navigate = useNavigate();

  // Navigation: 'main' | 'personal-data' | 'office-assets' | 'payroll' | 'payslip' | 'change-password'
  const [subScreen, setSubScreen] = useState(initialSubScreen);

  // Modals state: null | 'confirm-update' | 'update-success' | 'payroll-saved' | 'confirm-password' | 'otp-modal' | 'password-success'
  const [activeModal, setActiveModal] = useState(null);

  // Personal Data Form State
  const [firstName, setFirstName] = useState('Tonald');
  const [lastName, setLastName] = useState('Drump');
  const [dob, setDob] = useState('10 December 1997');
  const [position, setPosition] = useState('Junior Full Stack Developer');
  const [country, setCountry] = useState('Indonesia');
  const [state, setState] = useState('DKI Jakarta');
  const [city, setCity] = useState('Jakarta Selatan');
  const [address, setAddress] = useState('Jl Mampang Prapatan XIV No 7A, Jakarta Selatan 12790');

  // Change Password Form State
  const [currentPwd, setCurrentPwd] = useState('password123');
  const [newPwd, setNewPwd] = useState('newpassword123');
  const [confirmPwd, setConfirmPwd] = useState('newpassword123');
  const [showCurrentPwd, setShowCurrentPwd] = useState(false);
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  // OTP State
  const [otp, setOtp] = useState(['1', '2', '3', '1', '2', '3']);

  // =========================================================================
  // SUB-SCREEN: 1. PERSONAL DATA (Figma Frame MyProfile/PersonalData)
  // =========================================================================
  if (subScreen === 'personal-data') {
    return (
      <div className="subprofile-screen">
        <div className="subprofile-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('main')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="subprofile-title">Personal Data</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Section Heading */}
        <h3 className="subprofile-heading">My Personal Data</h3>
        <p className="subprofile-sub">Details about my personal data</p>

        {/* Avatar Upload Box */}
        <div className="personal-avatar-upload-wrap">
          <div className="personal-avatar-box-relative" onClick={() => alert('Photo picker opened')}>
            <TonaldAvatarIllustration size={64} />
            <div className="personal-avatar-badge">
              <Camera size={13} color="#FFFFFF" />
            </div>
          </div>
          <div className="personal-upload-title">Upload Photo</div>
          <div className="personal-upload-hint">Format should be in .jpeg .png less than 5MB</div>
        </div>

        {/* Form Fields: Personal Info */}
        <div className="claim-input-row">
          <label className="claim-label">First Name</label>
          <div className="claim-field-box">
            <div className="claim-field-left" style={{ width: '100%' }}>
              <User size={16} color="#7146FD" />
              <input
                type="text"
                className="claim-text-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">Last Name</label>
          <div className="claim-field-box">
            <div className="claim-field-left" style={{ width: '100%' }}>
              <User size={16} color="#7146FD" />
              <input
                type="text"
                className="claim-text-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">Date of Birth</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Calendar size={16} color="#7146FD" />
              <span>{dob}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        <div className="claim-input-row" style={{ marginBottom: '24px' }}>
          <label className="claim-label">Position</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Briefcase size={16} color="#7146FD" />
              <span>{position}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Section Heading: Address */}
        <h3 className="subprofile-heading">Address</h3>
        <p className="subprofile-sub">Your current domicile</p>

        <div className="claim-input-row">
          <label className="claim-label">Country</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Globe size={16} color="#7146FD" />
              <span>{country}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">State</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <MapPin size={16} color="#7146FD" />
              <span>{state}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">City</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <MapPin size={16} color="#7146FD" />
              <span>{city}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        <div className="claim-input-row" style={{ marginBottom: '28px' }}>
          <label className="claim-label">Full Address</label>
          <textarea
            className="claim-textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Update Button */}
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setActiveModal('confirm-update')}
        >
          Update
        </button>

        {/* MODAL 1: CONFIRM UPDATE PROFILE */}
        {activeModal === 'confirm-update' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <User size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>
              <h2 className="signup-modal-title">Update Profile</h2>
              <p className="signup-modal-desc">
                Are you sure you want to update your profile? This will help us improve your experience and provide personalized features.
              </p>
              <button
                type="button"
                className="signup-btn-primary"
                onClick={() => setActiveModal('update-success')}
              >
                Yes, Update Profile
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

        {/* MODAL 2: PROFILE UPDATED SUCCESS */}
        {activeModal === 'update-success' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <User size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>
              <h2 className="signup-modal-title">Profile Updated!</h2>
              <p className="signup-modal-desc">
                Your profile has been successfully updated. We're excited to see you take this step!
              </p>
              <button
                type="button"
                className="signup-btn-primary"
                onClick={() => {
                  setActiveModal(null);
                  setSubScreen('main');
                }}
              >
                View My Profile
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN: 2. OFFICE ASSETS (Figma Frame MyProfile/OfficeAssets)
  // =========================================================================
  if (subScreen === 'office-assets') {
    return (
      <div className="subprofile-screen">
        <div className="subprofile-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('main')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="subprofile-title">Office Assets</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Section Heading */}
        <h3 className="subprofile-heading">Assets Information</h3>
        <p className="subprofile-sub">Your office assets Information</p>

        {/* Laptop Photo Card matching Figma */}
        <div className="office-asset-img-card">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
            alt="Office MacBook"
            className="office-asset-img"
          />
        </div>

        {/* Asset Details Fields */}
        <div className="claim-input-row">
          <label className="claim-label">Assets Name</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Laptop size={16} color="#7146FD" />
              <span>Laptop Macbook Air M1 2020</span>
            </div>
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">Brand</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Tag size={16} color="#7146FD" />
              <span>Apple</span>
            </div>
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">Warranty Status</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Shield size={16} color="#7146FD" />
              <span>Off</span>
            </div>
          </div>
        </div>

        <div className="claim-input-row">
          <label className="claim-label">Buying Date</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Briefcase size={16} color="#7146FD" />
              <span>12 September 2020</span>
            </div>
          </div>
        </div>

        <div className="claim-input-row" style={{ marginBottom: '24px' }}>
          <label className="claim-label">Received On</label>
          <div className="claim-field-box">
            <div className="claim-field-left">
              <Calendar size={16} color="#7146FD" />
              <span>14 September 2020</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN: 3. PAYSLIP BREAKDOWN (Figma Frame MyProfile/Payroll&Tax Details)
  // =========================================================================
  if (subScreen === 'payslip') {
    return (
      <div className="subprofile-screen">
        <div className="subprofile-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('payroll')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="subprofile-title">Payroll and Tax</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Section 1: Total Working Hour */}
        <h3 className="subprofile-heading">Total Working Hour</h3>
        <div className="payslip-period-sub">Paid Period 1 Sept 2024 - 30 Sept 2024</div>

        <div className="payslip-hours-card">
          <div className="payslip-hours-grid">
            <div className="payslip-hour-box">
              <span className="payslip-hour-label">
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#F59E0B' }} />
                Overtime
              </span>
              <div className="payslip-hour-val">00:00 Hrs</div>
            </div>
            <div className="payslip-hour-box">
              <span className="payslip-hour-label">
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7146FD' }} />
                This Pay Period
              </span>
              <div className="payslip-hour-val">40:00 Hrs</div>
            </div>
          </div>
        </div>

        {/* Section 2: Payroll Details */}
        <h3 className="subprofile-heading">Payroll Details</h3>
        <p className="subprofile-sub">Details about payroll</p>

        <div className="payslip-breakdown-card">
          <div className="payslip-row">
            <span>Basic Salary</span>
            <span>$700.00</span>
          </div>
          <div className="payslip-row red">
            <span>Tax</span>
            <span>-$70.00</span>
          </div>
          <div className="payslip-row green">
            <span>Reimbursement</span>
            <span>+$70.00</span>
          </div>
          <div className="payslip-row green">
            <span>Bonus</span>
            <span>+$100.00</span>
          </div>
          <div className="payslip-row">
            <span>Overtime</span>
            <span>$0.00</span>
          </div>

          <div className="payslip-divider" />

          <div className="payslip-row total">
            <span>Total Salary</span>
            <span>$800.00</span>
          </div>
        </div>

        {/* Save As PDF Button */}
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setActiveModal('payroll-saved')}
        >
          Save As PDF
        </button>

        {/* MODAL: PAYROLL SAVED SUCCESS */}
        {activeModal === 'payroll-saved' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <Download size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>
              <h2 className="signup-modal-title">Payroll Saved!</h2>
              <p className="signup-modal-desc">
                Your payroll has been successfully saved. You can check it on your device storage.
              </p>
              <button
                type="button"
                className="signup-btn-primary"
                onClick={() => {
                  setActiveModal(null);
                  setSubScreen('payroll');
                }}
              >
                Close Message
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN: 4. PAYROLL & TAX HISTORY LIST (Figma Frame MyProfile/Payroll&Tax)
  // =========================================================================
  if (subScreen === 'payroll') {
    return (
      <div className="subprofile-screen">
        <div className="subprofile-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('main')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="subprofile-title">Payroll and Tax</h2>
          <div style={{ width: '32px' }} />
        </div>

        {MONTHLY_PAYROLL.map((pay) => (
          <div
            key={pay.id}
            className="payroll-history-card"
            onClick={() => setSubScreen('payslip')}
          >
            <div className="payroll-history-month">{pay.month}</div>
            <div className="payroll-history-grid">
              <div className="payroll-history-col">
                <span className="payroll-metric-label">Total Hours</span>
                <span className="payroll-metric-val">{pay.hours}</span>
              </div>
              <div className="payroll-history-col center">
                <span className="payroll-metric-label">Received</span>
                <span className="payroll-metric-val">{pay.received}</span>
              </div>
              <div className="payroll-history-col right">
                <span className="payroll-metric-label">Paid On</span>
                <span className="payroll-metric-val">{pay.paidOn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN: 5. CHANGE PASSWORD (Figma Frame Change Password)
  // =========================================================================
  if (subScreen === 'change-password') {
    return (
      <div className="subprofile-screen">
        <div className="subprofile-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setSubScreen('main')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="subprofile-title">Change Password</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Section Heading */}
        <h3 className="subprofile-heading">Change Password Form</h3>
        <p className="subprofile-sub">Fill information to change your password</p>

        {/* Field 1: Current Password */}
        <div className="claim-input-row">
          <label className="claim-label">Current Password</label>
          <div className="claim-field-box">
            <div className="claim-field-left" style={{ width: '100%' }}>
              <Lock size={16} color="#7146FD" />
              <input
                type={showCurrentPwd ? 'text' : 'password'}
                className="claim-text-input"
                placeholder="My Password"
                value={currentPwd}
                onChange={(e) => setCurrentPwd(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="signin-icon-btn"
              onClick={() => setShowCurrentPwd(!showCurrentPwd)}
            >
              {showCurrentPwd ? <EyeOff size={16} color="#8F95B2" /> : <Eye size={16} color="#8F95B2" />}
            </button>
          </div>
        </div>

        {/* Field 2: New Password */}
        <div className="claim-input-row">
          <label className="claim-label">New Password</label>
          <div className="claim-field-box">
            <div className="claim-field-left" style={{ width: '100%' }}>
              <Lock size={16} color="#7146FD" />
              <input
                type={showNewPwd ? 'text' : 'password'}
                className="claim-text-input"
                placeholder="My Password"
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="signin-icon-btn"
              onClick={() => setShowNewPwd(!showNewPwd)}
            >
              {showNewPwd ? <EyeOff size={16} color="#8F95B2" /> : <Eye size={16} color="#8F95B2" />}
            </button>
          </div>
        </div>

        {/* Field 3: Confirm New Password */}
        <div className="claim-input-row" style={{ marginBottom: '28px' }}>
          <label className="claim-label">Confirm New Password</label>
          <div className="claim-field-box">
            <div className="claim-field-left" style={{ width: '100%' }}>
              <Lock size={16} color="#7146FD" />
              <input
                type={showConfirmPwd ? 'text' : 'password'}
                className="claim-text-input"
                placeholder="My Password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="signin-icon-btn"
              onClick={() => setShowConfirmPwd(!showConfirmPwd)}
            >
              {showConfirmPwd ? <EyeOff size={16} color="#8F95B2" /> : <Eye size={16} color="#8F95B2" />}
            </button>
          </div>
        </div>

        {/* Update Password CTA */}
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setActiveModal('confirm-password')}
        >
          Update Password
        </button>

        {/* MODAL 1: CONFIRM UPDATE PASSWORD */}
        {activeModal === 'confirm-password' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <Zap size={26} strokeWidth={2.4} color="#FFFFFF" fill="#FFFFFF" />
              </div>
              <h2 className="signup-modal-title">Update Password</h2>
              <p className="signup-modal-desc">
                Are you sure you want to update your password? To ensure your account safety we will send verification code to your email.
              </p>
              <button
                type="button"
                className="signup-btn-primary"
                onClick={() => setActiveModal('otp-modal')}
              >
                Yes, Update Password
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

        {/* MODAL 2: FORGOT PASSWORD / OTP VERIFICATION MODAL */}
        {activeModal === 'otp-modal' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="signup-floating-badge">
                <ShieldCheck size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>
              <h2 className="signup-modal-title">Forgot Password</h2>
              <p className="signup-modal-desc" style={{ marginBottom: '14px' }}>
                A reset code has been sent to <strong>Tonald@work.com</strong>, check your email to continue the password reset process.
              </p>

              {/* 6 OTP Boxes */}
              <div className="otp-inputs-grid">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="otp-box"
                    value={digit}
                    onChange={(e) => {
                      const val = e.target.value;
                      const next = [...otp];
                      next[i] = val;
                      setOtp(next);
                    }}
                  />
                ))}
              </div>

              <div className="otp-resend-text">
                Haven't received the verification code?{' '}
                <span className="otp-resend-link" onClick={() => alert('Code resent to Tonald@work.com')}>
                  Resend it.
                </span>
              </div>

              <button
                type="button"
                className="signup-btn-primary"
                onClick={() => {
                  setActiveModal(null);
                  alert('Password updated successfully!');
                  setSubScreen('main');
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // MAIN PROFILE SCREEN (Figma Frame MyProfile)
  // =========================================================================
  return (
    <div className="profile-page-wrap">
      {/* Top Purple Header */}
      <div className="profile-purple-banner">
        <button
          type="button"
          className="profile-back-circle-btn"
          onClick={() => navigate('/home')}
          aria-label="Back to Dashboard"
        >
          <ArrowLeft size={18} />
        </button>
        <h2 className="profile-top-title">My Profile</h2>
        <div style={{ width: '34px' }} />
      </div>

      {/* Floating User Card */}
      <div className="profile-user-card">
        <div className="profile-avatar-box">
          <TonaldAvatarIllustration size={68} />
        </div>
        <div className="profile-name-badge-row">
          <span>{firstName} {lastName}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10" fill="#3B82F6" />
            <path d="M8.5 12.5L11 15L16 9.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="profile-role-sub">{position}</span>
      </div>

      {/* Section 1: CONTACT */}
      <div className="profile-section-label">Contact</div>
      <div className="profile-card-group">
        <div className="profile-contact-row">
          <div className="profile-contact-icon">
            <Mail size={15} />
          </div>
          <span>Tonald@gmail.com</span>
        </div>
        <div className="profile-contact-row">
          <div className="profile-contact-icon">
            <MapPin size={15} />
          </div>
          <span>Taman Anggrek</span>
        </div>
      </div>

      {/* Section 2: ACCOUNT */}
      <div className="profile-section-label">Account</div>
      <div className="profile-card-group">
        <div className="profile-menu-row" onClick={() => setSubScreen('personal-data')}>
          <div className="profile-menu-left">
            <div className="profile-menu-icon">
              <User size={15} />
            </div>
            <span>Personal Data</span>
          </div>
          <ChevronRight size={16} color="#8F95B2" />
        </div>

        <div className="profile-menu-row" onClick={() => setSubScreen('office-assets')}>
          <div className="profile-menu-left">
            <div className="profile-menu-icon">
              <Folder size={15} />
            </div>
            <span>Office Assets</span>
          </div>
          <ChevronRight size={16} color="#8F95B2" />
        </div>

        <div className="profile-menu-row" onClick={() => setSubScreen('payroll')}>
          <div className="profile-menu-left">
            <div className="profile-menu-icon">
              <CreditCard size={15} />
            </div>
            <span>Payroll &amp; Tax</span>
          </div>
          <ChevronRight size={16} color="#8F95B2" />
        </div>
      </div>

      {/* Section 3: SETTINGS */}
      <div className="profile-section-label">Settings</div>
      <div className="profile-card-group">
        <div className="profile-menu-row" onClick={() => setSubScreen('change-password')}>
          <div className="profile-menu-left">
            <div className="profile-menu-icon">
              <Lock size={15} />
            </div>
            <span>Change Password</span>
          </div>
          <ChevronRight size={16} color="#8F95B2" />
        </div>

        <div className="profile-menu-row" onClick={() => alert('Work Mate Version 2.4.0 (Build 2026)')}>
          <div className="profile-menu-left">
            <div className="profile-menu-icon">
              <Info size={15} />
            </div>
            <span>Versioning</span>
          </div>
          <ChevronRight size={16} color="#8F95B2" />
        </div>

        <div className="profile-menu-row" onClick={() => alert('Support & FAQ: support@workmate.internal')}>
          <div className="profile-menu-left">
            <div className="profile-menu-icon">
              <HelpCircle size={15} />
            </div>
            <span>FAQ and Help</span>
          </div>
          <ChevronRight size={16} color="#8F95B2" />
        </div>

        <div className="profile-menu-row" onClick={() => navigate('/signin')}>
          <div className="profile-menu-left logout">
            <div className="profile-menu-icon logout">
              <LogOut size={15} />
            </div>
            <span>Logout</span>
          </div>
          <ChevronRight size={16} color="#FF5252" />
        </div>
      </div>
    </div>
  );
}
