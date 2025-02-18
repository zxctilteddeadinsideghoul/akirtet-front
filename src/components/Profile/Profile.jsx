import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

/**
 * Profile page representation
 * @returns {JSX.Element} Page
 */
export const Profile = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
      if (localStorage.getItem("token")) {
        let decoded = jwtDecode(localStorage.getItem("token"));
        setEmail(decoded["username"])
        setRole(decoded["role"]);
      }
    }
    ,
    []
  )

  return (
    <div className="flex justify-center">
      <div>
      <h1>Profile page</h1>
      <li>{email}</li>
      <li>{role}</li>
      </div>
    </div>
  );
};
