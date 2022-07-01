import { FaStar } from "react-icons/fa";

export const Stars = ({ ratingVal, setHover, setRating, handleRating }) => (
  <label>
    <input
      type="radio"
      name="rating"
      value={ratingVal}
      onClick={(e) => setRating(e.target.value)}
    />
    <FaStar
      onMouseEnter={() => setHover(ratingVal)}
      onMouseLeave={() => setHover(null)}
      size={100}
      className="star"
      color={handleRating(ratingVal)}
    />
  </label>
);
