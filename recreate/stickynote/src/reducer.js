import timestamp from "time-stamp";
import { v4 as uuid } from "uuid";

export const initialState = {
  notes: [],
};
export const actionTypes = {
  SET_NOTES: "SET_NOTES",
  ADD_NOTE: "ADD_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
};

const reducer = (state, { type, id, note }) => {
  const { SET_NOTES, ADD_NOTE, DELETE_NOTE } = actionTypes;
  switch (type) {
    case SET_NOTES: {
      return {
        ...state,
        notes: JSON.parse(localStorage.getItem("notes")),
      };
    }
    case ADD_NOTE: {
      note.id = uuid();
      note.createdAt = timestamp("YYYY/MM/DD");
      const newData = [...state.notes, note];
      localStorage.setItem("notes", JSON.stringify(newData));
      return { ...state, notes: newData };
    }
    case DELETE_NOTE: {
      const newData = state.notes.filter((val) => val.id !== id);
      localStorage.setItem("notes", JSON.stringify(newData));
      return { ...state, notes: newData };
    }
    default:
      return state;
  }
};

export default reducer;
