import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
const Footer = () => {
  return (
    <div className="w-full py-3  flex justify-center items-center rounded-t-xl  bg-black text-gray-100">
      <div className="w-11/12 px-2   h-full ">
        <div className="flex justify-between py-10 items-center">
          <p className="font-Satoshi text-4xl font-[600]">Logo</p>
          <p className="text-2xl font-Satoshi ">Run your business smarter</p>
        </div>
        <div className="bg-slate-200 w-full h-[1px]"></div>
        <div className="py-10 grid grid-cols-2 w-full">
          <div className="grid grid-cols-3 gap-x-10">
            <div>
              <p className="font-Satoshi font-[500] text-2xl">Product</p>
              <p className="font-Satoshi mt-1">Features</p>
              <p className="font-Satoshi ">Pricing</p>
              <p className="font-Satoshi ">Updates</p>
              <p className="font-Satoshi ">Lorem</p>
            </div>

            <div>
              <p className="font-Satoshi font-[500] text-2xl">Resources</p>
              <p className="font-Satoshi mt-1">Privacy Policy</p>
              <p className="font-Satoshi ">Suport</p>
              <p className="font-Satoshi "> Terms and Condition </p>
            </div>

            <div>
              <p className="font-Satoshi font-[500] text-2xl">Solutions</p>
              <p className="font-Satoshi  mt-1">Lorem</p>
              <p className="font-Satoshi  ">Lorem</p>
              <p className="font-Satoshi  ">Lorem</p>
              <p className="font-Satoshi  ">Lorem</p>
              <p className="font-Satoshi  ">More..</p>
            </div>
          </div>
          <div className=" justify-self-end flex flex-col gap-4 ">
            <div className="grid grid-cols-3 text-xl items-center">
              <FaXTwitter />
              <ImFacebook2 />
              <AiFillInstagram  className="text-2xl"/>
            </div>
            <div className="w-full py-2 flex items-center px-3 text-lg font-Satoshi font-medium  border border-bg-blue-400 rounded-lg">
              Operational <LuDot className="text-green-300 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
