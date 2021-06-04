import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination]);

const Testimonials: React.FC = () => {
  const width = window.innerWidth;

  return (
    <div className="text-center bg-skye-blue">
      <h1
        className="text-3xl pt-12 pb-12 md:pb-28 text-royal-blue"
        style={{
          scrollSnapAlign: "start",
        }}
      >
        TESTIMONIALS
      </h1>

      <div className="pb-40 ">
        <Swiper
          slidesPerView={width > 640 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
        >
          <SwiperSlide className="flex justify-center">
            <div className="bg-stale-blue h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <h1 className="text-6xl font-blod self-start font-mono -mt-4">
                "
              </h1>
              <h2 className="text-2xl font-normal -mt-4">
                1 Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h2>
              <h1 className="text-2xl font-semibold mt-6">Lorem ipsum</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="bg-stale-blue h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <h1 className="text-6xl font-blod self-start font-mono -mt-4">
                "
              </h1>
              <h2 className="text-2xl font-normal -mt-4">
                2 Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h2>
              <h1 className="text-2xl font-semibold mt-6">Lorem ipsum</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="bg-stale-blue h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <h1 className="text-6xl font-blod self-start font-mono -mt-4">
                "
              </h1>
              <h2 className="text-2xl font-normal -mt-4">
                3 Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h2>
              <h1 className="text-2xl font-semibold mt-6">Lorem ipsum</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center pb-24">
        <h1 className="text-3xl text-royal-blue pb-14">FAQs</h1>
        <div>
          <div className="bg-stale-blue h-16 w-auto mx-10 md:mx-28 mb-6 rounded-lg flex items-center justify-start">
            <h2 className="text-lg md:text-2xl pl-10">FAQ 1</h2>
          </div>
          <div className="bg-stale-blue h-16 w-auto mx-10 md:mx-28 mb-6 rounded-lg flex items-center justify-start">
            <h2 className="text-lg md:text-2xl pl-10">FAQ 2</h2>
          </div>
          <div className="bg-stale-blue h-16 w-auto mx-10 md:mx-28 mb-6 rounded-lg flex items-center justify-start">
            <h2 className="text-lg md:text-2xl pl-10">FAQ 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
