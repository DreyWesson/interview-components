import React from "react";

export const MultiCheckboxes = ({ val, checkedValues, handleCheckboxes }) => (
    <div
        style={{
            margin: "7px",
        }}
    >
        <input
            type="checkbox"
            name="checkbox"
            value={val}
            style={{ marginRight: "10px" }}
            checked={checkedValues}
            onChange={handleCheckboxes}
        />
        <label htmlFor={val}>{val}</label>
    </div>
);
