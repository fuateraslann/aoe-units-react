import { GET_UNIT_REQUEST, GET_UNIT_REQUEST_SUCCESS ,SET_FILTERED_UNIT} from "../actionTypes";
export function unitReducer (state, action){
    switch (action.type) {
      case GET_UNIT_REQUEST:
        return {
            ...state,
            units : {}
        }
      case GET_UNIT_REQUEST_SUCCESS:
        return {
            ...state,
            units: action.payload
        }
    //   case SET_FILTERED_UNIT:
    //         return {
    //             ...state,
    //             units: action.payload,
    //             ages : action.ages,
    //             costs : action.costs
    //         }
      default:
            return state
    }
}