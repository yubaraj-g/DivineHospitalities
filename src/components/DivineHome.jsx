import React from "react";
import "./divineHome.css";
import { Link } from "react-router-dom";
import divinelogo from "../img/divinelogo40x40.png";
import logoText from "../img/LogoText.png";
import fbIcon from "../img/fbIcon.png";
import instaIcon from "../img/instaIcon.png";
import twitterIcon from "../img/twitterIcon.png";

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
        <Link to="/" className="wrapper">
          <div className="flex wrapper2">
            <span>Explore Our Outlets</span>
            <div className="line"></div>
          </div>
        </Link>

        <div className="slideInDiv">
          <Link to="/divine-dumplings">
            <span className="hrefToDumplings">www.divinehospitalities.com/divine-dumplings</span>
          </Link>
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

        <div className="verticalNav">
          <ul>
            <li>
              <Link to="/">
                A<br />B<br />O<br />U<br />T
              </Link>
            </li>
            <li>
              <Link to="/">
                C<br />O<br />N<br />T<br />A<br />C<br />T
              </Link>
            </li>
          </ul>
        </div>

        <div className="social flex items-center justify-start absolute bottom-6">
          <span className="text mr-2">Follow Us -</span>
          <div className="socialIcons flex gap-4">
            <div className="h-[25px] w-[25px] flex justify-center items-center">
              <img src={fbIcon} alt="" className="w-[6px] h-[12px]" />
            </div>
            <div className="h-[25px] w-[25px] flex justify-center items-center">
              <img src={instaIcon} alt="" className="w-[10.5px] h-[10.5px]" />
            </div>
            <div className="h-[25px] w-[25px] flex justify-center items-center">
              <img src={twitterIcon} alt="" className="w-[11px] h-[10px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="centerText text-center">
        <span>
          DIVINE
          <br />
          HOSPITALITIES
        </span>
        <div className="smallLine"></div>
      </div>
    </div>
  );
}

export default DivineHome;
