import { useEffect, useState } from "react";
import timestamp from "time-stamp";
import { v4 as uuid } from "uuid";

export const struct = {
  id: "",
  title: "",
  note: "",
  createdAt: "",
};
const id = uuid();
const createdAt = timestamp("YYYY/MM/DD");

export const useFormData = () => {
  const [formData, setFormData] = useState(struct);

  const handleChange = ({ target }) => {
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
      id,
      createdAt,
    }));
  };
  useEffect(() => {
    setFormData(formData);
  }, [formData]);
  return { formData, setFormData, handleChange };
};
