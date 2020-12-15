//import { useRouter } from 'next/router'
import { Row, Col, Image } from 'antd'

export default function DetailMovie({ data }){
  // const router = useRouter()
  // const { name, id } = router.query
  return(
    <>
      <Row>
        <Col span={6}>
          <Image
            src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          />
          <p style={{ textAlign: 'center' }}>{data.original_title}</p>
        </Col>
        <Col span={12} style={{ padding: '20px' }}>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
        </Col>
        <Col span={6}>
          <Row>
          {data.images.backdrops.map((item, index) => (
            <Col key={index} span={24} style={{ padding: '10px 0px' }}>
              <Image src={`https://image.tmdb.org/t/p/w300${item.file_path}`} />
            </Col>
          ))}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  // lay tham so
  const id = query.id
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,null`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}