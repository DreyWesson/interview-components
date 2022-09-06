import React from "react";
import { useStateValue } from "../StateProvider";

export const Qwerty = () => {
  const [state] = useStateValue();
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div>
      {qwerty.map((row) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "7px",
          }}
          key={row}
        >
          {row.split("").map((char) => {
            const bgColor = state.exactGuesses.includes(char)
              ? "green"
              : state.inExactGuesses.includes(char)
              ? "yellow"
              : state.allGuesses.includes(char)
              ? "grey"
              : "#fff";
            return (
              <div
                key={char}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30px",
                  width: "30px",
                  backgroundColor: `${bgColor}`,
                  boxShadow: "rgb(0 0 0 / 75%) 2px 3px 8px 0px",
                  margin: "3px",
                  marginRight: "10px",
                  marginLeft: "10px",
                  borderRadius: "7px",
                }}
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
