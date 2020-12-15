import * as types from './type'

const initialState = {
  loadingDetail: null,
  detailMovie: {},
  errorDetailMovie: null
}

export const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_DETAIL_MOVIE:
      return {
        ...state,
        ...{ loadingDetail: action.loading }
      }
    case types.GET_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        ... { detailMovie: action.data, errorDetailMovie: null }
      }
    case types.GET_DETAIL_MOVIE_FAILURE:
      return {
        ...state,
        ... { detailMovie: null, errorDetailMovie: action.error }
      }
    default:
      return state
  }
}