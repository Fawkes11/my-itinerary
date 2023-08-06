import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import logo from "../assets/images/logo-itinerary.png";
import { Link as LinkRouter } from "react-router-dom";
const Header = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center ">
          <a href="#">
            <img src={logo} alt="Logo Itinerary" />
          </a>

          <ul className="flex space-x-4 items-center">
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
