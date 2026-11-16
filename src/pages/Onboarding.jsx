import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingScreen from '../components/onboarding/OnboardingScreen';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/signin');
    }
  };

  const handleSkip = () => {
    // Skip takes user to final onboarding screen (Screen 4)
    setCurrentStep(4);
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <OnboardingScreen
      currentStep={currentStep}
      onNext={handleNext}
      onSkip={handleSkip}
      onSignIn={handleSignIn}
      onSignUp={handleSignUp}
      onStepSelect={(index) => setCurrentStep(index + 1)}
    />
  );
}
