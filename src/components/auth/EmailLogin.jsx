import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import AuthInput from '../common/AuthInput';
import PasswordInput from '../common/PasswordInput';
import PrimaryButton from '../common/PrimaryButton';

export default function EmailLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('tariqul.islam@workmate.io');
  const [password, setPassword] = useState('Workmate@2024');
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        navigate('/home');
      }
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <AuthInput
        label="Work Email"
        type="email"
        placeholder="name@company.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) setErrors({ ...errors, email: '' });
        }}
        icon={<Mail size={18} />}
        error={errors.email}
        required
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (errors.password) setErrors({ ...errors, password: '' });
        }}
        error={errors.password}
        required
      />

      <div className="auth-options-row">
        <label className="auth-remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span>Remember me</span>
        </label>

        <Link to="/forgot-password" className="auth-forgot-link">
          Forgot Password?
        </Link>
      </div>

      <PrimaryButton
        type="submit"
        size="lg"
        disabled={isLoading}
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        {isLoading ? 'Signing In...' : 'Sign In with Email'}
      </PrimaryButton>
    </form>
  );
}
