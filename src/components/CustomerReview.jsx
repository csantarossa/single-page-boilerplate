import React from "react";
import ReviewCard from "./ReviewCard";
import ImgCustOne from "../assets/images/customer-image-placeholder.svg";
import ImgCustTwo from "../assets/images/customer-image-placeholder.svg";
import ImgCustThree from "../assets/images/customer-image-placeholder.svg";

const CustomerReview = () => {
  return (
    <div className="w-full h-screen flex justify-evenly items-center flex-col">
      <h1 className="font-bold text-4xl">Hear from our customers</h1>
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        <ReviewCard
          name={"Person 1"}
          description={"Description 1"}
          img={ImgCustOne}
        />
        <ReviewCard
          name={"Person 2"}
          description={"Description 2"}
          img={ImgCustTwo}
        />
        <ReviewCard
          name={"Person 3"}
          description={"Description 3"}
          img={ImgCustThree}
        />
      </div>
    </div>
  );
};

export default CustomerReview;