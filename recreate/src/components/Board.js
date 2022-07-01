import React from "react";
import { Square } from "./Square";

export const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};
