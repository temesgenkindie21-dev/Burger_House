import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/element/css/autoplay";

import Review1 from "../../assets/img/review-1.jpg";
import Review2 from "../../assets/img/review-2.jpg";
import Review3 from "../../assets/img/review-3.jpg";
import Review4 from "../../assets/img/review-4.jpg";
import Review5 from "../../assets/img/review-5.jpg";
import {
  RiDoubleQuotesL,
  RiDoubleQuotesR,
  RiQuoteText,
} from "@remixicon/react";

function Section5Page() {
  const review = [
    {
      img: Review1,
    },
    {
      img: Review2,
    },
    {
      img: Review3,
    },
    {
      img: Review4,
    },
    {
      img: Review5,
    },
  ];
  return (
    <div
      className="bg-[#010d78] lg:h-screen pt-16 dark:bg-zinc-700 dark:text-white"
      id="review"
    >
      <div className="max-w-screen-lg mx-auto px-[12px]  py-10 ">
        <div>
          <h2 className="uppercase font-bold text-3xl lg:text-6xl text-center">
            customer review
          </h2>
          <div className="w-40 h-[2px] bg-yellow-500 mx-auto my-5"></div>
          <p className="text-sm text-gray-300 text-center mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti
            vel quisquam asperiores quod quo.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            720: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }}
        >
          {review.map((value, index) => {
            return (
              <SwiperSlide>
                <div key={index}>
                  <div className="mx-auto my-5 py-5 px-[14px] bg-[#010a5e] h-48 dark:bg-zinc-900 dark:text-white">
                    <p className="text-sm text-gray-300 mb-10 mx-auto">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus officiis nam laudantium impedit, cupiditate itaque
                      ipsum nulla.
                    </p>
                    <div className="flex flex-row  gap-3">
                      <div>
                        <img
                          className="w-12 h-12 rounded-full"
                          src={value.img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="uppercase">john dio</p>
                        <p className="capitalization text-sm text-gray-300">
                          designer
                        </p>
                      </div>
                      <div className="ml-auto">
                        <RiDoubleQuotesR size={32} color="#f0b100" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Section5Page;
