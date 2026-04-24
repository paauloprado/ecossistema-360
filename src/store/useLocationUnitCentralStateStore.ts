import { create } from "zustand";
import {LocationUnitCentralState} from "../types";


interface LocationUnitCentralStateStore {
  locationUnitCentralState: LocationUnitCentralState[];
  setLocationUnitCentralState: (locationUnitCentralState: LocationUnitCentralState[]) => void;
  centralStateSelected: number[];
  setCentralStateSelected: (centralStateSelected: number[]) => void;
  unitStateSelected: string[];
  setUnitStateSelected: (unitStateSelected: string[]) => void;
  intervalSelectedDateInitial: string;
  setIntervalSelectedDateInitial: (intervalSelectedDateInitial: string) => void;
  intervalSelectedDateFinal: string;
  setIntervalSelectedDateFinal: (intervalSelectedDateFinal: string) => void;
}

// Tipado para TypeScript; para JS só omitir tipos
export const useLocationUnitCentralStateStore = create<LocationUnitCentralStateStore>((set) => ({
  locationUnitCentralState: [],
  setLocationUnitCentralState: (locationUnitCentralState) => set({ locationUnitCentralState }),
  centralStateSelected: [],
  setCentralStateSelected: (centralStateSelected: number[]) => set({ centralStateSelected }),
  unitStateSelected: [],
  setUnitStateSelected: (unitStateSelected: string[]) => set({ unitStateSelected }),
  intervalSelectedDateInitial: '',
  setIntervalSelectedDateInitial: (intervalSelectedDateInitial: string) => set({ intervalSelectedDateInitial }),
  intervalSelectedDateFinal: '',
  setIntervalSelectedDateFinal: (intervalSelectedDateFinal: string) => set({ intervalSelectedDateFinal }),
}));