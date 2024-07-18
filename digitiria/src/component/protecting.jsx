
const Protecting = () => {
 
  
  return (
    <div className="w-full flex flex-col justify-start items-center mt-20">
      <div className="w-11/12">
        <p className="text-gray-400 font-Satoshi  font-[700]">Our Commitment</p>
        <p className="text-4xl font-[500] font-GeneralSans text-gray-100 mt-2">
          Enjoy our services with Confidence
        </p>
      </div>

      <div className="w-full flex justify-center mt-20">
        <div
        
          className="w-full bg-[#FFD204] flex  py-24 rounded-xl justify-between px-8 items-center h-full "
        >
          <div>
            <p className="text-7xl font-[500] leading-[1.3] font-Satoshi">
              Protecting Client <br /> Privacy in the <br />
              Digital Age
            </p>
            <button className="px-6 text-xl py-3 mt-10 bg-yellow-500 font-Satoshi font-[600] text-yellow-900 transition-all duration-150 rounded-full">
              Learn more
            </button>
          </div>

          <div className="w-[800px]">
            <img src="ProtectImage.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protecting;
