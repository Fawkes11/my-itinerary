import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-md px-4 py-2 w-60 md:w-96 my-8">
      <span className="text-gray-400">
        <MagnifyingGlassIcon className="w-6" />
      </span>
      <input
        className="bg-transparent ml-4 outline-none placeholder-gray-400"
        type="text"
        placeholder="Search your city"
      />
    </div>
  );
};

export default SearchBar;
