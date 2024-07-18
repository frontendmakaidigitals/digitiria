 
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
const MarqueeImg = ( ) => {
  
  
  return (
    <main className="main w-full overflow-x-hidden">
      <div className="sliderContainer overflow-x-hidden">
        <div className="slider ">
          <VelocityScroll
           
            text={`Data driven user focused value based ${' '}`}
            default_velocity={2}
            className="font-display  text-center text-9xl font-bold tracking-[-0.02em] text-[#39B8FF] drop-shadow-sm dark:text-white  "
          />
        </div>
      </div>
    </main>
  );
};

export default MarqueeImg;
