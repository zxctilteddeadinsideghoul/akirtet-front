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
      <div>{/** <AuthHeader/> */}</div>
      <div>
        <Outlet />
      </div>
      {/** Smth else */}
    </div>
  );
};
