import { useEffect, useState } from "react";
// import { v4 as uuid } from "uuid";
// import timestamp from "time-stamp";

// const lists = [
//   {
//     id: uuid(),
//     title: "Terminator",
//     note: "I can do some fun stuff",
//     createdAt: timestamp("YYYY/MM/DD"),
//   },
//   {
//     id: uuid(),
//     title: "Finisher",
//     note: "You can't out do me",
//     createdAt: timestamp("YYYY/MM/DD"),
//   },
//   {
//     id: uuid(),
//     title: "Punisher",
//     note: "On some terminator shit",
//     createdAt: timestamp("YYYY/MM/DD"),
//   },
// ];
export const useData = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (formData) => {
    const memo = [...data];
    memo.push(formData);
    setData(memo);
    localStorage.setItem("notes", JSON.stringify(memo));
  };

  const handleDelete = (id) => {
    const newData = [];
    newData.push(data.filter((val) => val.id !== id));
    localStorage.setItem("notes", JSON.stringify(newData));
    console.log(JSON.parse(localStorage.getItem("notes")), newData);
    setData(() => JSON.parse(localStorage.getItem("notes")));
  };

  useEffect(() => {
    // localStorage.setItem("notes", JSON.stringify(lists));
    setData([...JSON.parse(localStorage.getItem("notes"))]);
  }, []);

  return { data, setData, handleSubmit, handleDelete };
};
