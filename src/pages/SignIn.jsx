import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import EmailLogin from '../components/auth/EmailLogin';
import PhoneLogin from '../components/auth/PhoneLogin';
import EmployeeLogin from '../components/auth/EmployeeLogin';

export default function SignIn() {
  const [activeMethod, setActiveMethod] = useState('email');
  const navigate = useNavigate();

  const getTitles = () => {
    switch (activeMethod) {
      case 'phone':
        return {
          title: 'Sign In with Phone',
          subtitle: 'Enter your phone number to receive a secure login OTP.'
        };
      case 'employee':
        return {
          title: 'Employee ID Sign In',
          subtitle: 'Enter your designated company credentials to access your workspace.'
        };
      case 'email':
      default:
        return {
          title: 'Welcome Back 👋',
          subtitle: 'Sign in to access your HR tasks, attendance, and benefits.'
        };
    }
  };

  const { title, subtitle } = getTitles();

  return (
    <AuthLayout
      title={title}
      subtitle={subtitle}
      activeMethod={activeMethod}
      onMethodChange={setActiveMethod}
      showMethodTabs={true}
      showSocial={true}
      backTo="/onboarding"
      footerText="Don't have an account?"
      footerLinkText="Sign Up"
      onFooterClick={() => navigate('/signup')}
    >
      {activeMethod === 'email' && (
        <EmailLogin onLoginSuccess={() => navigate('/home')} />
      )}
      {activeMethod === 'phone' && (
        <PhoneLogin onLoginSuccess={() => navigate('/home')} />
      )}
      {activeMethod === 'employee' && (
        <EmployeeLogin onLoginSuccess={() => navigate('/home')} />
      )}
    </AuthLayout>
  );
}
