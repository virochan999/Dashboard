import { ChevronDown } from "lucide-react";

type BarChartTypes = {
  data: string[];
  activeIndex: number;
};

const BarChart = ({ data, activeIndex }: BarChartTypes) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="flex flex-grow flex-col gap-4 bg-white p-8">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-xl">Overview</h3>
          <span className="opacity-50 text-sm">Monthly Earning</span>
        </div>
        <div className="flex justify-between cursor-pointer p-2 h-fit items-center gap-8 bg-purple-50 rounded-lg">
          <span className="opacity-50 text-sm">Quaterly</span>
          <ChevronDown />
        </div>
      </div>
      <div className="flex items-end gap-4 justify-between">
        {months.map((month, index) => (
          <div
            key={month}
            className={`flex flex-col items-center space-y-1 ${
              index === activeIndex ? "text-purple-600" : "text-gray-400"
            }`}
          >
            <div
              className={`${data[index]} ${
                index === activeIndex ? "bg-blue-600" : "bg-purple-100"
              } rounded-lg w-[3rem]`}
            />
            <span className="text-sm">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
