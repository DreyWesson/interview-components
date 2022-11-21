import React from "react";

export const Modal = ({ openModal, handleClick, children }) => {
    const overlay = {
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, .8)",
        opacity: openModal ? 1 : 0,
        pointerEvents: openModal ? "auto" : "none",
        transition: "all 500ms ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <div style={overlay} onClick={handleClick}>
            {children}
        </div>
    );
};
