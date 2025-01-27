import {Link} from "react-router-dom";
// jackalJPEG
import logo from "../assets/logo.webp";

export const Sidebar = () => {
  const sidePaths = ["", "profile", "chat", "calendar", "welcome"];

  function capitalize(w) {
    return String(w[0]).toUpperCase() + String(w).slice(1);
  }

  return (
    //TODO I don't know how to set styles for Link, I made a kluge in the text-link class, because of that hover doesn't work
    <nav>
      <img src={logo} alt="error"/>
        <ul>
          {sidePaths.map((path) => {
            return (
              <div key={path} className="text-3xl hover:text-gray-100">
                <Link className="text-link" to={path}>
                  <li key={path}
                      className="flex justify-start pl-10 items-center m-4 bg-customgreen rounded-full h-20 text-white-50">
                    {capitalize(path || "home")}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
    </nav>
);
};
