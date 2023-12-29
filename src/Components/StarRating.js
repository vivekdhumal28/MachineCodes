//StarRating Component
import React, { useState } from "react";

const Star = ({ filled, onClick }) => {
  return (
    <span
      style={{ color: filled ? "gold" : "gray", cursor: "pointer" }}
      onClick={onClick}
    >
      &#9733;
    </span>
  );
};

const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  const handleStarClick = (rating) => {
    setSelectedStar((prevRating) => (prevRating === rating ? 0 : rating));
  };
  return (
    <>
      <div>
        {arr.map((index) => (
          <Star
            key={index}
            filled={index <= selectedStar}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
      <div>Selected Rating: {selectedStar || "Please Rate"}</div>
    </>
  );
};

export default StarRating;
//--------------------------------------------------------------------------------------------------
/*
import React from "react";
const StarRating = () => {
  const rating = (stars) => "★★★★★☆☆☆☆☆☆".slice(5 - stars, 10 - stars);
  return (
    <div>
      <h1>Star Rating</h1>
      <p>Rating: {rating(1)}</p>
    </div>
  );
};

export default StarRating;
*/
