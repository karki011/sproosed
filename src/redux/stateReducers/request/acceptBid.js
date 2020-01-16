import {ACCEPT_BID} from "../../actionTypes";

let defaultState = {
    result: null,
    loading: false,
    error: false
}

const acceptBid = (state = defaultState, action) => {
    switch(action.type) {
        case ACCEPT_BID.START:
            return {
                result: null,
                loading: true,
                error: false
            }
        case ACCEPT_BID.SUCCESS:
            return {
                result: action.payload,
                loading: false,
                error: false
            }
        case ACCEPT_BID.FAIL:
            return {
                result: null,
                loading: false,
                error: action.payload
            }
        case ACCEPT_BID.INIT:
            return defaultState
        default:
            return state
    }
}

export default acceptBid