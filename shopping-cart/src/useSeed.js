import { useMemo } from "react";

export const useSeed = () => {
    const dataList = useMemo(
        () => [
            { name: "Egg", quantity: 1, price: 2.99 },
            { name: "Milk", quantity: 2, price: 3.98 },
            { name: "Cheese", quantity: 3, price: 3.99 },
        ],
        []
    );
    const defaultVal = useMemo(() => ({ priceTotal: 0, quantityTotal: 0 }), []);
    return [dataList, defaultVal];
};
