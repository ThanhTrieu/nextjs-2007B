import { createSelector } from 'reselect'

const detailMovieSelector = state => state.detail

export const getLoading = createSelector(
  detailMovieSelector,
  item => item.loadingDetail
)

export const getDataDetail = createSelector(
  detailMovieSelector,
  item => item.detailMovie
)
