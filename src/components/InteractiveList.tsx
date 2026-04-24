import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

type ListItem = {
  id: number;
  name: string;
};

type InteractiveListProps = {
  items: ListItem[];
};

const InteractiveList: React.FC<InteractiveListProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelectItem = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id); // Toggle selection
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <ul className="space-y-4">
        {items.map((item) => {
          const isSelected = item.id === selectedItem;
          
          // Animação com react-spring
          const springProps = useSpring({
            transform: isSelected ? 'scale(1.05)' : 'scale(1)',
            backgroundColor: isSelected ? '#FFDF6B' : '#FFF',
            boxShadow: isSelected ? '0 4px 15px rgba(0,0,0,0.1)' : 'none',
            config: { tension: 250, friction: 20 },
          });

          return (
            <animated.li
              key={item.id}
              style={springProps}
              className="cursor-pointer p-4 rounded-lg border hover:bg-gray-100 transition"
              onClick={() => handleSelectItem(item.id)}
            >
              {item.name}
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
};

export default InteractiveList;
