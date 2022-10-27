import React from "react";
import { useDataLogic } from "./useDataLogic";
import { useSeed } from "./useSeed";
import { useStartUpLogic } from "./useStartUpLogic";
// TODO
// disable save if value is same

export const Item = () => {
    const [list, allTotal, empty, edit, allFuncs] = useDataLogic();
    const [defaultVal] = useSeed();
    const [handleLogic] = useStartUpLogic();

    return (
        <div>
            <div>
                <h1>Shopping Cart</h1>
                <span>
                    <a href="https://fedosejev.github.io/react-shopping-cart/">
                        Sample Link
                    </a>
                </span>
                <p>
                    <span>Number of items: </span>
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {allTotal?.quantityTotal}
                    </span>
                </p>
                <p>
                    <span>Total: </span>{" "}
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        ${allTotal?.priceTotal.toFixed(2)}
                    </span>
                </p>
                <button onClick={allFuncs.emptyHandler} disabled={empty}>
                    Clear shopping cart
                </button>
            </div>
            {list?.map(({ price, quantity, name }, i) => {
                const args = { price, quantity, i, defaultVal };
                const itemTotal = handleLogic(args);

                return (
                    <div key={i + 1}>
                        <h1>{name}</h1>
                        <p>
                            <span>{quantity}</span> x <span>${price} </span>=
                            <span
                                style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                                ${itemTotal.toFixed(2)}
                            </span>
                        </p>
                        {!edit ? (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "7px",
                                }}
                            >
                                <button onClick={allFuncs.openEditor}>
                                    Change quantity
                                </button>
                                <button
                                    onClick={() =>
                                        allFuncs.removeItemHandler(i)
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
                                    type="number"
                                    name={name}
                                    value={list[i].quantity}
                                    onChange={(e) => {
                                        allFuncs.inputHandler(e, i);
                                    }}
                                />
                                <div>
                                    <button
                                        onClick={() =>
                                            allFuncs.handleMinusAdd("add", i)
                                        }
                                    >
                                        Add
                                    </button>
                                    <button
                                        onClick={() =>
                                            allFuncs.handleMinusAdd("minus", i)
                                        }
                                        disabled={list[i].quantity === 0}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            allFuncs.handleSave("save", i)
                                        }
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() =>
                                            allFuncs.handleSave("cancel")
                                        }
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
