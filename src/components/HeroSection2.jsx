import React from "react";
import HeroImage2 from "../img/heroImage2.jpg";

function HeroSection2() {
  return (
    <div className="hero2 bg-white w-screen lg:w-screen flex flex-col lg:flex-row" id="heroSection2">
      <div className="leftImg">
        <img load="lazy" src={HeroImage2} alt="" width={"400px"} />
      </div>

      <div className="rightTexts">
        <h1 className="heroHeading text-base lg:text-xl">
          WE ARE SPECIALIZED IN SPICY MODERN FUSION FOOD
        </h1>
        <h6>THE ART OF COOKING</h6>
        {/* <div className="line"></div> */}

        <div className="paragraph">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Morbi leo risus, porta ac consectetur ac, vesti bulum at eros. Aenean lacinia bibendum nulla sed consec us eget urna mollis ornare vel euleo. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient monte siculus mus.Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <p className="signature">John Bennett</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
