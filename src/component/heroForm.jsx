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
        <input
          placeholder="Name"
          className="rounded-xl w-full bg-slate-100/60 px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <input
          placeholder="10 Digit Phone Number"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <input
          placeholder="Enter Your Email"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <input
          placeholder="Enter Your Company Name"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <div className="w-full">
          <Select className="w-full">
            <SelectTrigger className="rounded-xl w-full bg-slate-100/60 border-0 px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi font-[500]">
              <SelectValue placeholder="Select Services" />
            </SelectTrigger>
            <SelectContent className="transition-all duration-300 rounded-xl bg-slate-700 border-0 px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi">
              <SelectItem value="light">SEO Optimization</SelectItem>
              <SelectItem value="dark">Content Creation</SelectItem>
              <SelectItem value="system">Web Development</SelectItem>
              <SelectItem value="system">Social Media Marketing</SelectItem>
              <SelectItem value="system">Graphic Designing</SelectItem>
              <SelectItem value="system">PPC Advertising</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <input
          placeholder="Enter Your Website URL (if any)

"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <textarea
          placeholder="Message"
          className="resize-none bg-slate-100/60  rounded-xl w-full px-3 py-2 text-lg min-h-42 focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
      </div>
      <button className="w-full py-2 text-xl font-Satoshi text-slate-900 font-bold hover:bg-slate-50 bg-slate-100 rounded-xl">
        Submit
      </button>
    </div>
  );
};

export default HeroForm;
