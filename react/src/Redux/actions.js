import * as actionConstant from './actionTypes'
import axios from 'axios'
import swal from 'sweetalert'

export const signupRequest = (payload) => ({
    type: actionConstant.SIGNUP_REQUEST,
    payload
})

export const signupSuccess = (payload) => ({
    type: actionConstant.SIGNUP_SUCCESS,
    payload
})

export const signupFailure = (payload) => ({
    type: actionConstant.SIGNUP_FAILURE,
    payload
})

export const postUserSignup = (payload) => (dispatch) => {
    dispatch(signupRequest(payload))
    return axios.post("http://localhost:8000/api/user/register",
        {

            "name": payload.name,
            "email": payload.email,
            "password": payload.password

        }
    )
        .then((res) => {
            console.log(res)
            dispatch(signupSuccess(res))
            swal("Congratulations!", "Registration Successfull", "success")
        })
        .catch((err) => {
            dispatch(signupFailure(err))
            swal("Oops!", "Something went wrong!", "warning")
        })
}




export const loginRequest = (payload) => ({
    type: actionConstant.LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload) => ({
    type: actionConstant.LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload) => ({
    type: actionConstant.LOGIN_FAILURE,
    payload
})

export const postUserLogin = (payload) => (dispatch) => {
    dispatch(loginRequest(payload))
    return axios.post("http://localhost:8000/api/user/login",
        {
            "email": payload.email,
            "password": payload.password
        }
    )
        .then((res) => {
            console.log(res)
            dispatch(loginSuccess(res))
        })
        .catch((err) => {
            swal("Oops!", "Something went wrong!", "warning")
            dispatch(loginFailure(err))
        })
}



export const postTransactionRequest = (payload) => ({
    type: actionConstant.POST_NEW_TRANSACTION_REQUEST,
    payload
})

export const postTransactionSuccess = (payload) => ({
    type: actionConstant.POST_NEW_TRANSACTION_SUCCESS,
    payload
})

export const postTransactionFailure = (payload) => ({
    type: actionConstant.POST_NEW_TRANSACTION_FAILURE,
    payload
})

export const postUserTransactions = (payload) => (dispatch) => {
    dispatch(postTransactionRequest(payload))
    return axios.post("http://localhost:8000/api/transactions/",
        {
            headers: {
                'user_id': payload
            },
            data: {
                "title": payload.salary,
                "type": payload.type,
                "amount": payload.amount
            }
        }
    )
        .then((res) => {
            console.log(res)
            dispatch(postTransactionSuccess(res))
        })
        .catch((err) => dispatch(postTransactionFailure(err)))
}





export const fetchTransactionRequest = (payload) => ({
    type: actionConstant.FETCH_TRANSACTION_REQUEST,
    payload
})

export const fetchTransactionSuccess = (payload) => ({
    type: actionConstant.FETCH_TRANSACTION_SUCCESS,
    payload
})

export const fetchTransactionFailure = (payload) => ({
    type: actionConstant.FETCH_TRANSACTION_FAILURE,
    payload
})

export const fetchUserTransactions = (payload) => (dispatch) => {
    dispatch(fetchTransactionRequest(payload))
    return axios.get("http://localhost:8000/api/transactions/",
        {
            headers: {
                'user_id': payload
            }
        }
    )
        .then((res) => {
            console.log(res)
            dispatch(fetchTransactionSuccess(res))
        })
        .catch((err) => dispatch(fetchTransactionFailure(err)))
}


