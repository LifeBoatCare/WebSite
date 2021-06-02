import React from "react";

const SupportGroup = require("../images/support_group.svg") as string;
const FindingHelp = require("../images/find_help.svg") as string;
const Ratings = require("../images/ratings.svg") as string;

const Features: React.FC = () => {
  return (
    <div className="bg-skye-blue ">
      <h1 className="text-royal-blue text-3xl ml-12 md:ml-24 pt-12">
        | FEATURES
      </h1>

      <div className="grid grid-rows-3 mt-20">
        <div className="grid md:grid-cols-2 mb-24">
          <div className="flex flex-col items-center justify-between text-center mx-8 md:ml-24 md:mr-12 bg-white rounded-3xl ">
            <h2 className="text-lg md:text-2xl mt-6 font-normal">
              SUPPORT GROUPS
            </h2>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <SupportGroup />
          </div>
        </div>

        <div className="grid md:grid-cols-2 mb-24">
          <div className="hidden md:flex justify-center items-center">
            <FindingHelp />
          </div>
          <div className="flex flex-col items-center justify-between text-center mx-8 md:mr-24 md:ml-12 bg-stale-blue rounded-3xl">
            <h2 className="text-lg md:text-2xl mt-6 font-normal">
              FINDING HELP
            </h2>
            <button className="mb-5 md:mb-12 bg-royal-blue text-white py-2 px-3 md:py-3 md:px-4 rounded-lg">
              Find Your Therapist
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 mb-24">
          <div className="flex flex-col items-center justify-start text-center h-80 md:h-full mx-8 md:ml-24 md:mr-12 bg-white rounded-3xl">
            <h2 className="text-lg md:text-2xl mt-6 font-normal">
              RATINGS AND REVIEWS
            </h2>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <Ratings />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-white border-4 border-royal-blue py-3 px-6 rounded-full text-lg mb-24">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default Features;
