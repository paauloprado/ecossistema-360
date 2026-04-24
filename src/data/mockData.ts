import { ExamData, ReportData } from '../types';

// Utility function to generate a random date within a range
const getRandomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

// Utility function to generate a random string ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 12);
};

// Function to generate random exam data
export const generateExamData = (count: number): ExamData[] => {
  const modalities = ['CT', 'CR', 'DX', 'US', 'RM'] as const;
  const units = ['Hospital A', 'Hospital B', 'Clinic C', 'Clinic D', 'Imaging Center E'];
  const priorities = ['normal', 'urgent', 'emergency'] as const;
  const statuses = ['scheduled', 'in-progress', 'completed'] as const;
  const technicians = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Michael Brown'];
  
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-12-31');
  
  const exams: ExamData[] = [];
  
  for (let i = 0; i < count; i++) {
    const patientId = `P${Math.floor(Math.random() * 1000)}`;
    
    exams.push({
      id: generateId(),
      date: getRandomDate(startDate, endDate),
      modality: modalities[Math.floor(Math.random() * modalities.length)],
      unit: units[Math.floor(Math.random() * units.length)],
      patientId,
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      technician: technicians[Math.floor(Math.random() * technicians.length)]
    });
  }
  
  return exams;
};

// Function to generate random report data linked to exams
export const generateReportData = (exams: ExamData[], completionRate = 0.8): ReportData[] => {
  const statuses = ['pending', 'in-review', 'completed'] as const;
  const radiologists = ['Dr. Wilson', 'Dr. Taylor', 'Dr. Martinez', 'Dr. Anderson', 'Dr. Thomas'];
  
  const reports: ReportData[] = [];
  
  // Only create reports for a subset of exams based on completion rate
  const reportableExams = exams.filter(() => Math.random() < completionRate);
  
  for (const exam of reportableExams) {
    // Report date is after exam date
    const examDate = new Date(exam.date);
    const reportDelay = Math.floor(Math.random() * 14) + 1; // 1-14 days delay
    examDate.setDate(examDate.getDate() + reportDelay);
    
    reports.push({
      id: generateId(),
      examId: exam.id,
      date: examDate.toISOString().split('T')[0],
      modality: exam.modality,
      unit: exam.unit,
      patientId: exam.patientId,
      radiologist: radiologists[Math.floor(Math.random() * radiologists.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }
  
  return reports;
};

// Generate the mock data
const mockExams = generateExamData(500);
const mockReports = generateReportData(mockExams);

export { mockExams, mockReports };