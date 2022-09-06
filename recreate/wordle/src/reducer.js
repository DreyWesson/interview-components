export const words = ["guess", "tests", "goals", "tenth"];
const obj = () => ({
  words,
  word: words[(Math.random() * words.length) | 0],
  guesses: new Array(6).fill(""),
  currentGuess: 0,
  winner: false,
  loser: false,
  allGuesses: [],
  exactGuesses: [],
  inExactGuesses: [],
});
export const initialState = {
  ...obj(),
};
export const actionTypes = {
  SET_GAME: "SET_GAME",
  SET_WINNER: "SET_WINNER",
  SET_LOSER: "SET_LOSER",
  INCREMENT: "INCREMENT",
  BACKSPACE: "BACKSPACE",
  ALL_GUESSES: "ALL_GUESSES",
};

const reducer = (state, { type, action }) => {
  const { SET_GAME, SET_WINNER, SET_LOSER, INCREMENT, BACKSPACE, ALL_GUESSES } =
    actionTypes;
  switch (type) {
    case SET_GAME:
      return action === "reset"
        ? {
            ...state,
            ...obj(),
          }
        : { ...state };
    case SET_WINNER:
      return {
        ...state,
        winner: state.guesses[state.currentGuess] === state.word,
      };
    case SET_LOSER:
      return {
        ...state,
        loser: state.currentGuess === 6,
      };
    case ALL_GUESSES:
      return {
        ...state,
        allGuesses: state?.guesses
          .slice(0, state.currentGuess)
          .join("")
          .split(""),
        exactGuesses: state.word.split("").filter((letter, i) =>
          state?.guesses
            .slice(0, state?.currentGuess)
            .map((word) => word[i])
            .includes(letter)
        ),
        inExactGuesses: state?.word
          .split("")
          .filter((letter) => state.allGuesses.includes(letter)),
      };
    case INCREMENT:
      return {
        ...state,
        currentGuess: state.currentGuess + 1,
      };
    case BACKSPACE: {
      state.guesses[state.currentGuess] = state.guesses[
        state.currentGuess
      ].slice(0, state.guesses[state.currentGuess].length - 1);
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducer;
