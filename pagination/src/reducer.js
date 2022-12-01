export const initialState = {
    openModal: false,
};

export const actionType = {
    TOGGLE_MODAL: "TOGGLE_MODAL",
};

export function reducer(state, action) {
    switch (action.type) {
        case actionType.TOGGLE_MODAL: {
            console.log(state.openModal);
            return { ...state, openModal: !state.openModal };
        }
        default:
            return state;
    }
}
