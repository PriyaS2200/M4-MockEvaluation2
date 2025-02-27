import { auth } from "@/firebase/firebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_NOTE = "ADD_NOTE";

export const signIn = () => (dispatch) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => dispatch({type:SIGN_IN,payload:result.user.email}))
    .catch((error) => console.log("error.message"))
}

export const signOut = () => (dispatch) => {
    dispatch({type:SIGN_OUT})
}
export const fetchNotes = () => async(dispatch) => {
    dispatch({type:FETCH_LOADING})
    try {
        let response = await axios.get(`https://m4-mockeval2-default-rtdb.firebaseio.com/notes.json`)
        let data = response.data;
        let notes = Object.entries(data).map(([id, note]) => note)
        let notesId = Object.entries(data).map(([id, note]) => id)
        dispatch({type:FETCH_NOTES,payload:{notesId,notes}});
    } catch (error) {
        dispatch({type:FETCH_ERROR,payload:error.message});
    }
   
}

export const addNote = (note) => (dispatch) => {
    console.log(note)
    axios.post('https://m4-mockeval2-default-rtdb.firebaseio.com/notes.json',
        note
    )
    dispatch({type:ADD_NOTE,payload:note});
}
