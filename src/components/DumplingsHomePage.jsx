import React, { useEffect, useState } from "react";
import "./dumplings.css";
import heroimg1 from "../img/heroimg1.jpg";
import heroimg2 from "../img/heroimg2.jpg";
import NavDumplings from "./NavDumplings";
import LandingTxtBtn1 from "./LandingTxtBtn1";
import HeroSection2 from "./HeroSection2";
import Footer from "./Footer";
import ChefRecommend from './ChefRecommend';
import PopularDishes from './PopularDishes';
import GallerySection from "./GallerySection";
import ChefsSection from "./ChefsSection";
// import LandingTxtBtn2 from "./LandingTxtBtn2";

function Dumplings() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [allImages, setAllImages] = useState([heroimg1, heroimg2]);
  // const [textBtn, setTextBtn] = useState()

  useEffect(() => {
    setInterval(() => {
      setSelectedImg((selectedImg) => (selectedImg < 1 ? selectedImg + 1 : 0));
    }, 4000);

    window.scrollTo({
      top: 0
    });
  }, []);

  return (
    <>
      {/* Navbar Here for Divine Dumplings */}
      <NavDumplings />

      {/* Hero Section Here For Divine Dumplings */}
      <div
        className="heroSection"
        style={{ position: "relative", zIndex: "555" }}
      >
        <LandingTxtBtn1 />

        <img
          src={allImages[selectedImg]}
          alt="heroImages"
          className="carousel"
        />

        <button
          className="arrow leftArrow"
          onClick={() => {
            if (selectedImg > 0) {
              setSelectedImg(selectedImg - 1);
              // <LandingTxtBtn1 />
            } else if (selectedImg === 0) {
              setSelectedImg(1);
              // <LandingTxtBtn2 />
            }
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.3666 55.3L36.1 40L51.3666 24.7L46.6666 20L26.6666 40L46.6666 60L51.3666 55.3Z"
              fill="white"
            />
          </svg>
        </button>

        <button
          className="arrow rightArrow"
          onClick={() => {
            if (selectedImg < allImages.length - 1) {
              setSelectedImg(selectedImg + 1);
            } else if (selectedImg === allImages.length - 1) {
              setSelectedImg(0);
            }
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.6333 55.3L43.9 40L28.6333 24.7L33.3333 20L53.3333 40L33.3333 60L28.6333 55.3Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {/* Hero Section Closed */}
      

      {/* Hero Section 2 Starts */}
      <HeroSection2 />

      {/* Chef Recommendation Starts */}
      <ChefRecommend />

      {/* Popular Dishes Starts */}
      <PopularDishes />

      {/* Gallery Starts */}
      <GallerySection />

      {/* Chef List Starts */}
      <ChefsSection />

      {/* Footer Here and Page Ends */}
      <Footer />
    </>
  );
}

export default Dumplings;
