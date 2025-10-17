
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = 'px-6 py-2.5 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg';

  const variants = {
    primary: 'bg-primary-red text-accent-cream hover:bg-red-900 focus:ring-primary-red',
    secondary: 'bg-transparent border border-accent-cream/50 text-accent-cream hover:bg-accent-cream hover:text-dark-bg focus:ring-accent-cream',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
