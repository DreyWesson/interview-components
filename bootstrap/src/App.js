import React, { useEffect, useMemo, useState } from "react";

const App = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numPerPage] = useState(10);

    const [page, setPage] = useState([]);
    const split = useMemo(
        () => Math.ceil(data.length / numPerPage),
        [data.length, numPerPage]
    );

    useEffect(() => {
        (async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setData(() => data);
        })();
    }, []);

    useEffect(() => {
        const allSeen = currentPage * numPerPage;
        const current = allSeen - numPerPage;

        setPage(() => data.slice(current, allSeen));
    }, [currentPage, data, numPerPage]);

    console.log(currentPage);

    return (
        <div className="container">
            {page.map((d) => (
                <div className="" key={d.id} style={{ marginBottom: "20px" }}>
                    <div className="">{d.id}</div>
                    <div className="">{d.title}</div>
                    <div className="">{d.body}</div>
                </div>
            ))}
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "10px",
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                }}
            >
                {[...new Array(split)].map((li, idx) => (
                    <li
                        style={{ border: "1px solid grey", padding: "7px" }}
                        key={idx}
                        onClick={() =>
                            idx + 1 !== currentPage && setCurrentPage(idx + 1)
                        }
                    >
                        {idx + 1}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
