import NumberTicker from "@/components/magicui/number-ticker";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center mt-20">
      <div className="w-11/12 px-2 items-center h-full">
        <div>
          <p className="text-gray-400 font-Satoshi font-[700]">About us</p>

          <p className="text-4xl font-[500] font-GeneralSans text-gray-100 mt-2">
            {Array.from("We Strive to Innovate").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1 }} // Correct usage of whileInView
              >
                {char}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="w-full flex items-center">
          <div className="w-full">
            <div className="text-white font-GeneralSans text-2xl">
              <span className="font-[600]">Solid Strategy</span>{" "}
              {Array.from(
                "aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insight"
              ).map((char, index) => (
                
                  <span key={index}>{char}</span>
           
              ))}
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-3 mt-12">
              <div className="bg-[#39B8FF] px-3 py-3 rounded-xl">
                <p className="text-6xl font-GeneralSans font-[600]">
                  +<NumberTicker value={100} />
                </p>
                <p className="h-[130px] text-lg font-Satoshi font-[500] mt-5">
                  We have successfully completed a total of 100+ projects
                </p>
              </div>
              <div className="bg-[#39B8FF] px-3 py-3 rounded-xl">
                <p className="text-6xl font-GeneralSans font-[600]">
                  {" "}
                  <NumberTicker value={300} />
                </p>
                <p className="h-[130px] text-lg font-Satoshi font-[500] mt-5">
                  We’ve gathered dozens of reviews from the clients and 300+
                  reviews from their users
                </p>
              </div>
              <div className="bg-[#39B8FF] px-3 py-3 rounded-xl">
                <p className="text-6xl font-GeneralSans font-[600]">
                  +<NumberTicker value={6} />
                </p>
                <p className="h-[130px] text-lg font-Satoshi font-[500] mt-5">
                  Years of experience
                </p>
              </div>
              <div className="bg-[#39B8FF] px-3 py-3 rounded-xl">
                <p className="text-6xl font-GeneralSans font-[600]">
                  +<NumberTicker value={50} />
                </p>
                <p className="h-[130px] text-lg font-Satoshi font-[500] mt-5">
                  Team members of over the globe
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-1/2"
            src="./workplace-culture-abstract-concept-illustration-shared-values-belief-systems-attitude-work-company-team-corporate-culture-high-performance-employee-health.png"
            alt="Workplace culture illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
