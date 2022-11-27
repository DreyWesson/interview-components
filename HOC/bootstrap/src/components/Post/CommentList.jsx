import React from "react";
import { PostWrapper } from "./PostWrapper";

class CommentList extends React.Component {
    render() {
        const { data: comments } = this.props;
        return (
            <div>
                {comments?.slice(0, 5).map((comment) => (
                    <div key={comment.id}>
                        <div className="">{comment?.namely}</div>
                        <div className="">{comment?.body}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export const WrapCommentList = PostWrapper(
    CommentList,
    "https://jsonplaceholder.typicode.com/comments"
);
