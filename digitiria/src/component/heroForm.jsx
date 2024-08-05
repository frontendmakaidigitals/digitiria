import React from "react";

const HeroForm = () => {
  return (
    <div className="py-8 px-4 bg-gradient-to-r from-orange-400 to-orange-500/80  relative rounded-lg flex flex-col justify-center items-center gap-4">
      <p className="font-Satoshi font-[600] w-2/3 text-2xl text-slate-100  text-center">
        Tell us What you are looking for
      </p>
      <div className="flex  flex-col gap-3 items-center w-full justify-center">
        <input
          placeholder="Name"
          className="rounded-xl w-full bg-slate-100/60 px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <input
          placeholder="Email"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <input
          placeholder="Phone"
          className="rounded-xl w-full bg-slate-100/60  px-3 py-2 text-lg focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
        <textarea
          placeholder="Message"
          className="resize-none bg-slate-100/60  rounded-xl w-full px-3 py-2 text-lg min-h-52 focus:outline-none placeholder:font-[600] placeholder:text-slate-800 font-Satoshi"
        />
      </div>
      <button className="w-full py-2 text-xl font-Satoshi text-slate-900 font-bold hover:bg-slate-50 bg-slate-100 rounded-xl">
        Submit
      </button>
    </div>
  );
};

export default HeroForm;
