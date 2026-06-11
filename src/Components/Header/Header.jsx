import React, { useEffect, useState } from "react";
import "@remixicon/react";
import {
  RiArrowUpCircleFill,
  RiCloseLine,
  RiMenu2Line,
  RiMoonLine,
  RiSunCloudyLine,
  RiSunFill,
} from "@remixicon/react";
import Link from "./Link";

function Header() {
  const [open, setOpen] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [active, setActive] = useState("home");
  const pages = ["Home", "About Us", "Menu", "Review", "Contact"];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` bg-[#010a5e] fixed top-0 left-0 z-50 w-full  `}>
      <div
        className={`relative h-14 flex justify-between items-center mx-auto font-bold  mx-auto px-[12px] ${isScrollDown ? "border-b-2 border-yellow-500" : "border-none"} ${open ? "border-none" : "border-yellow-500"}`}
      >
        <div
          className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[Oswald] ${open ? "hidden" : "block"}`}
        >
          BUR<span className="text-yellow-500">GER</span>
        </div>
        <div
          className={`absolute top-0 left-0 py-14 w-full  ${open ? "block" : "hidden"} md:block  md:ml-auto md:w-auto  md:static `}
        >
          <ul
            className={` flex flex-col md:flex-row text-center gap-5 font-[dmsans] bg-[#010a5e] pb-20 md:pb-0 border-b border-yellow-500 md:border-none  `}
          >
            {pages.map((value, index) => {
              return (
                <div key={index}>
                  <Link
                    pages={value}
                    active={active}
                    setActive={setActive}
                    setOpen={setOpen}
                  />
                </div>
              );
            })}
          </ul>

          <div
            className="absolute top-[1rem] right-0 md:hidden"
            onClick={() => {
              setOpen(false);
            }}
          >
            <RiCloseLine size={24} />
          </div>
        </div>
        <div className=" flex items-center gap-5 md:mx-5">
          <div
            onClick={() => {
              setDark(true);
            }}
            className={` cursor-pointer  ${open ? "hidden" : "block"} `}
          >
            <RiMoonLine size={20} />
          </div>
          <div
            onClick={() => {
              setDark(false);
            }}
            className={` cursor-pointer  ${open ? "hidden" : "block"}`}
          >
            {/*  */}
          </div>
          <div
            id="menuT"
            className={`cursor-pointer ${open ? "hidden" : "block"} md:hidden`}
            onClick={() => {
              setOpen(true);
            }}
          >
            <RiMenu2Line size={24} />
          </div>
        </div>
      </div>
      <div
        className={`fixed right-4 ${isScrollDown ? "bottom-4" : "-bottom-1/2"}`}
      >
        <a href="#">
          <RiArrowUpCircleFill size={28} color="#f0b100" />
        </a>
      </div>
    </div>
  );
}

export default Header;
