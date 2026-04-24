import { create } from "zustand";

interface ChartCountState {
  numberExams: number;
  setNumberExams: (numberExams: number) => void;
  numberReports: number;
  setNumberReports: (numberReports: number) => void;
  numberReportSLA: number;
  setNumberReportSLA: (numberReportSLA: number) => void;
}

// Tipado para TypeScript; para JS só omitir tipos
export const useChartCountAllStore = create<ChartCountState>((set) => ({
  numberExams: 0,
  setNumberExams: (numberExams) => set({ numberExams }),
  numberReports: 0,
  setNumberReports: (numberReports) => set({ numberReports }),
  numberReportSLA: 0,
  setNumberReportSLA: (numberReportSLA) => set({ numberReportSLA }),
 
}));