import React from "react";

const HomeVector = require("../images/home.svg") as string;
const People = require("../images/people.svg") as string;

const Home: React.FC = () => {
  return (
    <div
      className="flex justify-center w-full bg-light-blue overflow-hidden relative"
      style={{
        height: "calc(100vh - 128px)",
      }}
    >
      <div className="w-full absolute bottom-0 lg:bottom-auto lg:top-10 overflow-hidden">
        <div className="HomeVector" style={{ marginLeft: "50%" }}>
          <HomeVector />
        </div>
      </div>

      <div className="mx-6 px-4 md:px-0 md:mx-20 my-10 w-full bg-white glass-effect rounded-3xl z-10">
        <div className="flex h-full flex-col-reverse md:flex-row ">
          <div className="flex flex-col w-full md:w-1/2 h-2/3 md:h-full justify-center items-center md:pl-8">
            <div className="flex flex-col justify-center items-start md:pl-8">
              <h1 className="text-base md:text-2xl pb-6 text-left">
                Anxious, Isolated and struggling to get through?
              </h1>
              <h1 className="text-base md:text-2xl pb-6 text-left">
                Trust me, It get's better
              </h1>
              <h1 className="text-base md:text-2xl pb-6 text-left">
                We'll find you the right help you need
              </h1>
              <h1 className="text-base md:text-2xl pb-6 text-left">
                Let's get through this together, shall we?
              </h1>
            </div>

            <button className="text-center bg-royal-blue text-white py-2 px-4 rounded-full focus:outline-none mt-6 mb-6 md:mt-12 md:mb-0">
              <h2 className="text-md md:text-xl">GET THE APP</h2>
            </button>
          </div>
          <div className="h-1/3 md:h-full w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0 mb-6 md:mb-0">
            <People />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
