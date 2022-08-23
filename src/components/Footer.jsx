import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-white w-full flex flex-col">
      <div className="footer1 bg-[#C1D5A4] w-full h-[100px] flex items-center justify-between px-40">
        <div className="reservation gap-4">
          <span className="text-white font-bold mr-4 text-lg">
            Book A Table
          </span>
          <button className="btn bg-white text-black px-8 py-2">
            <Link to="/coming-soon" className="text-sm font-semibold">
              Go to Reservation
            </Link>
          </button>
        </div>
        <div className="contact">
          <span className="text-white font-bold mr-4 text-lg">
            Contact us for more
          </span>
          <button className="btn bg-white text-black px-8 py-2">
            <Link to="/coming-soon" className="text-sm font-semibold">
              Go to Contact Page
            </Link>
          </button>
        </div>
      </div>

      <div className="footer2 bg-black w-full h-[300px]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="footer3 bg-[#292424] w-full h-[40px] text-white flex justify-center items-center text-xs">
        <span>© Copyright by <span className="text-[#717744]">Divine Hospitalities</span> All Rights Reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
