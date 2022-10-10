import React from "react";
import "./gallerySection.css";
import koreanNoodles from "../img/KoreanStyleNoodles.jpg";
import chickenSauced from "../img/chickenSauceFried.jpg";
import steamedMomo from "../img/steamed-momo.jpg";
import pastry from "../img/pastry.jpg";
import shake from "../img/shake.jpg";


function GallerySection() {
  return (
    <div className="gallerySection flex flex-col z-10 bg-white">
      <div className="backgroundGallery flex flex-col w-full items-around text-center h-[400px] text-white">
        <h2 className="galleryHeadline font-semibold flex justify-center items-center pt-[9rem] text-4xl">
          Gallery
        </h2>
        <span className="flex justify-center items-center pb-[9rem] font-light text-xs">
          HAVE A GLANCE AT US
        </span>
      </div>
      <div className="theGallery flex flex-col lg:flex-row w-full px-12 lg:px-[15rem] py-8 justify-between gap-0 lg:gap-12">
        <div className="photo flex flex-col w-full lg:w-[50%] justify-center items-center">
          <div className="flex self-center w-full h-full p-4">
            <img src={koreanNoodles} alt="korean-noodles" />
          </div>
        </div>
        <div className="photoGrid grid-container w-full lg:w-[50%] p-4">
          <div className="grid-item1 w-full h-full bg-gray-200">
            <img src={chickenSauced} alt="chicken-sauced" />
          </div>
          <div className="grid-item2 w-full h-full bg-gray-200">
            <img src={steamedMomo} alt="steamed momo" />
          </div>
          <div className="grid-item3 w-full h-full bg-gray-200">
            <img src={pastry} alt="pastry" />
          </div>
          <div className="grid-item4 w-full h-full bg-gray-200">
            <img src={shake} alt="shake" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
