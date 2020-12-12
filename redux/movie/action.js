import * as types from './type'

export const searchMovieByKeyword = (name) => ({
  type: types.SEARCH_MOVIE,
  name
})

export const startSearchMovie = (loading) => ({
  type: types.LOADING_SEARCH,
  loading
})
export const stopSearchMovie = (loading) => ({
  type: types.CANCEL_SEARCH,
  loading
})
export const searchMovieSuccess = (data) => ({
  type: types.SEARCH_MOVIE_SUCCESS,
  data
})
export const searchMovieFailure = (error) => ({
  type: types.SEARCH_MOVIE_FAIL,
  error
})
