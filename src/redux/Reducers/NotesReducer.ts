import { Note } from "../../container/screens/EnterNotes";
import { NotesActionTypes } from "../ActionConstants";

const INITIAL_STATE: Note = {
   id:0,
   value:"",
};


const notesReducer = (state = INITIAL_STATE, action: NotesActionTypes) => {
    switch (action.type) {
        case "ADD_NOTES":
            return {...state, ...action.note};

        case "GET_NOTES":
            return {...state, ...action.note};

        case "REMOVE_NOTES":
            //return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}

export { notesReducer }


