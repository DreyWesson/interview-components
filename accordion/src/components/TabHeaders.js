import React, { useMemo, useState } from "react";
import "../App.css";
export const TabHeaders = () => {
    const [capital, setCapital] = useState("tokyo");
    const handle = (e) => {
        e.preventDefault();
        setCapital(e.target.innerHTML.toLowerCase());
    };
    const value = useMemo(
        () => ({
            tokyo: "This is capital of Japan",
            paris: "This is capital of France",
            abuja: "This is capital of Nigeria",
            oslo: "This is the capital of norway",
        }),
        []
    );
    const colors = useMemo(
        () => ({
            tokyo: "red",
            paris: "green",
            abuja: "dodgerblue",
            oslo: "orange",
        }),
        []
    );
    const style = {
        textAlign: "center",
        backgroundColor: colors[capital] ? colors[capital] : "",
    };
    return (
        <div style={{ marginBottom: "20px" }}>
            <div style={style}>
                <h1>{capital}</h1>
                <p style={{ marginBottom: "0" }}>{capital && value[capital]}</p>
            </div>

            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    backgroundColor: "lightgrey",
                }}
                onClick={handle}
            >
                <li
                    style={{ padding: "10px" }}
                    className={capital === "tokyo" ? "tokyo" : ""}
                >
                    Tokyo
                </li>
                <li
                    style={{ padding: "10px" }}
                    className={capital === "paris" ? "paris" : ""}
                >
                    Paris
                </li>
                <li
                    style={{ padding: "10px" }}
                    className={capital === "abuja" ? "abuja" : ""}
                >
                    Abuja
                </li>
                <li
                    style={{ padding: "10px" }}
                    className={capital === "oslo" ? "oslo" : ""}
                >
                    Oslo
                </li>
            </ul>
        </div>
    );
};
