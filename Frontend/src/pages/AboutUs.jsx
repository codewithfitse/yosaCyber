import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const AboutUs = () => {
  return (
    <div className="w-full h-fit background text-amber-50">
      <Header />

      <div className="w-full h-full pt-40 flex">
        <div className="w-full h-auto pl-20 pr-10">
          <div className="w-full h-full">
            <img src="/image1.png" className="w-full h-fit" alt="" srcset="" />
          </div>
        </div>
        <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
          <h1 className="text-3xl text-center text-white">Dry Van</h1>
          <h1 className="px-8 text-[18px] text-center mt-3">
            In the realm of transportation and logistics, the collaboration
            between dry van carriers and shippers is crucial for the secure and
            efficient delivery of goods to their destinations. At Honey Bee
            Xpress, we recognize the complexities of the transportation industry
            and stand ready to offer comprehensive assistance to both dry van
            carriers and shippers. Our specialized dry van dispatch service is
            crafted to streamline logistics, improve delivery processes, and
            provide invaluable support to truck drivers everywhere.
          </h1>
          <button className="w-fit p-5 mt-3 text-center bg-red-500">
            Submit
          </button>
        </div>
      </div>

      <div className="pt-[100px] lg:pt-[150px] flex flex-col items-center">
        <h1 className="text-[25px] lg:text-[40px] text-center font-bold">
          We are{" "}
          <span className="text-[25px] lg:text-[50px] text-[#16fe01] font-bold ">
            Time
          </span>{" "}
          Car Rentals
        </h1>
        <p className="w-[90%] mt-5 text-[14px] text-center lg:text-[20px]">
          We are a full Car Rental service provider in Addis Ababa, Ethiopia
          with Daily, Weekly even Monthly rates for your business or pleasure
          travels in Ethiopia. At our car rental company, we strive to provide
          our customers with convenient and affordable transportation solutions,
          while also offering top-quality vehicles and exceptional customer
          service. We are committed to making the car rental experience as
          hassle-free and enjoyable as possible for our customers, so they can
          focus on their plans and experiences, rather than worrying about
          transportation. Our cars come with professional and courteous drivers
          who will make your stay in Ethiopia a worry-free one.
        </p>
        <div className="mt-3 lg:mt-7 flex justify-between space-x-10">
          <Link to={"/Contact"}>
            <Button text={"Contact"} />
          </Link>
          <Link to={"/Contact"}>
            <Button text={"Work With Us"} />
          </Link>
        </div>
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Booking"}>
            <Button text={"Book Now!"} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
