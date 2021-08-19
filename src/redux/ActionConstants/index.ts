import { Note } from "../../container/screens/EnterNotes"







// EnterNotes Screen
export const ADD_NOTES = "ADD_NOTES"
export const REMOVE_NOTES = "REMOVE_NOTES"


export interface AddNotesAction {
    type: typeof ADD_NOTES;
    note: Note;
}

export interface RemoveNotesAction {
    type: typeof REMOVE_NOTES;
    id: number;
}

export type NotesActionTypes = AddNotesAction | RemoveNotesAction

export type AppActions = NotesActionTypes