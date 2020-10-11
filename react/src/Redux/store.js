import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducers from './auth/reducers';
import appReducers from './app/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ app: appReducers, auth: authReducers })

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

