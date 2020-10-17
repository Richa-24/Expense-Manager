import * as actionTypes from './actionTypes';
import swal from 'sweetalert';
import api from '../../utils/api';

export const signupRequest = (payload) => ({
    type: actionTypes.SIGNUP_REQUEST,
    payload
})

export const signupSuccess = (payload) => ({
    type: actionTypes.SIGNUP_SUCCESS,
    payload
})

export const signupFailure = (payload) => ({
    type: actionTypes.SIGNUP_FAILURE,
    payload
})

export const postUserSignup = (payload) => (dispatch) => {
    dispatch(signupRequest(payload))
    return api.post("/user/register", payload)
        .then((res) => {
            dispatch(signupSuccess(res))
            swal("Congratulations!", "Registration Successful", "success")
        })
        .catch((err) => {
            dispatch(signupFailure(err))
            swal("Oops!", "Something went wrong!", "warning")
        })
}

export const loginRequest = (payload) => ({
    type: actionTypes.LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type: actionTypes.LOGIN_FAILURE,
    payload
})

export const postUserLogin = (payload) => (dispatch) => {
    dispatch(loginRequest(payload))
    return api.post("/user/login", payload)
        .then((res) => {
            console.log(res.data._id)
            dispatch(loginSuccess(res.data._id))
            localStorage.setItem("auth", res.data._id)
        })
        .catch((err) => {
            swal("Oops!", "Something went wrong!", "warning")
            dispatch(loginFailure(err))
        })
}


