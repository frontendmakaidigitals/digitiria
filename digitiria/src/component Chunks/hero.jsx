import React, { useEffect, useRef } from "react";
import HeroForm from "../component/heroForm";
 
import WordPullUp from "@/components/magicui/word-pull-up";
const Hero = ({ navRef }) => {
  const containerRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    if (navRef.current) {
      // Check if navRef is available
      const navHeight = navRef.current.clientHeight;
      containerRef.current.style.height = `calc(100vh - ${navHeight}px)`;
    }
  }, [navRef]);
  return (
    <div
      className={`w-full   bg-grid-slate-100/[0.2] relative flex items-center justify-center`}
      ref={containerRef}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/70 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-11/12 flex justify-between px-2 items-center h-full ">
        <div className="text-slate-50">
          <p className="font-Satoshi text-9xl font-[800]">Develop.</p>

          <p className="font-Satoshi text-9xl font-[800] bg-clip-text text-transparent bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300">
            Preview.
          </p>

          <p className="font-Satoshi text-9xl font-[800] ">Ship.</p>
        </div>
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
