import { call, put, takeEvery } from 'redux-saga/effects'
import { getUnitList } from '../../Api/apiForUnits'
import { getUnitRequestSuccess } from './unitAction'
import { GET_UNIT_REQUEST} from "../actionTypes";
function* fetchData() {
  try {
    const data = yield call(getUnitList)
    yield put(getUnitRequestSuccess(data))
  } catch (err) {
    console.log('error :', err)
  }
}


export default function* unitSaga() {
  yield takeEvery(GET_UNIT_REQUEST, fetchData)
}
