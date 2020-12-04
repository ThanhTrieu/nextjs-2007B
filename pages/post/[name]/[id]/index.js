import { useRouter } from 'next/router'

export default function Post() {
  // /post/chi-pheo/1
  const router = useRouter()
  const {name, id} = router.query
  return (
    <>
      <h1> Chi tiet bai viet {name} co id la {id}</h1>
    </>
  )
}