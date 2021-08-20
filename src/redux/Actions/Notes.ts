import { Dispatch } from "redux";
import { Note } from "../../container/screens/EnterNotes";
import { AppActions } from "../ActionConstants";
import { AppState } from "../Store/configStore";
import { firebase } from "@react-native-firebase/firestore"
import { UserTokenInfo } from "../../container/screens/GoogleSignIn";

export const updateUserDataAndToken = (payload: UserTokenInfo): AppActions => {
    return {
        type: "UPDATE_USER_DATA_AND_TOKEN",
        payload
    }
}

export const updateUserToken = (token: string): AppActions => {
    return {
        type: "UPDATE_USER_TOKEN",
        token
    }
}

export const updateUserData = (payload: UserTokenInfo): AppActions => {
    return {
        type: "UPDATE_USER_DATA",
        payload
    }
}

export const resetUserInfo= (payload: UserTokenInfo): AppActions => {
    return {
        type: "RESET_USER_DATA",
        payload
    }
}


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

        firebase.firestore().collection('userNotes').add({
            id: notesData.id,
            value: notesData.value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

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