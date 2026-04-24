import crossfilter from 'crossfilter2';
import { ExamData, ReportData, DataPoint } from '../types';
import {LocationUnitCentralState} from "../types";

export interface DataCrossfilter {
  cf: crossfilter.Crossfilter<DataPoint>;
  dimensions: {
    date: crossfilter.Dimension<DataPoint, Date>;
    modality: crossfilter.Dimension<DataPoint, string>;
    modalityReport: crossfilter.Dimension<DataPoint, string>;
    type: crossfilter.Dimension<DataPoint, string>;
    dateMonth: crossfilter.Dimension<DataPoint, string>;
    state: crossfilter.Dimension<DataPoint, string>;
    unit: crossfilter.Dimension<DataPoint, string>;
    central: crossfilter.Dimension<DataPoint, number>;
    priority: crossfilter.Dimension<DataPoint, string>;
  };
  groups: {
    byDate: crossfilter.Group<DataPoint, Date, number>;
    byModality: crossfilter.Group<DataPoint, string, number>;
    byUnit: crossfilter.Group<DataPoint, string, number>;
    byType: crossfilter.Group<DataPoint, string, number>;
    examsOverTime: crossfilter.Group<DataPoint, Date, number>;
    reportsOverTime: crossfilter.Group<DataPoint, Date, number>;
    byDateMonth: crossfilter.Group<DataPoint, string, number>;
    byState: crossfilter.Group<DataPoint, string, number>;
    byCentral: crossfilter.Group<DataPoint, string, number>;
    byModalityReport: crossfilter.Group<DataPoint, string, number>;
    byDateMonthReport: crossfilter.Group<DataPoint, string, number>;
    byPriority: crossfilter.Group<DataPoint, string, number>;
    priorityGroupByModality: crossfilter.Group<DataPoint, string, { high: number; middle: number; normal: number }>;
  };
  dataOther:{
    mesesTodos: string[];
    totalGroupExam: crossfilter.Group<DataPoint, string, number>;
    totalGroupReport: crossfilter.Group<DataPoint, string, number>;
    totalGroupReportSLA: crossfilter.Group<DataPoint, string, number>;
  }
  resetAll: () => void;
}

export const createDataPoints = (exams: ExamData[], reports: ReportData[]): DataPoint[] => {
  const dataPoints: DataPoint[] = [];
  // console.log('dataUnitLoc', dataUnitLoc);
  // if(dataUnitLoc.length === 0) return dataPoints;
  exams.forEach(exam => {
    dataPoints.push({
      date: new Date(exam.date),
      count: exam.quantity,
      modality: exam.modality,
      unit: exam.unit,
      countReport: 0,
      central: exam.central,
      state: exam.state,
      type: 'exam',
      high_priority_reports: 0,
      middle_priority_reports: 0,
      normal_priority_reports: 0,
      on_sla: 0
    });
    if (new Date(exam.date)>=new Date("2025-05-01")){
      console.log("Exame encontrado")
    }
  
  });

  // Convert reports to data points
  reports.forEach(report => {
    dataPoints.push({
      date: new Date(report.date),
      count: 0,
      countReport: report.total_reports,
      modality: report.modality,
      unit: report.unit,
      central: report.central,
      state: report.state,
      type: 'report',
      high_priority_reports: report.high_priority_reports,
      middle_priority_reports: report.middle_priority_reports,
      normal_priority_reports: report.normal_priority_reports,
      on_sla: report.on_sla_reports
    });
  });
  
  // console.log('dataPoints', dataPoints);

  return dataPoints;
};

export const createCrossfilter = (dataPoints: DataPoint[]): DataCrossfilter => {
  
  function parseMesAno(str: string) {
    const d = new Date(str)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; // ex: "2024-03"
  }

  function parseMesAnoFormatado(dataStr) {
    const meses = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    const d = new Date(dataStr);
    const mes = meses[d.getMonth()];
    const ano = String(d.getFullYear()).slice(-2);
    return `${mes}/${ano}`;
  }

  function getMesesEntreFormatados(start, end) {
    const meses = [];
    let curr = new Date(start.getFullYear(), start.getMonth(), 1);
    end = new Date(end.getFullYear(), end.getMonth(), 1);
  
    

    const nomes = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
  
    while (curr <= end) {
      const mes = nomes[curr.getMonth()];
      const ano = String(curr.getFullYear()).slice(-2);
      meses.push(`${mes}/${ano}`);
      curr.setMonth(curr.getMonth() + 1);
    }
    return meses;
  }
  const datas = dataPoints.map(d => new Date(d.date));
  const mesesTodos = getMesesEntreFormatados(
    new Date(Math.min(...datas.map(d => d.getTime()))),
    new Date(Math.max(...datas.map(d => d.getTime())))
  );
  // Create crossfilter instance
  const cf = crossfilter(dataPoints);
  

  const priorityDim = cf.dimension(d => {
    if (d.high_priority_reports > 0) return 'Alta';
    if (d.middle_priority_reports > 0) return 'Média';
    if (d.normal_priority_reports > 0) return 'Baixa';
    return null;
  });

  const byPriority = priorityDim.group().reduceSum(d => {
    if (d.high_priority_reports > 0) return d.high_priority_reports;
    if (d.middle_priority_reports > 0) return d.middle_priority_reports;
    if (d.normal_priority_reports > 0) return d.normal_priority_reports;
    return 0;
  });

  // Create dimensions
  const dateDim = cf.dimension(d => d.date);
  const modalityDim = cf.dimension(d => d.modality);
  const modalityDimReport = cf.dimension(d => d.modality);
  const unitDim = cf.dimension(d => d.unit); 
  const typeDim = cf.dimension(d => d.type);
  const dateMonthDim = cf.dimension(d => parseMesAnoFormatado(d.date)); // YYYY-MM format
  const stateDim = cf.dimension(d => d.state);
  const centralDim = cf.dimension(d => d.central);

  // Create groups
  const byDate = dateDim.group().reduceSum(d => d.count);
  const byModality = modalityDim.group().reduceSum(d => d.type === 'exam' ? d.count : 0);
  const byModalityReport = modalityDimReport.group().reduceSum(d => d.type === 'report' ? d.countReport : 0);
  const byUnit = unitDim.group().reduceSum(d => d.count);
  const byType = typeDim.group().reduceSum(d => d.count);
  const byDateMonth = dateMonthDim.group().reduceSum(d => d.type === 'exam' ? d.count : 0);
  const byDateMonthReport = dateMonthDim.group().reduceSum(d => d.type === 'report' ? d.countReport : 0);
  const totalGroupExam = cf.groupAll().reduceSum(d => d.type === 'exam' ? d.count : 0);
  const totalGroupReport = cf.groupAll().reduceSum(d => d.countReport);
  const priorityGroupByModality = modalityDim.group().reduce(
    // add
    (p, v) => {
      if (v.type === 'report') {
        p.high += v.high_priority_reports || 0;
        p.medium += v.middle_priority_reports || 0;
        p.normal += v.normal_priority_reports || 0;
      }
      return p;
    },
    // remove
    (p, v) => {
      if (v.type === 'report') {
        p.high -= v.high_priority_reports || 0;
        p.medium -= v.middle_priority_reports || 0;
        p.normal -= v.normal_priority_reports || 0;
      }
      return p;
    },
    // init
    () => ({ high: 0, medium: 0, normal: 0 })
  );
  // priorityGroupByModality.all().forEach(group => {
  //   console.log('Modalidade:', group.key);
  //   console.log('Alta prioridade:', group.value.high);
  //   console.log('Média prioridade:', group.value.middle);
  //   console.log('Normal:', group.value.normal);
  // });
  const totalGroupReportSLA = cf.groupAll().reduceSum(d =>  d.on_sla);
  const byState = stateDim.group().reduceSum(d => d.count);
  const byCentral = centralDim.group().reduceSum(d => d.count);
  // console.log('totalExams', totalExams);

  // Create specialized groups for time series
  const examsOverTime = dateDim.group().reduceSum(d => d.type === 'exam' ? d.count : 0);
  const reportsOverTime = dateDim.group().reduceSum(d => d.type === 'report' ? d.count : 0);

  // Reset all filters
  const resetAll = () => {
    dateDim.filterAll();
    modalityDim.filterAll();
    unitDim.filterAll();
    typeDim.filterAll();
    dateMonthDim.filterAll();
    stateDim.filterAll();
    centralDim.filterAll();
  };

  return {
    cf,
    dimensions: {
      date: dateDim,
      modality: modalityDim,
      modalityReport: modalityDimReport,
      unit: unitDim,
      type: typeDim,
      dateMonth: dateMonthDim,
      state: stateDim,
      central: centralDim,
      priority: priorityDim
    },
    groups: {
      byDate,
      byModality,
      byUnit,
      byType,
      examsOverTime,
      reportsOverTime,
      byDateMonth,
      byState,
      byCentral,
      byModalityReport,
      byDateMonthReport,
      byPriority,
      priorityGroupByModality
    },
    dataOther:{
      mesesTodos,
      totalGroupExam,
      totalGroupReport,
      totalGroupReportSLA,
      
    },
    resetAll
  };
};