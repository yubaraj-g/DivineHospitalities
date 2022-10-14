import React from "react";
import "./gallerySection.css";
import chocoMomo from "../img/choco-momo.jpg";
import lemonIcedChai from "../img/lemon-iced-chai.jpg";
import steamedMomo from "../img/steamed-momo.jpg";
import vegCheeseBurger from "../img/veg-cheese-burger.jpg";
import chocolateShake from "../img/chocolate-shake.jpg";


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
            <img src={chocoMomo} alt="chocolate momo" />
          </div>
        </div>
        <div className="photoGrid grid-container w-full lg:w-[50%] p-4">
          <div className="grid-item1 w-full h-full bg-gray-200">
            <img src={lemonIcedChai} alt="lemon iced chai" />
          </div>
          <div className="grid-item2 w-full h-full bg-gray-200">
            <img src={steamedMomo} alt="steamed momo" />
          </div>
          <div className="grid-item3 w-full h-full bg-gray-200">
            <img src={vegCheeseBurger} alt="veg cheese burger" />
          </div>
          <div className="grid-item4 w-full h-full bg-gray-200">
            <img src={chocolateShake} alt="chocolate shake" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
