import React from "react";
import { struct, useFormData } from "../useFormData";

export const Form = ({ handleSubmit }) => {
  const { formData, setFormData, handleChange } = useFormData();
  return (
    <div>
      <h1>Create Note</h1>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Type note title"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />
        <label htmlFor="note">Content:</label>
        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Take a note..."
          onChange={handleChange}
          value={formData.note}
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(formData);
            setFormData(struct);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
