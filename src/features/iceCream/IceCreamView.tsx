import { useState } from 'react'
import { ordered, restocked } from './iceCreamSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numIceCreams = useAppSelector((state) => state.iceCream.numIceCreams)
  const dispatch = useAppDispatch()

  return (
    <main>
      <h2>Number of ice creams - {numIceCreams}</h2>

      <section>
        <p>(Extra reducer implemented for order ice cream, cakes should be affected too) </p>
        <button onClick={() => dispatch(ordered())} disabled={numIceCreams === 0}>Order ice cream</button>
      </section>
      <br />
      <section>
        <input
          // style={{ display: 'block' }}
          type={'number'}
          value={value}
          onChange={e => setValue(parseInt(e.target.value))}
        />
        <br />
        <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
      </section>
    </main>
  )
}

export default IceCreamView
