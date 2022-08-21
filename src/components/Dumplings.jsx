import React from "react";
import "./dumplings.css";
import { useState } from "react";
import heroimg1 from "../img/heroimg1.jpg";
import heroimg2 from "../img/heroimg2.png";
import Nav from "./Nav";

function Dumplings() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [allImages, setAllImages] = useState([heroimg1, heroimg2]);

  return (
    <>
      <Nav />
      <div
        className="heroSection"
        style={{ position: "relative", zIndex: "888" }}
      >
        <img src={allImages[selectedImg]} alt="" className="carousel" />

        <button className="arrow leftArrow"
          onClick={() => {
            if (selectedImg > 0) {
              setSelectedImg(selectedImg - 1);
            }
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 60L30 40L50 20"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button className="arrow rightArrow"
        onClick={()=> {
          
        }}>

        </button>
      </div>
    </>
  );
}

export default Dumplings;
