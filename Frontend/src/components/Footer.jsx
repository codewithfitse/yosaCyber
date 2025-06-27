import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto lg:mb-0 lg:mt-30 py-10 lg:py-5 container">
      <div className="flex pb-3 lg:pb-6 px-5 lg:px-10 justify-between items-center">
        <div className="py-2 lg:py-5">
          <h1 className="text-[12px] lg:text-[28px] font-bold">
            Subscribe For a Newsletter
          </h1>
          <h2 className="text-[10px] lg:text-[20px]">
            Want to get updates? Just put your email here.
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className=" py-1 px-2 lg:py-2 lg:px-3 w-[140px] lg:w-[400px] bg-gray-400 rounded-3xl"
          />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-[30%] pl-4 lg:pl-8 flex flex-col space-y-1">
          <h1 className="text-[15px] lg:text-[28px] font-bold">
            <span className="text-[40px] font-serif">T</span>ime
          </h1>
          <h2 className="text-[10px] lg:text-[16px]">
            Providing great care for customers is our brand!
          </h2>
          <div className="flex flex-col mt-2 space-y-2">
            <h1 className="mb-2">Find us on:</h1>
            <div className="w-[130px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] font-bold lg:w-[280px] box">
              <h1>Phone: +251 912 347 874</h1>
            </div>
            <div className="w-[130px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] font-bold lg:w-[280px] box">
              <h1>Adress: Jemo1 Ruta build. 1st floor</h1>
            </div>
            <div className="w-[130px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] font-bold lg:w-[280px] box">
              <h1>Mail: abelzerihun@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className="w-[33%] flex flex-col items-center">
          <div className="w-[70%] pb-3 mb-2 border-b-2 border-amber-400">
            <h1 className="text-center text-[13px] lg:text-[23px]">
              Our Latest News
            </h1>
          </div>
          <h2 className=" text-[12px] lg:text-[23px]">Read all →</h2>
        </div>

        <div className="w-[33%] flex flex-col items-center ">
          <div className="w-[70%] pb-3 border-b-2 border-amber-400">
            <h1 className="text-center text-[13px] lg:text-[28px]">
              Important Links
            </h1>
          </div>
          <div className="flex flex-col mt-2 space-y-2 font-bold">
            <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
              <h1>Casual Cars</h1>
            </div>
            <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
              <h1>Weeding Cars</h1>
            </div>
            <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
              <h1>Gallery</h1>
            </div>
            <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
              <h1>About us</h1>
            </div>
            <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
              <h1>Contact us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
