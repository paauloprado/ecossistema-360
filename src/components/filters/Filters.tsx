import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { FilterState } from '../../types/HigiaData';
import { useTranslation } from 'react-i18next';

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    startDate: '',
    endDate: '',
    unit: '',
    modalities: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleModalityChange = (modality: string) => {
    const newModalities = filters.modalities.includes(modality)
      ? filters.modalities.filter(m => m !== modality)
      : [...filters.modalities, modality];
    
    const newFilters = { ...filters, modalities: newModalities };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center mb-3">
        <Filter className="h-5 w-5 text-green-500 mr-2" />
        <h2 className="text-md font-semibold text-gray-700">Filtros</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
            {/* Data Inicial */}
            {t('subpages.higiaDashboard.startDate')}
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white py-2 px-3 border"
          />
        </div>
        
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
            {/* Data Final */}
            {t('subpages.higiaDashboard.endDate')}
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white py-2 px-3 border"
          />
        </div>
        
        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">
            Unidade
          </label>
          <select
            id="unit"
            name="unit"
            value={filters.unit}
            onChange={handleChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white py-2 px-3 border"
          >
            <option value="">Todas</option>
            <option value="unidadeA">Unidade A</option>
            <option value="unidadeB">Unidade B</option>
            <option value="unidadeC">Unidade C</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Modalidades
          </label>
          <div className="flex flex-wrap gap-2">
            {['DX', 'CR', 'MG', 'CT', 'RM'].map(modality => (
              <button
                key={modality}
                onClick={() => handleModalityChange(modality)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  filters.modalities.includes(modality)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {modality}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;