import {createStore, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'


const initialState = {}

const middleWares = [logger, thunk]

const store = createStore(
        rootReducer,
        initialState, 
        compose(
        applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store