import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";

/**
 * Global page layout
 * @contains [Sidebar, Header, Outlet]
 * @returns {JSX.Element} Page
 */
export const Layout = () => {
  return (
    /**
     ** Global page layout
     */
    <div className="grid grid-cols-[1fr_3fr] h-screen w-screen">
      {/**
       * Sidebar container
       */}
      <div className="bg-primaryblue">
        <Sidebar />
      </div>
      <div className="bg-white overflow-auto p-4">
        {/**
         * Display place for 'Chat' and 'Profile'
         */}
        <Header />

        {/**
         * Outlet conainer
         */}
        <div className="flex-grow overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
