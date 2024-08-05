import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
 
const Footer = () => {
  return (
    <div   className="w-full py-3  flex justify-center items-center rounded-t-xl mt-20 bg-gray-50 text-gray-800">
      <div className="w-11/12 px-2   h-full ">
        <div className="flex justify-between py-10 items-center">
          <p className="font-Satoshi text-4xl font-[600]">Digitiria</p>
          <p className="text-2xl font-Satoshi ">Run your business smarter</p>
        </div>
        <div className="bg-slate-200 w-full h-[1px]"></div>
        <div className="py-10 grid grid-cols-2 w-full">
          <div className="grid grid-cols-3 gap-x-10">
            <div>
              <p className="font-Satoshi font-[500] text-2xl">Product</p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Features
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Pricing
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Updates
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Lorem
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
            </div>

            <div>
              <p className="font-Satoshi font-[500] text-2xl">Resources</p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Privacy Policy
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>

              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Suport
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Terms and Condition
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
            </div>

            <div>
              <p className="font-Satoshi font-[500] text-2xl">Solutions</p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Lorem
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Lorem
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Lorem
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
              <p className="font-Satoshi flex items-center gap-2 mt-1">
                Lorem
                <span className="">
                  <BsArrowUpRight />
                </span>
              </p>
            </div>
          </div>
          <div className=" justify-self-end flex flex-col gap-4 ">
            <div className="grid grid-cols-3 text-xl items-center">
              <FaXTwitter />
              <ImFacebook2 />
              <AiFillInstagram className="text-2xl" />
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
