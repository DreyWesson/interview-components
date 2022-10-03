import React from "react";
import { Guess } from "./components/Guess";
import { Qwerty } from "./components/Qwerty";
import { useStateValue } from "./StateProvider";
import { useData } from "./useData";

const App = () => {
  const [{ guesses, winner, loser }] = useStateValue();
  const { handleReset } = useData();

  // TODO
  // create 6 rows of 5 cells
  //

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="" style={{ textAlign: "center" }}>
        <h1>Wordle</h1>
        {guesses.map((el, i) => (
          <Guess current={i} key={i} />
        ))}

        {winner && <h1>You won!!</h1>}
        {loser && <h1>You lost!!</h1>}
        {(winner || loser) && (
          <button
            style={{
              padding: "15px",
              backgroundColor: "dodgerblue",
              border: "none",
              borderRadius: "25px",
              marginBottom: "20px",
              boxShadow: "rgb(0 0 0 / 75%) 2px 3px 8px 0px",
            }}
            onClick={() => handleReset()}
          >
            Play Again
          </button>
        )}
        <Qwerty />
      </div>
    </div>
  );
};

export default App;
