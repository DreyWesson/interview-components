import React from "react";
import { struct, useFormData } from "../useFormData";
import { FaPlus } from "react-icons/fa";
import { useData } from "../useData";

export const Form = () => {
  const { formData, setFormData, handleChange } = useFormData();
  const { handleSubmit } = useData();
  return (
    <div
      className=""
      style={{
        padding: "15px 7px",
        position: "relative",
        margin: "10px",
        height: "150px",
        width: "150px",
        boxShadow: "5px 6px 19px -6px rgba(0,0,0,0.5)",
      }}
    >
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <label htmlFor="note"></label>
        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Take a note..."
          style={{ border: "none", resize: "none", outline: "none" }}
          onChange={handleChange}
          value={formData.note}
        ></textarea>
        {formData.note !== "" && (
          <FaPlus
            onClick={() => {
              handleSubmit(formData);
              setFormData(struct);
            }}
            color="dodgerblue"
            style={{ position: "absolute", bottom: "5px", right: "5px" }}
          />
        )}
      </form>
    </div>
  );
};
