const NavBar = ({ navRef }) => {
  return (
    <div
      ref={navRef}
      className="w-full  bg-[#D5DDCC] flex justify-center  py-4 items-center"
    >
      <div className="w-11/12 relative flex justify-between px-2 items-center h-full ">
        <p className="text-4xl font-[800]  text-slate-900 font-Satoshi">
          Digitiria
        </p>
        <div className="px-5  cursor-pointer py-2 group relative bg-black transition-colors delay-200 overflow-hidden text-lg rounded-full">
          <p className="relative   group-hover:translate-y-[-100%] transition-all duration-300 ease-[cubic-bezier(.33,1,.68,1)] text-slate-100">
            + Become a Client
          </p>
          <div className="absolute z-[2] ease-[cubic-bezier(.33,1,.68,1)] top-full group-hover:top-0 w-full h-full left-0 flex items-center justify-center group-hover:text-black   transition-all duration-300  ">
            <p className="absolute">+ Become a Client</p>
            <div className="w-[50%] group-hover:w-full h-full rounded-full  bg-[#c9ff18] transition-all duration-300 ease-[cubic-bezier(.33,1,.68,1)]"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
