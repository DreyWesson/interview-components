import { useState } from "react";
import "./App.css";

function App() {
    const [number, setNumber] = useState(9);
    // const [details, setDetails] = useState({ name: "marv", age: 2 });
    // let x = 9
    // x = 6

    console.log(number);
    function increment() {
        setNumber((prev) => {
            return (prev += 1);
        });
    }

    function decrement() {
        setNumber((prev) => {
            return (prev -= 1);
        });
    }
    function reset(num) {
        setNumber(num);
    }
    return (
        <div className="App">
            <h1>{number}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={(e) => reset(9)}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default App;
