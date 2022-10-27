import React, { useCallback, useEffect, useMemo, useState } from "react";
// const dataList = ;
export const Item = () => {
    const defaultVal = useMemo(() => ({ priceTotal: 0, quantityTotal: 0 }), []);
    const dataList = useMemo(
        () => [
            { name: "Egg", quantity: 1, price: 2.99 },
            { name: "Milk", quantity: 2, price: 3.98 },
            { name: "Cheese", quantity: 3, price: 3.99 },
        ],
        []
    );
    const [edit, setEdit] = useState(false);
    const [list, setList] = useState(dataList);
    const [empty, setEmpty] = useState(false);
    const [tmp, setTmp] = useState(dataList);
    const [allTotal, setAllTotal] = useState(defaultVal);

    useEffect(() => {
        setAllTotal(() => JSON.parse(localStorage.getItem("total")));
        setTmp(() => dataList);
        if (empty) {
            setList(() => []);
            setAllTotal(() => defaultVal);
            localStorage.setItem("total", JSON.stringify(defaultVal));
        }
    }, [empty, defaultVal, dataList]);

    const handleLogic = useCallback((price, quantity, i) => {
        const itemTotal = price * quantity;
        const { priceTotal, quantityTotal } = JSON.parse(
            localStorage.getItem("total")
        );

        let newVal = i === 0 ? 0 : priceTotal;
        let newItemNum = i === 0 ? 0 : quantityTotal;
        newVal += itemTotal;
        newItemNum += quantity;
        localStorage.setItem(
            "total",
            JSON.stringify({ priceTotal: newVal, quantityTotal: newItemNum })
        );
        return itemTotal;
    }, []);

    const removeItemHandler = (i) =>
        setList((current) => {
            const update = structuredClone(current);
            const { priceTotal, quantityTotal } = JSON.parse(
                localStorage.getItem("total")
            );
            const newTotal = +(
                priceTotal -
                update[i].quantity * update[i].price
            ).toFixed(2);
            const newQuantity = +(quantityTotal - update[i].quantity).toFixed(
                2
            );

            const newSums = {
                priceTotal: newTotal,
                quantityTotal: newQuantity,
            };
            setAllTotal(() => newSums);
            localStorage.setItem("total", JSON.stringify(newSums));
            for (let j = i; j < update.length; j++) update[j] = update[j + 1];
            update.length = update.length - 1;
            return update;
        });

    const handleMinusAdd = (type, i) => {
        setList((current) => {
            const update = structuredClone(current);
            type === "minus"
                ? (update[i].quantity -= 1)
                : (update[i].quantity += 1);
            return update;
        });
    };

    const handleSave = () => {
        setList(() => list);
        setTmp(() => list);
        setAllTotal(() => JSON.parse(localStorage.getItem("total")));
    };

    const inputHandler = (event, i) => {
        const newVal = +event.target.value;
        setList((current) => {
            const update = structuredClone(current);
            update[i].quantity = newVal;
            return update;
        });
    };

    return (
        <div>
            <div>
                <h1>Shopping Cart</h1>
                <p>
                    <span>Number of items: </span>
                    <span>{allTotal.quantityTotal}</span>
                </p>
                <p>
                    <span>Total: </span>{" "}
                    <span>${allTotal.priceTotal.toFixed(2)}</span>
                </p>
                <button onClick={() => setEmpty(true)} disabled={empty}>
                    Clear shopping cart
                </button>
            </div>
            {list?.map(({ price, quantity, name }, i) => {
                const itemTotal = handleLogic(price, quantity, i);

                return (
                    <div key={i + 1}>
                        <h1>{name}</h1>
                        <p>
                            <span>{quantity}</span> x <span>${price} </span>=
                            <span> ${itemTotal.toFixed(2)}</span>
                        </p>
                        {!edit ? (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "7px",
                                }}
                            >
                                <button onClick={() => setEdit(!edit)}>
                                    Change quantity
                                </button>
                                <button onClick={() => removeItemHandler(i)}>
                                    Remove
                                </button>
                            </div>
                        ) : (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "7px",
                                }}
                            >
                                <input
                                    type="number"
                                    name={name}
                                    value={list[i].quantity}
                                    onChange={(e) => inputHandler(e, i)}
                                />
                                <div>
                                    <button
                                        onClick={() => handleMinusAdd("add", i)}
                                    >
                                        Add
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleMinusAdd("minus", i)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div>
                                    <button onClick={handleSave}>Save</button>
                                    <button
                                        onClick={() => {
                                            setEdit(!edit);
                                            setList(() => tmp);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
