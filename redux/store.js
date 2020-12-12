import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import rootReducer from './reducer'
import rootSaga from './saga'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootConfigPersist = {
  key: 'root_config_persist',
  storage,
  whitelist: ['counter', 'movies']
}
const rootReducerPersist = persistReducer(rootConfigPersist, rootReducer)

export const configStore = (loadState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducerPersist,
    loadState,
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}
export const wrapper = createWrapper(configStore, {debug: true})