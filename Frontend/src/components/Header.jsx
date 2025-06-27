import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full lg:w-full h-auto justify-between items-center text-white-500 fixed z-1 container">
      <div className="w-full h-[40px] p-2 bg-yellow-200">
        <h1 className="text-center text-black">
          Ask about our introductory rate
        </h1>
      </div>
      <div className="w-full h-fit py-2 px-5 flex justify-between items-center bg-gray-400 relative">
        <div className="pl-2 lg:pl-6 flex items-center">
          <img
            src="Logo1.PNG"
            className="w-24 lg:w-15 h-fit"
            alt="Logo"
            srcSet=""
          />
        </div>
        <div className="w-fit px-3 flex gap-3 justify-center text-[15px] lg:text-[20px] font-bold">
          <Link to="/Home">
            <h1 className="hover:text-[#16fe01]">Home</h1>
          </Link>
          <Link to="">
            <h1 className="hover:text-[#16fe01]">Dispatching Services</h1>
          </Link>
          <Link to="">
            <h1 className="hover:text-[#16fe01]">CDL Drivers</h1>
          </Link>
          <Link to="">
            <h1 className="hover:text-[#16fe01]">Pricing</h1>
          </Link>
          <Link to="">
            <h1 className="hover:text-[#16fe01]">More</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
