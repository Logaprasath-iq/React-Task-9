import React from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from '../common/SuccessMessage';

export default function PasswordResetSuccess() {
  const navigate = useNavigate();

  return (
    <div className="animate-slide-up" style={{ width: '100%' }}>
      <SuccessMessage
        badge="Password Updated"
        title="Password Reset Successfully!"
        description="Your password has been changed securely. You can now use your new password to sign into Workmate."
        buttonText="Back to Sign In"
        onButtonClick={() => navigate('/signin')}
      />
    </div>
  );
}
