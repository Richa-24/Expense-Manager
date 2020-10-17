import * as actionTypes from '../app/actionTypes'

const initState = {
    transactions_data: [],
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.POST_NEW_TRANSACTION_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.POST_NEW_TRANSACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                transactions_data: [action.payload, ...state.transactions_data]
            }

        case actionTypes.POST_NEW_TRANSACTION_FAILURE:
            return {
                ...state,
                isLoading: false
            }


        case actionTypes.FETCH_TRANSACTION_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case actionTypes.FETCH_TRANSACTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                transactions_data: action.payload
            }

        default:
            return state
    }
}