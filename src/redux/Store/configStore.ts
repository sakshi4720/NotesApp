import { createStore, combineReducers, applyMiddleware } from "redux";
import { notesReducer } from "../Reducers/NotesReducer";
import { userDataTokenReducer } from "../Reducers/UserDataTokenReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

const persistConfig = {
    storage: AsyncStorage,
    key: 'persistedReducer',
    version: 1,
  };
  

export const rootReducer = combineReducers({
    
    persistedReducer: persistReducer(persistConfig, userDataTokenReducer),
   // userDataAndToken: userDataTokenReducer,
    notes: persistReducer(persistConfig, notesReducer),
})

//holds the type of the whole application
export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer,applyMiddleware(thunk));