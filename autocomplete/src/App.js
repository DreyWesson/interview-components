import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setWord(() => value);
    };
    const filteredList = data?.filter(
        (list) => list?.name.toLowerCase().startsWith(word) && list
    );

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const url = "https://jsonplaceholder.typicode.com/users";
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) throw Error(`${url} responded with ${res.status}`);
                setData(await res.json());
            } catch (error) {
                console.log(error);
            }
        })();
        return () => controller.abort();
    }, []);
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
