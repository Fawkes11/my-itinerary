import React from "react";
import introImage from "../assets/images/intro-image.jpg";
import { Link as LinkRouter } from "react-router-dom";

const Intro = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="flex flex-col md:flex-row h-[20rem]  max-w-6xl">
        <div className="w-full h-full flex flex-col justify-between">
          <h1 className="text-5xl font-sans font-bold">
            Find the perfect destination
          </h1>
          <p className="text-2xl font-sans text-[#1C1C1C60]">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </p>
          <LinkRouter
            to="/cities"
            className="button-blue w-full md:w-2/5 text-center"
          >
            View More
          </LinkRouter>
        </div>
        <div className="w-full h-full overflow-hidden shadow-lg rounded border-2 border-gray-300 mt-8 md:mt-0">
          <img
            src={introImage}
            alt="Intro Image"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
