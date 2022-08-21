import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />

      <div className="hero">
        <span className="homeh1">Heaven's Here On Earth</span>

        <div className="welcomeText">
          <div className="supportLineDiv">
            <span>Welcome to Divine Hospitalities</span>
          </div>
        </div>

        <div className="text3rd">
          <span>Explore and experience our heavenly whereabouts</span>
        </div>

        <div className="cardContainer">
          <Link to="/divine-dumplings" className="nav-links body-links">
            <div className="card">
              <div className="child1">Click to visit</div>
              <hr />
              <div className="child2">www.divinedumplings.com</div>
            </div>
          </Link>
          <Link to="/divine-dumplings" className="nav-links body-links">
            <div className="card cardDisabled">
              <div className="child1">Coming Soon</div>
              <hr />
              <div className="child2">Coming Soon...</div>
            </div>
          </Link>
          <Link to="/divine-dumplings" className="nav-links body-links">
            <div className="card cardDisabled">
              <div className="child1">Coming Soon</div>
              <hr />
              <div className="child2">Coming Soon...</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
