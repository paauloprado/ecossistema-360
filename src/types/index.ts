export interface MapState {
  center: [number, number];
  zoom: number;
}

export interface MarkerData {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  type: string;
  population?: number;
}

export interface StateData {
  id: string;
  name: string;
  abbreviation: string;
  capital: string;
  population: number;
  area: number;
}

export interface SelectedData {
  type: 'state' | 'marker';
  name: string;
  data: any;
}

export interface ExamData {
  date: string;
  modality: 'CT' | 'CR' | 'DX' | 'US' | 'RM' | 'MG';
  unit: string;
  central?: number;
  state?: string;
  quantity: number;
  quantitySimple: number;
}

export interface ReportData {
  date: string;
  modality: 'CT' | 'CR' | 'DX' | 'US' | 'RM' | 'MG';
  unit: string;
  central?: number;
  total_reports: number;
  on_sla_reports: number;
  high_priority_reports: number;
  middle_priority_reports: number;
  normal_priority_reports: number;
  state: string;
  
}

export interface DataPoint {
  date: Date;
  count: number;
  modality: string;
  unit: string;
  type: 'exam' | 'report';
  countReport?: number;
  high_priority_reports?: number;
  middle_priority_reports?: number;
  normal_priority_reports?: number;
}

export interface Dashboard {
  exams: ExamData[];
  reports: ReportData[];
  filteredExams: ExamData[];
  filteredReports: ReportData[];
  units: string[];
  selectedUnits: string[];
}

export interface LocationUnitCentralState {
  state: string;
  unit: string;
  central: number;
}

export interface ChartProps {
  id: string;
  title: string;
  dimension?: any;
  group?: any;
  groupOther?: any;
  totalGroupExam?: any;
  totalGroupReport?: any;
  totalGroupReportSLA?: any;
  type?: 'barChart' | 'pieChart' | 'lineChart' | 'rowChart' | 'barChartMonth' | 'numberDisplay' | 'compositeChart';
  xAxis?: string;
  yAxis?: string;
  width?: number;
  height?: number;
  updateStateCount?: any;
}

export interface FilterState {
  startDate: string;
  endDate: string;
  centrals: string[];
  units: string[];
  quickFilter: string;
}

export interface Option {
  id: string;
  name: string;
}