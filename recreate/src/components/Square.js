import React from "react";

export const Square = ({ value, onClick }) => (
  <button className={`squares ${value ? value : ""}`} onClick={onClick}>
    {value}
  </button>
);
