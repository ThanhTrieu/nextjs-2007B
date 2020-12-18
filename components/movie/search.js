import { Row, Col, Input } from 'antd'
import { searchMovieByKeyword } from '../../redux/movie/action'
import { useDispatch } from 'react-redux'


const { Search } = Input

export default function SearchMovie() {
  const dispatch = useDispatch()
  const searchFilms = (name) => {
    dispatch(searchMovieByKeyword(name))
  }

  return(
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1 style={{ textAlign: 'center' }}> Tim kiem phim ban yeu thich</h1>
        </Col>
      </Row>
      <Row>
        <Col span={18} offset={3}>
          <Search
            placeholder="Enter name's movie"
            onSearch={(val) => searchFilms(val)}
            enterButton />
        </Col>
      </Row>
    </>
  )
}