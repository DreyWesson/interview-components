import React, { useReducer } from "react";
import { actionTypes, formReducer, initialState } from "./formReducer";
import { MultiCheckboxes } from "./MultiCheckboxes";
const checkboxes = { Cheese: false, Bugger: false, Pizza: false };

export const Form = () => {
    const [formData, dispatch] = useReducer(formReducer, initialState);

    const handleCheckboxes = (prop) => {
        const value = Object.keys(checkboxes).reduce((list, curr) => {
            if (prop === curr) checkboxes[curr] = !checkboxes[curr];
            if (checkboxes[curr]) list.push(curr);
            return list;
        }, []);
        dispatch({
            type: actionTypes.FIELD,
            payload: { name: "checkboxes", value },
        });
    };

    const handleChange = ({ target }) => {
        const { name, value, files } = target;
        if (name === "checkbox") return;
        dispatch({
            type: actionTypes.FIELD,
            payload: {
                name,
                value: name !== "Choose file" ? value : files[0],
            },
        });
    };
    console.log(formData);
    return (
        <div
            style={{
                width: "50%",
                margin: "0 auto",
                padding: "40px 0",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <h1 style={{ padding: "20px 0" }}>Registration Form</h1>
                <p style={{ margin: "20px 0" }}>
                    Please fill out this form with the required information
                </p>
            </div>
            <form
                action=""
                style={{ marginTop: "50px" }}
                onChange={handleChange}
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(formData);
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                    }}
                >
                    <label htmlFor="fname">Enter Your First Name:</label>
                    <input
                        type="text"
                        name="fname"
                        onBlur={(e) => {
                            console.log(formData.fname);
                        }}
                    />
                    <i style={{ fontSize: "14px", color: "red" }}>
                        Invalid first name
                    </i>
                    <label htmlFor="lname">Enter Your Last Name:</label>
                    <input type="text" name="lname" />
                    <label htmlFor="email">Enter Your Email:</label>
                    <input type="email" name="email" />
                    <label htmlFor="password">Create a New Password:</label>
                    <input type="password" name="password" />
                </div>
                <hr />
                <div className="">
                    <label htmlFor="personal">
                        <input
                            type="radio"
                            name="account"
                            id="personal"
                            value="personal"
                            style={{ margin: "10px" }}
                        />
                        Personal Account
                    </label>
                </div>
                <div className="">
                    <label htmlFor="business">
                        <input
                            type="radio"
                            name="account"
                            value={"business"}
                            id="business"
                            style={{ margin: "10px" }}
                        />
                        Business Account
                    </label>
                </div>
                <input
                    type="checkbox"
                    name="acceptance"
                    id="acceptance"
                    style={{ margin: "10px" }}
                />
                <label htmlFor="acceptance">
                    I accept the <a href="/">terms and conditions</a>{" "}
                </label>
                {/* CHECKBOXES */}
                {Object.keys(checkboxes).map((val) => (
                    <MultiCheckboxes
                        key={Number(Math.random()).toString(16)}
                        val={val}
                        checkedValues={checkboxes[val]}
                        handleCheckboxes={() => handleCheckboxes(val)}
                    />
                ))}
                {/* CHECKBOXES ENDS */}
                <hr />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                    }}
                >
                    <label htmlFor="file">Upload a profile picture:</label>
                    <input
                        type="file"
                        name="Choose file"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <label htmlFor="age">Input your age (years):</label>
                    <input type="number" name="age" min={0} />

                    <label htmlFor="about">How did you hear about us?</label>
                    <select name="about">
                        <option value="none">(select one)</option>
                        <option value="FreeCodeCamp News">
                            freeCodeCamp News
                        </option>
                        <option value="FreeCodeCamp News">
                            freeCodeCamp Youtube Channel
                        </option>
                        <option value="FreeCodeCamp News">
                            freeCodeCamp Forum
                        </option>
                        <option value="FreeCodeCamp News">Other</option>
                    </select>
                    <label htmlFor="bio">Provide a bio:</label>
                    <textarea
                        name="bio"
                        cols="30"
                        rows="3"
                        placeholder="I like coding on the beach..."
                    ></textarea>
                </div>
                <div className="" style={{ display: "flex", margin: "25px 0" }}>
                    <button
                        style={{
                            width: "50%",
                            margin: "0 auto",
                            padding: "7px",
                            fontSize: "24px",
                            border: "1px solid #fff",
                            backgroundColor: "#3b3b4f",
                            color: "#fff",
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
