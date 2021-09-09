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

  persistedReducer: userDataTokenReducer,
  notes: notesReducer
})

//holds the type of the whole application
export type AppState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = createStore(persistedReducer, applyMiddleware(thunk));

export const Persistor = persistStore(Store)