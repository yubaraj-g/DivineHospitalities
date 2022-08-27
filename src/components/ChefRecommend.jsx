import React from "react";
import dish1 from "../img/vegSalad.jpg";
import "./chefRecommend.css";

function ChefRecommend() {
  return (
    <div className="chefRecc flex flex-col z-10 bg-white">
      <div className="backgroundChef flex flex-col w-full items-around text-center h-[400px] text-white">
        <h2 className="headingChef flex justify-center items-center pt-[9rem]">
          Chef Recommended
        </h2>
        <span className="flex justify-center items-center pb-[9rem] font-light text-sm">
          SIGNATURE DISHES RECOMMENDED BY OUR CHEF
        </span>
      </div>

      <div className="reccDishes w-full flex flex-col px-[15rem]">
        <div className="divDish1 flex justify-around">
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Mixed Veg with Sliced Bread
                </span>
                <span className="font-light text-xs">
                  Beef / Olive Oil / Salt
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                $28
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Mixed Veg with Sliced Bread
                </span>
                <span className="font-light text-xs">
                  Beef / Olive Oil / Salt
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                $28
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Mixed Veg with Sliced Bread
                </span>
                <span className="font-light text-xs">
                  Beef / Olive Oil / Salt
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                $28
              </div>
            </div>
          </div>
        </div>

        <div className="divDish2 flex justify-around">
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Mixed Veg with Sliced Bread
                </span>
                <span className="font-light text-xs">
                  Beef / Olive Oil / Salt
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                $28
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Mixed Veg with Sliced Bread
                </span>
                <span className="font-light text-xs">
                  Beef / Olive Oil / Salt
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                $28
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Mixed Veg with Sliced Bread
                </span>
                <span className="font-light text-xs">
                  Beef / Olive Oil / Salt
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                $28
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefRecommend;
