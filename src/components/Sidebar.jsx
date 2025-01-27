import { Link } from "react-router-dom";

export const Sidebar = () => {
  const sidePaths = ["", "profile", "chat", "calendar", "welcome"];

  function capitalize(w) {
    return String(w[0]).toUpperCase() + String(w).slice(1);
  }

  return (
    <nav>
      <ul>
        {sidePaths.map((path) => {
          return (
            <li key={path}>
              <Link to={path}>{capitalize(path || "home")}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
