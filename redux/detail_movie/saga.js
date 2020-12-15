import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './action'
import * as types from './type'
import * as api from '../services/api'

function* detailMovieSaga({ id }){
  try {
    yield put(actions.loadingGetDetailMovie(true))
    const response = yield call(api.getDetailMovieById, id)
    if(response) {
      yield put(actions.getDetailMovieSuccess(response))
    } else {
      yield put(actions.getDetailMovieFailure({
        code: 404,
        message: 'Not found data'
      }))
    }
  } catch (error) {
    yield put(actions.getDetailMovieFailure(error))
  } finally {
    yield put(actions.loadingGetDetailMovie(false))
  }
}

export default function* watchDetailSaga() {
  yield takeEvery(types.GET_DETAIL_MOVIE, detailMovieSaga)
}
