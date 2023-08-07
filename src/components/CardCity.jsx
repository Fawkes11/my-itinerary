import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";

const CardCity = () => {
  return (
    <div
      className={`
      w-56 sm:w-60 md:w-64 2xl:w-72 h-36 sm:h-40 md:h-44 2xl:h-48
      rounded-2xl
      bg-[url('https://p4.wallpaperbetter.com/wallpaper/704/601/250/nature-scenery-images-hd-1920x1080-wallpaper-preview.jpg')] bg-center bg-cover bg-no-repeat
      p-4 flex flex-col justify-between shadow`}
    >
      <div className="text-white">
        <h2 className="font-normal text-lg">Wakatobi</h2>
        <p className="flex font-medium text-xs">
          <MapPinIcon className="w-4 me-1" />
          Indonesia
        </p>
      </div>

      <LinkRouter
        to="#"
        className="button-blue w-full md:w-32 text-xs md:text-md text-center"
      >
        View More
      </LinkRouter>
    </div>
  );
};

export default CardCity;
