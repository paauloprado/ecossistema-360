import React from 'react';
import { useTranslation } from 'react-i18next';

interface State {
  name: string;
  id: string;
  color: string;
}

interface BrazilMapProps {
  selectedStates: State[];
  totalUnits: number;
}

const BrazilMap: React.FC<BrazilMapProps> = ({ selectedStates, totalUnits }) => {
  // In a real implementation, we would use react-simple-maps
  // For this mockup, we'll use an image placeholder
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 relative">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-medium text-gray-700">Estados Selecionados</h3>
          <p className="text-sm text-gray-500">
            {selectedStates.map(state => state.name).join(', ')}
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-700">Quantidade de Unidades</h3>
          <p className="text-sm text-gray-500">112 unidades</p>
        </div>
      </div>

      <div className="h-[300px] bg-gray-100 rounded flex items-center justify-center relative">
        {/* Map placeholder - in real implementation would use react-simple-maps */}
        <div className="text-center text-gray-400">
          <p>Mapa do Brasil com estados destacados:</p>
          <p className="font-medium">{selectedStates.map(state => state.name).join(', ')}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          {/* A HigIA está presente em 112 unidades, recebendo diariamente uma média de XXX exames, atendendo clínicas, centros de imagem e hospitais, do setor público e privado. */}
          {t('subpages.higiaDashboard.intro')}
        </p>
      </div>
    </div>
  );
};

export default BrazilMap;


