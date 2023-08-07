import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import logo from "../assets/images/logo-itinerary.png";
import logoWhite from "../assets/images/logo-itinerary-white.png";
import { Link as LinkRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation().pathname.substring(1);
  console.log(location);

  return (
    <nav className="w-full p-4 absolute z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center ">
          <a href="#">
            <img
              src={location == "home" ? logo : logoWhite}
              alt="Logo Itinerary"
            />
          </a>

          <ul
            className={` flex space-x-4 items-center ${
              location == "home" ? null : "text-white"
            }`}
          >
            <li>
              <LinkRouter to="/home" className="hover:text-gray-300 font-bold">
                Home
              </LinkRouter>
            </li>
            <li>
              <LinkRouter
                to="/cities"
                className="hover:text-gray-300 font-bold"
              >
                Cities
              </LinkRouter>
            </li>
            <li>
              <LinkRouter
                to="/signin"
                className="button-blue w-full flex items-center hover:text-gray-300 font-bold"
              >
                <UserIcon className="h-3 w-3 me-1" />
                Login
              </LinkRouter>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
