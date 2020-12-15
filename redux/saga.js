import { all, call } from 'redux-saga/effects'
import { watchingSearchMovieSaga as movieSaga } from './movie/saga'
import watchDetailSaga from './detail_movie/saga'

export default function* rootSaga() {
  yield all([
    call(movieSaga),
    call(watchDetailSaga)
  ])
}