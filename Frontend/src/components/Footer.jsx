import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto py-3 bg-gray-900">
      <div className="px-20 flex text-gray-300 justify-between items-center">
        <h1 className="text-[8px] text-center lg:text-[18px] font-bold">
          Copyright © 2024 Dawit Freighters - All Rights Reserved.
        </h1>
        <h2 className="text-[10px] text-center lg:text-[20px]">
          Powered by <span className="text-amber-200">GoDaddy</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
