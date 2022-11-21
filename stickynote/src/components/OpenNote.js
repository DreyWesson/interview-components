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

    return <div>{displayNote[0]?.note}</div>;
};
