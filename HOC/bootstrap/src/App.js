import React from "react";
import { HOC } from "./components/Add/Add";
import { WrapBlogPost } from "./components/Post/BlogPost";
import { WrapCommentList } from "./components/Post/CommentList";
import { WrappedTodo } from "./components/Search/TodoList";
import { WrappedUser } from "./components/Search/UsersList";

const App = () => {
    return (
        <div className="">
            <div
                className="container"
                style={{ display: "flex", justifyContent: "space-evenly" }}
            >
                <WrappedUser />
                <WrappedTodo />
            </div>
            <HOC />
            <WrapCommentList />
            <WrapBlogPost />
        </div>
    );
};

export default App;
