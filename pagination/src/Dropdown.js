import React from "react";

export const Dropdown = ({ name, items }) => {
    return (
        <div className="dropdown-container">
            Services
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
