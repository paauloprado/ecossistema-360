import React from "react";

type SectionItemGroupProps = {
  title: string;
  items: string[];
};

const SectionItemGroup: React.FC<SectionItemGroupProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="ml-4">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionItemGroup;
