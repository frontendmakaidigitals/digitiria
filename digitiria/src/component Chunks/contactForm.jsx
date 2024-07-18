import React from "react";

const ContactForm = () => {
  return (
    <div className={`w-full  flex justify-center items-center mt-20`}>
      <div className="w-11/12  rounded-xl flex justify-between  bg-[#A6A0AE] px-10">
        <div className="w-1/2 ">
          <img src={"/29013791_7450185.jpg"} />
        </div>
        <div className="h-50 flex flex-col justify-center gap-5   w-2/6">
          <p className="text-5xl font-[600] text-gray-900 font-GeneralSans">
            Get in touch
          </p>
          <div className="mt-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <input
                className="w-full rounded-lg text-lg font-Satoshi placeholder:font-[600] bg-gray-100/80 placeholder:text-gray-500 py-2 px-3"
                placeholder="Name"
              />
              <input
                className="w-full rounded-lg text-lg font-Satoshi placeholder:font-[600] bg-gray-100/80 placeholder:text-gray-500 py-2 px-3"
                placeholder="Email"
              />
              <input
                className="w-full rounded-lg text-lg font-Satoshi placeholder:font-[600] bg-gray-100/80 placeholder:text-gray-500 py-2 px-3"
                placeholder="Phone"
              />
              <textarea
                className="w-full h-56 resize-none rounded-lg text-lg font-Satoshi placeholder:font-[600] bg-gray-100/80 placeholder:text-gray-500 py-2 px-3"
                placeholder="Message"
              />
            </div>
          </div>
          <button className=" rounded-lg hover:bg-gray-900 bg-gray-950 text-gray-100 mt-2 w-full text-xl font-Satoshi  font-[600] placeholder:text-gray-500 py-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
