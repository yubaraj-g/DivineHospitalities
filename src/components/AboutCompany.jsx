import React, { useEffect } from "react";
import "./aboutPage.css";
import NavDumplings from "./NavDumplings";
import Footer from "./Footer";
import aboutbg2 from '../img/aboutBg2.jpg'

function AboutCompany() {
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
            ABOUT OUR COMPANY
          </span>
        </div>

        <div className="w-full h-[30rem] bg-white flex px-[15rem] py-8 justify-between gap-12 items-center">
          <div className="flex flex-col h-[90%] w-[60%] bg-white text-center">
            <h2 className="text-3xl mb-8">About us : Company</h2>
            <p className="text-start text-sm font-light">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
          <div className="flex h-[90%] w-[38%] bg-gray-100">
            <img load="lazy" src={aboutbg2} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutCompany;
