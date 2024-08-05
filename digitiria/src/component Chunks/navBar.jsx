import React, { useState, useRef } from "react";

const NavBar = ({ navRef }) => {
  const buttonRef = useRef(null)
  const [mousePos, setMosusePos] = useState({ x: null, y: null })
  const handleMouseMove = (e) => {
    const { left, top } = buttonRef.current.getBoundingClientRect();
    setMosusePos({ x: e.pageX - left, y: e.pageY - top });
  };

  
  return (
    <div
      ref={navRef}
      className="w-full   flex justify-center  py-4 items-center"
    >
      <div className="w-11/12 flex justify-between px-2 items-center h-full ">
        <p className="text-4xl font-[800]  text-slate-200 font-Satoshi">Digitiria</p>
        <div
          onMouseMove={handleMouseMove}
          ref={buttonRef}
          className="px-5 cursor-pointer py-2 group border-2 border-black  relative bg-[#5cceff] overflow-hidden text-lg rounded-full"
        >
          <div className="relative z-[2] group-hover:text-black transition-all  font-Satoshi font-[500]">
            + Become a Client
          </div>
          <div
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
            className=" pointer-events-none absolute w-[1px] h-[1px] group-hover:scale-[800] z-[-0] bg-white bottom-0 transition-transform duration-500 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
