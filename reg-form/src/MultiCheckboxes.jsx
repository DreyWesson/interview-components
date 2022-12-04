import React from "react";

export const MultiCheckboxes = ({ val, checkedValues, handleCheckboxes }) => (
    <div
        style={{
            margin: "7px",
        }}
    >
        <label htmlFor={val}>
            <input
                type="checkbox"
                name="checkbox"
                value={val}
                style={{ marginRight: "10px" }}
                checked={checkedValues}
                onChange={handleCheckboxes}
            />
            {val}
        </label>
    </div>
);
