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

    const handleLogic = useCallback((price, quantity, i) => {
        const itemTotal = price * quantity;
        let val = i === 0 ? 0 : JSON.parse(localStorage.getItem("total"));
        val += itemTotal;
        localStorage.setItem("total", JSON.stringify(val));
        return itemTotal;
    }, []);

    // TODO
    useEffect(() => {
        setSum(() => JSON.parse(localStorage.getItem("total")));
        // localStorage.setItem("tmp", list);

        if (empty) setList(() => []);
    }, [empty]);

    const removeItemHandler = (i) =>
        setList((current) => {
            const update = structuredClone(current);
            const newTotal = +(
                JSON.parse(localStorage.getItem("total")) -
                update[i].quantity * update[i].price
            ).toFixed(2);
            setSum(() => newTotal);
            localStorage.setItem("total", JSON.stringify(newTotal));
            for (let j = i; j < update.length; j++) {
                update[j] = update[j + 1];
            }
            update.length = update.length - 1;
            return update;
        });
    const handleMinusAdd = (type, i, name, newVal) => {
        setList((current) => {
            const update = structuredClone(current);
            type === "minus"
                ? (update[i].quantity -= 1)
                : (update[i].quantity += 1);
            return update;
        });
    };

    const tmpHandler = (name, newSum) =>
        setTmp((prev) => ({
            ...prev,
            [name]: newSum,
        }));
    const handleSafe = (dataList) => {
        localStorage.setItem("tmp", dataList);
    };
    console.log(tmp);
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
                                    onChange={(e) => {
                                        e.preventDefault();
                                        const newVal = +e.target.value;
                                        const newSum = newVal * list[i].price;
                                        setList((current) => {
                                            const update =
                                                structuredClone(current);
                                            update[i].quantity = newVal;
                                            return update;
                                        });
                                        tmpHandler(name, newSum);
                                    }}
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
                                    <button onClick={() => {}}>Save</button>
                                    <button
                                        onClick={() => {
                                            setEdit(!edit);
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
