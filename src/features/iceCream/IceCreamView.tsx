import { useState } from 'react'
import { ordered, restocked } from './iceCreamSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numIceCreams = useAppSelector((state) => state.iceCream.numIceCreams)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h2>Number of ice creams - {numIceCreams}</h2>
      <h3>Extra reducer </h3>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <br />
      <input
        type={'number'}
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}
