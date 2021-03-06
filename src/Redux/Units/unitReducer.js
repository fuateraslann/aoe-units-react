import { GET_UNIT_REQUEST, GET_UNIT_REQUEST_SUCCESS ,SET_FILTERED_UNITS , SET_UNIT_FOR_DETAILS} from "../actionTypes";
export function unitReducer (state, action){
    switch (action.type) {
      case GET_UNIT_REQUEST:
        return {
            ...state,
            units : []
        }
      case GET_UNIT_REQUEST_SUCCESS:
        return {
            ...state,
            units: action.payload
        }
      case SET_FILTERED_UNITS:
             return {
                 ...state,
                 filteredUnits: action.payload
             }
      case SET_UNIT_FOR_DETAILS:
             return{
                ...state,
                unitForDetails : action.payload
             }
      default:
            return state
    }
}