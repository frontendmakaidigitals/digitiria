import React from "react";
import HeroForm from "../components/heroForm";
import { FaArrowLeftLong } from "react-icons/fa6";
const Hero = ({ navRef }) => {
    
  return (
    <div className={`w-full flex justify-center items-center`} style={{ height: `calc(100vh - ${navRef.current ? navRef.current.clientHeight + 'px' : '0px'})` }}>
      <div className="w-11/12 flex justify-between px-2 items-center h-full ">
        <div className="">
          <p className="font-Switzer text-8xl">
            Humanized <br />
          </p>

          <p className="font-Switzer  text-8xl">
            Design
            <span className="bg-black hover:bg-gray-900 cursor-pointer inline-block rotate-180 text-white p-4 rounded-full">
              <FaArrowLeftLong className="text-3xl" />
            </span>
          </p>
        </div>
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
