import React, { useState } from "react";

export const FileStructure = ({ tree }) => {
    const { name, children } = tree;
    const [expand, setExpand] = useState(false);
    return (
        <div>
            <div className="" onClick={() => setExpand((prev) => !prev)}>{`${
                children ? (expand ? "-" : "+") : ""
            } ${name}`}</div>
            {expand &&
                children?.map((child) => {
                    return (
                        <div
                            style={{ paddingLeft: 10 }}
                            key={Number(Math.random()).toString()}
                        >
                            <FileStructure tree={child} />
                        </div>
                    );
                })}
        </div>
    );
};
