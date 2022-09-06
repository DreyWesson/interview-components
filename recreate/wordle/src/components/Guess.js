import React from "react";
import { useStateValue } from "../StateProvider";

export const Guess = ({ current }) => {
  const [{ word, guesses, currentGuess }] = useStateValue();
  return (
    <table style={{ borderSpacing: "10px", margin: "0 auto" }}>
      <tbody>
        <tr>
          {new Array(5).fill("").map((element, i) => {
            const setBg =
              current < currentGuess
                ? "red"
                : guesses[current][i] === word[i]
                ? "#43da19"
                : word.includes(guesses[current][i])
                ? "#ffc101"
                : "grey";
            return (
              <td
                key={i}
                style={{
                  height: "40px",
                  width: "40px",
                  border: `1px solid ${setBg}`,
                  textAlign: "center",
                }}
              >
                {guesses[current][i]}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};
