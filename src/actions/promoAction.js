
const handleChange = formVal => dispatch => {
    dispatch({
        type: 'PROMO_CODE',
        payload: formVal.target.value
    })
}

export default handleChange