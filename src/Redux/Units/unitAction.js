import { GET_UNIT_REQUEST, GET_UNIT_REQUEST_SUCCESS , SET_FILTERED_UNIT} from "../actionTypes";

export const getUnitRequest = () => ({
    type: GET_UNIT_REQUEST
})

export const getUnitRequestSuccess = data => ({
    type: GET_UNIT_REQUEST_SUCCESS,
    payload: data
})

// export const setFilter = () => ({
//     type: SET_FILTERED_UNIT,
// })

