export interface ExamData {
  total: number;
  totalBilling: number;
  byDate: Record<string, number>;
}

export interface LaudoData {
  total: number;
  totalBilling: number;
  byDate: Record<string, number>;
}

export interface ModalityData {
  id: string;
  name: string;
  exams: number;
  reports: number;
  percentage: string;
  color: string;
}

export interface ProductivityDoctor {
  id: number;
  name: string;
  position: number;
  avatar: string;
  examsCompleted: number;
  breakdown: {
    dx: number;
    cr: number;
    ct: number;
  };
}

export interface StatisticsData {
  byDate: {
    date: string;
    count: number;
    modalities: Record<string, number>;
  }[];
  urgentLaudo: {
    date: string;
    elapsedTime: string;
  };
  breakdown: {
    high: number;
    medium: number;
    normal: number;
    modality: string;
    percentage: number;
  };
}

export interface UnitStatus {
  id: string;
  name: string;
  storageUsed: string;
  lastUpdate: string;
}

export interface FilterState {
  startDate: string;
  endDate: string;
  unit: string;
  modalities: string[];
}

export interface DashboardData {
  examData: ExamData;
  laudoData: LaudoData;
  modalities: ModalityData[];
  productivityDoctors: ProductivityDoctor[];
  statistics: StatisticsData;
  unitStatuses: UnitStatus[];
  selectedStates: string[];
  totalUnits: number;
}

export interface LocationData {
  state: string;
  state_full: string;
  city: string;
  unit: string;
  central: string;
  lat ?: number;
  lng ?: number;
}