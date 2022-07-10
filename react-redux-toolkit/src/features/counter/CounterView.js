import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByValue, decrement, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };
  const incrementByValueCounter = () => {
    dispatch(incrementByValue(5));
  };
  const decrementCounter = () => {
    dispatch(decrement());
  };
  const resetCounter = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter View</h1>
      <h3>Count: {count}</h3>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={incrementByValueCounter}>incrementByValue</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default CounterView;
