import React from "react";
import CardCity from "./CardCity";

const CardsSection = () => {
  return (
    <div
      className="w-full px-2 md:px-16 py-20
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center max-w-[1600px]"
    >
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
      <CardCity />
    </div>
  );
};

export default CardsSection;
