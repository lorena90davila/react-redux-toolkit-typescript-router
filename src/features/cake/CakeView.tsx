
import { ordered, restocked } from './cakeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const CakeView = () => {
  const numCakes = useAppSelector((state) => state.cake.numCakes)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Number of cakes - {numCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cakes</button>
      <br />
      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  )
}
