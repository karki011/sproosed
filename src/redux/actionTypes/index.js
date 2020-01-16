const createActionTypes = actionName => {
    const ACTIONNAME = actionName.toUpperCase();
    return {
        START: ACTIONNAME + ".START",
        SUCCESS: ACTIONNAME + ".SUCCESS",
        FAIL: ACTIONNAME + ".FAIL",
        INIT: ACTIONNAME + ".INIT"
    };
};

// export const ACTION_NAME = createActionTypes("ACTION_NAME")

export const BASIC_ACTION = createActionTypes("BASIC_ACTION")

export const LOGIN = createActionTypes("LOGIN")
export const LOGOUT = createActionTypes("LOGOUT")
export const GET_REQUESTS = createActionTypes("GET_REQUESTS")
export const POST_REQUEST = createActionTypes("POST_REQUEST")
export const ACCEPT_BID = createActionTypes("ACCEPT_BID")
export const GET_USER = createActionTypes("GET_USER")
export const POST_USER = createActionTypes("POST_USER")