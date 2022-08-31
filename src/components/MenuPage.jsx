import React, { useEffect } from "react";
import Footer from "./Footer";
import "./menuPage.css";
import NavDumplings from "./NavDumplings";
import menupdf from '../other/MENU_A4_DIVINE1.pdf'

function MenuPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  })

  return (
    <>
      <NavDumplings />

      <div className="menuPage flex flex-col z-10 bg-white">
        <div className="backgroundMenu flex flex-col w-full items-around text-center h-[400px] text-white">
          <h2 className="menuHeadline font-semibold flex justify-center items-center pt-[9rem] text-4xl">
            Menu
          </h2>
          <span className="flex justify-center items-center pb-[9rem] font-light text-sm">
            OUR MAIN MENU HERE
          </span>
        </div>

        <div className="popularMenu flex flex-col lg:flex-row w-full px-12 lg:px-[15rem] py-8 justify-between gap-12">
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
                  Honest Chilly Potato
                </span>
                <span className="dDetail font-light text-xs">
                  Chilly / Potato / Spicy
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹89
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Crispy Chilli Baby Corn
                </span>
                <span className="dDetail font-light text-xs">
                  Chilly / Spicy / Corn
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹99
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
                  Veg Manchurian
                </span>
                <span className="dDetail font-light text-xs">
                  Veg / Manchurian
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹79
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Exotic Veg in Schezwan Sauce
                </span>
                <span className="dDetail font-light text-xs">
                  Exotic / Veg / Sauce
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹99
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
                  Exotic Veg in Black Pepper Sauce
                </span>
                <span className="dDetail font-light text-xs">
                  Exotic / Black Pepper / Veg
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹99
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Chilli Paneer
                </span>
                <span className="dDetail font-light text-xs">
                  Chilli / Paneer / Spicy
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹109
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Paneer in Schezwan Sauce
                </span>
                <span className="dDetail font-light text-xs">
                  Paneer / Schezwan / Sauce
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹109
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Shanghai Veg Spring Roll
                </span>
                <span className="dDetail font-light text-xs">
                  Shanghai / Veg / Roll
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹69
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Veg Spring Roll
                </span>
                <span className="dDetail font-light text-xs">Veg / Roll</span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹79
              </div>
            </div>
          </div>
          <div className="menu flex flex-col w-full lg:w-[50%]">
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">Veg Roll</span>
                <span className="dDetail font-light text-xs">Veg / Roll</span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹69
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Aloo Chatpata Roll
                </span>
                <span className="dDetail font-light text-xs">
                  Potato / Roll / Spicy
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹69
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Paneer Tikka Roll
                </span>
                <span className="dDetail font-light text-xs">
                  Paneer / Roll
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹89
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Cheese Paneer Roll
                </span>
                <span className="dDetail font-light text-xs">
                  Paneer / Cheese / Roll
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹89
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Steamed Veg Momo
                </span>
                <span className="dDetail font-light text-xs">Veg / Momo</span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹40
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
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Steamed Corn Cheese Momo
                </span>
                <span className="dDetail font-light text-xs">
                  Corn / Cheese / Momo
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹69
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
                  Cheese Tandoori Momo
                </span>
                <span className="dDetail font-light text-xs">
                  Cheese / Tandoori / Momo
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹89
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Veg Chilli Momo
                </span>
                <span className="dDetail font-light text-xs">
                  Veg / Chilli / Momo
                </span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹49
              </div>
            </div>
            <div className="flex justify-between w-full my-4">
              <div className="dishNames bg-white flex flex-col py-2">
                <span className="dName font-medium text-sm py-1">
                  Veg Fried Rice
                </span>
                <span className="dDetail font-light text-xs">Veg / Rice</span>
              </div>
              <div className="price text-green-600 bg-white font-bold py-3 text-lg">
                ₹59
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full bg-white h-16 justify-center pb-6">
        <div className="flex w-full items-center justify-center">
          View The{" "}
          <a href={menupdf} className="ml-1 text-purple-500 cursor-pointer font-semibold hover:text-green-500" download='menu-1.pdf'>
            Full Menu
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MenuPage;
