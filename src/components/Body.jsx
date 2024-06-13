import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="pt-10 flex px-4 max-w-full">
      <Sidebar />
      <div className="flex-1 w-5/6">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
