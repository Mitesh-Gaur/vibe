import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementAsync, incrementAsync } from '../store/actions/testActions';

export default function HomePage() {
  return (
    <>
    <div>HomePage</div>

    <Counter />
    </>
  )
}

function Counter() {
  const { value, loading, fulfilled } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAsync());
  };

  const handleDecrement = () => {
    dispatch(decrementAsync());
  };

  return (
    <div>
      <div>Count: {value}</div>
      <div>Loading: {loading.toString()}</div>
      <div>Fulfilled: {fulfilled.toString()}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}