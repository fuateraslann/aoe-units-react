import { GET_UNIT_REQUEST, GET_UNIT_REQUEST_SUCCESS , SET_FILTERED_UNIT} from "../actionTypes";

export const getUnitRequest = () => ({
    type: GET_UNIT_REQUEST
})

export const getUnitRequestSuccess = data => ({
    type: GET_UNIT_REQUEST_SUCCESS,
    payload: data
})

export const setFilteredUnit = (data,ages,wood,food,gold) => ({
     type: SET_FILTERED_UNIT,
     payload : data
     .filter(element => element.age === ages || ages ==="All")
     .filter(element => (element.cost == null || element.cost.Wood === undefined || wood === null || element.cost.Wood <= wood.Wood ) )
     .filter(element => (element.cost == null || element.cost.Food === undefined || food === null || element.cost.Food <= food.Food ) )
     .filter(element => (element.cost == null || element.cost.Gold === undefined || gold === null  || element.cost.Gold <= gold.Gold ) )
})

