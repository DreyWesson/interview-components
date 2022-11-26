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
                    {["", "", ""].map((el, j) => (
                        <tr key={Number(Math.random()).toString(16)}>
                            {[...new Array(3).fill("")].map((a, i) => (
                                <Cell
                                    key={Number(Math.random()).toString(32)}
                                    handlePlayer={() => handlePlayer(i)}
                                >
                                    {cells[(i += j > 0 ? j * 3 : j)]}
                                </Cell>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handleRestart()}>restart</button>
        </div>
    );
};

export default App;
