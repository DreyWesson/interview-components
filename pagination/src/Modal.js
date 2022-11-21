import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ openModal, handleClick, children }) =>
    ReactDOM.createPortal(
        <div
            className={`overlay ${openModal ? "active" : ""}`}
            onClick={handleClick}
        >
            {children}
        </div>,
        document.getElementById("portal")
    );
