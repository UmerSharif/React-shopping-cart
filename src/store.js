import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'

import promoReducer from './reducers/promoReducer'


const initialState = {}

const middleWares = [logger, thunk]

const store = createStore(
        combineReducers({
        promoReducer
        }),
        initialState, 
        compose(
        applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store