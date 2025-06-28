import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Services = () => {
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />

      <div className="w-full h-fit pb-5 pt-30 mb-2 bg-[#121212]">
        <div className="w-full pt-5 pb-5">
          <h1 className="text-center font-semibold text-[20px] lg:text-[40px] H1">
            HONEY BEE XPRESS LLC IS LOOKING FOR CDL TRUCK DRIVERS!
          </h1>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col space-y-5 pl-5 lg:pl-20 pr-2">
              <h1 className="text-[15px] lg:text-[25px] H1">
                Ready to join the team? Drop us a line
              </h1>
              <input
                type="text"
                className="w-full py-5 px-2 bg-black rounded-[5px] pl-2 placeholder:pl-2"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full py-5 px-2 bg-black rounded-[5px] pl-2 placeholder:pl-2"
                placeholder="Email*"
              />
              <input
                type="text"
                className="w-full py-15 px-2 bg-black rounded-[5px] pl-2 placeholder:pl-2"
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
            <div className="flex flex-col space-y-3 pl-10">
              <div className="text-gray-400">
                <h1 className="font-bold text-[25px]">Why join Honey Bee?</h1>
                <ul className="w-[80%] pl-5 list-disc list-inside text-[20px] text-white space-y-1">
                  <li>Constant routes nationwide</li>
                  <li>Guaranteed stream of income</li>
                  <li>
                    Dedicated support system to walk you through every step of
                    the way
                  </li>
                  <li>A company that promotes healthy work life balance</li>
                </ul>
              </div>
              <div className="text-gray-400">
                <h1 className="font-bold text-[25px]">
                  What you need to have:
                </h1>
                <ul className="w-[80%] pl-5 list-disc list-inside text-[20px] text-white space-y-1">
                  <li>Valid CDL license</li>
                  <li>1 year of driving experience</li>
                  <li>1 year of driving experience</li>
                </ul>
              </div>
              <div className="text-gray-400">
                <h1 className="font-bold text-[25px]">
                  What we'll need from you:
                </h1>
                <ul className="w-[80%] pl-5 list-disc list-inside text-[20px] text-white space-y-1">
                  <li>
                    What we'll need from you: Clear copy of your CDL- A (Front
                    and Back)
                  </li>
                  <li>
                    Clear copy of your MVR Record in PDF format DOT Medical
                  </li>
                  <li>DOT Medical Certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        
      </div>

      <Footer />
    </div>
  );
};

export default Services;
