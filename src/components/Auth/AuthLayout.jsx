import { Outlet } from "react-router-dom";

/**
 * Layout for 'auth' page
 * @returns {JSX.Element} Page
 */
export const AuthLayout = () => {
  /**
   * ! Must contain only 'auth' elements'
   */
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
