const createActionTypes = actionName => {
    const ACTIONNAME = actionName.toUpperCase();
    return {
        START: ACTIONNAME + ".START",
        SUCCESS: ACTIONNAME + ".SUCCESS",
        FAIL: ACTIONNAME + ".FAIL",
    };
};

// export const ACTION_NAME = createActionTypes("ACTION_NAME")

export const BASIC_ACTION = createActionTypes("BASIC_ACTION")