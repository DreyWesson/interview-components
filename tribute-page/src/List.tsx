import React from "react";
type ListProps = {
    year: String;
    details: String;
};
export const List = ({ year, details }: ListProps) => {
    return (
        <div>
            <li
                style={{
                    display: "flex",
                    gap: "10px",
                    textAlign: "start",
                    fontSize: "18px",
                    marginBottom: "10px",
                }}
            >
                <strong>{year}</strong> - <span>{details}</span>
            </li>
        </div>
    );
};
