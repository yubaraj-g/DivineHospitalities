import React from "react";
import "./divineHome.css";
import { Link } from "react-router-dom";
import divinelogo from "../img/divinelogo40x40.png";
import logoText from "../img/LogoText.png";

function DivineHome() {
  return (
    <div className="homeCanvas w-full">
      <div className="circle"></div>

      <div className="contactLink flex flex-col">
        <div className="tiny1"></div>
        <Link to="/coming-soon">Contact</Link>
        <div className="tiny2"></div>
      </div>

      <div className="animatedHeading1">
        <span>DIVINE</span>
      </div>
      <div className="animatedHeading2">
        <span>HOSPITALITIES</span>
      </div>

      <div className="bottomRight flex justify-center items-center cursor-pointer">
        <div className="wrapper flex">
          <span>Our Outlets</span>
          <div className="line"></div>
        </div>
      </div>

      <div className="leftDiv">
        <div className="logo">
          <div className="topBorder"></div>

          <div className="logoDiv flex">
            <div className="mainLogo">
              <img src={divinelogo} alt="" />
            </div>

            <div className="logoText">
              <img src={logoText} alt="" />
            </div>
          </div>

          <div className="bottomBorder"></div>
        </div>


      </div>
    </div>
  );
}

export default DivineHome;
