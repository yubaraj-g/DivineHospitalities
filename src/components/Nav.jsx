import React from "react";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo"><span>DIVINE</span></Link>
      <ul>
        <li>
          <Link to="/dumplings" className="nav-links">Dumplings</Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">About</Link>
        </li>
        <li>
          <Link to="/Contact" className="nav-links">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
