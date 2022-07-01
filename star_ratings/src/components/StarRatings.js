import React, { useState } from "react";
import { Stars } from "./Stars";
export const StarRatings = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const handleRating = (ratingVal) =>
    ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9";

  return (
    <div style={{ display: "flex" }}>
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <div key={i}>
            <Stars
              ratingVal={ratingVal}
              setHover={setHover}
              setRating={setRating}
              handleRating={handleRating}
            />
          </div>
        );
      })}
    </div>
  );
};
