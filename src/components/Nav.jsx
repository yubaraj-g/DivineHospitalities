import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/LogoText.png";

function Nav() {
  return (
    <nav
      style={{ position: "fixed", zIndex: "999" }}
      className="flex justify-between w-full"
    >
      <Link to="/" className="logo">
        <img src={Logo} alt="DIVINE" />
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/coming-soon" className="nav-links">
            About us
          </Link>
        </li>
        <li>
          <Link to="/coming-soon" className="nav-links">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
