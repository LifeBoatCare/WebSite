import React from "react";

const SupportGroup = require("../images/support_group.svg") as string;
const FindingHelp = require("../images/find_help.svg") as string;
const Ratings = require("../images/ratings.svg") as string;

const Features: React.FC = () => {
  return (
    <div className="bg-skye-blue ">
      <h1 className="text-royal-blue text-3xl ml-24 pt-12">| FEATURES</h1>
      <div className="grid grid-rows-3 mt-20">
        <div className="grid grid-cols-2 mb-24">
          <div className="ml-24 mr-12 bg-white rounded-3xl text-center">
            <h2 className="text-2xl mt-6 font-normal">SUPPORT GROUPS</h2>
          </div>
          <div className="flex justify-center items-center">
            <SupportGroup />
          </div>
        </div>
        <div className="grid grid-cols-2 mb-24">
          <div className="flex justify-center items-center">
            <FindingHelp />
          </div>
          <div className="mr-24 ml-12 bg-stale-blue rounded-3xl flex flex-col items-center justify-between">
            <h2 className="text-2xl mt-6 font-normal">FINDING HELP</h2>
            <button className="mb-12 bg-royal-blue text-white py-3 px-4 rounded-lg">
              Find Your Therapist
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-24">
          <div className="ml-24 mr-12 bg-white rounded-3xl text-center">
            <h2 className="text-2xl mt-6 font-normal">RATINGS AND REVIEWS</h2>
          </div>
          <div className="flex justify-center items-center">
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
