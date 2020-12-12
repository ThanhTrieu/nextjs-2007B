import { createSelector } from 'reselect'

const moviesSelector = state => state.movies

export const loadingSearch = createSelector(
  moviesSelector,
  item => item.loadingMovie
)

export const dataSearchMovies =  createSelector(
  moviesSelector,
  item => item.dataMovie.results
)
export const getTotalPages = createSelector(
  moviesSelector,
  item => item.dataMovie.total_pages
)
export const getTotalResults = createSelector(
  moviesSelector,
  item => item.dataMovie.total_results
)