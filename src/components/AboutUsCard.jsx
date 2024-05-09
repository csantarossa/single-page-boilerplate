import React from "react";

const AboutUsCard = ({ name, description, img }) => {
  return (
    <div className="card card-compact w-80 h-80 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="images" className="object-cover h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
