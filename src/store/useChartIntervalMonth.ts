import { create } from "zustand";

interface ChartIntervalState {
  periodIntervalSelected: number;
  setPeriodIntervalSelected: (periodIntervalSelected: number) => void;
  addPeriodoInterval: () => void;
  minusPeriodoInterval: () => void;
  selectedMonth: string[];
  setSelectedMonth: (meses: string[]) => void;
}

// Tipado para TypeScript; para JS só omitir tipos
export const useChartIntervalStore = create<ChartIntervalState>((set) => ({
  selectedMonth: [],
  periodIntervalSelected: 0,
  setPeriodIntervalSelected: (periodIntervalSelected) => set({ periodIntervalSelected }),
  addPeriodoInterval: () => set((state) => ({ periodIntervalSelected: state.periodIntervalSelected + 1 })),
  minusPeriodoInterval: () => set((state) => ({ periodIntervalSelected: Math.max(state.periodIntervalSelected - 1,0)})),
  setSelectedMonth: (meses) => set({ selectedMonth: meses }),
}));