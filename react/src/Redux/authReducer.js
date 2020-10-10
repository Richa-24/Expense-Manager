import * as actionConstants from './actionTypes'

const initState = {
    isAuth: false,
    signup: false,
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionConstants.SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case actionConstants.SIGNUP_SUCCESS:
            return {
                ...state,
                signup: true,
                isLoading: false
            }

        case actionConstants.SIGNUP_FAILURE:
            return {
                ...state,
                signup: false,
                isLoading: false
            }



        case actionConstants.LOGIN_REQUEST:
            return {
                ...state,
            }

        case actionConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true
            }

        case actionConstants.LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false
            }

        default:
            return state
    }
}