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

// export const editNotes = (value: string): AppActions => ({
//     type: "EDIT_NOTES",
//     value
// });

export const removeNotes = (id: number): AppActions => ({
    type: "REMOVE_NOTES",
    id
});

//// add notes to firestore
export const startAddNotes = (value: string) => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {

        var user = firebase.auth().currentUser;
        const note = {
            id: new Date().getTime(),
            value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            userID: user?.uid,
        }

        firebase.firestore().collection('myNotes').add(note);

        dispatch(addNotes(note))
        return { code: 200 }
    }
}

// export const startEditNotes = (id: number, value: string) => {
//     return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//         const db = firebase.firestore();
//         var user = firebase.auth().currentUser;
//         let idDoc = db.collection('myNotes').where('id', '==', id)
      
//         db.collection('myNotes').where('id', '==', id).get().then((snapshot) => {
//             snapshot.docs.forEach(doc => {

//                 console.log('*********note updated************')
//                 db.collection("myNotes").doc(doc.id).update({value: value});
//             });
//         dispatch(editNotes(value))
//      });
// }
// }



// get notes from firestore
export const getAddedNotes = () => {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {

        const db = firebase.firestore();
        const notes: Note[] = [];
        var user = firebase.auth().currentUser;
        db.collection('myNotes').orderBy('id', 'desc').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if (doc.data().userID == user?.uid)
                    notes.push({ id: doc.data().id, value: doc.data().value });
            });
            dispatch(getNotes(notes))
        });
    }
}

//delete notes from firestore
export const startRemoveNotes = (id: number) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const db = firebase.firestore();
        db.collection('myNotes').where('id', '==', id)
            .get()
            .then(querySnapshot => {
                const documentId = querySnapshot.docs.map(doc => doc.id)
                let res = db.collection('myNotes').doc(documentId.toString()).delete()
                dispatch(removeNotes(id));
            })

    }
}