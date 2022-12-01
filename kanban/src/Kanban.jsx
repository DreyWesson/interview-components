import React from "react";
import { withKanban } from "./withKanban";

const Kanban = ({ kanban, dragZone, formData, boardData, color, inputRef }) => {
    return (
        <div className="container">
            <div className="" style={{ width: "100%" }}>
                <div
                    className=""
                    style={{ width: "450px", margin: "2rem 4rem" }}
                >
                    <h1 style={{ marginBottom: "10px" }}>
                        <span style={{ marginRight: "15px" }}>🎒</span>Kanban
                    </h1>
                    <p style={{ marginTop: "5px" }}>
                        Use this template to keep track of everyday, granular
                        to-do items. <strong>Left-click</strong> to move a card
                        to the next phase and <strong>Right-Click</strong> to
                        move to the previous phase
                    </p>
                    <div
                        className=""
                        style={{
                            display: "flex",
                            maxWidth: "440px",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <label
                            htmlFor="newTask"
                            style={{ marginRight: "10px" }}
                        >
                            Add new task:
                        </label>
                        <input
                            type="text"
                            name="newTask"
                            ref={inputRef}
                            style={{
                                flex: 1,
                                padding: "5px",
                                borderRadius: "5px",
                                marginRight: "10px",
                            }}
                            value={formData}
                            onChange={kanban.handleForm}
                        />
                        <button
                            style={{
                                padding: "9px",
                                borderRadius: "5px",
                                width: "70px",
                                border: "none",
                                color: "#fff",
                                fontWeight: "bold",
                                backgroundColor: "dodgerblue",
                            }}
                            onClick={kanban.handleAddBtn}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div
                    className=""
                    style={{
                        display: "flex",
                        flexGrow: "1",
                        minHeight: "50vh",
                        marginTop: "20px",
                        borderTop: "1px solid lightgrey",
                        gap: "10px",
                        overflow: "scroll",
                    }}
                >
                    {Object.keys(boardData).map((phase, stage) => (
                        <div
                            key={Number(Math.random()).toString(16)}
                            className="kanban-phases"
                            onDragEnter={() => (dragZone.phaseDest = stage)}
                        >
                            <div
                                className=""
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <div
                                    className=""
                                    style={{
                                        margin: "7px 0",
                                        backgroundColor: `rgba(${color[stage]})`,
                                        width: "fit-content",
                                        padding: "1px 3px",
                                    }}
                                >
                                    {phase}
                                </div>
                                <div className="">
                                    {boardData[phase].length}
                                </div>
                            </div>
                            {boardData[phase].map((item, index) => (
                                <div
                                    draggable
                                    onDragStart={() =>
                                        kanban.handleDragStart(stage, index)
                                    }
                                    onDragEnter={() =>
                                        (dragZone.indexDest = index)
                                    }
                                    onDragEnd={kanban.handleDrag}
                                    key={Number(Math.random()).toString(32)}
                                    style={{
                                        width: "100%",
                                        fontSize: "22px",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        margin: "10px 0",
                                        boxShadow:
                                            "1px 1px 1px 1px rgba(0,0,0,0.1)",
                                    }}
                                    onClick={(e) =>
                                        kanban.handleMove(e, stage, index)
                                    }
                                    onContextMenu={(e) => {
                                        console.log("RIGHT CLICKED");
                                        kanban.handleMove(e, stage, index);
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const WrappedKanban = withKanban(Kanban);
