import React, { useRef } from "react";
import Carousel from "./Carousel";
import Camera from "@geist-ui/icons/camera";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-16 lg:gap-32 flex-col lg:flex-row mt-10">
        <div className="max-w-md relative flex items-center lg:items-start flex-col justify-center">
          <div className="flex lg:justify-start items-center gap-3">
            <h1 className="lg:text-5xl text-2xl z-10 font-bold mr-2">
              Capture the
            </h1>
            <div className="w-fit h-fit flex justify-center items-center">
              <div className="w-[190px] h-16 absolute z-0 -rotate-2 bg-[#261432]"></div>

              <h1 className="text-5xl z-10 font-bold text-[#EEEAE6]">
                Flavour
              </h1>
            </div>
          </div>

          <p className="py-6 text-center lg:text-start">
            Capturing the art of cuisine with every shot,{" "}
            <strong>create.</strong> transforms your dishes into stunning visual
            stories.
          </p>
          <a href="#portfolio" className="w-fit h-fit">
            <button className="btn btn-primary">
              <Camera size={20} />
              Portfolio
            </button>
          </a>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;
