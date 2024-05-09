import React, { useEffect, useRef, useState } from "react";
import Image1 from "../assets/images/cupcakes/american-heritage-chocolate-5K5Nc3AGF1w-unsplash.jpg";
import Image2 from "../assets/images/cupcakes/dessy-dimcheva-zyMJwFBg8u8-unsplash.jpg";
import Image3 from "../assets/images/cupcakes/deva-williamson-S2jw81lfrG0-unsplash.jpg";
import Image4 from "../assets/images/cupcakes/deva-williamson-tW0Ix_Ajg6Y-unsplash.jpg";
import Image5 from "../assets/images/cupcakes/jr-r-90HdOlGbjck-unsplash.jpg";
import Image6 from "../assets/images/cupcakes/luisana-zerpa-MJPr6nOdppw-unsplash.jpg";
import Image7 from "../assets/images/cupcakes/sara-cervera-FAnSK-gVGZU-unsplash.jpg";
import Image8 from "../assets/images/cupcakes/deva-williamson-pZZJwwNPy2k-unsplash.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

const Demonstration = () => {
  const container = useRef();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const slideUp1 = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, 200] : [0, 0]
  );
  const slideUp2 = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, 400] : [0, 0]
  );

  return (
    <div className="lg:min-h-[200vh] h-fit bg-base-200 overflow-hidden w-full flex flex-col justify-center items-center relative py-10">
      <h1 className="font-bold text-6xl lg:text-9xl absolute top-10">
        Portfolio
      </h1>
      <div
        ref={container}
        className="h-fit w-full flex flex-col lg:flex-row justify-center gap-10 items-center lg:mt-0 mt-32 px-10"
      >
        <motion.div
          style={{ y: slideUp1 }}
          className="lg:w-[25vw] w-[80%] flex flex-col justify-center items-center gap-10 "
        >
          <img src={Image1} alt="" className="rounded-xl" />
          <img src={Image2} alt="" className="rounded-xl" />
        </motion.div>
        <motion.div
          style={{ y: slideUp2 }}
          className="lg:w-[25vw] w-[80%] flex flex-col justify-center items-center gap-10 "
        >
          <img src={Image3} alt="" className="rounded-xl" />
          <img src={Image4} alt="" className="rounded-xl" />
        </motion.div>
        <motion.div
          style={{ y: slideUp1 }}
          className="lg:w-[25vw] w-[80%]  flex flex-col justify-center items-center gap-10 "
        >
          <img src={Image5} alt="" className="rounded-xl" />
          <img src={Image6} alt="" className="rounded-xl" />
        </motion.div>
        <motion.div
          style={{ y: slideUp2 }}
          className="lg:w-[25vw] w-[80%]  flex flex-col justify-center items-center gap-10 "
        >
          <img src={Image7} alt="" className="rounded-xl" />
          <img src={Image8} alt="" className="rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Demonstration;
