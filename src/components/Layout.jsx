import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";
import {Header} from "./Header.jsx";

export const Layout = () => {
  return (
    <div className="grid grid-cols-[1fr_3fr] h-screen w-screen">
      <div className="bg-lightgray">
        <Sidebar />
      </div>
      <div className="bg-white overflow-auto p-4">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
