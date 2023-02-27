import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
    <section className='sect__one'>
        <p className='sect__one__p'>{count}</p>
        <div className='sect__one__item_one'>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        <input className='sect__one__input' type="text" value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)} />

            <div className='sect__one__item__two'>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
            </div>
    </section>
  )
}

export default Counter
