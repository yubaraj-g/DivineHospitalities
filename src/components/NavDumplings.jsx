import React from "react";
import { Link } from "react-router-dom";
import "./dumplings.css";
import logo from '../img/divinelogo40x40.png'
import logoText from '../img/LogoText.png'


function NavDumplings() {
  return (
    <>
      <nav style={{ position: "fixed", zIndex: "999" }} className="heroNav" id="navDumplings">
        
        <Link to="/" className="logoDumpling flex">
          <img src={logo} alt="" className="w-[35px] mr-2 flex items-center my-auto" />
          <img src={logoText} alt="" className="w-[70px] h-[22px] flex items-center my-auto" />
        </Link>

        <ul className="navUL">
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
            <Link to="/contact" className="nav-links">
              Contact us
            </Link>
          </li>
          {/* <li>
            <Link to="/coming-soon" className="nav-links">
              Reservation
            </Link>
          </li> */}
        </ul>

      </nav>
    </>
  );
}

export default NavDumplings;
