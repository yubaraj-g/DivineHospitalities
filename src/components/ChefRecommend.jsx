import React from "react";
// import dish1 from "../img/vegSalad.jpg";
import chocolateMomo from "../img/chocolate-momo.jpg";
import friedMomo from "../img/fried-momo.jpg";
import steamMomo from "../img/steam-momo.jpg";
import hakkaNoodles from "../img/veg-hakka-noodles.jpg";
import vegCheeseBurger from "../img/veg-cheese-burger.jpg";
import crispyVegMomo from "../img/vegTandooriMomo.jpg";

import "./chefRecommend.css";

function ChefRecommend() {
  return (
    <div className="chefRecc flex flex-col z-10 bg-white">
      <div className="backgroundChef flex flex-col w-full items-around text-center h-[400px] text-white">
        <h2 className="headingChef flex justify-center items-center pt-[9rem] text-4xl lg:text-5xl">
          Chef Recommended
        </h2>
        <span className="flex justify-center items-center pb-[9rem] font-light text-sm px-8">
          SIGNATURE DISHES RECOMMENDED BY OUR CHEF
        </span>
      </div>

      <div className="reccDishes w-full flex flex-col px-12 lg:px-[15rem]">
        <div className="divDish1 flex flex-col lg:flex-row justify-around">
          <div className="dishDiv lg:w-[250px] bg-white flex flex-col hover:shadow-lg hover:duration-100">
            <img load="lazy" src={friedMomo} alt="chinese-bhel-tangy-tangra" className="w-full" />
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-lg lg:text-sm py-1">
                  Fried Momo
                </span>
                <span className="font-light text-md lg:text-xs">
                  Momo / Fried / Veg
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-2xl lg:text-lg">
                ₹99
              </div>
            </div>
          </div>
          <div className="dishDiv lg:w-[250px] bg-white flex flex-col hover:shadow-lg hover:duration-100">
            <img load="lazy" src={chocolateMomo} alt="chilli-cheese-stuffed-mushroom" className="w-full" />
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-lg lg:text-sm py-1">
                  Chocolate Momo
                </span>
                <span className="font-light text-md lg:text-xs">
                  Momo / Chocolate / Veg
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-2xl lg:text-lg">
                ₹49
              </div>
            </div>
          </div>
          <div className="dishDiv lg:w-[250px] bg-white flex flex-col hover:shadow-lg hover:duration-100">
            <img load="lazy" src={steamMomo} alt="exotic-veg-oyster-sauce" className="w-full" />
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-lg lg:text-sm py-1">
                  Steam Momo
                </span>
                <span className="font-light text-md lg:text-xs">
                  Momo / Steam / Veg
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-2xl lg:text-lg">
                ₹40
              </div>
            </div>
          </div>
        </div>

        <div className="divDish2 flex flex-col lg:flex-row justify-around">
          <div className="dishDiv w-full lg:w-[250px] bg-white flex flex-col hover:shadow-lg hover:duration-100">
            <img load="lazy" src={hakkaNoodles} alt="shanghai-veg-spring-roll" />
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-lg lg:text-sm py-1">
                  Veg Hakka Noodles
                </span>
                <span className="font-light text-md lg:text-xs">Chinese / Veg / Roll</span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-2xl lg:text-lg">
                ₹69
              </div>
            </div>
          </div>
          <div className="dishDiv w-full lg:w-[250px] bg-white flex flex-col hover:shadow-lg hover:duration-100">
            <img load="lazy" src={vegCheeseBurger} alt="paneer-tikka-roll" />
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-lg lg:text-sm py-1">
                  Veg Cheese Burger
                </span>
                <span className="font-light text-md lg:text-xs">Burger / Veg / Cheese</span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-2xl lg:text-lg">
                ₹69
              </div>
            </div>
          </div>
          <div className="dishDiv w-full lg:w-[250px] bg-white flex flex-col hover:shadow-lg hover:duration-100">
            <img load="lazy" src={crispyVegMomo} alt="veg-tandoori-momo" />
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="font-medium text-lg lg:text-sm py-1">
                  Crispy Veg Momo
                </span>
                <span className="font-light text-md lg:text-xs">
                  Momo / Veg / Crispy
                </span>
              </div>
              <div className="dishPrice text-green-600 bg-white font-bold py-3 text-2xl lg:text-lg">
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
