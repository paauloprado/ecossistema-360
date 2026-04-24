import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type ArrowButtonProps = {
  to: string | null;
  direction: 'left' | 'right';
  label: string;
  ringColor?: string;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ to, direction, label, ringColor }) => {
  const Icon = direction === 'left' ? ArrowLeft : ArrowRight;

  const ring1Style = ringColor
    ? { background: `${ringColor}33` }
    : undefined;
  const ring2Style = ringColor
    ? { background: `${ringColor}4D` }
    : undefined;

  return (
    <Link
      to={to}
      className={`fixed bottom-4 ${direction === 'left' ? 'right-20' : 'right-1'} transform -translate-x-1/2 flex items-center justify-center text-white z-[11000] pointer-events-auto`}
    >
      <div className="relative">
        <div
          className={`absolute inset-[-8px] rounded-full animate-pulse-slow ${!ringColor ? 'bg-lemon/20' : ''}`}
          style={ring1Style}
        />
        <div
          className={`absolute inset-[-4px] rounded-full animate-pulse ${!ringColor ? 'bg-lemon/30' : ''}`}
          style={ring2Style}
        />
        <div
          className="relative flex items-center justify-center rounded-full p-3 bg-black text-white shadow-lg cursor-pointer transition-transform hover:scale-110 z-10"
        >
          <Icon />
        </div>
        <span
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
                    whitespace-nowrap text-primary text-sm opacity-0 group-hover:opacity-100
                    transition-opacity"
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

export default ArrowButton;
