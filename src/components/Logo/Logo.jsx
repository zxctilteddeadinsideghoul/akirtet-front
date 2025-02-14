import logo from "../../assets/demoLogo.svg";

/**
 * Logo representation
 * @returns {JSX.Element} Logo
 */
export const Logo = ({ className }) => {
  return <img className={className} src={logo} alt="logo" />;
};
