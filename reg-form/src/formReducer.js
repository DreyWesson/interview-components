export const initialState = {
    fname: { value: "", validity: null, dirty: false },
    lname: { value: "", validity: null, dirty: false },
    email: { value: "", validity: null, dirty: false },
    password: { value: "", validity: null, dirty: false },
    account: { value: "", validity: null, dirty: false },
    acceptance: { value: "", validity: null, dirty: false },
    "Choose file": "",
    checkboxes: { Cheese: false, Bugger: false, Pizza: false },
    age: { value: "", validity: null, dirty: false },
    about: { value: "", validity: null, dirty: false },
    bio: { value: "", validity: null, dirty: false },
};
export const actionTypes = {
    FIELD: "FIELD",
    CHECK_VALIDITY: "CHECK_VALIDITY",
    CHECKBOXES: "CHECKBOXES",
};
const checkValidity = (name, value) => {
    const str = ["lname", "fname", "acceptance", "about", "bio"];
    if (!!value.length && str.includes(name)) return typeof value === "string";
    return false;
};
export function formReducer(formData, action) {
    const { name, value } = action.payload;
    switch (action.type) {
        case actionTypes.FIELD: {
            return {
                ...formData,
                [name]: {
                    ...formData[name],
                    value,
                },
            };
        }
        case actionTypes.CHECKBOXES: {
            return {
                ...formData,
                [name]: value,
            };
        }
        case actionTypes.CHECK_VALIDITY: {
            const { dirty, value: val } = value;
            return {
                ...formData,
                [name]: {
                    ...formData[name],
                    dirty,
                    validity: checkValidity(name, val),
                },
            };
        }
        default:
            return formData;
    }
}
