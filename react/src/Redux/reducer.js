import * as actionConstants from './actionTypes'

const initState = {
    transactions_data: [],
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionConstants.POST_NEW_TRANSACTION_REQUEST:
            return {
                isLoading: true
            }

        case actionConstants.POST_NEW_TRANSACTION_SUCCESS:
            return {
                isLoading: false,
                transactions_data: action.payload
            }

        case actionConstants.POST_NEW_TRANSACTION_FAILURE:
            return {
                isLoading: false
            }




        case actionConstants.FETCH_TRANSACTION_REQUEST:
            return {
                isLoading: true
            }

        case actionConstants.FETCH_TRANSACTION_SUCCESS:
            return {
                isLoading: false,
                transactions_data: action.payload
            }

        case actionConstants.POST_NEW_TRANSACTION_FAILURE:
            return {
                isLoading: false
            }

        default:
            return state
    }
}