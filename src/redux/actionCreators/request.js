import {GET_REQUESTS, POST_REQUEST} from "../actionTypes"
import { domain, jsonHeaders, handleJsonResponse } from "./constants";

export const getRequests = () => (dispatch, getState) => {
    dispatch({
        type: GET_REQUESTS.START
    })

    let user = getState().auth.login.result.username

    fetch(domain + `/request?username=${user}`)
    .then(res => res.json())
    .then(requests => {
        return dispatch({
            type:GET_REQUESTS.SUCCESS,
            payload: requests
        })
    })
    .catch(err => {
        return dispatch({
            type: GET_REQUESTS.FAIL,
            payload: err
        })
    })
}

export const postRequests = requestText => (dispatch, getState) => {
    dispatch({
        type: POST_REQUEST.START
    })

    let token = getState().auth.login.result.token
    let userID = getState().auth.login.result.id
    let username = getState().auth.login.result.username

    let body = {userID, username, text:requestText}

    fetch(domain = "/request", {
        method: "POST",
        headers: {...jsonHeaders, Authorization: "Bearer " + token},
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(result => {
        return dispatch({
            type: POST_REQUEST.SUCCESS,
            payload: result
        })
    })
    .catch(err => {
        return dispatch({
            type: POST_REQUEST.FAIL,
            payload: err
        })
    })
}