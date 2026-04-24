import { create } from "zustand";

interface ChartCountState {
  resetDimension: string;
  setResetDimension: (resetDimension: string) => void;  
}

// Tipado para TypeScript; para JS só omitir tipos
export const useChartResetStore = create<ChartCountState>((set) => ({
  resetDimension: "",
  setResetDimension: (resetDimension) => set({ resetDimension})
}));