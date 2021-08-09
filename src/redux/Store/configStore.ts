import { createStore, combineReducers } from "redux";
import { notesReducer } from "../Reducers/NotesReducer";

export const rootReducer = combineReducers({
    notes: notesReducer,
})

//holds the type of the whole application
export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer);