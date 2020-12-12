import * as types from './type'

const initialState = {
  loadingMovie: null,
  dataMovie: [],
  errorMovie: null
}

export const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING_SEARCH:
      return {
        ...state,
        ...{ loadingMovie: action.loading }
      }
    case types.CANCEL_SEARCH:
      return {
        ...state,
        ...{ loadingMovie: action.loading }
      }
    case types.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        ... { dataMovie: action.data, errorMovie: null }
      }
    case types.SEARCH_MOVIE_FAIL:
      return {
        ...state,
        ... { dataMovie: null, errorMovie: action.error }
      }
    default:
      return state
  }
}