import React from "react";
import "./popularDishes.css";

function PopularDishes() {
  return (
    <div className="popularDishes flex flex-col z-10 bg-white">
      <div className="backgroundPopular flex flex-col w-full items-around text-center h-[400px] text-white">
        <h2 className="popularHeadline font-semibold flex justify-center items-center pt-[9rem] text-4xl">
          Popular Dishes
        </h2>
        <span className="flex justify-center items-center pb-[9rem] font-light text-sm">
          OUR MOST POPULAR MENU
        </span>
      </div>

      <div className="popularMenu flex flex-col lg:flex-row w-full px-12 lg:px-[15rem] py-8 justify-between gap-0 lg:gap-12">
        <div className="menu flex flex-col w-full lg:w-[50%]">
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Chinese Bhel Tangy Tangra
              </span>
              <span className="dDetail font-light text-xs">
                Chinese / Tangra / Bhel
              </span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹89
            </div>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Chilli Cheese Stuffed Mushroom
              </span>
              <span className="dDetail font-light text-xs">
                Chilli / Cheese / Mushroom
              </span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹109
            </div>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Exotic Veg in Oyster Sauce
              </span>
              <span className="dDetail font-light text-xs">
                Exotic / Oyster / Sauce
              </span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹99
            </div>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Shanghai Veg Spring Roll
              </span>
              <span className="dDetail font-light text-xs">
                Chinese / Veg / Roll
              </span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹69
            </div>
          </div>
        </div>
        <div className="menu flex flex-col w-full lg:w-[50%]">
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Paneer Tikka Roll
              </span>
              <span className="dDetail font-light text-xs">Paneer / Roll</span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹89
            </div>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Veg Tandoori Momo
              </span>
              <span className="dDetail font-light text-xs">
                Veg / Tandoori / Momo
              </span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹79
            </div>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Corn Cheese Chilli Momo
              </span>
              <span className="dDetail font-light text-xs">
                Corn / Chilli / Momo
              </span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹69
            </div>
          </div>
          <div className="flex justify-between w-full my-4">
            <div className="dishNames bg-white flex flex-col py-2">
              <span className="dName font-medium text-sm py-1">
                Steamed Cheese Momo
              </span>
              <span className="dDetail font-light text-xs">Cheese / Momo</span>
            </div>
            <div className="price text-green-600 bg-white font-bold py-3 text-lg">
              ₹49
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDishes;
