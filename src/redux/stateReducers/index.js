import { combineReducers } from 'redux';
import { basicReducer } from "./basicActionReducers"
import * as auth from "./auth"
import * as requests from "./request"

export default combineReducers({
    basicReducer: basicReducer,
    auth: combineReducers(auth),
    requests: combineReducers(requests)
})
