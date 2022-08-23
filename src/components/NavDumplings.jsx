import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../img/LogoText.png";
import "./dumplings.css";

function NavDumplings() {
  return (
    <>
      <nav style={{ position: "relative", zIndex: "999" }} className="heroNav" id="navDumplings">
        <Link to="/divine-dumplings" className="logo">
          {/* <img src={Logo} alt="DIVINE" /> */}
          <span>DIVINE DUMPLINGS</span>
        </Link>
        <ul className="navUL">
          <li>
            <Link to="/divine-dumplings" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="nav-links">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="nav-links">
              About the Resturant
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="nav-links">
              About the Company
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="nav-links">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="nav-links">
              Reservation
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavDumplings;
