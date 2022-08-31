import React from "react";
import "./chefsSection.css";
import chefReccBg from '../img/chefReccBg.jpg'

function ChefsSection() {
  return (
    <div className="chefsSection flex flex-col z-10 bg-white">
      <div className="backgroundChefs flex flex-col w-full items-around text-center h-[400px] text-white">
        <h2 className="chefsHeadline font-semibold flex justify-center items-center pt-[9rem] text-4xl">
          Our Chefs
        </h2>
        <span className="flex justify-center items-center pb-[9rem] font-light text-xs">
          WHO IS COOKING YOUR FOOD
        </span>
      </div>
      <div className="theChefs flex flex-col lg:flex-row w-full px-15 lg:px-[15rem] py-16 justify-center lg:justify-between gap-12">
        <div className="w-[80%] lg:w-[30%] h-[35rem] lg:h-96 bg-gray-200 flex flex-col self-center">
          <img load="lazy" src={chefReccBg} alt="" className="w-full h-4/6 lg:h-3/5 bg-black z-40" />
          <div className="flex flex-col h-2/6 lg:h-2/5 px-8 py-10 lg:py-4 z-50">
            <h4 className="font-semibold">Mark Anthony</h4>
            <span className="font-thin text-xs">Head Chef</span>
            <p className="mt-3 text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor sociis natoque
            </p>
          </div>
        </div>
        <div className="w-[80%] lg:w-[30%] h-[35rem] lg:h-96 bg-gray-200 flex flex-col self-center">
          <img load="lazy" src={chefReccBg} alt="" className="w-full h-4/6 lg:h-3/5 bg-black z-40" />
          <div className="flex flex-col h-2/6 lg:h-2/5 px-8 py-10 lg:py-4 z-50">
            <h4 className="font-semibold">Mark Anthony</h4>
            <span className="font-thin text-xs">Head Chef</span>
            <p className="mt-3 text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor sociis natoque
            </p>
          </div>
        </div>
        <div className="w-[80%] lg:w-[30%] h-[35rem] lg:h-96 bg-gray-200 flex flex-col self-center">
          <img src={chefReccBg} alt="" className="w-full h-3/5 bg-bla h-4/6clg:k z-40" />
          <div className="flex flex-col h-2/6 lg:h-2/5 px-8 py-10 lg:py-4 z-50">
            <h4 className="font-semibold">Mark Anthony</h4>
            <span className="font-thin text-xs">Head Chef</span>
            <p className="mt-3 text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor sociis natoque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefsSection;
