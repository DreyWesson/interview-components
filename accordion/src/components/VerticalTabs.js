import React, { useMemo, useState } from "react";
import "../App.css";
export const VerticalTabs = () => {
    const [capital, setCapital] = useState("");

    const handle = (e) => {
        e.preventDefault();
        setCapital(e.target.innerHTML.toLowerCase());
    };

    const value = useMemo(
        () => ({
            tokyo: "This is capital of Japan",
            paris: "This is capital of France",
            abuja: "This is capital of Nigeria",
        }),
        []
    );

    return (
        <div style={{ display: "flex", marginBottom: "20px", height: "120px" }}>
            <ul
                style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    backgroundColor: "lightgrey",
                    width: "80px",
                }}
                onClick={handle}
            >
                <li
                    style={{ padding: "10px" }}
                    className={capital === "tokyo" ? "active" : ""}
                >
                    Tokyo
                </li>
                <li
                    style={{ padding: "10px" }}
                    className={capital === "paris" ? "active" : ""}
                >
                    Paris
                </li>
                <li
                    style={{ padding: "10px" }}
                    className={capital === "abuja" ? "active" : ""}
                >
                    Abuja
                </li>
            </ul>
            <div>{capital && value[capital]}</div>
        </div>
    );
};
