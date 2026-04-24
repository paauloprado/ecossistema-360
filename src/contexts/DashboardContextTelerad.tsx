import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { mockExams, mockReports } from '../data/mockData';
import { createDataPoints, createCrossfilter, DataCrossfilter } from '../utils/datacrossfilter';
import { ExamData, ReportData } from '../types';
import { useDashboardStore } from "../store/useDashboardStore";
import { useLocationUnitCentralStateStore } from '../store/useLocationUnitCentralStateStore';
import {LocationUnitCentralState} from "../types";
import Papa from "papaparse";
import { loadAndProcessAll } from '../services/dataService';

interface DashboardContextProps {
  exams: ExamData[];
  reports: ReportData[];
  units: string[];
  selectedUnits: string[];
  crossfilterData: DataCrossfilter | null;
  loading: boolean;
  setSelectedUnits: (units: string[]) => void;
  selectUnit: (unit: string) => void;
  selectAllUnits: () => void;
  clearAllUnits: () => void;
  refreshData: () => void;
  resetAllFilters: () => void;
}

const DashboardContextTelerad = createContext<DashboardContextProps | undefined>(undefined);
const baseUlr = import.meta.env.VITE_API_BASE_URL
export const DashboardProviderTelerad: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [exams, setExams] = useState<ExamData[]>([]);
  const [reports, setReports] = useState<ReportData[]>([]);
  const [units, setUnits] = useState<string[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [crossfilterData, setCrossfilterData] = useState<DataCrossfilter | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const setMesesTodos = useDashboardStore((state) => state.setMesesTodos);
  const locationUnitCentralState = useLocationUnitCentralStateStore((state) => state.locationUnitCentralState);
  const setLocationUnitCentralState = useLocationUnitCentralStateStore((state) => state.setLocationUnitCentralState);
  const [data, setData] = useState({ exams: [], reports: [] });
  
  useEffect(() => {
    fetch("/assets/locations_new.csv")
          .then(res => res.text())
          .then(text => {
            Papa.parse(text, {
              header: true,
              skipEmptyLines: true,
              dynamicTyping: true,
              complete: (result) => {
                
                let listUnitCentral = []
                result.data.forEach(loc => {
                  listUnitCentral.push({
                    state: loc.state,
                    unit: loc.unit,
                    central: loc.central,
                  });
    
                  
                });
                // setLocationUnitCentralState(listUnitCentral);
              }
            });
          });
          loadAndProcessAll().then(setData);
  }, []);

  // // Initialize data
  // useEffect(() => {
  //   console.log("data", data);
  //   if (data.exams.length === 0) return;
  //   loadData(data.exams, data.reports);
  //   // fetch("/data/jpr_units.json")
  //   //   .then((res) => res.json())
  //   //   .then((data: ExamData[]) =>{ 
  //   //     // console.log("data", data);
  //   //     setExams(data);
  //   //     loadData(data);
  //   //   });
  // }, [data]);

  useEffect(() => {
    const fetchAdditionalData = async () => {
      if (data.exams.length === 0) return;
      console.log("Hello World")
      try {
        // Primeiro: pega os dados locais do JSON (unitsData)
        const unitsData = data.exams;
        const unitReportsData = data.reports;
  
        let additionalData: ExamData[] | null = null;

        let additionalReportData: ReportData[] | null = null;
  
        // Segundo: tenta buscar dados da API
        try {
          const apiResponse = await fetch(
            `${baseUlr}/jpr_get_exams_new_entries/`,
            {
              method:'GET',
              headers:{
                //'Content-Type': 'application/json', // Defina o tipo de conteúdo conforme necessário
                'Authorization': `${import.meta.env.VITE_JPR_ENDPOINTS}`,
              },
            }            
          );  
          if (!apiResponse.ok) {
            console.warn('Erro ao buscar dados adicionais da API');
          } else {
            additionalData = await apiResponse.json();
          }
        } catch (apiError) {
          console.warn('Erro ao acessar a API:', apiError);
        }


        try {
          const apiResponse = await fetch(
            `${baseUlr}/jpr_get_report_new_simple/`,{
              method:'GET',
              headers:{
                //'Content-Type': 'application/json', // Defina o tipo de conteúdo conforme necessário
                'Authorization': `${import.meta.env.VITE_JPR_ENDPOINTS}`,
              },
            }
          );  
          if (!apiResponse.ok) {
            console.warn('Erro ao buscar dados adicionais da API');
          } else {
            additionalReportData = await apiResponse.json();
          }
        } catch (apiError) {
          console.warn('Erro ao acessar a API:', apiError);
        } 
       
        
        var mergedData;
        if (additionalData) {
          const existingKeys = new Set(
            unitsData.map(exam => `${exam.date}_${exam.modality}_${exam.unit}`)
          );
  
          // Filtra exames novos da API que não estão nos dados locais
          const newUniqueExams = additionalData.filter(
            (exam: ExamData) => !existingKeys.has(`${exam.date}_${exam.modality}_${exam.unit}`)
          );
  
          // Junta os dados antigos com os novos únicos
          mergedData = [...unitsData, ...newUniqueExams];

        }else{
          mergedData =unitsData
        }       
       
        var mergedReportData;
        if (additionalReportData) {
          const existingReportKeys = new Set(
            unitReportsData.map(report => `${report.date}_${report.modality}_${report.unit}`)
          );
          const newUniqueReports = additionalReportData.filter(
            (report: ReportData) => !existingReportKeys.has(`${report.date}_${report.modality}_${report.unit}`)
          );
          mergedReportData = [...unitReportsData, ...newUniqueReports];
        } else {
          mergedReportData = unitReportsData;
        }     

        // Chama a função de carregar os dados
        loadData(mergedData, mergedReportData);   
        
      } catch (error) {
        console.error('Erro ao buscar dados adicionais:', error);
      }
    };
  
    // Executa a busca de dados imediatamente ao montar
    fetchAdditionalData();
  
    // Configura a busca periódica a cada 1 minuto
    const interval = setInterval(() => {
      fetchAdditionalData();
    }, 120000); // 2 minutos
  
    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
    
  }, [data]);
  

  const firstLoad = useRef(true);
  
  const loadData = (dataExam: ExamData[], dataReport: ReportData) => {    
    if (firstLoad.current) {
      setLoading(true);         // Só ativa loading na primeira vez
    }
    
    // In a real application, this would fetch from an API
    // For now, we're using the mock data
    setTimeout(() => {
      // setExams(mockExams);
      //setReports(mockReports);
      
      // Extract unique units
      const uniqueUnits = Array.from(
        new Set([
          ...dataExam.map(exam => exam.unit) 
        ])
      );
      
      setUnits(uniqueUnits);
      setSelectedUnits(uniqueUnits); // Select all by default
      
      // Setup crossfilter
      const dataPoints = createDataPoints(dataExam, dataReport );
      const crossfilter = createCrossfilter(dataPoints);
      const uniqueState = Array.from(new Set(locationUnitCentralState.map(d => d.state)));
      console.log("uniqueState", uniqueState);
      setCrossfilterData(crossfilter);
      setMesesTodos(crossfilter.dataOther.mesesTodos);
      
      setLoading(false);
      firstLoad.current = false;
    }, 1000); // Simulate loading
  };

  // Unit selection logic
  const selectUnit = (unit: string) => {
    if (selectedUnits.includes(unit)) {
      setSelectedUnits(selectedUnits.filter(u => u !== unit));
    } else {
      setSelectedUnits([...selectedUnits, unit]);
    }
  };

  const selectAllUnits = () => {
    setSelectedUnits([...units]);
  };

  const clearAllUnits = () => {
    setSelectedUnits([]);
  };

  // Apply unit filter to crossfilter
  useEffect(() => {
    if (!crossfilterData) return;
    
    // If all or none selected, clear filter (show all)
    if (selectedUnits.length === units.length || selectedUnits.length === 0) {
      crossfilterData.dimensions.unit.filterAll();
    } else {
      crossfilterData.dimensions.unit.filter(unit => selectedUnits.includes(unit));
    }
    
    // Trigger dc.js to re-render
    if (typeof window !== 'undefined' && (window as any).dc) {
      (window as any).dc.redrawAll();
    }
  }, [selectedUnits, crossfilterData, units]);

  // Reset all filters
  const resetAllFilters = () => {
    if (crossfilterData) {
      crossfilterData.resetAll();
      if (typeof window !== 'undefined' && (window as any).dc) {
        (window as any).dc.redrawAll();
      }
    }
  };

  // Refresh data
  const refreshData = () => {
    // Reset filters
    if (crossfilterData) {
      crossfilterData.resetAll();
    }
    
    // Reload data
    // fetch("/data/jpr_units.json")
    //   .then((res) => res.json())
    //   .then((data: ExamData[]) =>{ 
    //     // console.log("data", data);
     
    //     loadData(data); 
    //   });
  };

  return (
    <DashboardContextTelerad.Provider
      value={{
        exams,
        reports,
        units,
        selectedUnits,
        crossfilterData,
        loading,
        setSelectedUnits,
        selectUnit,
        selectAllUnits,
        clearAllUnits,
        refreshData,
        resetAllFilters
      }}
    >
      {children}
    </DashboardContextTelerad.Provider>
  );
};

export const useDashboardTelerad = () => {
  const context = useContext(DashboardContextTelerad);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};