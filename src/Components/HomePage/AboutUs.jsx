import { RiCheckLine } from "@remixicon/react";
import React from "react";
import About from "../../assets/img/about.jpg";

function AboutUs() {
  return (
    <div className="max-w-screen-lg px-[12px] mx-auto flex flex-col gap-10 md:flex-row lg:h-screen pt-16" id="aboutus">
      <div className="md:basis-1/2">
        <img src={About} alt="" className="rounded-lg " />
      </div>
      <div className="md:basis-1/2">
        <h1 className="uppercase text-3xl font-bold lg:text-6xl font-[oswald]">
          find food and drinks, all-in-one place for your best taste.
        </h1>
        <div className="w-40 h-[2px] bg-yellow-500 my-5"></div>
        <p className="text-sm text-gray-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
          ab, suscipit natus ducimus esse nam voluptates vel dolorum maxime
          magnam. Officiis maiores voluptatibus explicabo voluptas, ut mollitia
          inventore placeat!
        </p>
        <ul className="capitalize grid grid-cols-2 my-5 space-y-1">
          <li className="flex text-xs">
            <RiCheckLine color="#f0b100" size={20} /> best price
          </li>
          <li className="flex text-xs text-gray-300">
            <RiCheckLine color="#f0b100" size={20} />
            fresh gradient
          </li>
          <li className="flex text-xs text-gray-300">
            <RiCheckLine color="#f0b100" size={20} />
            best service
          </li>
          <li className="flex text-xs text-gray-300">
            <RiCheckLine color="#f0b100" size={20} />
            health protocol
          </li>
        </ul>
        <a
          href=""
          className="capitalize text-sm text-black bg-yellow-500 py-2 px-8 cursor-pointer rounded-md hover:opacity-75 "
        >
          about us
        </a>
      </div>
    </div>
  );
}

export default AboutUs