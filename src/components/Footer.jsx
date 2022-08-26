import React from "react";
import { Link } from "react-router-dom";
import fbIcon from "../img/fbIcon.png";
import instaIcon from "../img/instaIcon.png";
import twitterIcon from "../img/twitterIcon.png";
import externalLink from "../img/external-link.png";
// import NavDumplings from "./NavDumplings";
import clock from "../img/clock.png";

function Footer() {
  return (
    <div className="footer bg-white w-full flex flex-col text-center">
      <div className="footer1 bg-[#C1D5A4] w-full h-[100px] flex items-center justify-between px-40">
        <div className="reservation gap-4">
          <span className="text-white font-bold mr-4 text-md">
            Book A Table
          </span>
          <button className="btn bg-white text-black px-8 py-3">
            <Link to="/coming-soon" className="text-sm font-semibold">
              Go to Reservation
            </Link>
          </button>
        </div>
        <div className="contact">
          <span className="text-white font-bold mr-4 text-md">
            Contact us for more
          </span>
          <button className="btn bg-white text-black px-8 py-3">
            <Link to="/coming-soon" className="text-sm font-semibold">
              Go to Contact Page
            </Link>
          </button>
        </div>
      </div>

      <div className="footer2 bg-black w-full h-[300px] flex justify-center gap-10 items-center text-white">
        <div className="w-60 h-56 bg-[#C1D5A4]">
          <iframe
            title="divinedumplinglocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.730299739287!2d91.7398338143993!3d26.172911597846657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5bb4509a1e81%3A0xaf3449cc540f8777!2sDivine%20Dumplings!5e0!3m2!1sen!2sin!4v1661289958681!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-60 h-56 bg-black px-3 py-6">
          <div className="address">
            <span className="font-medium">Address</span>
            <p className="text-xs font-light mt-2 tracking-wide flex">
              <svg
                className="ml-1 mr-[-10px] mt-[-6px]"
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.125 6.25C13.125 10.625 7.5 14.375 7.5 14.375C7.5 14.375 1.875 10.625 1.875 6.25C1.875 4.75816 2.46763 3.32742 3.52252 2.27252C4.57742 1.21763 6.00816 0.625 7.5 0.625C8.99184 0.625 10.4226 1.21763 11.4775 2.27252C12.5324 3.32742 13.125 4.75816 13.125 6.25Z"
                  fill="white"
                />
                <path
                  d="M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z"
                  fill="black"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              78781008athgaon, near kc das commerce college, Chatribari,
              Guwahati, Assam 781008
            </p>
          </div>

          <div className="social mt-5">
            <span className="font-medium">Social Media</span>
            <div className="social-icons flex mt-2 justify-center gap-4">
              <Link to="/divine-dumplings">
                <div className="w-[40px] h-[40px] bg-[#1D1D1D] hover:bg-blue-500 flex justify-center items-center cursor-pointer">
                  <img src={fbIcon} alt="" />
                </div>
              </Link>
              <Link to="/divine-dumplings">
                <div className="w-[40px] h-[40px] bg-[#1D1D1D] hover:bg-red-500 flex justify-center items-center cursor-pointer">
                  <img src={instaIcon} alt="" />
                </div>
              </Link>
              <Link to="/divine-dumplings">
                <div className="w-[40px] h-[40px] bg-[#1D1D1D] hover:bg-blue-200 flex justify-center items-center cursor-pointer">
                  <img src={twitterIcon} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="div3 w-60 h-56 bg-black px-3 py-6 flex flex-col">
          <span className="font-medium mb-3">Links</span>
          <Link
            to="/divine-dumplings"
            className="hover:text-green-400 text-xs mb-2 flex justify-center"
          >
            <img src={externalLink} alt="" className="w-[10px] h-[10px] mr-2" />
            Home
          </Link>
          <Link
            to="/divine-dumplings"
            className="hover:text-green-400 text-xs mb-2 flex justify-center"
          >
            <img src={externalLink} alt="" className="w-[10px] h-[10px] mr-2" />
            Menu
          </Link>
          <Link
            to="/divine-dumplings"
            className="hover:text-green-400 text-xs mb-2 flex justify-center"
          >
            <img src={externalLink} alt="" className="w-[10px] h-[10px] mr-2" />
            About resturant
          </Link>
          <Link
            to="/divine-dumplings"
            className="hover:text-green-400 text-xs mb-2 flex justify-center"
          >
            <img src={externalLink} alt="" className="w-[10px] h-[10px] mr-2" />
            About company
          </Link>
          <Link
            to="/divine-dumplings"
            className="hover:text-green-400 text-xs mb-2 flex justify-center"
          >
            <img src={externalLink} alt="" className="w-[10px] h-[10px] mr-2" />
            Reservation
          </Link>
        </div>

        <div className="div4 w-60 h-56 bg-black px-3 py-6 flex flex-col">
          <span className="font-medium mb-2.5">Open Hours</span>
          <span className="text-xs mb-2 flex justify-center">
            <img src={clock} alt="" className="w-[15px] h-[15px] mr-1" />
            Monday - Saturday
          </span>
          <span className="text-xs mb-2 flex justify-center">9 AM - 11 PM</span>
          <span className="text-xs mb-2 flex justify-center">
            +91 9999999999
          </span>
          <span className="text-xs mb-2 flex justify-center">
            +91 9999999999
          </span>
        </div>
      </div>

      <div className="footer3 bg-[#292424] w-full h-[40px] text-white flex justify-center items-center text-xs">
        <span>
          © Copyright by{" "}
          <span className="text-[#C1D5A4]">Divine Hospitalities.</span> All
          Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
