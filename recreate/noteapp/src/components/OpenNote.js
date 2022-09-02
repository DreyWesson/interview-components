import React, { useEffect, useState } from "react";
import { useData } from "../useData";

export const OpenNote = ({ note }) => {
  const { data } = useData();
  const [displayNote, setDisplayNote] = useState(() =>
    data.length === 0 ? data : {}
  );
  useEffect(() => {
    const filter = (id) => {
      setDisplayNote(data.filter((val) => val.id === id));
    };
    filter(note);
  }, [data, note, setDisplayNote]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h1>{displayNote[0]?.title}</h1>
      </div>
      <div>{displayNote[0]?.note}</div>
    </div>
  );
};
