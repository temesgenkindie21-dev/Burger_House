import React, { useState } from "react";
import Data from "../MenuData/menuData";
function Menu() {
  const [click, setClick] = useState("all");
  const filterData =
    click === "all" ? Data : Data.filter((item) => item.catagory === click);

  return (
    <div
      className="max-w-screen-lg px-[12px] mx-auto pt-16 dark:bg-zinc-900 dark:text-white"
      id="menu"
    >
      <div>
        <div className="uppercase text-center font-bold text-3xl lg:text-6xl">
          our best menu
        </div>
        <div className="w-40 h-[2px] bg-yellow-500 mx-auto my-5"></div>
        <p className="text-sm text-gray-300 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam,
          vel sint pariatur aliquid quo.
        </p>
        <div className="my-5">
          <ul className="capitalize  text-sm flex flex-wrap justify-center  gap-3">
            <li
              onClick={() => {
                setClick("all");
              }}
              className={`py-3 px-8 text-center bg-[#010d78] mx-4 w-40 rounded-md hover:bg-yellow-500 hover:text-black ${click === "all" ? "bg-yellow-500 text-black dark:text-white dark:bg-yellow-500" : "bg-[#010d78] text-white dark:bg-zinc-700 dark:text-white"} `}
            >
              all
            </li>
            <li
              onClick={() => {
                setClick("food");
              }}
              className={`py-3 px-8 text-center bg-[#010d78] mx-4 w-40 rounded-md hover:bg-yellow-500 hover:text-black ${click === "food" ? "bg-yellow-500 text-black dark:text-white dark:bg-yellow-500" : "bg-[#010d78] text-white dark:bg-zinc-700 dark:text-white"} `}
            >
              food
            </li>
            <li
              onClick={() => {
                setClick("snack");
              }}
              className={`py-3 px-8 text-center bg-[#010d78] mx-4 w-40 rounded-md hover:bg-yellow-500 hover:text-black ${click === "snack" ? "bg-yellow-500 text-black dark:text-white dark:bg-yellow-500" : "bg-[#010d78] text-white dark:bg-zinc-700 dark:text-white"} `}
            >
              snack
            </li>
            <li
              onClick={() => {
                setClick("beverage");
              }}
              className={`py-3 px-8 text-center bg-[#010d78] mx-4 w-40 rounded-md hover:bg-yellow-500 hover:text-black ${click === "beverage" ? "bg-yellow-500 text-black dark:text-white dark:bg-yellow-500" : "bg-[#010d78] text-white dark:bg-zinc-700 dark:text-white"} `}
            >
              beverage
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {filterData.map((value, index) => {
          return (
            <div key={index}>
              <ul>
                <li className={`${value.catagory}`}>
                  <div className="h-60 grid place-items-center rounded-3xl bg-[#010d78] hover:bg-yellow-500 ease-linear duration-200 md:h-72 lg:h-40 dark:bg-zinc-700 dark:text-white">
                    <img
                      src={value.food}
                      alt=""
                      className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                    />
                  </div>
                  <div className="pt-5">
                    <div className="mb-2">
                      <h4 className="uppercase font-bold text-3xl lg:text-3xl font-[oswald]">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia molestias eligendi sequi voluptates
                        voluptatibus!
                      </p>
                    </div>
                    <p className="text-yellow-500">$42.00</p>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
