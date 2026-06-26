import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 disabled:bg-gray-400',
    secondary: 'bg-slate-950 text-white hover:bg-slate-900 disabled:bg-gray-400',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
