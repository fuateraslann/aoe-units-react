import { GET_UNIT_REQUEST, GET_UNIT_REQUEST_SUCCESS , SET_FILTERED_UNIT} from "../actionTypes";

export const getUnitRequest = () => ({
    type: GET_UNIT_REQUEST
})

export const getUnitRequestSuccess = data => ({
    type: GET_UNIT_REQUEST_SUCCESS,
    payload: data
})

export const setFilteredUnit = (data,agesFilter,woodFilter,foodFilter,goldFilter) => ({
     type: SET_FILTERED_UNIT,
     payload : data
     .filter(element => element.age === agesFilter || agesFilter ==="All")
     .filter(element => (element.cost == null || element.cost.Wood === undefined || woodFilter === null || element.cost.Wood <= woodFilter ) )
     .filter(element => (element.cost == null || element.cost.Food === undefined || foodFilter === null || element.cost.Food <= foodFilter ) )
     .filter(element => (element.cost == null || element.cost.Gold === undefined || goldFilter === null  || element.cost.Gold <= goldFilter ) )
})

