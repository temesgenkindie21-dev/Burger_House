import {
  RiPagesFill,
  RiPlaneFill,
  RiPlaneLine,
  RiTelegram2Fill,
  RiTelegram2Line,
} from "@remixicon/react";
import React from "react";

function Contact() {
  return (
    <div className="bg-yellow-400" id="contact">
      <div className=" flex flex-col md:flex-row max-w-screen-lg mx-auto px-[12px] py-16">
        <div className="space-y-4 md:basis-1/2 ">
          <h1 className="uppercase font-bold text-3xl  text-black ">
            get excusive update
          </h1>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:flex-1 mt-4 md:basis-1/2">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address"
            className="bg-white p-2 text-black rounded-lg outline-none md:w-full"
          />

          <div className="text-white flex gap-2 justify-center bg-black rounded-lg p-2 hover:opacity-75">
            <RiTelegram2Fill />
            <a href="">Subscribe</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact