import React from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../common/SuccessMessage';
import SecondaryButton from '../common/SecondaryButton';

export default function RegistrationSuccess({ formData }) {
  const navigate = useNavigate();

  return (
    <div className="animate-slide-up" style={{ width: '100%' }}>
      <SuccessMessage
        badge="Registration Complete"
        title="Account Created Successfully!"
        description={`Welcome aboard, ${formData.firstName || 'Tariqul'}! Your Workmate employee profile has been linked to ${formData.company || 'Workmate Technologies'}.`}
        buttonText="Explore Workmate Home"
        onButtonClick={() => navigate('/home')}
      />

      <div style={{ marginTop: '12px' }}>
        <SecondaryButton onClick={() => navigate('/signin')} size="lg">
          Return to Sign In
        </SecondaryButton>
      </div>
    </div>
  );
}
