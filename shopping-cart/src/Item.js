import React, { useCallback, useEffect, useState } from "react";
const dataList = [
    { name: "Egg", quantity: 1, price: 2.99 },
    { name: "Milk", quantity: 2, price: 3.98 },
    { name: "Cheese", quantity: 3, price: 3.99 },
];
export const Item = () => {
    const [edit, setEdit] = useState(false);
    const [list, setList] = useState(dataList);
    const [sum, setSum] = useState(0);
    const [empty, setEmpty] = useState(false);
    const [tmp, setTmp] = useState(dataList);
    const [allItemNum, setAllItemNum] = useState(0);

    useEffect(() => {
        setSum(() => JSON.parse(localStorage.getItem("total")).val);
        setTmp(() => dataList);
        if (empty) setList(() => []);
    }, [empty]);

    const handleLogic = useCallback((price, quantity, i) => {
        const itemTotal = price * quantity;
        let val = i === 0 ? 0 : JSON.parse(localStorage.getItem("total")).val;
        val += itemTotal;
        localStorage.setItem("total", JSON.stringify({ val }));
        return itemTotal;
    }, []);

    const removeItemHandler = (i) =>
        setList((current) => {
            const update = structuredClone(current);
            const { val } = JSON.parse(localStorage.getItem("total"));
            const newTotal = +(
                val -
                update[i].quantity * update[i].price
            ).toFixed(2);

            setSum(() => newTotal);
            localStorage.setItem("total", JSON.stringify({ val: newTotal }));
            for (let j = i; j < update.length; j++) {
                update[j] = update[j + 1];
            }
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
        setSum(() => JSON.parse(localStorage.getItem("total")).val);
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
                    <span>6</span>
                </p>
                <p>
                    <span>Total: </span> <span>{sum.toFixed(2)}</span>
                </p>
                <button onClick={() => setEmpty(true)}>
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
