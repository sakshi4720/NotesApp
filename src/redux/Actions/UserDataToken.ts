
import { AppActions } from "../ActionConstants";
import { firebase } from "@react-native-firebase/firestore"
import { UserTokenInfo } from "../../container/screens/GoogleSignIn";
import { Dispatch } from "redux";
import { AppState } from "../Store/configStore";


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

export const resetUserInfo= (): AppActions => {
    return {
        type: "RESET_USER_DATA",
        
    }
}


export const updateUserTokenAction = (token:string) => {
    return (dispatch: Dispatch<AppActions>, state: () => AppState)=>{
        dispatch(updateUserToken(token));
    }
}

export const logoutUserAction = (token:string) => {
    return (dispatch: Dispatch<AppActions>, state: () => AppState)=>{
        dispatch(resetUserInfo());
    }
}





