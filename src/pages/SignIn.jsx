import React from "react";
import Login from "../components/Login";
import logoWhite from "../assets/images/logo-itinerary-white.png";
const SignIn = () => {
  return (
    <div
      className="w-full
    h-screen 
    bg-[#EBEBEB] bg-[url('/src/assets/images/background_02.png')]
    bg-cover
    grid grid-cols-1 lg:grid-cols-2 items-center
    lg:px-16 pt-24
    "
    >
      <h1 className="font-bold text-6xl text-white text-center hidden lg:inline">
        MY ITINERARY
      </h1>
      <Login />
    </div>
  );
};

export default SignIn;
