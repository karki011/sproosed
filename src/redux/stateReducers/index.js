import { combineReducers } from 'redux';
import { basicReducer } from "./basicActionReducers"
import * as auth from "./auth"

export default combineReducers({
    basicReducer: basicReducer,
    auth: combineReducers(auth)
})
