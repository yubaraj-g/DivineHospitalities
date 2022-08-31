import React from "react";
import { Link } from "react-router-dom";
import "./dumplings.css";
import logo from "../img/divinelogo40x40.png";
import logoText from "../img/LogoText.png";

function NavDumplings() {
  return (
    <>
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
          <img src={logoText} alt="divine-dumplings" className="flex items-center my-auto" />
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
        </ul>
      </nav>

      <nav
        style={{ position: "fixed", zIndex: "999" }}
        className="heroNavMobile w-screen p-0 block"
      >
        <div className="h-[50px] w-[10%] flex items-center mr-[-40px] z-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex logoDiv mr-6 ml-[-40px] z-40">
          <Link to="/" className="logoDumpling flex">
            <img
              src={logo}
              alt=""
              className="w-[35px] mr-2 flex items-center my-auto"
            />
            <img src={logoText} alt="" className="flex items-center my-auto" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavDumplings;
