import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/common/BackButton';
import PersonalInformationForm from '../components/signup/PersonalInformationForm';
import EmployeeInfoForm from '../components/signup/EmployeeInfoForm';
import PasswordCreationForm from '../components/signup/PasswordCreationForm';
import OTPVerificationForm from '../components/signup/OTPVerificationForm';
import ProfileSetupForm from '../components/signup/ProfileSetupForm';
import RegistrationSuccess from '../components/signup/RegistrationSuccess';
import { avatarOptions } from '../data/mockData';
import '../styles/signup.css';

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  // Unified persistent form state across all registration steps
  const [formData, setFormData] = useState({
    firstName: 'Tariqul',
    lastName: 'Islam',
    email: 'tariqul.islam@workmate.io',
    countryCode: '+1',
    phone: '5553829912',
    employeeId: 'EMP-2024-089',
    department: 'Product Design & UX',
    role: 'Senior UI/UX Designer',
    company: 'Workmate Technologies Ltd.',
    password: '',
    confirmPassword: '',
    avatar: avatarOptions[0].url,
    location: 'San Francisco HQ'
  });

  const updateFormData = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleBack = () => {
    if (currentStep > 1 && currentStep < 6) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate('/signin');
    }
  };

  const getStepInfo = () => {
    switch (currentStep) {
      case 1:
        return {
          title: 'Personal Information',
          subtitle: 'Step 1 of 5: Let’s start with your legal name and contact details.'
        };
      case 2:
        return {
          title: 'Employee Credentials',
          subtitle: 'Step 2 of 5: Enter your company work code and assigned role.'
        };
      case 3:
        return {
          title: 'Secure Password',
          subtitle: 'Step 3 of 5: Create a strong password to protect your HR account.'
        };
      case 4:
        return {
          title: 'Verification Code',
          subtitle: 'Step 4 of 5: Confirm your phone number and email address.'
        };
      case 5:
        return {
          title: 'Profile & Agreements',
          subtitle: 'Step 5 of 5: Pick your workspace avatar and accept employee terms.'
        };
      case 6:
      default:
        return {
          title: 'Welcome to Workmate!',
          subtitle: 'Your profile has been created successfully.'
        };
    }
  };

  const { title, subtitle } = getStepInfo();
  const progressPercent = Math.min(((currentStep - 1) / 4) * 100, 100);

  return (
    <div className="signup-container">
      {/* Header with back navigation and progress */}
      {currentStep < 6 && (
        <>
          <div className="signup-header-row">
            <BackButton onClick={handleBack} />
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--primary-purple)' }}>
              Step {currentStep} of 5
            </div>
            <div style={{ width: '42px' }} />
          </div>

          <div className="signup-progress-bar-container">
            <div className="signup-progress-track">
              <div
                className="signup-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="signup-step-labels">
              <span className={currentStep >= 1 ? 'active' : ''}>Personal</span>
              <span className={currentStep >= 2 ? 'active' : ''}>Work</span>
              <span className={currentStep >= 3 ? 'active' : ''}>Security</span>
              <span className={currentStep >= 4 ? 'active' : ''}>OTP</span>
              <span className={currentStep >= 5 ? 'active' : ''}>Profile</span>
            </div>
          </div>

          <h1 className="signup-step-title">{title}</h1>
          <p className="signup-step-subtitle">{subtitle}</p>
        </>
      )}

      {/* Dynamic Step Forms */}
      <div style={{ flex: 1 }}>
        {currentStep === 1 && (
          <PersonalInformationForm
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <EmployeeInfoForm
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <PasswordCreationForm
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => setCurrentStep(4)}
          />
        )}

        {currentStep === 4 && (
          <OTPVerificationForm
            formData={formData}
            onNext={() => setCurrentStep(5)}
          />
        )}

        {currentStep === 5 && (
          <ProfileSetupForm
            formData={formData}
            updateFormData={updateFormData}
            onSubmit={() => setCurrentStep(6)}
          />
        )}

        {currentStep === 6 && (
          <RegistrationSuccess formData={formData} />
        )}
      </div>

      {/* Footer Link */}
      {currentStep < 6 && (
        <div style={{ textAlign: 'center', marginTop: 'auto', paddingTop: '20px', fontSize: '13px', color: 'var(--text-body)' }}>
          Already have an account?{' '}
          <Link to="/signin" style={{ color: 'var(--primary-purple)', fontWeight: '700' }}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
