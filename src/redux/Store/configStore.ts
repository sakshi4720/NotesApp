import { createStore, combineReducers } from "redux";
import { notesReducer } from "../Reducers/NotesReducer";
import { userDataTokenReducer } from "../Reducers/UserDataTokenReducer";
import { persistReducer, persistStore } from "redux-persist";

export const rootReducer = combineReducers({
    userDataAndToken: userDataTokenReducer,
    notes: notesReducer,
})

//holds the type of the whole application
export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer);