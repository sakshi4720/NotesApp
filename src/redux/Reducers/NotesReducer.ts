import { Note } from "../../container/EnterNotes";
import { NotesActionTypes } from "../ActionConstants";

const notesReducerDefaultState: Note[] | null = [];


const notesReducer = (state = notesReducerDefaultState, action: NotesActionTypes) => {
    switch (action.type) {
        case "ADD_NOTES":
            return [...state, action.note];

        case "REMOVE_NOTES":
            return state.filter(({ id }) => id !== action.id);

        default:
            return state;
    }
}

export { notesReducer }


