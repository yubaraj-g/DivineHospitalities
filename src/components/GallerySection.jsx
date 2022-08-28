import React from "react";
import "./gallerySection.css";
import koreanNoodles from "../img/KoreanStyleNoodles.jpg";
import chickenSauced from "../img/chickenSauceFried.jpg"

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
      <div className="theGallery flex w-full px-[15rem] py-8 justify-between gap-12">
        <div className="photo flex flex-col w-[50%] justify-center items-center">
          <div className="flex self-center w-full h-full p-4">
            <img src={koreanNoodles} alt="" />
          </div>
        </div>
        <div className="photoGrid grid-container w-[50%] p-4">
          <div className="grid-item w-full h-full bg-gray-200">
            <img src={chickenSauced} alt="" />
          </div>
          <div className="grid-item w-full h-full bg-gray-200">
            <img src={chickenSauced} alt="" />
          </div>
          <div className="grid-item w-full h-full bg-gray-200">
            <img src={chickenSauced} alt="" />
          </div>
          <div className="grid-item w-full h-full bg-gray-200">
            <img src={chickenSauced} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;