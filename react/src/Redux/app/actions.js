import api from '../../utils/api';
import * as actionTypes from './actionTypes';

export const postTransactionRequest = (payload) => ({
  type: actionTypes.POST_NEW_TRANSACTION_REQUEST,
  payload
})

export const postTransactionSuccess = (payload) => ({
  type: actionTypes.POST_NEW_TRANSACTION_SUCCESS,
  payload
})

export const postTransactionFailure = (payload) => ({
  type: actionTypes.POST_NEW_TRANSACTION_FAILURE,
  payload
})

export const postUserTransactions = (payload) => (dispatch) => {
  dispatch(postTransactionRequest(payload))
  return api.post("/transactions",
    {
      "title": payload.title,
      "type": payload.type,
      "amount": payload.amount
    },
    {
      headers: {
        'user_id': payload.user_id
      },

    }
  )
    .then((res) => {
      console.log(res)
      dispatch(postTransactionSuccess(res))
    })
    .catch((err) => dispatch(postTransactionFailure(err)))
}

export const fetchTransactionRequest = (payload) => ({
  type: actionTypes.FETCH_TRANSACTION_REQUEST,
  payload
})

export const fetchTransactionSuccess = (payload) => ({
  type: actionTypes.FETCH_TRANSACTION_SUCCESS,
  payload
})

export const fetchTransactionFailure = (payload) => ({
  type: actionTypes.FETCH_TRANSACTION_FAILURE,
  payload
})

export const fetchUserTransactions = (payload) => (dispatch) => {
  console.log(payload)
  dispatch(fetchTransactionRequest(payload))
  return api.get("transactions/",
    {
      headers: {
        'user_id': payload
      },
      params: {
        limit: 5
      }
    }
  )
    .then((res) => {
      console.log(res)
      console.log(res.data.results)
      dispatch(fetchTransactionSuccess(res.data.results))
    })
    .catch((err) => dispatch(fetchTransactionFailure(err)))
}
