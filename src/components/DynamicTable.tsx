import { Check, Loader, RefreshCcw, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
//import { useLocationUnitCentralStateStore } from '../store/useLocationUnitCentralStateStore';
interface DynamicTableProps {
  color?: string;
  endpoint: string;
  title: string;
  columns: Array<{ key: string; label: string }>;
  queryParams?: Record<string, any>; // Aqui estamos dizendo que queryParams é um objeto com chave de string e valores de qualquer tipo.
  pageSize: number;
  extractData: (res: any) => {
    results: any;
    page: number;
    total_pages: number;
  };
}

const DynamicTable: React.FC<DynamicTableProps> = ({ 
  color, 
  endpoint, 
  title, 
  columns, 
  queryParams, 
  pageSize, 
  extractData 
}) => {
  
  let bg_color, border;

  if (color === "primary") {
    bg_color = "bg-primary";
    border = "border-primary";
  } else if (color === "primary-custom") {
    bg_color = "bg-primary-custom";
    border = "border-primary-custom";
  }
  const modalityColors = {
    "CT": "bg-blue-100 text-blue-800",      // Tomografia Computadorizada
    "MR": "bg-purple-100 text-purple-800",  // Ressonância Magnética
    "US": "bg-green-100 text-green-800",    // Ultrassonografia
    "XR": "bg-yellow-100 text-yellow-800",  // Raio-X (Radiografia)
    "NM": "bg-orange-100 text-orange-800",  // Medicina Nuclear
    "PT": "bg-pink-100 text-pink-800",      // Tomografia por emissão de pósitrons (PET)
    "CR": "bg-teal-100 text-teal-800",      // Radiografia Computadorizada
    "DX": "bg-indigo-100 text-indigo-800",  // Radiografia Digital (também usado como DX em alguns sistemas)
    // Adicione mais modalidades conforme necessário
  };

  const [dataReport, setDataReport] = useState([]);  
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
 
  const fetchData = async () => {
   setLoading(true);
    try {
      // console.log("queryParams ",queryParams)
      const queryString = new URLSearchParams({ ...queryParams, page, page_size: pageSize }).toString();
      const response = await fetch(`${endpoint}?${queryString}`,{
        method:'GET',
        headers:{
          //'Content-Type': 'application/json', // Defina o tipo de conteúdo conforme necessário
          'Authorization': `${import.meta.env.VITE_JPR_ENDPOINTS}`,
        },
      });
      const result = await response.json();
      const extracted = extractData(result);

      setDataReport(extracted.results || []);
      setTotalPages(extracted.total_pages || 1);
      setTotalResults(extracted.total_results || 0);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // chamada imediata quando os deps mudarem
  
    const interval = setInterval(() => {
      fetchData(); // chamada periódica
    }, 60000); // a cada 1 minuto segundos (60000 ms)
  
    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, [page, queryParams, pageSize]);

  // const renderTableBody = () => {
  //   if (loading) {
  //     return (
  //       <tr>
  //         <td colSpan={columns.length} className="text-center p-6">
  //           Carregando...
  //         </td>
  //       </tr>
  //     );
  //   }

  //   return dataReport.map((row, index) => (
  //     <tr key={index} className="hover:bg-blue-50 transition">
  //       {columns.map((col, colIndex) => (
  //         <td key={colIndex} className="p-3 border-b border-gray-200 text-sm text-gray-700">
  //           {col.render ? col.render(row[col.key], row) : row[col.key]}
  //         </td>
  //       ))}
  //     </tr>
  //   ));
  // };

  return (
     <>{/*
        <div className={`border-2  rounded-lg p-4 bg-white shadow-md relative ${bg_color} ${border}`}>
            <span className={`pl-4 pr-4 pt-1 pb-1 rounded-lg text-white relative -top-7 left-0 ${bg_color}`}>{title}</span>
          
            <div className="overflow-x-auto min-h-64 rounded-2xl">
                <table className="min-w-full text-left text-sm border-collapse">
                <thead>
                    <tr className="bg-blue-100 text-blue-800 uppercase text-xs font-semibold tracking-wider">
                    {columns.map((col) => (
                        <th key={col.key} className="p-3 border-b border-blue-200">
                        {col.label}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>{renderTableBody()}</tbody>
                </table>
            </div>
        </div>
        <br></br><br></br>*/}
          <div className={`border-2 rounded-lg p-4 bg-white shadow-md relative ${bg_color} ${border}`}>
      
          {/* Título e botão acima do overlay */}
            <span className={`pl-4 pr-4 pt-1 pb-1 rounded-lg text-white relative -top-7 left-0 ${bg_color} font-bold`}>
              {title} &nbsp;
              <button onClick={fetchData} className="text-sm text-white transition align-middle" title='Atualizar'>
                <RefreshCcw size={16} className="hover:font-bold" />
              </button>
            </span>
            <br></br>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 mt-4 ">              
              {dataReport.map((row, index) => (
                <div
                  key={index}
                  className="bg-white  border-gray-200  relative  max-w-sm rounded-md shadow shadow-md p-3 border border-2 mb-3"
                >
                  {/* Overlay de carregamento */}
                  {loading && (
                    <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-1 rounded-lg">
                      <Loader size={32} className="animate-spin text-gray-700" />
                    </div>
                  )}
                  {/* Modalidade destacada no topo */}
                  {/* <div className="relative -top-7 left-0">                    
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${modalityColors[row["modality"]] || "bg-gray-100 text-gray-800"} text-sm font-bold shadow`}>
                      {row["modality"]}
                    </div>
                  </div> */}
                  <div className="relative -top-7 left-0">  
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${modalityColors[row["modality"]] || "bg-gray-100 text-gray-800"} text-sm font-bold shadow`}>
                      {loading ? (
                        <Loader size={32} className="animate-spin text-gray-700" />
                      ) : (
                        row["modality"]
                      )}
                  </div>
                </div>

                  {/* Demais campos */}
                  {columns
                    .filter((col) => col.key !== "modality")
                    .map((col) => (
                      <div key={col.key} className="mb-2 flex flex-col">
                        <div className="font-bold text-[9px] text-gray-400  uppercase">
                          {col.label}
                        </div>
                        <div className="pl-2">
                        {/* Regra específica para SLA */}
                        {col.key === "on_sla" ? (
                          <span className="inline-flex items-center align-middle">
                            {row[col.key] ? (
                              <Check size={16} className="text-green-500" />
                            ) : (
                              <X  size={16} className="text-red-500" />
                            )}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-900 uppercase">
                            {col.render ? col.render(row[col.key], row) : row[col.key]}
                          </span>
                        )}
                      </div>
                      </div>
                  ))}
                </div>
              ))}
            </div>
          </div>     
    </>




  );
};

export default DynamicTable;
