import { Outlet } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Sidebar } from "./Sidebar.jsx";
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
      <div>
        <Sidebar />
      </div>
      <div>
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
