import React from "react";
import { Link } from "react-router-dom";

function LandingTxtBtn2() {
  return (
    <div className="txtWithBtn">
      <p className="headline">Divine Dumplings</p>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut
      </p>
      <div className="btnWrapper">
        <button className="menuBtn">
          <Link to="/menu" className="link">Check Full Menu</Link>
        </button>
      </div>
    </div>
  );
}

export default LandingTxtBtn2;
