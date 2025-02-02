import {Link} from "react-router-dom";
import {Logo} from "./Logo/Logo.jsx";

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
      {/*Logo container*/}
      <div className="mt-[4%] pl-[2%]">
        <Logo/>
      </div>
      <ul>
        {paths.map(([path, label]) => (
          <div key={path} className="text-3xl hover:text-gray-100">
            <Link className="text-link" to={path}>
              <li
                className="flex justify-start pl-10 items-center m-4 bg-secondaryblue rounded-full h-20 text-white-50">
                {label}
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
};
