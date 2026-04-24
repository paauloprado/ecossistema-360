import { create } from 'zustand';

interface CalculatorCountState {
    reportPriceCount: Record<string, { high: number; medium: number; normal: number }>;
    examPriceCount: Record<string, number>;             
    setReportPriceCount: (prices: Record<string, { high: number; medium: number; normal: number }>) => void;
    setExamPriceCount: (prices: Record<string, number>) => void;
  }
  
  export const useCalculatorCountStore = create<CalculatorCountState>((set) => ({
    reportPriceCount: {
      DX: { high: 0, medium: 0, normal: 0},
      CR: { high: 0, medium: 0, normal: 0},
      MG: { high: 0, medium: 0, normal: 0},
      CT: { high: 0, medium: 0, normal: 0},
      MR: { high: 0, medium: 0, normal: 0},
      US: { high: 0, medium: 0, normal: 0},
      NM: { high: 0, medium: 0, normal: 0},
      XA: { high: 0, medium: 0, normal: 0},
    },
    examPriceCount: {
      DX: 0,
      CR: 0,
      MG: 0,
      CT: 0,
      MR: 0,
      US: 0,
      NM: 0,
      XA: 0
    },
    setReportPriceCount: (prices) => set({ reportPriceCount: prices }),
    setExamPriceCount: (prices) => set({ examPriceCount: prices }),
  }));
