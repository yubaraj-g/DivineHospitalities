import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dumplings.css";
import logo from "../img/divinelogo40x40.png";
import logoText from "../img/LogoText.png";
// import NavList from "./NavList";

function NavMobile() {
  const [open, setOpen] = useState(false);

  const showMenu = ()=> {
    setOpen(!open);
  }

  // const [close, setClose] = useState(false);

  return (
    <nav style={{ position: "fixed", zIndex: "999" }} className="heroNavMobile">
      <button
        onClick={showMenu}
        className="hamburger h-[50px] w-[10%] flex items-center ml-5 mr-[-10px] z-50"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="#c1d5a4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#c1d5a4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#c1d5a4"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div className="logoDiv flex mr-6 ml-[-10px] z-40">
        <Link to="/" className="logoDumpling flex">
          <img
            src={logo}
            alt=""
            className="w-[35px] mr-2 flex items-center my-auto"
          />
          <img src={logoText} alt="" className="flex items-center my-auto" />
        </Link>
      </div>

      
        <ul
          className={open ? "navUL active" : "navUL"}
          style={{ zIndex: 1111 }}
        >
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
          <button onClick={showMenu} className="closeNav">
            X
          </button>
        </ul>
      
    </nav>
  );
}

export default NavMobile;
