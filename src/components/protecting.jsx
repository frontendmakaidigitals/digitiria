import React from "react";

const Protecting = () => {
  return (
    <div className="w-full   flex justify-center   items-center">
      <div className="w-11/12 bg-[#FFD204] flex  py-20 rounded-xl justify-between px-8 items-center h-full ">
        <div>
          <p className="text-7xl font-[400] leading-[1.3] font-Satoshi">
            Protecting Client <br/> Privacy in the  <br/>Digital Age
          </p>
          <button className="px-6 text-xl py-3 mt-10 bg-yellow-500 font-Satoshi font-[600] text-yellow-900 transition-all duration-150 rounded-full">
            Learn more
          </button>
        </div>

        <div className="w-[700px]">
          <img src="ProtectImage.png"/>
        </div>
      </div>
    </div>
  );
};

export default Protecting;
