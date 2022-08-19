import React from "react";
import {Link} from 'react-router-dom'
import Logo from '../img/LogoText.png'

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo"><img src={Logo} alt="DIVINE" /></Link>
      <ul>
        <li>
          <Link to="/" className="nav-links">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">About us</Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-links">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
