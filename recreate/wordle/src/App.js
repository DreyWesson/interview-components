import React, { useEffect, useState, useRef } from "react";
import { Guess } from "./components/Guess";
import { Qwerty } from "./components/Qwerty";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const App = () => {
  const [state, dispatch] = useStateValue();
  const [data, setData] = useState(state);

  // console.log(data);
  // const memoState = useRef(state);

  useEffect(() => {
    const handleSubmit = () => {
      // if (state?.words.includes(state.guesses[state.currentGuess])) {
      dispatch({ type: actionTypes.SET_WINNER });
      dispatch({
        type: actionTypes.INCREMENT,
      });
      dispatch({ type: actionTypes.SET_LOSER });
      dispatch({ type: actionTypes.ALL_GUESSES });
      dispatch({ type: actionTypes.EXACT_GUESSES });
      dispatch({ type: actionTypes.IN_EXACT_GUESSES });
      // }
    };
    const handleKeyUp = (e) => {
      dispatch({ type: actionTypes.SET_WINNER });
      dispatch({ type: actionTypes.SET_LOSER });
      if (state?.loser || state?.winner) return;
      if (e.key === "Enter") return handleSubmit();
      if (e.key === "Backspace") {
        dispatch({ type: actionTypes.BACKSPACE });
        return;
      }
      if (
        state.guesses[state.currentGuess].length < 5 &&
        e.key.match(/^[A-z]$/)
      ) {
        state.guesses[state.currentGuess] += e.key.toLowerCase();
        setData({ ...state });
        // console.log(memoState.current);
        // dispatch new state changes here
      }
    };
    dispatch({ type: actionTypes.SET_GAME });
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [
    dispatch,
    // memoState,
    state?.word,
    state?.guesses,
    state?.isGuessed,
    state.currentGuess,
    state?.loser,
    state?.winner,
    state?.words,
  ]);
  // console.log(data);

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
        {state?.guesses.map((el, i) => {
          return (
            <Guess
              word={data?.word}
              guess={data?.guesses[i]}
              isGuessed={i < data?.currentGuess}
              current={i}
              key={i}
            />
          );
        })}

        {state.winner && <h1>You won!!</h1>}
        {state.loser && <h1>You lost!!</h1>}
        {(state.winner || state.loser) && (
          <button
            style={{
              padding: "15px",
              backgroundColor: "dodgerblue",
              border: "none",
              borderRadius: "25px",
              marginBottom: "20px",
              boxShadow: "rgb(0 0 0 / 75%) 2px 3px 8px 0px",
            }}
            onClick={() => dispatch({ type: actionTypes.RESET_GAME })}
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
