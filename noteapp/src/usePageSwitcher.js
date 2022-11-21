import { useState } from "react";
import { useData } from "./useData";

export const usePageSwitcher = () => {
    const { data } = useData();
    const [page, setPage] = useState(false);
    const [id, setId] = useState(data[0]?.id || []);
    const pageHandler = () => setPage(() => !page);
    const handleNoteDisplay = (id) => {
        setId(id);
        setPage(true);
    };
    return { page, pageHandler, handleNoteDisplay, id };
};
