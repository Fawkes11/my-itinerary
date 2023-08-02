import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import logo from "../assets/images/logo-itinerary.png";
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
              <a href="#" className="hover:text-gray-300 font-bold">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-300 font-bold align-middle"
              >
                Cities
              </a>
            </li>
            <li className="button-blue flex items-center">
              <UserIcon className="h-3 w-3 me-1" />
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
