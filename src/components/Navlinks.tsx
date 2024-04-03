import {
  ChevronRight,
  CircleDollarSign,
  CircleGauge,
  CircleHelp,
  CirclePercent,
  PackageSearch,
  SquareUser,
} from "lucide-react";

const links = [
  {
    id: 1,
    name: "Products",
    icon: <PackageSearch />,
  },
  {
    id: 2,
    name: "Customers",
    icon: <SquareUser />,
  },
  {
    id: 3,
    name: "Income",
    icon: <CircleDollarSign />,
  },
  {
    id: 4,
    name: "Promote",
    icon: <CirclePercent />,
  },
  {
    id: 5,
    name: "Help",
    icon: <CircleHelp />,
  },
];

const Navlinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 hover:bg-indigo-600 p-2 hover:rounded-md hover:cursor-pointer min-w-60">
        <CircleGauge />
        <span>Dashboard</span>
      </div>
      {links.map((link) => (
        <div
          key={link.id}
          className="flex justify-between items-center hover:bg-indigo-600 p-2 hover:rounded-md hover:cursor-pointer min-w-60"
        >
          <div className="flex gap-4">
            {link.icon}
            <span>{link.name}</span>
          </div>
          <ChevronRight size={16} />
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
