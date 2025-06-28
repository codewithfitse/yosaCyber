import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <>
      <div className="w-full overflow-hidden h-full text-amber-50">
        <Header />
        <div className="w-full h-full background backdrop-blur-2xl">
          <div className="w-full h-full bg-white/5 backdrop-blur-[1px]">
            <h1 className="text-[20px] text-black">ggdfghjkls</h1>
          </div>
        </div>

        <div className="w-full h-fit pb-5 mt-30 mb-2 bg-[#121212]">
          <div className="w-full pt-5 pb-5">
            <h1 className="text-center font-bold text-[40px] H1">Contact US</h1>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row">
            <div className="w-full h-full">
              <div className="w-full h-full flex flex-col space-y-5 pl-5 lg:pl-20 pr-2">
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
                <button className="w-full p-5 bg-black rounded-[5px] pl-2">
                  Submit
                </button>

                <h1 className="w-auto text-center text-[14px]">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <span className="H1">Privacy Policy </span>
                  and <span className="H1">Terms of Service</span> apply.
                </h1>
              </div>
            </div>
            <div className="w-full h-full pt-10 lg:pt-1">
              <div className="pl-10">
                <h1 className="font-bold text-[40px] H1">Dawit Freighters</h1>
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
                <div className="pt-5">
                  <h1 className="font-bold text-[40px] H1">ADDRESS</h1>
                  <div className="mt-3">
                    <h1 className="text-[15px]">
                      7345 S Durango Dr. Ste 107 PMB 1049
                    </h1>
                    <h1 className="text-[15px]">Las Vegas, NV 89113 </h1>
                    <h1 className="text-[15px]">Phone: 1-800-257-7553</h1>
                    <h1 className="text-[15px]">FAX: 702-702-1613</h1>
                    <h1 className="text-[15px]">Fri 06:00 am – 06:00 pm</h1>
                  </div>
                </div>
              </div>
              <div className="w-full h-full pt-10 lg:pt-1"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
