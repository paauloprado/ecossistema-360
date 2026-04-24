import { useEffect, useState } from "react";
import { StatusLocal, StatusLocalWithDataFormatted } from "./StatusLocal";
import ContainerChartLemon from "../components/ContainerChartLemon";
import { Skeleton } from "@heroui/react"
import { Pagination } from "../components/ui/Paginator";
type GetMonitorUnitsItem = {
  unit: string;
  central: string;
  storage: number;
  last_update: string;
  activated_services: number;
}

type DataResult = { count: number; response: GetMonitorUnitsItem[] } | undefined;

export const StatusLocalGroup = () => {
  const per_page = 3
  const [page, setPage] = useState(1)
  const [isLoading, setIsloading] = useState(false)
  const [data, setData] = useState<DataResult>()
	const base_url = import.meta.env.VITE_API_BASE_URL
  useEffect(()=> {
    if (isLoading) return;
    setIsloading(true)
    fetch(`${base_url}/jpr_get_monitor_units/?page=${page}&per_page=${per_page}`, {
        method:'GET',
        headers:{
          //'Content-Type': 'application/json', // Defina o tipo de conteúdo conforme necessário
          'Authorization': `${import.meta.env.VITE_JPR_ENDPOINTS}`,
        },
    })
    // fetch(`/data/jpr_get_monitor_units.json`)
      .then(it => it.json())
      .then(it => setData(it))
      .finally(() => setIsloading(false))
  },[page])
  const total = data?.count || 0
  return <ContainerChartLemon title="Status Local">
    <div className="w-full flex gap-4 flex-wrap pb-4">
      {isLoading ? <>
        {Array.from({length: 3}).map((_,i) => <div key={i}>
          <Skeleton className="rounded-md">
            <StatusLocal
              unitname=""
              availableStorage=""
              lastUpdate=""
              descriptionServices=""
            />
          </Skeleton>
        </div>)}
      </>
        : data && data.response.map(it => <div key={it.unit} className="grow">
          <StatusLocalWithDataFormatted
            unitname={it.unit}
            availableStorage={it.storage}
            lastUpdate={it.last_update}
            activated_services={it.activated_services}
          />
        </div>
        )} 
    </div>
    <Pagination
      initialPage={page}
      onChange={setPage}
      total={total}
      showControls
      className="w-full flex justify-center"
    />
  </ContainerChartLemon>
}
