import React from 'react';
import { SlideProps } from './types';

export const Slide: React.FC<SlideProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`h-full w-full flex-shrink-0 ${className}`}
    >
      {children}
    </div>
  );
};