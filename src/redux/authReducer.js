import { SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
    user: null,
    loading: false,
    error: null,
   };   

export const authReducer = (state=initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case SIGN_IN:
            return {...state, user: action.payload}
        case SIGN_OUT:
            return {...state, user: null}
        default:
            return state
    }
}