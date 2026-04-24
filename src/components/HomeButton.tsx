import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

type HomeButtonProps = {
  label: string;
  ringColor?: string;
};

const HomeButton: React.FC<HomeButtonProps> = ({ label, ringColor }) => {
  const ring1Style = ringColor
    ? { background: `${ringColor}33` }
    : undefined;
  const ring2Style = ringColor
    ? { background: `${ringColor}4D` }
    : undefined;

  return (
    <Link
      to="/"
      className="fixed bottom-4 left-10 transform -translate-x-1/2 flex items-center justify-center text-white z-[11000] pointer-events-auto"
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
          className="relative flex items-center justify-center rounded-full p-3 bg-black text-white shadow-lg cursor-pointer transition-transform hover:scale-110"
        >
          <Home />
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

export default HomeButton;
