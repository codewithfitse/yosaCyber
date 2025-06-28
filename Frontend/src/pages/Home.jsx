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
        <div className="w-full h-full mt-30 background backdrop-blur-2xl">
          <div className="w-full h-full pl-20 pt-50 bg-white/5 backdrop-blur-[1px]">
            <h1 className="text-[50px] font-bold text-white">
              Unlock efficiency, unleash potential!
            </h1>
            <ul className="w-[80%] pl-5 list-disc list-inside text-[25px] font-bold text-white space-y-1">
              <li>Transprent pricing</li>
              <li>Dedicated support</li>
              <li>Competitive pay</li>
            </ul>
            <button className="Button">Contact us</button>
          </div>
        </div>

        <div className=" w-full h-full flex flex-col items-center">
          <h1 className="py-7 text-[40px] font-bold H1">
            About honeybee xpress
          </h1>
          <div className="w-full h-full mt-40 lg:mt-5 flex flex-col items-center lg:flex-row">
            <div className="w-full h-auto lg:pl-20 lg:pr-10">
              <div className="w-full h-full">
                <img
                  src="/image2.png"
                  className="w-full h-fit"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
              <h1 className="text-3xl text-center text-white">Our Mission</h1>
              <h1 className="px-8 text-[18px] text-center mt-3">
                At Honey Bee Xpress, our mission is clear: We're dedicated to
                empowering businesses of all sizes with seamless solutions that
                optimize efficiency and ensure unparalleled customer
                satisfaction. With a relentless commitment to innovation and
                excellence, we streamline operations, enhance productivity, and
                transform logistical challenges into opportunities for growth.
              </h1>
            </div>
          </div>
          <div className="w-full h-full pt-15 lg:mt-5 flex flex-col items-center lg:flex-row">
            <div className="w-full h-fit flex flex-col justify-center items-center text-gray-300">
              <h1 className="text-3xl text-center text-white">
                Our Commitment
              </h1>
              <h1 className="px-8 text-[18px] text-center mt-3">
                At the heart of every successful delivery lies the commitment of
                our devoted truck drivers. We deeply value their hard work and
                dedication, striving to simplify their tasks. Our dispatchers
                are available round the clock, offering unwavering support
                whenever needed. From meticulous route planning to efficient
                load optimization, we're here to assist every step of the way.
                Whether you're an independent owner-operator or part of a larger
                freight company, our services are tailored to suit your specific
                needs.
              </h1>
            </div>
            <div className="w-full h-auto lg:pl-20 lg:pr-10">
              <div className="w-full h-full">
                <img
                  src="/comitement.jpg"
                  className="w-full h-fit"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
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
