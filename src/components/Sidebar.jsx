import { Link } from "react-router-dom";

/**
 * ! Do not use *.webp or *.jpeg pictures, cause scaling kills quality
 * * Use .svg;
 * * You can import logo from Figma with .svg extension
 */
// jackalJPEG
import logo from "../assets/logo.webp";

/**
 * Sidebar representation
 * @contains [ "Главная", "Профиль", "Календарь" ]
 * @returns {JSX.Element}
 */
export const Sidebar = () => {
  const paths = [
    ["", "Главная"],
    ["profile", "Профиль"],
    ["calendar", "Календарь"],
  ];

  return (
    <nav>
      <img src={logo} alt="Akirtet logo" />
      <ul>
        {paths.map(([path, label]) => (
          <div key={path} className="text-3xl hover:text-gray-100">
            <Link className="text-link" to={path}>
              <li className="flex justify-start pl-10 items-center m-4 bg-customgreen rounded-full h-20 text-white-50">
                {label}
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};
