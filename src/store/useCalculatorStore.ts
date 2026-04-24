import { create } from 'zustand';

interface CalculatorState {
    currency: string;
    defaultPrice: number;
    reportPrices: Record<string, { high: number; medium: number; normal: number }>;
    examPrices: Record<string, number>;             
    setCurrency: (currency: string) => void;
    setReportPrices: (prices: Record<string, { high: number; medium: number; normal: number }>) => void;
    setExamPrices: (prices: Record<number, number>) => void;
  }
  
  export const useCalculatorStore = create<CalculatorState>((set) => ({
    currency: 'BRL',
    defaultPrice: 2.5,
    reportPrices: {
      DX: { high: 2.5, medium: 2.5, normal: 2.5 },
      CR: { high: 2.5, medium: 2.5, normal: 2.5 },
      MG: { high: 2.5, medium: 2.5, normal: 2.5 },
      CT: { high: 2.5, medium: 2.5, normal: 2.5 },
      MR: { high: 2.5, medium: 2.5, normal: 2.5 },
      US: { high: 2.5, medium: 2.5, normal: 2.5 },
      NM: { high: 2.5, medium: 2.5, normal: 2.5 },
      XA: { high: 2.5, medium: 2.5, normal: 2.5 },
    },
    examPrices: {
      DX: 2.5,
      CR: 2.5,
      MG: 2.5,
      CT: 2.5,
      MR: 2.5,
      US: 2.5,
      NM: 2.5,
      XA: 2.5
    },
    setCurrency: (currency) => set({ currency }),
    setReportPrices: (prices) => set({ reportPrices: prices }),
    setExamPrices: (prices) => set({ examPrices: prices }),
  }));
