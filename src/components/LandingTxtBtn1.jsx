import React from "react";
import { Link } from "react-router-dom";

function LandingTxtBtn1() {
  return (
    <div className="txtWithBtn" style={{ zIndex: "888" }}>
      <p className="headline">Divine Dumplings</p>
      <p className="text">
        Weaving appetizing stories with an assortment of different dishes
      </p>
      <div className="btnWrapper">
        <button className="menuBtn">
          <Link to="/coming-soon" className="link text-sm">Check Full Menu</Link>
        </button>
      </div>
    </div>
  );
}

export default LandingTxtBtn1;
