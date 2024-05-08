import React, { useRef } from "react";
import AboutUsCard from "./AboutUsCard";
import ImagePlaceholder from "../assets/images/placeholder-image.webp";
import { motion, useTransform, useScroll } from "framer-motion";

const AboutUs = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [1, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [1, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [1, -400]);
  const y4 = useTransform(scrollYProgress, [0, 1], [1, -500]);

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col gap-10 justify-evenly items-center py-10 my-10">
      <h1 className="font-bold text-4xl">About Us</h1>
      <div
        ref={container}
        className="flex w-[90vw] py-12 justify-center items-center lg:flex-row flex-col gap-5"
      >
        <motion.div style={{ y: y4 }} className="h-fit">
          <AboutUsCard
            name="Feature 1"
            description="Description 1: This is sample text showing how you might fill this description."
            img={ImagePlaceholder}
          />
        </motion.div>
        <motion.div style={{ y: y3 }} className="h-fit">
          <AboutUsCard
            name="Feature 2"
            description="Description 2: This is sample text showing how you might fill this description."
            img={ImagePlaceholder}
          />
        </motion.div>
        <motion.div style={{ y: y2 }} className=" h-fit">
          <AboutUsCard
            name="Feature 3"
            description="Description 3: This is sample text showing how you might fill this description."
            img={ImagePlaceholder}
          />
        </motion.div>
        <motion.div style={{ y: y1 }} className=" h-fit">
          <AboutUsCard
            name="Feature 4"
            description="Description 4: This is sample text showing how you might fill this description."
            img={ImagePlaceholder}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
