import { CircleUser, ChevronDown } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 cursor-pointer bg-indigo-600 rounded-md">
      <div className="flex gap-2 items-center">
        <CircleUser />
        <div className="flex flex-col">
          <span className="font-bold">Evano</span>
          <span className="text-sm">Project Manager</span>
        </div>
      </div>
      <ChevronDown />
    </div>
  );
};

export default Profile;
