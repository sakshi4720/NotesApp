
import { AppActions } from "../ActionConstants";
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



