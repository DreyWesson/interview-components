import React from "react";
import { Wrapper } from "./Wrapper";

const TodoList = ({ data }) => {
    return (
        <div>
            {data?.map((todo) => (
                <div key={Number(Math.random()).toString(16)}>
                    {todo?.title}
                </div>
            ))}
        </div>
    );
};
export const WrappedTodo = Wrapper(TodoList, "todos");
