import React from "react";
import { Cell } from "./components/Cells";
import { useVal } from "./useVal";

const App = () => {
  const { winner, handlePlayer, cells, handleRestart } = useVal();
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Tic Tac Toe</h1>
      {winner && <h2>{`Player ${winner} wins`}</h2>}
      <table style={{ width: "50%", margin: "0 auto" }}>
        <tbody>
          <tr>
            <Cell num={0} handlePlayer={handlePlayer} cells={cells} />
            <Cell num={1} handlePlayer={handlePlayer} cells={cells} />
            <Cell num={2} handlePlayer={handlePlayer} cells={cells} />
          </tr>
          <tr>
            <Cell num={3} handlePlayer={handlePlayer} cells={cells} />
            <Cell num={4} handlePlayer={handlePlayer} cells={cells} />
            <Cell num={5} handlePlayer={handlePlayer} cells={cells} />
          </tr>
          <tr>
            <Cell num={6} handlePlayer={handlePlayer} cells={cells} />
            <Cell num={7} handlePlayer={handlePlayer} cells={cells} />
            <Cell num={8} handlePlayer={handlePlayer} cells={cells} />
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleRestart()}>restart</button>
    </div>
  );
};

export default App;
