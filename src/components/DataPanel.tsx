import React from 'react';
import { SelectedData } from '../types';
import { X } from 'lucide-react';

interface DataPanelProps {
  data: SelectedData;
  onClose: () => void;
}

export const DataPanel: React.FC<DataPanelProps> = ({ data, onClose }) => {
  const renderStateData = () => {
    const { name, data: stateData } = data;
    
    return (
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-green-800">{name}</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-600">Capital:</p>
            <p className="text-md">{stateData.capital}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-600">Abbreviation:</p>
            <p className="text-md">{stateData.abbreviation}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-600">Population:</p>
            <p className="text-md">{stateData.population.toLocaleString()}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-600">Area:</p>
            <p className="text-md">{stateData.area.toLocaleString()} km²</p>
          </div>
        </div>
      </div>
    );
  };

  const renderMarkerData = () => {
    const { name, data: markerData } = data;
    
    return (
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-green-800">{name}</h2>
        <p className="text-md">{markerData.description}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-600">Type:</p>
            <p className="text-md">{markerData.type}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-600">Population:</p>
            <p className="text-md">{markerData.population?.toLocaleString() || 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="data-panel absolute top-4 right-4 p-4 max-w-xs w-full z-10">
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
      >
        <X size={18} className="text-gray-600" />
      </button>
      
      {data.type === 'state' ? renderStateData() : renderMarkerData()}
    </div>
  );
};