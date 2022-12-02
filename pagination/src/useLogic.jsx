import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import "./index.css";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";

export const useLogic = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState([]);
    const [numPerPage] = useState(10);

    const { data, isLoading, error, isError } = useQuery(["data"], async () => {
        return await (
            await fetch("https://jsonplaceholder.typicode.com/posts")
        ).json();
    });
    const [, dispatch] = useStateValue();

    const split = useMemo(
        () => Math.ceil(data?.length / numPerPage) ?? 0,
        [data?.length, numPerPage]
    );

    const style = (idx) => ({
        border: "1px solid black",
        padding: "7px",
        backgroundColor: idx !== currentPage ? "" : "dodgerblue",
        color: idx !== currentPage ? "" : "white",
    });
    const items = useMemo(
        () => ["Frontend", "Backend", "Fullstack", "DevOps"],
        []
    );
    const handleClick = (e) => {
        if (e.target !== e.currentTarget) return;
        dispatch({
            type: actionType.TOGGLE_MODAL,
        });
    };

    useEffect(() => {
        let slice = currentPage * numPerPage;
        data?.length && setPage(() => data?.slice(slice - numPerPage, slice));
    }, [data, numPerPage, currentPage]);

    const restProps = {
        isLoading,
        isError,
        error,
        page,
        data,
        split,
        style,
        currentPage,
        setCurrentPage,
        // openModal,
        handleClick,
        items,
    };

    return restProps;
};
