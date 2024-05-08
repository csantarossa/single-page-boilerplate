import React from "react";
import AboutUsCard from "./AboutUsCard";
import ImagePlaceholder from "../assets/images/placeholder-image.webp";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10 justify-evenly items-center py-10">
      <h1 className="font-bold text-4xl">About Us</h1>
      <div className="flex w-[90vw] justify-center items-center lg:flex-row flex-col gap-5">
        <AboutUsCard
          name="Feature 1"
          description="Description 1: This is sample text showing how you might fill this description."
          img={ImagePlaceholder}
        />
        <AboutUsCard
          name="Feature 2"
          description="Description 2: This is sample text showing how you might fill this description."
          img={ImagePlaceholder}
        />
        <AboutUsCard
          name="Feature 3"
          description="Description 3: This is sample text showing how you might fill this description."
          img={ImagePlaceholder}
        />
        <AboutUsCard
          name="Feature 4"
          description="Description 4: This is sample text showing how you might fill this description."
          img={ImagePlaceholder}
        />
      </div>
    </div>
  );
};

export default AboutUs;
