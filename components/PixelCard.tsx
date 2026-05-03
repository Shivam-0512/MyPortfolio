import React from 'react';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <div className={`pixel-card ${hover ? '' : 'hover:transform-none hover:shadow-none'} ${className}`}>
      {children}
    </div>
  );
};
