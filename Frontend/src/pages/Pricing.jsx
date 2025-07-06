import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";
import axios from "axios";

const Pricing = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden text-amber-50">
      <Header />
      <div className="w-full h-full pt-30 lg:my-10 flex flex-col lg:flex-row gap-3 bg-[#121212]">
        <div className="w-full h-full">
          <div className="w-full h-full">
            <img
              src="/pricing1.png"
              className="w-full h-full"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="w-full h-fit py-10 pl-10 flex flex-col justify-center text-gray-300">
          <h1 className="font-bold text-[25px] text-white">
            WITH YOUR AUTHORITY
          </h1>
          <h2 className="w-[80%] mt-5 text-[20px]">
            Prices for our truck dispatching services start form 7% gross
            revenue and up depending on your equipment.
          </h2>
          <ul className="w-[80%] mt-5 pl-5 list-disc list-inside text-[20px] text-white space-y-1">
            <li>Box Truck - 7%</li>
            <li>Dry van - 10%</li>
            <li>Reefer- 10%</li>
          </ul>
          <button className="Button">Contact Us</button>
        </div>
      </div>

      <div className="w-full h-full mb-10 lg:mb-0 mt-5 lg:mt-10 flex flex-col lg:flex-row bg-black">
        <div className="w-full h-auto">
          <div className="w-full h-full">
            <img
              src="/pricing2.png"
              className="w-full h-fit"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="w-full h-full mb-10 py-10 lg:py-1 pl-10 flex flex-col justify-center text-gray-300">
          <h1 className="font-bold text-[25px] text-white">
            WITH YOUR AUTHORITY
          </h1>
          <h2 className="w-[80%] mt-5 text-[20px]">
            Prices for freight services under our authority starts from 12 %
            gross revenue and up. You will get :
          </h2>
          <ul className="w-[80%] mt-5 pl-5 list-disc list-inside text-[20px] text-white space-y-1">
            <li>Our MC Authority</li>
            <li>Insurance and Safety</li>
            <li>DOT compliance</li>
            <li>Dispatching services</li>
            <li>IFTA filing</li>
            <li>Document management and other benefits</li>
          </ul>
          <button className="Button">Contact us</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
