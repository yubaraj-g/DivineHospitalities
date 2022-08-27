import React, { useEffect, useRef } from "react";
import NavDumplings from "./NavDumplings";
import "./contact.css";
import { Link } from "react-router-dom";
import fbIcon from "../img/fbIcon.png";
import instaIcon from "../img/instaIcon.png";
import twitterIcon from "../img/twitterIcon.png";
import externalLink from "../img/external-link.png";
import clock from "../img/clock.png";
import clock2 from "../img/clock2.png";
import phone2 from "../img/phone2.png";
import mapPin from "../img/map-pin.png";
import emailjs from '@emailjs/browser';


const ContactPage = ()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehq8dzo', 'template_yi09hpg', form.current, 'u_r3FrLrQhaYkxEQk')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent!");
          alert('Email Sent');
          clearText();
      }, (error) => {
          console.log(error.text);
          console.log('Message sending failed.');
          alert('Email sending failed.');
      });
  }

  const pAlert = "Please fill out this field."
  
  const clearText = () => {
    document.getElementById('userName').value = "";
    document.getElementById('userEmail').value = "";
    document.getElementById('userMessage').value = "";
    // alert('text cleared');
  }

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);

  return (
    <div>
      <NavDumplings />

      <div className="contactPage h-[1600px] w-full flex flex-col z-30">
        <span className="contactHeading w-full text-white my-40 text-center">
          Contact Us
        </span>

        <div className="contactBody w-full h-[70%] bg-white z-10 flex justify-between">
          <div className="leftContact w-[60%] h-[70%]">
            <h2>We'd Love to Hear From You, Please Let Us Know</h2>
            <div className="my-8 w-[15%] h-[1px] bg-black"></div>
            <p className="text-sm mb-8">
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo dignissim
              congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus
              nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at
              felis.
            </p>

            <form ref={form} onSubmit={sendEmail} action="" className="w-full">
              <div className="flex flex-col w-full w-[90%] mb-6 md:mb-0">
                <label
                  htmlFor="grid-first-name"
                  className="block uppercase text-gray-900 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="userName"
                  className="block w-full bg-gray-100 text-gray-800 text-sm border border-red-500 py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                />
                <p className="text-red-500 text-xs italic" id="p-alert">
                  {pAlert}
                </p>
              </div>

              <div className="flex flex-col w-full w-[90%] my-6 md:mb-0">
                <label
                  htmlFor="grid-first-name"
                  className="block uppercase text-gray-900 font-bold mb-2"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="userEmail"
                  className="block w-full bg-white text-gray-800 text-sm border border-black py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                />
                <p className="text-red-500 text-xs italic">
                  {pAlert}
                </p>
              </div>

              <div className="flex flex-col w-full w-[90%] my-6 md:mb-0">
                <label
                  htmlFor="grid-first-name"
                  className="block uppercase text-gray-900 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  type="email"
                  name="user_message"
                  id="userMessage"
                  className="block w-full bg-white text-gray-800 text-sm border border-black py-3 px-4 mb-3 focus:outline-none focus:bg-white"
                ></textarea>
              </div>

              <button
                className="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 bottom-0 uppercase mt-8 cursor-pointer"
                type="button"
              >
                <input type="submit" value="SEND" className="cursor-pointer" />
              </button>
            </form>
          </div>

          <div className="rightContact w-[35%] h-[60%] border border-1 border-black flex justify-center items-center">
            <div className="w-[96%] h-[98%] border border-1 border-black flex flex-col">
              <div className="flex flex-col justify-center">
                <h3 className="text-center w-full my-6 font-bold">ADDRESS</h3>
                <p className="text-sm font-regular tracking-wide flex mb-4 w-[80%] flex self-center">
                  <img src={mapPin} alt="" className="h-5 mt-1 mr-1" />
                  78781008athgaon, near kc das commerce college, Chatribari,
                  Guwahati, Assam 781008
                </p>
                <div className="w-[80%] h-[1px] bg-black flex self-center"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-center w-full my-6 font-bold">
                  OPEN HOURS
                </h3>
                <span className="flex w-[80%] self-center text-sm mb-2 justify-center">
                  <img src={clock2} alt="" className="mr-1" />
                  Monday - Saturday
                </span>
                <span className="flex w-[80%] self-center text-sm mb-2 justify-center">
                  10 AM - 8 PM
                </span>
                <a
                  href="tel:+917575951000"
                  className="flex w-[80%] self-center text-sm mb-2 justify-center"
                >
                  <img src={phone2} alt="" className="mr-1" />
                  +91 7575951000
                </a>
                <a
                  href="tel:+917575951000"
                  className="flex w-[80%] self-center text-sm mb-4 justify-center"
                >
                  <img src={phone2} alt="" className="mr-1" />
                  +91 7575951000
                </a>
                <div className="w-[80%] h-[1px] bg-black flex self-center"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-center w-full my-6 font-bold">
                  FIND US ON
                </h3>
                <div className="flex self-center justify-evenly w-[50%] mb-4">
                  <a
                    href="https://www.facebook.com"
                    className="w-[30px] h-[30px] bg-[#1d1d1d] hover:bg-blue-700 flex justify-center items-center cursor-pointer"
                  >
                    <img src={fbIcon} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    className="w-[30px] h-[30px] bg-[#1d1d1d] hover:bg-red-500 flex justify-center items-center cursor-pointer"
                  >
                    <img src={instaIcon} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    className="w-[30px] h-[30px] bg-[#1d1d1d] hover:bg-blue-300 flex justify-center items-center cursor-pointer"
                  >
                    <img src={twitterIcon} alt="" />
                  </a>
                </div>
                <div className="w-[80%] h-[1px] bg-black flex self-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="map w-full h-[300px] bg-pink-200 flex absolute top-[1300px] z-20">
          <iframe
            title="divinedumplinglocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.730299739287!2d91.7398338143993!3d26.172911597846657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5bb4509a1e81%3A0xaf3449cc540f8777!2sDivine%20Dumplings!5e0!3m2!1sen!2sin!4v1661289958681!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer bg-white w-full flex flex-col text-center z-40 bottom-0">
        <div className="footer2 bg-black w-full h-[300px] flex justify-center gap-10 items-center text-white">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
              <img
                src={externalLink}
                alt=""
                className="w-[10px] h-[10px] mr-2"
              />
              Home
            </Link>
            <Link
              to="/divine-dumplings"
              className="hover:text-green-400 text-xs mb-2 flex justify-center"
            >
              <img
                src={externalLink}
                alt=""
                className="w-[10px] h-[10px] mr-2"
              />
              Menu
            </Link>
            <Link
              to="/divine-dumplings"
              className="hover:text-green-400 text-xs mb-2 flex justify-center"
            >
              <img
                src={externalLink}
                alt=""
                className="w-[10px] h-[10px] mr-2"
              />
              About resturant
            </Link>
            <Link
              to="/divine-dumplings"
              className="hover:text-green-400 text-xs mb-2 flex justify-center"
            >
              <img
                src={externalLink}
                alt=""
                className="w-[10px] h-[10px] mr-2"
              />
              About company
            </Link>
            <Link
              to="/divine-dumplings"
              className="hover:text-green-400 text-xs mb-2 flex justify-center"
            >
              <img
                src={externalLink}
                alt=""
                className="w-[10px] h-[10px] mr-2"
              />
              Reservation
            </Link>
          </div>

          <div className="div4 w-60 h-56 bg-black px-3 py-6 flex flex-col">
            <span className="font-medium mb-2.5">Open Hours</span>
            <span className="text-xs mb-2 flex justify-center">
              <img src={clock} alt="" className="w-[15px] h-[15px] mr-1" />
              Monday - Saturday
            </span>
            <span className="text-xs mb-2 flex justify-center">
              9 AM - 11 PM
            </span>
            <a href="tel:+917575951000" className="text-xs mb-2 flex justify-center">
              +91 7575951000
            </a>
            <a href="tel:+917575951000" className="text-xs mb-2 flex justify-center">
              +91 7575951000
            </a>
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
    </div>
  );
}

export default ContactPage;
