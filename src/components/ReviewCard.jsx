import React from "react";

const ReviewCard = ({ name, description, rating, img }) => {
  return (
    <div className="card h-[50vh] card-compact w-80 lg:w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
      <figure className="w-full h-56 overflow-hidden">
        <img src={img} className="h-auto w-full object-cover " alt="images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>"{description}"</p>
        <div className="card-actions justify-end">
          <div className="rating">
            <input
              disabled
              className="mask mask-star-2 bg-orange-400 cursor-default"
            />
            <input
              disabled
              className="mask mask-star-2 bg-orange-400 cursor-default"
            />
            <input
              disabled
              className="mask mask-star-2 bg-orange-400 cursor-default"
            />
            <input
              disabled
              className="mask mask-star-2 bg-orange-400 cursor-default"
            />
            <input
              disabled
              className="mask mask-star-2 bg-orange-400 cursor-default"
              checked
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
