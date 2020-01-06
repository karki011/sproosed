import { domain } from "./constants" // not set yet
import { BASIC_ACTION } from "../actionTypes"

export const basicAction = () => dispatch => {
    console.log("bang")
    dispatch({
        type: BASIC_ACTION.START
    })

    //Timeout mimicking fetch request
    window.setTimeout(() => {
        console.log("bang")
        dispatch({
            type: BASIC_ACTION.SUCCESS,
            payload: "data to update store"
        })
    }, 300)

    /* or

        dispatch({
            type: BASIC_ACTION.FAIL,
            payload: "ERROR MESSAGE"
        })

    */
}
