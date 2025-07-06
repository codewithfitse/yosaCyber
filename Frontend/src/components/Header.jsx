import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="w-full lg:w-full h-auto justify-between items-center text-white-500 z-10 fixed container">
      <div className="w-full h-[40px] p-2 bg-red-500">
        <h1 className="text-center text-black">
          Ask about our introductory rate
        </h1>
      </div>
      <div className="w-full h-fit py-2 px-5 flex justify-between items-center bg-white/10 backdrop-blur-[2px] ">
        <div className="pl-2 lg:pl-6 flex items-center">
          <img
            src="Logo1.PNG"
            className="w-10 lg:w-15 h-fit"
            alt="Logo"
            srcSet=""
          />
        </div>
        <div className="w-fit px-3 flex gap-1 lg:gap-3 justify-center text-white text-[10px] lg:text-[20px] relative font-bold">
          <Link to="/Home">
            <h1 className="hover:text-red-600 active:text-amber-200">Home</h1>
          </Link>
          <Link to="/AboutUs">
            <h1 className="hover:text-red-600">Dispatching Services</h1>
          </Link>
          <Link to="/Services">
            <h1 className="hover:text-red-600">CDL Drivers</h1>
          </Link>
          <Link to="/Pricing">
            <h1 className="hover:text-red-600">Pricing</h1>
          </Link>
          <Link to="">
            <h1 className="hover:text-red-600" onClick={handleToggle}>
              More
            </h1>
          </Link>
          {toggle ? (
            <div className="w-fit h-fit flex absolute top-8 right-0 z-20 bg-[#121212] space-x-2">
              <Link to="/Contact">
                <h1
                  className="hover:text-red-600 text-[20px]"
                  onClick={handleToggle}
                >
                  Contact us
                </h1>
              </Link>
              <Link to="/Gallery">
                <h1
                  className="hover:text-red-600 text-[20px]"
                  onClick={handleToggle}
                >
                  Gallery
                </h1>
              </Link>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
