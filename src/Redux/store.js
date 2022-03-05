import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {unitReducer} from './Units/unitReducer'
import unitSaga from './Units/saga'
const INITIAL_STATE = {
  units: [],
  filteredUnits : [],
  unitForDetails : null
}
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    unitReducer,
    INITIAL_STATE,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(unitSaga)
export default store