import { Dispatch } from "redux";
import { Note } from "../../container/screens/EnterNotes";
import { AppActions } from "../ActionConstants";
import { AppState } from "../Store/configStore";


export const addNotes = (note: Note): AppActions => ({
    type: "ADD_NOTES",
    note
});

export const removeNotes = (id: number): AppActions => ({
    type: "REMOVE_NOTES",
    id
});

export const startAddNotes = (notesData: {
    id: number,
    value: string
}) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const { id = 0, value = "" } = notesData;

        const note = { id, value };

        dispatch(
            addNotes({
                ...note,
                id
            })
        )
    }
}

export const startRemoveNotes = (id: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState)=>{
        dispatch(removeNotes(id));
    }
}