import React, { useState, useEffect, useMemo } from "react";
import { MultiCheckboxes } from "./MultiCheckboxes";
const data = ["Cheese", "Bugger", "Pizza"];

export const Form = () => {
    const [checkedValues, setCheckedValues] = useState(
        new Array(data.length).fill(false)
    );
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        account: "",
        acceptance: "",
        "choose file": "",
        checkboxes: new Array(3).fill(false),
        age: "",
        about: "",
        bio: "",
    });
    const handleCheckboxes = (position) => {
        const updated = [...checkedValues];
        updated[position] = !updated[position];
        setCheckedValues(updated);
    };
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "checkbox") return;
        setFormData((prev) => ({
            ...prev,
            [name.toLowerCase()]: name !== "Choose file" ? value : files[0],
        }));
    };

    const db = useMemo(() => {
        const newVal = [];
        checkedValues.forEach((val, i) => val && newVal.push(data[i]));
        setFormData((prev) => ({ ...prev, checkboxes: newVal }));
    }, [checkedValues]);

    // useEffect(() => {
    //     console.log(formData);
    //     const newVal = [];
    //     checkedValues.forEach((val, i) => val && newVal.push(data[i]));
    //     setFormData((prev) => ({ ...prev, checkboxes: newVal }));
    // }, [checkedValues]);

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
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "start",
                    }}
                >
                    <label htmlFor="fname">Enter Your First Name:</label>
                    <input type="text" name="fname" />
                    <label htmlFor="lname">Enter Your Last Name:</label>
                    <input type="text" name="lname" />
                    <label htmlFor="email">Enter Your Email:</label>
                    <input type="email" name="email" />
                    <label htmlFor="password">Create a New Password:</label>
                    <input type="password" name="password" />
                </div>
                <hr />
                <div className="">
                    <input
                        type="radio"
                        name="account"
                        id="personal"
                        value="personal"
                        style={{ margin: "10px" }}
                    />
                    <label htmlFor="personal">Personal Account</label>
                </div>
                <div className="">
                    <input
                        type="radio"
                        name="account"
                        value={"business"}
                        id="business"
                        style={{ margin: "10px" }}
                    />
                    <label htmlFor="business">Business Account</label>
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
                {/* checkboxes */}
                <MultiCheckboxes
                    data={data}
                    checkedValues={checkedValues}
                    handleCheckboxes={handleCheckboxes}
                />
                {/* checkboxes */}
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
                    <input type="number" name="age" />

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
