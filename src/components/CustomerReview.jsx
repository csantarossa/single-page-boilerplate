import React from "react";
import ReviewCard from "./ReviewCard";
import ImgCustOne from "../assets/images/reviewers/irene-strong-v2aKnjMbP_k-unsplash.jpg";
import ImgCustTwo from "../assets/images/reviewers/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import ImgCustThree from "../assets/images/reviewers/aiony-haust-3TLl_97HNJo-unsplash.jpg";

const CustomerReview = () => {
  return (
    <div className="w-full min-h-screen gap-10 flex justify-evenly items-center flex-col py-10  bg-base-200">
      <h1 className="font-bold text-6xl text-center lg:text-9xl">Reviews</h1>
      <div className="flex justify-center py-12 items-center lg:flex-row flex-col gap-8">
        <ReviewCard
          name={"Max"}
          description={
            "I'm a chef and was able to get a great shoot for my meal-prepping startup. 👨‍🍳 Thanks team!! 🔥"
          }
          img={ImgCustOne}
        />
        <ReviewCard
          name={"Stephanie"}
          description={
            "Whole process completed start to finish within one week... insanely efficient service 🙏"
          }
          img={ImgCustTwo}
        />
        <ReviewCard
          name={"Sienna"}
          description={
            "I have used many other food photographers in my career... this team is on another level. 📸 🥗"
          }
          img={ImgCustThree}
        />
      </div>
    </div>
  );
};

export default CustomerReview;
