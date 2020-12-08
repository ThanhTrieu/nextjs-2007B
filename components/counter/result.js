import { useSelector } from 'react-redux'
export default function Result(){
  const count = useSelector(state => state.counter.count)
  return (
    <>
      <h1> { count } </h1>
    </>
  )
}