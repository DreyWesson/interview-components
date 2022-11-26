import { useState } from "react";
const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const useVal = () => {
    const [player, setPlayer] = useState("x");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);

    const getWinner = (squares) => {
        winComb.forEach((comb) => {
            if (
                squares[comb[0]] !== "" &&
                squares[comb[0]] === squares[comb[1]] &&
                squares[comb[2]] === squares[comb[1]]
            ) {
                setWinner(squares[comb[0]]);
                return;
            }
        });
    };

    const handlePlayer = (num) => {
        console.log(num);
        if (cells[num] !== "") return alert("This move is not allowed!");
        if (winner) {
            const reply = window.confirm(
                "We already have a winner! Would you like to restart?"
            );
            if (reply) handleRestart();
            return;
        }
        let squares = [...cells];
        squares[num] = player;
        player === "x" ? setPlayer("o") : setPlayer("x");
        setCells(squares);
        getWinner(squares);
    };

    const handleRestart = () => {
        setPlayer("x");
        setCells(Array(9).fill(""));
        setWinner(null);
    };

    return { cells, player, winner, handlePlayer, handleRestart };
};
