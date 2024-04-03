type DonutChartTypes = { donutData: number[] };

const DonutChart = ({ donutData }: DonutChartTypes) => {
  const total = donutData.reduce((sum, value) => sum + value, 0);
  const circumference = 2 * Math.PI * 100; // Increased radius to 100

  return (
    <div className="bg-white p-8">
      <div>
        <h2 className="font-bold text-xl">Customers</h2>
        <p className="text-sm font-semibold opacity-50">
          Customers that buy products
        </p>
      </div>
      <div className="relative flex justify-center">
        <svg className="w-[25rem] h-[25rem]">
          <circle
            className="text-gray-300"
            stroke="currentColor"
            strokeWidth="32"
            fill="transparent"
            r="100"
            cx="50%"
            cy="50%"
          />
          {donutData.map((value, index) => (
            <circle
              key={index}
              className={`text-${index === 0 ? "purple-600" : "pink-600"}`}
              stroke="currentColor"
              strokeWidth="32"
              strokeDasharray={`${
                (value / total) * circumference
              } ${circumference}`}
              strokeDashoffset={
                index === 0 ? 0 : (donutData[0] / total) * circumference
              }
              strokeLinecap="round"
              fill="transparent"
              r="100"
              cx="50%"
              cy="50%"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl font-bold">
              {Math.round((donutData[1] / total) * 100)}%
            </div>
            <div className="text-sm text-gray-500 w-[64px]">
              Total New Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
