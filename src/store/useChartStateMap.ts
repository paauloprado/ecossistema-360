import { create } from "zustand";

interface ChartStateMapState {
  stateSelected: string[];
  setStateSelected: (stateSelected: string[]) => void;
  stateSelectedTelerad: string[];
  setStateSelectedTelerad: (stateSelectedTelerad: string[]) => void;
}

// Tipado para TypeScript; para JS só omitir tipos
export const useChartStateMap = create<ChartStateMapState>((set) => ({
  stateSelected: [],
  setStateSelected: (stateSelected: string[]) => set({ stateSelected }),
  setStateSelectedTelerad: (stateSelectedTelerad: string[]) => set({ stateSelectedTelerad}),
  stateSelectedTelerad: [],
}));