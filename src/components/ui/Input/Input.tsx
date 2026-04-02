import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className, id, ...rest }) => {
  const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s/g, '-')}` : undefined);

  return (
    <div className={[styles.container, className].join(' ')}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input 
        id={inputId}
        className={[styles.input, rest.disabled && styles.disabled].join(' ')} 
        {...rest} 
      />
    </div>
  );
};

export default Input;
