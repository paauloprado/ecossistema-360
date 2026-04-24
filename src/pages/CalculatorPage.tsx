import { Dialog } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCalculatorStore } from '../store/useCalculatorStore';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculatorModal = ({ isOpen, onClose }: CalculatorModalProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'exame' | 'laudo'>('laudo');

  const imageTypes = ["DX", "CR", "MG", "CT", "MR", "US", "NM", "XA"];

  const { 
    setExamPrices, 
    setReportPrices, 
    setCurrency, 
    examPrices, 
    reportPrices, 
    currency, 
    defaultPrice 
  } = useCalculatorStore();

  const [localCurrency, setLocalCurrency] = useState(currency);
  const [exameValues, setExameValues] = useState<number[]>(
    imageTypes.map((type) => examPrices[type] || defaultPrice)
  );

  const [laudoValues, setLaudoValues] = useState<{ high: number; medium: number; normal: number }[]>(
    imageTypes.map((type) => reportPrices[type] || { high: defaultPrice, medium: defaultPrice, normal: defaultPrice })
  );

  const handleClear = () => {
    setExameValues(Array(imageTypes.length).fill(0));
    setLaudoValues(Array.from({ length: imageTypes.length }, () => ({ high: 0, medium: 0, normal: 0 })));
  };

  const handleReset = () => {
    setExameValues(Array(imageTypes.length).fill(defaultPrice));
    setLaudoValues(Array.from({ length: imageTypes.length }, () => ({ high: defaultPrice, medium: defaultPrice, normal: defaultPrice })));
  };

  const handleSave = () => {

    const hasEmptyExam = exameValues.some((value) => value === 0);
    const hasEmptyLaudo = laudoValues.some((value) =>
      value.high === 0 || value.medium === 0 || value.normal === 0
    );
  
    if (hasEmptyExam || hasEmptyLaudo) {
      alert(t('calculator.emptyError'));
      return;
    }
  
    const newExamPrices: Record<number, number> = {};
    const newReportPrices: Record<string, { high: number; medium: number; normal: number }> = {};
  
    imageTypes.forEach((type, index) => {
      newExamPrices[type] = exameValues[index];
      newReportPrices[type] = laudoValues[index];
    });
  
    setExamPrices(newExamPrices);
    setReportPrices(newReportPrices);
    setCurrency(localCurrency);
  
    onClose();
  };

  return (
    <Dialog as={Fragment} open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="rounded-2xl p-6 w-[450px] bg-white shadow-xl" style={{ backgroundColor: '#F4F4F5' }}>
          
      
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{t('calculator.title')}</h2>
            <button className="text-black text-xl border-2 border-black w-8 h-8 rounded-full" onClick={onClose}>x</button>
          </div>

        
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button
                className={`font-semibold rounded-full transition-all duration-200 
                ${activeTab === 'laudo' ? 'bg-blue-900 text-white px-4 py-2 text-base' : 'bg-gray-300 text-gray-500 px-2 py-1 text-sm'}`}
                onClick={() => setActiveTab('laudo')}
              >
                {t('calculator.report')}
              </button>
              <button
                className={`font-semibold rounded-full transition-all duration-200 
                ${activeTab === 'exame' ? 'bg-blue-500 text-white px-4 py-2 text-base' : 'bg-gray-300 text-gray-500 px-2 py-1 text-sm'}`}
                onClick={() => setActiveTab('exame')}
              >
                {t('calculator.exam')}
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-medium">{t('calculator.coin')}</span>
              <select
                className="border rounded-xl px-4 py-1"
                value={localCurrency}
                onChange={(e) => setLocalCurrency(e.target.value)}
              >
                <option value="BRL">Real</option>
                <option value="USD">Dolar</option>
                <option value="EUR">Euro</option>
              </select>
            </div>
          </div>

          {activeTab === 'exame' ? (
            <div className="space-y-3 mb-6 mt-7">
              {imageTypes.map((type, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-10 font-semibold">{type}</span>
                  <input
                    type="number"
                    value={exameValues[i] > 0 ? exameValues[i] : ''}
                    onChange={(e) => {
                      const updated = [...exameValues];
                      updated[i] = Number(e.target.value);
                      setExameValues(updated);
                    }}
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-xl border px-4 py-2 w-20"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-x-4 mb-2">
                <div />
                <span className="text-sm font-bold text-center">{t('calculator.high')}</span>
                <span className="text-sm font-bold text-center">{t('calculator.medium')}</span>
                <span className="text-sm font-bold text-center">{t('calculator.normal')}</span>
              </div>
              {imageTypes.map((type, i) => (
                <div key={i} className="grid grid-cols-4 gap-4 mb-2 items-center">
                  <span className="font-semibold">{type}</span>
                  {['high', 'medium', 'normal'].map((level, j) => (
                    <input
                      key={j}
                      type="number"
                      value={laudoValues[i][level as 'high' | 'medium' | 'normal'] >  0 ? laudoValues[i][level as 'high' | 'medium' | 'normal'] : ''}
                      onChange={(e) => {
                        const updated = [...laudoValues];
                        updated[i] = { ...updated[i], [level]: e.target.value };
                        setLaudoValues(updated);
                      }}
                      className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-xl border px-3 py-2"
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between">
            <div>
              <button
                onClick={handleClear}
                style={{ backgroundColor: "#ACD35D" }}
                className="hover:bg-lemon text-white px-6 py-2 rounded-full font-semibold mr-4"
              >
                {t('calculator.clear')}
              </button>
              <button
                onClick={handleReset}
                style={{ backgroundColor: "#ACD35D" }}
                className="hover:bg-lemon text-white px-6 py-2 rounded-full font-semibold"
              >
                {t('calculator.reset')}
              </button>
            </div>
            <button
              onClick={handleSave}
              style={{ backgroundColor: "#67B027" }}
              className="hover:bg-lemon text-white px-6 py-2 rounded-full font-semibold"
            >
              {t('calculator.save')}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CalculatorModal;
