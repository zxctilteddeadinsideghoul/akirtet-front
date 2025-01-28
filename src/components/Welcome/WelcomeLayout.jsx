import { Outlet } from "react-router-dom";

/**
 * Layout for 'welcome' page
 * @returns {JSX.Element} Page
 */
export const WelcomeLayout = () => {
  /**
   * ! Must contains only 'welcome' elements'
   */
  return (
    <div>
      <div>{/** <WelcomeHeader/> */}</div>
      <div>
        <Outlet />
      </div>
      {/** Smth else */}
    </div>
  );
};
