import React from "react";
import { ArrowUp } from "@geist-ui/icons";

const Carousel = () => {
  return (
    <div className="h-96 carousel carousel-vertical rounded-2xl w-fit overflow-x-visible padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)">
      <div className="carousel-item h-full relative">
        <h3 className="absolute top-5 text-3xl cursive font-semibold text-center w-full opacity-75 animate-pulse">
          Scroll Here
        </h3>
        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
      </div>
    </div>
  );
};

export default Carousel;
