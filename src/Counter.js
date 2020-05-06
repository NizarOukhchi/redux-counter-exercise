import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  return <h1>{counter}</h1>;
};

export default Counter;
