
import { ordered, restocked } from './cakeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const CakeView = () => {
  const numCakes = useAppSelector((state) => state.cake.numCakes)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Number of cakes - {numCakes}</h2>
      <button onClick={() => dispatch(ordered())} disabled={numCakes === 0}>Order cakes</button>

      <button onClick={() => dispatch(restocked(3))}>Restock cakes</button>
    </div>
  )
}

export default CakeView
