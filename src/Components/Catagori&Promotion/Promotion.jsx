import React from 'react'
import Promo1 from "../../assets/img/promo-1.png";
import Promo2 from "../../assets/img/promo-2.png";
import "./promotion.css"
function Promotion() {
    const Data2 = [
    {
      img: Promo1,
    },
    {
      img: Promo2,
    },
  ];
  return (
    <div
        id="promo"
        className="max-w-screen-lg mx-auto px-[12px] grid grid-cols-1 lg:grid-cols-2 gap-5 my-3 mt-10 "
      >
        {Data2.map((item) => {
          return (
            <div className="mx-auto px-[12px] bg-[#010d78] rounded-md flex flex-col md:flex-row lg:flex-row-reverse ">
              <div className="w-40 mx-auto animate_movingy">
                <img src={item.img} alt="" className="basis-1/3 w-full py-5" />
              </div>
              <div className="space-y-2 py-5 basis-2/3">
                <h2 className="text-yellow-500 text-xs ">Payday promo</h2>
                <h1 className="uppercase text-xl font-bold space-y-5">
                  Get a 10% Discount on payday week
                </h1>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium aperiam dolorum odit! Porro quod eligendi aut,
                  accusamus placeat dolor repudiandae praesentium quas
                  laboriosam? Voluptatem, commodi autem aperiam deleniti minus
                  vero!
                </p>
                <a
                  href=""
                  className="capitalize text-yellow-500 text-xs cursor-pointer"
                >
                  Buy online
                </a>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default Promotion