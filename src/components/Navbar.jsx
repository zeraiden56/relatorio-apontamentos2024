import { routes } from "../routes";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.url}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
