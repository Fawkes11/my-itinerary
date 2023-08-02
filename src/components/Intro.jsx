import React from "react";
import introImage from "../assets/images/intro-image.jpg";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[60rem] sm:h-[45rem] md:h-96 pt-10 px-5 lg:px-24 md:pt-0 md:mt-36">
      <div className="w-full h-full  flex flex-col justify-between">
        <h1 className="text-5xl font-sans font-bold">
          Find the perfect destination
        </h1>
        <p className="text-2xl font-sans text-[#1C1C1C60]">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <button className="button-blue w-full md:w-2/5">View More</button>
      </div>
      <div className="w-full h-full overflow-hidden shadow-lg rounded border-2 border-gray-300 mt-8 md:mt-0">
        <img
          src={introImage}
          alt="Intro Image"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
