import * as types from './types'

export const incrementNumber = (val) => ({
  type: types.INCREMENT,
  val
})

export const decrementNumber = (val) => ({
  type: types.DECREMENT,
  val
})