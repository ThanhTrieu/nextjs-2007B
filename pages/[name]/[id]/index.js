import { useRouter } from 'next/router'

export default function DetailMovie(){
  const router = useRouter()
  const { name, id } = router.query

  return(
    <>
      <p>ID phim : {id}</p>
      <p>Slug name: {name}</p>
    </>
  )
}