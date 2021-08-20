
import { UserTokenInfo } from "../../container/screens/GoogleSignIn";
import { UserTokenAndDataActionTypes } from "../ActionConstants";

const userDataAndTokenReducerDefaultState: UserTokenInfo[] | null = [];


const userDataTokenReducer = (state = userDataAndTokenReducerDefaultState, action: UserTokenAndDataActionTypes) => {
    switch (action.type) {
        case "UPDATE_USER_DATA_AND_TOKEN":
            return [...state, action.payload];

        case "UPDATE_USER_TOKEN":
            return state.filter(({ token }) => token !== action.token);

            case "UPDATE_USER_DATA":
            return [...state, action.payload];

            case "RESET_USER_DATA":
            return [...state, action.payload];

        default:
            return state;
    }
}

export { userDataTokenReducer }


