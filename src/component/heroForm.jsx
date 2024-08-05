import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroForm = () => {
  return (
    <div className="py-8 px-4 bg-black  relative rounded-lg flex flex-col justify-center items-center gap-4">
      <p className="font-Satoshi font-[600] w-2/3 text-2xl text-slate-100  text-center">
        Want to Grow? Get a Quote Now!
      </p>
      <div className="flex  flex-col gap-3 items-center w-full justify-center">
        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="Name"
            className="rounded-xl w-full bg-slate-100/60 px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
          />
          <input
            placeholder="Enter Your Email"
            className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="10 Digit Phone Number"
            className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
          />
          <div className="w-full">
            <Select className="w-full">
              <SelectTrigger className="rounded-xl w-full bg-slate-100/60 border-0 text-lg h-full focus:outline-none font-Satoshi font-[500]">
                <SelectValue placeholder="Select Services" />
              </SelectTrigger>
              <SelectContent className="transition-all duration-300 rounded-xl bg-gray-200 border-0 py-3 text-lg focus:outline-none font-Satoshi">
                <SelectItem
                  value="SEO Optimization"
                  className="font-Satoshi  cursor-pointer"
                >
                  SEO Optimization
                </SelectItem>
                <SelectItem
                  value="Content Creation"
                  className="font-Satoshi  cursor-pointer"
                >
                  Content Creation
                </SelectItem>
                <SelectItem
                  value="Web Development"
                  className="font-Satoshi  cursor-pointer"
                >
                  Web Development
                </SelectItem>
                <SelectItem
                  value="Social Media Marketing"
                  className="font-Satoshi  cursor-pointer"
                >
                  Social Media Marketing
                </SelectItem>
                <SelectItem
                  value="Graphic Designing"
                  className="font-Satoshi  cursor-pointer"
                >
                  Graphic Designing
                </SelectItem>
                <SelectItem
                  value="PPC Advertising"
                  className="font-Satoshi  cursor-pointer"
                >
                  PPC Advertising
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <input
          placeholder="Enter Your Company Name"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />

        <input
          placeholder="Enter Your Website URL (if any)

"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <textarea
          placeholder="Message"
          className="resize-none bg-slate-100/60  rounded-xl w-full px-3 py-2 text-lg min-h-60 focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
      </div>
      <button className="w-full py-2 text-xl font-Satoshi text-slate-900 font-bold hover:bg-slate-50 bg-slate-100 rounded-xl">
        Submit
      </button>
    </div>
  );
};

export default HeroForm;
