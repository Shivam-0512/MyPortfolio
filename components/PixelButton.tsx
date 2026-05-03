import React from 'react';
import { playBeep } from '../utils/audio';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  variant = 'outline',
  as = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const classes = `pixel-btn ${variant === 'primary' ? 'pixel-btn-primary' : ''} ${className}`;

  const handleClick = (e: React.MouseEvent<any>) => {
    playBeep();
    if (props.onClick) props.onClick(e);
  };

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props} onClick={handleClick}>
      {children}
    </button>
  );
};
