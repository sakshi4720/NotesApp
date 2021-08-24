
import { UserTokenInfo } from "../../container/screens/GoogleSignIn";
import { UserTokenAndDataActionTypes } from "../ActionConstants";
import { Log } from '../../utils/Logger';

const INITIAL_STATE: UserTokenInfo = {
    token: undefined,
};


const userDataTokenReducer = (state = INITIAL_STATE, action: UserTokenAndDataActionTypes) => {

    switch (action.type) {
        case "UPDATE_USER_DATA_AND_TOKEN":
            return { ...state, ...action.payload }

        case "UPDATE_USER_TOKEN":
            return { ...state, token: action.token }

        case "UPDATE_USER_DATA":
            return { ...state, ...action.payload }

        case "RESET_USER_DATA":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export { userDataTokenReducer }


