import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden h-[100%] background text-amber-50">
        <Header />

        <div className="w-full h-[500px] mt-30 bg-[#121212]">
          <div className="w-full pt-5 pb-5">
            <h1 className="text-center font-bold text-[40px] H1">Contact US</h1>
          </div>
          <div className="w-full h-full flex">
            <div className="w-full h-full">
              <div className="w-full h-full flex flex-col space-y-5 pl-20 pr-2">
                <h1 className="text-[25px]">Drop us a line!</h1>
                <input
                  type="text"
                  className="w-full p-2 bg-black rounded-[5px] pl-2 placeholder:pl-2"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="w-full p-2 bg-black rounded-[5px] pl-2 placeholder:pl-2"
                  placeholder="Email*"
                />
                <input
                  type="text"
                  className="w-full p-10 bg-black rounded-[5px] pl-2 placeholder:pl-2"
                  placeholder="Message"
                />

                <h1 className="w-auto text-center text-[14px]">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <span className="H1">Privacy Policy </span>
                  and <span className="H1">Terms of Service</span> apply.
                </h1>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="pl-10">
                <h1 className="font-bold text-[40px] H1">Honey Bee Xpress</h1>
                <h1 className="font-bold text-[40px] H1">Business Hours</h1>
                <div className="mt-3">
                  <h1 className="text-[15px]">Mon 06:00 am – 06:00 pm</h1>
                  <h1 className="text-[15px]">Tue 06:00 am – 06:00 pm</h1>
                  <h1 className="text-[15px]">Wed 06:00 am – 06:00 pm</h1>
                  <h1 className="text-[15px]">Thu 06:00 am – 06:00 pm</h1>
                  <h1 className="text-[15px]">Fri 06:00 am – 06:00 pm</h1>
                  <h1 className="text-[15px]">Sat Closed</h1>
                  <h1 className="text-[15px]">Sun Closed</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
