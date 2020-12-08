import { HYDRATE } from 'next-redux-wrapper'
import * as types from './types'

const initialState = {
  count: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.val
      }
      if (state.counter.count) {
        nextState.counter.count = state.counter.count
      }
      return nextState
    case types.INCREMENT:
      return {...state, count: action.val + 1}
    case types.DECREMENT:
      return {...state, count: action.val - 1}
    default:
      return state
  }
}