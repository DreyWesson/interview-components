import React from "react";
import { withWrapper } from "./Wrapper";

const UsersList = ({ data }) => {
    return (
        <div>
            {data?.map((user) => (
                <div key={Number(Math.random()).toString(16)}>{user?.name}</div>
            ))}
        </div>
    );
};
export const WrappedUser = withWrapper(UsersList, "users");
