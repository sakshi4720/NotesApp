import { Dispatch } from "redux";
import { Note } from "../../container/screens/EnterNotes";
import { AppActions } from "../ActionConstants";
import { AppState } from "../Store/configStore";
import { firebase } from "@react-native-firebase/firestore"


export const addNotes = (note: Note): AppActions => ({
    type: "ADD_NOTES",
    note
});

export const getNotes = (note: Note): AppActions => ({
    type: "GET_NOTES",
    note
});

export const removeNotes = (id: number): AppActions => ({
    type: "REMOVE_NOTES",
    id
});

export const startAddNotes = (value: string) => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const note = {
            id: new Date().getTime(),
            value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }
        const res = await firebase.firestore().collection('myNotes').add(note)
        dispatch(addNotes(note))
        return { code: 200 }
    }
}

export const getAddedNotes = (notesData: {
    id: number,
    value: string
}) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const { id = 0, value = "" } = notesData;

        const db = firebase.firestore();
        db.collection('myNotes').get().then((snapshot) => {

            snapshot.docs.forEach(doc => {
                let items = doc.data();

            });

        });

        const note = { id, value };

        dispatch(
            getNotes({
                ...note,
                id
            })


        )
    }
}

export const startRemoveNotes = (id: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(removeNotes(id));
    }
}