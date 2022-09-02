import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?linit=20");
  const getData = useCallback(async () => {
    const res = await fetch(url);
    const list = await res.json();
    setUrl(list.next);
    list.results.forEach(async (data) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`);
      const details = await res.json();
      setData((prev) => [...prev, details]);
    });
  }, [url]);

  // async function getData() {
  //   const res = await fetch(url);
  //   const list = await res.json();
  //   setUrl(list.next);
  //   list.results.forEach(async (data) => {
  //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`);
  //     const details = await res.json();
  //     setData((prev) => [...prev, details]);
  //   });
  // }
  // useEffect(() => {
  //   getData();
  // }, [getData, url, data]);

  console.log(data);
  return (
    <div className="container">
      <h1>Hello</h1>
      <button onClick={() => getData()}>Load More</button>
    </div>
  );
};

export default App;
