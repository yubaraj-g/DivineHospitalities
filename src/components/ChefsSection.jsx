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
      <div className="theChefs flex w-full px-[15rem] py-16 justify-between gap-12">
        <div className="w-[30%] h-96 bg-gray-200 flex flex-col">
          <img load="lazy" src={chefReccBg} alt="" className="w-full h-3/5 bg-black z-40" />
          <div className="flex flex-col h-2/5 px-8 py-4 z-50">
            <h4 className="font-semibold">Mark Anthony</h4>
            <span className="font-thin text-xs">Head Chef</span>
            <p className="mt-3 text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor sociis natoque
            </p>
          </div>
        </div>
        <div className="w-[30%] h-96 bg-gray-200 flex flex-col">
          <img load="lazy" src={chefReccBg} alt="" className="w-full h-3/5 bg-black z-40" />
          <div className="flex flex-col h-2/5 px-8 py-4 z-50">
            <h4 className="font-semibold">Mark Anthony</h4>
            <span className="font-thin text-xs">Head Chef</span>
            <p className="mt-3 text-xs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor sociis natoque
            </p>
          </div>
        </div>
        <div className="w-[30%] h-96 bg-gray-200 flex flex-col">
          <img src={chefReccBg} alt="" className="w-full h-3/5 bg-black z-40" />
          <div className="flex flex-col h-2/5 px-8 py-4 z-50">
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
