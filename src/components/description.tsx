import React from "react";

const Phone = require("../images/how-to-use-1.svg") as string;

const Description: React.FC = () => {
  return (
    <div className="bg-peach-yellow text-center md:grid md:place-items-center">
      <h1 className="text-royal-blue text-3xl font-normal pt-12">
        HOW LIFEBOAT WORKS?
      </h1>
      <h2 className="text-royal-blue text-xl font-light mt-2">
        A simple description
      </h2>

      <div className="flex items-center justify-around flex-col md:grid md:grid-row-2 ">
        <div className="flex-col flex items-start md:flex-row justify-around mt-24">
          <div className="bg-juicy-peach-yellow mx-12 md:mx-36 py-12 rounded-2xl">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 md:h-14 md:w-14 rounded-full ml-8 md:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">1</h1>
              </div>
              <div className="mt-6 md:mt-12 mr-4 md:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 md:h-96"></div>
          </div>

          <div className="bg-juicy-peach-yellow mx-12 md:mx-36 py-12 md:mb-24 rounded-2xl mt-16 md:mt-64">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 md:h-14 md:w-14 rounded-full ml-8 md:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">2</h1>
              </div>
              <div className="mt-6 md:mt-12 mr-4 md:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 md:h-96"></div>
          </div>
        </div>

        <div className="flex items-start justify-around flex-col md:flex-row">
          <div className="bg-juicy-peach-yellow mx-14 md:mx-36 py-12 rounded-2xl mt-16 md:-mt-64 ">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 md:h-14 md:w-14 rounded-full ml-8 md:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">3</h1>
              </div>
              <div className="mt-6 md:mt-12 mr-4 md:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 md:h-96"></div>
          </div>

          <div className="bg-juicy-peach-yellow mx-14 md:mx-36 py-12 mb-24 rounded-2xl mt-16 md:mt-0">
            <div className="flex items-start justify-between">
              <div className="bg-washout-blue h-8 w-10 md:h-14 md:w-14 rounded-full ml-8 md:ml-12 text-center text-light-blue grid place-items-center">
                <h1 className="text-lg">4</h1>
              </div>
              <div className="mt-6 md:mt-12 mr-4 md:mr-0">
                <Phone />
              </div>
            </div>
            <div className="h-56 md:h-96"></div>
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
    </div>
  );
};

export default Description;
