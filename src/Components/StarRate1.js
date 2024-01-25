import React, { useState } from "react";

const Star = ({ filled, onClick }) => {
  return (
    <>
      <span
        style={{
          color: filled ? "gold" : "grey",
          cursor: "pointer",
          fontSize: "2em",
        }}
        onClick={onClick}
      >
        &#9733;
      </span>
    </>
  );
};

const StarRate1 = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const star = [1, 2, 3, 4, 5];
  const handleStarFilled = (rating) => {
    return setSelectedStar((prevRating) =>
      prevRating === rating ? 0 : rating
    );
  };

  return (
    <>
      <div>
        {star.map((index) => (
          <Star
            key={index}
            filled={index <= selectedStar}
            onClick={() => handleStarFilled(index)}
          ></Star>
        ))}
      </div>
      <div>Your selected rating is {selectedStar || 0}</div>
    </>
  );
};

export default StarRate1;
