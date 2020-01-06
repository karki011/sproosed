import { combineReducers } from 'redux';
import { basicReducer } from "./basicActionReducers"

export default combineReducers({
    basicReducer: basicReducer
})
