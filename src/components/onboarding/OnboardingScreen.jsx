import React from 'react';
import OnboardingIllustration from './OnboardingIllustration';
import { onboardingSlides } from '../../data/mockData';
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
      {/* Upper Purple Gradient Section with 3D Floating Cards */}
      <div className="onboarding-upper">
        <OnboardingIllustration step={currentStep} />
      </div>

      {/* Lower White Section */}
      <div className="onboarding-lower">
        <div className="onboarding-text-content">
          <h1 className="onboarding-title">{slide.title}</h1>
          <p className="onboarding-description">{slide.description}</p>

          {/* Indicator row: 3 bars on steps 1, 2, 3 matching Figma exactly; omitted on step 4 */}
          {!isLastStep && (
            <div className="page-indicator-row">
              {[1, 2, 3].map((stepNum, idx) => {
                const isActive = stepNum === currentStep;
                return (
                  <button
                    key={stepNum}
                    type="button"
                    className={`indicator-bar ${isActive ? 'active' : 'inactive'}`}
                    onClick={() => onStepSelect && onStepSelect(idx)}
                    aria-label={`Go to slide ${stepNum}`}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="onboarding-actions">
          {!isLastStep ? (
            <>
              <button
                type="button"
                className="btn-pill-primary"
                onClick={onNext}
              >
                Next
              </button>
              <button
                type="button"
                className="btn-pill-skip"
                onClick={onSkip}
              >
                Skip
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn-pill-primary"
                onClick={onSignIn}
              >
                Sign In
              </button>
              <button
                type="button"
                className="btn-pill-skip"
                onClick={onSignUp}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
