import { useEffect, useState } from "react";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
export const useData = () => {
  const [data, setData] = useState([]);
  const [{ notes }, dispatch] = useStateValue();
  const { ADD_NOTE, DELETE_NOTE, SET_NOTES } = actionTypes;

  const handleSubmit = (formData) =>
    dispatch({ type: ADD_NOTE, note: formData });
  const handleDelete = (id) => dispatch({ type: DELETE_NOTE, id });
  useEffect(() => dispatch({ type: SET_NOTES }), [dispatch, SET_NOTES]);
  useEffect(() => setData(notes), [notes]);

  return { data, setData, handleSubmit, handleDelete };
};
