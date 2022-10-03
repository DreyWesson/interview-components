import { useEffect, useRef, useState } from "react";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import isDeepEqual from "fast-deep-equal/react";

export const useData = () => {
  const [state, dispatch] = useStateValue();
  const [data, setData] = useState(state);

  // console.log(data);
  const memoRef = useRef(state);
  if (!isDeepEqual(memoRef.current, data)) {
    memoRef.current = data;
  }
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
      if (memoRef.current.loser || memoRef.current.winner) return;
      if (e.key === "Enter") return handleSubmit();
      if (e.key === "Backspace") {
        dispatch({ type: actionTypes.BACKSPACE });
        return;
      }
      if (
        memoRef.current.guesses[memoRef.current.currentGuess].length < 5 &&
        e.key.match(/^[A-z]$/)
      ) {
        memoRef.current.guesses[memoRef.current.currentGuess] +=
          e.key.toLowerCase();
        setData({ ...memoRef.current });
      }
    };
    dispatch({ type: actionTypes.SET_GAME, action: "set" });
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [dispatch]);
  const handleReset = () =>
    dispatch({ type: actionTypes.SET_GAME, action: "reset" });

  return { data, handleReset };
};
