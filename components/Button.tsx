import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-accent hover:bg-amber-400 text-slate-900 border-2 border-transparent",
    secondary: "bg-emerald-healing hover:bg-emerald-500 text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-celestial-blue"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};