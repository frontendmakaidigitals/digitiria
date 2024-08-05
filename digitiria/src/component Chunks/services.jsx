import React from "react";

const Services = () => {
  return (
    <div className="w-full   flex justify-center mt-20 py-4 items-center">
      <div className="w-11/12  px-2 ">
        <p className="text-gray-400 font-Satoshi  font-[700]">Our Services</p>
        <p className="text-4xl mt-2 font-[500] font-GeneralSans text-gray-100">Exceeding your expectations, consistently</p>
        <div className="grid grid-cols-3 gap-x-3 gap-y-3 mt-10">
                <div className="h-60 bg-red-500 rounded-lg"></div>
                <div className="h-60 bg-red-500 rounded-lg"></div>
                <div className="h-60 bg-red-500 rounded-lg"></div>
                <div className="h-60 bg-red-500 rounded-lg"></div>
                <div className="h-60 bg-red-500 rounded-lg"></div>
                <div className="h-60 bg-red-500 rounded-lg"></div>
                
        </div>
      </div>
    </div>
  );
};

export default Services;
