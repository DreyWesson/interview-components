import { useEffect, useState } from "react";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

export const useData = () => {
  const [data, setData] = useState([]);
  const [{ notes }, dispatch] = useStateValue();

  const handleSubmit = (formData) => {
    dispatch({ type: actionTypes.ADD_NOTE, note: formData });
  };

  const handleDelete = (id) => {
    dispatch({ type: actionTypes.DELETE_NOTE, id });
  };

  useEffect(() => {
    dispatch({ type: actionTypes.SET_NOTES });
  }, [dispatch]);

  useEffect(() => {
    setData(notes);
  }, [notes]);

  return { data, setData, handleSubmit, handleDelete };
};
