import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/divinelogo40x40.png";
import logoText from "../img/LogoText.png";
import "./dumplings.css";

function NavDesktop() {
  return (
    <div>
      <nav
        style={{ position: "fixed", zIndex: "999" }}
        className="heroNav"
        id="navDumplings"
      >
        <Link to="/" className="logoDumpling flex">
          <img
            src={logo}
            alt="divine-logo"
            className="w-[35px] mr-2 flex items-center my-auto"
          />
          <img
            src={logoText}
            alt="divine-dumplings"
            className="flex items-center my-auto"
          />
        </Link>

        <ul className="navUL" style={{ zIndex: 1111 }}>
        <li>
          <Link to="/divine-dumplings" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-links">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about-resturant" className="nav-links">
            About the Resturant
          </Link>
        </li>
        <li>
          <Link to="/about-company" className="nav-links">
            About the Company
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-links">
            Contact us
          </Link>
        </li>
        <button onClick={""} className="closeNav">
          X
        </button>
      </ul>
      </nav>
    </div>
  )
}

export default NavDesktop
