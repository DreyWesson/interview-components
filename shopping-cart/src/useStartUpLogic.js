import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useStartUpLogic = () => {
    const [saveData, getData] = useLocalStorage();
    const handleLogic = useCallback(
        ({ price, quantity, i, defaultVal }) => {
            const itemTotal = price * quantity;
            const { priceTotal, quantityTotal } = getData("total", defaultVal);

            let newVal = i === 0 ? 0 : priceTotal;
            let newItemNum = i === 0 ? 0 : quantityTotal;
            newVal += itemTotal;
            newItemNum += quantity;
            saveData("total", {
                priceTotal: +newVal.toFixed(2),
                quantityTotal: newItemNum,
            });
            return itemTotal;
        },
        [getData, saveData]
    );
    return [handleLogic];
};
