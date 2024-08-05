 
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
 
const MarqueeImg = ( ) => {
  
  const text = `Data driven user focused value based ${' '}`
  return (
    <main className="main w-full overflow-x-hidden">
      <div className="sliderContainer overflow-x-hidden">
        <div className="slider ">
          <VelocityScroll
            text={text}
            default_velocity={2}
            className="font-display  text-center text-8xl font-[900] tracking-[-0.02em] text-black bg-[#D5DDCC]  drop-shadow-sm dark:text-white  "
          />
        </div>
      </div>
    </main>
  );
};

export default MarqueeImg;
