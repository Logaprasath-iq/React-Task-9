import React, { useRef, useEffect } from 'react';

export default function OTPInput({
  length = 6,
  value = '',
  onChange,
  disabled = false,
  autoFocus = true
}) {
  const inputRefs = useRef([]);

  // Ensure digits array matches length
  const digits = Array.from({ length }).map((_, i) => value[i] || '');

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (e, index) => {
    const rawVal = e.target.value;
    // Extract last entered digit
    const char = rawVal.replace(/\D/g, '').slice(-1);

    const newDigits = [...digits];
    newDigits[index] = char;
    const combined = newDigits.join('');
    onChange(combined);

    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newDigits = [...digits];
        newDigits[index] = '';
        onChange(newDigits.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (pasted) {
      onChange(pasted);
      const targetIndex = Math.min(pasted.length, length - 1);
      inputRefs.current[targetIndex]?.focus();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: length > 4 ? '8px' : '12px',
        width: '100%',
        margin: '18px 0'
      }}
      onPaste={handlePaste}
    >
      {Array.from({ length }).map((_, index) => {
        const isFilled = Boolean(digits[index]);
        return (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digits[index]}
            disabled={disabled}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: length > 4 ? '44px' : '56px',
              height: length > 4 ? '52px' : '60px',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--text-dark)',
              background: isFilled ? 'var(--purple-soft)' : '#FFFFFF',
              border: isFilled
                ? '2px solid var(--primary-purple)'
                : '1.5px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              outline: 'none',
              boxShadow: isFilled ? '0 4px 12px rgba(108, 92, 231, 0.15)' : 'none',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        );
      })}
    </div>
  );
}
