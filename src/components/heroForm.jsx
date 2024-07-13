import React from "react";

const HeroForm = () => {
  return (
    <div className="py-7 px-5  bg-[#CCE0FF] rounded-md flex flex-col justify-center items-center gap-4">
      <p className="font-Satoshi font-[600] w-2/3 text-2xl  text-center">
        Tell us What you are looking for
      </p>
      <div className="flex  flex-col gap-3 items-center w-full justify-center">
        <input
          placeholder="Name"
          className="rounded-md w-full px-3 py-2 text-lg focus:outline-none placeholder:font-[500] font-Satoshi"
        />
        <input
          placeholder="Email"
          className="rounded-md w-full px-3 py-2 text-lg focus:outline-none placeholder:font-[500] font-Satoshi"
        />
        <input
          placeholder="Phone"
          className="rounded-md w-full px-3 py-2 text-lg focus:outline-none placeholder:font-[500] font-Satoshi"
        />
        <textarea
          placeholder="Message"
          className="resize-none rounded-md w-full px-3 py-2 text-lg min-h-40 focus:outline-none placeholder:font-[500] font-Satoshi"
        />
      </div>
      <button className="w-full py-2 text-lg font-Satoshi font-medium hover:bg-blue-500 bg-blue-400 rounded-md">
        Submit
      </button>
    </div>
  );
};

export default HeroForm;
