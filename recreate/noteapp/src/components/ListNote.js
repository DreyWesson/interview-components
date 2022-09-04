import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useData } from "../useData";

export const ListNote = ({ lists, pageHandler, page, handleNoteDisplay }) => {
  const { handleDelete } = useData();
  return (
    <div
      style={{
        width: "25%",
        border: "1px solid grey",
        marginTop: "1.5rem",
        marginRight: "10px",
        position: "relative",
        height: "80vh",
      }}
    >
      {Object.entries(lists).map((list, i) => {
        return (
          <div
            key={i}
            style={{
              padding: "15px 7px",
              borderBottom: "1px solid grey",
              position: "relative",
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
              <span>{list[1].title}</span>
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
                <span style={{ position: "absolute", bottom: "5px" }}>
                  {list[1].createdAt}
                </span>
              </span>
            </div>
          </div>
        );
      })}
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={pageHandler}
          style={{ position: "absolute", bottom: "10px" }}
        >
          {page ? "Open Editor" : "Close Editor"}
        </button>
      </div>
    </div>
  );
};
