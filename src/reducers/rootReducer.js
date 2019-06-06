import {combineReducers} from 'redux'
import promoReducer from './promoReducer'
//import formReducer from 'formReducer'


export default combineReducers({
    promoReducerValue: promoReducer
})