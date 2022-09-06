// import timestamp from "time-stamp";
// import { v4 as uuid } from "uuid";

// const getData = () => {
// const res = await fetch(
//   "https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt"
// );
// let text = await res.text();
// const arr = [];
// let tmp = "";
// for (let i = 0; i < text.length; i++) {
//   const element = text[i];
//   if (element === "\n") {
//     arr.push(tmp);
//     tmp = "";
//     continue;
//   }
//   tmp += element;
// }
// return JSON.stringify(arr);
// return arr;
// };
export const words = ["guess", "tests", "goals", "tenth"];
// console.log(words[(Math.random() * (words.length + 1)) | 0]);
const obj = {
  words,
  word: words[(Math.random() * words.length) | 0],
  guesses: new Array(6).fill(""),
  currentGuess: 0,
  winner: false,
  loser: false,
  allGuesses: [],
  exactGuesses: [],
  inExactGuesses: [],
};
export const initialState = {
  ...obj,
  // get won() {
  //   return this.guesses[this.currentGuess - 1] === this.word;
  // },
  // get lost() {
  //   return this.currentGuess === 6;
  // },
  // get allGuesses() {
  //   return this.guesses.slice(0, this.currentGuess).join("").split("");
  // },
  // get exactGuesses() {
  //   return this.word.split("").filter((letter, i) =>
  //     this.guesses
  //       .slice(0, this.currentGuess)
  //       .map((word) => word[i])
  //       .includes(letter)
  //   );
  // },
  // get inExactGuesses() {
  //   return this.word
  //     .split("")
  //     .filter((letter) => this.allGuesses.includes(letter));
  // },
  // init() {
  //   this.word = words[(Math.random() * words.length) | 0];
  //   this.guesses = new Array(6).fill("");
  // this.guesses = this.guesses.replace(new Array(6).fill(""));
  //   this.currentGuess = 0;
  // },
};
export const actionTypes = {
  SET_GAME: "SET_GAME",
  SET_WINNER: "SET_WINNER",
  SET_LOSER: "SET_LOSER",
  INCREMENT: "INCREMENT",
  BACKSPACE: "BACKSPACE",
  RESET_GAME: "RESET_GAME",
  ALL_GUESSES: "ALL_GUESSES",
  EXACT_GUESSES: "EXACT_GUESSES",
  IN_EXACT_GUESSES: "IN_EXACT_GUESSES",
};

const reducer = (state, { type }) => {
  const {
    SET_GAME,
    SET_WINNER,
    SET_LOSER,
    INCREMENT,
    BACKSPACE,
    RESET_GAME,
    ALL_GUESSES,
    EXACT_GUESSES,
    IN_EXACT_GUESSES,
  } = actionTypes;
  switch (type) {
    case SET_GAME: {
      return {
        ...state,
        // words,
        // word: words[(Math.random() * words.length) | 0],
        // guesses: new Array(6).fill(""),
        // currentGuess: 0,
        // winner: false,
        // loser: false,
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        words,
        word: words[(Math.random() * words.length) | 0],
        guesses: new Array(6).fill(""),
        currentGuess: 0,
        winner: false,
        loser: false,
      };
    }
    case SET_WINNER: {
      return {
        ...state,
        winner: state.guesses[state.currentGuess] === state.word,
      };
    }
    case SET_LOSER: {
      return {
        ...state,
        loser: state.currentGuess === 6,
      };
    }
    case ALL_GUESSES: {
      return {
        ...state,
        allGuesses: state?.guesses
          .slice(0, state.currentGuess)
          .join("")
          .split(""),
      };
    }
    case EXACT_GUESSES: {
      // console.log(state.word);
      // const word = state.word;
      return {
        ...state,
        exactGuesses: state.word.split("").filter((letter, i) =>
          state?.guesses
            .slice(0, state?.currentGuess)
            .map((word) => word[i])
            .includes(letter)
        ),
      };
    }
    case IN_EXACT_GUESSES: {
      return {
        ...state,
        inExactGuesses: state?.word
          .split("")
          .filter((letter) => state.allGuesses.includes(letter)),
      };
    }
    case INCREMENT: {
      return {
        ...state,
        currentGuess: state.currentGuess + 1,
      };
    }
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
