import React, { useEffect } from "react";
import Footer from "./Footer";
import NavDumplings from "./NavDumplings";
import "./aboutPage.css";
import aboutbg2 from '../img/aboutBg2.jpg'

function AboutResturant() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  return (
    <div>
      <NavDumplings />

      <div className="aboutPage flex flex-col z-10 bg-white">
        <div className="backgroundAbout flex flex-col w-full items-around text-center h-[400px] text-white">
          <h2 className="aboutHeadline font-semibold flex justify-center items-center pt-[9rem] text-4xl">
            About
          </h2>
          <span className="flex justify-center items-center pb-[9rem] font-light text-sm">
            ABOUT OUR RESTURANT
          </span>
        </div>

        <div className="w-full h-fit lg:h-[30rem] bg-white flex flex-col lg:flex-row px-12 lg:px-[15rem] py-8 justify-between gap-12 items-center">
          <div className="flex flex-col h-[90%] w-full lg:w-[60%] bg-white text-center">
            <h2 className="text-3xl mb-8">
              About us : Resturant
            </h2>
            <p className="text-start text-sm font-light">With a motive of gifting people the true delight of vegan food, Divine Dumplings was formed as a part of the chains of restaurants under Divine Hospitalities. It started functioning since September, 2022 with its first outlet at Chatribari, Guwahati.
            <br>
            </br>
            <br>
            </br>

            Since its inception, it has been able to draw a lot of customers, especially the young urban crowd. With each passing day, we are getting close to our goal of acquainting all the people in the city with delectable dishes and refreshing beverages, all under the same roof. Our commercial operation is all about giving everyone the absolute dose of "divine delicacy," and we vow to continue doing so as long as we are able to keep the pot boiling.</p>
          </div>
          <div className="flex h-[90%] w-[80%] lg:w-[38%] bg-gray-100">
            <img load="lazy" src={aboutbg2} alt="" />
          </div>
        </div>

        
      </div>

      <Footer />
    </div>
  );
}

export default AboutResturant;
