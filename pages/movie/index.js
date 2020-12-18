import SearchMovie from '../../components/movie/search'
import ListMovie from '../../components/movie/list'
import HeadTags from '../../components/header'

export default function Movies(){
  return (
    <>
      <HeadTags title="Search movies" />
      <SearchMovie/>
      <ListMovie/>
    </>
  )
}