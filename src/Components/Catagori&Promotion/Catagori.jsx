import React from "react";
import Burger1 from "../../assets/img/burger-1.png";
import Snack1 from "../../assets/img/snack-1.png";
import Beverage1 from "../../assets/img/beverage-2.png";

function Catagori() {
  const Data1 = [
    {
      title: "Food",
      img: Burger1,
      BG: "bg-yellow-500",
      link: "text-black",
    },
    {
      title: "Snack",
      img: Snack1,
      BG: "bg-red-500",
      link: "text-yellow-500",
    },
    {
      title: "Beverage",
      img: Beverage1,
      BG: "bg-green-700",
      link: "text-yellow-500",
    },
  ];
  return (
    <div
        id="catagory"
        className="max-w-screen-lg mx-auto px-[12px] grid grid-cols-1 md:grid-cols-3 gap-5 my-3 dark:bg-zinc-700 dark:text-white p-3"
      >
        {Data1.map((value) => {
          return (
            <div
              className={` flex flex-row ${value.BG} rounded-lg overflow-hidden py-3 `}
            >
              <div className=" basis-1/3 relative ">
                <img
                  src={value.img}
                  alt=""
                  className="absolute w-28 -bottom-4 -left-4"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold uppercase">{value.title}</h1>
                <p className="space-y-10 text-gray-300 text-sm">
                  Lorem ipsum dolor sit.
                </p>
                <a href="" className={`${value.link} cursor-pointer`}>
                  Buy online
                </a>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default Catagori;
