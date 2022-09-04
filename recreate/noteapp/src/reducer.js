export const initialState = {
  notes: [],
  formData: {
    id: "",
    title: "",
    note: "",
    createdAt: "",
  },
};

export const actionTypes = {
  SET_NOTES: "SET_NOTES",
  ADD_NOTE: "ADD_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  SET_FORM_DATA: "SET_FORM_DATA",
};

const reducer = (state, { type, id, note, formData }) => {
  switch (type) {
    case actionTypes.SET_NOTES: {
      return {
        ...state,
        notes: JSON.parse(localStorage.getItem("notes")),
      };
    }
    case actionTypes.ADD_NOTE: {
      const newData = [...state.notes, note];
      localStorage.setItem("notes", JSON.stringify(newData));
      return { ...state, notes: newData };
    }
    case actionTypes.DELETE_NOTE: {
      const newData = state.notes.filter((val) => val.id !== id);
      localStorage.setItem("notes", JSON.stringify(newData));
      return { ...state, notes: newData };
    }
    case actionTypes.SET_FORM_DATA:
      return { ...state, formData };
    default:
      return state;
  }
};

export default reducer;
