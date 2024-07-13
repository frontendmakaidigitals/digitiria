import React, { useState, useRef } from "react";

const NavBar = ({ navRef }) => {
  const buttonRef = useRef(null)
  const [mousePos, setMosusePos] = useState({ x: null, y: null })
  const handleMouseMove = (e) => {
    const { left, top } = buttonRef.current.getBoundingClientRect();
    setMosusePos({ x: e.pageX - left, y: e.pageY - top });
  };
  console.log(mousePos)
  
  return (
    <div ref={ navRef} className="w-full   flex justify-center  py-2 items-center">
      <div className="w-11/12 flex justify-between px-2 items-center h-full ">
        <p className="text-4xl font-bold font-Satoshi">Logo</p>
        <div onMouseMove={handleMouseMove} ref={buttonRef} className="px-5 cursor-pointer py-2 group  relative bg-blue-400 overflow-hidden text-lg rounded-full">
          <div className="relative z-[2] group-hover:text-slate-100 transition-all  font-Satoshi font-[500]">+ Become a Client</div>
          <div style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} className=" pointer-events-none absolute w-[1px] h-[1px] group-hover:scale-[800] z-[-0] bg-black bottom-0 transition-transform duration-500   rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
