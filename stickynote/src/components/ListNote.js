import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useData } from "../useData";
import { Form } from "./Form";
export const ListNote = ({ lists, handleNoteDisplay }) => {
    const { handleDelete } = useData();

    return (
        <div
            style={{
                position: "relative",
                width: "100vw",
                maxWidth: "100vw",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            {Object.entries(lists).map((list, i) => {
                return (
                    <div
                        key={i}
                        style={{
                            padding: "15px 7px",
                            position: "relative",
                            margin: "10px",
                            height: "150px",
                            width: "150px",
                            boxShadow: "5px 6px 19px -6px rgba(0,0,0,0.5)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItem: "flex-start",
                            }}
                            onClick={() => handleNoteDisplay(list[1].id)}
                        >
                            <input
                                type="text"
                                value={list[1].note}
                                style={{ outline: "none", border: "none" }}
                                onChange={(e) => {
                                    lists[i] = e.target.value;
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "10px",
                                    color: "grey",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                    height: "100%",
                                    right: "0px",
                                }}
                            >
                                <RiDeleteBinLine
                                    style={{ position: "absolute", top: "5px" }}
                                    color="red"
                                    size={14}
                                    onClick={() => handleDelete(list[1]?.id)}
                                />
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: "5px",
                                    }}
                                >
                                    {list[1].createdAt}
                                </span>
                            </span>
                        </div>
                    </div>
                );
            })}
            <Form />
        </div>
    );
};
