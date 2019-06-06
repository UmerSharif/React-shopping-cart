import {PROMO_CODE} from './rootAction'

export const handleChange = formVal => dispatch => {
    dispatch({
        type: PROMO_CODE,
        payload: formVal.target.value
    })
}
