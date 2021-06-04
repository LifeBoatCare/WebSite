import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Image = require("../images/footer.svg") as string;
const Twitter = require("../images/twitter.svg") as string;
const Pinterest = require("../images/pinterest.svg") as string;
const Facebook = require("../images/facebook.svg") as string;
const Instagram = require("../images/instagram.svg") as string;

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-blue text-white relative grid grid-cols-1 md:grid-cols-3">
      <div className="md:grid grid-rows-2">
        <div className="flex justify-center items-center flex-col md:flex-row mt-28 md:mt-8">
          <StaticImage
            src="../images/icon.png"
            quality={100}
            placeholder="tracedSVG"
            formats={["auto", "webp", "avif"]}
            alt="logo"
            height={125}
            width={125}
          />
          <div className="md:ml-10 text-center md:text-left">
            <h1
              className="text-2xl"
              style={{ textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              LIFE BOAT
            </h1>
            <h3 className="text-base">Rediscover Yourself</h3>
          </div>
        </div>
        <div className="md:grid grid-cols-2">
          <div className="hidden md:block"></div>
          <div className="flex pb-5 md:pb-0 justify-center md:justify-start items-start pt-6 md:pt-0">
            <Twitter />
            <div className="w-4"></div>
            <Pinterest />
            <div className="w-4"></div>
            <Instagram />
            <div className="w-4"></div>
            <Facebook />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pointer-events-none absolute w-4/5 md:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:transform-none opacity-10 md:opacity-100 md:static">
        <div className="flex items-center justify-center">
          <Image />
        </div>
      </div>
      <div className="flex justify-center items-end flex-col text-right absolute top-7 right-0 md:transform-none md:static">
        <div className="mr-10 md:mr-20">
          <h3 className="text-base">Private Policy</h3>
          <h3 className="text-base">Terms And Conditions</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
