import React, { useState } from "react";

export const Accordion = () => {
    const [state, setState] = useState([...new Array(3).fill(false)]);
    const handleAccordion = (i) => {
        const arr = [...state];
        arr[i] = !arr[i];
        setState(() => [...arr]);
    };
    return (
        <div>
            {state.map((ac, i) => {
                return (
                    <div className="container" key={i}>
                        <div
                            className="title"
                            onClick={() => handleAccordion(i)}
                            style={{ cursor: "pointer" }}
                        >
                            <span>Section {i + 1}</span>
                            <span>+</span>
                        </div>
                        {state[i] ? (
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                );
            })}
        </div>
    );
};
