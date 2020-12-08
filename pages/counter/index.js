import ButtonComponent from '../../components/counter/button'
import Result from '../../components/counter/result'

export default function CounterApp(){
  return(
    <>
      <ButtonComponent type="button" name="increment"> + </ButtonComponent>
      <ButtonComponent type="button" name="decrement"> - </ButtonComponent>
      <Result/>
    </>
  )
}