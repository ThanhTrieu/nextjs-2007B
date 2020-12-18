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

export const getVideos = createSelector(
  getDataDetail,
  item => {
    if(item.hasOwnProperty('videos')){
      let objVideo = item.videos || {}
      if(objVideo.hasOwnProperty('results')){
        const video = objVideo.results[0] || {}
        if(video.hasOwnProperty('key')){
          return video['key']
        }
      }
    }
    return null
  }
)