import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrow">
      <span className="leftArrow" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="rightArrow" onClick={prevSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;
