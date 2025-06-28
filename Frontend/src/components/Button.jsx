import React from "react";

export const Button = ({ text }) => {
  return (
    <button className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] font-bold bg-gradient-to-r from-red-500 to-red-900 rounded-[10px] hover:shadow-red-500/80 hover:shadow-lg">
      {text}
    </button>
  );
};
