import React, { useState } from 'react';
import { BadgeCheck, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { departments } from '../../data/mockData';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';

export default function EmployeeInfoForm({ formData, updateFormData, onNext }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.employeeId.trim()) {
      errs.employeeId = 'Employee ID is required (e.g. EMP-2024-089)';
    }
    if (!formData.role.trim()) {
      errs.role = 'Job title / role is required';
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
      <AuthInput
        label="Employee ID / Work Code"
        placeholder="e.g. EMP-2024-089"
        value={formData.employeeId}
        onChange={(e) => {
          updateFormData({ employeeId: e.target.value.toUpperCase() });
          if (errors.employeeId) setErrors({ ...errors, employeeId: '' });
        }}
        icon={<BadgeCheck size={18} />}
        error={errors.employeeId}
        helperText="Assigned by HR or found on your appointment letter"
        required
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
        <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)' }}>
          Department *
        </label>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-input)',
            border: '1.5px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '0 14px',
            height: '50px',
            gap: '10px'
          }}
        >
          <Building2 size={18} color="var(--text-muted)" />
          <select
            value={formData.department}
            onChange={(e) => updateFormData({ department: e.target.value })}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: '14.5px',
              fontWeight: '500',
              color: 'var(--text-dark)',
              cursor: 'pointer'
            }}
          >
            {departments.map((dep, index) => (
              <option key={index} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AuthInput
        label="Position / Job Title"
        placeholder="e.g. Senior UI/UX Designer"
        value={formData.role}
        onChange={(e) => {
          updateFormData({ role: e.target.value });
          if (errors.role) setErrors({ ...errors, role: '' });
        }}
        icon={<Briefcase size={18} />}
        error={errors.role}
        required
      />

      <AuthInput
        label="Company / Workspace Domain"
        placeholder="e.g. Workmate Technologies Ltd."
        value={formData.company}
        onChange={(e) => updateFormData({ company: e.target.value })}
        icon={<Building2 size={18} />}
      />

      <PrimaryButton
        type="submit"
        size="lg"
        icon={<ArrowRight size={18} />}
        iconPosition="right"
        style={{ marginTop: '10px' }}
      >
        Continue to Password
      </PrimaryButton>
    </form>
  );
}
