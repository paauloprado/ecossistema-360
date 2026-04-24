import { DashboardData } from '../types/HigiaData';

export const mockData: DashboardData = {
  examData: {
    total: 5170,
    totalBilling: 1800067.35,
    byDate: {
      '2023-01-28': 121,
      '2023-02-28': 140,
      '2023-03-28': 119,
      '2023-04-28': 132,
      '2023-05-28': 140,
      '2023-06-28': 118
    }
  },
  laudoData: {
    total: 5170,
    totalBilling: 104250,
    byDate: {
      '2023-01-28': 121,
      '2023-02-28': 140,
      '2023-03-28': 119,
      '2023-04-28': 132,
      '2023-05-28': 140,
      '2023-06-28': 118
    }
  },
  modalities: [
    { 
      id: 'DX', 
      name: 'DX', 
      exams: 1200,
      reports: 1150,
      percentage: '25%', 
      color: '#3B82F6' 
    },
    { 
      id: 'CR', 
      name: 'CR', 
      exams: 1500,
      reports: 1480,
      percentage: '30%', 
      color: '#10B981' 
    },
    { 
      id: 'MG', 
      name: 'MG', 
      exams: 800,
      reports: 780,
      percentage: '15%', 
      color: '#F59E0B' 
    },
    { 
      id: 'CT', 
      name: 'CT', 
      exams: 1250,
      reports: 1200,
      percentage: '25%', 
      color: '#6366F1' 
    },
    { 
      id: 'RM', 
      name: 'RM', 
      exams: 420,
      reports: 400,
      percentage: '5%', 
      color: '#EC4899' 
    }
  ],
  productivityDoctors: [
    {
      id: 1,
      name: 'Dra. Amanda',
      position: 1,
      avatar: 'https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      examsCompleted: 1500,
      breakdown: { dx: 75, cr: 50, ct: 25 }
    },
    {
      id: 2,
      name: 'Dr. Paulo',
      position: 2,
      avatar: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      examsCompleted: 1300,
      breakdown: { dx: 60, cr: 40, ct: 20 }
    },
    {
      id: 3,
      name: 'Dra. Joana',
      position: 3,
      avatar: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
      examsCompleted: 1200,
      breakdown: { dx: 55, cr: 35, ct: 20 }
    }
  ],
  statistics: {
    byDate: [
      { 
        date: 'Jan/23', 
        count: 121,
        modalities: { DX: 40, CR: 30, MG: 20, CT: 20, RM: 11 }
      },
      { 
        date: 'Dez/23', 
        count: 140,
        modalities: { DX: 45, CR: 35, MG: 25, CT: 25, RM: 10 }
      },
      { 
        date: 'Jan/25', 
        count: 119,
        modalities: { DX: 38, CR: 32, MG: 18, CT: 21, RM: 10 }
      },
      { 
        date: 'Fev/25', 
        count: 132,
        modalities: { DX: 42, CR: 33, MG: 22, CT: 23, RM: 12 }
      },
      { 
        date: 'Mar/25', 
        count: 140,
        modalities: { DX: 44, CR: 36, MG: 24, CT: 24, RM: 12 }
      },
      { 
        date: 'Abr/25', 
        count: 118,
        modalities: { DX: 37, CR: 31, MG: 19, CT: 20, RM: 11 }
      }
    ],
    urgentLaudo: {
      date: '14/04/2023',
      elapsedTime: '21 horas'
    },
    breakdown: {
      high: 25,
      medium: 12,
      normal: 63,
      modality: 'CT',
      percentage: 63
    }
  },
  unitStatuses: [
    { id: '1', name: 'UNIDADE A', storageUsed: '1697Gb', lastUpdate: '2 minutos atrás' },
    { id: '2', name: 'UNIDADE B', storageUsed: '1697Gb', lastUpdate: '2 minutos atrás' },
    { id: '3', name: 'UNIDADE C', storageUsed: '1697Gb', lastUpdate: '2 minutos atrás' },
    { id: '4', name: 'UNIDADE D', storageUsed: '1697Gb', lastUpdate: '2 minutos atrás' }
  ],
  selectedStates: ['Amapá', 'Pará', 'Bahia', 'Tocantins', 'Maranhão'],
  totalUnits: 32
};

const states = {
  Amapá: { id: 'AP', color: '#AED581' },
  Pará: { id: 'PA', color: '#AED581' },
  Bahia: { id: 'BA', color: '#AED581' },
  Tocantins: { id: 'TO', color: '#AED581' },
  Maranhão: { id: 'MA', color: '#AED581' }
};

export const getStatesData = () => {
  return Object.entries(states).map(([name, data]) => ({
    name,
    id: data.id,
    color: data.color
  }));
};

export const filterDataByDate = (
  data: DashboardData,
  startDate: string,
  endDate: string
): DashboardData => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return {
    ...data,
    statistics: {
      ...data.statistics,
      byDate: data.statistics.byDate.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= start && itemDate <= end;
      })
    }
  };
};

export const filterDataByLocation = (
  data: DashboardData,
  location: string
): DashboardData => {
  return {
    ...data,
    unitStatuses: data.unitStatuses.filter(status => 
      location === '' || status.name === location
    )
  };
};

export const filterDataByModality = (
  data: DashboardData,
  modalities: string[]
): DashboardData => {
  if (modalities.length === 0) return data;

  const filteredModalities = data.modalities.filter(m => 
    modalities.includes(m.id)
  );

  const totalExams = filteredModalities.reduce((sum, m) => sum + m.exams, 0);
  const totalReports = filteredModalities.reduce((sum, m) => sum + m.reports, 0);

  return {
    ...data,
    modalities: filteredModalities,
    examData: {
      ...data.examData,
      total: totalExams
    },
    laudoData: {
      ...data.laudoData,
      total: totalReports
    },
    statistics: {
      ...data.statistics,
      byDate: data.statistics.byDate.map(date => ({
        ...date,
        count: Object.entries(date.modalities)
          .filter(([key]) => modalities.includes(key))
          .reduce((sum, [, value]) => sum + value, 0)
      }))
    }
  };
};