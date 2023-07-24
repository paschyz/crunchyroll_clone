// NavBar.js
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Browse</NavLink>
        </li>
        <li>
          <NavLink to="/about">Manga</NavLink>
        </li>
        <li>
          <NavLink to="/about">Games</NavLink>
        </li>
        <li>
          <NavLink to="/about">Store</NavLink>
        </li>
        <li>
          <NavLink to="/about">News</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
