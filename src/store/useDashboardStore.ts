import { create } from "zustand";

interface DashboardState {
  mesesTodos: string[];
  submesesTodos: string[];
  setMesesTodos: (meses: string[]) => void;
  setSubmesesTodos: (submeses: string[]) => void;
}

// Tipado para TypeScript; para JS só omitir tipos
export const useDashboardStore = create<DashboardState>((set) => ({
  mesesTodos: [],
  setMesesTodos: (meses) => set({ mesesTodos: meses }),
  submesesTodos: [],
  setSubmesesTodos: (submeses) => set({ submesesTodos: submeses }),
}));