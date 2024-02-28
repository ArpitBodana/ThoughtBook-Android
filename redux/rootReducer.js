import { combineReducers } from 'redux'
import thoughtReducer from './Thought/thoughtReducer'
import authReducer from './Authentication/authReducer'



export const rootReducer = combineReducers({
    thoughts: thoughtReducer,
    auth: authReducer
})