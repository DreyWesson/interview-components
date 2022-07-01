import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [numOfMoves, setNumOfMoves] = useState(0);
  const [isPlayerXNext, setIsPlayerXNext] = useState(true);
  const xAndO = isPlayerXNext ? "X" : "O";
  const winner = numOfMoves > 3 && calculateWinner(history[numOfMoves]);

  const handleClick = (index) => {
    const playedHistory = history.slice(0, numOfMoves + 1); //save d moves upto the current number of moves
    const currentPosition = playedHistory[numOfMoves];
    const squares = [...currentPosition];

    if (winner || squares[index]) return; // if there is a winner or the square is occupied return
    squares[index] = xAndO; // mark square with player's name
    setHistory([...playedHistory, squares]); // add the new square to the historyPoint
    setNumOfMoves(playedHistory.length); // save the number of moves on the board
    setIsPlayerXNext(!isPlayerXNext); // toggle which player is next
  };

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Board squares={history[numOfMoves]} onClick={handleClick} />
      </div>
      <div className="info-wrapper">
        <h3>
          {winner
            ? `Winner: ${winner} 🏆`
            : !winner && numOfMoves === 9
            ? "It's a tie 🙅"
            : "Next Player: " + xAndO}
        </h3>
      </div>
    </>
  );
};

export default Game;
