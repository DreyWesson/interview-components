import { useEffect, useState } from "react";

export const useDebounce = (func, delay = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(func());
        }, delay);

        return () => clearTimeout(timer);
    }, [func, delay]);

    return debouncedValue;
};
