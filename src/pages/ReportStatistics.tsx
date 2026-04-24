import { ComponentType, ReactNode } from "react"
import ContainerChart from "../components/ContainerChart"

export const ReportStatisticsSLA: ComponentType<{
  title: string;
  value: number
}> = (props) => {
  return <div className="flex flex-col">
    <span className="text-gray-400 font-bold text-xl">{props.title}</span>
    <span className="text-6xl font-bold">{props.value}<span className="text-xl">%</span></span>
  </div>
} 

export const ReportStatisticsReportData: ComponentType<{
  lastSignedReportsData: string;
  averageCompletionTime: string;
  modality: string;
}> = (props) => {
  return <div className="flex flex-col">
    <span className="text-xs">Últimos Laudos Assinados</span>
    <span className="font-bold pl-4">{props.lastSignedReportsData}</span>
    <span className="text-xs">Tempo Médio para Conclusão do Laudo</span>
    <span className="font-bold pl-4">{props.averageCompletionTime}</span>
    <span className="text-xs">Modalidade</span>
    <span className="font-bold pl-4">{props.modality}</span>
  </div>
}

export const ReportStatistics: ComponentType<{
  chardContent: ReactNode 
  sla: {title: string; value: number}
  reportData: {
    lastSignedReportsData: string;
    averageCompletionTime: string;
    modality: string;
  }
}> = (props) => {
  
  return <div className="flex flex-col gap-4 items-center justify-center">
      <ReportStatisticsSLA
        {...props.sla}
      />
      {props.chardContent}
      {/* <ReportStatisticsReportData
        {...props.reportData}
      /> */}
    </div>
}
