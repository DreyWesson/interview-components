import React from "react";

export const Dropdown = ({ name, items }) => {
    return (
        <div className="dropdown-container" style={{ position: "relative" }}>
            Services
            <span className="carrot">^</span>
            <ul className="dropdown">
                {items.map((item, i) => (
                    <li key={i}>
                        <a href={`/${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
