import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../img/LogoText.png";
import "./dumplings.css";

function NavDumplings() {
  return (
    <>
      <nav style={{ position: "relative", zIndex: "999" }} className="heroNav">
        <Link to="/" className="logo">
          {/* <img src={Logo} alt="DIVINE" /> */}
          <span>DIVINE DUMPLINGS</span>
        </Link>
        <ul className="navUL">
          <li>
            <Link to="/" className="nav-links">
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
          <li>
            <Link to="/reservation" className="nav-links">
              Reservation
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavDumplings;
