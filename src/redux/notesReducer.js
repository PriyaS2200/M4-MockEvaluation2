import { ADD_NOTE, FETCH_NOTES } from "./actions";

const initialState = {
    notes: [],
    loading: false,
    error: null,
   };
   

export const notesReducer = (state=initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case FETCH_NOTES:
            return {...state, notes: action.payload.notes}
        case ADD_NOTE:
            return {...state,notes:[...state.notes,action.payload]}
        default:
            return state
    }
}