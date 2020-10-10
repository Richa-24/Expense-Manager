import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './authReducer';
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ app: reducer, auth: authReducer })

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

