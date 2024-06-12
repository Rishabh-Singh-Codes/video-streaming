import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex pt-10 px-4">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
