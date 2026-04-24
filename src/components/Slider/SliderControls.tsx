import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SliderControlsProps } from './types';

export const SliderControls: React.FC<SliderControlsProps> = ({
  onPrev,
  onNext,
  className = '',
}) => {
  return (
    <div className={`absolute top-1/2 left-0 right-0 -mt-6 flex justify-between pointer-events-none px-4 z-10 ${className}`}>
      <button
        onClick={onPrev}
        className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white/90 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 pointer-events-auto shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm text-gray-800 hover:bg-white/90 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 pointer-events-auto shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};