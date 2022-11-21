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
                        {[...new Array(3).fill("")].map((a, i) => (
                            <Cell key={i} handlePlayer={() => handlePlayer(i)}>
                                {cells[i]}
                            </Cell>
                        ))}
                    </tr>
                    <tr>
                        {[...new Array(3).fill("")].map((a, i) => (
                            <Cell
                                key={i + 3}
                                handlePlayer={() => handlePlayer(i + 3)}
                            >
                                {cells[i + 3]}
                            </Cell>
                        ))}
                    </tr>
                    <tr>
                        {[...new Array(3).fill("")].map((a, i) => (
                            <Cell
                                key={i + 6}
                                handlePlayer={() => handlePlayer(i + 6)}
                            >
                                {cells[i + 6]}
                            </Cell>
                        ))}
                    </tr>
                </tbody>
            </table>
            <button onClick={() => handleRestart()}>restart</button>
        </div>
    );
};

export default App;
