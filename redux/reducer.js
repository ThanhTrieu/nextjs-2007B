import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configPersistCounter = {
  key: 'counter_persist',
  storage,
  whitelist: ['count']
}

const rootReducer = combineReducers({
  counter: persistReducer(configPersistCounter, counterReducer)
})
export default rootReducer