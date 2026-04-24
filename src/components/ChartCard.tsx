type ChartData = {
    label: string;
    values: number[];
  };
  
  interface ChartCardProps {
    title: string;
    data: ChartData[];
    currency: string;
  }
  
  export const ChartCard: React.FC<ChartCardProps> = ({ title, data, currency }) => {
    return (
      <div className="bg-[#f3f3f5] rounded-2xl border-2 border-lemon p-6">
        <h2 className="bg-lemon text-white font-semibold rounded-full w-fit px-6 py-1 -mt-10 mb-6">
          {title}
        </h2>
        <div className="space-y-6">
          {data.map((chart) => (
            <div key={chart.label} className="flex items-center gap-4">
              <div className="bg-[#cce18f] w-16 h-16 flex items-center justify-center rounded-xl text-black text-2xl font-bold">
                {chart.label}
              </div>
              <div className="flex flex-col gap-2 w-full">
                {chart.values.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className="bg-[#1f3c88] h-8 rounded-md text-white font-bold text-sm flex items-center justify-center"
                      style={{ width: `${val / 10}%`, minWidth: "4rem" }}
                    >
                      {val}
                    </div>
                    <span className="text-green-700 font-semibold text-md">
                      {currency} {val.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };