import React, { useEffect, useState } from "react";

export const withWrapper = (WrappedComponent, entity) => () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/${entity}`
                );
                if (!res.ok) throw Error("Unable to fetch data");
                const data = await res.json();
                setData(() => data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const filteredData = data?.slice(0, 10).filter((item) => {
        if (entity === "users") {
            const { name } = item;
            return name?.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        } else {
            const { title } = item;
            return title?.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        }
    });

    return (
        <div>
            <label htmlFor="search" style={{ marginRight: "10px" }}>
                Search
            </label>
            <input
                type="text"
                name="search"
                onChange={(e) => setTerm(() => e.target.value)}
            />
            <WrappedComponent data={filteredData} />
        </div>
    );
};
