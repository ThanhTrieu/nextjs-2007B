import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import * as reselect from '../../redux/detail_movie/reselect'
import * as action from '../../redux/detail_movie/action'
import { createStructuredSelector } from 'reselect'
import { Skeleton, Row, Col, Image } from 'antd'

export default function WatchingMovie() {
  const router = useRouter()
  const params  = router.query.movie || []
  const id = params[1]

  const { loading, detailMovie } = useSelector(createStructuredSelector({
    loading: reselect.getLoading,
    detailMovie: reselect.getDataDetail
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getDetailMovie(id))
  }, [id])

  if(loading){
    return (<Skeleton active />)
  }
  return (
    <>
      {detailMovie && (
        <Row>
          <Col span={6}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
            />
            <p style={{ textAlign: 'center' }}>{detailMovie.original_title}</p>
          </Col>
          <Col span={12} style={{ padding: '20px' }}>
            <h1>{detailMovie.title}</h1>
            <p>{detailMovie.overview}</p>
          </Col>
          <Col span={6}>
            <Row>
            { detailMovie.images ? detailMovie.images.backdrops.map((item, index) => (
              <Col key={index} span={24} style={{ padding: '10px 0px' }}>
                <Image src={`https://image.tmdb.org/t/p/w300${item.file_path}`} />
              </Col>
            )) : null }
            </Row>
          </Col>
        </Row>
      )}
    </>
  )
}