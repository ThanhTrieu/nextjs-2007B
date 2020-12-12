import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './action'
import * as types from './type'
import * as api from '../services/api'

function* searchMovieSaga({ name }){
  try {
    yield put(actions.startSearchMovie(true))
    const response = yield call(api.searchMovieByKeyword, name)
    if(response){
      yield put(actions.searchMovieSuccess(response))
    } else {
      yield put(actions.searchMovieFailure({
        code: 404,
        message: 'Movie not found'
      }))
    }
  } catch (error) {
    yield put(actions.searchMovieFailure(error))
  } finally {
    yield put(actions.stopSearchMovie(false))
  }
}

export function* watchingSearchMovieSaga() {
  yield takeLatest(types.SEARCH_MOVIE, searchMovieSaga)
}