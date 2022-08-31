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
            <img load="lazy" src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Chinese Bhel Tangy Tangra
                </span>
                <span className="font-light text-xs">
                  Chinese / Tangra / Bhel
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                ₹89
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img load="lazy" src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Chilli Cheese Stuffed Mushroom
                </span>
                <span className="font-light text-xs">
                  Chilli / Cheese / Mushroom
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                ₹109
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img load="lazy" src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Exotic Veg in Oyster Sauce
                </span>
                <span className="font-light text-xs">
                  Exotic / Oyster / Sauce
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                ₹99
              </div>
            </div>
          </div>
        </div>

        <div className="divDish2 flex justify-around">
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img load="lazy" src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Shanghai Veg Spring Roll
                </span>
                <span className="font-light text-xs">Chinese / Veg / Roll</span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                ₹69
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img load="lazy" src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Paneer Tikka Roll
                </span>
                <span className="font-light text-xs">Paneer / Roll</span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                ₹89
              </div>
            </div>
          </div>
          <div className="w-[250px] bg-white flex flex-col hover:shadow-2xl hover:duration-100">
            <img load="lazy" src={dish1} alt="" />
            <div className="flex justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-sm py-1">
                  Veg Tandoori Momo
                </span>
                <span className="font-light text-xs">
                  Veg / Tandoori / Momo
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-lg">
                ₹79
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefRecommend;
