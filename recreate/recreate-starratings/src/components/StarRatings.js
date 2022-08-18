import React, { useState } from "react";
import { Star } from "./Stars";

export const StarRatings = () => {
  const [ratings, setRatings] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div style={{ display: "flex" }}>
      {[...Array(5)].map((star, i) => {
        const value = i + 1;
        return (
          <div key={value}>
            <label
              htmlFor="ratings"
              onClick={() => {
                ratings !== value ? setRatings(value) : setRatings(null);
              }}
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
            >
              <input
                type="radio"
                name="ratings"
                value={value}
                style={{ display: "none" }}
              />
              <Star
                color={value <= (hover || ratings) ? "#ebc034" : "#3d3d3c"}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};
