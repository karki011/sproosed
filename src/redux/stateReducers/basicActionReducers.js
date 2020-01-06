import { BASIC_ACTION } from "../actionTypes"

const defaultState = {
    result: null,
    loading: false,
    error: null
}
export function basicReducer(state = defaultState, action){
    switch(action.type){
        case BASIC_ACTION.START:
            return {...state, loading: true}
        case BASIC_ACTION.SUCCESS:
            return {
                result: action.payload,
                loading: false,
                error: null
            }
        case BASIC_ACTION.FAIL:
            return {
                result: null,
                loading: false,
                error: action.payload
            }
        default:
            return defaultState
    }
}