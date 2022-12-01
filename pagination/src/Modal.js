import React from "react";
import ReactDOM from "react-dom";
import { useStateValue } from "./StateProvider";
import { useLogic } from "./useLogic";

export const Modal = ({ children }) => {
    const [{ openModal }] = useStateValue();
    const { handleClick } = useLogic();

    return ReactDOM.createPortal(
        <div
            className={`overlay ${openModal ? "active" : ""}`}
            onClick={handleClick}
        >
            {children}
        </div>,
        document.getElementById("portal")
    );
};
