import React from "react";
import { Link } from "react-router-dom";

function LandingTxtBtn1() {
  return (
    <div className="txtWithBtn -mt-5" style={{ zIndex: "888" }}>
      <p className="headline lg:text-6xl text-5xl leading-[2rem]">Divine Dumplings</p>
      <p className="text text-xs lg:text-sm">
        Weaving appetizing stories with an assortment of different dishes
      </p>
      <div className="btnWrapper">
        <button className="menuBtn">
          <Link to="/menu" className="link text-sm">Check Full Menu</Link>
        </button>
      </div>
    </div>
  );
}

export default LandingTxtBtn1;
