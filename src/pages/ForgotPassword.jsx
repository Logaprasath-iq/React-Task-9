import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import RecoveryForm from '../components/forgotPassword/RecoveryForm';
import OTPVerification from '../components/forgotPassword/OTPVerification';
import NewPasswordForm from '../components/forgotPassword/NewPasswordForm';
import PasswordResetSuccess from '../components/forgotPassword/PasswordResetSuccess';
import '../styles/forgotPassword.css';

export default function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(1);
  const [recoveryTarget, setRecoveryTarget] = useState({
    type: 'email',
    target: 'tariqul.islam@workmate.io',
    email: 'tariqul.islam@workmate.io',
    phone: '5553829912'
  });
  const navigate = useNavigate();

  const handleBack = () => {
    if (currentStep > 1 && currentStep < 4) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate('/signin');
    }
  };

  const getStepHeader = () => {
    switch (currentStep) {
      case 1:
        return {
          title: 'Forgot Password 🔐',
          subtitle: 'Don’t worry! Enter your registered email or phone to reset your password.'
        };
      case 2:
        return {
          title: 'Enter Verification Code',
          subtitle: 'Step 2 of 3: Enter the security code sent to your device.'
        };
      case 3:
        return {
          title: 'Create New Password',
          subtitle: 'Step 3 of 3: Set up a new secure password for your account.'
        };
      case 4:
      default:
        return {
          title: 'All Done!',
          subtitle: 'Password updated successfully.'
        };
    }
  };

  const { title, subtitle } = getStepHeader();

  return (
    <div className="forgot-container">
      {/* Header with back button */}
      {currentStep < 4 && (
        <div className="forgot-header-row">
          <BackButton onClick={handleBack} />
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-purple)' }}>
            Step {currentStep} of 3
          </div>
          <div style={{ width: '42px' }} />
        </div>
      )}

      {/* Title */}
      {currentStep < 4 && (
        <div className="forgot-title-box">
          <h1 className="forgot-main-title">{title}</h1>
          <p className="forgot-subtitle">{subtitle}</p>
        </div>
      )}

      {/* Forms by Step */}
      <div style={{ flex: 1 }}>
        {currentStep === 1 && (
          <RecoveryForm
            recoveryTarget={recoveryTarget}
            setRecoveryTarget={setRecoveryTarget}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <OTPVerification
            recoveryTarget={recoveryTarget}
            onNext={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <NewPasswordForm onNext={() => setCurrentStep(4)} />
        )}

        {currentStep === 4 && (
          <PasswordResetSuccess />
        )}
      </div>

      {/* Footer Back to Sign In */}
      {currentStep < 4 && (
        <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '20px', fontSize: '13.5px', color: 'var(--text-body)' }}>
          Remember your password?{' '}
          <Link to="/signin" style={{ color: 'var(--primary-purple)', fontWeight: '700' }}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
