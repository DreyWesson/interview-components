import React from "react";
import { withAdd } from "./withAdd";

export const Add = ({ a, b }) => {
    a += 1;
    b += 1;
    return (
        <div>
            {a} + {b} = {a + b}
        </div>
    );
};
export const HOC = withAdd(Add);
