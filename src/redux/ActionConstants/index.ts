import { Note } from "../../container/screens/EnterNotes"
import { UserTokenInfo } from "../../container/screens/GoogleSignIn"

// GoogleSignIn Screen

export const UPDATE_USER_DATA_AND_TOKEN = "UPDATE_USER_DATA_AND_TOKEN"
export const UPDATE_USER_TOKEN = "UPDATE_USER_TOKEN"
export const UPDATE_USER_DATA = "UPDATE_USER_DATA"
export const RESET_USER_DATA = "RESET_USER_DATA"


export interface UpdateUserDataAndToken {
    type: typeof UPDATE_USER_DATA_AND_TOKEN,
    payload: UserTokenInfo

}

export interface UpdateUserToken {
    type: typeof UPDATE_USER_TOKEN,
    token: string
}

export interface UpdateUserData {
    type: typeof UPDATE_USER_DATA,
    payload: UserTokenInfo

}

export interface ResetUserInfo {
    type: typeof RESET_USER_DATA,
    // token:string
}


// EnterNotes Screen
export const ADD_NOTES = "ADD_NOTES"
export const GET_NOTES = "GET_NOTES"
export const REMOVE_NOTES = "REMOVE_NOTES"

export interface AddNotesAction {
    type: typeof ADD_NOTES;
    note: Note;
}

export interface GetNotesAction {
    type: typeof GET_NOTES;
    note: Note;
}

export interface RemoveNotesAction {
    type: typeof REMOVE_NOTES;
    id: number;
}

export type UserTokenAndDataActionTypes = UpdateUserDataAndToken | UpdateUserToken | UpdateUserData | ResetUserInfo

export type NotesActionTypes = AddNotesAction | RemoveNotesAction | GetNotesAction

export type AppActions = UserTokenAndDataActionTypes | NotesActionTypes