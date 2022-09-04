import { useEffect, useState } from "react";
import timestamp from "time-stamp";
import { v4 as uuid } from "uuid";
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
      id: uuid(),
      createdAt: timestamp("YYYY/MM/DD"),
    }));
  };
  useEffect(() => {
    setFormData(formData);
  }, [formData]);
  return { formData, setFormData, handleChange };
};
