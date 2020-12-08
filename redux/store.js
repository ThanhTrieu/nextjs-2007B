import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import rootReducer from './reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootConfigPersist = {
  key: 'root_config_persist',
  storage,
  whitelist: ['counter']
}
const rootReducerPersist = persistReducer(rootConfigPersist, rootReducer)

export const configStore = (loadState = {}) => {
  const store = createStore(
    rootReducerPersist,
    loadState,
    applyMiddleware(
      logger
    )
  )
  return store
}
export const wrapper = createWrapper(configStore, {debug: true})