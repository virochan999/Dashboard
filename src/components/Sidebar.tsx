import { SnowflakeIcon } from "lucide-react";
import Navlinks from "./Navlinks";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <div className="py-8 pl-2 pr-4 bg-indigo-800 max-h-full h-full fixed w-[300px] justify-between flex flex-col gap-8">
      <div className="flex gap-8 flex-col pl-2">
        <div className="flex gap-4 items-center">
          <SnowflakeIcon />
          <h1 className="font-bold text-xl">Dashboard</h1>
        </div>
        <Navlinks />
      </div>
      <Profile />
    </div>
  );
};

export default Sidebar;
