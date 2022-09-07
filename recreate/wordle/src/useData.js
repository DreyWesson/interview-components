import { useEffect, useState } from "react";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

export const useData = () => {
  const [state, dispatch] = useStateValue();
  const [data, setData] = useState(state);

  // console.log(data);
  // const memoState = useRef(state);

  useEffect(() => {
    const handleSubmit = () => {
      // if (state?.words.includes(state.guesses[state.currentGuess])) {
      dispatch({ type: actionTypes.SET_WINNER });
      dispatch({ type: actionTypes.INCREMENT });
      dispatch({ type: actionTypes.SET_LOSER });
      dispatch({ type: actionTypes.ALL_GUESSES });
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
    dispatch({ type: actionTypes.SET_GAME, action: "set" });
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
  const handleReset = () =>
    dispatch({ type: actionTypes.SET_GAME, action: "reset" });

  return { data, handleReset };
};
