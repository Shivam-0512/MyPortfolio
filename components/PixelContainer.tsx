import React from 'react';

interface PixelContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const PixelContainer: React.FC<PixelContainerProps> = ({
  children,
  className = '',
  title,
}) => {
  return (
    <div
      className={`relative bg-[#020617] border-2 border-indigo-700 p-1 ${className}`}
      style={{ boxShadow: '6px 6px 0px #312e81' }}
    >
      {/* Inner border */}
      <div className="border border-indigo-900/60 p-5 h-full flex flex-col">
        {title && (
          <div
            className="font-pixel text-[0.5rem] text-pixel-neon mb-4 pb-2 border-b border-indigo-800 tracking-widest"
          >
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
