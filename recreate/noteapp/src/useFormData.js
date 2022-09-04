import { useState } from "react";

export const struct = {
  id: "",
  title: "",
  note: "",
  createdAt: "",
};

export const useFormData = () => {
  const [formData, setFormData] = useState(struct);

  const handleChange = ({ target }) => {
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return { formData, setFormData, handleChange };
};
