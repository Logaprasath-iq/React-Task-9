import React from 'react';
import OnboardingIllustration from './OnboardingIllustration';
import PageIndicator from '../common/PageIndicator';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { onboardingSlides } from '../../data/mockData';
import { Sparkles } from 'lucide-react';
import '../../styles/onboarding.css';

export default function OnboardingScreen({
  currentStep,
  onNext,
  onSkip,
  onSignIn,
  onSignUp,
  onStepSelect
}) {
  const slide = onboardingSlides[currentStep - 1] || onboardingSlides[0];
  const isLastStep = currentStep === 4;

  return (
    <div className="onboarding-container">
      {/* Upper Purple Section */}
      <div className="onboarding-upper">
        <div className="onboarding-brand-pill">
          <Sparkles size={14} />
          <span>WORKMATE</span>
        </div>

        <div className="onboarding-illustration-box">
          <OnboardingIllustration step={currentStep} />
        </div>
      </div>

      {/* Lower White Card Section */}
      <div className="onboarding-lower">
        <div className="onboarding-text-content">
          <PageIndicator
            total={4}
            activeIndex={currentStep - 1}
            onSelect={onStepSelect}
          />

          <h1 className="onboarding-title">{slide.title}</h1>
          <p className="onboarding-description">{slide.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="onboarding-actions">
          {!isLastStep ? (
            <div className="onboarding-split-actions">
              <SecondaryButton
                onClick={onSkip}
                style={{ flex: 1 }}
              >
                Skip
              </SecondaryButton>
              <PrimaryButton
                onClick={onNext}
                style={{ flex: 1.4 }}
              >
                Next
              </PrimaryButton>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              <PrimaryButton onClick={onSignIn} size="lg">
                Sign In
              </PrimaryButton>
              <SecondaryButton onClick={onSignUp} size="lg">
                Sign Up
              </SecondaryButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
