import React, { useState } from "react";
import { calculateWinner } from "../utils/helper";
import { Board } from "./Board";

export const Games = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [numOfMoves, setNumOfMoves] = useState(0);
  const [isPlayerXNext, setIsPlayerXNext] = useState(true);
  const xAndO = isPlayerXNext ? "X" : "O";
  const winner = numOfMoves > 3 && calculateWinner(history[numOfMoves]);

  const handleClick = (index) => {
    const playedHistory = history.slice(0, numOfMoves + 1);
    const currentPosition = playedHistory[numOfMoves];
    const squares = [...currentPosition];

    if (winner || squares[index]) return;

    squares[index] = xAndO;
    setHistory([...playedHistory, squares]);
    setNumOfMoves(playedHistory.length);
    setIsPlayerXNext(!isPlayerXNext);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Board squares={history[numOfMoves]} onClick={handleClick} />
      </div>
      {/* <div className="info-wrapper"> */}
      <h3 className="status">
        {winner
          ? `Winner: ${winner} 🏆`
          : !winner && numOfMoves === 9
          ? "It's a tie 🙅"
          : "Next Player: " + xAndO}
      </h3>
      {/* </div> */}
    </>
  );
};
