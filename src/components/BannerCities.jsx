import React from "react";
import bannerImg from "../assets/images/banner-img.jpg";
import CardsSection from "./CardsSection";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const BannerCities = () => {
  return (
    <div className="h-80 w-full relative">
      <img
        src={bannerImg}
        alt="Banner Img"
        className="h-full w-full object-cover absolute"
      />
      <div className="backdrop-brightness-40 w-full h-full absolute"></div>
      <div className="w-80 h-36 absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white">
        <h1 className="font-sans font-medium text-5xl  text-center">Cities</h1>
        <p className="font-sans text-xl">
          Collection of the most beatiful places and experience
        </p>
      </div>
    </div>
  );
};

export default BannerCities;
