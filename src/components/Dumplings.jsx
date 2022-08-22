import React from "react";
import "./dumplings.css";
import { useState } from "react";
import heroimg1 from "../img/heroimg1.jpg";
import heroimg2 from "../img/heroimg2.png";
import NavDumplings from "./NavDumplings";

function Dumplings() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [allImages, setAllImages] = useState([heroimg1, heroimg2]);

  return (
    <>
      <NavDumplings />

      <div
        className="heroSection"
        style={{ position: "relative", zIndex: "888" }}
      >
        <img src={allImages[selectedImg]} alt="" className="carousel" />

        <button
          className="arrow leftArrow"
          onClick={() => {
            if (selectedImg > 0) {
              setSelectedImg(selectedImg - 1);
            }
            else if (selectedImg === 0) {
              setSelectedImg(allImages.length - 1);
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
            }
            else if (selectedImg === allImages.length - 1) {
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
    </>
  );
}

export default Dumplings;
