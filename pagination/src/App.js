import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Pagination } from "./Pagination";
import { About } from "./About";
import { Dropdown } from "./Dropdown";
import { useLogic } from "./useLogic";

const App = () => {
    const { items, handleClick } = useLogic();

    return (
        <>
            <header>
                <ul className="nav">
                    <li>
                        <a href="/">Home</a>{" "}
                    </li>
                    <li>
                        <a href="/about">About Us</a>{" "}
                    </li>
                    <Dropdown name={"Services"} items={items} />
                    <button onClick={handleClick}>Open Modal</button>
                </ul>
            </header>
            <Routes>
                <Route path="/" element={<Pagination />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
