import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination]);

const Phone = require("../images/how-to-use-1.svg") as string;
const Advanatage = require("../images/advantage.svg");

const Description: React.FC = () => {
  const width = window.innerWidth;

  return (
    <div className="bg-peach-yellow text-center md:grid md:place-items-center w-screen">
      <h1 className="text-royal-blue text-3xl font-normal pt-12">
        HOW LIFEBOAT WORKS?
      </h1>
      <h2 className="text-royal-blue text-xl font-light mt-2">
        A simple description
      </h2>

      <div className="flex items-center justify-around flex-col lg:grid lg:grid-row-2 ">
        <div className="flex-col flex items-start lg:flex-row justify-around mt-24">
          <div className="bg-juicy-peach-yellow mx-12 lg:mx-36 py-12 rounded-2xl">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 lg:h-14 lg:w-14 rounded-full ml-8 lg:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">1</h1>
              </div>
              <div className="mt-6 lg:mt-12 mr-4 lg:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 lg:h-96"></div>
          </div>

          <div className="bg-juicy-peach-yellow mx-12 lg:mx-36 py-12 lg:mb-24 rounded-2xl mt-16 lg:mt-64">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 lg:h-14 lg:w-14 rounded-full ml-8 lg:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">2</h1>
              </div>
              <div className="mt-6 lg:mt-12 mr-4 lg:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 lg:h-96"></div>
          </div>
        </div>

        <div className="flex items-start justify-around flex-col lg:flex-row">
          <div className="bg-juicy-peach-yellow mx-14 lg:mx-36 py-12 rounded-2xl mt-16 lg:-mt-64 ">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 lg:h-14 lg:w-14 rounded-full ml-8 lg:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">3</h1>
              </div>
              <div className="mt-6 lg:mt-12 mr-4 lg:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 lg:h-96"></div>
          </div>

          <div className="bg-juicy-peach-yellow mx-14 lg:mx-36 py-12 mb-24 rounded-2xl mt-16 lg:mt-0">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 lg:h-14 lg:w-14 rounded-full ml-8 lg:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">4</h1>
              </div>
              <div className="mt-6 lg:mt-12 mr-4 lg:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 lg:h-96"></div>
          </div>
        </div>
      </div>

      <div className="h-52 md:h-96 w-auto mx-6 md:w-1/2 md:mx-0 bg-juicy-peach-yellow mb-24 mt-12 rounded-2xl text-center">
        AN ILLUSTRATION VIDEO
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-peach-yellow border-4 border-royal-blue py-3 px-6 rounded-full text-lg mb-24">
          Get Started
        </button>
      </div>

      {/* <div className="pb-40 w-screen">
        <Swiper
          slidesPerView={width > 640 ? 3 : 1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
        >
          <SwiperSlide className="flex justify-center">
            <div className="bg-juicy-peach-yellow h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <Advanatage />
              <h1 className="text-xl mt-6 pb-10 text-royal-blue">
                Advantage 1
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="bg-juicy-peach-yellow h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <Advanatage />
              <h1 className="text-xl mt-6 pb-10 text-royal-blue">
                Advantage 2
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="bg-juicy-peach-yellow h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <Advanatage />
              <h1 className="text-xl mt-6 pb-10 text-royal-blue">
                Advantage 3
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}

      <div className="pb-40 w-full">
        <Swiper
          slidesPerView={width > 640 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
        >
          <SwiperSlide className="flex justify-center">
            <div className="bg-juicy-peach-yellow h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <Advanatage />
              <h1 className="text-xl mt-6 pb-10 text-royal-blue">
                Advantage 1
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="bg-juicy-peach-yellow h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <Advanatage />
              <h1 className="text-xl mt-6 pb-10 text-royal-blue">
                Advantage 2
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div className="bg-juicy-peach-yellow h-80 w-80 px-6 flex items-center flex-col justify-center text-center rounded-lg">
              <Advanatage />
              <h1 className="text-xl mt-6 pb-10 text-royal-blue">
                Advantage 3
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col  items-center justify-center pb-24">
        <h1 className="font-semibold text-xl md:text-2xl ">
          DO YOU WISH TO BE A BETA PARTICIPANT?
        </h1>
        <div className="flex items-center justify-center mt-6">
          <button className="mr-6 bg-royal-blue text-white text-center px-5 py-2 rounded-full focus:outline-none">
            NO
          </button>
          <button className="bg-royal-blue text-white text-center px-5 py-2 rounded-full focus:outline-none">
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
