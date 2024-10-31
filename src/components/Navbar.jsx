import { routes } from "../routes";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <Link
              to={route.url}
              className={location.pathname === route.url ? "active" : ""}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
