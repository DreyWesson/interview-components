import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
export const Tabs = () => {
    const arr = useRef([
        { value: "Tokyo", link: "/" },
        { value: "Paris", link: "/vertical-tab" },
        { value: "Abuja", link: "/accordion" },
        { value: "Oslo", link: "/resp" },
    ]);

    return (
        <div style={{ marginBottom: "20px" }}>
            <ul
                style={{
                    display: "flex",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    backgroundColor: "lightgrey",
                }}
            >
                {arr.current.map((data, i) => (
                    <li style={{ padding: "10px" }} key={i}>
                        <NavLink to={data.link}>{data.value}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
