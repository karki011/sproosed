import {POST_REQUEST} from "../../actionTypes";

let defaultState = {
    result: null,
    loading: false,
    error: false
}

const postRequests = (state = defaultState, action) => {
    switch(action.type) {
        case POST_REQUEST.START:
            return {
                result: null,
                loading: true,
                error: false
            }
        case POST_REQUEST.SUCCESS:
            return {
                result: action.payload,
                loading: false,
                error: false
            }
        case POST_REQUEST.FAIL:
            return {
                result: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default postRequests