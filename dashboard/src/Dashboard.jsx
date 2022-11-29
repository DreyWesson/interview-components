import React from "react";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div className="container">
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "80px",
                    height: "100vh",
                    backgroundColor: "#fff",
                }}
            >
                <nav>
                    <ul style={{ padding: 0 }}>
                        <li className="logo">🧤</li>
                        <li>
                            <NavLink href="/" className="links">
                                ☂️
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/" className="links">
                                ➹
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/" className="links">
                                ♤
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/" className="links">
                                ❖
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/" className="links">
                                ✪
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/" className="links">
                                ↪︎
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                style={{
                    margin: "20px 20px 20px 100px",
                    // height: "100vh",
                    backgroundColor: "#fff",
                }}
            >
                content
            </div>
        </div>
    );
};
