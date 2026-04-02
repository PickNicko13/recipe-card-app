import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...rest 
}) => {
  return (
    <button 
      className={clsx(styles.button, styles[variant], styles[size], className)} 
      {...rest}
    >
      {children}
    </button>
  );
};

// Simple clsx if not installed
function clsx(...args: any[]) {
  return args.filter(Boolean).join(' ');
}

export default Button;
