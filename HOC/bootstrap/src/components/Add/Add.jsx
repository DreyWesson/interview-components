import React from "react";
import { withAdd } from "./withAdd";

export const Add = ({ a, b }) => {
    const newA = a + 1;
    const newB = b + 1;
    return (
        <div>
            {newA} + {newB} = {newA + newB}
        </div>
    );
};
export const HOC = withAdd(Add);
