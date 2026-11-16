import React, { useState } from 'react';
import { User, Mail, Phone, ArrowRight } from 'lucide-react';
import { countryCodes } from '../../data/mockData';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';

export default function PersonalInformationForm({ formData, updateFormData, onNext }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <div style={{ display: 'flex', gap: '10px' }}>
        <AuthInput
          label="First Name"
          placeholder="e.g. Tariqul"
          value={formData.firstName}
          onChange={(e) => {
            updateFormData({ firstName: e.target.value });
            if (errors.firstName) setErrors({ ...errors, firstName: '' });
          }}
          icon={<User size={18} />}
          error={errors.firstName}
          required
        />
        <AuthInput
          label="Last Name"
          placeholder="e.g. Islam"
          value={formData.lastName}
          onChange={(e) => {
            updateFormData({ lastName: e.target.value });
            if (errors.lastName) setErrors({ ...errors, lastName: '' });
          }}
          icon={<User size={18} />}
          error={errors.lastName}
          required
        />
      </div>

      <AuthInput
        label="Work Email Address"
        type="email"
        placeholder="e.g. tariqul@company.com"
        value={formData.email}
        onChange={(e) => {
          updateFormData({ email: e.target.value });
          if (errors.email) setErrors({ ...errors, email: '' });
        }}
        icon={<Mail size={18} />}
        error={errors.email}
        required
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>
          Mobile Phone Number *
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'var(--bg-input)',
              border: '1.5px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0 10px',
              height: '50px',
              flexShrink: 0
            }}
          >
            <select
              value={formData.countryCode}
              onChange={(e) => updateFormData({ countryCode: e.target.value })}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-dark)',
                cursor: 'pointer'
              }}
            >
              {countryCodes.map((c, i) => (
                <option key={i} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          </div>

          <div style={{ flex: 1 }}>
            <AuthInput
              type="tel"
              placeholder="e.g. 555-0199"
              value={formData.phone}
              onChange={(e) => {
                updateFormData({ phone: e.target.value.replace(/[^0-9]/g, '') });
                if (errors.phone) setErrors({ ...errors, phone: '' });
              }}
              icon={<Phone size={18} />}
              style={{ marginBottom: 0 }}
            />
          </div>
        </div>
        {errors.phone && (
          <span style={{ fontSize: '12px', color: 'var(--status-red)' }}>{errors.phone}</span>
        )}
      </div>

      <PrimaryButton
        type="submit"
        size="lg"
        icon={<ArrowRight size={18} />}
        iconPosition="right"
      >
        Continue to Employee Info
      </PrimaryButton>
    </form>
  );
}
