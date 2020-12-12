import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { moviesReducer } from './movie/reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configPersistCounter = {
  key: 'counter_persist',
  storage,
  whitelist: ['count']
}
const configPersistMovies = {
  key: 'movies_persist',
  storage,
  whitelist: ['dataMovie']
}

const rootReducer = combineReducers({
  counter: persistReducer(configPersistCounter, counterReducer),
  movies: persistReducer(configPersistMovies, moviesReducer)
})
export default rootReducer