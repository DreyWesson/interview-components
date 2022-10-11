import React from "react";

export const MultiCheckboxes = ({ data, checkedValues, handleCheckboxes }) => (
    <div>
        {data.map((val, i) => (
            <div
                key={i}
                style={{
                    margin: "7px",
                }}
            >
                <input
                    type="checkbox"
                    name="checkbox"
                    value={val}
                    style={{ marginRight: "10px" }}
                    checked={checkedValues[i]}
                    onChange={() => handleCheckboxes(i)}
                />
                <label htmlFor={val}>{val}</label>
            </div>
        ))}
    </div>
);
