import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            let data = await res.json();
            setData(data);
        }
        getData();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        const list = data?.filter(
            (list) => list?.name.toLowerCase().startsWith(value) && list
        );
        setWord(() => value);
        setFilteredList(() => list);
    };

    return (
        <>
            <form className="App" onSubmit={handleChange}>
                <label htmlFor="search-bar"></label>
                <input
                    name="search-bar"
                    placeholder="Search"
                    onChange={handleChange}
                    value={word}
                />
            </form>
            {filteredList?.length > 0 &&
                filteredList.map((user) => (
                    <div key={user?.id || "0"}>{user?.name}</div>
                ))}
        </>
    );
}

export default App;
