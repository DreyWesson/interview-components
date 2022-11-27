import React from "react";
import { Wrapper } from "./Wrapper";

const UsersList = ({ data }) => {
    return (
        <div>
            {data?.map((user) => (
                <div key={Number(Math.random()).toString(16)}>{user?.name}</div>
            ))}
        </div>
    );
};
export const WrappedUser = Wrapper(UsersList, "users");
