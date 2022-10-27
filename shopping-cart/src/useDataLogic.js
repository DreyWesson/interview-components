import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useSeed } from "./useSeed";

export const useDataLogic = () => {
    const [dataList, defaultVal] = useSeed();
    const [list, setList] = useState(dataList);
    const [tmp, setTmp] = useState(dataList);
    const [edit, setEdit] = useState(false);
    const [empty, setEmpty] = useState(false);

    const [allTotal, setAllTotal] = useState(defaultVal);

    const [saveData, getData] = useLocalStorage();

    const removeItemHandler = useCallback(
        (i) =>
            setList((current) => {
                const update = structuredClone(current);
                const { priceTotal, quantityTotal } = getData(
                    "total",
                    defaultVal
                );
                const newTotal = +(
                    priceTotal -
                    update[i].quantity * update[i].price
                ).toFixed(2);
                const newQuantity = +(
                    quantityTotal - update[i].quantity
                ).toFixed(2);

                const newSums = {
                    priceTotal: +newTotal.toFixed(2),
                    quantityTotal: newQuantity,
                };
                setAllTotal(() => newSums);
                saveData("total", newSums);
                for (let j = i; j < update.length; j++)
                    update[j] = update[j + 1];
                update.length = update.length - 1;
                return update;
            }),
        [defaultVal, getData, saveData]
    );

    const handleMinusAdd = useCallback((type, i) => {
        setList((current) => {
            const update = structuredClone(current);
            type === "minus"
                ? (update[i].quantity -= 1)
                : (update[i].quantity += 1);
            return update;
        });
    }, []);

    const handleSave = useCallback(
        (type, i) => {
            if (type === "save") {
                setList(() => list);
                setTmp(() => list);
                setAllTotal(() => getData("total"));
                if ((i ?? list[i].quantity) === 0) removeItemHandler(i);
            } else {
                setEdit(!edit);
                setList(() => tmp);
            }
        },
        [list, tmp, edit, getData, removeItemHandler]
    );

    const inputHandler = useCallback((event, i) => {
        const newVal = +event.target.value;
        setList((current) => {
            const update = structuredClone(current);
            update[i].quantity = newVal;
            return update;
        });
    }, []);

    const emptyHandler = useCallback(() => setEmpty(!empty), [empty]);
    const openEditor = useCallback(() => setEdit(!edit), [edit]);

    useEffect(() => {
        setAllTotal(() => getData("total", defaultVal));
        setTmp(() => dataList);
        if (empty) {
            setList(() => []);
            setAllTotal(() => defaultVal);
            saveData("total", defaultVal);
        }
    }, [empty, defaultVal, dataList, getData, saveData]);
    const allFuncs = {
        removeItemHandler,
        handleMinusAdd,
        handleSave,
        inputHandler,
        emptyHandler,
        openEditor,
    };
    return [list, allTotal, empty, edit, allFuncs];
};
