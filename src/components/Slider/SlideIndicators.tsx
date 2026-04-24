import React from 'react';
import { SlideIndicatorsProps } from './types';

export const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  total,
  current,
  onClick,
  className = '',
}) => {
  return (
    <div className={`absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
            ${current === index 
              ? 'bg-white w-6 shadow-md' 
              : 'bg-white/50 hover:bg-white/70'
            }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={current === index ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};