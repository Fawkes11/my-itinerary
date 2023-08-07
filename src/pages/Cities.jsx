import React from "react";
import BannerCities from "../components/BannerCities";
import CardsSection from "../components/CardsSection";
import SearchBar from "../components/SearchBar";

export default function Cities() {
  return (
    <div className="w-full bg-[#EBEBEB] flex flex-col items-center">
      <BannerCities />
      <SearchBar />
      <CardsSection />
    </div>
  );
}
