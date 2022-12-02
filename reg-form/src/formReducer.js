export const initialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    account: "",
    acceptance: "",
    "Choose file": "",
    checkboxes: { Cheese: false, Bugger: false, Pizza: false },
    age: "",
    about: "",
    bio: "",
};
export const actionTypes = {
    FIELD: "FIELD",
    CHECKBOX: "CHECKBOX",
};

export function formReducer(formData, action) {
    const { name, value } = action.payload;
    switch (action.type) {
        case actionTypes.FIELD: {
            return { ...formData, [name]: value };
        }
        default:
            return formData;
    }
}
