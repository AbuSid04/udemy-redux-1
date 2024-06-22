import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { counterAction } from '../store/counterSlice';

const Counter = () => {

  const [increamentAmount, setIncreamentAmount] = useState(0)
  const addValue = Number(increamentAmount) || 0

  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const increamentHandler = () => {
    dispatch(counterAction.increament())
  }

  const decreamentHandler = () => {
    dispatch(counterAction.decreament())
  }

  const increaseHandler = () => {
    dispatch(counterAction.increaseByAmount(addValue))
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={decreamentHandler}>Decrement</button>
        <div>
          <input 
            type="text" 
            value={increamentAmount} 
            onChange={(e) => setIncreamentAmount(e.target.value)} 
          />
          <button onClick={increaseHandler}>Increase by Amount</button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
