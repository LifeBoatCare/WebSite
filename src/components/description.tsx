import React from "react";

const Phone = require("../images/how-to-use-1.svg") as string;

const Description: React.FC = () => {
  return (
    <div className="bg-peach-yellow text-center grid place-items-center">
      <h1 className="text-royal-blue text-3xl font-normal pt-24">
        HOW LIFEBOAT WORKS ?
      </h1>
      <h2 className="text-royal-blue text-xl font-light mt-2">
        A simple description
      </h2>

      <div className="grid grid-row-2 ">
        <div className="flex items-start justify-around mt-24">
          <div className="bg-juicy-peach-yellow mx-36 py-12 rounded-2xl">
            <div className="flex items-start justify-between">
              <div
                className="bg-washout-blue h-14 w-16 ml-12 text-center text-light-blue grid place-items-center"
                style={{ borderRadius: "50%" }}
              >
                <h1 className="text-lg">1</h1>
              </div>
              <div className="mt-12">
                <Phone />
              </div>
            </div>
            <div className="h-96"></div>
          </div>

          <div className="bg-juicy-peach-yellow mx-36 py-12 mb-24 rounded-2xl mt-64">
            <div className="flex items-start justify-between">
              <div
                className="bg-washout-blue h-14 w-16 ml-12 text-center text-light-blue grid place-items-center"
                style={{ borderRadius: "50%" }}
              >
                <h1 className="text-lg">2</h1>
              </div>
              <div className="mt-12">
                <Phone />
              </div>
            </div>
            <div className="h-96"></div>
          </div>
        </div>

        <div className="flex items-start justify-around ">
          <div className="bg-juicy-peach-yellow mx-36 py-12 rounded-2xl -mt-64 ">
            <div className="flex items-start justify-between">
              <div
                className="bg-washout-blue h-14 w-16 ml-12 text-center text-light-blue grid place-items-center"
                style={{ borderRadius: "50%" }}
              >
                <h1 className="text-lg">3</h1>
              </div>
              <div className="mt-12">
                <Phone />
              </div>
            </div>
            <div className="h-96"></div>
          </div>

          <div className="bg-juicy-peach-yellow mx-36 py-12 mb-24 rounded-2xl ">
            <div className="flex items-start justify-between">
              <div
                className="bg-washout-blue h-14 w-16 ml-12 text-center text-light-blue grid place-items-center"
                style={{ borderRadius: "50%" }}
              >
                <h1 className="text-lg">4</h1>
              </div>
              <div className="mt-12">
                <Phone />
              </div>
            </div>
            <div className="h-96"></div>
          </div>
        </div>
      </div>

      <div className="h-96 w-1/2 bg-juicy-peach-yellow mb-24 mt-12 rounded-2xl text-center">
        AN ILLUSTRATION VIDEO
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-white border-4 border-royal-blue py-3 px-6 rounded-full text-lg mb-24">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Description;
