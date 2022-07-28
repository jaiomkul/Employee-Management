import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);

  const nav = [
    { title: "Home", to: "/" },
    { title: "Employees List", to: "/employees" },
    {
      title: isAuth ? "Logout" : "Login",
      to: isAuth ? "/logout" : "/login",
    },
    { title: "Admin", to: "/admin" },
  ];

  return (
    <div>
      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{ margin: "10px" }}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
