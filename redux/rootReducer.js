import { combineReducers } from 'redux'
import thoughtReducer from './Thought/thoughtReducer'
import authReducer from './Authentication/authReducer'
import {persistReducer} from "redux-persist"
import storage from "@react-native-async-storage/async-storage"

const persistConfig={
    key:"root",
    storage
}

export const rootReducer = combineReducers({
    thoughts: persistReducer(persistConfig,thoughtReducer),
    auth: persistReducer(persistConfig,authReducer)
})