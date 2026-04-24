import React from 'react';
import clsx from 'clsx';

type ToggleButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, active = false, onClick, alias }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-full font-medium transition-colors duration-200',
        active
          ? 'bg-lemon text-white hover:bg-lemon'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      )}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
