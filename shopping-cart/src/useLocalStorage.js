import { useCallback } from "react";

export const useLocalStorage = () => {
    const saveData = useCallback(
        (name, data) => localStorage.setItem(name, JSON.stringify(data)),
        []
    );
    const getData = useCallback(
        (name, defaultVal = null) =>
            JSON.parse(localStorage.getItem(name)) || defaultVal,
        []
    );

    const clearData = useCallback((name) => localStorage.clear(name), []);

    return [saveData, getData, clearData];
};
