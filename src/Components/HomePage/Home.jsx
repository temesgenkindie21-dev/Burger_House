import React from "react";
import HomeImage from "../../assets/img/homeImage.png";
import {
  RiContrastDropLine,
  RiDropFill,
  RiDropLine,
  RiEvernoteLine,
  RiKnifeBloodFill,
  RiLeafFill,
  RiLeafLine,
  RiOpenSourceFill,
  RiRestaurant2Fill,
  RiRestaurantFill,
  RiTentFill,
} from "@remixicon/react";
import "./home.css";
function Home() {
  return (
    <>
      <div className={`flex flex-col md:flex-row md:justify-center gap-10 pt-16 pb-4 md:pt-20 `} id="home">
        <div className="animate_moving">
          <img
            src={HomeImage}
            alt=""
            className="w-60 mx-auto md:basis-1/2 lg:basis-2/5 "
          />
        </div>
        <div className="md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="uppercase mx-auto text-center text-4xl lg:text-6xl font-bold font-[Oswald] md:text-start">
            Happy Tummy with tasty burgers.
          </h1>
          <div className="border border-1 border-yellow-500 w-20 h-[2px] mx-auto my-5 md:mx-0"></div>
          <div className="text-center md:text-start md:mb-8">
            <p className="text-white text-xs leading-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              alias culpa corporis. Debitis soluta error asperiores! Voluptas
              autem, commodi sapiente totam, dolor culpa adipisci nesciunt rerum
              molestiae facere officiis aliquid.
            </p>
          </div>

          <div className="text-base flex gap-4 justify-center items-center md:gap-20 md:justify-start md:mb-8">
            <div className="cursor-pointer">
              < RiRestaurantFill color="#f0b100" size={36} />
              <br />
              <h1>Delicious</h1>
            </div>
            <div className="cursor-pointer">
              <RiContrastDropLine color="#f0b100" size={36} />
              <br />
              <h1>Organic</h1>
            </div>
            <div className="cursor-pointer">
              <RiLeafFill color="#f0b100" size={36} />
              <br />
              <h1>Fresh</h1>
            </div>
          </div>
          <div>
            <button className="p-4 bg-yellow-500 rounded-md flex mx-auto md:justify-start md:mx-0 my-3 px-8 py-3 hover:opacity-75">
              <a href="#" className="capitalize text-black">
                learn more
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home