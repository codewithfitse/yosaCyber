import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden h-[100%] background text-amber-50">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[100px] lg:pt-[150px] pl-[20px] lg:pl-[40px] relative">
          <div className="w-full lg:w-[100%]">
            <h1 className="text-[30px] lg:text-[45px] font-semibold">
              <span className="text-[40px] lg:text-[60px] text-[#16fe01] font-bold font-serif">
                Yosa
              </span>{" "}
              CAR RENTAL <br />
              SERVICE IN ETHIOPIA
            </h1>
            <p className="text-[20px]/7 lg:text-[30px]/10 my-3 lg:my-6">
              Daily or Weekly Car Rentals for <br />
              Your Business or Visiting Travel Plans
            </p>
            <div className="flex  mt-5 lg:mt-10 space-x-2.5">
              <Link to={"/Contact"}>
                <Button text={"Contact Us"} />
              </Link>
              <Link to={"/Booking"}>
                <Button text={"Our Services"} />
              </Link>
            </div>
          </div>

          <div className="w-[100%] mt-10 lg:w-[100%] flex justify-center">
            <img
              src="mercedis.png"
              className="w-[600px] lg:w-[700px] h-fit lg:absolute lg:right-[10px] hover:scale-102 hover:transition-1s"
              alt="Mercedis"
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
