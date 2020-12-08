import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../redux/counter/action'

export default function ButtonComponent (props) {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const clickButton = () => {
    if(props.name === 'increment'){
      dispatch(action.incrementNumber(count))
    } else {
      dispatch(action.decrementNumber(count))
    }
  }
  return (
    <>
      <button onClick={() => clickButton()} type={props.type} name={props.name}>{props.children}</button>
    </>
  )
}