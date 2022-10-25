import { useState } from "react";
import "./App.css";
import { Item } from "./Item";

function App() {
    const [empty, setEmpty] = useState(false);
    return (
        <div className="App">
            <h1>Shopping Cart</h1>
            <p>
                <span>Number of items: </span>
                <span>6</span>
            </p>
            <p>
                <span>Total: </span>{" "}
                <span>{JSON.parse(localStorage.getItem("total"))}</span>
            </p>
            <button onClick={() => setEmpty(true)}>Clear shopping cart</button>
            <Item empty={empty} />
        </div>
    );
}

export default App;
