import { useState } from "react";
import CardPanel from "../components/CardPanel";
import Header from "../components/Header";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import Products from "../components/Products";

const Dashboard = () => {
  const [activeIndex, _] = useState(4);

  const data = [
    "h-[10rem]",
    "h-[16rem]",
    "h-[10rem]",
    "h-[8rem]",
    "h-[18rem]",
    "h-[12rem]",
    "h-[18rem]",
    "h-[8rem]",
    "h-[10rem]",
    "h-[14rem]",
    "h-[10rem]",
    "h-[16rem]",
  ];
  const donutData = [50, 65];
  return (
    <div className="flex-grow p-8 pl-[310px] bg-[#f5f6f8] text-black flex flex-col gap-8">
      <Header />
      <CardPanel />
      <div className="flex justify-between flex-col md:flex-row gap-12">
        <BarChart
          data={data}
          activeIndex={activeIndex}
        />
        <DonutChart donutData={donutData} />
      </div>
      <Products />
    </div>
  );
};

export default Dashboard;
