import React from "react";

export const Dropdown = ({ items }) => {
    return (
        <button className="dropdown-container">
            Services
            <ul className="dropdown">
                {items.map((item, i) => (
                    <li key={i}>
                        <a href={`/${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </button>
    );
};
