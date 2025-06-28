import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";
import axios from "axios";

const Pricing = () => {
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="w-full h-full mt-40 lg:mt-10 flex flex-col lg:flex-row">
        <div className="w-full h-auto lg:pl-20 lg:pr-10">
          <div className="w-full h-full">
            <img src="/image3.png" className="w-full h-fit" alt="" srcset="" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
          <h1 className="text-3xl text-center text-white">Flat Bed</h1>
          <h1 className="px-8 text-[18px] text-center mt-3">
            Flatbed trailers are essential in dispatching services, handling
            oversized and heavy cargo efficiently. Their versatility makes
            flatbed trailers indispensable assets in transportation networks.
            Dawit Freighters ensures efficient coordination and timely delivery
            of such freight, offering invaluable support to shippers and
            carriers alike.
          </h1>
          <button className="Button">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
