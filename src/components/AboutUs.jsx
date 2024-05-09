import React, { useRef } from "react";
import AboutUsCard from "./AboutUsCard";
import ImagePlaceholder from "../assets/images/placeholder-image.webp";
import Img3 from "../assets/images/features/windows-C6T6vr1sQI0-unsplash.jpg";
import Img2 from "../assets/images/features/alexander-dummer-aS4Duj2j7r4-unsplash.jpg";
import Img1 from "../assets/images/features/maranda-vandergriff-7aakZdIl4vg-unsplash.jpg";
import Img4 from "../assets/images/features/jay-wennington-N_Y88TWmGwA-unsplash.jpg";

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
    <div
      id="process"
      className="min-h-screen w-full overflow-hidden flex flex-col gap-10 justify-evenly items-center py-10 bg-base-200"
    >
      <h1 className="font-bold text-6xl lg:text-9xl">The Process</h1>
      <div
        ref={container}
        className="flex w-[90vw] py-10 justify-center items-center lg:flex-row flex-col gap-5"
      >
        <motion.div style={{ y: y4 }} className="h-fit">
          <AboutUsCard
            name="Step 1: Meet Up"
            description="Coffees on us ! Lets catchup and discuss what youre looking for."
            img={Img1}
          />
        </motion.div>
        <motion.div style={{ y: y3 }} className="h-fit">
          <AboutUsCard
            name="Step 2: Photoshoot"
            description="You bring the food, we capture it using our world-class photography equipment."
            img={Img2}
          />
        </motion.div>
        <motion.div style={{ y: y2 }} className=" h-[fit]">
          <AboutUsCard
            name="Step 3: Editing"
            description="We take care of the post-shoot editing with our team of designers."
            img={Img3}
          />
        </motion.div>
        <motion.div style={{ y: y1 }} className=" h-fit">
          <AboutUsCard
            name="Step 4: Final Result"
            description="Enjoy the final result. We send you the original files, the edited files and more!"
            img={Img4}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
