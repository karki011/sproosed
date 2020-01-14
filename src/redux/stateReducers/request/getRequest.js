import {GET_REQUESTS} from "../../actionTypes";

let defaultState = {
    result: null,
    loading: false,
    error: false
}

const getRequests = (state = defaultState, action) => {
    switch(action.type) {
        case GET_REQUESTS.START:
            return {
                result: null,
                loading: true,
                error: false
            }
        case GET_REQUESTS.SUCCESS:
            return {
                result: action.payload,
                loading: false,
                error: false
            }
        case GET_REQUESTS.FAIL:
            return {
                result: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default getRequests