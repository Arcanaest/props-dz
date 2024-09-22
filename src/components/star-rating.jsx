import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push("★");
    }else if (i < rating) {
      stars.push("☆"); 
    }
  }

  return (
    <div className="starRating">
      {stars.map((star, index) => (
        <h3 key={index} className="star">
          {star}
        </h3>
      ))}
    </div>
  );
};

export default StarRating;
