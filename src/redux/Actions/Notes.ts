import { Dispatch } from "redux";
import { Note } from "../../container/screens/EnterNotes";
import { AppActions } from "../ActionConstants";
import { AppState } from "../Store/configStore";
import { firebase } from "@react-native-firebase/firestore"


export const addNotes = (note: Note): AppActions => ({
    type: "ADD_NOTES",
    note
});

export const getNotes = (note: Note[]): AppActions => ({
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

export const getAddedNotes = () => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {

        const db = firebase.firestore();
        const notes: Note[] = [];
        db.collection('myNotes').get().then((snapshot) => {

            snapshot.docs.forEach(doc => {
                notes.push({ id: doc.data().id, value: doc.data().value });
            });

            dispatch(getNotes(notes))
            //return { code: 200 }
        });




    }
}

export const startRemoveNotes = (noteArray: Note[], id: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {

        // let selectedItemIndex = noteArray.findIndex(element => console.log(element.id));
        const db = firebase.firestore();
        db.collection('myNotes').where('id', '==', id)
            .get()
            .then(querySnapshot => {
                const documentId = querySnapshot.docs.map(doc => doc.id)
                console.log(documentId)
                let res = db.collection('myNotes').doc(documentId.toString()).delete()

                console.log(res)
                dispatch(removeNotes(id));
            })

    }
}