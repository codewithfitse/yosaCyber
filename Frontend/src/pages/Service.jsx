import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const Service = () => {
  return (
    <div className="w-full h-fit text-amber-50">
      <Header />

      <div className="w-full h-full lg:pt-40 flex flex-col gap-10">
        <div className="w-full h-full mt-40 lg:mt-5 flex flex-col lg:flex-row">
          <div className="w-full h-auto lg:pl-20 lg:pr-10">
            <div className="w-full h-full">
              <img
                src="/image2.png"
                className="w-full h-fit"
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
            <h1 className="text-3xl text-center text-white">Dry Van</h1>
            <h1 className="px-8 text-[18px] text-center mt-3">
              When companies throughout the United States require
              temperature-controlled shipping, nothing beats a refrigerated
              truck. Often referred to as reefer trucks, these vehicles are
              equipped with the necessary technology to maintain the freshness
              of meat, produce, and other delicate cargo in optimal atmospheric
              conditions. At Dawit Freighters we have extensive knowledge in
              navigating this so you can focus on what you do best
            </h1>
            <button className="Button">Submit</button>
          </div>
        </div>

        <div className="w-full h-full lg:mt-2 mt-10 flex flex-col lg:flex-row">
          <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
            <h1 className="text-3xl text-center text-white">Reffer</h1>
            <h1 className="px-8 text-[18px] text-center mt-3">
              In the realm of transportation and logistics, the collaboration
              between dry van carriers and shippers is crucial for the secure
              and efficient delivery of goods to their destinations. At Dawit
              Freighters, we recognize the complexities of the transportation
              industry and stand ready to offer comprehensive assistance to both
              dry van carriers and shippers. Our specialized dry van dispatch
              service is crafted to streamline logistics, improve delivery
              processes, and provide invaluable support to truck drivers
              everywhere.
            </h1>
            <button className="Button">Submit</button>
          </div>
          <div className="w-full h-auto lg:pl-20 lg:pr-10">
            <div className="w-full h-full">
              <img
                src="/image2.png"
                className="w-full h-fit"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-40 lg:mt-10 flex flex-col lg:flex-row">
          <div className="w-full h-auto lg:pl-20 lg:pr-10">
            <div className="w-full h-full">
              <img
                src="/image3.png"
                className="w-full h-fit"
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
            <h1 className="text-3xl text-center text-white">Flat Bed</h1>
            <h1 className="px-8 text-[18px] text-center mt-3">
              Flatbed trailers are essential in dispatching services, handling
              oversized and heavy cargo efficiently. Their versatility makes
              flatbed trailers indispensable assets in transportation networks.
              Dawit Freighters ensures efficient coordination and timely
              delivery of such freight, offering invaluable support to shippers
              and carriers alike.
            </h1>
            <button className="Button">Submit</button>
          </div>
        </div>

        <div className="w-full h-full  lg:mt-2 lg:mb-10 mt-10 flex flex-col lg:flex-row">
          <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
            <h1 className="text-3xl text-center text-white">Box Truck</h1>
            <h1 className="px-8 text-[18px] text-center mt-3">
              success depends on finding profitable hauls, planning trips well,
              and staying on top of paperwork. For many small and medium-sized
              box truck businesses, this can feel like a never-ending struggle.
              That’s why Dawit Freighters dispatch service could be a smart move
              for boosting profits and making things smoother.
            </h1>
            <button className="Button">Submit</button>
          </div>
          <div className="w-full h-auto lg:pl-20 lg:pr-10">
            <div className="w-full h-full">
              <img
                src="/image4.png"
                className="w-full h-fit"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
