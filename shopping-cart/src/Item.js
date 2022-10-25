import React, { useEffect, useRef, useState } from "react";
const dataList = [
    { name: "Egg", quantity: 1, price: 2.99 },
    { name: "Milk", quantity: 2, price: 3.98 },
    { name: "Cheese", quantity: 3, price: 3.99 },
];
export const Item = ({ empty }) => {
    const total = useRef(0);
    const [edit, setEdit] = useState(false);
    const [list, setList] = useState(dataList);

    // TODO
    // if quantity === 0 || empty remove item
    useEffect(() => {
        localStorage.setItem("total", JSON.stringify(total.current));
        if (empty) setList(() => []);
    }, [empty]);

    return (
        <div>
            {list?.map(({ price, quantity, name }, i) => {
                const itemTotal = price * quantity;
                total.current += itemTotal;
                localStorage.setItem("total", JSON.stringify(total.current));

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
                                <button
                                    onClick={() =>
                                        setList((current) => {
                                            const update =
                                                structuredClone(current);
                                            const newTotal =
                                                itemTotal -
                                                update[i].quantity *
                                                    update[i].price;
                                            // console.log(
                                            //     itemTotal,
                                            //     newTotal,
                                            //     update[i].quantity,
                                            //     update[i].price
                                            // );
                                            for (
                                                let j = i;
                                                j < update.length;
                                                j++
                                            ) {
                                                update[j] = update[j + 1];
                                            }
                                            update.length = update.length - 1;

                                            total.current = newTotal;

                                            localStorage.setItem(
                                                "total",
                                                JSON.stringify(newTotal)
                                            );
                                            return update;
                                        })
                                    }
                                >
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
                                    type="text"
                                    name={name}
                                    value={list[i].quantity}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        const newVal = e.target.value;
                                        setList((current) => {
                                            const update =
                                                structuredClone(current);
                                            update[i].quantity = newVal;
                                            return update;
                                        });
                                    }}
                                />
                                <div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setList((current) => {
                                                const update =
                                                    structuredClone(current);
                                                update[i].quantity += 1;
                                                return update;
                                            });
                                        }}
                                    >
                                        Add
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setList((current) => {
                                                const update =
                                                    structuredClone(current);
                                                update[i].quantity -= 1;
                                                return update;
                                            });
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div>
                                    <button>Save</button>
                                    <button>Cancel</button>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
