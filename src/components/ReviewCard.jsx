import React from "react";

const ReviewCard = ({ name, description, rating, img }) => {
  return (
    <div className="card h-[50vh] card-compact w-80 lg:w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
      <figure>
        <img src={img} className="h-fit " alt="images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>"{description}"</p>
        <div className="card-actions justify-end">
          <div className="rating">
            <input className="mask mask-star-2 bg-orange-400" />
            <input className="mask mask-star-2 bg-orange-400" />
            <input className="mask mask-star-2 bg-orange-400" />
            <input className="mask mask-star-2 bg-orange-400" />
            <input className="mask mask-star-2 bg-orange-400" checked />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
