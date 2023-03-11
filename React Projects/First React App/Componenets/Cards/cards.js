import React from "react";

import "./card.css";

import { image_URL } from "../Constants/constants";

const Card = ({ Data }) => {
  const {
    cloudinaryImageId,
    area,
    maxDeliveryTime,
    name,
    cuisines,
    avgRating,
    costForTwoString,
  } = Data;
  //Optional Chaining Used
  return (
    <div className="cards-container">
      <div className="card">
        <div
          className="card-media"
          style={{
            backgroundImage: `url(${image_URL}${cloudinaryImageId})`,
          }}
        >
          <div className="pro-discount">{area}</div>
          <div className="delivery-time">{maxDeliveryTime} mins</div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cuisines?.join(", ")}</p>
            </div>
            <div className="place-review">
              <p className="rating">{avgRating} &#x2605;</p>
              <p className="per-person"> {costForTwoString.toLowerCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
