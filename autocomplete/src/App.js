import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const url = "https://jsonplaceholder.typicode.com/users";
                const res = await fetch(url);
                if (!res.ok) throw Error(`${url} responded with ${res.status}`);
                setData(await res.json());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        if (word === "") setFilteredList(() => data);
    }, [word, data]);

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
                <label htmlFor="search-bar">
                    <input
                        name="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                        value={word}
                    />
                </label>
            </form>
            {filteredList?.length > 0 &&
                filteredList.map((user) => (
                    <div key={user?.id || "0"}>{user?.name}</div>
                ))}
        </>
    );
}

export default App;
