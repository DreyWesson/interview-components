import React from "react";
import { PostWrapper } from "./PostWrapper";

export class BlogPost extends React.Component {
    render() {
        const { title, body } = this.props.data;
        return (
            <div style={{ marginTop: "3rem" }}>
                <div>{title}</div>
                <div>{body}</div>
            </div>
        );
    }
}
export const WrapBlogPost = PostWrapper(
    BlogPost,
    "https://jsonplaceholder.typicode.com/posts/1"
);
