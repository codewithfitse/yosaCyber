import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Services = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden text-amber-50">
      <Header />

      <div className="">
        <div className="w-full h-full pb-10 pt-30 mb-2 bg-[#121212]">
          <div className="w-full h-full pt-5 pb-5">
            <h1 className="text-center font-semibold text-[20px] lg:text-[40px] text-red">
              Dawit Freighters LLC IS LOOKING FOR CDL TRUCK DRIVERS!
            </h1>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row">
            <div className="w-full h-full">
              <div className="w-full h-full flex flex-col space-y-5 pl-5 lg:pl-20 pr-2">
                <h1 className="text-[15px] lg:text-[25px] text-red">
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
                  <span className="text-red">Privacy Policy </span>
                  and <span className="text-red">Terms of Service</span> apply.
                </h1>
              </div>
            </div>
            <div className="w-full h-full pt-10 lg:pt-1">
              <div className="flex flex-col space-y-3 pl-10">
                <div className="text-gray-400">
                  <h1 className="font-bold text-[25px]">
                    Why join Dawit Freighters?
                  </h1>
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

        <div className="w-full h-full mt-10 bg-black">
          <div className="p-5">
            <h1 className="text-[40px] font-bold text-center text-red">
              What you get with Dawit Freighters
            </h1>
          </div>
          <div className="w-full h-full my-10 grid gap-7 lg:grid-cols-3 place-items-start">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] h-[200px] bg-amber-100 rounded-full">
                <img src="cdl1.png" className="rounded-full" alt="" srcset="" />
              </div>
              <h1 className="mt-3 text-center text-[20px] font-semibold">
                Our Commitment
              </h1>
              <h2 className="w-[80%] my-3 text-center text-[20px] text-gray-300">
                Our Commitment to excellence is what drives everything we do. We
                are dedicated to providing our drivers with the best tools,
                training and support to ensure their success and safety on the
                road.
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] h-[200px] bg-amber-100 rounded-full">
                <img src="cdl2.png" className="rounded-full" alt="" srcset="" />
              </div>
              <h1 className="mt-3 text-center text-[20px] font-semibold">
                Our Fleet
              </h1>
              <h2 className="w-[80%] my-3 text-center text-[20px] text-gray-300">
                Our fleet consists of modern and well-maintained vehicles
                ensuring reliability. efficiency and comfort for our drivers.
                Whether you are hauling across the country or navigating local
                routes, our fleet is designed to support your success on the
                road. Join us and drive with the best in town.
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] h-[200px] bg-amber-100 rounded-full">
                <img src="cdl3.png" className="rounded-full" alt="" srcset="" />
              </div>
              <h1 className="mt-3 text-center text-[20px] font-semibold">
                Technical Support
              </h1>
              <h2 className="w-[80%] my-3 text-center text-[20px] text-gray-300">
                We understand that reliable technical support is crucial for
                keeping our drivers on the road and our operations running
                smoothly. We are committed to providing prompt and efficient
                solutions, minimizing downtime and ensuring you have the
                resources you need to stay on track.With Dawit Freighters, you
                can drive with confidence knowing that expert help is just a
                call away
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
