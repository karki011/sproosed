import { LOGOUT } from "../../actionTypes";

const initialState = {
    result: null,
    loading: false,
    error: null
};

const logout = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT.START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOGOUT.SUCCESS:
            return {
                ...state,
                loading: false,
                result: action.payload
            }
        case LOGOUT.FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default logout